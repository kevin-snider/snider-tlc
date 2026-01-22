import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-navy py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=2000')] opacity-20 bg-cover bg-center" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 font-heading">About <span className="text-brandOrange">Snider TLC</span></h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">A legacy of excellence in landscape maintenance since our very first property in Waterloo.</p>
        </div>
      </section>

      {/* History */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-16 items-center">
            <div className="space-y-6">
              <span className="text-brandOrange font-bold tracking-widest uppercase">Our History</span>
              <h2 className="text-4xl font-black text-navy font-heading">Born in Waterloo, Focused on Quality</h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  At Snider TLC, we bring precision, professionalism, and passion to every property we maintain. For nearly two decades, we’ve been delivering top-tier landscape care by combining industry-leading practices with a deep respect for nature and detail.
                </p>
                <p>
                  Our team is made up of formally trained professionals with extensive backgrounds in horticulture. We stay at the forefront of the industry by continuously upgrading our skills through ongoing education, seminars, and certifications. Whether we’re servicing a residential lawn or a large commercial property, we approach every visit with care, consistency, and a commitment to excellence.
                </p>
                <p>
                  We are proud, active members of the Landscape Ontario Horticultural Trades Association, and are fully licensed and insured. You can expect a uniformed team of respectful, reliable, and highly skilled individuals who treat your home or business with the same level of pride and professionalism we bring to our own.
                </p>
                <p>
                  At Snider TLC, safety and well-being are integral to our work culture. We foster a healthy work environment and are deeply committed to accident prevention through hands-on training, clear protocols, and ongoing awareness. Every team member shares in the responsibility to protect each other, our clients, and the environment.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://drive.google.com/thumbnail?id=1o8ERVq589Kh0QpUYHlyy8OPhuOL7ECIz&sz=w1200" 
                alt="Snider TLC Team" 
                className="rounded-[2.5rem] shadow-2xl w-full h-auto object-contain ring-1 ring-gray-100"
              />
              <div className="absolute -bottom-8 -left-8 bg-brandOrange p-8 rounded-2xl shadow-xl hidden md:block border-4 border-white">
                <p className="text-white text-5xl font-black">20+</p>
                <p className="text-white/80 font-bold uppercase tracking-widest text-sm">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;