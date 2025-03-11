
import Slideshow from "../components/Slideshow";
import { Fish, ShoppingBag, Utensils, Package, Globe, Clock, Facebook, Instagram } from "lucide-react";
import LocationMap from "../components/LocationMap";
import InfoCard from "../components/InfoCard";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Kaena Restaurant & Bar - Asian Cuisine in Rarotonga</title>
        <meta name="description" content="Kaena Restaurant & Bar specializes in Asian cuisine with a 'Grilled & Sizzling Style'. Located in Arorangi, Rarotonga, Cook Islands." />
        <meta name="keywords" content="Kaena, restaurant, bar, takeaway, Asian cuisine, Cook Islands, Rarotonga, seafood, international cuisine" />
        <meta property="og:title" content="Kaena Restaurant & Bar - Asian Cuisine in Rarotonga" />
        <meta property="og:description" content="Specializing in Asian Cuisine with a 'Grilled & Sizzling Style'. Visit us in Arorangi, Rarotonga." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/lovable-uploads/6fbcf6a8-d8ce-4373-9613-ae49f4428b51.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url("/lovable-uploads/6fbcf6a8-d8ce-4373-9613-ae49f4428b51.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(1.2) contrast(1.2)'
        }}
      />
      
      <div className="relative z-10">
        <header className="bg-white/60 text-black py-4 backdrop-blur-sm">
          <nav className="max-w-6xl mx-auto px-4">
            <ul className="flex justify-between md:justify-end space-x-6">
              <li className="md:hidden font-semibold">Kaena</li>
              <li><a href="#features" className="text-gray-900 hover:text-gray-700">Features</a></li>
              <li><a href="#contact" className="text-gray-900 hover:text-gray-700">Contact Us</a></li>
            </ul>
          </nav>
        </header>
        
        <div className="flex flex-col md:flex-row">
          <div className="flex-1">
            <div className="text-center py-8 bg-white/60 backdrop-blur-sm">
              <h1 className="font-cursive mb-2 inline-block">Kaena</h1>
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
                      <a href="#" className="text-gray-900 text-xl hover:underline">Cook Island</a>
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
                    Located near the Rarotongan Beach Resort, our restaurant offers a perfect blend of local hospitality and international cuisine.
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
                      Facebook: <a href="https://www.facebook.com/profile.php?id=61573614456057" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center justify-center gap-1 inline-flex">
                        <Facebook className="w-4 h-4" /> Kaena Restaurant & Takeaway
                      </a>
                    </p>
                    <p className="text-gray-800">
                      Instagram: <a href="https://www.instagram.com/kaenacookisland/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center justify-center gap-1 inline-flex">
                        <Instagram className="w-4 h-4" /> @kaenacookisland
                      </a>
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
          
          <InfoCard />
        </div>
      </div>
    </div>
  );
};

export default Index;
