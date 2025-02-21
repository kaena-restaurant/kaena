
import Slideshow from "../components/Slideshow";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-black/90 text-white py-4">
        <nav className="max-w-6xl mx-auto px-4">
          <ul className="flex justify-end space-x-6">
            <li><a href="#features" className="hover:text-gray-300">Features</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contact Us</a></li>
          </ul>
        </nav>
      </header>
      
      <div className="text-center py-8">
        <h1 className="text-5xl font-['Dancing_Script'] mb-2">Kaena</h1>
        <h2 className="text-xl font-light text-gray-600">Restaurant, Takeaway & Bar</h2>
      </div>

      <Slideshow />

      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h3 className="text-2xl font-['Oswald'] text-gray-800 mb-4">
          Specialising in Asian Cuisine
        </h3>
        <p className="text-xl text-gray-600 italic">
          "Grilled & Sizzling Style"
        </p>
      </div>
    </div>
  );
};

export default Index;
