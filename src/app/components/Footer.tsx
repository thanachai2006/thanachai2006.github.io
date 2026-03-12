'use client';

import { Github, Linkedin, Mail, MapPin, Heart, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white text-slate-500 py-16 md:py-20 border-t border-slate-100 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-50/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-30" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="sm:col-span-2 md:col-span-2">
            <h3 className="text-xl font-black text-slate-900 mb-6 tracking-tighter flex items-center gap-2">
              THANACHAI<span className="w-2 h-2 rounded-full bg-blue-600 led-pulse" />
            </h3>
            <p className="text-xs md:text-sm font-bold leading-relaxed max-w-md text-slate-600 uppercase tracking-wider">
              IT Student & Aspiring Computer Engineer based in Nakhon Pathom, Thailand. 
              มุ่งมั่นในการพัฒนาซอฟต์แวร์และระบบ IoT ด้วยทักษะด้านเทคโนโลยีสารสนเทศ เพื่อสร้างสรรค์นวัตกรรมที่มีประสิทธิภาพและตอบโจทย์อนาคต
            </p>
            {/* Social Links */}
            <div className="flex flex-wrap gap-4 mt-8">
              {[
                { icon: <Github size={18} className="group-hover:text-white transition-colors" />, href: "https://github.com/Thanachai2006", color: "hover:bg-slate-900", textColor: "text-slate-400" },
                { icon: <Linkedin size={18} className="group-hover:text-white transition-colors" />, href: "#", color: "hover:bg-blue-600", textColor: "text-slate-400" },
                { icon: <Mail size={18} className="group-hover:text-white transition-colors" />, href: "mailto:djdjv999@gmail.com", color: "hover:bg-rose-500", textColor: "text-slate-400" },
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-slate-50 border border-slate-100 rounded-lg transition-all ${social.color} ${social.textColor} group`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[10px] md:text-xs font-black text-slate-900 uppercase tracking-[0.2em] mb-8 border-b border-slate-100 pb-3">Status</h3>
            <ul className="space-y-6 text-[10px] md:text-xs font-bold uppercase tracking-widest">
              <li className="flex items-center gap-4 group">
                <div className="p-2.5 bg-blue-50 rounded text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                  <Mail size={16} />
                </div>
                <a href="mailto:djdjv999@gmail.com" className="group-hover:text-blue-600 transition-colors lowercase break-all">
                  djdjv999@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-4 text-slate-400">
                <div className="p-2.5 bg-slate-50 rounded text-slate-300 shrink-0">
                  <MapPin size={16} />
                </div>
                Nakhon Pathom, TH
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 pt-10 border-t border-slate-100 text-center lg:text-left">
          <div className="text-[9px] md:text-[10px] font-mono text-slate-400 order-3 lg:order-1">
            © {currentYear} // <span className="text-slate-900 font-black">THANACHAI_NGAMWILAIRATTANA</span> // SYS_VER: 2025.03
          </div>
          
          <div className="flex items-center gap-4 text-[9px] md:text-[10px] font-black uppercase tracking-widest bg-blue-50 px-5 py-2.5 rounded-full border border-blue-100 text-blue-600 order-2 lg:order-2">
            <span className="w-2 h-2 rounded-full bg-blue-600 led-pulse" />
            Certified Stack: Next.js + Tailwind
          </div>

          {/* Scroll to Top */}
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-4 text-[9px] md:text-[10px] font-black text-slate-400 hover:text-blue-600 transition-all uppercase tracking-widest order-1 lg:order-3"
          >
            Terminal Top
            <div className="p-3 bg-slate-900 text-white rounded-xl group-hover:bg-blue-600 transition-all group-hover:shadow-lg group-hover:shadow-blue-200">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
