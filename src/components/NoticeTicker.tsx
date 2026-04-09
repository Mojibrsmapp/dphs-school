import { motion } from 'motion/react';
import { Megaphone } from 'lucide-react';

const NoticeTicker = () => {
  const notices = [
    "২০২৫ শিক্ষাবর্ষের জন্য বই বিতরণ কার্যক্রম ১০ই জানুয়ারি শুরু হবে।",
    "ভর্তি চলছে! আবেদনের শেষ তারিখ ১৫ই ডিসেম্বর।",
    "বার্ষিক পরীক্ষার সময়সূচী প্রকাশিত হয়েছে। বিস্তারিত নোটিশ বোর্ডে দেখুন।",
    "স্কুলের নতুন ওয়েবসাইট উদ্বোধন করা হয়েছে।"
  ];

  return (
    <div className="bg-school-primary text-white py-2 overflow-hidden relative z-40 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 flex items-center">
        <div className="flex items-center gap-2 bg-school-secondary px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider shrink-0 z-10 shadow-lg">
          <Megaphone size={14} />
          <span>নোটিশ:</span>
        </div>
        
        <div className="flex-1 overflow-hidden ml-4">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="whitespace-nowrap flex gap-12"
          >
            {notices.map((notice, i) => (
              <span key={i} className="text-sm font-medium">
                *** {notice}
              </span>
            ))}
            {/* Duplicate for seamless loop */}
            {notices.map((notice, i) => (
              <span key={`dup-${i}`} className="text-sm font-medium">
                *** {notice}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NoticeTicker;
