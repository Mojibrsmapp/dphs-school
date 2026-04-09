import { Award, Users, Heart, BookOpen, GraduationCap, Globe, Shield, Zap, Building, Microscope, Monitor } from 'lucide-react';
import { motion } from 'motion/react';
import Newsletter from '../components/Newsletter';

const About = () => {
  const members = [
    { name: "জনাব আবু নাঈম মুহাম্মদ হারুন", role: "সভাপতি", img: "https://picsum.photos/seed/m1/400/400" },
    { name: "জনাব ছৈয়দ আহমদ", role: "সদস্য", img: "https://picsum.photos/seed/m2/400/400" },
    { name: "জনাব মোহাম্মদ সাখাওয়াত হোছাইন", role: "সদস্য", img: "https://picsum.photos/seed/m3/400/400" },
    { name: "মোঃ ওসমান গণি", role: "সদস্য সচিব", img: "https://image.mojib.me/uploads/school/1775741426_Head%20sir.png" }
  ];

  const stats = [
    { label: "EIIN", value: "106388" },
    { label: "বোর্ড", value: "Chittagong" },
    { label: "মোট জমি", value: "১৩৮ ডেসিমেল" },
    { label: "খেলার মাঠ", value: "৫৮ ডেসিমেল" },
    { label: "ফ্লোর স্পেস", value: "৪,০৬৪ বর্গ ফুট" },
    { label: "রুম সংখ্যা", value: "১০" },
    { label: "ছাত্র-শিক্ষক অনুপাত", value: "৩২:১" },
    { label: "ছাত্র-কর্মচারী অনুপাত", value: "৬৩:১" },
    { label: "গড় শিক্ষক বয়স", value: "৪৩ বছর" }
  ];

  const principles = [
    { icon: <Award />, title: "উৎকর্ষ", desc: "আমরা প্রতিটি কাজে শ্রেষ্ঠত্ব অর্জনের চেষ্টা করি।" },
    { icon: <Shield />, title: "সততা", desc: "নৈতিকতা এবং সততাই আমাদের মূল ভিত্তি।" },
    { icon: <Heart />, title: "শ্রদ্ধা", desc: "পরস্পরের প্রতি শ্রদ্ধা এবং সহানুভূতি প্রদর্শন করি।" },
    { icon: <Users />, title: "সম্প্রদায়", desc: "আমরা একটি শক্তিশালী এবং ঐক্যবদ্ধ পরিবার।" },
    { icon: <Zap />, title: "উদ্ভাবন", desc: "নতুন চিন্তা এবং প্রযুক্তির সাথে তাল মিলিয়ে চলি।" }
  ];

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-school-primary py-20 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">আমাদের সম্পর্কে</h1>
          <p className="text-xl opacity-80">প্রতিটি শিক্ষার্থীর মধ্যে থাকা সম্ভাবনাকে বিকশিত করে একটি উজ্জ্বল ভবিষ্যতের জন্য প্রতিশ্রুতিবদ্ধ।</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-10 rounded-3xl border border-gray-100"
            >
              <h2 className="text-3xl font-bold text-school-primary mb-6">আমাদের লক্ষ্য</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                একটি প্রযুক্তি-ভিত্তিক উদ্দীপক শিক্ষার পরিবেশ প্রদান করা, যা ব্যক্তিগত সম্ভাবনাকে সর্বাধিক করে তোলে এবং নিশ্চিত করে যে সকল স্তরের শিক্ষার্থীরা শিক্ষা, কর্ম এবং জীবনের চ্যালেঞ্জ মোকাবেলার জন্য সুসজ্জিত।
              </p>
            </motion.div>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-school-primary p-10 rounded-3xl text-white"
            >
              <h2 className="text-3xl font-bold mb-6">আমাদের দৃষ্টিভঙ্গি</h2>
              <p className="text-white/90 text-lg leading-relaxed">
                একটি বিশ্বমানের দৃষ্টিভঙ্গি এবং মূল্যবোধ ও সামাজিক দায়বদ্ধতার দৃঢ় অনুভূতিসহ ভবিষ্যতের নেতা তৈরি করে শিক্ষার একটি অগ্রণী কেন্দ্র হওয়া।
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/dphs_building/800/600" 
                alt="School Building" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">আমাদের ইতিহাস</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                ১৯৯৫ সালে প্রতিষ্ঠিত, ধেছুয়া পালং উচ্চ বিদ্যালয় একটি ছোট পরিসরে যাত্রা শুরু করেছিল। বছরের পর বছর ধরে, আমাদের প্রতিষ্ঠানটি এই অঞ্চলের অন্যতম সম্মানিত শিক্ষা প্রতিষ্ঠানে পরিণত হয়েছে।
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                আমরা হাজার হাজার শিক্ষার্থীকে তাদের স্বপ্ন পূরণে সহায়তা করেছি এবং শ্রেষ্ঠত্বের একটি ঐতিহ্য তৈরি করেছি যা আজও আমাদের অনুপ্রাণিত করে। আমাদের প্রতিষ্ঠাতাদের দৃষ্টিভঙ্গি ছিল এমন একটি জায়গা তৈরি করা যেখানে শিক্ষার্থীরা কেবল জ্ঞান অর্জন করবে না, বরং চরিত্র এবং মূল্যবোধও গড়ে তুলবে।
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Important Info Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">গুরুত্বপূর্ণ তথ্য</h2>
            <p className="text-gray-500 mt-4">আমাদের প্রতিষ্ঠানের প্রাথমিক তথ্যসমূহ।</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-center">
                <p className="text-gray-500 text-sm mb-1">{s.label}</p>
                <h4 className="text-xl font-bold text-school-primary">{s.value}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 bg-school-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">মূল নীতি</h2>
            <p className="opacity-80 mt-4">যে নীতিগুলি আমাদের পথ দেখায়।</p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {principles.map((p, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                  {p.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-sm opacity-70">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Headmaster Message */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-3xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-3">
              <div className="md:col-span-1 bg-school-secondary p-8 flex flex-col items-center justify-center text-white text-center">
                <div className="w-48 h-48 rounded-full border-4 border-white/30 overflow-hidden mb-6 shadow-lg">
                  <img src="https://image.mojib.me/uploads/school/1775741426_Head%20sir.png" alt="Headmaster" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-2xl font-bold">মোঃ ওসমান গণি</h3>
                <p className="opacity-80">প্রধান শিক্ষক</p>
              </div>
              <div className="md:col-span-2 p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">অধ্যক্ষের বাণী</h2>
                <p className="text-xl text-gray-700 italic leading-relaxed mb-6">
                  "ধেছুয়া পালং উচ্চ বিদ্যালয়ে স্বাগতম! আমরা আমাদের শিক্ষার্থীদের জন্য একটি নিরাপদ, সহায়ক এবং সমৃদ্ধ পরিবেশ প্রদানে নিবেদিত। আমাদের উৎসাহী শিক্ষকরা শেখার প্রতি ভালোবাসা জাগিয়ে তুলতে এবং প্রতিটি শিক্ষার্থীকে তাদের ব্যক্তিগত সেরা অর্জনে সহায়তা করার জন্য অক্লান্ত পরিশ্রম করেন। আমরা একটি সত্যিকারের ব্যতিক্রমী শিক্ষাগত অভিজ্ঞতা তৈরি করতে পিতামাতা এবং সম্প্রদায়ের সাথে শক্তিশালী অংশীদারিত্ব গড়ে তুলতে বিশ্বাস করি।"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">অবকাঠামো ও সুবিধাসমূহ</h2>
            <p className="text-gray-500 mt-4">শিক্ষার্থীদের জন্য আমাদের আধুনিক সুযোগ-সুবিধাসমূহ।</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Building />, title: "আধুনিক শ্রেণীকক্ষ", desc: "প্রযুক্তি নির্ভর স্মার্ট ক্লাসরুম।" },
              { icon: <BookOpen />, title: "সমৃদ্ধ লাইব্রেরি", desc: "হাজারো বইয়ের বিশাল সংগ্রহ।" },
              { icon: <Microscope />, title: "বিজ্ঞানাগার", desc: "উন্নত মানের ল্যাবরেটরি সুবিধা।" },
              { icon: <Monitor />, title: "কম্পিউটার ল্যাব", desc: "আধুনিক আইটি ল্যাব সুবিধা।" }
            ].map((f, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-school-primary/10 rounded-2xl flex items-center justify-center text-school-primary mb-6">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Managing Committee */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">পরিচালনা পর্ষদ</h2>
            <p className="text-gray-500 mt-4">আমাদের প্রতিষ্ঠানের সুযোগ্য নেতৃত্ব।</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {members.map((m, i) => (
              <div key={i} className="text-center">
                <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-6 border-4 border-white shadow-lg">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{m.name}</h3>
                <p className="text-school-secondary text-sm font-medium">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
};

export default About;
