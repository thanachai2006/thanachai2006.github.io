"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export default function Education() {
  const educationData = [
    {
      period: "พ.ศ. 2567 - 2568",
      degree: "ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)",
      program: "สาขาวิชาเทคโนโลยีสารสนเทศ",
      institution: "วิทยาลัยอาชีวศึกษานครปฐม",
      gpx: "เกรดเฉลี่ยสะสม 3.60",
    },
    {
      period: "พ.ศ. 2564 - 2566",
      degree: "ประกาศนียบัตรวิชาชีพ (ปวช.)",
      program: "สาขาวิชาเทคโนโลยีสารสนเทศ",
      institution: "วิทยาลัยอาชีวศึกษานครปฐม",
      gpx: "เกรดเฉลี่ยสะสม 2.98",
    },
  ];

  return (
    <section
      id="education"
      className="py-24 bg-slate-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 tech-grid opacity-10" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 px-4 py-1.5 bg-emerald-600 text-white text-sm font-semibold uppercase tracking-[0.2em] rounded mb-4">
            <GraduationCap size={16} />
            Training_Data
          </div>
          <h2 className="text-3xl xs:text-4xl md:text-6xl font-bold text-slate-900 mb-4 tracking-tighter">
            ประวัติการศึกษา
          </h2>
          <div className="w-12 h-1 bg-emerald-600 mx-auto" />
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:left-5 before:md:left-1/2 before:-translate-x-px before:h-full before:w-1 before:bg-linear-to-b before:from-slate-200 before:via-emerald-400 before:to-slate-200">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex items-center group ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Node - Chip Pin Style */}
              <div className="flex items-center justify-center w-10 h-10 rounded-lg border-2 border-emerald-500 bg-white group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-lg shadow-emerald-100/50 absolute left-0 md:left-1/2 md:-ml-5 z-10">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 group-hover:bg-white led-pulse" />
              </div>

              {/* Card - Module Style */}
              <div
                className={`w-full ml-14 md:ml-0 md:w-[calc(50%-3rem)] group/card bg-white/80 p-6 md:p-8 rounded-3xl border-2 border-emerald-100 hover:border-emerald-400 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/20 relative overflow-hidden z-10 ${
                  index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                }`}
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-emerald-600 to-emerald-400 opacity-80 group-hover/card:opacity-100 transition-all duration-500" />
                <div className="flex flex-row items-center justify-between mb-6 gap-2">
                  <div className="flex items-center gap-1.5 text-slate-600 font-semibold text-xs sm:text-sm bg-slate-50 px-2.5 sm:px-3 py-1.5 rounded-lg uppercase border border-slate-100 w-fit shrink-0">
                    <Calendar size={12} className="text-emerald-600" />
                    {item.period}
                  </div>
                  {item.gpx && (
                    <span className="text-cyan-700 font-semibold text-xs sm:text-sm bg-cyan-50 px-2.5 sm:px-3 py-1.5 rounded-lg border border-cyan-200 shadow-sm w-fit shrink-0">
                      GPX: {item.gpx.split(" ").pop()}
                    </span>
                  )}
                </div>

                <h3 className="text-base xs:text-lg md:text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors tracking-tight leading-tight">
                  {item.degree}
                </h3>
                <p className="text-emerald-600 font-medium mb-6 text-sm md:text-base flex items-center gap-3">
                  <span className="w-6 h-[2px] bg-emerald-600" />
                  {item.program}
                </p>

                <div className="flex items-center gap-3 text-slate-600 text-sm md:text-base font-semibold uppercase tracking-widest bg-slate-50/50 p-3 rounded-xl border border-dashed border-slate-200">
                  <MapPin size={14} className="text-emerald-500" />
                  {item.institution}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
