import Slideshow from "../components/Slideshow";
import { Fish, ShoppingBag, Utensils, Package, Globe, Clock } from "lucide-react";
import LocationMap from "../components/LocationMap";

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
          filter: 'brightness(1.2) contrast(1.2)'
        }}
      />
      
      <div className="relative z-10">
        <header className="bg-white/60 text-black py-4 backdrop-blur-sm">
          <nav className="max-w-6xl mx-auto px-4">
            <ul className="flex justify-end space-x-6">
              <li><a href="#features" className="text-gray-900 hover:text-gray-700">Features</a></li>
              <li><a href="#contact" className="text-gray-900 hover:text-gray-700">Contact Us</a></li>
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

        {/* Amenities Section */}
        <section id="features" className="max-w-4xl mx-auto px-4 py-12 mt-8 bg-white/60 backdrop-blur-sm">
          <div className="text-center">
            <h2 className="text-4xl font-['Oswald'] text-gray-900 mb-12">Kaena Restaurant & Bar amenities</h2>
            
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Fish className="w-6 h-6 text-gray-900" />
                  <a href="#" className="text-gray-900 text-xl hover:underline">Seafood</a>
                </div>
                
                <div className="flex items-center space-x-4">
                  <ShoppingBag className="w-6 h-6 text-gray-900" />
                  <a href="#" className="text-gray-900 text-xl hover:underline">Takeaway</a>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Utensils className="w-6 h-6 text-gray-900" />
                  <a href="#" className="text-gray-900 text-xl hover:underline">Dinner</a>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-gray-900" />
                  <a href="#" className="text-gray-900 text-xl hover:underline">New Zealand</a>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Utensils className="w-6 h-6 text-gray-900" />
                  <a href="#" className="text-gray-900 text-xl hover:underline">Bar</a>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Package className="w-6 h-6 text-gray-900" />
                  <a href="#" className="text-gray-900 text-xl hover:underline">Lunch</a>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Globe className="w-6 h-6 text-gray-900" />
                  <a href="#" className="text-gray-900 text-xl hover:underline">International</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="max-w-4xl mx-auto px-4 py-12 mt-8 bg-white/60 backdrop-blur-sm">
          <div>
            <h2 className="text-4xl font-['Oswald'] text-gray-900 mb-8 text-center">Kaena Restaurant & Bar location</h2>
            <LocationMap />
            <div className="mt-6">
              <h3 className="text-2xl font-['Oswald'] text-gray-900 mb-4">Arorangi, Rarotonga</h3>
              <p className="text-gray-800">
                Located near the beautiful Rarotongan Beach Resort, our restaurant offers a perfect blend of local hospitality and international cuisine.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section id="contact" className="max-w-4xl mx-auto px-4 py-12 mt-8 bg-white/60 backdrop-blur-sm">
          <div className="text-center">
            <h2 className="text-4xl font-['Oswald'] text-gray-900 mb-12">Contact Us</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl text-gray-900 mb-2">Booking / Enquiries</h3>
              </div>
              
              <div className="space-y-3">
                <p className="text-gray-800">
                  Email: <a href="mailto:kaenarestaurant@gmail.com" className="text-blue-600 hover:underline">kaenarestaurant@gmail.com</a>
                </p>
                <p className="text-gray-800">
                  Phone: <a href="tel:+682-25433" className="text-blue-600 hover:underline">+682-25433</a>
                </p>
                <p className="text-gray-800">
                  Facebook: <a href="https://facebook.com/Kaena-Resaturant-Takeaway" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Kaena Resaturant & Takeaway</a>
                </p>
              </div>
              
              <div className="mt-8">
                <p className="text-gray-800">
                  Address: Near Rarotongan Beach Resort, Arorangi, Rarotonga, Cook Islands
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-white py-4">
          <div className="text-center">
            <p>© 2025 Kaena Restaurant & Takeaway. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
