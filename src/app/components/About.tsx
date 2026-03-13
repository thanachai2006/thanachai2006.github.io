"use client";

import { motion } from "framer-motion";
import { User, Heart, Briefcase, Cpu, Zap } from "lucide-react";

export default function About() {
  const personalityTraits = [
    {
      icon: (
        <Zap size={24} className="group-hover:text-white transition-colors" />
      ),
      title: "มีความรักเรียนรู้",
      description: "เตรียมพร้อมศึกษาเทคโนโลยีใหม่และปรับปรุงทักษะอยู่เสมอ",
      wrapperClass:
        "group bg-white/80 p-8 rounded-3xl border-2 border-cyan-100 hover:border-cyan-400 transition-all duration-300 text-center flex flex-col items-center relative overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2 z-10",
      topBarClass:
        "absolute top-0 left-0 w-full h-2 bg-linear-to-r from-cyan-600 to-cyan-400 opacity-80 group-hover:opacity-100 transition-all duration-500",
      iconBgClass:
        "mb-6 p-5 rounded-2xl bg-cyan-50 transition-all duration-300 text-cyan-600 group-hover:bg-linear-to-br group-hover:from-cyan-500 group-hover:to-cyan-600 group-hover:text-white shadow-sm group-hover:shadow-xl group-hover:shadow-cyan-300 group-hover:scale-110",
      titleClass:
        "text-sm font-semibold mb-3 text-cyan-600 uppercase tracking-[0.2em] transition-colors",
      textClass:
        "text-slate-800 text-base md:text-lg tracking-tight break-words",
    },
    {
      icon: (
        <User size={24} className="group-hover:text-white transition-colors" />
      ),
      title: "มีมนุษย์สัมพันธ์ดี",
      description:
        "สามารถสื่อสารและทำงานเป็นทีม ร่วมมือกับผู้อื่นได้อย่างสร้างสรรค์",
      wrapperClass:
        "group bg-white/80 p-8 rounded-3xl border-2 border-emerald-100 hover:border-emerald-400 transition-all duration-300 text-center flex flex-col items-center relative overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-2 z-10",
      topBarClass:
        "absolute top-0 left-0 w-full h-2 bg-linear-to-r from-emerald-600 to-emerald-400 opacity-80 group-hover:opacity-100 transition-all duration-500",
      iconBgClass:
        "mb-6 p-5 rounded-2xl bg-emerald-50 transition-all duration-300 text-emerald-600 group-hover:bg-linear-to-br group-hover:from-emerald-500 group-hover:to-emerald-600 group-hover:text-white shadow-sm group-hover:shadow-xl group-hover:shadow-emerald-300 group-hover:scale-110",
      titleClass:
        "text-sm font-semibold mb-3 text-emerald-600 uppercase tracking-[0.2em] transition-colors",
      textClass:
        "text-slate-800 text-base md:text-lg tracking-tight break-words",
    },
    {
      icon: (
        <Briefcase
          size={24}
          className="group-hover:text-white transition-colors"
        />
      ),
      title: "มีความรับผิดชอบ",
      description: "มุ่งมั่นส่งมอบผลงานที่มีคุณภาพและตรงตามเวลา",
      wrapperClass:
        "group bg-white/80 p-8 rounded-3xl border-2 border-blue-100 hover:border-blue-400 transition-all duration-300 text-center flex flex-col items-center relative overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 z-10",
      topBarClass:
        "absolute top-0 left-0 w-full h-2 bg-linear-to-r from-blue-600 to-blue-400 opacity-80 group-hover:opacity-100 transition-all duration-500",
      iconBgClass:
        "mb-6 p-5 rounded-2xl bg-blue-50 transition-all duration-300 text-blue-600 group-hover:bg-linear-to-br group-hover:from-blue-500 group-hover:to-blue-600 group-hover:text-white shadow-sm group-hover:shadow-xl group-hover:shadow-blue-300 group-hover:scale-110",
      titleClass:
        "text-sm font-semibold mb-3 text-blue-600 uppercase tracking-[0.2em] transition-colors",
      textClass:
        "text-slate-800 text-base md:text-lg tracking-tight break-words",
    },
    {
      icon: (
        <Heart size={24} className="group-hover:text-white transition-colors" />
      ),
      title: "ปัญญารู้คุณ",
      description: "เข้าใจสถานการณ์และปรับตัวได้ดีในการทำงานและการศึกษา",
      wrapperClass:
        "group bg-white/80 p-8 rounded-3xl border-2 border-indigo-100 hover:border-indigo-400 transition-all duration-300 text-center flex flex-col items-center relative overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/20 hover:-translate-y-2 z-10",
      topBarClass:
        "absolute top-0 left-0 w-full h-2 bg-linear-to-r from-indigo-600 to-indigo-400 opacity-80 group-hover:opacity-100 transition-all duration-500",
      iconBgClass:
        "mb-6 p-5 rounded-2xl bg-indigo-50 transition-all duration-300 text-indigo-600 group-hover:bg-linear-to-br group-hover:from-indigo-500 group-hover:to-indigo-600 group-hover:text-white shadow-sm group-hover:shadow-xl group-hover:shadow-indigo-300 group-hover:scale-110",
      titleClass:
        "text-sm font-semibold mb-3 text-indigo-600 uppercase tracking-[0.2em] transition-colors",
      textClass:
        "text-slate-800 text-base md:text-lg tracking-tight break-words",
    },
  ];

  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="w-fit mx-auto px-3 py-1.5 bg-cyan-50 text-cyan-600 text-sm font-semibold uppercase tracking-widest rounded mb-4 flex justify-center items-center border border-cyan-100">
            MODULE: HARDWARE_PROFILE
          </div>
          <h2 className="text-3xl xs:text-4xl md:text-6xl font-bold text-slate-900 mb-4 tracking-tighter leading-tight">
            แนะนำตัวเอง
          </h2>
          <div className="w-12 h-1 bg-cyan-500 mx-auto" />
        </motion.div>

        <div className="flex flex-col gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-6 md:p-10 rounded-2xl border border-slate-200 relative group overflow-hidden"
          >
            {/* Subtle circuit background */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-bl-full z-0 pointer-events-none" />
            <h3 className="text-xl font-semibold mb-6 text-cyan-600 flex items-center gap-3 relative z-10">
              <span className="w-10 h-10 rounded-lg bg-cyan-500 text-white flex items-center justify-center text-sm shadow-lg shadow-cyan-200">
                <Cpu size={20} />
              </span>
              ประวัติส่วนตัว
            </h3>
            <div className="text-slate-700 leading-relaxed space-y-6 font-medium relative z-10">
              <p className="border-l-4 border-cyan-500 pl-4 text-base md:text-lg">
                ผมนาย{" "}
                <span className="text-slate-900 font-semibold underline decoration-cyan-200 decoration-4">
                  ธนชัย งามวิไลรัตนา (อิคคิว)
                </span>{" "}
                อายุ 20 ปี กำลังสำเร็จการศึกษาในระดับประกาศนียบัตรวิชาชีพชั้นสูง
                (ปวส.){" "}
                <span className="text-cyan-600 font-semibold">
                  ชั้นปีที่ 2 สาขาวิชาเทคโนโลยีสารสนเทศ
                </span>
              </p>
              <p className="border-l-4 border-slate-200 pl-4 border-l-emerald-400 text-base md:text-lg">
                มีความสนใจและมุ่งมั่นในสายงานด้านการพัฒนาซอฟต์แวร์
                โดยมีประสบการณ์พัฒนาเว็บไซต์ด้วยภาษา{" "}
                <span className="text-emerald-600 font-medium">
                  HTML, CSS, PHP, JavaScript
                </span>{" "}
                และ{" "}
                <span className="text-emerald-600 font-medium">TypeScript</span>{" "}
                รวมถึงการทำงานร่วมกับฐานข้อมูล MySQL, PostgreSQL และ MongoDB
              </p>
              <p className="border-l-4 border-slate-200 pl-4 text-base md:text-lg">
                อีกทั้งยังมีพื้นฐานการเขียนโปรแกรมเบื้องต้นด้วย{" "}
                <span className="text-slate-800 font-medium underline decoration-cyan-300">
                  Python
                </span>{" "}
                และ{" "}
                <span className="text-slate-800 font-medium underline decoration-cyan-300">
                  C++
                </span>{" "}
                ในระดับที่สามารถต่อยอดสู่การพัฒนาในระดับที่สูงขึ้นได้
              </p>
            </div>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-1 bg-cyan-500" />
                <h3 className="text-2xl xs:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                  บุคลิกภาพ
                </h3>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {personalityTraits.map((trait, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={trait.wrapperClass}
                >
                  <div className={trait.topBarClass} />
                  <div className={trait.iconBgClass}>
                    {typeof trait.icon === "object"
                      ? {
                          ...trait.icon,
                          props: { ...trait.icon.props, size: 36 },
                        }
                      : trait.icon}
                  </div>
                  <h3 className={trait.titleClass}>{trait.title}</h3>
                  <p className={trait.textClass}>{trait.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
