"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Users, Sparkles, Award } from "lucide-react"
import { useLanguage } from "../language-provider"
import { Button } from "@/components/ui/button"
import MentorCard from "../MentorCard"

const MentorsSection = () => {
  const { t } = useLanguage()

  const mentors = [
    {
      id: "phan-huynh-anh",
      slug: "phan-huynh-anh",
      name: "TS. Phan Huỳnh Anh",
      title: "Tiến Sĩ Kinh tế",
      degree: "Chủ tịch HĐQT Công ty Smentor",
      avatar: "/Mentors/PHA.webp",
      specialties: ["Leadership", "Strategic Management", "Business Coaching"],
    },
    {
      id: "hoang-cuu-long",
      slug: "hoang-cuu-long",
      name: "Hoàng Cửu Long",
      title: "Phó Giáo Sư - Tiến Sĩ",
      degree: "Giảng viên Đại học Kinh tế TP. Hồ Chí Minh",
      avatar: "/Mentors/HCL.webp",
      specialties: ["HR Development", "Team Building", "Communication Skills"],
    },
    {
      id: "doan-duc-minh",
      slug: "doan-duc-minh",
      name: "Đoàn Đức Minh",
      title: "Thạc Sĩ - Nghiên cứu sinh",
      degree: "Giảng viên Đại học Western Sydney",
      avatar: "/Mentors/DDM.webp",
      specialties: ["Project Management", "Agile", "Digital Transformation"],
    },
    {
      id: "nguyen-chi-thanh",
      slug: "nguyen-chi-thanh",
      name: "Nguyễn Chí Thành",
      title: "CEO",
      degree: "TLàng Kết nối Kinh doanh VABIX",
      avatar: "/Mentors/NCT.webp",
      specialties: ["Personal Coaching", "Career Development", "Mindfulness"],
    },
    {
      id: "le-nhat-truong-chinh",
      slug: "le-nhat-truong-chinh",
      name: "Lê Nhật Trường Chinh",
      title: "Chuyên Gia Tài Chính",
      degree: "Giám đốc Tài chính SGGP",
      avatar: "/Mentors/LNTC.webp",
      specialties: ["Financial Management", "Investment Strategy", "Risk Assessment"],
    },
    {
      id: "nguyen-thanh-dat",
      slug: "nguyen-thanh-dat",
      name: "Nguyễn Thành Đạt",
      title: "Chuyên Gia Digital Marketing",
      degree: "Founder Marketing Agency",
      avatar: "/Mentors/NTD.webp",
      specialties: ["Digital Marketing", "Social Media", "Brand Strategy"],
    },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-dark-800 dark-section relative overflow-hidden">
      {/* Enhanced dark mode background effects */}
      <div className="dark:block hidden absolute inset-0">
        <div className="particles-bg" />
        
        {/* Aurora-like gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-neon-purple/5 to-neon-orange/5 animate-aurora opacity-30" />
        
        {/* Floating mentor icons */}
        <motion.div
          className="absolute top-16 left-16 opacity-20"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          <Users className="h-12 w-12 text-neon-blue" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 right-20 opacity-20"
          animate={{ 
            y: [0, 15, 0],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        >
          <Award className="h-10 w-10 text-neon-purple" />
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
                scale: [1, 1.1, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Users className="h-8 w-8 text-blue-600 dark:text-neon-blue mr-4" />
            </motion.div>
            
            <h2 className="text-4xl font-bold text-gray-900 dark:text-slate-100 font-serif">
              Đội ngũ Mentors
            </h2>
            
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="h-8 w-8 text-orange-500 dark:text-neon-orange ml-4" />
            </motion.div>
          </div>
          
          <p className="text-lg text-gray-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed mb-6">
            Gặp gỡ đội ngũ mentors tài năng với nhiều năm kinh nghiệm trong lĩnh vực đào tạo và phát triển nghề nghiệp.
          </p>

          {/* Enhanced decorative elements */}
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
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-3 h-3 bg-orange-500 dark:bg-neon-orange rounded-full"
            />
            
            <motion.div 
              className="w-16 h-1 bg-gradient-to-l from-transparent to-orange-500 dark:to-neon-orange rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {mentors.map((mentor, index) => (
            <motion.div
              key={mentor.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
              whileHover={{ y: -8 }}
            >
              {/* Dark mode hover glow effect */}
              <div className="dark:block hidden absolute -inset-4 bg-gradient-to-br from-neon-blue/10 via-neon-purple/10 to-neon-orange/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
              
              <MentorCard
                id={mentor.id}
                slug={mentor.slug}
                name={mentor.name}
                title={mentor.title}
                degree={mentor.degree}
                avatar={mentor.avatar}
                specialties={mentor.specialties}
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
              <Link href="/mentors" className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Tìm hiểu thêm về Mentors</span>
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
      </div>
    </section>
  )
}

export default MentorsSection
