import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { QRCodeSVG } from 'qrcode.react';
import { useReactToPrint } from 'react-to-print';
import { 
  User, Hash, GraduationCap, Droplets, 
  Camera, Printer, Download, RefreshCw,
  ShieldCheck, MapPin, Phone, Globe
} from 'lucide-react';
import Newsletter from '../components/Newsletter';

const IDGenerator = () => {
  const [student, setStudent] = useState({
    name: '',
    id: '',
    class: '১০ম',
    roll: '',
    bloodGroup: 'A+',
    photo: '',
    validUntil: 'ডিসেম্বর ২০২৬'
  });

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: cardRef,
    documentTitle: `ID_Card_${student.name || 'Student'}`,
  });

  const generateID = () => {
    const year = new Date().getFullYear();
    const random = Math.floor(1000 + Math.random() * 9000);
    const newID = `DPHS-${year}-${random}`;
    setStudent({ ...student, id: newID });
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setStudent({ ...student, photo: url });
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-school-primary py-16 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">ডিজিটাল আইডি কার্ড জেনারেটর</h1>
          <p className="text-xl opacity-80">শিক্ষার্থীদের জন্য স্বয়ংক্রিয় আইডি কার্ড তৈরির সিস্টেম।</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Form Side */}
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <User className="text-school-secondary" /> শিক্ষার্থীর তথ্য দিন
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">পুরো নাম</label>
                  <input 
                    type="text" 
                    value={student.name}
                    onChange={(e) => setStudent({...student, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border-gray-200 focus:ring-school-primary focus:border-school-primary" 
                    placeholder="নাম লিখুন" 
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">শ্রেণী</label>
                    <select 
                      value={student.class}
                      onChange={(e) => setStudent({...student, class: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border-gray-200 focus:ring-school-primary focus:border-school-primary"
                    >
                      {['৬ষ্ঠ', '৭ম', '৮ম', '৯ম', '১০ম'].map(c => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">রোল নম্বর</label>
                    <input 
                      type="text" 
                      value={student.roll}
                      onChange={(e) => setStudent({...student, roll: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border-gray-200 focus:ring-school-primary focus:border-school-primary" 
                      placeholder="রোল" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">রক্তের গ্রুপ</label>
                    <select 
                      value={student.bloodGroup}
                      onChange={(e) => setStudent({...student, bloodGroup: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border-gray-200 focus:ring-school-primary focus:border-school-primary"
                    >
                      {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(bg => <option key={bg}>{bg}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">আইডি নম্বর</label>
                    <div className="flex gap-2">
                      <input 
                        type="text" 
                        readOnly
                        value={student.id}
                        className="w-full px-4 py-3 rounded-xl border-gray-200 bg-gray-50 text-gray-500" 
                        placeholder="অটো জেনারেট করুন" 
                      />
                      <button 
                        onClick={generateID}
                        className="p-3 bg-school-secondary text-white rounded-xl hover:bg-opacity-90 transition-all"
                        title="Generate ID"
                      >
                        <RefreshCw size={20} />
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">ছবি আপলোড করুন</label>
                  <div className="relative group">
                    <input 
                      type="file" 
                      accept="image/*"
                      onChange={handlePhotoChange}
                      className="hidden" 
                      id="photo-upload"
                    />
                    <label 
                      htmlFor="photo-upload"
                      className="w-full flex items-center justify-center gap-3 px-4 py-10 border-2 border-dashed border-gray-200 rounded-2xl cursor-pointer hover:border-school-primary hover:bg-school-primary/5 transition-all"
                    >
                      <Camera className="text-gray-400 group-hover:text-school-primary" size={32} />
                      <span className="text-gray-500 group-hover:text-school-primary font-medium">ক্লিক করে ছবি নির্বাচন করুন</span>
                    </label>
                  </div>
                </div>

                <button 
                  onClick={() => handlePrint()}
                  className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-all shadow-xl flex items-center justify-center gap-3"
                >
                  <Printer size={24} /> আইডি কার্ড প্রিন্ট করুন (PDF)
                </button>
              </div>
            </motion.div>

            {/* Preview Side */}
            <div className="sticky top-32">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <ShieldCheck className="text-school-secondary" /> আইডি কার্ড প্রিভিউ
              </h2>
              
              <div ref={cardRef} className="print:p-0 print:m-0 flex flex-col gap-8 items-center">
                {/* Front Side */}
                <div className="w-[350px] h-[500px] bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100 flex flex-col relative print:shadow-none print:border">
                  {/* Header Design */}
                  <div className="h-32 bg-school-primary relative overflow-hidden flex items-center justify-center p-6">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-school-secondary/20 rounded-full -ml-12 -mb-12" />
                    <div className="relative z-10 flex flex-col items-center">
                      <img src="https://picsum.photos/seed/dphs_logo/100/100" alt="Logo" className="w-12 h-12 mb-2 bg-white rounded-full p-1" />
                      <h3 className="text-white font-bold text-sm text-center leading-tight">ধেছুয়া পালং উচ্চ বিদ্যালয়</h3>
                      <p className="text-white/70 text-[10px]">রামু, কক্সবাজার</p>
                    </div>
                  </div>

                  {/* Student Info */}
                  <div className="flex-grow flex flex-col items-center pt-8 px-8">
                    <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-gray-50 shadow-lg mb-6 bg-gray-100 flex items-center justify-center">
                      {previewUrl ? (
                        <img src={previewUrl} alt="Student" className="w-full h-full object-cover" />
                      ) : (
                        <User size={64} className="text-gray-300" />
                      )}
                    </div>
                    
                    <h4 className="text-xl font-black text-gray-900 mb-1 uppercase tracking-wide text-center">
                      {student.name || 'শিক্ষার্থীর নাম'}
                    </h4>
                    <p className="text-school-secondary font-bold text-sm mb-6">শিক্ষার্থী</p>

                    <div className="w-full space-y-3">
                      <div className="flex justify-between items-center bg-gray-50 p-3 rounded-xl">
                        <span className="text-gray-500 text-xs font-bold uppercase">ID Number</span>
                        <span className="text-gray-900 font-bold text-sm tracking-tighter">{student.id || 'DPHS-XXXX-XXXX'}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-gray-50 p-3 rounded-xl">
                          <span className="text-gray-500 text-[10px] font-bold uppercase block mb-1">Class</span>
                          <span className="text-gray-900 font-bold text-sm">{student.class}</span>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-xl">
                          <span className="text-gray-500 text-[10px] font-bold uppercase block mb-1">Roll</span>
                          <span className="text-gray-900 font-bold text-sm">{student.roll || '00'}</span>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-xl flex justify-between items-center">
                        <span className="text-gray-500 text-xs font-bold uppercase">Blood Group</span>
                        <span className="text-red-600 font-black text-sm">{student.bloodGroup}</span>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="h-16 bg-gray-900 flex items-center justify-between px-8">
                    <div className="text-white">
                      <p className="text-[8px] opacity-50 uppercase font-bold">Valid Until</p>
                      <p className="text-xs font-bold">{student.validUntil}</p>
                    </div>
                    <div className="w-10 h-10 bg-white p-1 rounded-md flex items-center justify-center">
                      <QRCodeSVG value={student.id || 'DPHS'} size={32} />
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div className="w-[350px] h-[500px] bg-gray-900 rounded-[2rem] shadow-2xl overflow-hidden p-8 flex flex-col text-white print:shadow-none print:border">
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold mb-6 border-b border-white/10 pb-4">নির্দেশনাবলী</h3>
                    <ul className="space-y-4 text-xs text-gray-400">
                      <li className="flex gap-3">
                        <div className="w-1.5 h-1.5 bg-school-secondary rounded-full mt-1.5 shrink-0" />
                        এই কার্ডটি হস্তান্তরযোগ্য নয়।
                      </li>
                      <li className="flex gap-3">
                        <div className="w-1.5 h-1.5 bg-school-secondary rounded-full mt-1.5 shrink-0" />
                        স্কুল চলাকালীন কার্ডটি অবশ্যই গলায় ঝুলিয়ে রাখতে হবে।
                      </li>
                      <li className="flex gap-3">
                        <div className="w-1.5 h-1.5 bg-school-secondary rounded-full mt-1.5 shrink-0" />
                        কার্ডটি হারিয়ে গেলে অবিলম্বে অফিস কর্তৃপক্ষকে জানাতে হবে।
                      </li>
                      <li className="flex gap-3">
                        <div className="w-1.5 h-1.5 bg-school-secondary rounded-full mt-1.5 shrink-0" />
                        কার্ডটি পাওয়া গেলে নিচের ঠিকানায় পৌঁছে দেওয়ার জন্য অনুরোধ করা হলো।
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4 border-t border-white/10 pt-6">
                    <div className="flex items-center gap-3 text-xs">
                      <MapPin size={14} className="text-school-secondary" />
                      <span>রামু, কক্সবাজার, বাংলাদেশ</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs">
                      <Phone size={14} className="text-school-secondary" />
                      <span>০১৮১৭-৩৮২৮৫১</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs">
                      <Globe size={14} className="text-school-secondary" />
                      <span>dphs.bdedu.me</span>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-between items-end">
                    <div className="text-center">
                      <div className="w-20 h-1 bg-white/20 mb-2" />
                      <p className="text-[8px] uppercase font-bold opacity-50">Student Signature</p>
                    </div>
                    <div className="text-center">
                      <div className="w-20 h-1 bg-white/20 mb-2" />
                      <p className="text-[8px] uppercase font-bold opacity-50">Authority Signature</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
};

export default IDGenerator;
