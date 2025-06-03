import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Placeholder images for the carousel
const carouselImages = [
  'https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/DSC08238.jpg',
  'https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/DSC08326.jpg',
  'https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/DSC08332%20(1).jpg',
  'https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/DSC08085.jpg',
  'https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/DSC08212.jpg',
  'https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/DSC08264.jpg',
];

const Career: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    slidesToScroll: 1,
  });

  React.useEffect(() => {
    if (emblaApi) {
      // Auto-play functionality
      const autoplay = setInterval(() => {
        emblaApi.scrollNext();
      }, 5000);

      return () => clearInterval(autoplay);
    }
  }, [emblaApi]);

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col items-center py-16 px-4">
        {/* Heading and Subheading */}
        <div className="w-full max-w-5xl text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-900 mb-6 tracking-tight">Career at <span className="text-orange-600">Ikonic</span> Limousine</h1>
          <h2 className="text-3xl font-medium text-gray-800 mb-10 text-orange-600">Luxury in Motion, Excellence in Service</h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            At Ikonic Limousine, every journey begins with excellence. Our team is the heart of our service, and our commitment to luxury, professionalism, and seamless experiences defines who we are.
          </p>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mt-6">
            We believe in cultivating talent that shares our passion for delivering exceptional service. With our people, our partners, and our pursuit of perfection guiding us, we continue to redefine luxury ground transportation in the UAE.
          </p>
        </div>

        {/* Carousel */}
        <div className="w-full mb-20 relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {carouselImages.map((src, idx) => (
                <div key={idx} className="flex-[0_0_100%] min-w-0 pl-4">
                  <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
                    <img
                      src={src}
                      alt={`Career Slide ${idx + 1}`}
                      className="w-full h-full object-cover object-center bg-white rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Why Join Us Section */}
        <div className="w-full max-w-6xl mt-12 mb-20">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-12 shadow-xl border-t-4 border-orange-600">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Why Join <span className="text-orange-600">Us</span>?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <div className="font-bold text-xl text-gray-800 mb-3 flex items-center">
                    <span className="text-orange-600 mr-2">•</span>
                    Prestigious Brand
                  </div>
                  <div className="text-gray-700 text-lg leading-relaxed pl-6">
                    Be part of a premium limousine service known for elegance, professionalism, and excellence in every journey.
                  </div>
                </div>
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <div className="font-bold text-xl text-gray-800 mb-3 flex items-center">
                    <span className="text-orange-600 mr-2">•</span>
                    Meaningful Impact
                  </div>
                  <div className="text-gray-700 text-lg leading-relaxed pl-6">
                    Every ride you deliver shapes the guest experience. At Ikonic Limousine, your role directly contributes to the comfort, safety, and satisfaction of our valued clients.
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <div className="font-bold text-xl text-gray-800 mb-3 flex items-center">
                    <span className="text-orange-600 mr-2">•</span>
                    Supportive Environment
                  </div>
                  <div className="text-gray-700 text-lg leading-relaxed pl-6">
                    Work in a respectful and professional atmosphere where you are equipped with the tools, training, and support to excel every day.
                  </div>
                </div>
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <div className="font-bold text-xl text-gray-800 mb-3 flex items-center">
                    <span className="text-orange-600 mr-2">•</span>
                    Authentic You
                  </div>
                  <div className="text-gray-700 text-lg leading-relaxed pl-6">
                    At Ikonic Limousine, we value your individuality. Bring your unique strengths and service approach. We believe authenticity enhances luxury.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action Section */}
      <div 
        className="bg-cover bg-center bg-no-repeat py-32 px-4 relative w-full flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/DSC08200.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '600px'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white flex flex-col items-center justify-center">
          <p className="text-2xl md:text-3xl leading-relaxed mb-10 font-medium max-w-3xl">
            Join Ikonic Limousine and be part of a team where dedication, elegance, and growth come together. Where your career moves forward with purpose and prestige.
          </p>
          <button className="bg-orange-600 text-white px-12 py-4 rounded-lg font-semibold text-xl hover:bg-orange-700 transition transform hover:scale-105 shadow-lg">
            Join our team
          </button>
        </div>
      </div>
    </>
  );
};

export default Career; 