
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const LocationMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const marker = useRef<mapboxgl.Marker | null>(null);
  const [token, setToken] = useState('');
  const [isMapInitialized, setIsMapInitialized] = useState(false);

  useEffect(() => {
    if (!mapContainer.current || !token || isMapInitialized) return;

    try {
      // Initialize map
      mapboxgl.accessToken = token;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [-159.8297, -21.2497], // Coordinates for Arorangi, Rarotonga
        zoom: 15
      });

      // Add marker for restaurant location
      marker.current = new mapboxgl.Marker({
        color: "#FF0000"
      })
        .setLngLat([-159.8297, -21.2497])
        .addTo(map.current);

      // Add navigation controls
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

      setIsMapInitialized(true);

      return () => {
        map.current?.remove();
      };
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  }, [token, isMapInitialized]);

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsMapInitialized(false); // Reset to allow re-initialization with new token
  };

  return (
    <div className="space-y-4">
      {!isMapInitialized && (
        <form onSubmit={handleTokenSubmit} className="mb-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              placeholder="Enter your Mapbox public token"
              className="flex-1 px-4 py-2 border rounded"
            />
            <button 
              type="submit"
              className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800"
            >
              Load Map
            </button>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            To get your Mapbox public token, visit <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">mapbox.com</a> and find it in the Tokens section of your dashboard.
          </p>
        </form>
      )}
      <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
        <div ref={mapContainer} className="absolute inset-0" />
      </div>
    </div>
  );
};

export default LocationMap;
