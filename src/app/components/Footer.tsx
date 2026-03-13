"use client";

import { Github, Mail, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-white text-slate-700 py-16 md:py-20 border-t border-slate-100 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-cyan-50/50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-cyan-300 to-transparent opacity-30" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mb-16">
          {/* Brand Section */}
          <div className="sm:col-span-2 md:col-span-2">
            <h3 className="text-xl font-bold text-slate-900 mb-6 tracking-tighter flex items-center gap-2">
              THANACHAI
              <span className="w-2 h-2 rounded-full bg-cyan-500 led-pulse shadow-[0_0_10px_cyan]" />
            </h3>
            <p className="text-sm md:text-base leading-relaxed max-w-md text-slate-600 uppercase tracking-wider">
              IT Student & Aspiring Computer Engineer based in Nakhon Pathom,
              Thailand. มุ่งมั่นในการพัฒนาซอฟต์แวร์และระบบ IoT
              ด้วยทักษะด้านเทคโนโลยีสารสนเทศ
              เพื่อสร้างสรรค์นวัตกรรมที่มีประสิทธิภาพและตอบโจทย์อนาคต
            </p>
            {/* Social Links */}
            <div className="flex flex-wrap gap-4 mt-8">
              {[
                {
                  icon: (
                    <Github
                      size={18}
                      className="group-hover:text-white transition-colors"
                    />
                  ),
                  href: "https://github.com/Thanachai2006",
                  color: "hover:bg-slate-900",
                  textColor: "text-slate-600",
                },
                {
                  icon: (
                    <Mail
                      size={18}
                      className="group-hover:text-white transition-colors"
                    />
                  ),
                  href: "mailto:djdjv999@gmail.com",
                  color: "hover:bg-rose-500",
                  textColor: "text-slate-600",
                },
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
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-[0.2em] mb-8 border-b border-slate-100 pb-3">
              Status
            </h3>
            <ul className="space-y-6 text-sm font-medium uppercase tracking-widest">
              <li className="flex items-center gap-4 group">
                <div className="p-2.5 bg-cyan-50 rounded text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-colors shrink-0">
                  <Mail size={16} />
                </div>
                <a
                  href="mailto:djdjv999@gmail.com"
                  className="group-hover:text-cyan-600 transition-colors lowercase break-all"
                >
                  djdjv999@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-4 text-slate-600">
                <div className="p-2.5 bg-slate-50 rounded text-slate-700 shrink-0">
                  <MapPin size={16} />
                </div>
                Nakhon Pathom, TH
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 pt-10 border-t border-slate-100 text-center lg:text-left">
          <div className="text-xs md:text-sm font-mono text-slate-600 order-3 lg:order-1">
            © {currentYear} {"//"}
            <span className="text-slate-900 font-bold">
              THANACHAI_NGAMWILAIRATTANA
            </span>{" "}
            {"//"} FIRMWARE_VER: 2025.03.1
          </div>

          <div className="flex items-center gap-4 text-xs md:text-sm font-semibold uppercase tracking-widest bg-cyan-50 px-5 py-2.5 rounded-full border border-cyan-100 text-cyan-600 order-2 lg:order-2">
            <span className="w-2 h-2 rounded-full bg-cyan-500 led-pulse shadow-[0_0_8px_cyan]" />
            System Stack: Next.js + Tailwind
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-4 text-xs md:text-sm font-semibold text-slate-600 hover:text-cyan-600 transition-all uppercase tracking-widest order-1 lg:order-3"
          >
            Terminal Top
            <div className="p-3 bg-slate-900 text-white rounded-xl group-hover:bg-cyan-500 transition-all group-hover:shadow-lg group-hover:shadow-cyan-200">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
