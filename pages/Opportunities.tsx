import React from 'react';
import { MapPin, Clock, Calendar, ArrowRight, CheckCircle2, Award, DollarSign, Users, TrendingUp, Smile } from 'lucide-react';
import { JOB_POSITIONS } from '../constants';

const Opportunities: React.FC = () => {
  return (
    <div className="pt-24 bg-white">
      {/* Header */}
      <section className="bg-navy py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2000')] opacity-10 bg-cover bg-center" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 font-heading">Careers at <span className="text-brandOrange">Snider TLC</span></h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            If you are looking for an opportunity to join our multi-award-winning team, see our current job listings below!
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-brandOrange font-bold tracking-widest uppercase">Join Our Team</span>
              <h2 className="text-4xl font-black text-navy font-heading">Work on Waterloo's Most Spectacular Properties</h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Snider TLC is a multi-award-winning landscape maintenance company that strives to exceed industry standards in every way possible. We use the latest in equipment and work in team-based crews, aiming to enhance the lives of each and every one of our clients.
                </p>
                <p>
                  At Snider TLC, we are fortunate enough to work on spectacular properties that enhance not only our clients’ lives but give our employees a sense of satisfaction when a job is complete. We are an equal opportunity employer and offer competitive wages.
                </p>
                <p>
                  Being as our teamwork is so important, we believe in regular company events. Opportunity for extra-long weekends and early Fridays throughout the summer as well. At Snider TLC, we believe in promoting workplace relationships and that family comes first.
                </p>
              </div>
              
              <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 bg-gray-50 p-5 rounded-xl border border-gray-100 shadow-sm transition-transform hover:scale-[1.02]">
                  <Award className="text-brandOrange w-6 h-6 flex-shrink-0" />
                  <span className="font-bold text-navy leading-tight">Award-Winning Properties</span>
                </div>
                <div className="flex items-center space-x-3 bg-gray-50 p-5 rounded-xl border border-gray-100 shadow-sm transition-transform hover:scale-[1.02]">
                  <DollarSign className="text-brandOrange w-6 h-6 flex-shrink-0" />
                  <span className="font-bold text-navy leading-tight">Competitive Weekly Pay</span>
                </div>
                <div className="flex items-center space-x-3 bg-gray-50 p-5 rounded-xl border border-gray-100 shadow-sm transition-transform hover:scale-[1.02]">
                  <TrendingUp className="text-brandOrange w-6 h-6 flex-shrink-0" />
                  <span className="font-bold text-navy leading-tight">Advancement Opportunities</span>
                </div>
                <div className="flex items-center space-x-3 bg-gray-50 p-5 rounded-xl border border-gray-100 shadow-sm transition-transform hover:scale-[1.02]">
                  <Smile className="text-brandOrange w-6 h-6 flex-shrink-0" />
                  <span className="font-bold text-navy leading-tight">Early Fridays in Summer</span>
                </div>
              </div>
            </div>
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl bg-gray-50">
              <img 
                src="https://drive.google.com/thumbnail?id=1M-6I3SrVsM9tvv4PxRV2mC_AifO7uE5j&sz=w1200" 
                alt="Working at Snider TLC" 
                className="w-full h-auto object-contain block"
              />
              <div className="absolute inset-0 bg-navy/5 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy font-heading mb-4">Current Openings</h2>
            <p className="text-gray-600">Apply today to start the upcoming season.</p>
          </div>

          <div className="space-y-12">
            {JOB_POSITIONS.map((job, i) => {
              const emailSubject = encodeURIComponent(`Application for ${job.title} - Snider TLC`);
              const emailBody = encodeURIComponent(`Hi Steve,\n\nI am interested in applying for the ${job.title} position. Please find my resume attached to this email.\n\nThank you!`);
              const mailtoLink = `mailto:steve@snidertlc.com?subject=${emailSubject}&body=${emailBody}`;

              return (
                <div key={i} className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100 hover:shadow-xl transition-all">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                    <div>
                      <h3 className="text-3xl font-black text-navy font-heading mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 font-bold uppercase tracking-wider">
                        <span className="flex items-center"><MapPin className="w-4 h-4 mr-1 text-brandOrange" /> Waterloo Region</span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1 text-brandOrange" /> 
                          {job.title === "Landscape Maintenance Team Member" ? "35 – 45 hrs/week" : "Full-Time"}
                        </span>
                        <span className="flex items-center"><Calendar className="w-4 h-4 mr-1 text-brandOrange" /> {job.title === "Landscape Maintenance Team Member" ? "April - November" : "Starts March/April"}</span>
                      </div>
                    </div>
                    <a 
                      href={mailtoLink}
                      className="bg-brandOrange hover:bg-brandOrange-hover text-white px-8 py-4 rounded-full font-bold shadow-lg transition-all text-center"
                    >
                      APPLY FOR THIS ROLE
                    </a>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <h4 className="text-navy font-black text-lg mb-4 flex items-center">
                          <ArrowRight className="text-brandOrange mr-2 w-5 h-5" /> About the Position
                        </h4>
                        <p className="text-gray-600 leading-relaxed">{job.description}</p>
                      </div>
                      <div>
                        <h4 className="text-navy font-black text-lg mb-4 flex items-center">
                          <ArrowRight className="text-brandOrange mr-2 w-5 h-5" /> {job.title === "Landscape Maintenance Team Member" ? "What You'll Do" : "Key Responsibilities"}
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {job.requirements.map((req, j) => (
                            <div key={j} className="flex items-start">
                              <CheckCircle2 className="text-brandOrange w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700 font-medium">{req}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-8 h-fit">
                      <h4 className="text-navy font-black text-lg mb-4">{job.title === "Landscape Maintenance Team Member" ? "What We Look For" : "Qualifications"}</h4>
                      <p className="text-gray-600 leading-relaxed">{job.qualifications}</p>
                      <div className="mt-8 p-4 bg-navy rounded-xl text-white">
                        <p className="text-sm font-bold uppercase tracking-widest text-brandOrange mb-2">Requirements</p>
                        <ul className="text-sm space-y-2 opacity-90">
                          <li>• Ability to lift 50lbs repeatedly</li>
                          <li>• Work in various weather conditions</li>
                          <li>• High attention to detail</li>
                          <li>• Language: English (preferred)</li>
                          <li>• Reliability & strong teamwork</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Opportunities;