'use client'

import { mscersData } from "@/data/mscer";
import MentorCard from "@/components/MentorCard";
import { motion } from "framer-motion";
import { Crown, Sparkles, Star, Users } from "lucide-react";

export default function DirectorsSection() {
  // Filter directors from MSCer list
  const directorIds = ["pham-hoang-minh-khanh", "duong-the-khai", "quach-thanh-long"];
  const directors = mscersData.filter(mscer => directorIds.includes(mscer.id));

  // If no director data, show a message or return null
  if (directors.length === 0) {
    return (
      <div className="container py-12 text-center text-gray-500 dark:text-slate-400">
        Không có dữ liệu giám đốc để hiển thị.
      </div>
    );
  }

  return (
    <section className="py-20 bg-white dark:bg-dark-900 dark-section relative overflow-hidden">
      {/* Enhanced dark mode background effects */}
      <div className="dark:block hidden absolute inset-0">
        <div className="particles-bg" />
        
        {/* Executive-themed gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/8 via-neon-purple/8 to-neon-orange/8 animate-gradient-shift opacity-40" />
        
        {/* Leadership symbols floating */}
        <motion.div
          className="absolute top-20 left-20"
          animate={{ 
            y: [0, -25, 0],
            rotate: [0, 180, 360],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        >
          <Crown className="h-16 w-16 text-neon-blue/40" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-24 right-16"
          animate={{ 
            y: [0, 20, 0],
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <Star className="h-12 w-12 text-neon-purple/40" />
        </motion.div>
        
        <motion.div
          className="absolute top-1/2 right-1/4"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        >
          <Users className="h-10 w-10 text-neon-orange/40" />
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
                y: [0, -5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Crown className="h-10 w-10 text-blue-600 dark:text-neon-blue mr-4" />
            </motion.div>
            
            <h2 className="text-4xl font-bold text-gray-900 dark:text-slate-100 font-serif">
              Ban Giám đốc
            </h2>
            
            <motion.div
              animate={{ 
                rotate: [0, 360],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="h-10 w-10 text-orange-500 dark:text-neon-orange ml-4" />
            </motion.div>
          </div>
          
          <p className="text-lg text-gray-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed mb-8">
            Gặp gỡ những người lãnh đạo đã tạo nên MSC Center và định hướng sự phát triển của cộng đồng.
          </p>

          {/* Elegant decorative elements for executives */}
          <div className="flex items-center justify-center space-x-6">
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-transparent via-blue-600 dark:via-neon-blue to-transparent rounded-full"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 80, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              viewport={{ once: true }}
            />
            
            <motion.div
              animate={{ 
                scale: [1, 1.4, 1],
                opacity: [0.6, 1, 0.6],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="w-4 h-4 bg-orange-500 dark:bg-neon-orange rounded-full" />
              <div className="dark:block hidden absolute inset-0 bg-neon-orange/50 rounded-full blur-md animate-pulse" />
            </motion.div>
            
            <motion.div 
              className="w-20 h-1 bg-gradient-to-l from-transparent via-orange-500 dark:via-neon-orange to-transparent rounded-full"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 80, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {directors.map((director, index) => (
            <motion.div
              key={director.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Premium dark mode glow effect for executives */}
              <div className="dark:block hidden absolute -inset-6 bg-gradient-to-br from-neon-blue/15 via-neon-purple/15 to-neon-orange/15 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-2xl" />
              
              {/* Executive border effect */}
              <div className="dark:block hidden absolute -inset-2 bg-gradient-to-br from-neon-blue/30 via-neon-purple/30 to-neon-orange/30 rounded-xl opacity-0 group-hover:opacity-50 transition-all duration-500 blur-lg" />
              
              <div className="relative">
                <MentorCard
                  id={director.id}
                  slug={director.slug}
                  name={director.name}
                  title={director.title}
                  degree={director.degree}
                  avatar={director.avatar}
                  specialties={director.specialties}
                />
                
                {/* Executive crown badge */}
                <motion.div
                  className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 dark:from-neon-orange dark:to-yellow-400 rounded-full flex items-center justify-center shadow-lg dark:shadow-glow-orange opacity-0 group-hover:opacity-100 transition-all duration-300"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [0.8, 1, 0.8]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Crown className="h-4 w-4 text-white dark:text-dark-900" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Executive achievement showcase */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-50 dark:bg-dark-800/50 rounded-2xl p-8 border dark:border-dark-700/50 backdrop-blur-sm">
            <div className="flex items-center justify-center mb-4">
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Star className="h-8 w-8 text-yellow-500 dark:text-neon-orange mr-3" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-100">
                Lãnh đạo xuất sắc
              </h3>
              
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Star className="h-8 w-8 text-yellow-500 dark:text-neon-orange ml-3" />
              </motion.div>
            </div>
            
            <p className="text-gray-600 dark:text-slate-400 max-w-2xl mx-auto">
              Với nhiều năm kinh nghiệm và tầm nhìn chiến lược, ban giám đốc MSC Center 
              đã dẫn dắt tổ chức phát triển mạnh mẽ và tạo ra giá trị bền vững cho cộng đồng.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
