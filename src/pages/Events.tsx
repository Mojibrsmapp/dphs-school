import { Calendar, MapPin, Clock, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

const Events = () => {
  const events = [
    {
      title: "বার্ষিক ক্রীড়া প্রতিযোগিতা ২০২৬",
      date: "২৫শে সেপ্টেম্বর, ২০২৬",
      time: "সকাল ৯:০০ - বিকাল ৪:০০",
      location: "স্কুল খেলার মাঠ",
      img: "https://picsum.photos/seed/event1/800/600",
      desc: "আমাদের স্কুলের বার্ষিক ক্রীড়া প্রতিযোগিতা আগামী ২৫শে সেপ্টেম্বর অনুষ্ঠিত হবে। সকল শিক্ষার্থীকে অংশগ্রহণের জন্য আহ্বান জানানো হচ্ছে।"
    }
  ];

  const pastEvents = [
    {
      title: "প্রতিষ্ঠাতা দিবস উদযাপন",
      date: "১৫ অক্টোবর, ২০২৪",
      desc: "সাংস্কৃতিক অনুষ্ঠান এবং পুরস্কার বিতরণী অনুষ্ঠানের মাধ্যমে আমাদের স্কুলের প্রতিষ্ঠা দিবস উদযাপনে আমাদের সাথে যোগ দিন।",
      img: "https://picsum.photos/seed/founder/400/300"
    },
    {
      title: "চ্যারিটি বেক সেল",
      date: "১ অক্টোবর, ২০২৪",
      desc: "আমাদের শিক্ষার্থীদের তৈরি সুস্বাদু বেকড পণ্য কিনে একটি ভাল উদ্দেশ্যকে সমর্থন করুন। সমস্ত আয় একটি স্থানীয় দাতব্য সংস্থায় যাবে।",
      img: "https://picsum.photos/seed/bake/400/300"
    },
    {
      title: "আন্তঃস্কুল বিতর্ক প্রতিযোগিতা",
      date: "২০ সেপ্টেম্বর, ২০২৪",
      desc: "আমাদের বিতর্ক সমাজ বিভিন্ন মর্যাদাপূর্ণ স্কুলের বিরুদ্ধে প্রতিদ্বন্দ্বিতা করবে। অনুষ্ঠানটি প্রধান অডিটোরিয়ামে অনুষ্ঠিত হবে।",
      img: "https://picsum.photos/seed/debate/400/300"
    },
    {
      title: "বার্ষিক বিজ্ঞান প্রদর্শনী ২০২৪",
      date: "৫ সেপ্টেম্বর, ২০২৪",
      desc: "আমাদের প্রতিভাবান শিক্ষার্থীদের দ্বারা উদ্ভাবনী প্রকল্প প্রদর্শন। والدین সকাল ১০টা থেকে বিকেল ৪টা পর্যন্ত পরিদর্শনের জন্য আমন্ত্রিত।",
      img: "https://picsum.photos/seed/science/400/300"
    },
    {
      title: "বার্ষিক ক্রীড়া দিবস",
      date: "২০ জুন, ২০২৪",
      desc: "বার্ষিক ক্রীড়া প্রতিযোগিতা অনুষ্ঠিত হয়েছে। বিজয়ীদের অভিনন্দন।",
      img: "https://picsum.photos/seed/sports/400/300"
    }
  ];

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-school-primary py-20 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">স্কুল ইভেন্টস</h1>
          <p className="text-xl opacity-80">আমাদের প্রাণবন্ত স্কুল সম্প্রদায়ের সাথে জড়িত হন।</p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">আসন্ন ইভেন্টস</h2>
            <div className="h-1 flex-grow mx-8 bg-gray-100 rounded-full hidden md:block"></div>
          </div>
          
          {events.length > 0 ? (
            <div className="grid gap-12">
              {events.map((event, i) => (
                <motion.div 
                  key={i}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gray-50 rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col lg:flex-row"
                >
                  <div className="lg:w-2/5 h-64 lg:h-auto overflow-hidden">
                    <img 
                      src={event.img} 
                      alt={event.title} 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="lg:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center gap-2 text-school-primary font-bold bg-white px-4 py-2 rounded-full shadow-sm text-sm">
                        <Calendar size={18} /> {event.date}
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 bg-white px-4 py-2 rounded-full shadow-sm text-sm">
                        <Clock size={18} /> {event.time}
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 bg-white px-4 py-2 rounded-full shadow-sm text-sm">
                        <MapPin size={18} /> {event.location}
                      </div>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{event.title}</h2>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                      {event.desc}
                    </p>
                    <button className="self-start bg-school-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-lg flex items-center gap-2">
                      বিস্তারিত জানুন <ChevronRight size={20} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
              <p className="text-gray-500 text-xl">আপাতত কোনো আসন্ন ইভেন্ট নেই।</p>
            </div>
          )}
        </div>
      </section>

      {/* Past Events Archive */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">অতীত ইভেন্ট আর্কাইভ</h2>
            <div className="h-1 flex-grow mx-8 bg-gray-200 rounded-full hidden md:block"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={event.img} 
                    alt={event.title} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-school-primary font-bold text-sm mb-2">{event.date}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                    {event.desc}
                  </p>
                  <button className="mt-auto text-school-primary font-bold flex items-center gap-1 hover:gap-2 transition-all">
                    বিস্তারিত দেখুন <ChevronRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
