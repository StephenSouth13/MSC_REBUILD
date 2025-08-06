"use client"
import Link from 'next/link';
import { motion } from "framer-motion"
import { ChevronDown, Play, Pause, Sparkles, Stars } from "lucide-react"
import { useState, useRef } from "react"
import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"

const HeroVideo = () => {
  const { t } = useLanguage()
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/placeholder.svg?height=1080&width=1920&text=MSC+Center+Video+Poster"
        >
          <source src="/Intro.mp4" type="video/mp4" />
          {/* Enhanced fallback gradient background for both light and dark modes */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 dark:from-dark-950 dark:via-dark-900 dark:to-blue-950"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)
              `,
            }}
          />
        </video>

        {/* Enhanced Video Overlay with dark mode support */}
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />

        {/* Dark mode specific overlay effects */}
        <div className="dark:block hidden absolute inset-0">
          {/* Aurora-like gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 via-neon-purple/20 to-neon-orange/20 animate-aurora opacity-50" />
          
          {/* Particle constellation effect */}
          <div className="particles-bg" />
          
          {/* Floating geometric shapes */}
          <motion.div
            className="absolute top-1/4 left-1/6 w-4 h-4 bg-neon-blue/30 rounded-full"
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <motion.div
            className="absolute top-1/3 right-1/4 w-6 h-6 bg-neon-purple/30 rotate-45"
            animate={{
              y: [0, 25, 0],
              x: [0, -15, 0],
              rotate: [45, 135, 45],
              opacity: [0.4, 0.9, 0.4]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          
          <motion.div
            className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-neon-orange/40 rounded-full"
            animate={{
              y: [0, -20, 0],
              scale: [1, 2, 1],
              opacity: [0.4, 1, 0.4]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          />
        </div>

        {/* Enhanced animated waves overlay */}
        <div className="absolute inset-0 opacity-20 dark:opacity-30">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 dark:via-neon-blue/20 to-transparent transform -skew-y-12" 
            animate={{ 
              x: ["-100%", "100%"],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-300/20 dark:via-neon-purple/20 to-transparent transform skew-y-12" 
            animate={{ 
              x: ["100%", "-100%"],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{ 
              duration: 12, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>
      </div>

      {/* Enhanced Video Controls with dark mode styling */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={toggleVideo}
        className="absolute top-6 right-6 z-30 w-12 h-12 bg-white/20 dark:bg-dark-800/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 dark:hover:bg-dark-700/70 transition-all duration-300 border border-white/30 dark:border-neon-blue/30 hover:shadow-glow-sm group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isPlaying ? (
          <Pause className="h-5 w-5 text-white dark:text-neon-blue group-hover:text-blue-200 transition-colors duration-300" />
        ) : (
          <Play className="h-5 w-5 text-white dark:text-neon-blue group-hover:text-blue-200 ml-1 transition-colors duration-300" />
        )}
      </motion.button>

      {/* Enhanced Content with dark mode typography */}
      <div className="relative z-20 text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Enhanced dark mode floating elements */}
          <div className="dark:block hidden absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute -top-10 left-1/4"
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 180, 360],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="h-8 w-8 text-neon-blue/70" />
            </motion.div>
            
            <motion.div
              className="absolute -top-5 right-1/3"
              animate={{ 
                y: [0, 10, 0],
                x: [0, 15, 0],
                scale: [1, 1.3, 1]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <Stars className="h-6 w-6 text-neon-purple/70" />
            </motion.div>
          </div>

          {/* Enhanced CTA Button with dark mode glow effects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="relative"
          >
            {/* Dark mode background glow */}
            <div className="dark:block hidden absolute inset-0 bg-gradient-to-r from-neon-blue/20 via-neon-purple/20 to-neon-orange/20 rounded-lg blur-xl opacity-75 animate-pulse" />
            
            <Button
              asChild
              size="lg"
              className="relative btn-secondary text-lg px-8 py-4 hover:scale-105 transition-all duration-300 dark:bg-gradient-to-r dark:from-neon-blue dark:to-neon-purple dark:text-dark-900 dark:hover:from-blue-500 dark:hover:to-purple-500 dark:shadow-glow glow-border font-bold"
            >
              <Link href="/lien-he" className="flex items-center space-x-2">
                <span>{t("hero.cta")}</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Sparkles className="h-5 w-5 dark:text-dark-900" />
                </motion.div>
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll Indicator with dark mode styling */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="flex flex-col items-center text-white/80 dark:text-slate-300 group cursor-pointer"
            onClick={scrollToContact}
          >
            <span className="text-sm mb-2 dark:text-neon-blue group-hover:text-blue-300 transition-colors duration-300">
              Cuộn xuống
            </span>
            
            <div className="relative">
              {/* Dark mode glow effect for arrow */}
              <div className="dark:block hidden absolute inset-0 bg-neon-blue/50 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <ChevronDown className="h-6 w-6 relative z-10 dark:text-neon-blue group-hover:text-blue-300 transition-colors duration-300" />
            </div>

            {/* Animated line indicator for dark mode */}
            <motion.div
              className="dark:block hidden w-px h-12 bg-gradient-to-b from-neon-blue/70 to-transparent mt-2"
              animate={{ 
                height: [24, 48, 24],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Dark mode ambient lighting effect */}
      <div className="dark:block hidden absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Radial gradient spotlights */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-orange/10 rounded-full blur-3xl animate-pulse delay-2000" />
        </div>
      </div>
    </section>
  )
}

export default HeroVideo
