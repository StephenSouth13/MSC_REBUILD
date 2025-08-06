"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, ChevronRight, Sun, Moon, User, LogIn, UserPlus, Sparkles } from 'lucide-react'
import { useTheme } from "next-themes"
import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Enhanced animation variants for mobile menu
const mobileNavVariants = {
  open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
};

const mobileNavItemVariants = {
  open: { y: 0, opacity: 1, transition: { y: { stiffness: 1000, velocity: -100 } } },
  closed: { y: 50, opacity: 0, transition: { y: { stiffness: 1000 } } }
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  const pathname = usePathname()

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    }
  }, [])

  const navItems = [
    { href: "/gioi-thieu", label: t("nav.about") },
    { href: "/dao-tao", label: t("nav.training") },
    { href: "/du-an", label: t("nav.projects") },
    { href: "/mentors", label: t("nav.mentors") },
    { href: "/mscer", label: t("nav.mscer") },
    { href: "/dong-hanh", label: t("nav.partners") },
    { href: "/chia-se", label: t("nav.blog") },
    { href: "/lien-he", label: t("nav.contact") },
  ]

  const activePath = navItems.find(item => pathname.startsWith(item.href))?.href || null;

  const TOPBAR_HEIGHT = 36
  const HEADER_BASE_HEIGHT = 100
  const HEADER_SCROLLED_HEIGHT = 72

  return (
    <>
      {/* Enhanced Topbar with dark mode styling */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div 
            key="topbar" 
            initial={{ y: -TOPBAR_HEIGHT, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            exit={{ y: -TOPBAR_HEIGHT, opacity: 0 }} 
            transition={{ duration: 0.4, ease: "easeInOut" }} 
            className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-blue-600 via-blue-700 to-teal-600 dark:from-dark-800 dark:via-dark-700 dark:to-blue-900 text-white text-sm shadow-md dark:shadow-glow-sm overflow-hidden" 
            style={{ height: TOPBAR_HEIGHT }}
          >
            {/* Animated background effects */}
            <div className="absolute inset-0 opacity-30 dark:opacity-50">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-neon-blue/30 to-transparent" 
                animate={{ x: ["-100%", "100%"] }} 
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
              {/* Dark mode particle effect */}
              <div className="dark:block hidden particles-bg" />
            </div>
            
            <div className="container mx-auto flex justify-between items-center h-full px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="flex items-center space-x-4 text-xs flex-wrap">
                <span className="hidden sm:block">📧 msc.edu.vn@gmail.com</span>
                <span className="hidden md:block">📞 (+84) 329 381 489</span>
                <span className="block">
                  <Sparkles className="inline h-3 w-3 mr-1 dark:text-neon-blue" />
                  Mekong Skill Center
                </span>
              </div>
              
              <div className="flex items-center space-x-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="flex items-center space-x-1 text-white hover:bg-white/20 dark:hover:bg-white/10 dark:hover:shadow-glow-sm h-7 transition-all duration-300"
                    >
                      <span className="text-sm">{language === "vi" ? "🇻🇳" : "🇬🇧"}</span>
                      <ChevronDown className="h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="dark:bg-dark-800 dark:border-dark-600 dark:shadow-glow">
                    <DropdownMenuItem 
                      onClick={() => setLanguage("vi")}
                      className="dark:hover:bg-dark-700 dark:text-slate-200"
                    >
                      🇻🇳 Tiếng Việt
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={() => setLanguage("en")}
                      className="dark:hover:bg-dark-700 dark:text-slate-200"
                    >
                      🇬🇧 English
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                
                <Link href="/login" className="hidden sm:block">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-white hover:bg-white/20 dark:hover:bg-white/10 dark:hover:shadow-glow-sm h-7 text-xs transition-all duration-300"
                  >
                    <LogIn className="h-3 w-3 mr-1" />
                    {t("nav.login")}
                  </Button>
                </Link>
                
                <Link href="/register" className="hidden sm:block">
                  <Button 
                    size="sm" 
                    className="bg-white text-blue-600 hover:bg-blue-50 dark:bg-neon-blue dark:text-dark-900 dark:hover:bg-blue-400 dark:shadow-glow-sm h-7 text-xs transition-all duration-300"
                  >
                    <UserPlus className="h-3 w-3 mr-1" />
                    {t("nav.register")}
                  </Button>
                </Link>
                
                <Link href="/profile" className="hidden sm:block">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-white hover:bg-white/20 dark:hover:bg-white/10 dark:hover:shadow-glow-sm h-7 text-xs border border-white/30 dark:border-neon-blue/50 transition-all duration-300"
                  >
                    <User className="h-3 w-3 mr-1" />
                    {t("nav.profile")}
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Header with beautiful dark mode styling */}
      <motion.header 
        className={`fixed left-0 right-0 z-50 w-full transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 dark:bg-dark-900/95 backdrop-blur-lg shadow-lg dark:shadow-glow-lg border-b dark:border-dark-700/50" 
            : "bg-white/90 dark:bg-dark-900/90 backdrop-blur-md"
        }`} 
        style={{ 
          top: isScrolled ? 0 : `${TOPBAR_HEIGHT}px`, 
          height: isScrolled ? `${HEADER_SCROLLED_HEIGHT}px` : `${HEADER_BASE_HEIGHT}px` 
        }} 
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {/* Dark mode aurora effect */}
        <div className="dark:block hidden absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 via-neon-purple/5 to-neon-blue/5 animate-aurora" />
        </div>

        <div className="container mx-auto flex h-full items-center justify-between px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/" className="flex-shrink-0">
            <motion.div 
              animate={{ scale: isScrolled ? 0.75 : 1 }} 
              transition={{ duration: 0.4, ease: "circOut" }} 
              className="flex items-center origin-left group"
            >
              <div className="relative">
                <Image 
                  src="/logo.webp" 
                  alt="Mekong Skill Center" 
                  width={240} 
                  height={72} 
                  className="h-auto transition-all duration-300 dark:drop-shadow-lg" 
                  style={{ width: isScrolled ? '270px' : '280px' }} 
                  priority 
                />
                {/* Dark mode glow effect for logo */}
                <div className="dark:block hidden absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            </motion.div>
          </Link>

          {/* Enhanced Navigation with dark mode styling */}
          <nav className="hidden items-center font-medium lg:flex lg:space-x-2 xl:space-x-4">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                className={`relative group rounded-md py-2 transition-all duration-300 lg:px-2 xl:px-3 lg:text-[11px] xl:text-[12px] 2xl:text-sm uppercase tracking-wider dark-nav-item ${
                  item.href === activePath 
                    ? "text-blue-600 dark:text-neon-blue" 
                    : "text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-neon-blue"
                }`}
              >
                {item.label}
                <span 
                  className={`absolute -bottom-1 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-blue-600 dark:bg-neon-blue transition-all duration-300 ${
                    item.href === activePath ? 'w-1/2 dark:shadow-glow-sm' : 'w-0 group-hover:w-full'
                  }`} 
                />
                {/* Dark mode hover glow */}
                <div className="dark:block hidden absolute inset-0 bg-neon-blue/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </Link>
            ))}
          </nav>

          {/* Enhanced Control Buttons */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Theme Toggle with enhanced dark mode styling */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")} 
                className="h-9 w-9 rounded-full bg-slate-100 dark:bg-dark-800 hover:bg-slate-200 dark:hover:bg-dark-700 dark:hover:shadow-glow-sm transition-all duration-300 glow-border"
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-orange-500" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-neon-blue" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </motion.div>
            
            {/* Mobile Menu Button with enhanced styling */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-9 w-9 rounded-full bg-slate-100 dark:bg-dark-800 hover:bg-slate-200 dark:hover:bg-dark-700 dark:hover:shadow-glow-sm lg:hidden transition-all duration-300 glow-border" 
                onClick={() => setIsMobileMenuOpen(true)} 
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5 dark:text-neon-blue" />
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.header>
      
      {/* Enhanced Mobile Menu with stunning dark mode design */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop with enhanced blur */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              transition={{ duration: 0.3 }} 
              className="fixed inset-0 z-[90] bg-black/70 dark:bg-black/80 backdrop-blur-sm lg:hidden" 
              onClick={() => setIsMobileMenuOpen(false)} 
            />
            
            {/* Enhanced Mobile Menu Panel */}
            <motion.div 
              key="mobile-menu-panel" 
              className="fixed top-0 left-0 bottom-0 z-[100] w-4/5 max-w-sm bg-gradient-to-b from-slate-50 to-blue-50 dark:from-dark-900 dark:to-dark-800 dark:shadow-glow-lg shadow-2xl lg:hidden overflow-hidden" 
              initial={{ x: "-100%" }} 
              animate={{ x: 0 }} 
              exit={{ x: "-100%" }} 
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Dark mode background effects */}
              <div className="dark:block hidden absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-neon-purple/5 to-neon-orange/5" />
                <div className="particles-bg" />
              </div>

              <div className="flex h-full flex-col relative z-10">
                {/* Header with enhanced styling */}
                <div className="flex items-center justify-between p-4 border-b border-slate-200/70 dark:border-dark-700/70 bg-white/50 dark:bg-dark-800/50 backdrop-blur-sm">
                  <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="relative group">
                      <Image 
                        src="/logo.webp" 
                        alt="Mekong Skill Center" 
                        width={140} 
                        height={37} 
                        className="dark:drop-shadow-lg transition-all duration-300"
                      />
                      <div className="dark:block hidden absolute inset-0 bg-neon-blue/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                    </div>
                  </Link>
                  
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setIsMobileMenuOpen(false)} 
                    className="rounded-full hover:bg-red-100 dark:hover:bg-red-900/30 dark:hover:shadow-glow-sm transition-all duration-300"
                  >
                    <X className="h-5 w-5 dark:text-red-400" />
                  </Button>
                </div>
                
                {/* Enhanced Navigation Items */}
                <motion.nav 
                  className="flex-1 p-4 sm:p-6 space-y-2" 
                  variants={mobileNavVariants} 
                  initial="closed" 
                  animate="open"
                >
                  {navItems.map((item) => (
                    <motion.div key={item.href} variants={mobileNavItemVariants}>
                      <Link 
                        href={item.href} 
                        className={`group flex items-center justify-between p-3 rounded-xl transition-all duration-200 glow-border ${
                          item.href === activePath 
                            ? "bg-blue-100 dark:bg-blue-900/50 dark:shadow-glow-sm" 
                            : "hover:bg-slate-200/50 dark:hover:bg-dark-800/50"
                        }`} 
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className={`font-bold text-sm ${
                          item.href === activePath 
                            ? 'text-blue-600 dark:text-neon-blue' 
                            : 'text-gray-800 dark:text-gray-200'
                        }`}>
                          {item.label}
                        </span>
                        <ChevronRight className={`h-4 w-4 transition-transform duration-200 ${
                          item.href === activePath 
                            ? 'text-blue-500 dark:text-neon-blue' 
                            : 'text-gray-400 group-hover:translate-x-1 dark:text-gray-500'
                        }`} />
                      </Link>
                    </motion.div>
                  ))}
                </motion.nav>
                
                {/* Enhanced Footer Section */}
                <div className="p-4 sm:p-6 mt-auto border-t border-slate-200/70 dark:border-dark-700/70 bg-white/50 dark:bg-dark-800/50 backdrop-blur-sm">
                  <div className="grid grid-cols-2 gap-3">
                    <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button 
                        variant="outline" 
                        className="w-full dark:border-dark-600 dark:bg-dark-800/50 dark:hover:bg-dark-700 dark:text-slate-200 transition-all duration-300"
                      >
                        <LogIn className="w-4 h-4 mr-2" />
                        {t("nav.login")}
                      </Button>
                    </Link>
                    
                    <Link href="/register" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-neon-blue dark:text-dark-900 dark:hover:bg-blue-400 dark:shadow-glow-sm text-white transition-all duration-300">
                        <UserPlus className="w-4 h-4 mr-2" />
                        {t("nav.register")}
                      </Button>
                    </Link>
                    
                    <Link href="/profile" className="col-span-2" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button 
                        variant="outline" 
                        className="w-full mt-2 dark:border-dark-600 dark:bg-dark-800/50 dark:hover:bg-dark-700 dark:text-slate-200 transition-all duration-300"
                      >
                        <User className="w-4 h-4 mr-2" />
                        {t("nav.profile")}
                      </Button>
                    </Link>
                  </div>
                  
                  <p className="text-center text-xs text-slate-500 dark:text-gray-500 mt-4">
                    © {new Date().getFullYear()} Mekong Skill Center.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div 
        className="transition-all duration-300" 
        style={{ 
          height: isScrolled 
            ? `${HEADER_SCROLLED_HEIGHT}px` 
            : `${TOPBAR_HEIGHT + HEADER_BASE_HEIGHT}px` 
        }} 
      />
    </>
  )
}

export default Header
