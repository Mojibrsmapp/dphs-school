import { motion } from 'motion/react';
import { Users, Phone, Mail } from 'lucide-react';
import Newsletter from '../components/Newsletter';

const Staff = () => {
  const staff = [
    { name: "মোঃ আব্দুল করিম", role: "অফিস সহকারী", img: "https://static.vecteezy.com/system/resources/previews/051/718/779/non_2x/colorful-3d-cartoon-teacher-education-free-png.png" },
    { name: "মোসাম্মৎ রহিমা বেগম", role: "হিসাব রক্ষক", img: "https://static.vecteezy.com/system/resources/previews/051/718/779/non_2x/colorful-3d-cartoon-teacher-education-free-png.png" },
    { name: "মোঃ জসিম উদ্দিন", role: "লাইব্রেরিয়ান", img: "https://static.vecteezy.com/system/resources/previews/051/718/779/non_2x/colorful-3d-cartoon-teacher-education-free-png.png" },
    { name: "মোঃ রফিকুল ইসলাম", role: "ল্যাব সহকারী", img: "https://static.vecteezy.com/system/resources/previews/051/718/779/non_2x/colorful-3d-cartoon-teacher-education-free-png.png" },
    { name: "মোঃ শাহ আলম", role: "দপ্তরী", img: "https://static.vecteezy.com/system/resources/previews/051/718/779/non_2x/colorful-3d-cartoon-teacher-education-free-png.png" },
    { name: "মোসাম্মৎ ফাতেমা খাতুন", role: "পরিচ্ছন্নতা কর্মী", img: "https://static.vecteezy.com/system/resources/previews/051/718/779/non_2x/colorful-3d-cartoon-teacher-education-free-png.png" },
  ];

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-school-primary py-20 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">কর্মচারীবৃন্দ</h1>
          <p className="text-xl opacity-80">আমাদের প্রতিষ্ঠানের নিবেদিতপ্রাণ সহায়ক দল।</p>
        </div>
      </section>

      {/* Staff Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {staff.map((s, i) => (
              <motion.div 
                key={i}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all group"
              >
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg shrink-0 group-hover:scale-105 transition-transform">
                    <img src={s.img} alt={s.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{s.name}</h3>
                    <p className="text-school-secondary font-medium text-sm mb-4">{s.role}</p>
                    <div className="flex gap-3">
                      <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-400 hover:text-school-primary shadow-sm">
                        <Phone size={16} />
                      </button>
                      <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-400 hover:text-school-primary shadow-sm">
                        <Mail size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
};

export default Staff;
