import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  User, Phone, Mail, MapPin, Calendar, 
  Camera, FileText, GraduationCap, Briefcase, 
  Users, ChevronLeft, Download, CheckCircle,
  ShieldCheck, ArrowRight, Printer
} from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { useReactToPrint } from 'react-to-print';

const AlumniRegistration = () => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const formPrintRef = useRef<HTMLDivElement>(null);
  const cardPrintRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    fullName: '',
    fatherName: '',
    motherName: '',
    dob: '',
    gender: '',
    bloodGroup: '',
    maritalStatus: '',
    mobile: '',
    email: '',
    currentAddress: '',
    permanentAddress: '',
    photo: '',
    nid: '',
    passport: '',
    birthCert: '',
    admissionYear: '',
    passingYear: '',
    classReached: '',
    batchRep: '',
    profession: '',
    workplace: '',
    designation: '',
    refName: '',
    refBatch: '',
    refMobile: '',
    memberId: `DPHS-AL-${Math.floor(1000 + Math.random() * 9000)}`
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setFormData(prev => ({ ...prev, photo: url }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we'd send this to a backend
    setIsSubmitted(true);
    window.scrollTo(0, 0);
  };

  const handlePrintForm = useReactToPrint({
    contentRef: formPrintRef,
    documentTitle: `Alumni_Form_${formData.fullName}`,
  });

  const handlePrintCard = useReactToPrint({
    contentRef: cardPrintRef,
    documentTitle: `Alumni_Card_${formData.fullName}`,
  });

  if (isSubmitted) {
    return (
      <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-[3rem] shadow-2xl p-12 text-center border border-green-100"
          >
            <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle size={48} />
            </div>
            <h1 className="text-4xl font-black text-gray-900 mb-4">নিবন্ধন সফল হয়েছে!</h1>
            <p className="text-xl text-gray-600 mb-12">
              আপনার তথ্য সফলভাবে সংরক্ষিত হয়েছে। নিচে আপনার সদস্যপত্র এবং আইডি কার্ড দেওয়া হলো।
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <button 
                onClick={() => handlePrintForm()}
                className="bg-school-primary text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:scale-105 transition-all shadow-xl"
              >
                <Printer size={24} /> সদস্যপত্র ডাউনলোড/প্রিন্ট
              </button>
              <button 
                onClick={() => handlePrintCard()}
                className="bg-school-secondary text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:scale-105 transition-all shadow-xl"
              >
                <Printer size={24} /> আইডি কার্ড ডাউনলোড/প্রিন্ট
              </button>
              <Link 
                to="/alumni"
                className="bg-gray-100 text-gray-700 px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-gray-200 transition-all"
              >
                অ্যালামনাই পেজে ফিরে যান
              </Link>
            </div>
            <p className="text-sm text-gray-500 mb-12">
              (পিডিএফ হিসেবে সেভ করতে প্রিন্ট অপশনে গিয়ে 'Save as PDF' সিলেক্ট করুন)
            </p>

            {/* Hidden components for printing */}
            <div className="hidden">
              {/* Membership Form Print Template */}
              <div ref={formPrintRef} className="p-10 bg-white text-gray-900 font-sans w-[210mm] min-h-[297mm]">
                <div className="border-[12px] border-double border-school-primary/10 p-8 h-full relative">
                  {/* Header */}
                  <div className="flex justify-between items-center mb-6 border-b-2 border-school-primary pb-4">
                    <img src="https://image.mojib.me/uploads/school/1775744803_School_Logo.png" alt="School Logo" className="w-20 h-20" />
                    <div className="text-center flex-grow">
                      <h2 className="text-2xl font-black text-school-primary">ধেছুয়া পালং উচ্চ বিদ্যালয় প্রাক্তন ছাত্র/ছাত্রী কল্যাণ পরিষদ</h2>
                      <p className="text-xs text-gray-600 font-bold">ধেছুয়াপালং, রাবেতা-৪৭০০, রামু, কক্সবাজার।</p>
                      <p className="text-xs text-gray-500">ইমেইলঃ hdeschuapalong@yahoo.com</p>
                      <div className="mt-2 inline-block bg-school-primary text-white px-4 py-1 rounded-full text-sm font-bold">সদস্যপত্র</div>
                    </div>
                    <img src="https://image.mojib.me/uploads/school/1775744832_Dhechua%20Palong%20High%20School%20Alumni%20Welfare%20Council.jpg" alt="Alumni Logo" className="w-20 h-20" />
                  </div>

                  <div className="grid grid-cols-12 gap-8">
                    {/* Left Column: Photo & QR */}
                    <div className="col-span-4 space-y-6">
                      <div className="w-full aspect-[3/4] rounded-xl overflow-hidden border-4 border-gray-100 shadow-lg">
                        {previewUrl ? (
                          <img src={previewUrl} alt="Member" className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-300">
                            <User size={64} />
                          </div>
                        )}
                      </div>
                      <div className="p-4 bg-white border-2 border-gray-100 rounded-2xl flex flex-col items-center shadow-sm">
                        <QRCodeSVG value={formData.memberId} size={120} />
                        <p className="text-[10px] mt-2 font-black text-gray-400 uppercase tracking-widest">Verify Member</p>
                      </div>
                    </div>

                    {/* Right Column: Details */}
                    <div className="col-span-8 space-y-8">
                      <section>
                        <h4 className="text-xl font-black text-school-primary border-b-2 border-gray-100 pb-2 mb-4">ব্যক্তিগত তথ্য</h4>
                        <div className="space-y-3 text-sm">
                          <p className="flex justify-between border-b border-gray-50 pb-1"><span className="font-bold text-gray-600">সদস্য আইডি:</span> <span className="font-black">{formData.memberId}</span></p>
                          <p className="flex justify-between border-b border-gray-50 pb-1"><span className="font-bold text-gray-600">পূর্ণ নাম:</span> <span>{formData.fullName}</span></p>
                          <p className="flex justify-between border-b border-gray-50 pb-1"><span className="font-bold text-gray-600">পিতার নাম:</span> <span>{formData.fatherName}</span></p>
                          <p className="flex justify-between border-b border-gray-50 pb-1"><span className="font-bold text-gray-600">মাতার নাম:</span> <span>{formData.motherName}</span></p>
                          <p className="flex justify-between border-b border-gray-50 pb-1"><span className="font-bold text-gray-600">জন্ম তারিখ:</span> <span>{formData.dob}</span></p>
                          <p className="flex justify-between border-b border-gray-50 pb-1"><span className="font-bold text-gray-600">লিঙ্গ:</span> <span>{formData.gender}</span></p>
                          <p className="flex justify-between border-b border-gray-50 pb-1"><span className="font-bold text-gray-600">রক্তের গ্রুপ:</span> <span>{formData.bloodGroup}</span></p>
                          <p className="flex justify-between border-b border-gray-50 pb-1"><span className="font-bold text-gray-600">বৈবাহিক অবস্থা:</span> <span>{formData.maritalStatus}</span></p>
                          <p className="flex justify-between border-b border-gray-50 pb-1"><span className="font-bold text-gray-600">NID/BC/Passport নম্বর:</span> <span>{formData.nid || formData.birthCert || formData.passport}</span></p>
                          <p className="flex justify-between border-b border-gray-50 pb-1"><span className="font-bold text-gray-600">মোবাইল:</span> <span>{formData.mobile}</span></p>
                          <p className="flex justify-between border-b border-gray-50 pb-1"><span className="font-bold text-gray-600">ইমেইল:</span> <span>{formData.email}</span></p>
                          <p className="flex justify-between border-b border-gray-50 pb-1"><span className="font-bold text-gray-600">বর্তমান ঠিকানা:</span> <span>{formData.currentAddress}</span></p>
                          <p className="flex justify-between border-b border-gray-50 pb-1"><span className="font-bold text-gray-600">স্থায়ী ঠিকানা:</span> <span>{formData.permanentAddress}</span></p>
                        </div>
                      </section>

                      <section>
                        <h4 className="text-xl font-black text-school-primary border-b-2 border-gray-100 pb-2 mb-4">শিক্ষাগত ও পেশাগত তথ্য</h4>
                        <div className="space-y-3 text-sm">
                          <p className="flex justify-between border-b border-gray-50 pb-1"><span className="font-bold text-gray-600">ভর্তি সাল:</span> <span>{formData.admissionYear}</span></p>
                          <p className="flex justify-between border-b border-gray-50 pb-1"><span className="font-bold text-gray-600">পাশের সাল (ব্যাচ):</span> <span>{formData.passingYear}</span></p>
                          <p className="flex justify-between border-b border-gray-50 pb-1"><span className="font-bold text-gray-600">কোন শ্রেণী পর্যন্ত পড়েছেন:</span> <span>{formData.classReached}</span></p>
                          <p className="flex justify-between border-b border-gray-50 pb-1"><span className="font-bold text-gray-600">ব্যাচ প্রতিনিধি:</span> <span>{formData.batchRep}</span></p>
                          <p className="flex justify-between border-b border-gray-50 pb-1"><span className="font-bold text-gray-600">প্রতিষ্ঠান:</span> <span>{formData.workplace}</span></p>
                        </div>
                      </section>
                    </div>
                  </div>

                  {/* Signatures */}
                  <div className="mt-20 grid grid-cols-3 gap-12 text-center">
                    <div className="space-y-2">
                      <div className="border-t-2 border-dashed border-gray-300 pt-2">
                        <p className="text-xs font-bold text-gray-700">সদস্যের স্বাক্ষর</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="border-t-2 border-dashed border-gray-300 pt-2">
                        <p className="text-xs font-bold text-gray-700">সম্পাদকের স্বাক্ষর</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="border-t-2 border-dashed border-gray-300 pt-2">
                        <p className="text-xs font-bold text-gray-700">সভাপতির স্বাক্ষর</p>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="absolute bottom-8 left-8 right-8 text-center border-t border-gray-100 pt-4">
                    <p className="text-[10px] font-bold text-gray-800">
                      হেল্পলাইন: ০১৮১৭-৩৮২৮৫১ | ওয়েবসাইট: dphs.bdedu.me
                    </p>
                    <p className="text-[8px] text-red-500 mt-1">This membership form is auto-generated, no manual changes allowed.</p>
                  </div>
                </div>
              </div>

              {/* ID Card Print Template */}
              <div ref={cardPrintRef} className="p-12 bg-white flex flex-col items-center gap-12">
                {/* Front */}
                <div className="w-[400px] h-[250px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 flex flex-col relative font-sans">
                  <div className="h-10 bg-school-primary flex items-center justify-center">
                    <h4 className="text-white text-sm font-black tracking-wider">ধেছুয়া পালং উচ্চ বিদ্যালয়</h4>
                  </div>
                  <div className="h-8 bg-[#2e7d32] flex items-center justify-center">
                    <h5 className="text-white text-xs font-bold">প্রাক্তন ছাত্র/ছাত্রী কল্যাণ পরিষদ</h5>
                  </div>
                  <div className="flex-grow flex p-4 gap-6 items-center">
                    <div className="flex-grow space-y-2">
                      <p className="text-xs"><span className="font-black text-gray-900">নাম:</span> {formData.fullName}</p>
                      <p className="text-xs"><span className="font-black text-gray-900">পিতা:</span> {formData.fatherName}</p>
                      <p className="text-xs"><span className="font-black text-gray-900">ব্যাচ:</span> {formData.passingYear}</p>
                      <p className="text-xs"><span className="font-black text-gray-900">মোবাইল:</span> {formData.mobile}</p>
                    </div>
                    <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-school-primary shadow-lg shrink-0">
                      {previewUrl ? (
                        <img src={previewUrl} alt="Member" className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-300">
                          <User size={48} />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="h-10 bg-school-primary flex items-center justify-between px-4">
                    <img src="https://image.mojib.me/uploads/school/1775744832_Dhechua%20Palong%20High%20School%20Alumni%20Welfare%20Council.jpg" alt="Logo" className="w-8 h-8 bg-white rounded-full p-0.5" />
                    <p className="text-white text-xs font-black">Member ID: {formData.memberId}</p>
                  </div>
                </div>

                {/* Back */}
                <div className="w-[400px] h-[250px] bg-gray-50 rounded-2xl shadow-2xl overflow-hidden p-6 flex flex-col border border-gray-200 font-sans">
                  <div className="flex-grow flex flex-col items-center justify-center text-center space-y-4">
                    <h4 className="text-2xl font-black text-school-primary">"ঐক্য, সহযোগিতা, উন্নয়ন"</h4>
                    <div className="flex items-center gap-6">
                      <div className="bg-white p-2 rounded-xl shadow-sm border border-gray-100">
                        <QRCodeSVG value={formData.memberId} size={80} />
                      </div>
                      <div className="text-left space-y-1">
                        <p className="text-[10px] font-bold text-gray-900">ভেরিফিকেশনের জন্য স্ক্যান করুন</p>
                        <p className="text-[9px] text-gray-500">ঠিকানা: ধেছুয়াপালং, রাবেতা-৪৭০০, রামু, কক্সবাজার।</p>
                        <p className="text-[9px] text-gray-500 font-bold">ওয়েবসাইট: dphs.bdedu.me</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-end pt-6">
                    <div className="text-center">
                      <div className="w-24 h-0.5 bg-gray-300 mb-1 border-dashed border-t" />
                      <p className="text-[8px] font-black text-gray-500">সভাপতির স্বাক্ষর</p>
                    </div>
                    <div className="text-center">
                      <div className="w-24 h-0.5 bg-gray-300 mb-1 border-dashed border-t" />
                      <p className="text-[8px] font-black text-gray-500">সম্পাদকের স্বাক্ষর</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 bg-gray-50">
      {/* Header */}
      <section className="bg-school-primary py-16 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-6">
              <Link to="/alumni" className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all">
                <ChevronLeft size={24} />
              </Link>
              <div>
                <h1 className="text-3xl font-black">সদস্য নিবন্ধন ফরম</h1>
                <p className="opacity-80">প্রাক্তন ছাত্র-ছাত্রী কল্যাণ পরিষদ</p>
              </div>
            </div>
            <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-white/20 transition-all">
              <Download size={20} /> খালি ফরম ডাউনলোড করুন
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 -mt-10">
        <form onSubmit={handleSubmit} className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100">
          <div className="p-10 md:p-16">
            {/* School Info Header */}
            <div className="flex flex-col items-center text-center mb-16 border-b border-gray-100 pb-10">
              <div className="flex items-center gap-6 mb-6">
                <img src="https://image.mojib.me/uploads/school/1775744803_School_Logo.png" alt="School Logo" className="w-20 h-20" />
                <img src="https://image.mojib.me/uploads/school/1775744832_Dhechua%20Palong%20High%20School%20Alumni%20Welfare%20Council.jpg" alt="Alumni Logo" className="w-20 h-20" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">ধেছুয়া পালং উচ্চ বিদ্যালয় প্রাক্তন ছাত্র/ছাত্রী কল্যাণ পরিষদ</h2>
              <p className="text-gray-500 text-sm">ধেছুয়াপালং, রাবেতা-৪৭০০, রামু, কক্সবাজার। | ইমেইলঃ hdeschuapalong@yahoo.com</p>
            </div>

            {/* Section 1: Personal Info */}
            <div className="mb-16">
              <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
                <User className="text-school-primary" /> ব্যক্তিগত তথ্য
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">পুরো নাম *</label>
                  <input 
                    required
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    type="text" 
                    placeholder="আপনার পুরো নাম" 
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-school-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">বাবার নাম (ঐচ্ছিক)</label>
                  <input 
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleInputChange}
                    type="text" 
                    placeholder="বাবার নাম" 
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-school-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">মায়ের নাম (ঐচ্ছিক)</label>
                  <input 
                    name="motherName"
                    value={formData.motherName}
                    onChange={handleInputChange}
                    type="text" 
                    placeholder="মায়ের নাম" 
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-school-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">জন্ম তারিখ *</label>
                  <input 
                    required
                    name="dob"
                    value={formData.dob}
                    onChange={handleInputChange}
                    type="date" 
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-school-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">লিঙ্গ *</label>
                  <select 
                    required
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-school-primary transition-all font-medium"
                  >
                    <option value="">নির্বাচন করুন</option>
                    <option value="পুরুষ">পুরুষ</option>
                    <option value="মহিলা">মহিলা</option>
                    <option value="অন্যান্য">অন্যান্য</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">রক্তের গ্রুপ (ঐচ্ছিক)</label>
                  <select 
                    name="bloodGroup"
                    value={formData.bloodGroup}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-school-primary transition-all font-medium"
                  >
                    <option value="">নির্বাচন করুন</option>
                    {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(bg => (
                      <option key={bg} value={bg}>{bg}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">বৈবাহিক অবস্থা (ঐচ্ছিক)</label>
                  <select 
                    name="maritalStatus"
                    value={formData.maritalStatus}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-school-primary transition-all font-medium"
                  >
                    <option value="">নির্বাচন করুন</option>
                    <option value="অবিবাহিত">অবিবাহিত</option>
                    <option value="বিবাহিত">বিবাহিত</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">মোবাইল নম্বর *</label>
                  <input 
                    required
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    type="tel" 
                    placeholder="আপনার মোবাইল নম্বর" 
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-school-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">ই-মেইল *</label>
                  <input 
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-school-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">বর্তমান ঠিকানা *</label>
                  <textarea 
                    required
                    name="currentAddress"
                    value={formData.currentAddress}
                    onChange={handleInputChange}
                    rows={1}
                    placeholder="আপনার বর্তমান ঠিকানা" 
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-school-primary transition-all resize-none"
                  ></textarea>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">স্থায়ী ঠিকানা *</label>
                  <textarea 
                    required
                    name="permanentAddress"
                    value={formData.permanentAddress}
                    onChange={handleInputChange}
                    rows={1}
                    placeholder="আপনার স্থায়ী ঠিকানা" 
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-school-primary transition-all resize-none"
                  ></textarea>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">আপনার ছবি * (পাসপোর্ট সাইজ)</label>
                  <div className="relative group">
                    <input 
                      required
                      type="file" 
                      accept="image/*"
                      onChange={handlePhotoChange}
                      className="hidden" 
                      id="photo-upload"
                    />
                    <label 
                      htmlFor="photo-upload"
                      className="w-full flex items-center justify-between px-6 py-4 rounded-2xl bg-gray-50 border-2 border-dashed border-gray-200 cursor-pointer group-hover:border-school-primary transition-all"
                    >
                      <span className="text-gray-500 font-medium">
                        {previewUrl ? 'ছবি পরিবর্তন করুন' : 'ছবি নির্বাচন করুন'}
                      </span>
                      <Camera className="text-gray-400 group-hover:text-school-primary" size={24} />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: ID Info */}
            <div className="mb-16">
              <h3 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-3">
                <ShieldCheck className="text-school-secondary" /> পরিচয়পত্র তথ্য
              </h3>
              <p className="text-sm text-gray-500 mb-8">(নিচের তিনটি তথ্যের মধ্যে ন্যূনতম একটি পূরণ বাধ্যতামূলক)</p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">জাতীয় পরিচয়পত্র নং</label>
                  <input 
                    name="nid"
                    value={formData.nid}
                    onChange={handleInputChange}
                    type="text" 
                    placeholder="NID Number" 
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-school-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">পাসপোর্ট নং</label>
                  <input 
                    name="passport"
                    value={formData.passport}
                    onChange={handleInputChange}
                    type="text" 
                    placeholder="Passport Number" 
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-school-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">জন্মনিবন্ধন সনদ নং</label>
                  <input 
                    name="birthCert"
                    value={formData.birthCert}
                    onChange={handleInputChange}
                    type="text" 
                    placeholder="Birth Certificate Number" 
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-school-primary transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Section 3: Educational Info */}
            <div className="mb-16">
              <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
                <GraduationCap className="text-school-primary" /> শিক্ষাগত তথ্য
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">ভর্তি সাল (ঐচ্ছিক)</label>
                  <select 
                    name="admissionYear"
                    value={formData.admissionYear}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-school-primary transition-all font-medium"
                  >
                    <option value="">নির্বাচন করুন</option>
                    {Array.from({ length: 40 }).map((_, i) => {
                      const year = 2025 - i;
                      return <option key={year} value={year}>{year}</option>;
                    })}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">পাশের বছর (ব্যাচ) *</label>
                  <select 
                    required
                    name="passingYear"
                    value={formData.passingYear}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-school-primary transition-all font-medium"
                  >
                    <option value="">নির্বাচন করুন</option>
                    {Array.from({ length: 40 }).map((_, i) => {
                      const year = 2025 - i;
                      return <option key={year} value={year}>{year}</option>;
                    })}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">কোন শ্রেণী পর্যন্ত পড়েছেন (ঐচ্ছিক)</label>
                  <select 
                    name="classReached"
                    value={formData.classReached}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-school-primary transition-all font-medium"
                  >
                    <option value="">নির্বাচন করুন</option>
                    {['৬ষ্ঠ', '৭ম', '৮ম', '৯ম', '১০ম', 'এসএসসি'].map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">ব্যাচ প্রতিনিধি</label>
                  <select 
                    name="batchRep"
                    value={formData.batchRep}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-school-primary transition-all font-medium"
                  >
                    <option value="">ব্যাচ সিলেক্ট করুন</option>
                    <option value="রফিকুল ইসলাম">রফিকুল ইসলাম (২০১৮)</option>
                    <option value="মোরশেদ হৃদয়">মোরশেদ হৃদয় (২০১৯)</option>
                    <option value="মোঃ সাইদ">মোঃ সাইদ (২০২০)</option>
                    <option value="মোহাম্মদ মুবিন">মোহাম্মদ মুবিন (২০২২)</option>
                    <option value="মুজিবুর রহমান">মুজিবুর রহমান (২০২৩)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section 4: Current Status */}
            <div className="mb-16">
              <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
                <Briefcase className="text-school-secondary" /> বর্তমান অবস্থা
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">পেশা (ঐচ্ছিক)</label>
                  <input 
                    name="profession"
                    value={formData.profession}
                    onChange={handleInputChange}
                    type="text" 
                    placeholder="e.g., Doctor, Engineer" 
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-school-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">বর্তমান কর্মস্থল (ঐচ্ছিক)</label>
                  <input 
                    name="workplace"
                    value={formData.workplace}
                    onChange={handleInputChange}
                    type="text" 
                    placeholder="e.g., Google, Dhaka Medical College" 
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-school-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">পদবি (ঐচ্ছিক)</label>
                  <input 
                    name="designation"
                    value={formData.designation}
                    onChange={handleInputChange}
                    type="text" 
                    placeholder="e.g., Senior Manager" 
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-school-primary transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Section 5: Reference Info */}
            <div className="mb-16">
              <h3 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-3">
                <Users className="text-school-primary" /> রেফারেন্স তথ্য (ঐচ্ছিক)
              </h3>
              <p className="text-sm text-gray-500 mb-8">(আপনার সহপাঠী, অগ্রজ ও অনুজের মধ্যে থেকে যেকোন একজনের তথ্য দিন)</p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">রেফারেন্সের নাম</label>
                  <input 
                    name="refName"
                    value={formData.refName}
                    onChange={handleInputChange}
                    type="text" 
                    placeholder="রেফারেন্সের নাম" 
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-school-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">রেফারেন্সের ব্যাচ</label>
                  <input 
                    name="refBatch"
                    value={formData.refBatch}
                    onChange={handleInputChange}
                    type="text" 
                    placeholder="রেফারেন্সের ব্যাচ" 
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-school-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">রেফারেন্সের মোবাইল</label>
                  <input 
                    name="refMobile"
                    value={formData.refMobile}
                    onChange={handleInputChange}
                    type="tel" 
                    placeholder="রেফারেন্সের মোবাইল" 
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-school-primary transition-all"
                  />
                </div>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-school-primary text-white py-6 rounded-[2rem] font-black text-xl hover:bg-opacity-90 transition-all shadow-2xl flex items-center justify-center gap-4 group"
            >
              নিবন্ধন সম্পন্ন করুন <ArrowRight className="group-hover:translate-x-2 transition-transform" size={28} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AlumniRegistration;
