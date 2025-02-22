
import React, { useState } from 'react';
import { Heart, ExternalLink, ChevronUp, ChevronDown } from 'lucide-react';

const InfoCard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const toggleSave = () => {
    setIsSaved(!isSaved);
  };

  return (
    <div className={`fixed md:right-8 md:top-32 transition-all duration-300 z-50 bg-white rounded-lg shadow-lg
      ${isCollapsed ? 'left-4 top-4 w-auto' : 'right-8 top-32 w-64'} 
      md:w-72`}
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
            src="/lovable-uploads/c339795b-e209-4580-a8d3-ef4dd65cec29.png" 
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
            href="https://www.facebook.com/profile.php?id=100054537036984#"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-black text-white text-center py-2 rounded-md hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
          >
            Visit site <ExternalLink className="w-4 h-4" />
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
