import { useState, useEffect } from 'react';
import { 
  Search, BookOpen, Users, GraduationCap, 
  Heart, ChevronRight, ChevronLeft, Award, MessageSquare,
  AlertTriangle, X as CloseIcon, Phone, Mail, MapPin, ExternalLink,
  Facebook, Twitter, Youtube, Instagram, Calendar, CreditCard, FileText, ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import Newsletter from '../components/Newsletter';
import NoticeTicker from '../components/NoticeTicker';
import Sidebar from '../components/Sidebar';
import { api } from '../services/api';

const Hero = () => {
  // ... (Hero component remains the same for now)
  const slides = [
    {
      title: "ধেছুয়া পালং উচ্চ বিদ্যালয়ে আপনাকে স্বাগতম",
      subtitle: "জ্ঞান, চরিত্র এবং সম্প্রদায়ের মাধ্যমে ভবিষ্যত লিডারদের ক্ষমতায়ন।",
      image: "https://image.mojib.me/uploads/school/1775742235_hero section 1.JPG",
      cta: "ভর্তি হন"
    },
    {
      title: "একটি উজ্জ্বল ভবিষ্যতের জন্য প্রতিশ্রুতিবদ্ধ",
      subtitle: "আমরা প্রতিটি শিক্ষার্থীর মধ্যে থাকা সম্ভাবনাকে বিকশিত করতে নিবেদিত।",
      image: "https://image.mojib.me/uploads/school/1775742296_hero section 2.JPG",
      cta: "ভর্তি হন"
    },
    {
      title: "উৎকর্ষের একটি ঐতিহ্য",
      subtitle: "আমাদের রয়েছে একটি সমৃদ্ধ ইতিহাস এবং সফল প্রাক্তন ছাত্র-ছাত্রীদের একটি শক্তিশালী নেটওয়ার্ক।",
      image: "https://image.mojib.me/uploads/school/1775742292_hero section 3.jpg",
      cta: "ভর্তি হন"
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[500px] md:h-[750px] overflow-hidden rounded-[2.5rem] md:rounded-[4rem] shadow-2xl group">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 z-10" />
          <img 
            src={slides[current].image} 
            alt="School" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-6">
            <div className="max-w-5xl">
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <span className="inline-block bg-school-secondary/20 backdrop-blur-md text-school-secondary px-4 py-1.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-6 border border-school-secondary/30">
                  স্থাপিত: ১৯৯৫
                </span>
                <h2 className="text-3xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tight">
                  {slides[current].title}
                </h2>
                <p className="text-base md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-medium opacity-90">
                  {slides[current].subtitle}
                </p>
                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                  <Link to="/admission" className="bg-school-secondary text-white px-8 md:px-12 py-4 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-2xl flex items-center gap-2">
                    {slides[current].cta} <ChevronRight size={20} />
                  </Link>
                  <Link to="/about" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 md:px-12 py-4 rounded-2xl font-black text-lg hover:bg-white hover:text-school-primary transition-all shadow-2xl">
                    আরও জানুন
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      <div className="absolute inset-0 z-30 flex items-center justify-between px-6 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <button 
          onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
          className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl text-white border border-white/20 flex items-center justify-center hover:bg-school-secondary hover:border-school-secondary transition-all pointer-events-auto shadow-2xl"
        >
          <ChevronLeft size={28} />
        </button>
        <button 
          onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
          className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl text-white border border-white/20 flex items-center justify-center hover:bg-school-secondary hover:border-school-secondary transition-all pointer-events-auto shadow-2xl"
        >
          <ChevronRight size={28} />
        </button>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-500 ${current === i ? 'bg-school-secondary w-12' : 'bg-white/30 w-3 hover:bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  const [loadingResult, setLoadingResult] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [dynamicNotices, setDynamicNotices] = useState<any[]>([]);
  const [dynamicTeachers, setDynamicTeachers] = useState<any[]>([]);
  const [dynamicEvents, setDynamicEvents] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [n, t, e] = await Promise.all([
          api.get("/notices"),
          api.get("/teachers"),
          api.get("/events")
        ]);
        setDynamicNotices(n.slice(0, 3));
        setDynamicTeachers(t.slice(0, 4));
        setDynamicEvents(e);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const handleSearch = () => {
    setLoadingResult(true);
    setTimeout(() => {
      setLoadingResult(false);
      setShowResult(true);
    }, 1500);
  };

  const defaultNotices = [
    { date: '২৫', month: 'এপ্রিল', title: 'বার্ষিক ক্রীড়া প্রতিযোগিতা ২০২৬' },
    { date: '১৫', month: 'মার্চ', title: 'বার্ষিক সাংস্কৃতিক অনুষ্ঠান' },
    { date: '১০', month: 'ফেব্রুয়ারি', title: 'বিজ্ঞান মেলা ও প্রদর্শনী' },
  ];

  const noticesToDisplay = dynamicNotices.length > 0 ? dynamicNotices.map(n => ({
    date: new Date(n.date).getDate(),
    month: new Date(n.date).toLocaleString('bn-BD', { month: 'long' }),
    title: n.title
  })) : defaultNotices;

  const features = [
    {
      icon: <BookOpen size={32} />,
      title: "মানসম্মত শিক্ষা",
      desc: "আমরা মানসম্মত শিক্ষা এবং শিক্ষার্থীদের সার্বিক বিকাশে বিশ্বাসী।"
    },
    {
      icon: <Users size={32} />,
      title: "ক্লাস ও গ্রেড",
      desc: "৬ষ্ঠ থেকে ১০ম শ্রেণী পর্যন্ত পাঠদান করা হয়।"
    },
    {
      icon: <GraduationCap size={32} />,
      title: "আধুনিক পাঠ্যক্রম",
      desc: "জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) অনুমোদিত পাঠ্যক্রম।"
    },
    {
      icon: <Heart size={32} />,
      title: "সহশিক্ষা কার্যক্রম",
      desc: "খেলাধুলা, বিতর্ক, সাংস্কৃতিক অনুষ্ঠান এবং বিজ্ঞান ক্লাব।"
    }
  ];

  const reviews = [
    {
      text: "এই স্কুলটি আমার সন্তানের জন্য একটি অসাধারণ শিক্ষার পরিবেশ দিয়েছে। শিক্ষকরা অত্যন্ত যত্নশীল এবং নিবেদিত।",
      author: "অভিভাবক",
      role: "অভিভাবক"
    },
    {
      text: "আমি এই স্কুলের একজন প্রাক্তন ছাত্র হিসেবে গর্বিত। এখানকার শিক্ষা আমার জীবনের ভিত্তি গড়ে দিয়েছে।",
      author: "প্রাক্তন ছাত্র",
      role: "ব্যাচ ২০১০"
    },
    {
      text: "স্কুলের সহশিক্ষা কার্যক্রমগুলো আমাকে সৃজনশীল হতে এবং নেতৃত্ব বিকাশে সহায়তা করেছে।",
      author: "বর্তমান ছাত্র",
      role: "১০ম শ্রেণী"
    }
  ];

  const [currentReview, setCurrentReview] = useState(0);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-36">
        <div className="grid lg:grid-cols-4 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-16">
            <Hero />
          </div>

          {/* Sidebar */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-32">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
      
      {/* About Brief */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <span className="text-school-secondary font-bold tracking-wider uppercase text-sm">আমাদের কথা</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">একটি সমৃদ্ধ ইতিহাস এবং উজ্জ্বল ভবিষ্যতের দিকে</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                ১৯৯৫ সালে প্রতিষ্ঠিত ধেছুয়া পালং উচ্চ বিদ্যালয় একটি সমৃদ্ধ ইতিহাস এবং উজ্জ্বল ভবিষ্যতের দিকে এগিয়ে চলেছে। আমরা শিক্ষার্থীদের জ্ঞান অর্জনের পাশাপাশি নৈতিক ও মানবিক মূল্যবোধ সম্পন্ন মানুষ হিসেবে গড়ে তুলতে বিশ্বাসী।
              </p>
              <Link to="/about" className="text-school-primary font-bold flex items-center gap-2 hover:underline">
                আরও জানুন <ChevronRight size={20} />
              </Link>
            </motion.div>
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://image.mojib.me/uploads/school/1775743811_school_head.png" 
                alt="School Campus" 
                className="rounded-2xl shadow-2xl relative z-10"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Headmaster Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-xl overflow-hidden border border-gray-100">
            <div className="grid md:grid-cols-3">
              <div className="md:col-span-1 bg-school-primary p-10 flex flex-col items-center justify-center text-white text-center">
                <div className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-white/30 overflow-hidden mb-6 shadow-2xl">
                  <img src="https://image.mojib.me/uploads/school/1775741426_Head%20sir.png" alt="Headmaster" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black">মোঃ ওসমান গণি</h3>
                <p className="text-lg opacity-90 font-medium">প্রধান শিক্ষক</p>
              </div>
              <div className="md:col-span-2 p-8 md:p-16 flex flex-col justify-center">
                <div className="mb-6">
                  <span className="text-school-secondary font-bold tracking-widest uppercase text-sm">শুভেচ্ছা বাণী</span>
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2">প্রধান শিক্ষকের বাণী</h2>
                </div>
                <p className="text-lg md:text-2xl text-gray-700 italic leading-relaxed mb-8 relative">
                  <span className="absolute -top-4 -left-4 text-6xl text-gray-100 font-serif">"</span>
                  ধেছুয়া পালং উচ্চ বিদ্যালয়ে স্বাগতম! আমরা আমাদের শিক্ষার্থীদের জন্য একটি নিরাপদ, সহায়ক এবং সমৃদ্ধ পরিবেশ প্রদানে নিবেদিত। আমাদের উৎসাহী শিক্ষকরা শেখার প্রতি ভালোবাসা জাগিয়ে তুলতে এবং প্রতিটি শিক্ষার্থীকে তাদের ব্যক্তিগত সেরা অর্জনে সহায়তা করার জন্য অক্লান্ত পরিশ্রম করেন।
                  <span className="absolute -bottom-8 -right-4 text-6xl text-gray-100 font-serif">"</span>
                </p>
                <Link to="/about" className="self-start bg-school-primary/5 text-school-primary px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-school-primary hover:text-white transition-all">
                  বিস্তারিত পড়ুন <ChevronRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Result Search */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-school-primary/5 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-school-secondary/10 rounded-2xl flex items-center justify-center text-school-secondary shadow-inner">
                    <Search size={32} />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black text-gray-900">দ্রুত ফলাফল দেখুন</h2>
                    <p className="text-gray-500 font-medium">আপনার পরীক্ষার ফলাফল মুহূর্তেই জানুন</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-xl border border-gray-100">
                  <AlertTriangle className="text-amber-500" size={18} />
                  <span className="text-xs font-bold text-gray-600">২০২৬ এর ফলাফল শীঘ্রই আসছে</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700 ml-1">পরীক্ষার ধরন</label>
                  <select className="w-full bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-school-primary p-4 font-medium transition-all">
                    <option>বার্ষিক পরীক্ষা</option>
                    <option>অর্ধ-বার্ষিক পরীক্ষা</option>
                    <option>নির্বাচনী পরীক্ষা</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700 ml-1">বছর</label>
                  <select className="w-full bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-school-primary p-4 font-medium transition-all">
                    <option>২০২৬</option>
                    <option>২০২৫</option>
                    <option>২০২৪</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700 ml-1">শ্রেণী</label>
                  <select className="w-full bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-school-primary p-4 font-medium transition-all">
                    <option>৬ষ্ঠ</option>
                    <option>৭ম</option>
                    <option>৮ম</option>
                    <option>৯ম</option>
                    <option>১০ম</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700 ml-1">রোল নম্বর</label>
                  <input 
                    type="text" 
                    placeholder="রোল নম্বর" 
                    className="w-full bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-school-primary p-4 font-medium transition-all"
                  />
                </div>
              </div>
              
              <button 
                onClick={handleSearch}
                disabled={loadingResult}
                className="w-full mt-10 bg-school-primary text-white py-5 rounded-2xl font-black text-xl hover:bg-opacity-90 transition-all shadow-2xl flex items-center justify-center gap-4 group"
              >
                {loadingResult ? (
                  <>
                    <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                    খোঁজা হচ্ছে...
                  </>
                ) : (
                  <>ফলাফল দেখুন <ChevronRight className="group-hover:translate-x-2 transition-transform" size={24} /></>
                )}
              </button>
            </div>

            <AnimatePresence>
              {showResult && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  className="mt-8 pt-8 border-t border-gray-100"
                >
                  <div className="bg-green-50 border border-green-100 p-6 rounded-xl">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-bold text-green-800 text-lg">ফলাফল পাওয়া গেছে!</h4>
                        <p className="text-green-600 text-sm">রোল: ১২৩৪ | শ্রেণী: ১০ম</p>
                      </div>
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">GPA: 5.00</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">বাংলা</span>
                        <span className="font-bold text-gray-900">A+</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">ইংরেজি</span>
                        <span className="font-bold text-gray-900">A+</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">গণিত</span>
                        <span className="font-bold text-gray-900">A+</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Notices & Calendar */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
                <div>
                  <span className="text-school-secondary font-black uppercase text-sm tracking-widest">আপডেট</span>
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2">নোটিশ ও ইভেন্টস</h2>
                </div>
                <Link to="/notices" className="bg-school-primary/5 text-school-primary px-6 py-3 rounded-xl font-bold hover:bg-school-primary hover:text-white transition-all flex items-center gap-2">
                  সকল নোটিশ দেখুন <ChevronRight size={18} />
                </Link>
              </div>
              <div className="space-y-6">
                {noticesToDisplay.map((notice, i) => (
                  <motion.div 
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 flex items-center gap-6"
                  >
                    <div className="bg-school-primary/5 p-4 rounded-2xl text-center min-w-[90px] group-hover:bg-school-primary group-hover:text-white transition-colors">
                      <span className="block text-3xl font-black">{notice.date}</span>
                      <span className="text-xs font-bold uppercase tracking-wider">{notice.month}</span>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-school-primary transition-colors mb-2">
                        {notice.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1"><Calendar size={14} /> ২০২৬</span>
                        <span className="flex items-center gap-1"><Users size={14} /> সকলের জন্য</span>
                      </div>
                    </div>
                    <div className="hidden sm:block">
                      <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-school-secondary group-hover:text-white transition-all">
                        <ChevronRight size={20} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-900 p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden text-white">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-20 -mt-20 blur-2xl" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-black">এপ্রিল ২০২৬</h3>
                  <div className="flex gap-2">
                    <button className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"><ChevronLeft size={18} /></button>
                    <button className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"><ChevronRight size={18} /></button>
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-2 text-center text-xs font-black text-gray-400 mb-6 uppercase tracking-widest">
                  {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                    <div key={day}>{day}</div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-2 text-center text-sm">
                  {Array.from({ length: 35 }).map((_, i) => {
                    const day = i - 2;
                    const isToday = day === 9;
                    const isCurrentMonth = day > 0 && day <= 30;
                    return (
                      <div 
                        key={i} 
                        className={`py-3 rounded-xl transition-all cursor-pointer ${
                          isToday ? 'bg-school-secondary text-white font-black shadow-lg shadow-school-secondary/30 scale-110' : 
                          isCurrentMonth ? 'text-white hover:bg-white/10 font-medium' : 'text-white/10'
                        }`}
                      >
                        {isCurrentMonth ? day : ''}
                      </div>
                    );
                  })}
                </div>
                <div className="mt-10 pt-8 border-t border-white/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><div className="w-2 h-2 bg-school-secondary rounded-full" /> আসন্ন ইভেন্ট</h4>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                    <p className="text-sm font-bold">বার্ষিক ক্রীড়া প্রতিযোগিতা</p>
                    <p className="text-xs text-gray-400 mt-1">২৫শে এপ্রিল, ২০২৬</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Links */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-school-secondary font-black uppercase text-sm tracking-widest">লিঙ্কস</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-2">গুরুত্বপূর্ণ লিঙ্কসমূহ</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: 'ভর্তি তথ্য', href: '/admission', icon: <Users size={28} />, color: 'bg-blue-500' },
              { name: 'ফলাফল', href: '/results', icon: <Award size={28} />, color: 'bg-green-500' },
              { name: 'আইডি কার্ড জেনারেটর', href: '/id-generator', icon: <CreditCard size={28} />, color: 'bg-purple-500' },
              { name: 'নোটিশ বোর্ড', href: '/notices', icon: <FileText size={28} />, color: 'bg-amber-500' },
              { name: 'শিক্ষকবৃন্দ', href: '/teachers', icon: <BookOpen size={28} />, color: 'bg-rose-500' },
            ].map((link, i) => (
              <Link 
                key={i} 
                to={link.href}
                className="group bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all border border-gray-100 text-center flex flex-col items-center gap-4"
              >
                <div className={`${link.color} text-white p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform`}>
                  {link.icon}
                </div>
                <span className="font-black text-gray-800 text-sm leading-tight">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl transition-all group text-center">
                <div className="w-20 h-20 bg-school-primary/5 rounded-3xl flex items-center justify-center mx-auto mb-8 text-school-primary group-hover:bg-school-primary group-hover:text-white transition-all shadow-inner">
                  {f.icon}
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed font-medium">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-school-secondary/10 rounded-full blur-[120px] -mr-64 -mt-64" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-school-primary/10 rounded-full blur-[120px] -ml-64 -mb-64" />
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block bg-school-secondary text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6">ভর্তি চলছে</span>
                <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">২০২৬ শিক্ষাবর্ষে আপনার সন্তানের উজ্জ্বল ভবিষ্যৎ নিশ্চিত করুন</h2>
                <p className="text-lg md:text-xl text-gray-400 mb-12 leading-relaxed">
                  আমরা শুধু পাঠ্যবইয়ের শিক্ষা দিই না, বরং প্রতিটি শিক্ষার্থীকে একজন আদর্শ মানুষ হিসেবে গড়ে তোলার স্বপ্ন দেখি। আধুনিক ল্যাব, সমৃদ্ধ লাইব্রেরি এবং অভিজ্ঞ শিক্ষকমণ্ডলীর মাধ্যমে আমরা দিচ্ছি বিশ্বমানের শিক্ষা।
                </p>
                <div className="grid sm:grid-cols-2 gap-6 mb-12">
                  {[
                    "অনলাইন আবেদন ফরম",
                    "প্রয়োজনীয় কাগজপত্র",
                    "আবেদন ফি জমা",
                    "ভর্তি পরীক্ষা ও ভাইভা"
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                      <div className="w-8 h-8 bg-school-secondary rounded-lg flex items-center justify-center text-white text-sm font-black shadow-lg">
                        {i + 1}
                      </div>
                      <span className="font-bold text-sm">{step}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-6">
                  <Link to="/admission" className="bg-school-secondary text-white px-10 py-4 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-2xl flex items-center gap-3">
                    এখনই আবেদন করুন <ChevronRight size={24} />
                  </Link>
                  <Link to="/contact" className="bg-white/10 text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-white hover:text-school-primary transition-all border border-white/10">
                    যোগাযোগ করুন
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block relative">
                <div className="absolute inset-0 bg-school-primary/20 rounded-[3rem] blur-3xl -z-10 transform rotate-6" />
                <img 
                  src="https://image.mojib.me/uploads/school/1775745555_admission.jpg" 
                  alt="Admission" 
                  className="rounded-[3rem] shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl text-gray-900 border border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                      <Users size={24} />
                    </div>
                    <div>
                      <p className="text-2xl font-black">৫০০+</p>
                      <p className="text-xs font-bold text-gray-500 uppercase">সফল শিক্ষার্থী</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teachers Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-school-secondary font-black uppercase text-sm tracking-widest">শিক্ষকমণ্ডলী</span>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-2">আমাদের দক্ষ শিক্ষকবৃন্দ</h2>
            </div>
            <Link to="/teachers" className="bg-school-primary/5 text-school-primary px-8 py-4 rounded-2xl font-black hover:bg-school-primary hover:text-white transition-all flex items-center gap-2 shadow-sm">
              সকল শিক্ষক দেখুন <ChevronRight size={20} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {(dynamicTeachers.length > 0 ? dynamicTeachers : [
              { name: "MD. OSMAN GANI", role: "প্রধান শিক্ষক", img: "https://image.mojib.me/uploads/school/1775741426_Head%20sir.png" },
              { name: "MD. KUTUB UDDIN", role: "সহকারী প্রধান শিক্ষক", img: "https://image.mojib.me/uploads/school/1775741682_Kutub%20Uddin.png" },
              { name: "SALEH AHMAD", role: "ইসলাম ধর্ম শিক্ষক", img: "https://static.vecteezy.com/system/resources/previews/051/718/779/non_2x/colorful-3d-cartoon-teacher-education-free-png.png" },
              { name: "KAMRUN NESSA", role: "সহকারী শিক্ষক", img: "https://static.vecteezy.com/system/resources/previews/051/718/779/non_2x/colorful-3d-cartoon-teacher-education-free-png.png" },
            ]).map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 text-center group hover:shadow-2xl transition-all">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mx-auto mb-8 border-4 border-gray-50 group-hover:border-school-secondary transition-all shadow-xl">
                  <img src={t.img || t.image || "https://static.vecteezy.com/system/resources/previews/051/718/779/non_2x/colorful-3d-cartoon-teacher-education-free-png.png"} alt={t.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-2">{t.name}</h3>
                <p className="text-school-secondary font-bold text-sm uppercase tracking-widest">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-school-secondary font-black uppercase text-sm tracking-widest">গ্যালারি</span>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-2">ক্যাম্পাসের কিছু মুহূর্ত</h2>
            </div>
            <Link to="/gallery" className="bg-school-primary/5 text-school-primary px-8 py-4 rounded-2xl font-black hover:bg-school-primary hover:text-white transition-all flex items-center gap-2 shadow-sm">
              পুরো গ্যালারি দেখুন <ChevronRight size={20} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "https://dphs.mojib.me/_next/image?url=%2Fgallery%2Fimage.png&w=640&q=75",
              "https://dphs.mojib.me/_next/image?url=%2Fgallery%2Fimage%20copy.png&w=640&q=75",
              "https://dphs.mojib.me/_next/image?url=%2Fgallery%2Fimage%20copy%203.png&w=640&q=75",
              "https://dphs.mojib.me/_next/image?url=%2Fgallery%2Fimage%20copy%204.png&w=640&q=75"
            ].map((img, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="aspect-square rounded-[2rem] overflow-hidden shadow-xl group relative"
              >
                <div className="absolute inset-0 bg-school-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-school-primary scale-0 group-hover:scale-100 transition-transform duration-300">
                    <Search size={24} />
                  </div>
                </div>
                <img 
                  src={img} 
                  alt="Gallery" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Section */}
      <section className="py-24 bg-[#0a0a0a] text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-school-primary/10 rounded-full blur-[120px] -mr-64 -mt-64" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-school-secondary/10 rounded-full blur-[120px] -ml-64 -mb-64" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content - 5 columns */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8">
                  <div className="w-2 h-2 bg-school-secondary rounded-full animate-pulse" />
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-white/70">অ্যালামনাই নেটওয়ার্ক</span>
                </div>
                
                <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter">
                  স্মৃতিময় <br />
                  <span className="text-school-secondary">অতীত,</span> <br />
                  সম্ভাবনাময় <br />
                  <span className="text-school-primary">ভবিষ্যৎ</span>
                </h2>
                
                <p className="text-xl text-white/50 mb-12 leading-relaxed max-w-md">
                  ধেছুয়া পালং উচ্চ বিদ্যালয়ের প্রাক্তন ছাত্র-ছাত্রীরা আজ বিশ্বজুড়ে প্রতিষ্ঠিত। আমাদের এই বিশাল পরিবারের অংশ হতে আজই নিবন্ধন করুন।
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 mb-16">
                  <Link to="/alumni/register" className="bg-school-secondary text-white px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-[0_20px_50px_rgba(242,125,38,0.3)] flex items-center justify-center gap-3">
                    নিবন্ধন করুন <ChevronRight size={24} />
                  </Link>
                  <Link to="/alumni" className="bg-white/5 text-white border border-white/10 px-10 py-5 rounded-2xl font-black text-lg hover:bg-white hover:text-black transition-all flex items-center justify-center">
                    অ্যালামনাই পেজ
                  </Link>
                </div>
                
                <div className="grid grid-cols-2 gap-12 border-t border-white/10 pt-12">
                  <div>
                    <p className="text-4xl font-black text-white mb-1">১০০০+</p>
                    <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">নিবন্ধিত সদস্য</p>
                  </div>
                  <div>
                    <p className="text-4xl font-black text-white mb-1">৫০+</p>
                    <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">সফল ব্যাচসমূহ</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Right Content - Bento Grid - 7 columns */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-[600px] md:h-[700px]">
                {/* Large Main Image */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="col-span-2 row-span-2 relative rounded-[2.5rem] overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img 
                    src="https://image.mojib.me/uploads/school/1775745664_IMG20250609144612.jpg" 
                    alt="Alumni Event" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-8 left-8 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <p className="text-xs font-bold uppercase tracking-widest text-school-secondary mb-2">স্মৃতিচারণ</p>
                    <h4 className="text-2xl font-black">বার্ষিক পুনর্মিলনী ২০২৪</h4>
                  </div>
                </motion.div>
                
                {/* Smaller Images */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="relative rounded-[2rem] overflow-hidden group"
                >
                  <img 
                    src="https://image.mojib.me/uploads/school/1775745731_500408998_594905956961350_4760631114807330852_n%20(1).jpg" 
                    alt="Alumni" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="relative rounded-[2rem] overflow-hidden group"
                >
                  <img 
                    src="https://image.mojib.me/uploads/school/1775745745_Mojibur_Rahman.jpg" 
                    alt="Alumni" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="col-span-2 relative rounded-[2rem] overflow-hidden group h-48 md:h-auto"
                >
                  <img 
                    src="https://image.mojib.me/uploads/school/1775745897_IMG20250609145451.jpg" 
                    alt="Alumni" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-school-primary/20 mix-blend-overlay" />
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="relative rounded-[2rem] overflow-hidden group"
                >
                  <img 
                    src="https://image.mojib.me/uploads/school/1775745932_IMG20250609145027.jpg" 
                    alt="Alumni" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-school-secondary font-black uppercase text-sm tracking-widest">আমাদের ব্লগ</span>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-2">শিক্ষা ও উদ্ভাবন</h2>
            </div>
            <Link to="/blog" className="bg-school-primary/5 text-school-primary px-8 py-4 rounded-2xl font-black hover:bg-school-primary hover:text-white transition-all flex items-center gap-2 shadow-sm">
              সকল ব্লগ দেখুন <ChevronRight size={20} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "শিক্ষার্থীদের জন্য কোডিংয়ের গুরুত্ব",
                date: "2024-07-15",
                img: "https://picsum.photos/seed/coding/800/600",
                desc: "আজকের ডিজিটাল যুগে, কোডিং শেখা শুধু কম্পিউটার বিজ্ঞানীদের জন্য নয়, এটি সকল শিক্ষার্থীদের জন্য একটি অপরিহার্য দক্ষতা..."
              },
              {
                title: "বিজ্ঞান মেলায় আমাদের স্কুলের অভূতপূর্ব সাফল্য",
                date: "2024-07-10",
                img: "https://picsum.photos/seed/science-fair/800/600",
                desc: "জাতীয় পর্যায়ে অনুষ্ঠিত বিজ্ঞান মেলায় আমাদের স্কুলের শিক্ষার্থীরা অসাধারণ সাফল্য অর্জন করেছে। তাদের উদ্ভাবনী প্রকল্প..."
              },
              {
                title: "স্বাস্থ্যকর জীবনযাপনের জন্য খেলাধুলার ভূমিকা",
                date: "2024-07-05",
                img: "https://picsum.photos/seed/sports-blog/800/600",
                desc: "পড়াশোনার পাশাপাশি শারীরিক সুস্থতাও জরুরি। খেলাধুলা কীভাবে শিক্ষার্থীদের মানসিক এবং শারীরিক স্বাস্থ্যের উন্নতি করে..."
              }
            ].map((post, i) => (
              <motion.article 
                key={i}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col"
              >
                <div className="relative h-64 overflow-hidden rounded-[2rem] mb-6 shadow-lg">
                  <img 
                    src={post.img} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-school-secondary mb-3 uppercase tracking-wider">
                  <Calendar size={14} /> {post.date}
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-4 group-hover:text-school-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.desc}
                </p>
                <Link to="/blog" className="text-school-primary font-black flex items-center gap-2 hover:gap-3 transition-all text-sm">
                  আরও পড়ুন <ArrowRight size={18} />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-school-secondary font-black uppercase text-sm tracking-widest">মতামত</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-2">আমাদের শিক্ষার্থীরা যা বলে</h2>
          </div>
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-school-primary/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-school-secondary/5 rounded-full blur-3xl" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentReview}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.1, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 p-10 md:p-20 rounded-[3rem] shadow-2xl text-center relative z-10 border border-gray-100"
              >
                <div className="w-20 h-20 bg-school-primary text-white rounded-2xl flex items-center justify-center mx-auto mb-10 shadow-xl rotate-3">
                  <MessageSquare size={40} />
                </div>
                <p className="text-xl md:text-3xl text-gray-700 italic mb-10 leading-relaxed font-medium">
                  "{reviews[currentReview].text}"
                </p>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-school-secondary p-1">
                    <img src={`https://picsum.photos/seed/user${currentReview}/100/100`} alt="User" className="w-full h-full object-cover rounded-full" referrerPolicy="no-referrer" />
                  </div>
                  <h4 className="text-2xl font-black text-gray-900">{reviews[currentReview].author}</h4>
                  <p className="text-school-secondary font-bold uppercase tracking-widest text-sm mt-1">{reviews[currentReview].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className="flex justify-center gap-6 mt-12">
              <button 
                onClick={() => setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)}
                className="w-14 h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center text-school-primary hover:bg-school-primary hover:text-white transition-all border border-gray-100"
              >
                <ChevronLeft size={28} />
              </button>
              <button 
                onClick={() => setCurrentReview((prev) => (prev + 1) % reviews.length)}
                className="w-14 h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center text-school-primary hover:bg-school-primary hover:text-white transition-all border border-gray-100"
              >
                <ChevronRight size={28} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Managing Committee Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-school-secondary font-black uppercase text-sm tracking-widest">নেতৃত্ব</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-2">পরিচালনা পর্ষদ</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { name: "জনাব আবু নাঈম মুহাম্মদ হারুন", role: "সভাপতি", img: "https://picsum.photos/seed/m1/400/400" },
              { name: "জনাব ছৈয়দ আহমদ", role: "সদস্য", img: "https://picsum.photos/seed/m2/400/400" },
              { name: "জনাব মোহাম্মদ সাখাওয়াত হোছাইন", role: "সদস্য", img: "https://picsum.photos/seed/m3/400/400" },
              { name: "মোঃ ওসমান গণি", role: "সদস্য সচিব", img: "https://image.mojib.me/uploads/school/1775741426_Head%20sir.png" },
            ].map((m, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className="text-center group"
              >
                <div className="w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden mx-auto mb-6 border-4 border-white shadow-2xl group-hover:border-school-secondary transition-all">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-1 leading-tight">{m.name}</h3>
                <p className="text-school-secondary font-bold text-xs uppercase tracking-widest">{m.role}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link to="/about" className="bg-school-primary text-white px-10 py-4 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-2xl inline-block">
              সকল সদস্য দেখুন
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <span className="text-school-secondary font-black uppercase text-sm tracking-widest">যোগাযোগ</span>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-2 mb-10">আমাদের সাথে যোগাযোগ করুন</h2>
              <div className="space-y-10">
                {[
                  { icon: <MapPin size={28} />, title: 'ঠিকানা', desc: 'ধেছুয়া পালং উচ্চ বিদ্যালয়, রাবেতা-৪৭০০, রামু, কক্সবাজার' },
                  { icon: <Phone size={28} />, title: 'ফোন', desc: '০১৮১৭-৩৮২৮৫১' },
                  { icon: <Mail size={28} />, title: 'ইমেইল', desc: 'hdeschuapalong@yahoo.com' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-6 group">
                    <div className="w-16 h-16 bg-school-primary/5 rounded-2xl flex items-center justify-center text-school-primary group-hover:bg-school-primary group-hover:text-white transition-all shrink-0 shadow-inner">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-16">
                <h4 className="text-xl font-black text-gray-900 mb-6">আমাদের অনুসরণ করুন</h4>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/DhechuaPalongSchool/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-school-primary hover:text-white transition-all shadow-sm">
                    <Facebook size={24} />
                  </a>
                  {[Twitter, Youtube, Instagram].map((Icon, i) => (
                    <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-school-primary hover:text-white transition-all shadow-sm">
                      <Icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-10 md:p-16 rounded-[3rem] border border-gray-100 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-school-primary/5 rounded-full -mr-16 -mt-16 blur-2xl" />
              <form className="space-y-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700 ml-1">আপনার নাম</label>
                    <input type="text" className="w-full bg-white px-6 py-4 rounded-2xl border-none focus:ring-2 focus:ring-school-primary shadow-sm font-medium" placeholder="নাম লিখুন" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700 ml-1">ইমেইল</label>
                    <input type="email" className="w-full bg-white px-6 py-4 rounded-2xl border-none focus:ring-2 focus:ring-school-primary shadow-sm font-medium" placeholder="ইমেইল লিখুন" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700 ml-1">বিষয়</label>
                  <input type="text" className="w-full bg-white px-6 py-4 rounded-2xl border-none focus:ring-2 focus:ring-school-primary shadow-sm font-medium" placeholder="বিষয় লিখুন" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700 ml-1">বার্তা</label>
                  <textarea rows={4} className="w-full bg-white px-6 py-4 rounded-2xl border-none focus:ring-2 focus:ring-school-primary shadow-sm font-medium" placeholder="আপনার বার্তা লিখুন" />
                </div>
                <button className="w-full bg-school-primary text-white py-5 rounded-2xl font-black text-xl hover:bg-opacity-90 transition-all shadow-2xl flex items-center justify-center gap-4 group">
                  বার্তা পাঠান <ChevronRight className="group-hover:translate-x-2 transition-transform" size={24} />
                </button>
              </form>
            </div>
          </div>
          
          <div className="mt-20 h-96 rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.123456789!2d92.123456789!3d21.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDA3JzM0LjQiTiA5MsKwMDcnMzQuNCJF!5e0!3m2!1sen!2sbd!4v1234567890" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
};

export default Home;
