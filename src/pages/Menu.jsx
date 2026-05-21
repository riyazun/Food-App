import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';

const mockMenus = {
  1: [
    { id: 101, name: "Classic Cheeseburger", description: "Juicy beef patty with melted cheddar, lettuce, tomato, and our signature sauce.", price: 8.99, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80" },
    { id: 102, name: "Double Bacon Smash", description: "Two smashed patties, crispy bacon, caramelized onions, and house pickles.", price: 12.99, image: "https://images.unsplash.com/photo-1594212202815-b96edab2e4b5?auto=format&fit=crop&w=800&q=80" },
    { id: 103, name: "Truffle Fries", description: "Crispy fries tossed in truffle oil, parmesan, and fresh parsley.", price: 5.99, image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=800&q=80" }
  ],
  2: [
    { id: 201, name: "Spicy Tuna Roll", description: "Fresh tuna, spicy mayo, cucumber, topped with sesame seeds.", price: 9.50, image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=800&q=80" },
    { id: 202, name: "Dragon Roll", description: "Eel and cucumber topped with avocado and sweet eel sauce.", price: 14.00, image: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80" },
  ],
  default: [
    { id: 901, name: "Margherita Pizza", description: "Fresh tomatoes, mozzarella, basil, and extra virgin olive oil.", price: 14.99, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80" },
    { id: 902, name: "Caesar Salad", description: "Crisp romaine, parmesan, croutons, and house-made Caesar dressing.", price: 10.99, image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=800&q=80" },
  ]
};

const Menu = () => {
  const { id } = useParams();
  const menuItems = mockMenus[id] || mockMenus.default;
  const { addToCart, cartCount, setIsCartOpen } = useCart();

  return (
    <div className="min-h-screen bg-gray-50 pb-20 font-sans">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/customer-dashboard" className="flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors font-medium">
            <ArrowLeft className="w-5 h-5" />
            Back to Restaurants
          </Link>
          
          <div 
            className="relative cursor-pointer hover:text-orange-500 transition-colors text-gray-700"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Menu Header Area */}
      <div className="bg-gray-900 text-white py-16 px-4 mb-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Menu</h1>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">Discover our delicious offerings prepared fresh daily with the finest ingredients.</p>
        </div>
      </div>

      {/* Menu Grid */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {menuItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl p-4 flex gap-5 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow group">
              <div className="w-32 h-32 rounded-xl overflow-hidden shrink-0 shadow-sm">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-gray-900 text-lg line-clamp-1">{item.name}</h3>
                  <span className="font-bold text-orange-500 shrink-0 ml-2">${item.price.toFixed(2)}</span>
                </div>
                <p className="text-gray-500 text-sm line-clamp-2 mb-4 flex-1 leading-relaxed">{item.description}</p>
                <button 
                  onClick={() => addToCart(item)}
                  className="self-start flex items-center gap-2 bg-orange-50 hover:bg-orange-500 text-orange-600 hover:text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-colors mt-auto"
                >
                  <Plus className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
