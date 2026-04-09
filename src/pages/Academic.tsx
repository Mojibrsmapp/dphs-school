import { BookOpen, Users, GraduationCap, Heart, Award, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import Newsletter from '../components/Newsletter';

const Academic = () => {
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

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-school-primary py-20 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">একাডেমিক প্রোগ্রাম</h1>
          <p className="text-xl opacity-80">আমাদের শিক্ষা কার্যক্রম এবং পাঠ্যক্রম সম্পর্কে বিস্তারিত।</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <motion.div 
                key={i}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-gray-50 border border-gray-100 text-center"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-school-primary shadow-sm">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://image.mojib.me/uploads/school/1775744516_%E0%A6%9C%E0%A6%BE%E0%A6%A4%E0%A7%80%E0%A6%AF%E0%A6%BC%20%E0%A6%B6%E0%A6%BF%E0%A6%95%E0%A7%8D%E0%A6%B7%E0%A6%BE%E0%A6%95%E0%A7%8D%E0%A6%B0%E0%A6%AE%20%E0%A6%93%20%E0%A6%AA%E0%A6%BE%E0%A6%A0%E0%A7%8D%E0%A6%AF%E0%A6%AA%E0%A7%81%E0%A6%B8%E0%A7%8D%E0%A6%A4%E0%A6%95%20%E0%A6%AC%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%A1%20(NCTB).webp" 
                alt="Curriculum" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB)</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                আমাদের স্কুলে জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) অনুমোদিত পাঠ্যক্রম অনুযায়ী পাঠদান করা হয়। আমরা শিক্ষার্থীদের জন্য একটি আধুনিক এবং যুগোপযোগী শিক্ষা ব্যবস্থা নিশ্চিত করি।
              </p>
              <ul className="space-y-4">
                {[
                  "৬ষ্ঠ থেকে ১০ম শ্রেণী পর্যন্ত পাঠদান",
                  "বিজ্ঞান, মানবিক ও ব্যবসায় শিক্ষা বিভাগ",
                  "আধুনিক বিজ্ঞান ল্যাবরেটরি",
                  "সমৃদ্ধ লাইব্রেরি সুবিধা",
                  "ডিজিটাল ক্লাসরুম"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <Award className="text-school-secondary" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Class Schedule */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">ক্লাস রুটিন ও সময়সূচী</h2>
            <p className="text-gray-500 mt-4">আমাদের নিয়মিত ক্লাস এবং অফিস সময়।</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <Calendar className="text-school-primary" size={32} />
                <h3 className="text-2xl font-bold text-gray-900">অফিস সময়</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-600">শনিবার - বুধবার</span>
                  <span className="font-bold text-gray-900">সকাল ৯:০০ - বিকাল ৪:০০</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-600">বৃহস্পতিবার</span>
                  <span className="font-bold text-gray-900">সকাল ৯:০০ - দুপুর ১:৩০</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">শুক্রবার</span>
                  <span className="font-bold text-red-600">সাপ্তাহিক ছুটি</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <BookOpen className="text-school-secondary" size={32} />
                <h3 className="text-2xl font-bold text-gray-900">ক্লাস সময়</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-600">প্রথম পিরিয়ড</span>
                  <span className="font-bold text-gray-900">সকাল ১০:০০ - ১০:৪০</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-600">টিফিন বিরতি</span>
                  <span className="font-bold text-gray-900">দুপুর ১:২০ - ১:৫০</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">ছুটি</span>
                  <span className="font-bold text-gray-900">বিকাল ৪:০০</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Class Routine */}
      <section id="routine" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-school-secondary font-bold tracking-wider uppercase text-sm">সময়সূচী</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">ক্লাস রুটিন</h2>
            <p className="text-gray-500 mt-4">এখানে আপনার শ্রেণীর রুটিন খুঁজুন।</p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="p-8 bg-school-primary text-white">
              <h3 className="text-2xl font-bold">৬ষ্ঠ শ্রেণী</h3>
              <p className="opacity-80">৬ষ্ঠ শ্রেণীর রুটিন</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b">
                    <th className="p-6 font-bold text-gray-700">দিন</th>
                    <th className="p-6 font-bold text-gray-700">১০:০০ - ১০:৪৫</th>
                    <th className="p-6 font-bold text-gray-700">১০:৪৫ - ১১:৩০</th>
                    <th className="p-6 font-bold text-gray-700">১১:৩০ - ১২:১৫</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50 transition-colors">
                    <td className="p-6 font-bold text-gray-900">রবিবার</td>
                    <td className="p-6 text-gray-600">বাংলা</td>
                    <td className="p-6 text-gray-600">ইংরেজি</td>
                    <td className="p-6 text-gray-600">গণিত</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="p-6 font-bold text-gray-900">সোমবার</td>
                    <td className="p-6 text-gray-600">বিজ্ঞান</td>
                    <td className="p-6 text-gray-600">সমাজ</td>
                    <td className="p-6 text-gray-600">ধর্ম</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Syllabus */}
      <section id="syllabus" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-school-secondary font-bold tracking-wider uppercase text-sm">পাঠ্যক্রম</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">সিলেবাস</h2>
            <p className="text-gray-500 mt-4">এখানে আপনার শ্রেণীর সিলেবাস খুঁজুন এবং ডাউনলোড করুন।</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-school-primary text-white">
                    <th className="p-6 font-bold">শ্রেণী</th>
                    <th className="p-6 font-bold">বিষয়/বিভাগ</th>
                    <th className="p-6 font-bold text-right">ডাউনলোড</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { class: "৬ষ্ঠ শ্রেণী", subject: "সকল বিষয়" },
                    { class: "৭ম শ্রেণী", subject: "সকল বিষয়" },
                    { class: "৮ম শ্রেণী", subject: "সকল বিষয়" },
                    { class: "৯ম শ্রেণী", subject: "বিজ্ঞান বিভাগ" },
                    { class: "৯ম শ্রেণী", subject: "মানবিক বিভাগ" },
                    { class: "১০ম শ্রেণী", subject: "বিজ্ঞান বিভাগ" },
                    { class: "১০ম শ্রেণী", subject: "মানবিক বিভাগ" },
                  ].map((item, i) => (
                    <tr key={i} className="border-b hover:bg-gray-50 transition-colors">
                      <td className="p-6 font-bold text-gray-900">{item.class}</td>
                      <td className="p-6 text-gray-600">{item.subject}</td>
                      <td className="p-6 text-right">
                        <button className="bg-school-secondary/10 text-school-secondary px-4 py-2 rounded-lg font-bold hover:bg-school-secondary hover:text-white transition-all text-sm">
                          ডাউনলোড
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section id="calendar" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-school-secondary font-bold tracking-wider uppercase text-sm">বার্ষিক পরিকল্পনা</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">একাডেমিক ক্যালেন্ডার</h2>
            <p className="text-gray-500 mt-4">এখানে সারা বছরের গুরুত্বপূর্ণ তারিখ এবং ইভেন্টগুলি দেখুন।</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="p-8 bg-gray-900 text-white flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold">ক্যালেন্ডার ২০২৪</h3>
                <p className="opacity-60">গুরুত্বপূর্ণ তারিখ ও ছুটির তালিকা</p>
              </div>
              <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-xl font-bold transition-all border border-white/10">
                PDF ডাউনলোড
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b">
                    <th className="p-6 font-bold text-gray-700">তারিখ</th>
                    <th className="p-6 font-bold text-gray-700">দিন</th>
                    <th className="p-6 font-bold text-gray-700">ইভেন্ট</th>
                    <th className="p-6 font-bold text-gray-700">ধরণ</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { date: "২০২৪-০১-০১", day: "সোমবার", event: "নতুন বছরের শুরু", type: "ছুটি", color: "text-red-600 bg-red-50" },
                    { date: "২০২৪-০২-২১", day: "বুধবার", event: "আন্তর্জাতিক মাতৃভাষা দিবস", type: "ছুটি", color: "text-red-600 bg-red-50" },
                    { date: "২০২৪-০৩-২৬", day: "মঙ্গলবার", event: "স্বাধীনতা দিবস", type: "ছুটি", color: "text-red-600 bg-red-50" },
                    { date: "২০২৪-০৪-১৪", day: "রবিবার", event: "পহেলা বৈশাখ", type: "ছুটি", color: "text-red-600 bg-red-50" },
                    { date: "২০২৪-০৬-২০", day: "বৃহস্পতিবার", event: "প্রথম সেমিস্টার পরীক্ষা শুরু", type: "পরীক্ষা", color: "text-blue-600 bg-blue-50" },
                    { date: "২০২৪-০৮-১৫", day: "বৃহস্পতিবার", event: "জাতীয় শোক দিবস", type: "ছুটি", color: "text-red-600 bg-red-50" },
                    { date: "২০২৪-১২-১৬", day: "সোমবার", event: "বিজয় দিবস", type: "ছুটি", color: "text-red-600 bg-red-50" },
                    { date: "২০২৪-১২-২৫", day: "বুধবার", event: "বড়দিন", type: "ছুটি", color: "text-red-600 bg-red-50" },
                  ].map((item, i) => (
                    <tr key={i} className="border-b hover:bg-gray-50 transition-colors">
                      <td className="p-6 text-gray-600">{item.date}</td>
                      <td className="p-6 text-gray-600">{item.day}</td>
                      <td className="p-6 font-bold text-gray-900">{item.event}</td>
                      <td className="p-6">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${item.color}`}>
                          {item.type}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
};

export default Academic;
