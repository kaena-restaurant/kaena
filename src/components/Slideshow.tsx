
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/lovable-uploads/108dd990-c775-4795-bc21-c1389354ac39.png", // Egg with rice
  "/lovable-uploads/fed698a1-6c75-4397-8a68-ca3c2679007d.png", // Chicken with rice
  "/lovable-uploads/0f6074e9-81c8-4616-b20b-f0042281923f.png", // Breaded shrimp
  "/lovable-uploads/d7aa29e0-3d8f-46c4-a487-2199c8274e36.png", // Onion rings
  "/lovable-uploads/0c6a3288-a9b9-43b5-bd5d-7567e7be01fd.png", // BBQ ribs
  "/lovable-uploads/b10605d1-f64a-4971-975d-f48192928074.png", // Steamed fish
  "/lovable-uploads/95fed8a6-7f0b-43dc-82b0-42601492297c.png", // Grilled chicken with rice
  "/lovable-uploads/dd2ee790-a00a-4fae-842c-9010d80256e3.png", // Pasta with garlic bread
  "/lovable-uploads/3322449c-0a68-4fa2-a55f-a17d5641ed43.png"  // Chocolate milkshake
];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="flex justify-center w-full">
      <div className="relative w-[80%] max-w-4xl h-[60vh] overflow-hidden">
        {images.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            {isLoading && currentSlide === index && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse" />
            )}
            <img
              src={img}
              alt={`Kaena Restaurant Food ${index + 1}`}
              className="w-full h-full object-cover"
              onLoad={handleImageLoad}
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-white transition-transform group-hover:scale-110" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-white transition-transform group-hover:scale-110" />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-white w-4"
                  : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
