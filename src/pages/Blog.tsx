import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Newsletter from '../components/Newsletter';

const Blog = () => {
  const posts = [
    {
      title: "শিক্ষার্থীদের জন্য কোডিংয়ের গুরুত্ব",
      date: "2024-07-15",
      author: "অ্যাডমিন",
      img: "https://picsum.photos/seed/coding/800/600",
      desc: "আজকের ডিজিটাল যুগে, কোডিং শেখা শুধু কম্পিউটার বিজ্ঞানীদের জন্য নয়, এটি সকল শিক্ষার্থীদের জন্য একটি অপরিহার্য দক্ষতা..."
    },
    {
      title: "বিজ্ঞান মেলায় আমাদের স্কুলের অভূতপূর্ব সাফল্য",
      date: "2024-07-10",
      author: "অ্যাডমিন",
      img: "https://picsum.photos/seed/science-fair/800/600",
      desc: "জাতীয় পর্যায়ে অনুষ্ঠিত বিজ্ঞান মেলায় আমাদের স্কুলের শিক্ষার্থীরা অসাধারণ সাফল্য অর্জন করেছে। তাদের উদ্ভাবনী প্রকল্প..."
    },
    {
      title: "স্বাস্থ্যকর জীবনযাপনের জন্য খেলাধুলার ভূমিকা",
      date: "2024-07-05",
      author: "অ্যাডমিন",
      img: "https://picsum.photos/seed/sports-blog/800/600",
      desc: "পড়াশোনার পাশাপাশি শারীরিক সুস্থতাও জরুরি। খেলাধুলা কীভাবে শিক্ষার্থীদের মানসিক এবং শারীরিক স্বাস্থ্যের উন্নতি করে..."
    }
  ];

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-school-primary py-20 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">আমাদের ব্লগ</h1>
          <p className="text-xl opacity-80">শিক্ষা, উদ্ভাবন এবং স্কুল জীবন সম্পর্কিত নিবন্ধ।</p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.map((post, i) => (
              <motion.article 
                key={i}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col"
              >
                <div className="relative h-64 overflow-hidden rounded-3xl mb-6">
                  <img 
                    src={post.img} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-bold flex items-center gap-2">
                      সম্পূর্ণ পড়ুন <ArrowRight size={18} />
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                  <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-school-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  {post.desc}
                </p>
                <button className="text-school-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  সম্পূর্ণ পড়ুন <ArrowRight size={18} />
                </button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
};

export default Blog;
