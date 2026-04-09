const Newsletter = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-school-primary rounded-3xl p-10 md:p-16 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-white/5 skew-y-6 translate-y-1/2" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">আমাদের সাথে যুক্ত থাকুন</h2>
            <p className="text-lg opacity-80 mb-10">স্কুলের সকল আপডেট এবং নোটিশ সরাসরি আপনার ইমেইলে পেতে সাবস্ক্রাইব করুন।</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="আপনার ইমেইল" 
                className="flex-grow px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-school-secondary"
              />
              <button className="bg-school-secondary text-white px-8 py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-lg">
                সাবস্ক্রাইব
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
