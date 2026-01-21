
import React from 'react';
import { Mail, MapPin, Phone, MessageSquare, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 bg-gray-50">
      {/* Header */}
      <section className="bg-navy py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-brandOrange/5" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 font-heading">Get In <span className="text-brandOrange">Touch</span></h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Ready for the best landscape maintenance in Waterloo? We're just an email away.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start space-x-6">
                <div className="bg-brandOrange/10 p-4 rounded-2xl text-brandOrange">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-1">Email Us</h3>
                  <a href="mailto:steve@snidertlc.com" className="text-gray-600 hover:text-brandOrange transition-colors">steve@snidertlc.com</a>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start space-x-6">
                <div className="bg-brandOrange/10 p-4 rounded-2xl text-brandOrange">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-1">Service Area</h3>
                  <p className="text-gray-600">Waterloo, ON and surrounding regions.</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start space-x-6">
                <div className="bg-brandOrange/10 p-4 rounded-2xl text-brandOrange">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-1">Response Time</h3>
                  <p className="text-gray-600">Usually within 24 business hours.</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100">
                <h2 className="text-3xl font-black text-navy font-heading mb-8">Send Us a Message</h2>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-navy uppercase tracking-widest mb-2">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-brandOrange focus:border-transparent transition-all outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-navy uppercase tracking-widest mb-2">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="john@example.com" 
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-brandOrange focus:border-transparent transition-all outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-navy uppercase tracking-widest mb-2">Service Required</label>
                    <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-brandOrange focus:border-transparent transition-all outline-none appearance-none">
                      <option>Spring Clean Up</option>
                      <option>Summer Maintenance</option>
                      <option>Fall Clean Up</option>
                      <option>Snow Removal</option>
                      <option>Other / General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-navy uppercase tracking-widest mb-2">Message</label>
                    <textarea 
                      rows={5} 
                      placeholder="Tell us about your property..." 
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-brandOrange focus:border-transparent transition-all outline-none"
                    ></textarea>
                  </div>
                  <button className="w-full bg-brandOrange hover:bg-brandOrange-hover text-white font-bold py-5 rounded-xl transition-all shadow-lg flex items-center justify-center text-lg">
                    SEND MESSAGE <Send className="ml-2 w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] w-full bg-navy/10 relative">
        <div className="absolute inset-0 bg-cover bg-center grayscale" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200')" }} />
        <div className="absolute inset-0 bg-navy/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-2xl shadow-2xl text-center">
            <h4 className="text-navy font-black text-xl mb-2 font-heading">Waterloo, ON</h4>
            <p className="text-gray-500 font-medium">Proudly Serving the Region</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
