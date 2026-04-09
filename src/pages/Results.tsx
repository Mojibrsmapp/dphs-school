import React, { useState } from 'react';
import { Search, AlertTriangle, ChevronRight, Download, Printer, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Results = () => {
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [formData, setFormData] = useState({
    examType: '',
    year: '2026',
    className: '',
    roll: ''
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.examType || !formData.className || !formData.roll) {
      alert('অনুগ্রহ করে সকল তথ্য পূরণ করুন');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowResult(true);
    }, 1500);
  };

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-school-primary py-16 md:py-24 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-6xl font-black mb-6"
          >
            ফলাফল (Results)
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto font-medium"
          >
            আপনার পরীক্ষার ফলাফল অনলাইনে দ্রুত এবং সহজে দেখুন।
          </motion.p>
        </div>
      </section>

      {/* Search Form Section */}
      <section className="py-12 md:py-20 -mt-10 relative z-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 bg-school-secondary/10 rounded-2xl flex items-center justify-center text-school-secondary">
                <Search size={32} />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900">ফলাফল অনুসন্ধান করুন</h2>
                <p className="text-gray-500 font-medium">সঠিক তথ্য দিয়ে আপনার ফলাফল খুঁজুন</p>
              </div>
            </div>

            <form onSubmit={handleSearch} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700 ml-1">পরীক্ষার ধরন</label>
                  <select 
                    required
                    value={formData.examType}
                    onChange={(e) => setFormData({...formData, examType: e.target.value})}
                    className="w-full bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-school-primary focus:ring-0 p-4 font-medium transition-all outline-none appearance-none"
                  >
                    <option value="">নির্বাচন করুন</option>
                    <option value="annual">বার্ষিক পরীক্ষা</option>
                    <option value="half-yearly">মধ্য-বার্ষিক পরীক্ষা</option>
                    <option value="pre-test">প্রাক-নির্বাচনী</option>
                    <option value="test">নির্বাচনী</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700 ml-1">বছর</label>
                  <select 
                    value={formData.year}
                    onChange={(e) => setFormData({...formData, year: e.target.value})}
                    className="w-full bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-school-primary focus:ring-0 p-4 font-medium transition-all outline-none appearance-none"
                  >
                    <option value="2026">2026</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700 ml-1">শ্রেণী</label>
                  <select 
                    required
                    value={formData.className}
                    onChange={(e) => setFormData({...formData, className: e.target.value})}
                    className="w-full bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-school-primary focus:ring-0 p-4 font-medium transition-all outline-none appearance-none"
                  >
                    <option value="">নির্বাচন করুন</option>
                    <option value="6">৬ষ্ঠ শ্রেণী</option>
                    <option value="7">৭ম শ্রেণী</option>
                    <option value="8">৮ম শ্রেণী</option>
                    <option value="9">৯ম শ্রেণী</option>
                    <option value="10">১০ম শ্রেণী</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700 ml-1">রোল নম্বর</label>
                <input 
                  type="text" 
                  required
                  placeholder="আপনার রোল নম্বর লিখুন" 
                  value={formData.roll}
                  onChange={(e) => setFormData({...formData, roll: e.target.value})}
                  className="w-full bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-school-primary focus:ring-0 p-4 font-medium transition-all outline-none"
                />
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-school-primary text-white py-5 rounded-2xl font-black text-xl hover:bg-opacity-90 transition-all shadow-2xl flex items-center justify-center gap-4 group disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                    খোঁজা হচ্ছে...
                  </>
                ) : (
                  <>ফলাফল দেখুন <ChevronRight className="group-hover:translate-x-2 transition-transform" size={24} /></>
                )}
              </button>
            </form>

            <AnimatePresence>
              {showResult && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  className="mt-12 pt-12 border-t-2 border-dashed border-gray-100"
                >
                  <div className="bg-white border-2 border-school-primary/20 rounded-3xl overflow-hidden shadow-xl">
                    <div className="bg-school-primary/5 p-6 border-b border-school-primary/10 flex flex-col md:flex-row justify-between items-center gap-4">
                      <div className="text-center md:text-left">
                        <h3 className="text-2xl font-black text-school-primary">মার্কশিট (Mark Sheet)</h3>
                        <p className="text-gray-500 font-bold">নাম: মোঃ আব্দুল্লাহ | রোল: {formData.roll} | শ্রেণী: {formData.className}ম</p>
                      </div>
                      <div className="flex gap-3">
                        <button className="p-3 bg-white text-school-primary rounded-xl border border-school-primary/20 hover:bg-school-primary hover:text-white transition-all shadow-sm">
                          <Printer size={20} />
                        </button>
                        <button className="p-3 bg-school-primary text-white rounded-xl hover:bg-opacity-90 transition-all shadow-lg flex items-center gap-2 font-bold px-6">
                          <Download size={20} /> ডাউনলোড
                        </button>
                      </div>
                    </div>
                    
                    <div className="p-6 md:p-10">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                        <div className="bg-gray-50 p-4 rounded-2xl text-center border border-gray-100">
                          <p className="text-xs font-bold text-gray-500 uppercase mb-1">মোট নম্বর</p>
                          <p className="text-2xl font-black text-gray-900">৮৫০</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-2xl text-center border border-gray-100">
                          <p className="text-xs font-bold text-gray-500 uppercase mb-1">GPA</p>
                          <p className="text-2xl font-black text-school-secondary">5.00</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-2xl text-center border border-gray-100">
                          <p className="text-xs font-bold text-gray-500 uppercase mb-1">গ্রেড</p>
                          <p className="text-2xl font-black text-green-600">A+</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-2xl text-center border border-gray-100">
                          <p className="text-xs font-bold text-gray-500 uppercase mb-1">অবস্থান</p>
                          <p className="text-2xl font-black text-gray-900">১ম</p>
                        </div>
                      </div>

                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="bg-gray-50 text-gray-700">
                              <th className="p-4 font-black border-b">বিষয়</th>
                              <th className="p-4 font-black border-b text-center">পূর্ণমান</th>
                              <th className="p-4 font-black border-b text-center">প্রাপ্ত নম্বর</th>
                              <th className="p-4 font-black border-b text-center">গ্রেড</th>
                            </tr>
                          </thead>
                          <tbody className="text-gray-600">
                            {[
                              { subject: 'বাংলা', total: 100, marks: 85, grade: 'A+' },
                              { subject: 'ইংরেজি', total: 100, marks: 82, grade: 'A+' },
                              { subject: 'গণিত', total: 100, marks: 95, grade: 'A+' },
                              { subject: 'বিজ্ঞান', total: 100, marks: 88, grade: 'A+' },
                              { subject: 'ধর্ম', total: 100, marks: 92, grade: 'A+' },
                            ].map((row, i) => (
                              <tr key={i} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                                <td className="p-4 font-bold text-gray-900">{row.subject}</td>
                                <td className="p-4 text-center font-medium">{row.total}</td>
                                <td className="p-4 text-center font-black text-gray-900">{row.marks}</td>
                                <td className="p-4 text-center">
                                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-black">{row.grade}</span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <AlertTriangle size={32} />
              </div>
              <h3 className="text-xl font-black mb-4">ফলাফল সংক্রান্ত সমস্যা</h3>
              <p className="text-gray-600 font-medium">যদি আপনার ফলাফলে কোনো ভুল থাকে বা ফলাফল খুঁজে না পান, তবে অবিলম্বে স্কুল অফিসে যোগাযোগ করুন।</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6">
                <FileText size={32} />
              </div>
              <h3 className="text-xl font-black mb-4">অফিসিয়াল মার্কশিট</h3>
              <p className="text-gray-600 font-medium">অনলাইন কপি শুধুমাত্র তথ্যের জন্য। মূল মার্কশিট স্কুল অফিস থেকে সংগ্রহ করতে হবে।</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                <Search size={32} />
              </div>
              <h3 className="text-xl font-black mb-4">পুরাতন ফলাফল</h3>
              <p className="text-gray-600 font-medium">২০২৪ এর আগের ফলাফল দেখতে চাইলে সরাসরি স্কুল অফিসে আবেদন করতে হবে।</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Results;
