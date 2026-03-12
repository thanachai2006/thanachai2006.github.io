'use client';

import { motion } from 'framer-motion';
import { Code2, Layout, Server, Database, Settings, Cloud } from 'lucide-react';

export default function Skills() {
  const techStack = [
    {
      category: 'Languages',
      icon: <Code2 size={24} />,
      color: 'text-blue-600',
      hoverBg: 'group-hover:bg-blue-600',
      technologies: [
        { name: 'JavaScript', proficiency: 90 },
        { name: 'TypeScript', proficiency: 85 },
        { name: 'PHP', proficiency: 70 },
        { name: 'Python', proficiency: 80 },
        { name: 'C/C++', proficiency: 75 },
        { name: 'JAVA', proficiency: 70 },
        { name: 'HTML5', proficiency: 95 },
        { name: 'CSS3', proficiency: 85 },
      ],
    },
    {
      category: 'Frontend',
      icon: <Layout size={24} />,
      color: 'text-cyan-600',
      hoverBg: 'group-hover:bg-cyan-600',
      technologies: [
        { name: 'React', proficiency: 85 },
        { name: 'Next.js', proficiency: 80 },
        { name: 'Vite', proficiency: 80 },
        { name: 'TailwindCSS', proficiency: 90 },
      ],
    },
    {
      category: 'Backend',
      icon: <Server size={24} />,
      color: 'text-emerald-600',
      hoverBg: 'group-hover:bg-emerald-600',
      technologies: [
        { name: 'NodeJS', proficiency: 85 },
        { name: 'Express.js', proficiency: 80 },
        { name: 'Bun', proficiency: 60 },
        { name: 'ElysiaJS', proficiency: 70 },
      ],
    },
    {
      category: 'Databases & ORMs',
      icon: <Database size={24} />,
      color: 'text-purple-600',
      hoverBg: 'group-hover:bg-purple-600',
      technologies: [
        { name: 'MySQL', proficiency: 80 },
        { name: 'PostgreSQL', proficiency: 75 },
        { name: 'MongoDB', proficiency: 75 },
        { name: 'Prisma', proficiency: 80 },
      ],
    },
    {
      category: 'DevOps & Tools',
      icon: <Settings size={24} />,
      color: 'text-slate-600',
      hoverBg: 'group-hover:bg-slate-900',
      technologies: [
        { name: 'Docker', proficiency: 75 },
        { name: 'GitHub', proficiency: 90 },
        { name: 'NPM', proficiency: 85 },
        { name: 'VS Code', proficiency: 95 },
        { name: 'Figma', proficiency: 65 },
        { name: 'Canva', proficiency: 75 },
        { name: 'WordPress', proficiency: 70 },
      ],
    },
    {
      category: 'Cloud & Hosting',
      icon: <Cloud size={24} />,
      color: 'text-sky-600',
      hoverBg: 'group-hover:bg-sky-600',
      technologies: [
        { name: 'Google Cloud', proficiency: 70 },
        { name: 'Render', proficiency: 75 },
        { name: 'Vercel', proficiency: 85 },
        { name: 'Netlify', proficiency: 75 },
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
          <div className="w-fit mx-auto px-3 py-1.5 bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-[0.2em] rounded mb-4 flex justify-center items-center">
            Module: Tech_Stack.v2
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tighter leading-tight">
            Tech Stack
          </h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((stack, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 hover:border-blue-600 transition-all group flex flex-col relative overflow-hidden h-full hover:shadow-2xl hover:shadow-blue-100/20"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 rounded-xl bg-slate-50 transition-all shadow-inner ${stack.hoverBg} group-hover:text-white ${stack.color} group-hover:shadow-lg`}>
                  {typeof stack.icon === 'object' ? { ...stack.icon, props: { ...stack.icon.props, size: 20 } } : stack.icon}
                </div>
                <h3 className="text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight uppercase">
                  {stack.category}
                </h3>
              </div>

              <div className="space-y-5 flex-grow">
                {stack.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="relative">
                    <div className="flex justify-between mb-2 items-center">
                      <div className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${tech.proficiency >= 85 ? 'bg-emerald-500 led-pulse' : tech.proficiency >= 75 ? 'bg-blue-500' : 'bg-amber-500'}`} />
                        <span className="font-black text-slate-900 text-[10px] md:text-xs uppercase tracking-wide">{tech.name}</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 font-bold">{tech.proficiency}%</span>
                    </div>
                    <div className="bg-slate-100 h-1.5 rounded-full overflow-hidden flex p-[1px]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.proficiency}%` }}
                        transition={{ duration: 1, delay: techIndex * 0.05 + 0.3 }}
                        viewport={{ once: true }}
                        className={`h-full rounded-full ${tech.proficiency >= 85 ? 'bg-blue-600' : 'bg-slate-400'}`}
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
