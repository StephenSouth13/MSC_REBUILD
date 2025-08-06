"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star, Award, Users, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const MSCersSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const mscers = [
    {
      id: 1,
      name: "Dương Thế Khải",
      position: "Phó Giám Đốc MSC",
      company: "MSC",
      avatar: "/MSCers/DTK.webp",
      achievement: "Tốt nghiệp và trưởng thành từ MSC",
      testimonial: "MSC Center đã giúp tôi phát triển kỹ năng lãnh đạo và tư duy chiến lược một cách toàn diện.",
    },
    {
      id: 2,
      name: "Quách Thành Long",
      position: "Trưởng phòng CNTT",
      company: "MSC",
      avatar: "/MSCers/QTL.webp",
      achievement: "Tốt nghiệp và trưởng thành từ HKDN",
      testimonial: "Những kiến thức về quản lý dự án tại MSC đã giúp tôi thành công trong vai trò Trưởng phòng CNTT.",
    },
    {
      id: 3,
      name: "Lã Phương Uyên",
      position: "Nhân sự Marketing",
      company: "MSC",
      avatar: "/MSCers/LPU.webp",
      achievement: "Tốt nghiệp và trưởng thành từ HKDN",
      testimonial: "MSC Center không chỉ dạy kiến thức mà còn giúp tôi xây dựng network chuyên nghiệp.",
    },
    {
      id: 4,
      name: "Nguyễn Ngọc Thiên Hương",
      position: "Nhân sự Marketing",
      company: "MSC",
      avatar: "/MSCers/NNTH.webp",
      achievement: "Tốt nghiệp và trưởng thành từ HKDN",
      testimonial: "Chương trình đào tạo tại MSC rất thực tế và ứng dụng được ngay vào công việc.",
    },
    {
      id: 5,
      name: "Phạm Ngọc Thuỳ Trang",
      position: "Nhân sự Marketing",
      company: "MSC",
      avatar: "/MSCers/PNTT.webp",
      achievement: "Tốt nghiệp khóa Financial Management 2022",
      testimonial: "MSC đã trang bị cho tôi nền tảng vững chắc để phát triển sự nghiệp trong lĩnh vực tài chính.",
    },
    {
      id: 6,
      name: "Trần Hoàng Minh Thư",
      position: "Thư ký dự án",
      company: "MSC ",
      avatar: "/MSCers/THMT.webp",
      achievement: "Học viên xuất sắc khóa Design Thinking 2023",
      testimonial: "Khóa học Design Thinking tại MSC đã mở ra góc nhìn mới về thiết kế và trải nghiệm người dùng.",
    },
    {
      id: 7,
      name: "Huỳnh Nguyên Quân",
      position: "Nhân sự Marketing",
      company: "Google Vietnam",
      avatar: "/MSCers/HNQ.webp",
      achievement: "Cựu học viên khóa Tech Leadership 2022",
      testimonial: "MSC Center đã giúp tôi phát triển từ một developer thành tech leader tự tin.",
    },
    {
      id: 8,
      name: "Phan Bích Hợp",
      position: "Nhân sự Marketing",
      company: "MSC",
      avatar: "/MSCers/PBH.webp",
      achievement: "Cựu học viên khóa Tech Leadership 2022",
      testimonial: "MSC Center đã giúp tôi phát triển từ một developer thành tech leader tự tin.",
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % mscers.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + mscers.length) % mscers.length)
  }

  const getVisibleCards = () => {
    const cards = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % mscers.length
      cards.push(mscers[index])
    }
    return cards
  }

  return (
    <section className="py-20 bg-white dark:bg-dark-900 dark-section relative overflow-hidden">
      {/* Enhanced dark mode background effects */}
      <div className="dark:block hidden absolute inset-0">
        <div className="particles-bg" />
        
        {/* Success stories gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/8 via-neon-purple/8 to-neon-orange/8 animate-gradient-shift opacity-40" />
        
        {/* Floating success symbols */}
        <motion.div
          className="absolute top-24 left-16"
          animate={{ 
            y: [0, -25, 0],
            rotate: [0, 15, -15, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          <Users className="h-16 w-16 text-neon-blue/50" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-32 right-20"
          animate={{ 
            y: [0, 20, 0],
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <Award className="h-14 w-14 text-neon-purple/50" />
        </motion.div>
        
        <motion.div
          className="absolute top-1/3 right-1/6"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Star className="h-12 w-12 text-neon-orange/50" />
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
              <Users className="h-12 w-12 text-blue-600 dark:text-neon-blue mr-4" />
            </motion.div>
            
            <h2 className="text-4xl font-bold text-gray-900 dark:text-slate-100 font-serif">
              Câu chuyện thành công
            </h2>
            
            <motion.div
              animate={{ 
                rotate: [0, 360],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="h-12 w-12 text-orange-500 dark:text-neon-orange ml-4" />
            </motion.div>
          </div>
          
          <p className="text-lg text-gray-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed mb-8">
            Những câu chuyện truyền cảm hứng từ cộng đồng MSCers - những người đã trưởng thành và thành công cùng MSC Center.
          </p>

          {/* Success-themed decorative elements */}
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

        {/* Enhanced Carousel with dark mode styling */}
        <div className="relative">
          <div className="flex justify-center items-center space-x-8">
            {/* Previous Button */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-white/80 dark:bg-dark-800/80 hover:bg-blue-50 dark:hover:bg-dark-700 border-2 border-blue-200 dark:border-neon-blue/30 shadow-lg hover:shadow-xl dark:hover:shadow-glow transition-all duration-300 glow-border"
              >
                <ChevronLeft className="h-6 w-6 text-blue-600 dark:text-neon-blue" />
              </Button>
            </motion.div>

            {/* Cards Container */}
            <div className="flex space-x-6 overflow-hidden">
              {getVisibleCards().map((mscer, index) => (
                <motion.div
                  key={mscer.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: index === 1 ? 1 : 0.7, 
                    scale: index === 1 ? 1 : 0.9,
                    y: index === 1 ? 0 : 20
                  }}
                  transition={{ duration: 0.5 }}
                  className="flex-shrink-0"
                >
                  <Card className="w-80 bg-white/90 dark:bg-dark-800/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl dark:hover:shadow-glow transition-all duration-500 overflow-hidden group glow-border">
                    {/* Dark mode hover effect */}
                    <div className="dark:block hidden absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-neon-purple/10 to-neon-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                    
                    <CardContent className="p-6 relative z-10">
                      <div className="flex items-center mb-4">
                        <div className="relative">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-orange-500 dark:from-neon-blue dark:to-neon-orange p-1">
                            <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-dark-800">
                              <Image
                                src={mscer.avatar}
                                alt={mscer.name}
                                width={64}
                                height={64}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 dark:bg-neon-blue rounded-full border-2 border-white dark:border-dark-800 flex items-center justify-center">
                            <Star className="h-3 w-3 text-white fill-current" />
                          </div>
                        </div>
                        
                        <div className="ml-4">
                          <h3 className="font-bold text-gray-900 dark:text-slate-100 text-lg">
                            {mscer.name}
                          </h3>
                          <p className="text-blue-600 dark:text-neon-blue text-sm font-medium">
                            {mscer.position}
                          </p>
                          <p className="text-gray-500 dark:text-slate-400 text-xs">
                            {mscer.company}
                          </p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex items-center mb-2">
                          <Award className="h-4 w-4 text-orange-500 dark:text-neon-orange mr-2" />
                          <span className="text-sm font-semibold text-gray-700 dark:text-slate-300">
                            Thành tựu:
                          </span>
                        </div>
                        <p className="text-sm text-blue-600 dark:text-neon-blue font-medium">
                          {mscer.achievement}
                        </p>
                      </div>

                      <div className="bg-gray-50 dark:bg-dark-700/50 rounded-lg p-4 border-l-4 border-blue-500 dark:border-neon-blue">
                        <p className="text-gray-700 dark:text-slate-300 text-sm italic leading-relaxed">
                          "{mscer.testimonial}"
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Next Button */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-white/80 dark:bg-dark-800/80 hover:bg-blue-50 dark:hover:bg-dark-700 border-2 border-blue-200 dark:border-neon-blue/30 shadow-lg hover:shadow-xl dark:hover:shadow-glow transition-all duration-300 glow-border"
              >
                <ChevronRight className="h-6 w-6 text-blue-600 dark:text-neon-blue" />
              </Button>
            </motion.div>
          </div>

          {/* Enhanced Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {mscers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-blue-600 dark:bg-neon-blue scale-125 shadow-lg dark:shadow-glow-sm"
                    : "bg-gray-300 dark:bg-dark-600 hover:bg-blue-400 dark:hover:bg-neon-blue/70"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Success statistics showcase */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-50 dark:bg-dark-800/60 rounded-2xl p-8 border dark:border-dark-700/50 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="mb-4"
                >
                  <Users className="h-12 w-12 text-blue-600 dark:text-neon-blue mx-auto" />
                </motion.div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-slate-100 mb-2">500+</h3>
                <p className="text-gray-600 dark:text-slate-400">MSCers thành công</p>
              </div>
              
              <div>
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="mb-4"
                >
                  <Award className="h-12 w-12 text-orange-500 dark:text-neon-orange mx-auto" />
                </motion.div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-slate-100 mb-2">95%</h3>
                <p className="text-gray-600 dark:text-slate-400">Tỷ lệ thành công</p>
              </div>
              
              <div>
                <motion.div
                  animate={{ 
                    y: [0, -8, 0],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="mb-4"
                >
                  <Star className="h-12 w-12 text-purple-600 dark:text-neon-purple mx-auto" />
                </motion.div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-slate-100 mb-2">4.9</h3>
                <p className="text-gray-600 dark:text-slate-400">Đánh giá trung bình</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MSCersSection
