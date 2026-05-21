import React from 'react';
import { ShoppingBag, Search, Bell, Menu, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import RestaurantCard from '../components/RestaurantCard';
import { useCart } from '../context/CartContext';

const mockRestaurants = [
  {
    id: 1,
    name: "Burger Haven",
    category: "American",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop",
    rating: 4.8,
    deliveryTime: "25-35"
  },
  {
    id: 2,
    name: "Sushi Master",
    category: "Japanese",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2070&auto=format&fit=crop",
    rating: 4.9,
    deliveryTime: "30-45"
  },
  {
    id: 3,
    name: "Pizza Paradiso",
    category: "Italian",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop",
    rating: 4.6,
    deliveryTime: "20-30"
  },
  {
    id: 4,
    name: "Spicy Wok",
    category: "Chinese",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=2072&auto=format&fit=crop",
    rating: 4.5,
    deliveryTime: "35-50"
  },
  {
    id: 5,
    name: "Taco Fiesta",
    category: "Mexican",
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=1922&auto=format&fit=crop",
    rating: 4.7,
    deliveryTime: "15-25"
  },
  {
    id: 6,
    name: "Green Bowl",
    category: "Healthy",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop",
    rating: 4.8,
    deliveryTime: "25-40"
  }
];

const CustomerDashboard = () => {
  const navigate = useNavigate();
  const { cartCount, setIsCartOpen } = useCart();

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div 
                className="bg-orange-500 text-white p-1.5 rounded-lg relative cursor-pointer hover:bg-orange-600 transition-colors"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-white text-orange-600 text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-orange-500 shadow-sm">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent hidden sm:block">
                CraveBite
              </span>
            </div>
            
            <div className="flex-1 max-w-xl mx-8 hidden md:block">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors sm:text-sm"
                  placeholder="Search for restaurants, cuisines, or dishes..."
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="text-gray-500 hover:text-orange-500 transition-colors p-2">
                <Bell className="w-5 h-5" />
              </button>
              <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-semibold border border-orange-200 cursor-pointer">
                <User className="w-4 h-4" />
              </div>
              <button 
                onClick={handleLogout}
                className="text-sm font-medium text-gray-600 hover:text-red-500 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Browse Local Flavors</h1>
          <p className="text-gray-600">Discover top-rated restaurants and hidden gems near you.</p>
        </div>

        {/* Restaurant Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} {...restaurant} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default CustomerDashboard;
