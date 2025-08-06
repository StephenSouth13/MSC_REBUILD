"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Sparkles, Star } from "lucide-react"
import { useLanguage } from "../language-provider"
import { Button } from "@/components/ui/button"
import ProjectCard from "../ProjectCard"

const ProjectsSection = () => {
  const { t } = useLanguage()

  const projects = [
  {
    id: "1",
    title: "🛠️ Dự án: Công ty TNHH F Deli",
    description: "🎯 Chuẩn hoá quy trình làm việc, xây dựng đội ngũ nội bộ chuyên nghiệp thông qua các buổi huấn luyện tập trung và coaching 1-1.",
    instructors: "🧑‍🏫 Ban Giảng Huấn: Phan Huỳnh Anh & MSC Teams",
    image: "/Projects/Fdeli.webp",
    category: "Mentoring",
    mentors: [
      { name: "TS. Phan Huỳnh Anh", avatar: "/Mentors/PHA.webp" },
      { name: "ThS. Đoàn Đức Minh", avatar: "/Mentors/DDM.webp" },
    ],
  },
  {
    id: "2",
    title: "🛠️ Dự án: Khu du lịch Happy Land",
    description: "🎯 Đào tạo đội ngũ Sales & Marketing, nâng cao kỹ năng giao tiếp, bán hàng và chăm sóc khách hàng trong môi trường du lịch chuyên nghiệp.",
    instructors: "🧑‍🏫 Ban Giảng Huấn: Phan Huỳnh Anh & MSC Teams",
    image: "/Projects/Happyland.webp",
    category: "Mentoring, Training",
    mentors: [
      { name: "TS. Phan Huỳnh Anh", avatar: "/Mentors/PHA.webp" },
      { name: "MSC Teams", avatar: "/MSCers/mscteam.webp" },
    ],
  },
  {
    id: "3",
    title: "🛠️ Dự án: Einstein School HCM - ESH",
    description: "🎯 Đào tạo đội ngũ Sales & Marketing và tư vấn tuyển sinh, xây dựng chiến lược truyền thông và chăm sóc phụ huynh chuyên sâu.",
    instructors: "🧑‍🏫 Ban Giảng Huấn: Phan Huỳnh Anh & Đoàn Đức Minh",
    image: "/Projects/einsteinschool.webp",
    category: "Giáo dục",
    mentors: [
      { name: "TS. Phan Huỳnh Anh", avatar: "/Mentors/PHA.webp" },
      { name: "Th.S Đoàn Đức Minh", avatar: "/Mentors/DDM.webp" },
    ],
  },
  {
    id: "4",
    title: "🛠️ Dự án: VRA Việt Nam",
    description: "🎯 Đào tạo kỹ năng Presentation, xây dựng brand cá nhân cho đội ngũ lãnh đạo, nâng cao hiệu quả giao tiếp trong môi trường doanh nghiệp.",
    instructors: "🧑‍🏫 Ban Giảng Huấn: Phan Huỳnh Anh & Nguyễn Chí Thành",
    image: "/Projects/VRA.webp",
    category: "Mentoring, Training",
    mentors: [
      { name: "TS. Phan Huỳnh Anh", avatar: "/Mentors/PHA.webp" },
      { name: "Nguyễn Chí Thành", avatar: "/Mentors/NCT.webp" },
    ],
  },
  ]

  return (
    <section className="py-20 bg-white dark:bg-dark-900 dark-section relative overflow-hidden">
      {/* Dark mode background effects */}
      <div className="dark:block hidden absolute inset-0">
        <div className="particles-bg" />
        
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-neon-blue/10 rounded-full blur-xl"
          animate={{ 
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute bottom-20 right-20 w-16 h-16 bg-neon-purple/10 rotate-45"
          animate={{ 
            rotate: [45, 135, 45],
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="container relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-4">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Star className="h-6 w-6 text-blue-600 dark:text-neon-blue mr-3" />
            </motion.div>
            
            <h2 className="text-4xl font-bold text-gray-900 dark:text-slate-100 font-serif">
              Dự án nổi bật
            </h2>
            
            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-6 w-6 text-orange-500 dark:text-neon-orange ml-3" />
            </motion.div>
          </div>
          
          <p className="text-lg text-gray-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Khám phá những dự án thành công mà MSC Center đã thực hiện, 
            mang lại giá trị thực tế cho doanh nghiệp và cá nhân.
          </p>

          {/* Dark mode decorative line */}
          <motion.div 
            className="mt-6 mx-auto w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 dark:from-neon-blue dark:to-neon-orange rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="dark:block hidden absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-neon-purple/5 to-neon-orange/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              <ProjectCard {...project} />
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
          <div className="relative inline-block">
            {/* Dark mode glow effect */}
            <div className="dark:block hidden absolute inset-0 bg-gradient-to-r from-neon-blue/20 via-neon-purple/20 to-neon-orange/20 rounded-lg blur-xl opacity-75 animate-pulse" />
            
            <Button
              asChild
              size="lg"
              className="relative bg-blue-600 hover:bg-blue-700 dark:bg-gradient-to-r dark:from-neon-blue dark:to-neon-purple dark:text-dark-900 dark:hover:from-blue-500 dark:hover:to-purple-500 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-xl dark:shadow-glow glow-border"
            >
              <Link href="/du-an" className="flex items-center space-x-2">
                <span>Xem tất cả dự án</span>
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

export default ProjectsSection
