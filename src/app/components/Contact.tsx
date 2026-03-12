'use client';

import { motion } from 'framer-motion';
import { Mail, Facebook, Instagram, Send, Github } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail size={28} className="group-hover:text-white transition-colors" />,
      label: 'Email',
      value: 'djdjv999@example.com',
      href: 'mailto:djdjv999@example.com',
      color: 'text-rose-600',
      hoverBg: 'group-hover:bg-rose-600',
    },
    {
      icon: <Facebook size={28} className="group-hover:text-white transition-colors" />,
      label: 'Facebook',
      value: 'Thanachai Ngamwilairattana',
      href: 'https://www.facebook.com/thanachai.ngamwilairattana/', // คุณสามารถนำลิงก์จริงมาใส่ตรงนี้ได้ครับ
      color: 'text-blue-600',
      hoverBg: 'group-hover:bg-blue-600',
    },
    {
      icon: <Instagram size={28} className="group-hover:text-white transition-colors" />,
      label: 'Instagram',
      value: 'ikkyuz._',
      href: 'https://www.instagram.com/ikkyuz._/', // คุณสามารถนำลิงก์จริงมาใส่ตรงนี้ได้ครับ
      color: 'text-pink-600',
      hoverBg: 'group-hover:bg-pink-600',
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 tech-dot-grid opacity-10" />
      
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="w-fit mx-auto px-4 py-1.5 bg-blue-600 text-white text-xs font-black uppercase tracking-[0.2em] rounded mb-4 flex justify-center items-center">
            Link: Comm_Channels
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tighter leading-tight">
            ติดต่อสอบถาม
          </h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactInfo.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-600 transition-all text-center flex flex-col items-center relative overflow-hidden hover:shadow-2xl hover:shadow-blue-100/20"
            >
              <div className={`absolute top-0 left-0 w-full h-1.5 bg-slate-100 ${item.hoverBg} transition-colors`} />
              <div className={`mb-6 p-4 rounded-xl bg-slate-50 transition-all shadow-inner ${item.color} ${item.hoverBg} group-hover:text-white group-hover:shadow-lg`}>
                {/* @ts-ignore */}
                {typeof item.icon === 'object' ? { ...item.icon, props: { ...item.icon.props, size: 24 } } : item.icon}
              </div>
              <h3 className={`text-[10px] font-black mb-3 text-slate-400 uppercase tracking-[0.2em] group-hover:text-blue-600 transition-colors`}>
                {item.label}
              </h3>
              <p className="text-slate-900 text-sm font-black tracking-tight break-all">
                {item.value}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Optional: Call to action card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-slate-900 rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute inset-0 tech-grid opacity-20 group-hover:opacity-30 transition-opacity" />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 tracking-tighter leading-none">
              พร้อมเริ่มต้นโปรเจคใหม่ <br className="hidden sm:block" /> ไปด้วยกันไหม?
            </h3>
            <p className="text-slate-400 mb-10 max-w-2xl mx-auto text-xs md:text-sm font-medium uppercase tracking-[0.2em] leading-relaxed px-4 opacity-80">
              ผมกำลังมองหาโอกาสในการทำงานและเรียนรู้สิ่งใหม่ๆ หากคุณมีโปรเจคที่น่าสนใจ หรือต้องการสอบถามข้อมูลเพิ่มเติม สามารถติดต่อผมได้ทันที
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <a
                href="mailto:thanachai.nga@example.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-4 bg-blue-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-700 transition-all active:scale-95 shadow-2xl shadow-blue-600/20 group/btn"
              >
                ส่งข้อความหาผม
                <Send size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
