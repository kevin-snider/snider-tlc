import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Careers', path: '/careers' },
  ];

  const logoUrl = "https://drive.google.com/thumbnail?id=1tlfukwjOUB_pO33xuD3cYygfhjftN_Xk&sz=w500";

  // Determine if we should show the solid (white background, navy text) navbar
  // On home page, only show it when scrolled. On other pages, show it always.
  const isHome = location.pathname === '/';
  const isSolid = scrolled || !isHome;

  const navBgClass = isSolid ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4';
  const textColorClass = isSolid ? 'text-navy' : 'text-white';
  const hoverColorClass = 'hover:text-brandOrange';
  const activeColorClass = 'text-brandOrange';

  const contactMessage = "Thank you for inquiring about our services. Please provide detail about your property, and primary phone number.";
  const mailtoLink = `mailto:steve@snidertlc.com?subject=General Inquiry - Snider TLC&body=${encodeURIComponent(contactMessage)}`;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navBgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center group">
              <img 
                src={logoUrl} 
                alt="Snider TLC Logo" 
                className={`transition-all duration-300 ${isSolid ? 'h-14' : 'h-16'} object-contain`}
              />
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-semibold transition-colors duration-200 ${
                    location.pathname === link.path 
                      ? activeColorClass 
                      : `${textColorClass} ${hoverColorClass}`
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            <a href="tel:5198841581" className={`flex items-center text-sm font-bold transition-colors ${textColorClass} hover:text-brandOrange`}>
              <Phone className="w-4 h-4 mr-2 text-brandOrange" />
              (519) 884-1581
            </a>
            <a href={mailtoLink} className="bg-brandOrange hover:bg-brandOrange-hover text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 flex items-center shadow-lg uppercase">
              <Mail className="w-4 h-4 mr-2" />
              CONTACT US
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors ${isSolid ? 'text-navy hover:text-brandOrange' : 'text-white hover:text-brandOrange'} focus:outline-none`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[30rem] bg-navy shadow-xl border-t border-navy-light' : 'max-h-0'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-4 rounded-md text-base font-medium ${
                location.pathname === link.path 
                  ? 'text-brandOrange bg-navy-light' 
                  : 'text-white hover:text-brandOrange'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="tel:5198841581" 
            className="flex items-center justify-center text-white py-4 font-bold border-t border-navy-light"
          >
            <Phone className="w-5 h-5 mr-3 text-brandOrange" />
            (519) 884-1581
          </a>
          <a 
            href={mailtoLink}
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-brandOrange text-white py-4 font-bold uppercase"
          >
            CONTACT US
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;