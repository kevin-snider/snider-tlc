
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail } from 'lucide-react';

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
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Opportunities', path: '/opportunities' },
  ];

  const logoUrl = "https://drive.google.com/thumbnail?id=1tlfukwjOUB_pO33xuD3cYygfhjftN_Xk&sz=w500";

  // Text color based on scroll state
  const textColorClass = scrolled ? 'text-navy' : 'text-white';
  const hoverColorClass = scrolled ? 'hover:text-brandOrange' : 'hover:text-brandOrange';
  const activeColorClass = 'text-brandOrange';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center group">
              <img 
                src={logoUrl} 
                alt="Snider TLC Logo" 
                className={`transition-all duration-300 ${scrolled ? 'h-14' : 'h-16'} object-contain`}
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

          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/contact" className="bg-brandOrange hover:bg-brandOrange-hover text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 flex items-center shadow-lg uppercase">
              <Mail className="w-4 h-4 mr-2" />
              CONTACT US
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors ${scrolled ? 'text-navy hover:text-brandOrange' : 'text-white hover:text-brandOrange'} focus:outline-none`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 bg-navy shadow-xl border-t border-navy-light' : 'max-h-0'}`}>
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
          <Link 
            to="/contact" 
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-brandOrange text-white py-4 mt-4 font-bold uppercase"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
