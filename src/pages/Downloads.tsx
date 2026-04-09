import { motion } from 'motion/react';
import { Download, FileText, Calendar, ClipboardList } from 'lucide-react';

const Downloads = () => {
  const documents = [
    { name: "ভর্তি ফর্ম ২০২৪-২৫", category: "ফর্ম", date: "2024-06-01", icon: <ClipboardList className="text-blue-500" /> },
    { name: "একাডেমিক ক্যালেন্ডার ২০২৪-২৫", category: "সিলেবাস", date: "2024-05-20", icon: <Calendar className="text-green-500" /> },
    { name: "১০ম শ্রেণীর সিলেবাস", category: "সিলেবাস", date: "2024-05-15", icon: <FileText className="text-orange-500" /> },
    { name: "স্কুল পরিবহন আবেদন ফর্ম", category: "ফর্ম", date: "2024-05-10", icon: <ClipboardList className="text-purple-500" /> },
    { name: "ফি কাঠামো ২০২৪-২৫", category: "নথি", date: "2024-05-01", icon: <FileText className="text-red-500" /> },
  ];

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-school-primary py-20 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">ডাউনলোড</h1>
          <p className="text-xl opacity-80">গুরুত্বপূর্ণ নথি এবং ফর্ম এখানে খুঁজুন।</p>
        </div>
      </section>

      {/* Downloads Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b">
                    <th className="p-6 font-bold text-gray-700">নথির নাম</th>
                    <th className="p-6 font-bold text-gray-700">বিভাগ</th>
                    <th className="p-6 font-bold text-gray-700">প্রকাশের তারিখ</th>
                    <th className="p-6 font-bold text-gray-700 text-right">ডাউনলোড</th>
                  </tr>
                </thead>
                <tbody>
                  {documents.map((doc, i) => (
                    <motion.tr 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="border-b hover:bg-gray-50 transition-colors"
                    >
                      <td className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                            {doc.icon}
                          </div>
                          <span className="font-bold text-gray-900">{doc.name}</span>
                        </div>
                      </td>
                      <td className="p-6">
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-bold">
                          {doc.category}
                        </span>
                      </td>
                      <td className="p-6 text-gray-500">{doc.date}</td>
                      <td className="p-6 text-right">
                        <button className="bg-school-primary text-white p-3 rounded-xl hover:bg-opacity-90 transition-all shadow-lg inline-flex items-center justify-center">
                          <Download size={20} />
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Downloads;
