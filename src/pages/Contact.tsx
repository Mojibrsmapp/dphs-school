import { MapPin, Phone, Mail, Clock, Send, Facebook, Twitter, Youtube } from 'lucide-react';
import { motion } from 'motion/react';

const Contact = () => {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-school-primary py-20 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">যোগাযোগ</h1>
          <p className="text-xl opacity-80">আমাদের সাথে যোগাযোগ করার সকল মাধ্যম।</p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">আমাদের ঠিকানা</h2>
                <p className="text-gray-600 mb-8">যেকোনো প্রয়োজনে সরাসরি আমাদের অফিসে যোগাযোগ করতে পারেন অথবা নিচের তথ্যগুলো ব্যবহার করুন।</p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-school-primary shrink-0 shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">অবস্থান</h4>
                    <a 
                      href="https://maps.app.goo.gl/9TfQZZSCj46KDfsJA" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-school-primary transition-colors"
                    >
                      ধেছুয়াপালং, রাবেতা-৪৭০০, রামু, কক্সবাজার।
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-school-secondary shrink-0 shadow-sm">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">ফোন</h4>
                    <p className="text-gray-600">01817-382851</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">ইমেইল</h4>
                    <p className="text-gray-600">hdeschuapalong@yahoo.com</p>
                    <p className="text-gray-600">dphs.bdedu.me</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-green-600 shrink-0 shadow-sm">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">অফিস সময়</h4>
                    <p className="text-gray-600">শনিবার - বুধবার: সকাল ৯টা - বিকাল ৪টা</p>
                    <p className="text-gray-600">বৃহস্পতিবার: সকাল ৯টা - দুপুর ১:৩০টা</p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <h4 className="font-bold text-gray-900 mb-4">আমাদের সোশ্যাল মিডিয়া</h4>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/DhechuaPalongSchool/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-school-primary hover:text-white transition-all shadow-sm">
                    <Facebook size={24} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-school-primary hover:text-white transition-all shadow-sm">
                    <Twitter size={24} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-school-primary hover:text-white transition-all shadow-sm">
                    <Youtube size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">আমাদের বার্তা পাঠান</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">আপনার নাম</label>
                      <input 
                        type="text" 
                        placeholder="নাম লিখুন" 
                        className="w-full px-6 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-school-primary transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">ইমেইল ঠিকানা</label>
                      <input 
                        type="email" 
                        placeholder="ইমেইল লিখুন" 
                        className="w-full px-6 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-school-primary transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">বিষয়</label>
                    <input 
                      type="text" 
                      placeholder="বিষয় লিখুন" 
                      className="w-full px-6 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-school-primary transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">আপনার বার্তা</label>
                    <textarea 
                      rows={6} 
                      placeholder="আপনার বার্তা এখানে লিখুন..." 
                      className="w-full px-6 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-school-primary transition-all resize-none"
                    ></textarea>
                  </div>
                  <button className="w-full bg-school-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg flex items-center justify-center gap-2">
                    বার্তা পাঠান <Send size={20} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[500px] bg-gray-200 relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3701.328325603831!2d92.0833!3d21.4654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc96525555555%3A0x5555555555555555!2sDhechuapalong%20High%20School!5e0!3m2!1sen!2sbd!4v1712648787654!5m2!1sen!2sbd" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Dechua Palong High School Map"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
