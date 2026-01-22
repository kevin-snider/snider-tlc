import React from 'react';
import { Award, ShieldCheck, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header */}
      <section className="bg-navy py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=2000')] opacity-20 bg-cover bg-center" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <span className="text-brandOrange font-bold tracking-[0.3em] uppercase mb-4 block text-sm">Professional Excellence</span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading">About <span className="text-brandOrange">Snider TLC</span></h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-medium">
            A legacy of excellence in landscape maintenance in Waterloo Region for 20 years.
          </p>
        </div>
      </section>

      {/* History & Mission */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <span className="text-brandOrange font-bold tracking-widest uppercase text-sm">Our Story</span>
                <h2 className="text-4xl font-black text-navy font-heading mt-2">Unwavering Focus on Quality</h2>
              </div>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  At Snider TLC, we bring precision, professionalism, and passion to every property we maintain. For nearly two decades, we’ve been delivering top-tier landscape care by combining industry-leading practices with a deep respect for nature and detail.
                </p>
                <p>
                  Our team is made up of formally trained professionals with extensive backgrounds in horticulture. We stay at the forefront of the industry by continuously upgrading our skills through ongoing education, seminars, and certifications.
                </p>
                <p>
                  We are proud, active members of the Landscape Ontario Horticultural Trades Association. You can expect a uniformed team of respectful, reliable, and highly skilled individuals who treat your home or business with the same level of pride we bring to our own.
                </p>
              </div>
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-brandOrange/10 p-3 rounded-full text-brandOrange">
                    <Award size={24} />
                  </div>
                  <span className="font-bold text-navy">Award Winning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-brandOrange/10 p-3 rounded-full text-brandOrange">
                    <ShieldCheck size={24} />
                  </div>
                  <span className="font-bold text-navy">Fully Insured</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-brandOrange/10 p-3 rounded-full text-brandOrange">
                    <Users size={24} />
                  </div>
                  <span className="font-bold text-navy">Team-Based</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl bg-gray-100">
                <img 
                  src="https://drive.google.com/thumbnail?id=1o8ERVq589Kh0QpUYHlyy8OPhuOL7ECIz&sz=w1200" 
                  alt="Snider TLC Service Truck" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-brandOrange p-8 rounded-3xl shadow-2xl border-4 border-white hidden md:block">
                <p className="text-white text-5xl font-black">20+</p>
                <p className="text-white/80 font-bold uppercase tracking-widest text-xs">Years of Growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;