"use client";

import { motion } from "framer-motion";
import { Mail, Facebook, Instagram, Github } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: (
        <Mail size={28} className="group-hover:text-white transition-colors" />
      ),
      label: "Email",
      value: "djdjv999@example.com",
      href: "mailto:djdjv999@example.com",
      wrapperClass:
        "group bg-white/80 p-8 rounded-3xl border-2 border-rose-100 hover:border-rose-400 transition-all duration-300 text-center flex flex-col items-center relative overflow-hidden hover:shadow-2xl hover:shadow-rose-500/20 hover:-translate-y-2",
      topBarClass:
        "absolute top-0 left-0 w-full h-2 bg-linear-to-r from-rose-600 to-rose-400 opacity-80 group-hover:opacity-100 transition-all duration-500",
      iconBgClass:
        "mb-6 p-5 rounded-2xl bg-rose-50 transition-all duration-300 text-rose-600 group-hover:bg-linear-to-br group-hover:from-rose-500 group-hover:to-rose-600 group-hover:text-white shadow-sm group-hover:shadow-xl group-hover:shadow-rose-300 group-hover:scale-110",
      titleClass:
        "text-sm font-semibold mb-3 text-rose-600 uppercase tracking-[0.2em] transition-colors",
      textClass: "text-slate-800 text-base md:text-lg tracking-tight break-all",
    },
    {
      icon: (
        <Facebook
          size={28}
          className="group-hover:text-white transition-colors"
        />
      ),
      label: "Facebook",
      value: "Thanachai Ngamwilairattana",
      href: "https://www.facebook.com/thanachai.ngamwilairattana/",
      wrapperClass:
        "group bg-white/80 p-8 rounded-3xl border-2 border-blue-100 hover:border-blue-400 transition-all duration-300 text-center flex flex-col items-center relative overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2",
      topBarClass:
        "absolute top-0 left-0 w-full h-2 bg-linear-to-r from-blue-600 to-blue-400 opacity-80 group-hover:opacity-100 transition-all duration-500",
      iconBgClass:
        "mb-6 p-5 rounded-2xl bg-blue-50 transition-all duration-300 text-blue-600 group-hover:bg-linear-to-br group-hover:from-blue-500 group-hover:to-blue-600 group-hover:text-white shadow-sm group-hover:shadow-xl group-hover:shadow-blue-300 group-hover:scale-110",
      titleClass:
        "text-sm font-semibold mb-3 text-blue-600 uppercase tracking-[0.2em] transition-colors",
      textClass:
        "text-slate-800 text-base md:text-lg tracking-tight break-words px-2 leading-tight",
    },
    {
      icon: (
        <Instagram
          size={28}
          className="group-hover:text-white transition-colors"
        />
      ),
      label: "Instagram",
      value: "ikkyuz._",
      href: "https://www.instagram.com/ikkyuz._/",
      wrapperClass:
        "group bg-white/80 p-8 rounded-3xl border-2 border-pink-100 hover:border-pink-400 transition-all duration-300 text-center flex flex-col items-center relative overflow-hidden hover:shadow-2xl hover:shadow-pink-500/20 hover:-translate-y-2",
      topBarClass:
        "absolute top-0 left-0 w-full h-2 bg-linear-to-r from-pink-600 to-pink-400 opacity-80 group-hover:opacity-100 transition-all duration-500",
      iconBgClass:
        "mb-6 p-5 rounded-2xl bg-pink-50 transition-all duration-300 text-pink-600 group-hover:bg-linear-to-br group-hover:from-pink-500 group-hover:to-pink-600 group-hover:text-white shadow-sm group-hover:shadow-xl group-hover:shadow-pink-300 group-hover:scale-110",
      titleClass:
        "text-sm font-semibold mb-3 text-pink-600 uppercase tracking-[0.2em] transition-colors",
      textClass:
        "text-slate-800 text-base md:text-lg tracking-tight break-words",
    },
    {
      icon: (
        <Github
          size={28}
          className="group-hover:text-white transition-colors"
        />
      ),
      label: "Github",
      value: "thanachai2006",
      href: "https://github.com/thanachai2006",
      wrapperClass:
        "group bg-white/80 p-8 rounded-3xl border-2 border-slate-200 hover:border-slate-400 transition-all duration-300 text-center flex flex-col items-center relative overflow-hidden hover:shadow-2xl hover:shadow-slate-500/20 hover:-translate-y-2",
      topBarClass:
        "absolute top-0 left-0 w-full h-2 bg-linear-to-r from-slate-600 to-slate-400 opacity-80 group-hover:opacity-100 transition-all duration-500",
      iconBgClass:
        "mb-6 p-5 rounded-2xl bg-slate-50 transition-all duration-300 text-slate-600 group-hover:bg-linear-to-br group-hover:from-slate-500 group-hover:to-slate-600 group-hover:text-white shadow-sm group-hover:shadow-xl group-hover:shadow-slate-300 group-hover:scale-110",
      titleClass:
        "text-sm font-semibold mb-3 text-slate-600 uppercase tracking-[0.2em] transition-colors",
      textClass:
        "text-slate-800 text-base md:text-lg tracking-tight break-words",
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-white relative overflow-hidden"
    >
      <div className="absolute inset-0 tech-dot-grid opacity-10" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="w-fit mx-auto px-4 py-1.5 bg-cyan-600 text-white text-sm font-semibold uppercase tracking-[0.2em] rounded mb-4 flex justify-center items-center">
            MODULE: COM_NODE
          </div>
          <h2 className="text-3xl xs:text-4xl md:text-6xl font-bold text-slate-900 mb-4 tracking-tighter leading-tight">
            ติดต่อสอบถาม
          </h2>
          <div className="w-12 h-1 bg-cyan-500 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-6">
          {contactInfo.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={item.wrapperClass}
            >
              <div className={item.topBarClass} />
              <div className={item.iconBgClass}>
                {typeof item.icon === "object"
                  ? { ...item.icon, props: { ...item.icon.props, size: 36 } }
                  : item.icon}
              </div>
              <h3 className={item.titleClass}>{item.label}</h3>
              <p className={item.textClass}>{item.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
