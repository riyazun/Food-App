import React from 'react';
import { Star, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const RestaurantCard = ({ id, name, category, image, rating, deliveryTime }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-semibold text-gray-800 shadow-sm">
          {category}
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-1">{name}</h3>
          <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-md shrink-0">
            <Star className="w-4 h-4 text-green-600 fill-current" />
            <span className="text-sm font-bold text-green-700">{rating}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4 text-gray-500 text-sm mb-5">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span>{deliveryTime} mins</span>
          </div>
        </div>
        
        <Link to={`/restaurant/${id}`} className="w-full py-2.5 bg-orange-50 hover:bg-orange-500 text-orange-600 hover:text-white font-semibold rounded-xl transition-colors duration-300 flex items-center justify-center gap-2">
          View Menu
        </Link>
      </div>
    </div>
  );
};

export default RestaurantCard;
