"use client";

import { motion } from "framer-motion";
import { Code2, Layout, Server, Database, Settings, Cloud } from "lucide-react";

export default function Skills() {
  const techStack = [
    {
      category: "Languages",
      icon: <Code2 size={24} />,
      color: "text-blue-600",
      wrapperClass:
        "group bg-white/80 p-6 md:p-8 rounded-3xl border-2 border-blue-100 hover:border-blue-400 transition-all duration-300 flex flex-col items-center relative overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 z-10 h-full",
      topBarClass:
        "absolute top-0 left-0 w-full h-2 bg-linear-to-r from-blue-600 to-blue-400 opacity-80 group-hover:opacity-100 transition-all duration-500",
      iconBgClass:
        "mb-6 p-5 rounded-2xl bg-blue-50 transition-all duration-300 text-blue-600 group-hover:bg-linear-to-br group-hover:from-blue-500 group-hover:to-blue-600 group-hover:text-white shadow-sm group-hover:shadow-xl group-hover:shadow-blue-300 group-hover:scale-110 shrink-0",
      titleClass:
        "text-sm font-semibold mb-6 text-blue-600 uppercase tracking-[0.2em] transition-colors text-center",
      technologies: [
        { name: "JavaScript", proficiency: 90 },
        { name: "TypeScript", proficiency: 85 },
        { name: "PHP", proficiency: 70 },
        { name: "Python", proficiency: 70 },
        { name: "C/C++", proficiency: 70 },
        { name: "HTML5", proficiency: 95 },
        { name: "CSS3", proficiency: 85 },
      ],
    },
    {
      category: "Frontend",
      icon: <Layout size={24} />,
      color: "text-cyan-600",
      wrapperClass:
        "group bg-white/80 p-6 md:p-8 rounded-3xl border-2 border-cyan-100 hover:border-cyan-400 transition-all duration-300 flex flex-col items-center relative overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2 z-10 h-full",
      topBarClass:
        "absolute top-0 left-0 w-full h-2 bg-linear-to-r from-cyan-600 to-cyan-400 opacity-80 group-hover:opacity-100 transition-all duration-500",
      iconBgClass:
        "mb-6 p-5 rounded-2xl bg-cyan-50 transition-all duration-300 text-cyan-600 group-hover:bg-linear-to-br group-hover:from-cyan-500 group-hover:to-cyan-600 group-hover:text-white shadow-sm group-hover:shadow-xl group-hover:shadow-cyan-300 group-hover:scale-110 shrink-0",
      titleClass:
        "text-sm font-semibold mb-6 text-cyan-600 uppercase tracking-[0.2em] transition-colors text-center",
      technologies: [
        { name: "React", proficiency: 85 },
        { name: "Next.js", proficiency: 30 },
        { name: "Vite", proficiency: 80 },
        { name: "TailwindCSS", proficiency: 90 },
      ],
    },
    {
      category: "Backend",
      icon: <Server size={24} />,
      color: "text-emerald-600",
      wrapperClass:
        "group bg-white/80 p-6 md:p-8 rounded-3xl border-2 border-emerald-100 hover:border-emerald-400 transition-all duration-300 flex flex-col items-center relative overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-2 z-10 h-full",
      topBarClass:
        "absolute top-0 left-0 w-full h-2 bg-linear-to-r from-emerald-600 to-emerald-400 opacity-80 group-hover:opacity-100 transition-all duration-500",
      iconBgClass:
        "mb-6 p-5 rounded-2xl bg-emerald-50 transition-all duration-300 text-emerald-600 group-hover:bg-linear-to-br group-hover:from-emerald-500 group-hover:to-emerald-600 group-hover:text-white shadow-sm group-hover:shadow-xl group-hover:shadow-emerald-300 group-hover:scale-110 shrink-0",
      titleClass:
        "text-sm font-semibold mb-6 text-emerald-600 uppercase tracking-[0.2em] transition-colors text-center",
      technologies: [
        { name: "NodeJS", proficiency: 85 },
        { name: "Express.js", proficiency: 80 },
        { name: "Bun", proficiency: 60 },
        { name: "ElysiaJS", proficiency: 70 },
      ],
    },
    {
      category: "Databases & ORMs",
      icon: <Database size={24} />,
      color: "text-purple-600",
      wrapperClass:
        "group bg-white/80 p-6 md:p-8 rounded-3xl border-2 border-purple-100 hover:border-purple-400 transition-all duration-300 flex flex-col items-center relative overflow-hidden hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 z-10 h-full",
      topBarClass:
        "absolute top-0 left-0 w-full h-2 bg-linear-to-r from-purple-600 to-purple-400 opacity-80 group-hover:opacity-100 transition-all duration-500",
      iconBgClass:
        "mb-6 p-5 rounded-2xl bg-purple-50 transition-all duration-300 text-purple-600 group-hover:bg-linear-to-br group-hover:from-purple-500 group-hover:to-purple-600 group-hover:text-white shadow-sm group-hover:shadow-xl group-hover:shadow-purple-300 group-hover:scale-110 shrink-0",
      titleClass:
        "text-sm font-semibold mb-6 text-purple-600 uppercase tracking-[0.2em] transition-colors text-center",
      technologies: [
        { name: "MySQL", proficiency: 80 },
        { name: "PostgreSQL", proficiency: 75 },
        { name: "MongoDB", proficiency: 75 },
        { name: "Prisma", proficiency: 80 },
      ],
    },
    {
      category: "DevOps & Tools",
      icon: <Settings size={24} />,
      color: "text-slate-600",
      wrapperClass:
        "group bg-white/80 p-6 md:p-8 rounded-3xl border-2 border-slate-200 hover:border-slate-400 transition-all duration-300 flex flex-col items-center relative overflow-hidden hover:shadow-2xl hover:shadow-slate-500/20 hover:-translate-y-2 z-10 h-full",
      topBarClass:
        "absolute top-0 left-0 w-full h-2 bg-linear-to-r from-slate-600 to-slate-400 opacity-80 group-hover:opacity-100 transition-all duration-500",
      iconBgClass:
        "mb-6 p-5 rounded-2xl bg-slate-50 transition-all duration-300 text-slate-600 group-hover:bg-linear-to-br group-hover:from-slate-500 group-hover:to-slate-600 group-hover:text-white shadow-sm group-hover:shadow-xl group-hover:shadow-slate-300 group-hover:scale-110 shrink-0",
      titleClass:
        "text-sm font-semibold mb-6 text-slate-600 uppercase tracking-[0.2em] transition-colors text-center",
      technologies: [
        { name: "Docker", proficiency: 75 },
        { name: "GitHub", proficiency: 90 },
        { name: "NPM", proficiency: 85 },
        { name: "VS Code", proficiency: 95 },
        { name: "Figma", proficiency: 65 },
        { name: "Canva", proficiency: 75 },
        { name: "WordPress", proficiency: 70 },
      ],
    },
    {
      category: "Cloud & Hosting",
      icon: <Cloud size={24} />,
      color: "text-sky-600",
      wrapperClass:
        "group bg-white/80 p-6 md:p-8 rounded-3xl border-2 border-sky-100 hover:border-sky-400 transition-all duration-300 flex flex-col items-center relative overflow-hidden hover:shadow-2xl hover:shadow-sky-500/20 hover:-translate-y-2 z-10 h-full",
      topBarClass:
        "absolute top-0 left-0 w-full h-2 bg-linear-to-r from-sky-600 to-sky-400 opacity-80 group-hover:opacity-100 transition-all duration-500",
      iconBgClass:
        "mb-6 p-5 rounded-2xl bg-sky-50 transition-all duration-300 text-sky-600 group-hover:bg-linear-to-br group-hover:from-sky-500 group-hover:to-sky-600 group-hover:text-white shadow-sm group-hover:shadow-xl group-hover:shadow-sky-300 group-hover:scale-110 shrink-0",
      titleClass:
        "text-sm font-semibold mb-6 text-sky-600 uppercase tracking-[0.2em] transition-colors text-center",
      technologies: [
        { name: "Google Cloud", proficiency: 70 },
        { name: "Render", proficiency: 75 },
        { name: "Vercel", proficiency: 75 },
        { name: "Netlify", proficiency: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-white relative">
      <div className="absolute inset-0 tech-dot-grid opacity-20" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="w-fit mx-auto px-3 py-1.5 bg-cyan-50 text-cyan-600 text-sm font-semibold uppercase tracking-[0.2em] rounded mb-4 flex justify-center items-center border border-cyan-100">
            MODULE: HARDWARE_SOFTWARE_SPECS
          </div>
          <h2 className="text-3xl xs:text-4xl md:text-6xl font-bold text-slate-900 mb-4 tracking-tighter leading-tight">
            Hardware & Software Specs
          </h2>
          <div className="w-12 h-1 bg-cyan-500 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((stack, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={stack.wrapperClass}
            >
              <div className={stack.topBarClass} />

              <div className={stack.iconBgClass}>
                {typeof stack.icon === "object"
                  ? {
                      ...stack.icon,
                      props: { ...stack.icon.props, size: 36 },
                    }
                  : stack.icon}
              </div>
              <h3 className={stack.titleClass}>{stack.category}</h3>

              <div className="space-y-4 w-full grow mt-2">
                {stack.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="relative">
                    <div className="flex justify-between mb-2 items-center">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${tech.proficiency >= 85 ? "bg-emerald-500 led-pulse" : tech.proficiency >= 75 ? "bg-cyan-500" : "bg-amber-500"}`}
                        />
                        <span className="font-semibold text-slate-900 text-sm md:text-base uppercase tracking-wide">
                          {tech.name}
                        </span>
                      </div>
                      <span className="text-xs md:text-sm font-mono text-slate-600 font-semibold">
                        {tech.proficiency}%
                      </span>
                    </div>
                    <div className="bg-slate-100 h-1.5 rounded-full overflow-hidden flex p-px">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.proficiency}%` }}
                        transition={{
                          duration: 1,
                          delay: techIndex * 0.05 + 0.3,
                        }}
                        viewport={{ once: true }}
                        className={`h-full rounded-full ${tech.proficiency >= 85 ? "bg-cyan-500" : "bg-slate-400"}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
