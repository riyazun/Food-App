import React, { useState } from 'react';
import { Menu, X, ShoppingBag, Truck, ShieldCheck, Star, ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <div className="bg-orange-500 text-white p-2 rounded-xl">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                CraveBite
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-600 hover:text-orange-500 font-medium transition-colors">Home</a>
              <a href="#offers" className="text-gray-600 hover:text-orange-500 font-medium transition-colors">Offers</a>
              <Link to="/login" className="text-gray-600 hover:text-orange-500 font-medium transition-colors">Restaurants</Link>
              <Link to="/login" className="text-gray-900 hover:text-orange-600 font-medium transition-colors">
                Login
              </Link>
              <Link to="/register" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-orange-500/30 flex items-center justify-center">
                Sign Up
              </Link>
            </div>

            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-4 space-y-1 shadow-lg absolute w-full">
            <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50">Home</a>
            <a href="#offers" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50">Offers</a>
            <Link to="/login" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50">Restaurants</Link>
            <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-3">
              <Link to="/login" className="w-full text-center text-gray-900 font-medium py-2 hover:bg-gray-50 rounded-lg block">Login</Link>
              <Link to="/register" className="w-full text-center bg-orange-500 text-white py-2.5 rounded-lg font-medium shadow-md block">Sign Up</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-full h-full overflow-hidden">
            {/* Background decorative blobs */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100/50 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-100/40 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-600 font-medium text-sm mb-6 border border-orange-200">
                <Star className="w-4 h-4 fill-current" />
                <span>#1 Food Delivery App</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-[1.1]">
                Delicious food, <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
                  delivered fast
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                Discover the best local restaurants and get your favorite meals delivered fresh and hot to your doorstep in minutes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link to="/login" className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-xl shadow-orange-500/30 group">
                  Explore Menu
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <div className="relative flex-grow max-w-sm">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <MapPin className="w-5 h-5 text-gray-400" />
                  </div>
                  <input 
                    type="text" 
                    className="block w-full pl-11 pr-4 py-4 rounded-full border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none shadow-sm text-gray-900 placeholder-gray-400 font-medium"
                    placeholder="Enter your delivery address"
                  />
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-sm font-medium text-gray-500">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map((i) => (
                    <img key={i} className="w-10 h-10 rounded-full border-2 border-white object-cover" src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                  ))}
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center text-yellow-500">
                    <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
                  </div>
                  <span>Trusted by 50K+ foodies</span>
                </div>
              </div>
            </div>
            
            <div className="relative lg:h-[600px] flex justify-center items-center mt-8 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-400 to-yellow-300 rounded-[3rem] rotate-3 opacity-20 blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1000&auto=format&fit=crop" 
                alt="Delicious Burger" 
                className="relative z-10 w-full max-w-lg rounded-[2.5rem] shadow-2xl border-4 border-white transform hover:-translate-y-2 transition-transform duration-500 object-cover aspect-[4/5]"
              />
              
              {/* Floating elements */}
              <div className="absolute -left-4 lg:-left-8 top-1/4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 z-20 flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                  <Truck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Delivery Time</p>
                  <p className="text-sm font-bold text-gray-900">15-30 Mins</p>
                </div>
              </div>
              
              <div className="absolute -right-2 lg:-right-4 bottom-1/4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 z-20 flex items-center gap-4 animate-bounce" style={{ animationDuration: '4s' }}>
                <div className="bg-orange-100 p-2 rounded-full text-orange-600">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Top Quality</p>
                  <p className="text-sm font-bold text-gray-900">100% Guaranteed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="offers" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose CraveBite?</h2>
            <p className="text-lg text-gray-600">We don't just deliver food, we deliver an exceptional culinary experience right to your door.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="w-16 h-16 bg-orange-100 text-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lightning Fast Delivery</h3>
              <p className="text-gray-600 leading-relaxed">Our advanced routing algorithm ensures your food arrives piping hot, typically within 30 minutes of ordering.</p>
            </div>
            
            <div className="bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="w-16 h-16 bg-orange-100 text-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Trusted Restaurants</h3>
              <p className="text-gray-600 leading-relaxed">We carefully vet all our partner restaurants to ensure highest hygiene standards and premium food quality.</p>
            </div>
            
            <div className="bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="w-16 h-16 bg-orange-100 text-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Exclusive Offers</h3>
              <p className="text-gray-600 leading-relaxed">Enjoy daily discounts, free delivery deals, and earn loyalty points on every single order you place.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-orange-500 text-white p-2 rounded-xl">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <span className="text-2xl font-bold text-white">
                  CraveBite
                </span>
              </div>
              <p className="text-gray-400 mb-6 max-w-xs">
                Making your tummy happy with the best food delivered fast and fresh.
              </p>
              <div className="flex space-x-4">
                {/* Social placeholders */}
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors cursor-pointer"><span className="font-bold">f</span></div>
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors cursor-pointer"><span className="font-bold">x</span></div>
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors cursor-pointer"><span className="font-bold">in</span></div>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Company</h4>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-orange-500 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Support</h4>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Safety Center</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Get the App</h4>
              <p className="text-gray-400 mb-4">Order faster and easier with our mobile app.</p>
              <div className="space-y-3">
                <button className="w-full bg-gray-800 hover:bg-gray-700 text-white rounded-xl px-4 py-3 flex items-center gap-3 transition-colors">
                  <div className="text-2xl">🍎</div>
                  <div className="text-left">
                    <div className="text-[10px] uppercase tracking-wider text-gray-400">Download on the</div>
                    <div className="font-semibold text-sm">App Store</div>
                  </div>
                </button>
                <button className="w-full bg-gray-800 hover:bg-gray-700 text-white rounded-xl px-4 py-3 flex items-center gap-3 transition-colors">
                  <div className="text-2xl">▶️</div>
                  <div className="text-left">
                    <div className="text-[10px] uppercase tracking-wider text-gray-400">GET IT ON</div>
                    <div className="font-semibold text-sm">Google Play</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} CraveBite. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Pricing</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
