'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export default function Education() {
  const educationData = [
    {
      period: 'พ.ศ. 2567 - 2568',
      degree: 'ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)',
      program: 'สาขาวิชาเทคโนโลยีสารสนเทศ',
      institution: 'วิทยาลัยอาชีวศึกษานครปฐม',
      gpa: 'เกรดเฉลี่ยสะสม 3.60',
    },
    {
      period: 'พ.ศ. 2564 - 2566',
      degree: 'ประกาศนียบัตรวิชาชีพ (ปวช.)',
      program: 'สาขาวิชาเทคโนโลยีสารสนเทศ',
      institution: 'วิทยาลัยอาชีวศึกษานครปฐม',
      gpa: 'เกรดเฉลี่ยสะสม 2.98',
    },
  ];

  return (
    <section id="education" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-10" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 px-4 py-1.5 bg-blue-600 text-white text-xs font-black uppercase tracking-[0.2em] rounded mb-4">
            <GraduationCap size={16} />
            Academic Logs
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tighter">
            ประวัติการศึกษา
          </h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto" />
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:left-5 before:md:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-100 before:via-blue-600 before:to-blue-100">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex items-center group ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Node - Chip Pin Style */}
              <div className="flex items-center justify-center w-10 h-10 rounded-lg border-2 border-blue-600 bg-white group-hover:bg-blue-600 group-hover:text-white transition-all shadow-lg shadow-blue-100 absolute left-0 md:left-1/2 md:-ml-5 z-10">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-600 group-hover:bg-white led-pulse" />
              </div>

              {/* Card - Module Style */}
              <div className={`w-full ml-14 md:ml-0 md:w-[calc(50%-3rem)] bg-white p-5 md:p-8 rounded-2xl border border-slate-200 group-hover:border-blue-600 transition-all hover:shadow-2xl hover:shadow-blue-100/30 relative ${
                index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
              }`}>
                <div className="flex flex-col xs:flex-row xs:items-center justify-between mb-6 gap-4">
                  <div className="flex items-center gap-2 text-slate-600 font-black text-[10px] bg-slate-50 px-3 py-1.5 rounded-lg uppercase tracking-wider border border-slate-100 w-fit">
                    <Calendar size={12} className="text-blue-600" />
                    {item.period}
                  </div>
                  {item.gpa && (
                    <span className="text-emerald-700 font-black text-[10px] bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 shadow-sm w-fit">
                      GPA: {item.gpa.split(' ').pop()}
                    </span>
                  )}
                </div>
                
                <h3 className="text-lg md:text-xl font-black text-slate-900 mb-3 group-hover:text-blue-600 transition-colors tracking-tight leading-tight">
                  {item.degree}
                </h3>
                <p className="text-blue-600 font-bold mb-6 text-xs md:text-sm flex items-center gap-3">
                  <span className="w-6 h-[2px] bg-blue-600" />
                  {item.program}
                </p>
                
                <div className="flex items-center gap-3 text-slate-600 text-[10px] md:text-xs font-bold uppercase tracking-widest bg-slate-50/50 p-3 rounded-xl border border-dashed border-slate-200">
                  <MapPin size={14} className="text-blue-500" />
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
