
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/lovable-uploads/3b538f6c-340a-4609-82bf-7da4bbc9ab76.png", // BBQ ribs with mashed potatoes
  "/lovable-uploads/41e0117a-ae62-43d7-a48a-726da35c8309.png", // Fettuccine with garlic bread
  "/lovable-uploads/43a6e1a8-6b5f-496f-b424-cb52af9ea70b.png", // Onion rings with dip
  "/lovable-uploads/57e877e2-6e94-4c0e-96e2-417193e8a7a9.png", // Fried chicken with rice
  "/lovable-uploads/367966ba-fb10-4410-839d-696a9103d32f.png", // Breaded shrimp with dip
  "/lovable-uploads/ae8a36f7-1aee-4f47-9a1a-3b09cfa76b24.png", // Grilled pineapple with fried egg
  "/lovable-uploads/7628f0f0-1d2d-4036-af92-c77ebf9e3308.png", // BBQ chicken with yellow rice
  "/lovable-uploads/a56f8c31-93c5-497f-af96-6b6b0570c3d0.png", // Steamed fish with garnish
  "/lovable-uploads/b79072b7-ba7a-49d3-b8ba-ca0b3a3e7494.png"  // Chocolate milkshake
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
