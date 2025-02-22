
import Slideshow from "../components/Slideshow";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url("/lovable-uploads/91349a08-e66b-4f8e-9814-9a2a21125d42.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(1.2) contrast(1.1)' // Added brightness and contrast
        }}
      />
      
      <div className="relative z-10">
        <header className="bg-black/95 text-white py-4 backdrop-blur-sm">
          <nav className="max-w-6xl mx-auto px-4">
            <ul className="flex justify-end space-x-6">
              <li><a href="#features" className="hover:text-gray-300">Features</a></li>
              <li><a href="#contact" className="hover:text-gray-300">Contact Us</a></li>
            </ul>
          </nav>
        </header>
        
        <div className="text-center py-8 bg-white/70 backdrop-blur-sm">
          <h1 className="text-5xl font-['Dancing_Script'] mb-2 text-gray-900">Kaena</h1>
          <h2 className="text-xl font-light text-gray-800">Restaurant, Takeaway & Bar</h2>
        </div>

        <Slideshow />

        <div className="max-w-4xl mx-auto px-4 py-12 text-center mt-8 bg-white/70 backdrop-blur-sm">
          <h3 className="text-2xl font-['Oswald'] text-gray-900 mb-4">
            Specialising in Asian Cuisine
          </h3>
          <p className="text-xl text-gray-800 italic">
            "Grilled & Sizzling Style"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
