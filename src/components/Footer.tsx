import { Facebook, Twitter, Youtube, MapPin, Phone, Mail, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="https://image.mojib.me/uploads/school/1775744803_School_Logo.png" 
                alt="DPHS Logo" 
                className="w-12 h-12 object-contain bg-white rounded-full p-1"
              />
              <h2 className="text-white font-bold text-xl uppercase tracking-wider">DPHS</h2>
            </div>
            <p className="mb-8 leading-relaxed">
              ধেছুয়া পালং উচ্চ বিদ্যালয় (Dechua Palong High School) - জ্ঞান, চরিত্র এবং সম্প্রদায়ের মাধ্যমে ভবিষ্যত লিডারদের ক্ষমতায়ন।
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/DhechuaPalongSchool/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-school-primary hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-school-primary hover:text-white transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-school-primary hover:text-white transition-all">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6 border-b border-gray-800 pb-2">গুরুত্বপূর্ণ লিংক</h4>
            <ul className="space-y-4">
              {[
                { name: 'হোম', href: '/' },
                { name: 'আমাদের সম্পর্কে', href: '/about' },
                { name: 'ভর্তি', href: '/admission' },
                { name: 'একাডেমিক', href: '/academic' },
                { name: 'নোটিশ', href: '/notices' },
                { name: 'যোগাযোগ', href: '/contact' }
              ].map(link => (
                <li key={link.name}><Link to={link.href} className="hover:text-school-secondary transition-colors">{link.name}</Link></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6 border-b border-gray-800 pb-2">অন্যান্য</h4>
            <ul className="space-y-4">
              {[
                { name: 'শিক্ষকবৃন্দ', href: '/teachers' },
                { name: 'শিক্ষার্থী তথ্য', href: '#' },
                { name: 'গ্যালারি', href: '/gallery' },
                { name: 'ডাউনলোড', href: '#' },
                { name: 'প্রাক্তন ছাত্র-ছাত্রী', href: '/alumni' },
                { name: 'স্টুডেন্ট পোর্টাল', href: '#' }
              ].map(link => (
                <li key={link.name}><Link to={link.href} className="hover:text-school-secondary transition-colors">{link.name}</Link></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6 border-b border-gray-800 pb-2">যোগাযোগ</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-school-secondary shrink-0" size={20} />
                <a 
                  href="https://maps.app.goo.gl/9TfQZZSCj46KDfsJA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-school-secondary transition-colors"
                >
                  ধেছুয়াপালং, রাবেতা-৪৭০০, রামু, কক্সবাজার।
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-school-secondary shrink-0" size={20} />
                <span>01817-382851</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-school-secondary shrink-0" size={20} />
                <span>hdeschuapalong@yahoo.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Calendar className="text-school-secondary shrink-0" size={20} />
                <span>অফিস সময়: সকাল ৯টা - বিকাল ৪টা</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-10 text-center">
          <p className="text-sm">
            © ২০২৫ ধেছুয়াপালং উচ্চ বিদ্যালয় | সর্বস্বত্ব সংরক্ষিত | কারিগরি সহায়তায়: <a href="https://mojib.me/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-school-secondary">মুজিব আরএসএম</a> - 01601519007 । ইমেইলঃ mojibrsm@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
