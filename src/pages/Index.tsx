
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
          filter: 'brightness(1.4) contrast(1.2)' // Increased brightness and contrast
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
        
        <div className="text-center py-8 bg-white/60 backdrop-blur-sm">
          <h1 className="text-5xl font-['Dancing_Script'] mb-2 text-gray-900">Kaena</h1>
          <h2 className="text-xl font-light text-gray-800">Restaurant, Takeaway & Bar</h2>
        </div>

        <Slideshow />

        <div className="max-w-4xl mx-auto px-4 py-12 text-center mt-8 bg-white/60 backdrop-blur-sm">
          <h3 className="text-2xl font-['Oswald'] text-gray-900 mb-4">
            Specialising in Asian Cuisine
          </h3>
          <p className="text-xl text-gray-800 italic">
            "Grilled & Sizzling Style"
          </p>
        </div>

        {/* What We Offer Section */}
        <section id="features" className="py-16 bg-white/60 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-['Oswald'] text-green-700 mb-12">What We Offer</h2>
            
            <div className="grid gap-12 md:gap-8 md:grid-cols-3">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-green-600">Fresh Seafood</h3>
                <p className="text-gray-700">Enjoy the freshest catch of the day, prepared to perfection.</p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-green-600">Exotic Cocktails</h3>
                <p className="text-gray-700">Try our handcrafted cocktails made with tropical flavors.</p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-green-600">Takeaway Options</h3>
                <p className="text-gray-700">Order your favorite dishes to enjoy at home or on the beach.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section id="contact" className="py-16 bg-white/60 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-['Oswald'] text-green-700 mb-12">Contact Us</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl text-green-600 mb-2">Booking / Enquiries</h3>
              </div>
              
              <div className="space-y-3">
                <p className="text-gray-700">
                  Email: <a href="mailto:kaenarestaurant@gmail.com" className="text-blue-600 hover:underline">kaenarestaurant@gmail.com</a>
                </p>
                <p className="text-gray-700">
                  Phone: <a href="tel:+682-25433" className="text-blue-600 hover:underline">+682-25433</a>
                </p>
                <p className="text-gray-700">
                  Facebook: <a href="https://facebook.com/Kaena-Resaturant-Takeaway" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Kaena Resaturant & Takeaway</a>
                </p>
              </div>
              
              <div className="mt-8">
                <p className="text-gray-700">
                  Address: Near Rarotongan Beach Resort, Arorangi, Rarotonga, Cook Islands
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-green-700 text-white py-4">
          <div className="text-center">
            <p>© 2025 Kaena Restaurant & Takeaway. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
