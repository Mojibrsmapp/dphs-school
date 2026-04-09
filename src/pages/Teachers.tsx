import { useState, useEffect } from 'react';
import { Facebook, Twitter, Mail, Search } from 'lucide-react';
import { motion } from 'motion/react';
import { api } from '../services/api';

const Teachers = () => {
  const [teachers, setTeachers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const data = await api.get("/teachers");
        setTeachers(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchTeachers();
  }, []);

  const defaultTeachers = [
    { name: "MD. OSMAN GANI", role: "প্রধান শিক্ষক", img: "https://image.mojib.me/uploads/school/1775741426_Head%20sir.png", subject: "প্রশাসন" },
    { name: "MD. KUTUB UDDIN", role: "সহকারী প্রধান শিক্ষক", img: "https://image.mojib.me/uploads/school/1775741682_Kutub%20Uddin.png", subject: "গণিত" },
  ];

  const displayTeachers = teachers.length > 0 ? teachers : defaultTeachers;

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-school-primary py-20 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">শিক্ষকমণ্ডলী</h1>
          <p className="text-xl opacity-80">আমাদের প্রতিষ্ঠানের নিবেদিতপ্রাণ শিক্ষকবৃন্দ।</p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-10 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="শিক্ষকের নাম খুঁজুন..." 
                className="w-full pl-12 pr-6 py-3 rounded-full bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-school-primary shadow-sm"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              {['সকল', 'বিজ্ঞান', 'মানবিক', 'ব্যবসায় শিক্ষা', 'ধর্ম'].map(cat => (
                <button key={cat} className={`px-5 py-2 rounded-full font-bold text-sm whitespace-nowrap transition-all ${cat === 'সকল' ? 'bg-school-primary text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-100'}`}>
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {displayTeachers.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group text-center"
              >
                <div className="relative overflow-hidden rounded-3xl aspect-[4/5] mb-6 shadow-xl">
                  <img 
                    src={t.img || t.image || "https://static.vecteezy.com/system/resources/previews/051/718/779/non_2x/colorful-3d-cartoon-teacher-education-free-png.png"} 
                    alt={t.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-school-primary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8">
                    <div className="flex justify-center gap-4">
                      <a href="#" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-school-secondary transition-all">
                        <Facebook size={20} />
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-school-secondary transition-all">
                        <Twitter size={20} />
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-school-secondary transition-all">
                        <Mail size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-school-primary transition-colors">{t.name}</h3>
                <p className="text-school-secondary font-bold text-sm uppercase tracking-wider mb-2">{t.role}</p>
                <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-500 font-medium">
                  বিষয়: {t.subject}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">আপনি কি আমাদের সাথে যোগ দিতে চান?</h2>
          <p className="text-gray-600 text-lg mb-10">আমরা সবসময়ই মেধাবী এবং নিবেদিতপ্রাণ শিক্ষকদের খুঁজি। আমাদের ক্যারিয়ার পেজ দেখুন অথবা আপনার সিভি পাঠান।</p>
          <button className="bg-school-primary text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl">
            ক্যারিয়ার পেজ দেখুন
          </button>
        </div>
      </section>
    </div>
  );
};

export default Teachers;
