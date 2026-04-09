import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const NavItem = ({ name, href, dropdown, scrolled, isHome }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<any>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  if (!dropdown) {
    return (
      <Link 
        to={href} 
        className={`font-bold hover:text-school-secondary transition-colors ${scrolled || !isHome ? 'text-gray-700' : 'text-white'}`}
      >
        {name}
      </Link>
    );
  }

  return (
    <div 
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button 
        className={`flex items-center gap-1 font-bold hover:text-school-secondary transition-colors ${scrolled || !isHome ? 'text-gray-700' : 'text-white'}`}
      >
        {name} <ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-[60]"
          >
            {dropdown.map((item: any) => (
              <Link 
                key={item.name} 
                to={item.href} 
                className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-school-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'হোম', href: '/' },
    { name: 'আমাদের সম্পর্কে', href: '/about' },
    { 
      name: 'একাডেমিক', 
      href: '/academic',
      dropdown: [
        { name: 'একাডেমিক প্রোগ্রাম', href: '/academic#programs' },
        { name: 'ক্লাস রুটিন', href: '/academic#routine' },
        { name: 'সিলেবাস', href: '/academic#syllabus' },
        { name: 'একাডেমিক ক্যালেন্ডার', href: '/academic#calendar' },
        { name: 'ফলাফল', href: '/results' },
        { name: 'আইডি কার্ড জেনারেটর', href: '/id-generator' },
      ]
    },
    { 
      name: 'ভর্তি', 
      href: '/admission',
      dropdown: [
        { name: 'ভর্তি তথ্য', href: '/admission#info' },
        { name: 'অনলাইন আবেদন', href: '/admission#apply' },
        { name: 'আবেদনের অবস্থা', href: '/admission#status' },
      ]
    },
    { name: 'নোটিশ', href: '/notices' },
    { name: 'ইভেন্টস', href: '/events' },
    { 
      name: 'অন্যান্য', 
      href: '#',
      dropdown: [
        { name: 'শিক্ষকবৃন্দ', href: '/teachers' },
        { name: 'কর্মচারীবৃন্দ', href: '/staff' },
        { name: 'শিক্ষার্থী তথ্য', href: '/students' },
        { name: 'গ্যালারি', href: '/gallery' },
        { name: 'ব্লগ', href: '/blog' },
        { name: 'ডাউনলোড', href: '/downloads' },
        { name: 'প্রাক্তন ছাত্র-ছাত্রী', href: '/alumni' },
      ]
    },
    { name: 'যোগাযোগ', href: '/contact' },
  ];

  const isHome = location.pathname === '/';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled || !isHome ? 'bg-white shadow-xl py-2' : 'bg-school-primary shadow-lg py-3'}`}>
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="relative">
                <img 
                  src="https://image.mojib.me/uploads/school/1775744803_School_Logo.png" 
                  alt="DPHS Logo" 
                  className="w-16 h-16 object-contain relative z-10 transition-transform group-hover:scale-105 bg-white rounded-full p-1"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className={`font-black text-xl md:text-2xl leading-tight transition-colors ${scrolled || !isHome ? 'text-school-primary' : 'text-white'}`}>
                  ধেছুয়া পালং উচ্চ বিদ্যালয়
                </h1>
                <div className={`flex items-center gap-1 text-xs font-bold transition-colors ${scrolled || !isHome ? 'text-gray-500' : 'text-white/90'}`}>
                  <MapPin size={12} />
                  <span>রাবেতা-৪৭০০, রামু, কক্সবাজার</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center space-x-8">
            <div className={`flex items-center gap-8 px-8 py-3 rounded-full transition-all ${scrolled || !isHome ? 'bg-gray-50 border border-gray-100' : 'bg-white/10 border border-white/20'}`}>
              {navLinks.map((link) => (
                <NavItem 
                  key={link.name} 
                  {...link} 
                  scrolled={scrolled} 
                  isHome={isHome} 
                />
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <Link to="/ai-help" className={`px-6 py-3 rounded-2xl font-black transition-all flex items-center gap-2 shadow-lg hover:scale-105 ${scrolled || !isHome ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'}`}>
                <div className={`${scrolled || !isHome ? 'bg-white/20' : 'bg-blue-600/10'} p-1.5 rounded-lg`}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                AI হেল্প
              </Link>

              <Link to="/login" className={`px-6 py-3 rounded-2xl font-black transition-all shadow-lg hover:scale-105 border-2 ${scrolled || !isHome ? 'bg-white text-school-primary border-school-primary' : 'bg-transparent text-white border-white'}`}>
                লগইন
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={scrolled || !isHome ? 'text-gray-800' : 'text-white'}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white border-t overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 max-h-[80vh] overflow-y-auto">
              {navLinks.filter(link => link.name !== 'AI হেল্প').map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <div>
                      <button 
                        onClick={() => setActiveMobileDropdown(activeMobileDropdown === link.name ? null : link.name)}
                        className="flex items-center justify-between w-full px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                      >
                        {link.name} <ChevronDown size={18} className={`transition-transform ${activeMobileDropdown === link.name ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {activeMobileDropdown === link.name && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="pl-6 space-y-1 overflow-hidden"
                          >
                            {link.dropdown.map((item) => (
                              <Link 
                                key={item.name} 
                                to={item.href} 
                                className="block px-3 py-2 text-sm text-gray-600 hover:text-school-primary"
                                onClick={() => setIsOpen(false)}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link 
                      to={link.href} 
                      className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-2">
                <Link to="/ai-help" className="block w-full bg-blue-50 text-blue-600 px-5 py-3 rounded-md font-medium text-center border border-blue-100">
                  AI হেল্প
                </Link>
                <Link to="/login" className="block w-full bg-school-primary text-white px-5 py-3 rounded-md font-medium text-center">
                  লগইন
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
