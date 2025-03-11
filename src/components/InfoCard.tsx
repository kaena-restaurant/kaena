import React, { useState } from 'react';
import { Heart, ExternalLink, ChevronUp, ChevronDown, Instagram } from 'lucide-react';

const InfoCard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const toggleSave = () => {
    setIsSaved(!isSaved);
  };

  return (
    <div className={`fixed md:right-8 md:top-32 transition-all duration-300 z-50 bg-white rounded-lg shadow-lg
      ${isCollapsed ? 'left-4 top-4 w-auto' : 'right-4 left-4 md:left-auto top-4 md:top-32 w-auto md:w-72'}`}
    >
      {/* Mobile collapse button */}
      <button
        className="md:hidden w-full py-2 px-4 flex items-center justify-between text-gray-700 hover:bg-gray-50 rounded-lg"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <span className="font-semibold">Restaurant Info</span>
        {isCollapsed ? (
          <ChevronDown className="w-5 h-5 ml-2" />
        ) : (
          <ChevronUp className="w-5 h-5 ml-2" />
        )}
      </button>

      <div className={`${isCollapsed ? 'hidden' : 'block'} md:block p-4 space-y-4`}>
        <div className="flex gap-4">
          <img 
            src="/lovable-uploads/2690d626-944e-4fd2-9dc3-951c7a9e5d26.png" 
            alt="Kaena Restaurant & Bar" 
            className="w-16 h-16 rounded-lg object-cover"
          />
          <div>
            <h2 className="font-semibold text-lg">Kaena Restaurant & Bar</h2>
            <p className="text-gray-600">Dinner, International, New Zealand</p>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4">📍</span>
            <a href="#" className="text-gray-600 hover:underline">Arorangi, Rarotonga</a>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="w-4 h-4">📞</span>
            <a href="tel:68225433" className="text-gray-600 hover:underline">68225433</a>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="w-4 h-4">🔗</span>
            <a href="#" className="text-gray-600 hover:underline">Website</a>
          </div>
        </div>
        
        <div className="space-y-2">
          <a 
            href="https://www.facebook.com/profile.php?id=61573614456057"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-blue-600 text-white text-center py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            Kaena Restaurant & Takeaway <ExternalLink className="w-4 h-4" />
          </a>
          
          <a 
            href="https://www.instagram.com/kaenacookisland/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white text-center py-2 rounded-md hover:opacity-90 transition-colors flex items-center justify-center gap-2"
          >
            Visit Instagram <Instagram className="w-4 h-4" />
          </a>
          
          <button 
            onClick={toggleSave}
            className={`block w-full border-2 py-2 rounded-md transition-colors flex items-center justify-center gap-2
              ${isSaved ? 
                'border-red-500 text-red-500 hover:bg-red-50' : 
                'border-black text-black hover:bg-gray-100'
              }`}
          >
            {isSaved ? 'Saved' : 'Save'} <Heart className={`w-4 h-4 ${isSaved ? 'fill-red-500' : ''}`} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
