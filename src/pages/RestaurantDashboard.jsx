import React from 'react';
import { Store, BarChart3, Settings, MenuSquare, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RestaurantDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row font-sans text-gray-900">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-white border-r border-gray-100 flex-shrink-0 flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="bg-gray-900 text-white p-1.5 rounded-lg">
              <Store className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold text-gray-900">Partner Portal</span>
          </div>
        </div>
        
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 bg-orange-50 text-orange-600 rounded-xl font-medium transition-colors">
            <BarChart3 className="w-5 h-5" />
            Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-xl font-medium transition-colors">
            <MenuSquare className="w-5 h-5" />
            Menu Management
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-xl font-medium transition-colors">
            <Settings className="w-5 h-5" />
            Restaurant Settings
          </a>
        </nav>

        <div className="p-4 border-t border-gray-100">
          <button 
            onClick={handleLogout}
            className="w-full flex justify-center items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors"
          >
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6">
          <h1 className="text-xl font-bold text-gray-800 hidden sm:block">Manage Your Business</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500 font-medium bg-green-50 text-green-700 px-2.5 py-1 rounded-full border border-green-200 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Accepting Orders
            </span>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6">
          {/* Skeleton Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
                <div className="h-4 w-1/2 bg-gray-100 rounded mb-4 animate-pulse"></div>
                <div className="flex justify-between items-end">
                  <div className="h-8 w-24 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-8 w-8 bg-gray-50 rounded-full animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-gray-900">Recent Orders</h2>
              <button className="text-sm font-medium text-orange-600 hover:text-orange-700 flex items-center gap-1">
                View all <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-gray-50 bg-gray-50/50">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg animate-pulse"></div>
                    <div>
                      <div className="h-4 w-32 bg-gray-200 rounded mb-2 animate-pulse"></div>
                      <div className="h-3 w-20 bg-gray-100 rounded animate-pulse"></div>
                    </div>
                  </div>
                  <div className="h-8 w-24 bg-orange-100 rounded-full animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RestaurantDashboard;
