import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Clock, Package, ChefHat, Bike } from 'lucide-react';

const OrderStatus = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await fetch(`/api/orders/${id}`);
        if (!response.ok) {
          throw new Error('Order not found');
        }
        const data = await response.json();
        setOrder(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching order:", err);
        setError("Failed to load order details.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrder();
    const interval = setInterval(fetchOrder, 5000); // Poll every 5 seconds

    return () => clearInterval(interval);
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center font-sans">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-orange-500 border-t-transparent"></div>
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center font-sans p-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Oops!</h2>
        <p className="text-gray-500 mb-6">{error}</p>
        <button onClick={() => navigate('/customer-dashboard')} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl">
          Back to Dashboard
        </button>
      </div>
    );
  }

  const steps = [
    { id: 'Placed', icon: Package, label: 'Order Placed' },
    { id: 'Preparing', icon: ChefHat, label: 'Preparing' },
    { id: 'Delivering', icon: Bike, label: 'On the Way' },
    { id: 'Delivered', icon: CheckCircle2, label: 'Delivered' }
  ];

  const currentStepIndex = steps.findIndex(s => s.id === order.status);
  const activeIndex = currentStepIndex >= 0 ? currentStepIndex : 0;

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-20">
      <div className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
        <div className="max-w-3xl mx-auto px-4 h-16 flex items-center justify-between">
          <button onClick={() => navigate('/customer-dashboard')} className="flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors font-medium">
            <ArrowLeft className="w-5 h-5" />
            Dashboard
          </button>
          <span className="font-bold text-gray-900">Order #{order.id}</span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 mt-8 space-y-6">
        
        {/* Estimated Time Card */}
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-lg p-8 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-20">
            <Clock className="w-32 h-32" />
          </div>
          <div className="relative z-10">
            <h2 className="text-orange-100 font-medium mb-2 text-lg">Estimated Arrival</h2>
            <div className="text-5xl font-bold mb-2">
              {order.status === 'Delivered' ? 'Arrived' : `${order.estimated_time} min`}
            </div>
            <p className="text-orange-100">
              {order.status === 'Delivered' ? 'Hope you enjoy your meal!' : 'Food is being prepared with care.'}
            </p>
          </div>
        </div>

        {/* Status Tracker */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-8">Track Order</h3>
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-6 left-6 right-6 h-1 bg-gray-100 rounded-full hidden sm:block">
              <div 
                className="absolute top-0 left-0 h-full bg-orange-500 rounded-full transition-all duration-500"
                style={{ width: `${(activeIndex / (Math.max(1, steps.length - 1))) * 100}%` }}
              ></div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between relative z-10 gap-6 sm:gap-0">
              {steps.map((step, index) => {
                const isCompleted = index <= activeIndex;
                const isCurrent = index === activeIndex;
                const Icon = step.icon;

                return (
                  <div key={step.id} className="flex sm:flex-col items-center gap-4 sm:gap-2 relative">
                    {/* Vertical connecting line for mobile */}
                    {index !== steps.length - 1 && (
                      <div className="absolute left-6 top-12 bottom-[-24px] w-0.5 bg-gray-100 sm:hidden">
                        <div 
                          className="absolute top-0 left-0 w-full bg-orange-500 transition-all duration-500"
                          style={{ height: isCompleted && index < activeIndex ? '100%' : '0%' }}
                        ></div>
                      </div>
                    )}
                    
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                      isCompleted ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30' : 'bg-gray-100 text-gray-400'
                    } ${isCurrent ? 'ring-4 ring-orange-100' : ''}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="sm:text-center z-10 bg-white sm:bg-transparent pr-4 sm:pr-0">
                      <span className={`font-bold block ${isCompleted ? 'text-gray-900' : 'text-gray-400'}`}>
                        {step.label}
                      </span>
                      {isCurrent && (
                        <span className="text-xs font-medium text-orange-500 block sm:hidden">Current Status</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Order Details */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-xl font-bold text-gray-900">Order Details</h3>
          </div>
          {order.items && order.items.length > 0 ? (
            <div className="p-6 space-y-4">
              {order.items.map(item => (
                <div key={item.id} className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <span className="font-semibold text-gray-900 w-6">{item.quantity}x</span>
                    <span className="text-gray-700">Item #{item.item_id}</span>
                  </div>
                  <span className="font-medium text-gray-900">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
          ) : (
             <div className="p-6 text-gray-500">
               No item details available.
             </div>
          )}
          
          <div className="p-6 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
            <span className="text-lg font-bold text-gray-900">Total</span>
            <span className="text-2xl font-bold text-orange-500">${order.total.toFixed(2)}</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OrderStatus;
