"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Cpu, Wifi, Activity, Zap, Terminal } from "lucide-react";

const profileImages = [
  "/profiles/S__9199628.jpg",
  "/profiles/IMG_7576.JPG",
  "/profiles/IMG_20241205_170524_0480.jpg",
  "/profiles/LINE_ALBUM_13369_260313_1.jpg",
  "/profiles/1735137032720.jpg",
];

function ProfileShowcase() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % profileImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Mobile/Tablet Design: Single changing image */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.4 }}
        className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 mx-auto rounded-full border-4 md:border-8 border-white shadow-2xl shadow-blue-200/50 overflow-hidden relative group z-10 shrink-0 lg:hidden"
      >
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentIdx}
            src={profileImages[currentIdx]}
            alt="Thanachai Profile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out"
          />
        </AnimatePresence>
        <div className="absolute inset-0 border-4 md:border-8 border-blue-600/10 rounded-full z-20 pointer-events-none" />
      </motion.div>

      {/* Desktop Design: Layout with multiple images */}
      <div className="hidden lg:block relative w-full h-[450px] xl:h-[550px] mx-auto z-10">
        <div className="absolute top-1/2 left-1/2">
          {/* Main center image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.4,
            }}
            className="absolute -top-[140px] -left-[140px] xl:-top-[180px] xl:-left-[180px] w-[280px] h-[280px] xl:w-[360px] xl:h-[360px] rounded-full border-8 border-white shadow-2xl shadow-blue-200/50 overflow-hidden z-30 group"
          >
            <img
              src={profileImages[0]}
              alt="Profile Main"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 border-8 border-blue-600/10 rounded-full z-20 pointer-events-none" />
          </motion.div>

          {/* Image 2: top-left */}
          <motion.div
            initial={{ x: 0, y: 0, opacity: 0, scale: 0, rotate: 0 }}
            animate={{ x: -180, y: -150, opacity: 1, scale: 1, rotate: -8 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.5,
            }}
            className="absolute -top-[64px] -left-[64px] xl:-top-[80px] xl:-left-[80px] w-32 h-32 xl:w-40 xl:h-40 rounded-2xl border-4 border-white shadow-xl shadow-cyan-200/50 overflow-hidden z-20 hover:z-50 hover:scale-[1.15] hover:-rotate-3 transition-all duration-300"
          >
            <img
              src={profileImages[1]}
              alt="Profile 2"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Image 3: bottom-right */}
          <motion.div
            initial={{ x: 0, y: 0, opacity: 0, scale: 0, rotate: 0 }}
            animate={{ x: 170, y: 150, opacity: 1, scale: 1, rotate: 12 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.6,
            }}
            className="absolute -top-[80px] -left-[80px] xl:-top-[96px] xl:-left-[96px] w-40 h-40 xl:w-48 xl:h-48 rounded-2xl border-4 border-white shadow-xl shadow-blue-200/50 overflow-hidden z-20 hover:z-50 hover:scale-[1.15] hover:rotate-6 transition-all duration-300"
          >
            <img
              src={profileImages[2]}
              alt="Profile 3"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Image 4: top-right */}
          <motion.div
            initial={{ x: 0, y: 0, opacity: 0, scale: 0, rotate: 0 }}
            animate={{ x: 160, y: -140, opacity: 1, scale: 1, rotate: 6 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.7,
            }}
            className="absolute -top-[56px] -left-[56px] xl:-top-[72px] xl:-left-[72px] w-28 h-28 xl:w-36 xl:h-36 rounded-full border-4 border-white shadow-xl shadow-emerald-200/50 overflow-hidden z-10 hover:z-50 hover:scale-[1.15] hover:rotate-0 transition-all duration-300"
          >
            <img
              src={profileImages[3]}
              alt="Profile 4"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Image 5: bottom-left */}
          <motion.div
            initial={{ x: 0, y: 0, opacity: 0, scale: 0, rotate: 0 }}
            animate={{ x: -160, y: 160, opacity: 1, scale: 1, rotate: -12 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.8,
            }}
            className="absolute -top-[72px] -left-[72px] xl:-top-[88px] xl:-left-[88px] w-36 h-36 xl:w-44 xl:h-44 rounded-full border-4 border-white shadow-xl shadow-indigo-200/50 overflow-hidden z-40 hover:z-50 hover:scale-[1.15] hover:-rotate-5 transition-all duration-300"
          >
            <img
              src={profileImages[4]}
              alt="Profile 5"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-slate-50 via-slate-100 to-slate-200 text-slate-900 pt-16"
    >
      {/* Background Decor - Tech Grid */}
      <div className="absolute inset-0 z-0 tech-grid opacity-40" />
      <div className="absolute inset-0 z-0 tech-dot-grid opacity-20" />

      {/* Background Decor - Scanning Line */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-5">
        <div
          className="w-full h-1 bg-blue-600 shadow-[0_0_15px_blue] absolute top-0 left-0"
          style={{ animation: "scan-line 8s linear infinite" }}
        />
      </div>

      {/* Decorative Nodes (IoT Style) */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute top-[20%] left-[15%] w-3 h-3 rounded-full bg-cyan-400 led-pulse shadow-[0_0_15px_cyan]" />
        <div className="absolute bottom-[30%] right-[10%] w-3 h-3 rounded-full bg-emerald-400 led-pulse shadow-[0_0_15px_emerald]" />
        <div className="absolute top-[40%] right-[20%] w-[2px] h-[150px] bg-linear-to-b from-cyan-500 via-emerald-500 to-transparent opacity-50" />
        <div className="absolute bottom-[10%] left-[25%] w-[100px] h-[2px] bg-linear-to-r from-cyan-500 to-transparent opacity-50" />
      </div>

      <div className="max-w-[1400px] 2xl:max-w-[1600px] w-full mx-auto px-6 z-10 h-full flex items-center">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-24 w-full pb-20 lg:pb-0">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Badge - Initialization Style */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg border border-cyan-100 bg-cyan-50/50 text-cyan-700 text-sm font-semibold uppercase tracking-[0.2em] mb-8 shadow-sm"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 led-pulse" />
              <span>Profile</span>
            </motion.div>

            <h1 className="text-6xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[9rem] 2xl:text-[10rem] font-bold mb-8 tracking-tighter leading-tight">
              <span className="bg-clip-text text-transparent bg-linear-to-br from-slate-800 via-cyan-600 to-blue-600">
                Mr.Thanachai
              </span>
              <br />
              <span className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light text-slate-600 uppercase tracking-[0.2em] mt-6 sm:mt-8 block wrap-break-word">
                Ngamwilairattana
              </span>
            </h1>

            <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8">
              <div className="h-[2px] w-6 sm:w-8 bg-blue-600/20" />
              <h3 className="text-lg xs:text-xl md:text-2xl font-medium text-slate-800 tracking-widest uppercase flex items-center gap-2">
                <span className="text-blue-600">/</span> Ikkyu
              </h3>
              <div className="h-[2px] w-6 sm:w-8 bg-blue-600/20" />
            </div>

            <div className="inline-block max-w-full px-6 py-2 bg-slate-900 text-white rounded-lg mb-8 transform -skew-x-12 overflow-hidden shadow-xl shadow-cyan-900/10 border border-slate-700">
              <p className="text-sm md:text-base font-mono skew-x-12 tracking-wider break-all flex items-center gap-2">
                <Terminal size={16} className="text-cyan-400" />
                <span>
                  <span className="text-cyan-400">root@iot-hub:</span>~#{" "}
                  <span className="text-blue-300">
                    Hardware & Software Engineering
                  </span>
                </span>
              </p>
            </div>

            <p className="text-base md:text-xl max-w-2xl mx-auto lg:mx-0 mb-12 text-slate-700 leading-relaxed px-4 lg:px-0">
              เว็บไซต์นี้จัดทำขึ้นเพื่อนำเสนอประวัติ ผลงาน
              ตลอดจนทักษะและความสามารถต่างๆ ของข้าพเจ้า
              เพื่อประกอบการสมัครเรียนและการสมัครงาน
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 sm:gap-6">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, translateY: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-fit px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 uppercase tracking-widest text-sm md:text-base flex items-center justify-center"
              >
                ดูผลงานของผม
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, translateY: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-fit px-8 py-4 border-2 border-slate-200 bg-white text-slate-900 font-semibold rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all uppercase tracking-widest text-sm md:text-base flex items-center justify-center"
              >
                ติดต่อ
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Profile Picture */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex-1 w-full max-w-md lg:max-w-none relative"
          >
            {/* Decorative background elements behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/5 rounded-full blur-3xl -z-10" />
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] xl:w-[550px] xl:h-[550px] rounded-full border border-blue-600/20 border-dashed -z-10"
            />

            <ProfileShowcase />

            {/* Floating Elements near Image (Hardware Theme) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[0%] -left-[10%] lg:-left-[15%] bg-white p-3 rounded-xl shadow-lg border border-slate-100 text-cyan-600 z-20 hidden sm:flex"
            >
              <Cpu size={24} />
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-[5%] -right-[10%] lg:-right-[20%] bg-slate-900 p-3 rounded-xl shadow-xl border border-slate-700 text-emerald-400 z-20 hidden sm:flex"
            >
              <Wifi size={24} />
            </motion.div>

            <motion.div
              animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute top-[5%] -right-[5%] text-blue-500 z-0 opacity-50 hidden sm:block"
            >
              <Activity size={40} />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-700"
        >
          <div className="w-[1px] h-12 bg-linear-to-b from-blue-600 to-transparent mx-auto" />
        </motion.div>
      </div>
    </section>
  );
}