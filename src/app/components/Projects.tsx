"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, FolderCode, Terminal, Globe } from "lucide-react";

const ProjectImageSlider = ({
  images,
  title,
}: {
  images: string[];
  title: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <div className="w-full h-48 md:h-56 relative overflow-hidden bg-slate-100 group border-b border-slate-200">
      <AnimatePresence mode="popLayout">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${title} - image ${currentIndex + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
      </AnimatePresence>

      {/* Pagination dots */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-0 w-full flex justify-center gap-1.5 z-10">
          {images.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${i === currentIndex ? "bg-white w-4" : "bg-white/50 w-1.5 hover:bg-white/80 cursor-pointer"}`}
              onClick={(e) => {
                e.preventDefault();
                setCurrentIndex(i);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default function Projects() {
  const projects = [
    {
      title: "Exam Scheduling Automation",
      description:
        "ระบบจัดการและจัดตารางสอบอัตโนมัติ ช่วยลดความซับซ้อนและเวลาในการจัดตารางสอบให้มีความถูกต้องและแม่นยำสูง",
      tech: [
        "React",
        "Tailwind CSS",
        "Elysia.js",
        "TypeScript",
        "Bun",
        "PostgreSQL",
        "N8N",
        "Docker",
      ],
      category: "Automation Project",
      icon: (
        <Terminal
          size={24}
          className="group-hover:text-white transition-colors"
        />
      ),
      color: "text-emerald-600",
      hoverBg: "group-hover:bg-emerald-600",
      github: "https://github.com/Thanachai2006/exam-scheduling-automation",
      images: ["/projects/exam_flow-login.png", "/projects/exam_flow-ASD.png", "/projects/exam_flow-AExam.png"],
    },
    {
      title: "Personnel Evaluation System",
      description:
        "ระบบประเมินผลการปฏิบัติงานบุคลากรแบบครบวงจร (Full Stack) พัฒนาแยกส่วน Frontend และ Backend เพื่อประสิทธิภาพและความปลอดภัยของข้อมูล",
      tech: ["React", "Node.js", "Express.js", "MySQL", "JavaScript"],
      category: "Full Stack Project",
      icon: (
        <FolderCode
          size={24}
          className="group-hover:text-white transition-colors"
        />
      ),
      color: "text-blue-600",
      hoverBg: "group-hover:bg-blue-600",
      github: "https://github.com/Thanachai2006/personnel-evaluation-frontend",
      backend_github:
        "https://github.com/Thanachai2006/personnel-evaluation-backend",
      images: ["/projects/personnel_eval-login.png", "/projects/personnel_eval-ASH.png", "/projects/personnel_eval-ASD.png"],
    },
    {
      title: "Project Shoe Store",
      description:
        "เว็บไซต์ร้านขายรองเท้าออนไลน์ที่มีระบบจัดการสินค้าและตะกร้าสินค้า ออกแบบมาเพื่อให้ใช้งานง่ายและรองรับการขยายตัวในอนาคต",
      tech: ["JavaScript", "HTML5", "CSS3"],
      category: "Web Development",
      icon: (
        <Globe size={24} className="group-hover:text-white transition-colors" />
      ),
      color: "text-cyan-600",
      hoverBg: "group-hover:bg-cyan-600",
      github: "https://github.com/Thanachai2006/Project-shoe-store",
      images: ["/projects/shoe_store-home.png", "/projects/shoe_store-shop.png", "/projects/shoe_store-product.png"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="projects"
      className="py-16 md:py-24 bg-slate-50 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-cyan-300 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="w-fit mx-auto px-4 py-1.5 bg-slate-900 text-cyan-400 text-sm font-mono uppercase tracking-widest rounded mb-4 flex justify-center items-center shadow-lg shadow-cyan-900/20">
            root@iot-hub:~$ ls -l /modules
          </div>
          <h2 className="text-3xl xs:text-4xl md:text-6xl font-bold text-slate-900 mb-4 tracking-tighter leading-tight">
            โปรเจคที่เคยทำ
          </h2>
          <div className="w-12 h-1 bg-cyan-500 mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-cyan-500 transition-all flex flex-col hover:shadow-2xl hover:shadow-cyan-100/30 h-full"
            >
              {/* Terminal Header */}
              <div
                className={`bg-slate-50 border-b border-slate-200 px-4 py-2 flex justify-between items-center transition-colors group-hover:bg-cyan-50/50`}
              >
                <div className="flex gap-1.5">
                  <div
                    className={`w-2.5 h-2.5 rounded-full bg-red-400/30 group-hover:bg-red-400 transition-colors`}
                  />
                  <div
                    className={`w-2.5 h-2.5 rounded-full bg-amber-400/30 group-hover:bg-amber-400 transition-colors`}
                  />
                  <div
                    className={`w-2.5 h-2.5 rounded-full bg-emerald-400/30 group-hover:bg-emerald-400 transition-colors`}
                  />
                </div>
              </div>

              {/* Project Image Slider */}
              {project.images && project.images.length > 0 && (
                <ProjectImageSlider
                  images={project.images}
                  title={project.title}
                />
              )}

              <div className="p-6 md:p-8 grow flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`p-2.5 rounded-xl bg-slate-50 transition-all shadow-inner ${project.hoverBg} ${project.color} group-hover:shadow-lg group-hover:text-white`}
                  >
                    {typeof project.icon === "object"
                      ? {
                          ...project.icon,
                          props: { ...project.icon.props, size: 20 },
                        }
                      : project.icon}
                  </div>
                  <span
                    className={`text-sm font-semibold uppercase tracking-[0.2em] ${project.color} group-hover:text-cyan-600 transition-colors`}
                  >
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-cyan-600 transition-colors tracking-tight leading-tight">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-8 line-clamp-3 text-sm md:text-base leading-relaxed grow">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs md:text-sm font-mono bg-slate-50 text-slate-700 px-2.5 py-1 rounded-md border border-slate-100 group-hover:border-blue-100 group-hover:text-blue-600 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 md:p-8 pt-0 mt-auto">
                <div className="flex flex-col gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-xl hover:bg-blue-600 transition-all text-sm md:text-base font-semibold uppercase tracking-widest shadow-xl shadow-slate-200"
                  >
                    <Github size={16} />
                    {project.backend_github ? "Frontend Repo" : "View Source"}
                  </motion.a>
                  {project.backend_github && (
                    <motion.a
                      href={project.backend_github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-2 bg-white text-blue-600 border-2 border-blue-50 px-5 py-3 rounded-xl hover:bg-blue-50 hover:border-blue-100 transition-all text-sm md:text-base font-semibold uppercase tracking-widest"
                    >
                      <Github size={16} />
                      Backend Repo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
