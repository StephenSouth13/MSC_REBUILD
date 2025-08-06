"use client"

import type React from "react"
import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Facebook, Youtube, Phone, Mail, MapPin, Send, MessageCircle, Sparkles, Stars } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// Facebook SDK Loader component
const FacebookSDKLoader = () => {
    useEffect(() => {
        // Check if script already exists to avoid reloading
        if (document.getElementById('facebook-jssdk')) {
            if (window.FB) {
                window.FB.XFBML.parse();
            }
            return;
        }

        // Create #fb-root div
        const fbRoot = document.createElement('div');
        fbRoot.id = 'fb-root';
        document.body.insertBefore(fbRoot, document.body.firstChild);

        // Create and add script tag
        const script = document.createElement('script');
        script.id = 'facebook-jssdk';
        script.src = "https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v18.0&appId=YOUR_APP_ID&autoLogAppEvents=1";
        script.async = true;
        script.defer = true;
        script.crossOrigin = "anonymous";
        
        script.onload = () => {
            if (window.FB) { 
                window.FB.XFBML.parse();
            }
        };

        document.body.appendChild(script);
    }, []);

    return null; 
};

const Footer = () => {
    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Newsletter subscription submitted")
    }

    return (
        <footer className="relative bg-gradient-to-br from-blue-900 via-sky-900 to-teal-800 dark:from-dark-950 dark:via-dark-900 dark:to-blue-950 text-white overflow-hidden">
            
            <FacebookSDKLoader />
            
            {/* Enhanced background effects for dark mode */}
            <div className="absolute inset-0 opacity-20 dark:opacity-40">
                {/* Animated gradient waves */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-300/20 dark:via-neon-blue/30 to-transparent transform skew-y-12 animate-pulse delay-1000" />
                
                {/* Aurora-like moving gradient */}
                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-teal-500/30 dark:from-neon-purple/30 to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "linear",
                    }}
                    style={{
                        backgroundImage:
                            "repeating-linear-gradient(-45deg, rgba(255,255,255,0.05), rgba(255,255,255,0.05) 20px, transparent 20px, transparent 40px)",
                    }}
                />

                {/* Dark mode particle constellation effect */}
                <div className="dark:block hidden absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-neon-purple/10 to-neon-orange/10 animate-gradient-shift" />
                    <div className="particles-bg" />
                    
                    {/* Floating sparkles */}
                    <motion.div
                        className="absolute top-1/4 left-1/4"
                        animate={{ 
                            y: [0, -20, 0],
                            x: [0, 10, 0],
                            rotate: [0, 180, 360]
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <Sparkles className="h-6 w-6 text-neon-blue/50" />
                    </motion.div>
                    
                    <motion.div
                        className="absolute top-1/3 right-1/3"
                        animate={{ 
                            y: [0, 15, 0],
                            x: [0, -15, 0],
                            rotate: [360, 180, 0]
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    >
                        <Stars className="h-4 w-4 text-neon-purple/50" />
                    </motion.div>
                    
                    <motion.div
                        className="absolute bottom-1/3 left-1/2"
                        animate={{ 
                            y: [0, -10, 0],
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 1, 0.5]
                        }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 4 }}
                    >
                        <Sparkles className="h-5 w-5 text-neon-orange/50" />
                    </motion.div>
                </div>
            </div>

            {/* Main content with enhanced dark mode styling */}
            <div className="relative z-10 container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    
                    {/* Logo and Info Section with enhanced dark mode */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2"
                    >
                        <Link href="/" className="inline-block mb-6 group">
                            <div className="relative inline-block rounded-2xl p-4 transition-all duration-300 hover:shadow-xl dark:hover:shadow-glow-lg glow-border">
                                {/* Enhanced background for dark mode */}
                                <div className="absolute inset-0 rounded-2xl bg-white/100 dark:bg-dark-800/90 backdrop-blur-md shadow-inner dark:shadow-inner-glow z-0 pointer-events-none border dark:border-neon-blue/30" />
                                
                                {/* Dark mode aurora glow effect */}
                                <div className="dark:block hidden absolute inset-0 rounded-2xl bg-gradient-to-br from-neon-blue/20 via-neon-purple/20 to-neon-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />

                                <Image
                                    src="/logo.webp"
                                    alt="MSC Center - UEH University"
                                    width={450}
                                    height={100}
                                    className="relative z-10 h-auto w-auto max-w-full md:max-w-[450px] dark:drop-shadow-lg transition-all duration-300"
                                    priority
                                />
                            </div>
                        </Link>

                        <p className="text-blue-100 dark:text-slate-300 mb-6 leading-relaxed max-w-md">
                            MSC Center - Trung tâm đào tạo và phát triển kỹ năng chuyên nghiệp hàng đầu Việt Nam cho người đi làm và sinh viên.
                        </p>

                        {/* Enhanced Facebook widget container */}
                        <div className="mt-6 bg-white/5 dark:bg-dark-800/30 p-1 rounded-lg backdrop-blur-sm border border-white/10 dark:border-neon-blue/30 glow-border" style={{ maxWidth: 320 }}>
                            <div
                                className="fb-page"
                                data-href="https://www.facebook.com/msc.edu.vn"
                                data-tabs="timeline"
                                data-width="320"
                                data-height="150"
                                data-small-header="true"
                                data-adapt-container-width="true"
                                data-hide-cover="false"
                                data-show-facepile="true"
                            >
                                <blockquote
                                    cite="https://www.facebook.com/msc.edu.vn"
                                    className="fb-xfbml-parse-ignore"
                                >
                                    <a href="https://www.facebook.com/msc.edu.vn">MSC - Life Long Learning</a>
                                </blockquote>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Information with enhanced styling */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="dark-section"
                    >
                        <h3 className="text-xl font-bold mb-6 font-serif text-teal-200 dark:text-neon-blue flex items-center">
                            <MapPin className="h-5 w-5 mr-2 dark:text-neon-blue" />
                            Thông tin liên hệ
                        </h3>
                        
                        <div className="space-y-4">
                            <motion.div 
                                className="flex items-start space-x-4 group"
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="w-10 h-10 bg-teal-500/20 dark:bg-neon-blue/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-teal-400/30 dark:border-neon-blue/50 group-hover:shadow-glow-sm transition-all duration-300">
                                    <MapPin className="h-5 w-5 text-teal-300 dark:text-neon-blue" />
                                </div>
                                <div>
                                    <p className="text-blue-100 dark:text-slate-300 group-hover:text-white dark:group-hover:text-slate-200 transition-colors duration-300">
                                        279 Nguyễn Tri Phương, Phường Diên Hồng, TP.Hồ Chí Minh
                                    </p>
                                </div>
                            </motion.div>
                            
                            <motion.div 
                                className="flex items-center space-x-4 group"
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="w-10 h-10 bg-teal-500/20 dark:bg-neon-blue/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-teal-400/30 dark:border-neon-blue/50 group-hover:shadow-glow-sm transition-all duration-300">
                                    <Phone className="h-5 w-5 text-teal-300 dark:text-neon-blue" />
                                </div>
                                <p className="text-blue-100 dark:text-slate-300 hover:text-white dark:hover:text-neon-blue transition-colors duration-300">
                                    <a href="tel:+84329381489">Điện Thoại: (+84) 329 381 489</a>
                                </p>
                            </motion.div>
                            
                            <motion.div 
                                className="flex items-center space-x-4 group"
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="w-10 h-10 bg-teal-500/20 dark:bg-neon-blue/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-teal-400/30 dark:border-neon-blue/50 group-hover:shadow-glow-sm transition-all duration-300">
                                    <Mail className="h-5 w-5 text-teal-300 dark:text-neon-blue" />
                                </div>
                                <p className="text-blue-100 dark:text-slate-300 hover:text-white dark:hover:text-neon-blue transition-colors duration-300">
                                    <a href="mailto:msc.edu.vn@gmail.com">Email: msc.edu.vn@gmail.com</a>
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Newsletter and Social Media with enhanced dark mode */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="dark-section"
                    >
                        <h3 className="text-xl font-bold mb-6 font-serif text-teal-200 dark:text-neon-purple flex items-center">
                            <Sparkles className="h-5 w-5 mr-2 dark:text-neon-purple animate-pulse" />
                            Kết nối với chúng tôi
                        </h3>
                        
                        <p className="text-blue-100 dark:text-slate-300 mb-4">
                            Đăng ký để nhận thông tin về các khóa học và sự kiện mới nhất.
                        </p>

                        {/* Enhanced newsletter form */}
                        <form onSubmit={handleNewsletterSubmit} className="mb-8">
                            <div className="flex group">
                                <Input
                                    type="email"
                                    placeholder="Email của bạn"
                                    className="rounded-r-none bg-white/10 dark:bg-dark-800/50 border-white/20 dark:border-neon-blue/30 text-white placeholder-blue-200 dark:placeholder-slate-400 backdrop-blur-sm focus:ring-teal-400 dark:focus:ring-neon-blue focus:border-teal-400 dark:focus:border-neon-blue transition-all duration-300"
                                    required
                                />
                                <Button 
                                    type="submit" 
                                    className="rounded-l-none bg-teal-500 hover:bg-teal-600 dark:bg-neon-blue dark:hover:bg-blue-500 dark:text-dark-900 px-4 transition-all duration-300 hover:shadow-glow-sm dark:hover:shadow-glow"
                                >
                                    <Send className="h-4 w-4" />
                                </Button>
                            </div>
                        </form>

                        {/* Enhanced social media buttons */}
                        <div className="flex space-x-4">
                            <motion.div whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href="https://www.facebook.com/msc.edu.vn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-white/10 dark:bg-dark-800/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-600 transition-all duration-300 border border-white/20 dark:border-neon-blue/30 hover:shadow-glow-lg group glow-border"
                                    aria-label="Facebook của MSC"
                                >
                                    <Facebook className="h-5 w-5 group-hover:text-white dark:text-neon-blue transition-colors duration-300" />
                                </Link>
                            </motion.div>
                            
                            <motion.div whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href="https://www.youtube.com/@MSCLifeLongLearning"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-white/10 dark:bg-dark-800/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-600 dark:hover:bg-red-600 transition-all duration-300 border border-white/20 dark:border-neon-purple/30 hover:shadow-glow-lg group glow-border"
                                    aria-label="Youtube của MSC"
                                >
                                    <Youtube className="h-5 w-5 group-hover:text-white dark:text-neon-purple transition-colors duration-300" />
                                </Link>
                            </motion.div>
                            
                            <motion.div whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href="https://zalo.me/g/acumou501"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-white/10 dark:bg-dark-800/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-500 dark:hover:bg-blue-500 transition-all duration-300 border border-white/20 dark:border-neon-orange/30 hover:shadow-glow-lg group glow-border"
                                    aria-label="Zalo của MSC"
                                >
                                    <MessageCircle className="h-5 w-5 group-hover:text-white dark:text-neon-orange transition-colors duration-300" />
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Enhanced bottom bar with dark mode styling */}
            <div className="relative z-10 border-t border-white/20 dark:border-dark-700/50 bg-black/20 dark:bg-dark-950/80 backdrop-blur-sm">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
                        <p className="text-blue-200 dark:text-slate-400 text-sm flex items-center">
                            <Sparkles className="h-4 w-4 mr-2 dark:text-neon-blue animate-pulse" />
                            © {new Date().getFullYear()} MSC Center. Phát triển bởi Phòng Công nghệ thông tin.
                        </p>
                        
                        <div className="flex space-x-6 text-sm">
                            <Link 
                                href="/chinh-sach-bao-mat" 
                                className="text-blue-200 dark:text-slate-400 hover:text-white dark:hover:text-neon-blue transition-all duration-300 hover:underline"
                            >
                                Chính sách bảo mật
                            </Link>
                            <Link 
                                href="/dieu-khoan-su-dung" 
                                className="text-blue-200 dark:text-slate-400 hover:text-white dark:hover:text-neon-blue transition-all duration-300 hover:underline"
                            >
                                Điều khoản sử dụng
                            </Link>
                            <Link 
                                href="/so-do-trang-web" 
                                className="text-blue-200 dark:text-slate-400 hover:text-white dark:hover:text-neon-blue transition-all duration-300 hover:underline"
                            >
                                Sơ đồ trang web
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

// Global type declarations
declare global {
  interface Window {
    FB?: any;
  }
}

export {};
export default Footer
