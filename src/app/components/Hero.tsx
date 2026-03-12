'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white text-slate-900 pt-16">
      
      {/* Background Decor - Tech Grid */}
      <div className="absolute inset-0 z-0 tech-dot-grid opacity-30" />
      
      {/* Background Decor - Scanning Line */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-5">
        <div className="w-full h-1 bg-blue-600 shadow-[0_0_15px_blue] absolute top-0 left-0" style={{ animation: 'scan-line 8s linear infinite' }} />
      </div>

      {/* Decorative Nodes */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[20%] left-[15%] w-2 h-2 rounded-full bg-blue-600 led-pulse" />
        <div className="absolute bottom-[30%] right-[10%] w-2 h-2 rounded-full bg-cyan-500 led-pulse" />
        <div className="absolute top-[40%] right-[20%] w-[1px] h-[100px] bg-gradient-to-b from-blue-600 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge - Initialization Style */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg border border-blue-100 bg-blue-50/50 text-blue-700 text-xs font-black uppercase tracking-[0.2em] mb-8 shadow-sm"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 led-pulse" />
            <span>Init: Success // Welcome to Portfolio</span>
          </motion.div>

          <h1 className="text-5xl sm:text-7xl md:text-9xl font-black mb-4 tracking-tighter leading-none">
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-slate-900 via-blue-800 to-blue-600">
              Mr.Thanachai
            </span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl font-light text-slate-400 uppercase tracking-[0.3em] mt-4 block">
              Ngamwilairattana
            </span>
          </h1>

          <div className="flex items-center justify-center gap-6 mb-10">
            <div className="h-[2px] w-8 bg-blue-600/20" />
            <h3 className="text-xl md:text-2xl font-bold text-slate-800 tracking-widest uppercase flex items-center gap-2">
              <span className="text-blue-600">/</span> Ikkyu
            </h3>
            <div className="h-[2px] w-8 bg-blue-600/20" />
          </div>

          <div className="inline-block max-w-full px-6 py-2 bg-slate-900 text-white rounded-lg mb-10 transform -skew-x-12 overflow-hidden">
            <p className="text-base md:text-xl font-mono skew-x-12 tracking-wider break-all">
              <span className="text-cyan-400">root@portfolio:</span>~# <span className="text-blue-300">Information Technology</span>
            </p>
          </div>

          <p className="text-sm md:text-lg max-w-2xl mx-auto mb-16 text-slate-500 leading-relaxed font-bold px-4">
            Portfolio นี้เขียนขึ้นเพื่อใช้สำหรับการสมัครเรียน การสมัครงาน ตลอดจนรวบรวมผลงาน และประสบการณ์การทำงานต่าง ๆ ของตัวข้าพเจ้า ผู้อ่านจะสามารถรับรู้สิ่งที่ได้กล่าวมาข้างต้นจาก Portfolio นี้
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, translateY: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-fit px-10 py-4 bg-blue-600 text-white font-black rounded-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 uppercase tracking-widest text-xs flex items-center justify-center"
            >
              ดูผลงานของผม
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, translateY: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-fit px-10 py-4 border-2 border-slate-200 bg-white text-slate-900 font-black rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all uppercase tracking-widest text-xs flex items-center justify-center"
            >
              ติดต่อ
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-300"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-blue-600 to-transparent mx-auto" />
        </motion.div>
      </div>
    </section>
  );
}
