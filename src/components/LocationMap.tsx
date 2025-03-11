
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const LocationMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);
  const marker = useRef<L.Marker | null>(null);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    // Initialize map with exact coordinates for Kaena Restaurant & Bar on the main road in Arorangi, Rarotonga
    const mainRoadCoordinates = [-21.2506, -159.8336]; // Updated coordinates for exact main road location
    map.current = L.map(mapContainer.current).setView(mainRoadCoordinates, 17); // Increased zoom for better visibility

    // Add OpenStreetMap tiles (free)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map.current);

    // Create a custom icon for the marker
    const customIcon = L.icon({
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    // Add marker for restaurant location
    marker.current = L.marker(mainRoadCoordinates, { icon: customIcon })
      .addTo(map.current)
      .bindPopup('<strong>Kaena Restaurant & Bar</strong><br>Main Road Arorangi')
      .openPopup();

    // Add zoom controls
    map.current.zoomControl.setPosition('topright');

    // Make map responsive to container size changes
    const resizeObserver = new ResizeObserver(() => {
      if (map.current) {
        map.current.invalidateSize();
      }
    });
    
    if (mapContainer.current) {
      resizeObserver.observe(mapContainer.current);
    }

    return () => {
      if (mapContainer.current) {
        resizeObserver.unobserve(mapContainer.current);
      }
      map.current?.remove();
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default LocationMap;
