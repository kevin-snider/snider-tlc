
import React from 'react';
import { Mail, MapPin, Phone, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AWARDS } from '../constants';

const Footer: React.FC = () => {
  const logoUrl = "https://drive.google.com/thumbnail?id=1tlfukwjOUB_pO33xuD3cYygfhjftN_Xk&sz=w500";

  return (
    <footer className="bg-navy-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="inline-block group">
              <img 
                src={logoUrl} 
                alt="Snider TLC Logo" 
                className="h-24 object-contain w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            
            <p className="text-gray-400 leading-relaxed font-medium">
              Protecting your investment... one blade at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-brandOrange font-heading">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">Photo Gallery</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-brandOrange font-heading">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-brandOrange flex-shrink-0" />
                <span>Waterloo, ON, Canada</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-brandOrange flex-shrink-0" />
                <a href="tel:5198841581" className="hover:text-white">(519) 884-1581</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-brandOrange flex-shrink-0" />
                <a href="mailto:steve@snidertlc.com" className="hover:text-white">steve@snidertlc.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div className="flex flex-col">
            <h4 className="text-lg font-bold mb-6 text-brandOrange font-heading">Work With Us</h4>
            <p className="text-gray-400 mb-6 text-sm">
              We are always looking for passionate people to join our award-winning team.
            </p>
            <Link to="/careers" className="inline-block border-2 border-brandOrange text-brandOrange hover:bg-brandOrange hover:text-white font-bold py-2 px-6 rounded transition-all w-fit mb-8">
              JOIN THE TEAM
            </Link>
            
            {/* Award 4 - Moved here below the button */}
            <div className="flex items-center">
              <img 
                src={AWARDS[3].imageUrl} 
                alt={AWARDS[3].title} 
                className="h-20 w-auto object-contain brightness-0 invert opacity-60"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-navy-light pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p className="mb-4 md:mb-0">© {new Date().getFullYear()} Snider Turf & Landscape Care Ltd. All rights reserved.</p>
          
          <div className="flex space-x-6">
            <a 
              href="https://www.instagram.com/snidertlc/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-brandOrange transition-colors"
              aria-label="Follow us on Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/company/snidertlc/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-brandOrange transition-colors"
              aria-label="Follow us on LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;