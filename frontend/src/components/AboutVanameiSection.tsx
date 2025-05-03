
import React from 'react';
import { Waves, ChartBar } from 'lucide-react';

const AboutVanameiSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 relative overflow-hidden bg-gradient-to-b from-ocean-deeper to-ocean-dark">
      {/* Background waves animation */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 animate-pulse-light">
          <Waves size={300} className="text-ocean absolute -right-20 -top-20 opacity-20" />
          <Waves size={200} className="text-ocean absolute left-10 bottom-10 opacity-20" />
          <Waves size={150} className="text-ocean absolute right-1/4 bottom-1/3 opacity-20" />
        </div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 animate-fade-in text-center">About <span className="text-prawn">Vanamei Prawns</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Native to Pacific",
              icon: <Waves className="h-8 w-8 text-prawn" />,
              content: "Litopenaeus vannamei, commonly known as the Whiteleg Shrimp, is native to the eastern Pacific Ocean, from Mexico to Peru.",
              delay: "0.2s"
            },
            {
              title: "Adaptable Species",
              icon: <ChartBar className="h-8 w-8 text-prawn" />,
              content: "Vanamei can tolerate a wide range of salinity (0.5-45 ppt) and temperature (22-32°C), making them suitable for both freshwater and brackish water farming.",
              delay: "0.3s"
            },
            {
              title: "Economic Impact",
              icon: <ChartBar className="h-8 w-8 text-prawn" />,
              content: "In Tamil Nadu, vanamei farming has revolutionized coastal economies, providing sustainable livelihoods to thousands of farmers.",
              delay: "0.4s"
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 transform transition hover:scale-105 animate-fade-in"
              style={{ animationDelay: item.delay }}
            >
              <div className="bg-ocean-deepest bg-opacity-30 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-200">{item.content}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-ocean-deepest bg-opacity-20 rounded-xl p-6 md:p-8 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-white mb-4">Why Tamil Nadu Leads in Vanamei Production</h3>
              <ul className="space-y-3 text-gray-200 list-disc pl-5">
                <li>Over 1,000 km of coastline with ideal conditions</li>
                <li>Government subsidies and technical support</li>
                <li>Advanced hatcheries producing high-quality seed</li>
                <li>Well-established export infrastructure</li>
                <li>Research centers focusing on disease management</li>
              </ul>
            </div>
            <div className="md:w-1/2 flex justify-center items-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-ocean bg-opacity-20 animate-pulse-light flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">30%</div>
                    <div className="text-lg text-prawn font-medium">of India's<br />Vanamei Production</div>
                  </div>
                </div>
                <div className="absolute -left-4 top-1/4 w-20 h-20 rounded-full bg-prawn bg-opacity-20 animate-float"></div>
                <div className="absolute -right-4 bottom-1/4 w-16 h-16 rounded-full bg-ocean bg-opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVanameiSection;
