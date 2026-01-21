
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote, ChevronRight } from 'lucide-react';
import { SERVICES, TESTIMONIALS, AWARDS } from '../constants';

const Home: React.FC = () => {
  // Video ID for the background. Using the promotional video ID provided earlier.
  const backgroundVideoId = "OfCOjs6RE5I";

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-navy">
        {/* YouTube Background Video */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <iframe
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115vw] h-[115vh] max-w-none"
            src={`https://www.youtube.com/embed/${backgroundVideoId}?autoplay=1&mute=1&loop=1&playlist=${backgroundVideoId}&controls=0&rel=0&showinfo=0&iv_load_policy=3&modestbranding=1&enablejsapi=1`}
            allow="autoplay; encrypted-media"
            frameBorder="0"
          ></iframe>
        </div>
        
        <div className="absolute inset-0 z-10 hero-video-overlay" />
        
        <div className="relative z-20 text-center px-4 max-w-5xl">
          <span className="inline-block text-brandOrange font-bold tracking-[0.3em] uppercase mb-4 text-sm md:text-base">
            Multi-Award Winning Landscape Care
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 font-heading tracking-tight leading-tight">
            Protecting your investment... <span className="text-brandOrange">one blade at a time.</span>
          </h1>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-medium">
            Waterloo's premier maintenance team providing elite results that enhance your lifestyle and property value.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-brandOrange hover:bg-brandOrange-hover text-white px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-xl inline-flex items-center justify-center uppercase">
              CONTACT US <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link to="/services" className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full text-lg font-bold transition-all inline-flex items-center justify-center">
              EXPLORE SERVICES
            </Link>
          </div>
        </div>
      </section>

      {/* Awards Bar */}
      <div className="bg-navy py-12 relative z-30">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-12 md:gap-24">
          {AWARDS.map((award, i) => (
            <div key={i} className="flex items-center space-x-4">
              <div className="p-3 bg-white/5 rounded-xl">
                {award.icon}
              </div>
              <div>
                <p className="text-white font-bold leading-tight">{award.title}</p>
                <p className="text-gray-400 text-sm uppercase tracking-wider">{award.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About Section with Video */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video">
              <iframe 
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${backgroundVideoId}?rel=0`} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-4xl font-black text-navy font-heading leading-tight">Provincial & National Award-Winning Service</h2>
              <div className="space-y-4">
                <p className="text-gray-600 text-lg leading-relaxed">
                  With over 2 decades in the business, Snider Turf and Landscape Care has become a trusted name in high-end landscaping and turf maintenance.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  From local homes to large commercial properties, our work has earned provincial and national recognition for excellence in landscape design, sustainability, and maintenance. Our team brings together certified professionals, horticultural experts, and creative visionaries united by a love for the outdoors.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 py-4">
                <div>
                  <p className="text-3xl font-black text-navy">20+</p>
                  <p className="text-gray-500 font-medium">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-navy">500+</p>
                  <p className="text-gray-500 font-medium">Happy Clients</p>
                </div>
              </div>
              <Link to="/about" className="inline-flex items-center font-bold text-navy hover:text-brandOrange transition-colors">
                LEARN MORE ABOUT US <ChevronRight className="ml-1 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brandOrange font-bold tracking-widest uppercase">What We Do</span>
            <h2 className="text-4xl font-black text-navy font-heading mt-2">Professional Maintenance Services</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-navy/10 group-hover:bg-navy/0 transition-colors" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                    {service.description}
                  </p>
                  <Link to="/services" className="text-brandOrange font-bold text-sm inline-flex items-center hover:translate-x-1 transition-transform">
                    READ MORE <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brandOrange/10 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brandOrange/10 rounded-full blur-3xl -ml-32 -mb-32" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-brandOrange font-bold tracking-widest uppercase">Testimonials</span>
            <h2 className="text-4xl font-black text-white font-heading mt-2">Trusted for Two Decades</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-navy-light p-8 rounded-3xl border border-white/10 relative flex flex-col h-full">
                <Quote className="absolute top-6 right-8 w-12 h-12 text-white/5" />
                <p className="text-gray-300 italic mb-8 leading-relaxed flex-grow">
                  "{t.content}"
                </p>
                <div className="flex items-center mt-auto">
                  <div>
                    <h4 className="text-white font-bold">{t.name}</h4>
                    <p className="text-gray-500 text-xs uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-brandOrange rounded-[3rem] p-12 md:p-16 text-center text-white shadow-2xl transform hover:scale-[1.01] transition-transform">
            <h2 className="text-3xl md:text-5xl font-black mb-6 font-heading">Ready to transform your landscape?</h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Join the hundreds of Waterloo residents who trust Snider TLC for world-class property maintenance.
            </p>
            <Link to="/contact" className="bg-navy text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-navy-dark transition-colors inline-block shadow-xl uppercase">
              CONTACT US
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
