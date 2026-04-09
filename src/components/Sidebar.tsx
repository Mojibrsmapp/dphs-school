import { Link } from 'react-router-dom';
import { 
  Users, Info, CreditCard, Award, 
  MessageSquare, Image, Phone, BookOpen 
} from 'lucide-react';

const Sidebar = () => {
  const links = [
    { name: 'ম্যানেজিং কমিটি', icon: <Users size={20} />, href: '/about#committee' },
    { name: 'শিক্ষার্থী তথ্য', icon: <Info size={20} />, href: '/academic#students' },
    { name: 'স্টুডেন্ট আইডি কার্ড', icon: <CreditCard size={20} />, href: '/id-generator' },
    { name: 'এস.এস.সি. ফলাফল', icon: <Award size={20} />, href: '/academic#results' },
    { name: 'বাণীসমূহ', icon: <MessageSquare size={20} />, href: '/about#messages' },
    { name: 'শিক্ষার্থীদের একাংশ', icon: <Image size={20} />, href: '/gallery' },
    { name: 'যোগাযোগ', icon: <Phone size={20} />, href: '/contact' },
  ];

  return (
    <div className="bg-school-primary rounded-2xl shadow-2xl overflow-hidden border border-white/10 h-full">
      <div className="p-6 border-b border-white/10 flex items-center gap-3 text-white">
        <BookOpen size={24} />
        <h3 className="font-bold text-lg">স্কুল সম্পর্কে আরও জানুন</h3>
      </div>
      <div className="p-4 space-y-2">
        {links.map((link, i) => (
          <Link 
            key={i} 
            to={link.href}
            className="flex items-center gap-4 p-4 rounded-xl text-white/90 hover:bg-white/10 transition-all group"
          >
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-school-secondary transition-colors shrink-0">
              {link.icon}
            </div>
            <span className="font-medium">{link.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
