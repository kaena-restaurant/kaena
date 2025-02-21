
import Slideshow from "../components/Slideshow";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Slideshow />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-light text-gray-900 mb-6">Welcome</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Experience our carefully curated collection of images. Each photograph tells a unique story, captured with precision and presented with elegance.
        </p>
      </div>
    </div>
  );
};

export default Index;
