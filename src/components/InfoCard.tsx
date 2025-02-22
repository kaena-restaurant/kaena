
import React from 'react';
import { Heart, ExternalLink } from 'lucide-react';

const InfoCard = () => {
  return (
    <div className="fixed right-8 top-32 w-80 bg-white rounded-lg shadow-lg p-4 space-y-4">
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
          className="block w-full border-2 border-black text-black py-2 rounded-md hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
        >
          Saved <Heart className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default InfoCard;
