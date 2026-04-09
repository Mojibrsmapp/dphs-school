import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Filter, User } from 'lucide-react';

const Students = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClass, setSelectedClass] = useState("সকল শ্রেণী");

  const students = [
    { name: "আব্দুল্লাহ আল মামুন", class: "৬ষ্ঠ শ্রেণী", roll: "101", id: "S001", img: "https://i.pravatar.cc/150?u=S001" },
    { name: "ফাতেমা আক্তার", class: "৬ষ্ঠ শ্রেণী", roll: "102", id: "S002", img: "https://i.pravatar.cc/150?u=S002" },
    { name: "রহিম উদ্দিন", class: "৭ম শ্রেণী", roll: "201", id: "S003", img: "https://i.pravatar.cc/150?u=S003" },
  ];

  const filteredStudents = students.filter(s => 
    (selectedClass === "সকল শ্রেণী" || s.class === selectedClass) &&
    (s.name.includes(searchTerm) || s.roll.includes(searchTerm) || s.id.includes(searchTerm))
  );

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-school-primary py-20 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">শিক্ষার্থী তথ্য</h1>
          <p className="text-xl opacity-80">আমাদের স্কুলের সকল শিক্ষার্থীদের তালিকা দেখুন।</p>
        </div>
      </section>

      {/* Student List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col md:flex-row gap-6 items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">শিক্ষার্থীদের তালিকা</h2>
              <p className="text-gray-500">নাম, রোল বা শ্রেণী দিয়ে ফিল্টার করুন।</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative">
                <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <select 
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                  className="pl-12 pr-8 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-school-primary appearance-none font-bold text-gray-700"
                >
                  <option>সকল শ্রেণী</option>
                  <option>৬ষ্ঠ শ্রেণী</option>
                  <option>৭ম শ্রেণী</option>
                  <option>৮ম শ্রেণী</option>
                  <option>৯ম শ্রেণী</option>
                  <option>১০ম শ্রেণী</option>
                </select>
              </div>
              <div className="relative flex-grow sm:w-80">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="text" 
                  placeholder="নাম বা রোল দিয়ে খুঁজুন..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-school-primary font-bold"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b">
                    <th className="p-6 font-bold text-gray-700">ফটো</th>
                    <th className="p-6 font-bold text-gray-700">নাম</th>
                    <th className="p-6 font-bold text-gray-700">শ্রেণী</th>
                    <th className="p-6 font-bold text-gray-700">রোল</th>
                    <th className="p-6 font-bold text-gray-700">শিক্ষার্থী আইডি</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents.map((student, i) => (
                    <motion.tr 
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="border-b hover:bg-gray-50 transition-colors"
                    >
                      <td className="p-6">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-school-primary/20">
                          <img src={student.img} alt={student.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                      </td>
                      <td className="p-6 font-bold text-gray-900">{student.name}</td>
                      <td className="p-6 text-gray-600">{student.class}</td>
                      <td className="p-6 text-gray-600">{student.roll}</td>
                      <td className="p-6">
                        <span className="font-mono bg-gray-100 px-3 py-1 rounded-md text-sm font-bold text-gray-700">
                          {student.id}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {filteredStudents.length === 0 && (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-300">
                <User size={40} />
              </div>
              <p className="text-gray-500 text-xl font-bold">কোনো শিক্ষার্থী পাওয়া যায়নি।</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Students;
