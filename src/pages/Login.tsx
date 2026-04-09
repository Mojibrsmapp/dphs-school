import { useState } from 'react';
import { motion } from 'motion/react';
import { Lock, User, Eye, EyeOff, ArrowRight } from 'lucide-react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50 flex items-center justify-center px-4">
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="max-w-md w-full"
      >
        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden">
          <div className="p-10 bg-school-primary text-white text-center">
            <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/20">
              <Lock size={40} />
            </div>
            <h1 className="text-3xl font-black mb-2">স্টুডেন্ট পোর্টাল</h1>
            <p className="opacity-70">আপনার আইডি ও পাসওয়ার্ড দিয়ে লগইন করুন।</p>
          </div>
          
          <form className="p-10 space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700 ml-1">স্টুডেন্ট আইডি</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  type="text" 
                  placeholder="demo: student" 
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-school-primary font-bold transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700 ml-1">পাসওয়ার্ড</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="demo: password" 
                  className="w-full pl-12 pr-12 py-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-school-primary font-bold transition-all"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-school-primary transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 text-school-primary rounded" />
                <span className="text-gray-600 font-medium">মনে রাখুন</span>
              </label>
              <a href="#" className="text-school-primary font-bold hover:underline">পাসওয়ার্ড ভুলে গেছেন?</a>
            </div>

            <button className="w-full bg-school-primary text-white py-5 rounded-2xl font-black text-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl flex items-center justify-center gap-2">
              লগইন করুন <ArrowRight size={24} />
            </button>
          </form>

          <div className="p-6 bg-gray-50 text-center border-t border-gray-100">
            <p className="text-gray-500 text-sm">
              অ্যাকাউন্ট নেই? <a href="/admission" className="text-school-primary font-bold hover:underline">ভর্তির জন্য আবেদন করুন</a>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
