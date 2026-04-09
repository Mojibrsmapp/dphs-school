import { 
  Users, Award, Globe, Heart, ChevronRight, Search, 
  Calendar, MapPin, Camera, Video, DollarSign, Mail, 
  User, ShieldCheck, Briefcase, GraduationCap, Clock
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Alumni = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBatch, setSelectedBatch] = useState('All');

  const executiveCommittee = [
    { name: "একরামুল হক", role: "সভাপতি", img: "https://picsum.photos/seed/alumni1/400/400" },
    { name: "বেগম সাবিহা খাতুন", role: "সাধারণ সম্পাদক", session: "১৯৯৪-১৯৯৬", img: "https://picsum.photos/seed/alumni2/400/400" },
    { name: "জনাব মোঃ হাসানুল করিম", role: "কোষাধ্যক্ষ", session: "১৯৯৮-২০০০", img: "https://picsum.photos/seed/alumni3/400/400" },
    { name: "মিসেস রোকসানা পারভীন", role: "সাংগঠনিক সম্পাদক", session: "২০০১-২০০৩", img: "https://picsum.photos/seed/alumni4/400/400" }
  ];

  const reunionCommittee = [
    { name: "মনজুর আলম সিকদার মানিক", role: "আহ্বায়ক", batch: "২০০১", img: "https://picsum.photos/seed/rc1/400/400" },
    { name: "ফেরদৌস ওয়াহিদ", role: "যুগ্ম আহ্বায়ক", batch: "২০১৪", img: "https://picsum.photos/seed/rc2/400/400" },
    { name: "ওসমান গণি", role: "যুগ্ম আহ্বায়ক", batch: "২০ ২০১৯", img: "https://picsum.photos/seed/rc3/400/400" },
    { name: "ফাহিম ফয়সাল রাফি", role: "সদস্য সচিব", batch: "২০১৬", img: "https://picsum.photos/seed/rc4/400/400" },
    { name: "মোহাম্মদ ইমরান", role: "যুগ্ম সদস্য সচিব", batch: "২০১৭", img: "https://picsum.photos/seed/rc5/400/400" },
    { name: "সাজ্জাদ কায়সার বাপ্পি", role: "যুগ্ম সদস্য সচিব", batch: "২০১৯", img: "https://picsum.photos/seed/rc6/400/400" },
    { name: "মোহাম্মদ রুবেল", role: "অর্থ সম্পাদক", batch: "২০১৫", img: "https://picsum.photos/seed/rc7/400/400" },
    { name: "শাহেদ হোসেন", role: "যুগ্ম অর্থ সম্পাদক", batch: "২০১৯", img: "https://picsum.photos/seed/rc8/400/400" },
    { name: "তাজ উদ্দিন সিকদার", role: "যুগ্ম অর্থ সম্পাদক", batch: "২০২৪", img: "https://picsum.photos/seed/rc9/400/400" }
  ];

  const batchReps = [
    { name: "রফিকুল ইসলাম", batch: "২০১৮" },
    { name: "মঈন উদ্দিন", batch: "২০১৮" },
    { name: "মোরশেদ হৃদয়", batch: "২০১৯" },
    { name: "আবুল কাশেম", batch: "২০১৯" },
    { name: "ওসমান গণি", batch: "২০১৯" },
    { name: "মোঃ সাইদ", batch: "২০২০" },
    { name: "মোহাম্মদ ইমরান মোবারক", batch: "২০২১" },
    { name: "মোঃ সাকিল", batch: "২০২১" },
    { name: "মোঃ কায়সার", batch: "২০২১" },
    { name: "ছালামত উল্লাহ", batch: "২০২১" },
    { name: "মোহাম্মদ মুবিন", batch: "২০২২" },
    { name: "মোহাম্মদ ওসামা", batch: "২০২২" },
    { name: "মোহাম্মদ শরীফ", batch: "২০২২" },
    { name: "মোঃ ইমরান", batch: "২০২৩" },
    { name: "মুজিবুর রহমান", batch: "২০২৩" },
    { name: "আতিক উল্লাহ", batch: "২০২৪" },
    { name: "নজরুল ইসলাম", batch: "২০২৪" },
    { name: "তাজ উদ্দিন সিকদার", batch: "২০২৪" },
    { name: "আব্বাস উদ্দিন", batch: "২০২৫" },
    { name: "জিসান আলম", batch: "২০২৫" }
  ];

  const directory = [
    { name: "আলমগীর হোসেন", role: "সফটওয়্যার ইঞ্জিনিয়ার, গুগল", batch: "2010", img: "https://picsum.photos/seed/dir1/400/400" },
    { name: "শারমিন আক্তার", role: "ডাক্তার, ঢাকা মেডিকেল কলেজ", batch: "2012", img: "https://picsum.photos/seed/dir2/400/400" },
    { name: "কামরুল ইসলাম", role: "ব্যবস্থাপক, প্রাইম ব্যাংক", batch: "2010", img: "https://picsum.photos/seed/dir3/400/400" },
    { name: "তাসনিয়া রহমান", role: "উদ্যোক্তা, নিজ ব্যবসা", batch: "2014", img: "https://picsum.photos/seed/dir4/400/400" },
    { name: "রবিউল হাসান", role: "শিক্ষক, সরকারি স্কুল", batch: "2012", img: "https://picsum.photos/seed/dir5/400/400" },
    { name: "ফারজানা ইয়াসমিন", role: "স্থপতি", batch: "2015", img: "https://picsum.photos/seed/dir6/400/400" }
  ];

  const filteredDirectory = directory.filter(member => 
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedBatch === 'All' || member.batch === selectedBatch)
  );

  return (
    <div className="pt-24 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-school-primary py-24 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -ml-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-school-secondary rounded-full -mr-48 -mb-48 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex flex-col items-center"
          >
            <img 
              src="https://image.mojib.me/uploads/school/1775744832_Dhechua%20Palong%20High%20School%20Alumni%20Welfare%20Council.jpg" 
              alt="Alumni Logo" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white/20 shadow-2xl mb-8 object-cover"
            />
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              ধেছুয়া পালং উচ্চ বিদ্যালয় <br />
              <span className="text-school-secondary">প্রাক্তন ছাত্র/ছাত্রী কল্যাণ পরিষদ</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-3xl mx-auto leading-relaxed">
              আমাদের স্কুলের প্রাক্তন ছাত্র-ছাত্রীদের একটি শক্তিশালী নেটওয়ার্ক তৈরি এবং স্কুলের উন্নয়নে অবদান রাখার একটি প্ল্যাটফর্ম।
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/alumni/register" className="bg-school-secondary text-white px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-2xl flex items-center gap-2">
                <Users size={24} /> সদস্য নিবন্ধন করুন
              </Link>
              <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all flex items-center gap-2">
                <ShieldCheck size={24} /> সদস্য ড্যাশবোর্ড
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="inline-block bg-school-primary/10 text-school-primary px-4 py-2 rounded-full font-bold text-sm mb-6">
                আমাদের সম্পর্কে
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-8 leading-tight">লক্ষ্য ও উদ্দেশ্য</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                প্রাক্তন ছাত্র-ছাত্রী কল্যাণ পরিষদের মূল লক্ষ্য হলো স্কুলের বর্তমান এবং প্রাক্তন ছাত্র-ছাত্রীদের মধ্যে একটি সেতু বন্ধন তৈরি করা। আমরা আমাদের সদস্যদের জন্য পেশাগত নেটওয়ার্কিং, পুনর্মিলন এবং স্কুলের উন্নয়নে অবদান রাখার সুযোগ তৈরি করতে প্রতিশ্রুতিবদ্ধ।
              </p>
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 mb-10">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Clock className="text-school-secondary" /> প্রতিষ্ঠাকাল ও ইতিহাস
                </h3>
                <p className="text-gray-600">
                  ২০১৯ সালে প্রতিষ্ঠিত এই পরিষদটি তখন থেকে প্রাক্তন শিক্ষার্থীদের একত্রিত করে আসছে, স্কুলের ঐতিহ্যকে সম্মান জানাচ্ছে এবং ভবিষ্যৎ প্রজন্মকে অনুপ্রাণিত করছে।
                </p>
              </div>
              <Link to="/alumni/register" className="bg-school-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-lg">
                এখনই নিবন্ধন করুন
              </Link>
            </motion.div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/alumni_meeting/800/600" 
                alt="Alumni Meeting" 
                className="rounded-[3rem] shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 bg-school-secondary p-8 rounded-3xl shadow-2xl text-white hidden lg:block">
                <p className="text-4xl font-black mb-1">৫০০০+</p>
                <p className="text-sm font-bold uppercase tracking-wider">সদস্য যুক্ত আছেন</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* President's Message */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 backdrop-blur-lg rounded-[3rem] p-12 md:p-20 border border-white/10">
            <div className="grid md:grid-cols-3 gap-16 items-center">
              <div className="md:col-span-1 text-center">
                <div className="w-64 h-64 mx-auto rounded-full border-8 border-white/10 overflow-hidden mb-8 shadow-2xl">
                  <img 
                    src="https://picsum.photos/seed/president/400/400" 
                    alt="Alumni President" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">একরামুল হক</h3>
                <p className="text-school-secondary font-bold">সভাপতি</p>
                <p className="text-white/50 text-sm mt-2">ধেছুয়া পালং উচ্চ বিদ্যালয় প্রাক্তন ছাত্র/ছাত্রী কল্যাণ পরিষদ</p>
              </div>
              <div className="md:col-span-2">
                <div className="mb-8">
                  <span className="text-6xl font-serif text-school-secondary opacity-50">"</span>
                  <h2 className="text-3xl font-bold mb-6">সভাপতির বার্তা</h2>
                  <p className="text-2xl text-white/80 italic leading-relaxed">
                    আমাদের প্রাক্তন ছাত্র-ছাত্রী কল্যাণ পরিষদে আপনাদের সকলকে স্বাগত জানাই! এই প্ল্যাটফর্মটি আমাদের সকলের জন্য একটি সংযোগস্থল, যেখানে আমরা পুরনো স্মৃতিচারণ করতে পারি এবং স্কুলের ভবিষ্যৎ উন্নয়নে একসাথে কাজ করতে পারি। আপনাদের সকলের অংশগ্রহণ আমাদের একান্ত কাম্য।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Committee */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">কার্যনির্বাহী পরিষদ</h2>
            <p className="text-gray-500 text-lg">আমাদের প্রাক্তন ছাত্র-ছাত্রী কল্যাণ পরিষদের নেতৃত্ব।</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {executiveCommittee.map((member, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-gray-50 rounded-[2.5rem] p-8 text-center border border-gray-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-40 h-40 mx-auto rounded-3xl overflow-hidden mb-6 shadow-lg">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                <p className="text-school-primary font-bold text-sm mb-2">{member.role}</p>
                {member.session && <p className="text-gray-400 text-xs">সেশন: {member.session}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reunion Committee */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">ঈদ পুনর্মিলনী উদযাপন কমিটি ২০২৫</h2>
            <p className="text-gray-500 text-lg">ঈদ পুনর্মিলনী উদযাপন কমিটির সদস্যবৃন্দ।</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {reunionCommittee.map((member, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl flex items-center gap-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 shadow-md">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{member.name}</h4>
                  <p className="text-school-secondary text-sm font-bold">{member.role}</p>
                  <p className="text-gray-400 text-xs mt-1">ব্যাচ: {member.batch}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Batch Representatives */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">ব্যাচ প্রতিনিধি</h2>
            <p className="text-gray-500 text-lg">বিভিন্ন ব্যাচের প্রতিনিধিদের সাথে পরিচিত হন।</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {batchReps.map((rep, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-2xl text-center border border-gray-100 hover:bg-school-primary/5 transition-all">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <User className="text-school-primary" size={20} />
                </div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">{rep.name}</h4>
                <p className="text-school-secondary text-[10px] font-bold uppercase">ব্যাচ: {rep.batch}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Directory */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <h2 className="text-4xl font-black text-gray-900 mb-4">সদস্য ডিরেক্টরি</h2>
              <p className="text-gray-500">আমাদের প্রাক্তন সদস্যদের খুঁজুন এবং তাদের সাথে সংযোগ স্থাপন করুন।</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative flex-grow">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  type="text" 
                  placeholder="সদস্যের নাম দিয়ে খুঁজুন..."
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border-none focus:ring-2 focus:ring-school-primary shadow-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <select 
                className="py-4 px-6 rounded-2xl border-none focus:ring-2 focus:ring-school-primary shadow-sm bg-white font-bold text-gray-700"
                value={selectedBatch}
                onChange={(e) => setSelectedBatch(e.target.value)}
              >
                <option value="All">সকল ব্যাচ</option>
                <option value="2010">2010</option>
                <option value="2012">2012</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
              </select>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDirectory.map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 flex items-center gap-6 hover:shadow-xl transition-all"
              >
                <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 shadow-lg">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-gray-500 text-sm mb-2">{member.role}</p>
                  <div className="inline-block bg-school-primary/10 text-school-primary px-3 py-1 rounded-full text-xs font-bold">
                    ব্যাচ: {member.batch}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events & Reunion */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">ইভেন্টস ও রিইউনিয়ন</h2>
            <p className="text-gray-500 text-lg">আমাদের আসন্ন ইভেন্টে যোগ দিন এবং অতীত মুহূর্তগুলো স্মরণ করুন।</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-school-primary rounded-[3rem] p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <Calendar className="text-school-secondary" size={32} />
                    <span className="text-2xl font-bold">জানুয়ারি ১০, ২০২৫</span>
                  </div>
                  <h3 className="text-4xl font-black mb-6">আসন্ন পুনর্মিলনী ২০২৫</h3>
                  <p className="text-xl opacity-80 mb-10 leading-relaxed">
                    সকল প্রাক্তন ছাত্র-ছাত্রীদের জন্য আমাদের বার্ষিক পুনর্মিলনীতে যোগদানের জন্য আমন্ত্রণ। স্মৃতিচারণ এবং নতুন সংযোগ তৈরির একটি অসাধারণ সুযোগ।
                  </p>
                  <Link to="/alumni/register" className="bg-white text-school-primary px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-2xl">
                    রেজিস্ট্রেশন করুন
                  </Link>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              {[
                { title: "Reunion 2022", date: "Dec 25, 2022" },
                { title: "Annual Picnic 2021", date: "Feb 15, 2021" },
                { title: "Charity Drive 2020", date: "Oct 10, 2020" },
                { title: "Networking Dinner 2019", date: "Nov 20, 2019" }
              ].map((event, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-3xl border border-gray-100 flex items-center justify-between group hover:bg-white hover:shadow-lg transition-all">
                  <div>
                    <h4 className="font-bold text-gray-900 group-hover:text-school-primary transition-colors">{event.title}</h4>
                    <p className="text-gray-400 text-xs mt-1">{event.date}</p>
                  </div>
                  <ChevronRight className="text-gray-300 group-hover:text-school-primary transition-colors" />
                </div>
              ))}
              <button className="w-full py-4 text-school-primary font-bold hover:underline">সম্পূর্ণ গ্যালারি দেখুন</button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">প্রাক্তন ছাত্র-ছাত্রী গ্যালারি</h2>
            <p className="text-gray-500">পুরনো স্মৃতি এবং রিইউনিয়নের মুহূর্তগুলো।</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "পুরনো ক্যাম্পাসের স্মৃতি", icon: <Camera />, type: "Photo" },
              { title: "ক্লাসরুমের একটি দিন", icon: <Video />, type: "Video" },
              { title: "প্রথম ব্যাচের শিক্ষার্থী", icon: <Camera />, type: "Photo" },
              { title: "স্কুল লাইব্রেরী, ১৯৯৫", icon: <Camera />, type: "Photo" }
            ].map((item, i) => (
              <div key={i} className="group relative rounded-3xl overflow-hidden aspect-square shadow-lg">
                <img 
                  src={`https://picsum.photos/seed/mem${i}/600/600`} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                  <div className="flex items-center gap-2 text-school-secondary mb-2">
                    {item.icon}
                    <span className="text-[10px] font-bold uppercase tracking-widest">{item.type}</span>
                  </div>
                  <h4 className="text-white font-bold text-sm">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Activities */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">সামাজিক কার্যক্রম</h2>
            <p className="text-gray-500 text-lg">আমাদের কল্যাণমূলক কার্যক্রম সম্পর্কে জানুন।</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <GraduationCap className="text-blue-500" />, title: "বৃত্তি প্রদান", desc: "মেধাবী ও অসচ্ছল শিক্ষার্থীদের জন্য শিক্ষাবৃত্তি কার্যক্রম।" },
              { icon: <Heart className="text-red-500" />, title: "অসুস্থদের সহায়তা", desc: "অসুস্থ প্রাক্তন ছাত্র-ছাত্রীদের পাশে দাঁড়ানো এবং আর্থিক সহায়তা প্রদান।" },
              { icon: <Briefcase className="text-school-secondary" />, title: "স্কুল উন্নয়ন ফান্ড", desc: "স্কুলের অবকাঠামোগত এবং শিক্ষাগত মান উন্নয়নে প্রাক্তন ছাত্র-ছাত্রীদের অবদান।" }
            ].map((activity, i) => (
              <div key={i} className="bg-gray-50 p-12 rounded-[3rem] text-center border border-gray-100 hover:shadow-2xl transition-all group">
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-md group-hover:scale-110 transition-transform">
                  {activity.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{activity.title}</h3>
                <p className="text-gray-600 leading-relaxed">{activity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-black mb-8 leading-tight">ডোনেশন ও ফান্ড কালেকশন</h2>
              <p className="text-xl text-white/70 mb-12 leading-relaxed">
                আপনার উদার অনুদান আমাদের স্কুলের ছাত্র-ছাত্রীদের ভবিষ্যৎ গঠনে এবং শিক্ষাঙ্গনের উন্নয়নে সরাসরি ভূমিকা রাখে।
              </p>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-school-secondary rounded-2xl flex items-center justify-center shrink-0">
                    <Globe size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">অনলাইন ডোনেশন</h4>
                    <p className="text-white/50">আপনার পছন্দের যেকোনো মাধ্যমে ডোনেট করে স্কুলের উন্নয়নে অবদান রাখুন।</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-school-primary rounded-2xl flex items-center justify-center shrink-0">
                    <DollarSign size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">ব্যাংক ট্রান্সফার</h4>
                    <p className="text-white/50">Account Name: DPHS Alumni Association</p>
                    <p className="text-white/50">Account No: 1234567890</p>
                    <p className="text-white/50">Bank Name: Example Bank, Cox's Bazar Branch</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-xl p-12 rounded-[3rem] border border-white/10">
              <h3 className="text-2xl font-bold mb-8">মোবাইল ব্যাংকিং</h3>
              <div className="grid grid-cols-2 gap-6 mb-12">
                <div className="bg-white p-6 rounded-3xl text-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/BKash_Logo.svg/1200px-BKash_Logo.svg.png" alt="bKash" className="h-8 mx-auto mb-4 object-contain" />
                  <p className="text-gray-900 font-bold text-sm">বিকাশ মার্চেন্ট</p>
                  <p className="text-gray-500 text-xs mt-1">01xxxxxxxxx</p>
                </div>
                <div className="bg-white p-6 rounded-3xl text-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Nagad_Logo.svg/1200px-Nagad_Logo.svg.png" alt="Nagad" className="h-8 mx-auto mb-4 object-contain" />
                  <p className="text-gray-900 font-bold text-sm">নগদ মার্চেন্ট</p>
                  <p className="text-gray-500 text-xs mt-1">01xxxxxxxxx</p>
                </div>
              </div>
              <div className="p-8 bg-school-primary/20 rounded-3xl border border-school-primary/30">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <ShieldCheck className="text-school-secondary" /> স্বচ্ছতা ও রিপোর্ট
                </h4>
                <p className="text-sm text-white/70 mb-6">আমরা সকল অনুদানের স্বচ্ছতা নিশ্চিত করতে প্রতিশ্রুতিবদ্ধ।</p>
                <button className="w-full bg-school-secondary text-white py-4 rounded-xl font-bold hover:scale-105 transition-all">
                  স্বচ্ছতা রিপোর্ট দেখুন
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter & Contact */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-12 rounded-[3rem] border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">নিউজলেটার</h3>
              <p className="text-gray-500 mb-8">অ্যালামনাই সম্পর্কিত সর্বশেষ খবর এবং আপডেটের জন্য সাবস্ক্রাইব করুন।</p>
              <div className="flex gap-4">
                <input 
                  type="email" 
                  placeholder="আপনার ইমেইল দিন..."
                  className="flex-grow px-6 py-4 rounded-2xl border-none focus:ring-2 focus:ring-school-primary shadow-sm"
                />
                <button className="bg-school-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-opacity-90 transition-all">
                  সাবস্ক্রাইব
                </button>
              </div>
            </div>
            <div className="bg-school-primary p-12 rounded-[3rem] text-white flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-bold mb-4">অ্যালামনাই অফিসে যোগাযোগ</h3>
              <p className="opacity-80 mb-8">অ্যাসোসিয়েশন সম্পর্কে আরও জানতে বা কোনো নির্দিষ্ট তথ্যের জন্য, আমাদের সাথে যোগাযোগ করুন।</p>
              <button className="bg-white text-school-primary px-10 py-4 rounded-2xl font-bold hover:scale-105 transition-all flex items-center gap-2">
                <Mail size={24} /> আমাদের ইমেল করুন
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Alumni;

