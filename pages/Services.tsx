
import React from 'react';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';
import { Leaf, Sun, CloudRain, Snowflake, CheckCircle } from 'lucide-react';

const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Leaf': return <Leaf className="w-8 h-8" />;
      case 'Sun': return <Sun className="w-8 h-8" />;
      case 'CloudRain': return <CloudRain className="w-8 h-8" />;
      case 'Snowflake': return <Snowflake className="w-8 h-8" />;
      default: return <CheckCircle className="w-8 h-8" />;
    }
  };

  const springTasks = [
    "Power sweep sand and gravel from all lawn areas.",
    "Dethatch all lawn areas.",
    "Prune all plant material as required.",
    "Cultivate all soil gardens to a depth of 5 cm.",
    "Apply all necessary products, such as mulch, peat moss, manure etc.",
    "Fertilize flowering shrubs and perennials.",
    "Repair lawn damage due to snow removal as required. (extra)",
    "Replace damaged shrubs due to winter kill as required. (extra)"
  ];

  const summerTasks = [
    "Precision lawn cutting adjusted to growth requirements (minimum 5cm height).",
    "Detailed trimming of all borders and obstacles synchronized with every mow.",
    "Weekly horticultural inspections of lawn areas, shrubs, trees, and roses for insects or disease.",
    "Weekly professional edging of all flowerbeds, sidewalks, driveways, and curbs.",
    "Proactive pruning and trimming of shrubs and evergreens as required.",
    "Comprehensive garden bed care including cultivation, weeding, edging, and debris removal.",
    "Targeted vegetation control for cracks, crevices, and hardscape areas.",
    "Custom supply and installation of vibrant annual flower displays (extra).",
    "Utilization of state-of-the-art equipment for superior results."
  ];

  const fallTasks = [
    "Final seasonal lawn cut and trim as growth requires.",
    "Comprehensive leaf removal from all lawn areas and flowerbeds.",
    "Professional removal and disposal of annual flowers.",
    "Pruning and seasonal disposal of perennial plant material.",
    "Strategic stringing of uprights for structural winter protection.",
    "Installation of burlap sections and wraps for sensitive shrubs and evergreens.",
    "Thermal mounding of roses for winter insulation.",
    "Strategic installation of driveway markers to mitigate potential snow plow damage."
  ];

  const snowTasks = [
    "Snow Blowing",
    "Shovelling",
    "Deicing"
  ];

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-navy py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558905619-171542127263?auto=format&fit=crop&q=80&w=2000')] opacity-20 bg-cover bg-center" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 font-heading">Our <span className="text-brandOrange">Services</span></h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Comprehensive seasonal maintenance solutions for discerning property owners in Waterloo.</p>
        </div>
      </section>

      {/* Services Detail List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {SERVICES.map((service, index) => {
            const isSpring = service.id === 'spring-cleanup';
            const isSummer = service.id === 'summer-maintenance';
            const isFall = service.id === 'fall-cleanup';
            const isSnow = service.id === 'snow-removal';
            
            let dateLabel = 'Seasonal Maintenance';
            if (isSpring) dateLabel = 'March - April';
            if (isSummer) dateLabel = 'May 1 - October 31';
            if (isFall) dateLabel = 'November - December';
            if (isSnow) dateLabel = 'November - March';

            return (
              <div 
                key={service.id} 
                className={`flex flex-col lg:items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
              >
                <div className="lg:w-1/2">
                  <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3]">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                    <div className="absolute top-6 left-6 bg-brandOrange text-white p-4 rounded-2xl shadow-lg">
                      {getIcon(service.icon)}
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 space-y-6">
                  <span className="text-brandOrange font-bold tracking-widest uppercase">
                    {dateLabel}
                  </span>
                  <h2 className="text-4xl font-black text-navy font-heading">{service.title}</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {service.description}
                  </p>
                  
                  {isFall && (
                    <p className="text-navy font-bold text-sm italic mb-2 tracking-wide uppercase">
                      Provided on a Time & Material Basis
                    </p>
                  )}

                  <ul className="space-y-4 pt-4">
                    {isSpring ? (
                      springTasks.map((task, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-brandOrange mr-3 flex-shrink-0 mt-1" />
                          <span className="text-gray-700 font-medium">{task}</span>
                        </li>
                      ))
                    ) : isSummer ? (
                      summerTasks.map((task, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-brandOrange mr-3 flex-shrink-0 mt-1" />
                          <span className="text-gray-700 font-medium">{task}</span>
                        </li>
                      ))
                    ) : isFall ? (
                      fallTasks.map((task, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-brandOrange mr-3 flex-shrink-0 mt-1" />
                          <span className="text-gray-700 font-medium">{task}</span>
                        </li>
                      ))
                    ) : isSnow ? (
                      snowTasks.map((task, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-brandOrange mr-3 flex-shrink-0 mt-1" />
                          <span className="text-gray-700 font-medium">{task}</span>
                        </li>
                      ))
                    ) : (
                      <>
                        <li className="flex items-start">
                          <CheckCircle className="w-6 h-6 text-brandOrange mr-3 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">State-of-the-art equipment used for precision.</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-6 h-6 text-brandOrange mr-3 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">Experienced, team-based crews focused on your property.</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-6 h-6 text-brandOrange mr-3 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">Fully insured and award-winning service standards.</span>
                        </li>
                      </>
                    )}
                  </ul>
                  <div className="pt-6">
                    <Link to="/contact" className="bg-navy hover:bg-navy-dark text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg inline-block">
                      INQUIRE ABOUT THIS SERVICE
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="bg-white p-12 md:p-16 rounded-[3rem] shadow-xl border border-gray-100">
            <h2 className="text-3xl font-black text-navy font-heading mb-6">The Snider Standard</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10 italic">
              "We strive to exceed industry standards in every way possible. If you're not satisfied with the state of your grounds, we aren't either. Our multi-award-winning track record is a testament to our commitment to your property's potential."
            </p>
            <div className="flex justify-center">
              <span className="text-navy font-black text-xl">— Steve Snider</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
