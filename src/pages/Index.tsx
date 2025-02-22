
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
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="relative z-10">
        <div className="text-center py-8 bg-white/80 backdrop-blur-sm">
          <h1 className="text-5xl font-['Dancing_Script'] mb-2 text-gray-900">Kaena</h1>
          <h2 className="text-xl font-light text-gray-800">Restaurant, Takeaway & Bar</h2>
        </div>

        <Slideshow />

        <div className="max-w-4xl mx-auto px-4 py-12 text-center mt-8 bg-white/80 backdrop-blur-sm">
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
