"use client";

import { cn } from "@/lib/utils";

export default function FeatureSections() {
  const skillsData = [
    {
      title: "Frontend Development",
      description: "Crafting beautiful, responsive, and interactive user interfaces using React, Tailwind CSS, and standard HTML5/CSS3.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80",
    },
    {
      title: "Programming & Logic",
      description: "Implementing computer science fundamentals, writing clean scripts, and solving problems using Python and C.",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&auto=format&fit=crop&q=80",
    },
    {
      title: "Databases & SQL",
      description: "Designing database structures, managing relational schemas, and executing efficient queries using SQL.",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <section id="skills" className="w-full py-20 px-6 border-t border-black/5 bg-transparent relative">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-primary-color bg-primary-color/10 border border-primary-color/20 w-fit mb-3">
          Technical Expertise
        </div>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-800">Skills & Toolset</h2>
        <p className="text-sm text-slate-600 mt-3 font-medium">
          A summary of my core technical competencies, tools, and platforms that I leverage to build digital applications.
        </p>
      </div>

      {/* Cards Block */}
      <div className="flex flex-wrap items-start justify-center gap-10 max-w-6xl mx-auto">
        {skillsData.map((skill, index) => (
          <div 
            key={index}
            className="max-w-80 w-full hover:-translate-y-2 transition duration-500 rounded-2xl bg-white/60 border border-black/5 p-4 shadow-md hover:shadow-xl backdrop-blur-md group"
          >
            <div className="overflow-hidden rounded-xl h-44 w-full relative">
              <img
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                src={skill.image}
                alt={skill.title}
              />
            </div>
            <h3 className="text-base font-bold text-slate-800 mt-4 tracking-tight">{skill.title}</h3>
            <p className="text-sm text-slate-600 mt-2 font-medium leading-relaxed">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
