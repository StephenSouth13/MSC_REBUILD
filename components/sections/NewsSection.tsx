"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, BookOpen, Sparkles, TrendingUp } from "lucide-react"
import { useLanguage } from "../language-provider"
import { Button } from "@/components/ui/button"
import BlogCard from "../BlogCard"

const NewsSection = () => {
  const { t } = useLanguage()

  const blogPosts = [
    {
      id: "1",
      title: "Muốn phát triển liên tục - Phải có Kaizen!",
      excerpt:
        "Kaizen là triết lý cải tiến liên tục, giúp doanh nghiệp luôn đổi mới và nâng cao chất lượng.",
      image: "/News/kaizen.webp",
      author: "Dương Thế Khải",
      publishDate: "15/01/2025",
      category: "Kỹ năng mềm",
      readTime: "5 phút đọc",
    },
    {
      id: "2",
      title: "IKIGAI – Tìm ra lẽ sống của cuộc đời bạn",
      excerpt:
        "Khám phá ý nghĩa cuộc sống và cách Ikigai giúp bạn đạt được sự cân bằng trong công việc và đam mê.",
      image: "/News/ikigai.webp",
      author: "TS Phan Huỳnh Anh",
      publishDate: "12/01/2025",
      category: "Coaching",
      readTime: "7 phút đọc",
    },
    {
      id: "3",
      title: "Trainer - Coach - Mentor khác nhau như thế nào?",
      excerpt:
        "Hiểu rõ vai trò và giá trị của từng hình thức hỗ trợ phát triển cá nhân và nghề nghiệp.",
      image: "/News/trainer-mentor-coach.webp",
      author: "TS. Phan Huỳnh Anh",
      publishDate: "10/01/2025",
      category: "Xu hướng",
      readTime: "6 phút đọc",
    },
    {
      id: "4",
      title: "ASK - Mô hình đánh giá năng lực chuẩn quốc tế",
      excerpt:
        "Tìm hiểu về mô hình ASK (Attitude, Skill, Knowledge) trong đánh giá và phát triển năng lực nhân sự.",
      image: "/News/ask-model.webp",
      author: "Hoàng Cửu Long",
      publishDate: "08/01/2025",
      category: "Phương pháp",
      readTime: "8 phút đọc",
    },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-dark-800 dark-section relative overflow-hidden">
      {/* Enhanced dark mode background effects */}
      <div className="dark:block hidden absolute inset-0">
        <div className="particles-bg" />
        
        {/* Knowledge-themed gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/6 via-neon-purple/6 to-neon-orange/6 animate-aurora opacity-50" />
        
        {/* Floating knowledge symbols */}
        <motion.div
          className="absolute top-24 left-12"
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 15, -15, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <BookOpen className="h-14 w-14 text-neon-blue/50" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-32 right-20"
          animate={{ 
            y: [0, 25, 0],
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <TrendingUp className="h-12 w-12 text-neon-purple/50" />
        </motion.div>
        
        <motion.div
          className="absolute top-1/3 right-1/6"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Sparkles className="h-10 w-10 text-neon-orange/50" />
        </motion.div>
      </div>

      <div className="container relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-6">
            <motion.div
              animate={{ 
                y: [0, -8, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <BookOpen className="h-10 w-10 text-blue-600 dark:text-neon-blue mr-4" />
            </motion.div>
            
            <h2 className="text-4xl font-bold text-gray-900 dark:text-slate-100 font-serif">
              Tin tức & Chia sẻ
            </h2>
            
            <motion.div
              animate={{ 
                rotate: [0, 360],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <TrendingUp className="h-10 w-10 text-orange-500 dark:text-neon-orange ml-4" />
            </motion.div>
          </div>
          
          <p className="text-lg text-gray-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed mb-8">
            Khám phá những kiến thức, xu hướng và kinh nghiệm quý báu từ các chuyên gia trong lĩnh vực đào tạo và phát triển.
          </p>

          {/* Knowledge-themed decorative elements */}
          <div className="flex items-center justify-center space-x-4">
            <motion.div 
              className="w-16 h-1 bg-gradient-to-r from-transparent to-blue-600 dark:to-neon-blue rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            />
            
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.5, 1, 0.5],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="w-3 h-3 bg-orange-500 dark:bg-neon-orange rounded-full" />
              <div className="dark:block hidden absolute inset-0 bg-neon-orange/50 rounded-full blur-sm animate-pulse" />
            </motion.div>
            
            <motion.div 
              className="w-16 h-1 bg-gradient-to-l from-transparent to-orange-500 dark:to-neon-orange rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
              whileHover={{ y: -8 }}
            >
              {/* Dark mode hover effect for blog cards */}
              <div className="dark:block hidden absolute -inset-4 bg-gradient-to-br from-neon-blue/10 via-neon-purple/10 to-neon-orange/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
              
              {/* Reading glow effect */}
              <div className="dark:block hidden absolute -inset-2 bg-gradient-to-br from-neon-blue/20 via-neon-purple/20 to-neon-orange/20 rounded-xl opacity-0 group-hover:opacity-30 transition-all duration-300 blur-lg" />
              
              <BlogCard
                id={post.id}
                title={post.title}
                excerpt={post.excerpt}
                image={post.image}
                author={post.author}
                publishDate={post.publishDate}
                category={post.category}
                readTime={post.readTime}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="relative inline-block group">
            {/* Enhanced dark mode glow effect */}
            <div className="dark:block hidden absolute inset-0 bg-gradient-to-r from-neon-blue/30 via-neon-purple/30 to-neon-orange/30 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            
            <Button
              asChild
              size="lg"
              className="relative bg-blue-600 hover:bg-blue-700 dark:bg-gradient-to-r dark:from-neon-blue dark:to-neon-purple dark:text-dark-900 dark:hover:from-blue-500 dark:hover:to-purple-500 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-xl dark:shadow-glow glow-border"
            >
              <Link href="/chia-se" className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5" />
                <span>Xem tất cả bài viết</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.div>
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Knowledge stats showcase */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-white dark:bg-dark-800/60 rounded-2xl p-8 border dark:border-dark-700/50 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="mb-4"
                >
                  <BookOpen className="h-12 w-12 text-blue-600 dark:text-neon-blue mx-auto" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-100">100+</h3>
                <p className="text-gray-600 dark:text-slate-400">Bài viết chuyên sâu</p>
              </div>
              
              <div className="text-center">
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="mb-4"
                >
                  <TrendingUp className="h-12 w-12 text-orange-500 dark:text-neon-orange mx-auto" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-100">50K+</h3>
                <p className="text-gray-600 dark:text-slate-400">Lượt đọc mỗi tháng</p>
              </div>
              
              <div className="text-center">
                <motion.div
                  animate={{ 
                    y: [0, -8, 0],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="mb-4"
                >
                  <Sparkles className="h-12 w-12 text-purple-600 dark:text-neon-purple mx-auto" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-100">20+</h3>
                <p className="text-gray-600 dark:text-slate-400">Chuyên gia đóng góp</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default NewsSection
