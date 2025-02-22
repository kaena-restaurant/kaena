import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/lovable-uploads/01b16bcf-c064-4322-9849-afa9070a83c4.png", // Grilled chicken with egg
  "/lovable-uploads/d39b5a7f-f8c4-41fd-a913-bead76849007.png", // Breaded shrimp with sauce
  "/lovable-uploads/8f594b8a-fa3e-432e-b489-fbf0e3d45918.png", // Steamed fish
  "/lovable-uploads/0813d115-3a53-4612-9468-7782cfb69b39.png", // BBQ chicken with yellow rice
  "/lovable-uploads/6e9e6392-5a89-4212-bc01-43f25dc3e713.png", // Fried chicken with rice
  "/lovable-uploads/c53436d1-cdbe-4464-bb56-b9adfed25b24.png", // Onion rings
  "/lovable-uploads/d7f4f993-3b76-4d94-bc4a-899a908d1ea2.png", // BBQ ribs with mashed potatoes
  "/lovable-uploads/42df16b2-4b67-4662-b669-da41ff89c965.png", // Fettuccine alfredo
  "/lovable-uploads/981a8194-b751-49e9-92f9-f623c305235b.png"  // Chocolate milkshake
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
    <div className="flex justify-center w-full py-8">
      <div className="relative w-[90%] max-w-5xl aspect-[16/9] overflow-hidden rounded-lg shadow-xl">
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
              className="w-full h-full object-contain"
              onLoad={handleImageLoad}
            />
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-all duration-300 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-white transition-transform group-hover:scale-110" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-all duration-300 group"
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
