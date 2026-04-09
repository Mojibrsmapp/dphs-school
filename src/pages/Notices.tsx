import { Bell, ChevronRight, Download, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

const Notices = () => {
  const notices = [
    { date: '২০', month: 'আগস্ট', year: '২০২৬', title: 'বার্ষিক ক্রীড়া দিবস স্থগিত সংক্রান্ত নোটিশ', category: 'সাধারণ' },
    { date: '১৮', month: 'আগস্ট', year: '২০২৬', title: 'বিজ্ঞান মেলা ২০২৬ এর নিবন্ধন সংক্রান্ত বিজ্ঞপ্তি', category: 'ইভেন্ট' },
    { date: '১৫', month: 'আগস্ট', year: '২০২৬', title: 'জাতীয় শোক দিবস পালন ও আলোচনা সভা', category: 'একাডেমিক' },
    { date: '১০', month: 'আগস্ট', year: '২০২৬', title: 'অর্ধ-বার্ষিক পরীক্ষার ফলাফল প্রকাশ', category: 'ফলাফল' },
    { date: '০৫', month: 'আগস্ট', year: '২০২৬', title: 'আগস্ট মাসের বেতন পরিশোধের সময়সীমা', category: 'হিসাব' },
    { date: '০১', month: 'আগস্ট', year: '২০২৬', title: 'নতুন লাইব্রেরি কার্ড সংগ্রহ সংক্রান্ত নির্দেশিকা', category: 'লাইব্রেরি' },
  ];

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-school-primary py-20 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">নোটিশ বোর্ড</h1>
          <p className="text-xl opacity-80">স্কুলের সকল গুরুত্বপূর্ণ ঘোষণা এবং নোটিশ এখানে পাবেন।</p>
        </div>
      </section>

      {/* Notices List */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 mb-10 justify-center">
            {['সকল', 'সাধারণ', 'একাডেমিক', 'ফলাফল', 'ইভেন্ট', 'ভর্তি'].map(cat => (
              <button key={cat} className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${cat === 'সকল' ? 'bg-school-primary text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-100'}`}>
                {cat}
              </button>
            ))}
          </div>

          <div className="space-y-6">
            {notices.map((notice, i) => (
              <motion.div 
                key={i}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col md:flex-row items-start md:items-center gap-6 group"
              >
                <div className="bg-school-primary/5 p-4 rounded-2xl text-center min-w-[100px] border border-school-primary/10">
                  <span className="block text-3xl font-bold text-school-primary">{notice.date}</span>
                  <span className="text-xs text-gray-500 font-bold uppercase">{notice.month} {notice.year}</span>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-school-secondary/10 text-school-secondary text-[10px] font-bold uppercase px-2 py-0.5 rounded">
                      {notice.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-school-primary transition-colors cursor-pointer">
                    {notice.title}
                  </h3>
                </div>
                <div className="flex gap-3 w-full md:w-auto">
                  <button className="flex-grow md:flex-none bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-bold text-sm hover:bg-gray-200 transition-all flex items-center justify-center gap-2">
                    <Download size={16} /> ডাউনলোড
                  </button>
                  <button className="flex-grow md:flex-none bg-school-primary text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-opacity-90 transition-all flex items-center justify-center gap-2">
                    বিস্তারিত <ChevronRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center gap-2">
            <button className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-400 cursor-not-allowed">
              <ChevronRight className="rotate-180" size={20} />
            </button>
            <button className="w-10 h-10 rounded-lg bg-school-primary text-white font-bold">১</button>
            <button className="w-10 h-10 rounded-lg bg-white border border-gray-200 font-bold text-gray-600 hover:bg-gray-50">২</button>
            <button className="w-10 h-10 rounded-lg bg-white border border-gray-200 font-bold text-gray-600 hover:bg-gray-50">৩</button>
            <button className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Subscription */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-school-secondary rounded-3xl p-10 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-black/10 skew-y-6 translate-y-1/2" />
            <div className="relative z-10">
              <Bell className="mx-auto mb-6" size={48} />
              <h2 className="text-3xl font-bold mb-4">নোটিশ আপডেট পেতে চান?</h2>
              <p className="text-lg opacity-90 mb-8">আপনার ইমেইল দিয়ে সাবস্ক্রাইব করুন এবং সকল নতুন নোটিশ সরাসরি ইমেইলে পান।</p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="আপনার ইমেইল" 
                  className="flex-grow px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-school-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-lg">
                  সাবস্ক্রাইব
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Notices;
