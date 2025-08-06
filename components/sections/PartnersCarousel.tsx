"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { Handshake, Sparkles, Building, Globe } from "lucide-react"

const PartnersCarousel = () => {
   const partners = [
  { id: 1, name: "ASL", logo: "/carousel/ASL.webp" },
  { id: 2, name: "Binemo", logo: "/carousel/Binemo.webp" },
  { id: 3, name: "BNI", logo: "/carousel/BNI.webp" },
  { id: 4, name: "CP", logo: "/carousel/CP.webp" },
  { id: 5, name: "CSMO", logo: "/carousel/CSMO.webp" },
  { id: 6, name: "Greenfeed", logo: "/carousel/Greenfeed.webp" },
  { id: 7, name: "Happy Land", logo: "/carousel/Happyland.webp" },
  { id: 8, name: "HTO Group", logo: "/carousel/HTOGroup.webp" },
  { id: 9, name: "HUIT", logo: "/carousel/HUIT.webp" },
  { id: 10, name: "KNQG", logo: "/carousel/KNQG.webp" },
  { id: 11, name: "NAB", logo: "/carousel/NAB.webp" },
  { id: 12, name: "Richs", logo: "/carousel/Richs.webp" },
  { id: 13, name: "Satra", logo: "/carousel/Satra.webp" },
  { id: 14, name: "Schindler", logo: "/carousel/Schindler.webp" },
  { id: 15, name: "SGC", logo: "/carousel/SGC.webp" },
  { id: 16, name: "SGF", logo: "/carousel/SGF.webp" },
  { id: 17, name: "SGGG", logo: "/carousel/SGGG.webp" },
  { id: 18, name: "SGL", logo: "/carousel/SGL.webp" },
  { id: 19, name: "Shinhan", logo: "/carousel/Shinhan.webp" },
  { id: 20, name: "Smar", logo: "/carousel/Smar.webp" },
  { id: 21, name: "Smentor", logo: "/carousel/Smentor.webp" },
  { id: 22, name: "SP", logo: "/carousel/SP.webp" },
  { id: 23, name: "TC", logo: "/carousel/TC.webp" },
  { id: 24, name: "UEH", logo: "/carousel/UEH.webp" },
  { id: 25, name: "UFM", logo: "/carousel/UFM.webp" },
  { id: 26, name: "VCCI", logo: "/carousel/VCCI.webp" },
  { id: 27, name: "VK", logo: "/carousel/VK.webp" },
  { id: 28, name: "VNPT", logo: "/carousel/VNPT.webp" },
  { id: 29, name: "VRA", logo: "/carousel/VRA.webp" },
  { id: 30, name: "VSM", logo: "/carousel/VSM.webp" },
  { id: 31, name: "VTF", logo: "/carousel/VTF.webp" },
  { id: 32, name: "WK", logo: "/carousel/WK.webp" },
  { id: 33, name: "YESCO", logo: "/carousel/YESCO.webp" }
];

  // Duplicate partners for seamless loop
  const duplicatedPartners = [...partners, ...partners]

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 via-teal-800 to-blue-900 dark:from-dark-950 dark:via-dark-900 dark:to-blue-950 overflow-hidden relative">
      
      {/* Enhanced dark mode background effects */}
      <div className="dark:block hidden absolute inset-0">
        {/* Partnership-themed gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-neon-purple/10 to-neon-orange/10 animate-aurora opacity-60" />
        
        {/* Floating partnership symbols */}
        <motion.div
          className="absolute top-20 left-16"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          <Handshake className="h-16 w-16 text-neon-blue/50" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-24 right-20"
          animate={{ 
            y: [0, 15, 0],
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <Building className="h-12 w-12 text-neon-purple/50" />
        </motion.div>
        
        <motion.div
          className="absolute top-1/2 left-1/4"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        >
          <Globe className="h-14 w-14 text-neon-orange/50" />
        </motion.div>
      </div>

      {/* Animated background waves */}
      <div className="absolute inset-0 opacity-30 dark:opacity-50">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 dark:via-neon-blue/20 to-transparent transform -skew-y-6"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-300/20 dark:via-neon-purple/20 to-transparent transform skew-y-6"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 5 }}
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
          <div className="flex items-center justify-center mb-6">
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Handshake className="h-12 w-12 text-white/90 dark:text-neon-blue mr-4" />
            </motion.div>
            
            <h2 className="text-4xl font-bold text-white font-serif">
              Đối tác tin cậy
            </h2>
            
            <motion.div
              animate={{ 
                rotate: [0, 360],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="h-12 w-12 text-teal-300 dark:text-neon-orange ml-4" />
            </motion.div>
          </div>
          
          <p className="text-xl text-blue-100 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Hãnh diện hợp tác cùng những doanh nghiệp hàng đầu, xây dựng mạng lưới đối tác mạnh mẽ và bền vững.
          </p>

          {/* Partnership-themed decorative elements */}
          <div className="flex items-center justify-center space-x-6">
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-transparent via-white/60 dark:via-neon-blue/80 to-transparent rounded-full"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 80, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              viewport={{ once: true }}
            />
            
            <motion.div
              animate={{ 
                scale: [1, 1.4, 1],
                opacity: [0.7, 1, 0.7],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="w-4 h-4 bg-teal-300 dark:bg-neon-orange rounded-full" />
              <div className="dark:block hidden absolute inset-0 bg-neon-orange/60 rounded-full blur-md animate-pulse" />
            </motion.div>
            
            <motion.div 
              className="w-20 h-1 bg-gradient-to-l from-transparent via-teal-300/60 dark:via-neon-orange/80 to-transparent rounded-full"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 80, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>

        {/* Enhanced Partners Carousel */}
        <div className="relative">
          <div className="overflow-hidden mask-gradient">
            <motion.div
              className="flex space-x-8"
              animate={{ x: [0, -50 * partners.length] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 60,
                  ease: "linear",
                },
              }}
            >
              {duplicatedPartners.map((partner, index) => (
                <motion.div
                  key={`${partner.id}-${index}`}
                  className="flex-shrink-0 group relative"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-32 h-20 bg-white/10 dark:bg-dark-800/30 backdrop-blur-sm rounded-xl border border-white/20 dark:border-neon-blue/30 flex items-center justify-center p-4 hover:bg-white/20 dark:hover:bg-dark-700/50 transition-all duration-300 group-hover:shadow-xl dark:group-hover:shadow-glow glow-border">
                    
                    {/* Dark mode glow effect on hover */}
                    <div className="dark:block hidden absolute inset-0 bg-gradient-to-br from-neon-blue/20 via-neon-purple/20 to-neon-orange/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg -z-10" />
                    
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={100}
                      height={60}
                      className="max-w-full max-h-full object-contain filter brightness-0 invert dark:filter-none dark:brightness-100 group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                        const parent = target.parentElement
                        if (parent) {
                          parent.innerHTML = `<span class="text-white dark:text-slate-300 text-sm font-medium">${partner.name}</span>`
                        }
                      }}
                    />
                  </div>
                  
                  {/* Partner name tooltip */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 dark:bg-dark-900/90 text-white dark:text-slate-200 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap backdrop-blur-sm">
                    {partner.name}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Partnership achievements showcase */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/10 dark:bg-dark-800/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-dark-700/50">
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
                  <Building className="h-12 w-12 text-white/90 dark:text-neon-blue mx-auto" />
                </motion.div>
                <h3 className="text-3xl font-bold text-white mb-2">30+</h3>
                <p className="text-blue-100 dark:text-slate-300">Đối tác chiến lược</p>
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
                  <Handshake className="h-12 w-12 text-teal-300 dark:text-neon-orange mx-auto" />
                </motion.div>
                <h3 className="text-3xl font-bold text-white mb-2">100+</h3>
                <p className="text-blue-100 dark:text-slate-300">Dự án hợp tác</p>
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
                  <Globe className="h-12 w-12 text-yellow-300 dark:text-neon-purple mx-auto" />
                </motion.div>
                <h3 className="text-3xl font-bold text-white mb-2">5+</h3>
                <p className="text-blue-100 dark:text-slate-300">Năm kinh nghiệm</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .mask-gradient {
          mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
        }
      `}</style>
    </section>
  )
}

export default PartnersCarousel
