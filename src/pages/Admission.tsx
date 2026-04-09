import { Phone, CheckCircle, FileText, Calendar, Info } from 'lucide-react';
import { motion } from 'motion/react';

const Admission = () => {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-school-primary py-20 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">ভর্তি তথ্য</h1>
          <p className="text-xl opacity-80">আমাদের স্কুলে আপনার সন্তানকে ভর্তি করানোর প্রক্রিয়া।</p>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">ভর্তি প্রক্রিয়া</h2>
              <div className="space-y-8">
                {[
                  { title: "আবেদন ফর্ম সংগ্রহ", desc: "স্কুল অফিস থেকে অথবা ওয়েবসাইট থেকে ভর্তি ফর্ম সংগ্রহ করুন।" },
                  { title: "ফর্ম পূরণ ও জমা", desc: "প্রয়োজনীয় কাগজপত্রসহ পূরণকৃত ফর্ম অফিস চলাকালীন সময়ে জমা দিন।" },
                  { title: "ভর্তি পরীক্ষা (প্রযোজ্য ক্ষেত্রে)", desc: "নির্দিষ্ট তারিখে ভর্তি পরীক্ষায় অংশগ্রহণ করতে হবে।" },
                  { title: "ফলাফল ও ভর্তি", desc: "নির্বাচিত শিক্ষার্থীদের নির্দিষ্ট সময়ের মধ্যে ভর্তি প্রক্রিয়া সম্পন্ন করতে হবে।" }
                ].map((step, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 bg-school-primary text-white rounded-full flex items-center justify-center shrink-0 font-bold text-xl">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
                      <p className="text-gray-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <FileText className="text-school-secondary" /> প্রয়োজনীয় কাগজপত্র
              </h3>
              <ul className="space-y-4">
                {[
                  "শিক্ষার্থীর অনলাইন জন্ম সনদের ফটোকপি",
                  "পূর্ববর্তী স্কুলের ছাড়পত্র (প্রযোজ্য ক্ষেত্রে)",
                  "পূর্ববর্তী ক্লাসের মার্কশিট/ফলাফল",
                  "শিক্ষার্থীর পাসপোর্ট সাইজের ৪ কপি ছবি",
                  "পিতা ও মাতার জাতীয় পরিচয়পত্রের ফটোকপি",
                  "পিতা ও মাতার পাসপোর্ট সাইজের ২ কপি ছবি"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="text-green-500 shrink-0" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-10 p-6 bg-school-primary/5 rounded-2xl border border-school-primary/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-school-primary text-white rounded-full flex items-center justify-center">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase">ভর্তি হেল্পলাইন</p>
                    <p className="text-xl font-bold text-gray-900">01817-382851</p>
                  </div>
                </div>
                <button className="w-full bg-school-secondary text-white py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg">
                  ভর্তি ফর্ম ডাউনলোড করুন
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">গুরুত্বপূর্ণ তারিখসমূহ</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: "ভর্তি শুরু", date: "১লা ডিসেম্বর, ২০২৫", icon: <Calendar className="text-blue-500" /> },
              { label: "আবেদনের শেষ তারিখ", date: "১৫ই ডিসেম্বর, ২০২৫", icon: <Calendar className="text-red-500" /> },
              { label: "ফলাফল প্রকাশ", date: "২০শে ডিসেম্বর, ২০২৫", icon: <Calendar className="text-green-500" /> }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h4 className="text-gray-500 font-bold uppercase text-sm mb-2">{item.label}</h4>
                <p className="text-xl font-bold text-gray-900">{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">সাধারণ জিজ্ঞাসা</h2>
          <div className="space-y-4">
            {[
              { q: "ভর্তি ফি কত?", a: "ভর্তি ফি এবং অন্যান্য খরচ সম্পর্কে বিস্তারিত জানতে স্কুল অফিসে যোগাযোগ করুন অথবা নোটিশ বোর্ড দেখুন।" },
              { q: "কোন কোন শ্রেণীতে ভর্তি নেওয়া হয়?", a: "সাধারণত ৬ষ্ঠ থেকে ৯ম শ্রেণী পর্যন্ত আসন খালি থাকা সাপেক্ষে ভর্তি নেওয়া হয়।" },
              { q: "ভর্তি পরীক্ষা কি বাধ্যতামূলক?", a: "হ্যাঁ, ৬ষ্ঠ থেকে ৯ম শ্রেণীতে ভর্তির জন্য ভর্তি পরীক্ষায় অংশগ্রহণ করা বাধ্যতামূলক।" }
            ].map((faq, i) => (
              <div key={i} className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Info className="text-school-primary" size={20} /> {faq.q}
                </h4>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Admission Form */}
      <section id="apply" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-school-secondary font-bold tracking-wider uppercase text-sm">অনলাইন আবেদন</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">ভর্তি ফরম</h2>
            <p className="text-gray-500 mt-4">ভর্তি সংক্রান্ত তথ্য এবং অনলাইন আবেদন ফরম।</p>
          </div>

          <form className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            {/* Section: Basic Info */}
            <div className="p-8 border-b bg-gray-50">
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                <div className="w-8 h-8 bg-school-primary text-white rounded-lg flex items-center justify-center text-sm">১</div>
                ভর্তি হতে ইচ্ছুক শ্রেণি
              </h3>
            </div>
            <div className="p-8 space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">ভর্তি হতে ইচ্ছুক শ্রেণি *</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-school-primary outline-none transition-all">
                  <option>শ্রেণি নির্বাচন করুন</option>
                  <option>৬ষ্ঠ শ্রেণী</option>
                  <option>৭ম শ্রেণী</option>
                  <option>৮ম শ্রেণী</option>
                  <option>৯ম শ্রেণী</option>
                  <option>১০ম শ্রেণী</option>
                </select>
              </div>
            </div>

            {/* Section: Student Info */}
            <div className="p-8 border-b bg-gray-50">
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                <div className="w-8 h-8 bg-school-primary text-white rounded-lg flex items-center justify-center text-sm">২</div>
                শিক্ষার্থীর প্রাথমিক তথ্য
              </h3>
            </div>
            <div className="p-8 grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700">পূর্ণ নাম (বাংলা) *</label>
                <input type="text" placeholder="শিক্ষার্থীর পুরো নাম (বাংলা)" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-school-primary outline-none" />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700">পূর্ণ নাম (ইংরেজি) *</label>
                <input type="text" placeholder="Student's Full Name (English)" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-school-primary outline-none" />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700">জন্ম তারিখ *</label>
                <input type="date" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-school-primary outline-none" />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700">লিঙ্গ *</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-school-primary outline-none">
                  <option>লিঙ্গ নির্বাচন করুন</option>
                  <option>পুরুষ</option>
                  <option>মহিলা</option>
                  <option>অন্যান্য</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700">রক্তের গ্রুপ</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-school-primary outline-none">
                  <option>রক্তের গ্রুপ নির্বাচন করুন</option>
                  <option>A+</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>O+</option>
                  <option>O-</option>
                  <option>AB+</option>
                  <option>AB-</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700">জাতীয়তা *</label>
                <input type="text" defaultValue="Bangladeshi" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-school-primary outline-none" />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700">ধর্ম *</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-school-primary outline-none">
                  <option>ধর্ম নির্বাচন করুন</option>
                  <option>ইসলাম</option>
                  <option>হিন্দু</option>
                  <option>বৌদ্ধ</option>
                  <option>খ্রিস্টান</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700">জন্ম নিবন্ধন / জাতীয় পরিচয়পত্র নং *</label>
                <input type="text" placeholder="সার্টিফিকেট বা NID নম্বর লিখুন" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-school-primary outline-none" />
              </div>
            </div>

            {/* Section: Contact Info */}
            <div className="p-8 border-b bg-gray-50">
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                <div className="w-8 h-8 bg-school-primary text-white rounded-lg flex items-center justify-center text-sm">৩</div>
                যোগাযোগের তথ্য
              </h3>
            </div>
            <div className="p-8 space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700">বর্তমান ঠিকানা *</label>
                <textarea placeholder="বাসা/হোল্ডিং, গ্রাম/রাস্তা, ডাকঘর" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-school-primary outline-none h-24" />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700">জেলা *</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-school-primary outline-none">
                    <option>জেলা নির্বাচন করুন</option>
                    <option>কক্সবাজার</option>
                    <option>চট্টগ্রাম</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700">উপজেলা *</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-school-primary outline-none">
                    <option>উপজেলা নির্বাচন করুন</option>
                    <option>রামু</option>
                    <option>উখিয়া</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="sameAddress" className="w-4 h-4 text-school-primary" />
                <label htmlFor="sameAddress" className="text-sm font-bold text-gray-700">বর্তমান ঠিকানার অনুরূপ</label>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700">স্থায়ী ঠিকানা *</label>
                <textarea placeholder="বাসা/হোল্ডিং, গ্রাম/রাস্তা, ডাকঘর" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-school-primary outline-none h-24" />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700">শিক্ষার্থীর মোবাইল নম্বর</label>
                  <input type="text" placeholder="শিক্ষার্থীর মোবাইল নম্বর" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-school-primary outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700">অভিভাবকের মোবাইল নম্বর *</label>
                  <input type="text" placeholder="অভিভাবকের মোবাইল নম্বর" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-school-primary outline-none" />
                </div>
              </div>
            </div>

            {/* Section: Parents Info */}
            <div className="p-8 border-b bg-gray-50">
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                <div className="w-8 h-8 bg-school-primary text-white rounded-lg flex items-center justify-center text-sm">৪</div>
                পিতা, মাতা ও অভিভাবকের বিবরণ
              </h3>
            </div>
            <div className="p-8 space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700">পিতার নাম *</label>
                  <input type="text" placeholder="পিতার নাম" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-school-primary outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700">পিতার NID নম্বর (ঐচ্ছিক)</label>
                  <input type="text" placeholder="NID নম্বর" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-school-primary outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700">পেশা</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-school-primary outline-none">
                    <option>পেশা নির্বাচন করুন</option>
                    <option>চাকরি</option>
                    <option>ব্যবসা</option>
                    <option>কৃষি</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700">মোবাইল নম্বর</label>
                  <input type="text" placeholder="মোবাইল নম্বর" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-school-primary outline-none" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700">মাতার নাম *</label>
                  <input type="text" placeholder="মাতার নাম" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-school-primary outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700">মাতার NID নম্বর (ঐচ্ছিক)</label>
                  <input type="text" placeholder="NID নম্বর" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-school-primary outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700">পেশা</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-school-primary outline-none">
                    <option>পেশা নির্বাচন করুন</option>
                    <option>গৃহিণী</option>
                    <option>চাকরি</option>
                    <option>ব্যবসা</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700">মোবাইল নম্বর</label>
                  <input type="text" placeholder="মোবাইল নম্বর" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-school-primary outline-none" />
                </div>
              </div>
            </div>

            {/* Section: Previous Academic Info */}
            <div className="p-8 border-b bg-gray-50">
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                <div className="w-8 h-8 bg-school-primary text-white rounded-lg flex items-center justify-center text-sm">৫</div>
                পূর্ববর্তী একাডেমিক তথ্য
              </h3>
            </div>
            <div className="p-8 grid md:grid-cols-2 gap-6">
              <div className="md:col-span-2 space-y-2">
                <label className="block text-sm font-bold text-gray-700">পূর্ববর্তী প্রতিষ্ঠানের নাম *</label>
                <input type="text" placeholder="পূর্ববর্তী প্রতিষ্ঠানের নাম" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-school-primary outline-none" />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700">সর্বশেষ পরীক্ষা</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-school-primary outline-none">
                  <option>নির্বাচন করুন</option>
                  <option>PSC</option>
                  <option>JSC</option>
                  <option>বার্ষিক পরীক্ষা</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700">পরীক্ষার বছর</label>
                <input type="text" placeholder="বছর" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-school-primary outline-none" />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700">বোর্ড</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-school-primary outline-none">
                  <option>বোর্ড নির্বাচন করুন</option>
                  <option>চট্টগ্রাম</option>
                  <option>ঢাকা</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700">GPA</label>
                <input type="text" placeholder="GPA" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-school-primary outline-none" />
              </div>
            </div>

            {/* Section: Attachments */}
            <div className="p-8 border-b bg-gray-50">
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                <div className="w-8 h-8 bg-school-primary text-white rounded-lg flex items-center justify-center text-sm">৬</div>
                প্রয়োজনীয় সংযুক্তি
              </h3>
            </div>
            <div className="p-8 grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700">শিক্ষার্থীর পাসপোর্ট সাইজের ছবি *</label>
                <input type="file" className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-school-primary/10 file:text-school-primary hover:file:bg-school-primary/20" />
                <p className="text-xs text-gray-400">(সর্বোচ্চ 5MB)</p>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700">জন্ম নিবন্ধন / NID ফটোকপি *</label>
                <input type="file" className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-school-primary/10 file:text-school-primary hover:file:bg-school-primary/20" />
              </div>
            </div>

            {/* Section: Payment & Declaration */}
            <div className="p-8 bg-gray-900 text-white">
              <div className="mb-8">
                <label className="block text-sm font-bold mb-4">ভর্তি ফি ও পেমেন্ট পদ্ধতি *</label>
                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10 cursor-pointer hover:bg-white/10 transition-all">
                    <input type="radio" name="payment" className="w-4 h-4 text-school-secondary" />
                    <span>অনলাইন পেমেন্ট</span>
                  </label>
                  <label className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10 cursor-pointer hover:bg-white/10 transition-all">
                    <input type="radio" name="payment" className="w-4 h-4 text-school-secondary" />
                    <span>অফলাইন পেমেন্ট (স্কুলে)</span>
                  </label>
                </div>
                <p className="text-xs text-gray-400 mt-4">ভর্তি ফি: ৫০০ টাকা (অফেরতযোগ্য)</p>
              </div>
              <div className="flex items-start gap-3 mb-8">
                <input type="checkbox" id="declare" className="mt-1 w-4 h-4 text-school-secondary" />
                <label htmlFor="declare" className="text-sm text-gray-300">আমি এই মর্মে অঙ্গীকার করছি যে, উপরে প্রদত্ত সকল তথ্য সঠিক এবং আমি বিদ্যালয়ের সকল নিয়ম-কানুন মেনে চলতে বাধ্য থাকব।</label>
              </div>
              <button type="submit" className="w-full bg-school-secondary text-white py-5 rounded-2xl font-black text-xl hover:scale-[1.02] transition-all shadow-2xl">
                আবেদন জমা দিন
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Application Status */}
      <section id="status" className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 text-center">
            <div className="w-20 h-20 bg-school-primary/10 text-school-primary rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Info size={40} />
            </div>
            <h2 className="text-3xl font-black text-gray-900 mb-4">আবেদনের স্ট্যাটাস</h2>
            <p className="text-gray-500 mb-10">আপনার আবেদনের বর্তমান অবস্থা জানতে আবেদন আইডি দিন।</p>
            
            <div className="space-y-6">
              <div className="text-left space-y-2">
                <label className="block text-sm font-bold text-gray-700 ml-1">অ্যাপ্লিকেশন আইডি</label>
                <input type="text" placeholder="e.g., DPHS12345" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-school-primary outline-none font-bold" />
              </div>
              <button className="w-full bg-school-primary text-white py-4 rounded-xl font-black text-lg hover:bg-opacity-90 transition-all shadow-lg">
                স্ট্যাটাস দেখুন
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-6">ভর্তি আবেদন জমা দেওয়ার সময় আপনি যে অ্যাপ্লিকেশন আইডি পেয়েছেন তা প্রবেশ করান।</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admission;
