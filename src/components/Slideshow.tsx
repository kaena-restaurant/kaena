
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/lovable-uploads/5eb20578-cf19-4976-aa53-294c8637f3ec.png", // Fish and chips with sauce
  "/lovable-uploads/2095eb42-ca4b-4439-9c24-3d99190d3d13.png", // Beef with fried egg
  "/lovable-uploads/5410b142-0334-4d95-b07d-12f1e0014d39.png", // Spring rolls
  "/lovable-uploads/f5246f22-2f64-4adc-84e8-72cbf5b45429.png"  // Milkshakes
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
