import { useState, useEffect } from 'react';
import { X, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const EmergencyNotice = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show after 2 seconds
    const timer = setTimeout(() => setShow(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden relative"
          >
            <button 
              onClick={() => setShow(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
            >
              <X size={24} />
            </button>
            
            <div className="bg-red-600 p-6 text-white flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-2xl">
                <AlertTriangle size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold">জরুরি নোটিশ</h3>
                <p className="text-red-100 text-sm">গুরুত্বপূর্ণ আপডেট</p>
              </div>
            </div>
            
            <div className="p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">লাইব্রেরি সময় পরিবর্তন</h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                আগামীকাল থেকে স্কুল লাইব্রেরির সময় পরিবর্তন করা হয়েছে। এখন থেকে লাইব্রেরি সকাল ৮:৩০ থেকে বিকাল ৪:৩০ পর্যন্ত খোলা থাকবে। সকল শিক্ষার্থীকে বিষয়টি অবগত করার জন্য অনুরোধ করা হলো।
              </p>
              <div className="flex gap-4">
                <button 
                  onClick={() => setShow(false)}
                  className="flex-1 bg-gray-900 text-white py-3 rounded-xl font-bold hover:bg-gray-800 transition-all"
                >
                  ঠিক আছে
                </button>
                <button 
                  onClick={() => setShow(false)}
                  className="flex-1 bg-gray-100 text-gray-600 py-3 rounded-xl font-bold hover:bg-gray-200 transition-all"
                >
                  বন্ধ করুন
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default EmergencyNotice;
