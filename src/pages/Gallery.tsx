import { motion } from 'motion/react';
import { Camera, Image as ImageIcon } from 'lucide-react';
import Newsletter from '../components/Newsletter';

const Gallery = () => {
  const categories = ["সব", "ক্যাম্পাস", "ইভেন্টস", "খেলাধুলা", "পুরস্কার"];
  
  const images = [
    { id: 1, category: "ক্যাম্পাস", title: "স্কুল ভবন", img: "https://dphs.mojib.me/_next/image?url=%2Fgallery%2Fimage.png&w=640&q=75" },
    { id: 2, category: "ইভেন্টস", title: "বার্ষিক সাংস্কৃতিক অনুষ্ঠান", img: "https://dphs.mojib.me/_next/image?url=%2Fgallery%2Fimage%20copy.png&w=640&q=75" },
    { id: 3, category: "খেলাধুলা", title: "ফুটবল টুর্নামেন্ট", img: "https://dphs.mojib.me/_next/image?url=%2Fgallery%2Fimage%20copy%203.png&w=640&q=75" },
    { id: 4, category: "পুরস্কার", title: "পুরস্কার বিতরণী", img: "https://dphs.mojib.me/_next/image?url=%2Fgallery%2Fimage%20copy%204.png&w=640&q=75" },
    { id: 5, category: "ক্যাম্পাস", title: "বিজ্ঞানাগার", img: "https://dphs.mojib.me/_next/image?url=%2Fgallery%2Fimage%20copy%205.png&w=640&q=75" },
    { id: 6, category: "ইভেন্টস", title: "বিজয় দিবস উদযাপন", img: "https://dphs.mojib.me/_next/image?url=%2Fgallery%2Fimage%20copy%209.png&w=640&q=75" },
    { id: 7, category: "খেলাধুলা", title: "ক্রিকেট ম্যাচ", img: "https://dphs.mojib.me/_next/image?url=%2Fgallery%2Fimage%20copy%208.png&w=640&q=75" },
    { id: 8, category: "ক্যাম্পাস", title: "লাইব্রেরি", img: "https://dphs.mojib.me/_next/image?url=%2Fgallery%2Fimage%20copy%207.png&w=640&q=75" },
    { id: 9, category: "ইভেন্টস", title: "সাংস্কৃতিক অনুষ্ঠান", img: "https://dphs.mojib.me/_next/image?url=%2Fgallery%2Fimage%20copy%206.png&w=640&q=75" },
  ];

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-school-primary py-20 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">গ্যালারি</h1>
          <p className="text-xl opacity-80">আমাদের স্কুলের স্মরণীয় মুহূর্তগুলো।</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat, i) => (
              <button 
                key={i}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  i === 0 ? 'bg-school-primary text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {images.map((img) => (
              <motion.div 
                key={img.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3]"
              >
                <img 
                  src={img.img} 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-school-secondary text-xs font-bold uppercase mb-1">{img.category}</span>
                  <h3 className="text-white font-bold text-lg">{img.title}</h3>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <ImageIcon className="text-white" size={20} />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-all shadow-xl">
              আরও ছবি লোড করুন
            </button>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
};

export default Gallery;
