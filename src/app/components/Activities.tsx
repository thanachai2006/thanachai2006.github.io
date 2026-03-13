"use client";

import { motion } from "framer-motion";
import { Gamepad2, Trophy, Music, BookOpen, Code2 } from "lucide-react";

export default function Activities() {
  const activities = [
    {
      icon: (
        <Gamepad2
          size={24}
          className="group-hover:text-white transition-colors"
        />
      ),
      title: "เล่นเกม (Gaming)",
      wrapperClass:
        "group bg-white/80 p-8 rounded-3xl border-2 border-purple-100 hover:border-purple-400 transition-all duration-300 text-center flex flex-col items-center relative overflow-hidden hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 z-10",
      topBarClass:
        "absolute top-0 left-0 w-full h-2 bg-linear-to-r from-purple-600 to-purple-400 opacity-80 group-hover:opacity-100 transition-all duration-500",
      iconBgClass:
        "mb-6 p-5 rounded-2xl bg-purple-50 transition-all duration-300 text-purple-600 group-hover:bg-linear-to-br group-hover:from-purple-500 group-hover:to-purple-600 group-hover:text-white shadow-sm group-hover:shadow-xl group-hover:shadow-purple-300 group-hover:scale-110",
      titleClass:
        "text-sm font-semibold mb-3 text-purple-600 uppercase tracking-[0.2em] transition-colors",
    },
    {
      icon: (
        <Trophy
          size={24}
          className="group-hover:text-white transition-colors"
        />
      ),
      title: "กีฬาและการแข่งขัน (Sports)",
      wrapperClass:
        "group bg-white/80 p-8 rounded-3xl border-2 border-orange-100 hover:border-orange-400 transition-all duration-300 text-center flex flex-col items-center relative overflow-hidden hover:shadow-2xl hover:shadow-orange-500/20 hover:-translate-y-2 z-10",
      topBarClass:
        "absolute top-0 left-0 w-full h-2 bg-linear-to-r from-orange-600 to-orange-400 opacity-80 group-hover:opacity-100 transition-all duration-500",
      iconBgClass:
        "mb-6 p-5 rounded-2xl bg-orange-50 transition-all duration-300 text-orange-600 group-hover:bg-linear-to-br group-hover:from-orange-500 group-hover:to-orange-600 group-hover:text-white shadow-sm group-hover:shadow-xl group-hover:shadow-orange-300 group-hover:scale-110",
      titleClass:
        "text-sm font-semibold mb-3 text-orange-600 uppercase tracking-[0.2em] transition-colors",
    },
    {
      icon: (
        <Music size={24} className="group-hover:text-white transition-colors" />
      ),
      title: "ฟังเพลง (Music)",
      wrapperClass:
        "group bg-white/80 p-8 rounded-3xl border-2 border-pink-100 hover:border-pink-400 transition-all duration-300 text-center flex flex-col items-center relative overflow-hidden hover:shadow-2xl hover:shadow-pink-500/20 hover:-translate-y-2 z-10",
      topBarClass:
        "absolute top-0 left-0 w-full h-2 bg-linear-to-r from-pink-600 to-pink-400 opacity-80 group-hover:opacity-100 transition-all duration-500",
      iconBgClass:
        "mb-6 p-5 rounded-2xl bg-pink-50 transition-all duration-300 text-pink-600 group-hover:bg-linear-to-br group-hover:from-pink-500 group-hover:to-pink-600 group-hover:text-white shadow-sm group-hover:shadow-xl group-hover:shadow-pink-300 group-hover:scale-110",
      titleClass:
        "text-sm font-semibold mb-3 text-pink-600 uppercase tracking-[0.2em] transition-colors",
    },
    {
      icon: (
        <BookOpen
          size={24}
          className="group-hover:text-white transition-colors"
        />
      ),
      title: "อ่านหนังสือ (Reading)",
      wrapperClass:
        "group bg-white/80 p-8 rounded-3xl border-2 border-emerald-100 hover:border-emerald-400 transition-all duration-300 text-center flex flex-col items-center relative overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-2 z-10",
      topBarClass:
        "absolute top-0 left-0 w-full h-2 bg-linear-to-r from-emerald-600 to-emerald-400 opacity-80 group-hover:opacity-100 transition-all duration-500",
      iconBgClass:
        "mb-6 p-5 rounded-2xl bg-emerald-50 transition-all duration-300 text-emerald-600 group-hover:bg-linear-to-br group-hover:from-emerald-500 group-hover:to-emerald-600 group-hover:text-white shadow-sm group-hover:shadow-xl group-hover:shadow-emerald-300 group-hover:scale-110",
      titleClass:
        "text-sm font-semibold mb-3 text-emerald-600 uppercase tracking-[0.2em] transition-colors",
    },
  ];

  return (
    <section
      id="activities"
      className="py-16 md:py-24 bg-slate-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 tech-dot-grid opacity-10" />
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="w-fit mx-auto px-3 py-1.5 bg-emerald-50 text-emerald-600 border border-emerald-100 text-sm font-semibold uppercase tracking-widest rounded mb-4 flex justify-center items-center relative z-10">
            MODULE: IDLE_PROCESSES
          </div>
          <h2 className="text-3xl xs:text-4xl md:text-6xl font-bold text-slate-900 mb-4 tracking-tighter leading-tight relative z-10">
            กิจกรรมและงานอดิเรก
          </h2>
          <div className="w-12 h-1 bg-emerald-500 mx-auto relative z-10" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={activity.wrapperClass}
            >
              <div className={activity.topBarClass} />
              <div className={activity.iconBgClass}>
                {typeof activity.icon === "object"
                  ? {
                      ...activity.icon,
                      props: { ...activity.icon.props, size: 36 },
                    }
                  : activity.icon}
              </div>
              <h3 className={activity.titleClass}>{activity.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
