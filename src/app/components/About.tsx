"use client";

import { motion } from "framer-motion";
import { User, Heart, Briefcase, Zap } from "lucide-react";

export default function About() {
  const personalityTraits = [
    {
      icon: <Zap size={20} className="text-amber-500 group-hover:text-white transition-colors" />,
      title: "มีความรักเรียนรู้",
      description: "เตรียมพร้อมศึกษาเทคโนโลยีใหม่และปรับปรุงทักษะอยู่เสมอ",
      hoverBg: "group-hover:bg-amber-500"
    },
    {
      icon: <User size={20} className="text-indigo-500 group-hover:text-white transition-colors" />,
      title: "มีมนุษย์สัมพันธ์ดี",
      description: "สามารถสื่อสารและทำงานเป็นทีม ร่วมมือกับผู้อื่นได้อย่างสร้างสรรค์",
      hoverBg: "group-hover:bg-indigo-500"
    },
    {
      icon: <Briefcase size={20} className="text-blue-500 group-hover:text-white transition-colors" />,
      title: "มีความรับผิดชอบ",
      description: "มุ่งมั่นส่งมอบผลงานที่มีคุณภาพและตรงตามเวลา",
      hoverBg: "group-hover:bg-blue-500"
    },
    {
      icon: <Heart size={20} className="text-rose-500 group-hover:text-white transition-colors" />,
      title: "ปัญญารู้คุณ",
      description: "เข้าใจสถานการณ์และปรับตัวได้ดีในการทำงานและการศึกษา",
      hoverBg: "group-hover:bg-rose-500"
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="w-fit mx-auto px-3 py-1.5 bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-widest rounded mb-4 flex justify-center items-center">
            Component: Biography
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tighter leading-tight">
            แนะนำตัวเอง
          </h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-6 md:p-10 rounded-2xl border border-slate-200 relative group"
          >
            <h3 className="text-xl font-black mb-6 text-blue-600 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center text-xs shadow-lg shadow-blue-200">Hi</span>
              สวัสดีครับ!
            </h3>
            <div className="text-slate-700 leading-relaxed space-y-6 font-medium">
              <p className="border-l-4 border-blue-500 pl-4 text-sm md:text-base">
                ผมนาย <span className="text-slate-900 font-black underline decoration-blue-200 decoration-4">ธนชัย งามวิไลรัตนา (อิคคิว)</span> อายุ 20 ปี 
                กำลังสำเร็จการศึกษาในระดับประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.) <span className="text-blue-600 font-black">ชั้นปีที่ 2 สาขาวิชาเทคโนโลยีสารสนเทศ</span>
              </p>
              <p className="border-l-4 border-slate-200 pl-4 text-sm md:text-base">
                มีความสนใจและมุ่งมั่นในสายงานด้านการพัฒนาซอฟต์แวร์ 
                โดยมีประสบการณ์พัฒนาเว็บไซต์ด้วยภาษา <span className="text-blue-600 font-bold">HTML, CSS, PHP, JavaScript</span> และ <span className="text-blue-600 font-bold">TypeScript</span> รวมถึงการทำงานร่วมกับฐานข้อมูล MySQL, PostgreSQL และ MongoDB
              </p>
              <p className="border-l-4 border-slate-200 pl-4 text-sm md:text-base">
                อีกทั้งยังมีพื้นฐานการเขียนโปรแกรมเบื้องต้นด้วย <span className="text-slate-800 font-bold underline decoration-cyan-300">Python</span> และ <span className="text-slate-800 font-bold underline decoration-cyan-300">C++</span> ในระดับที่สามารถต่อยอดสู่การพัฒนาในระดับที่สูงขึ้นได้
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {personalityTraits.map((trait, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group bg-white p-5 rounded-xl border border-slate-100 transition-all hover:shadow-xl hover:shadow-slate-200/50 flex items-start gap-4 relative overflow-hidden h-full`}
                >
                <div className={`p-3 rounded-lg bg-slate-50 transition-all shadow-inner ${trait.hoverBg} shrink-0 group-hover:shadow-blue-200`}>
                  {trait.icon}
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-sm uppercase tracking-wider mb-1 transition-colors group-hover:text-blue-600">
                    {trait.title}
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed font-medium">
                    {trait.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
