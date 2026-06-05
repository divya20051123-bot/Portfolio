"use client";

import { Button } from "@/components/ui/button";
import {
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaGithub,
  FaDatabase, FaHandsHelping, FaUtensils, FaGlobe, FaShareAlt
} from "react-icons/fa";
import {
  SiNextdotjs, SiTailwindcss, SiTypescript, SiPostgresql
} from "react-icons/si";

const iconConfigs = [
  { Icon: FaReact, color: "#61DAFB" },
  { Icon: FaHtml5, color: "#E34F26" },
  { Icon: FaCss3Alt, color: "#1572B6" },
  { Icon: FaJs, color: "#F7DF1E" },
  { Icon: SiNextdotjs, color: "#000000" },
  { Icon: SiTailwindcss, color: "#06B6D4" },
  { Icon: SiTypescript, color: "#3178C6" },
  { Icon: FaGithub, color: "#181717" },
  { Icon: FaDatabase, color: "#336791" },
  { Icon: FaHandsHelping, color: "#FF5733" },
  { Icon: FaUtensils, color: "#4CAF50" },
  { Icon: FaGlobe, color: "#00BCD4" },
  { Icon: FaShareAlt, color: "#9C27B0" },
];

export default function FeatureSection() {
  const orbitCount = 3;
  const orbitGap = 6; // rem between orbits
  const iconsPerOrbit = Math.ceil(iconConfigs.length / orbitCount);

  return (
    <section id="project" className="relative max-w-6xl mx-auto my-24 flex flex-col md:flex-row items-center justify-between min-h-[30rem] border border-black/5 bg-white/70 backdrop-blur-xl overflow-hidden rounded-3xl p-8 md:p-12 shadow-xl">
      <div className="absolute inset-0 pointer-events-none bg-radial-[circle_at_70%_50%] from-primary-color/5 via-transparent to-transparent opacity-40" />
      
      {/* Left side: Heading and Text */}
      <div className="w-full md:w-1/2 z-10 space-y-6">
        <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-primary-color bg-primary-color/10 border border-primary-color/20">
          Featured Final Year Project
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-800" style={{ fontFamily: "var(--font-heading)" }}>
          FoodConnect
        </h1>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-lg font-medium">
          A web-based platform designed to bridge the gap between surplus food and hunger. 
          Developed to connect hotels, restaurants, and event organizers with orphanages and NGOs in real-time, reducing food waste and supporting local communities.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="default" className="rounded-full font-bold px-6 py-2.5 text-white bg-[#760031] hover:bg-[#9c0c46]" asChild>
            <a href="/resume.pdf" target="_blank">
              View Project PDF
            </a>
          </Button>
          <Button variant="outline" className="rounded-full font-bold px-6 py-2.5 border border-black/10 bg-transparent text-slate-800 hover:bg-black/5" asChild>
            <a href="#about">Learn More</a>
          </Button>
        </div>
      </div>

      {/* Right side: Orbit animation cropped to 1/2 */}
      <div className="relative w-full md:w-1/2 h-[26rem] md:h-full flex items-center justify-center overflow-hidden mt-8 md:mt-0">
        <div className="relative w-[36rem] h-[36rem] flex items-center justify-center">
          {/* Center Circle */}
          <div className="w-20 h-20 rounded-full bg-white border border-black/5 shadow-md flex items-center justify-center z-20">
            <FaUtensils className="w-10 h-10 text-primary-color" />
          </div>

          {/* Generate Orbits */}
          {[...Array(orbitCount)].map((_, orbitIdx) => {
            const size = `${8 + orbitGap * (orbitIdx + 1)}rem`; // equal spacing
            const angleStep = (2 * Math.PI) / iconsPerOrbit;

            return (
              <div
                key={orbitIdx}
                className="absolute rounded-full border border-dashed border-black/10"
                style={{
                  width: size,
                  height: size,
                  animation: `spin ${14 + orbitIdx * 6}s linear infinite`,
                }}
              >
                {iconConfigs
                  .slice(orbitIdx * iconsPerOrbit, orbitIdx * iconsPerOrbit + iconsPerOrbit)
                  .map((cfg, iconIdx) => {
                    const angle = iconIdx * angleStep;
                    const x = 50 + 50 * Math.cos(angle);
                    const y = 50 + 50 * Math.sin(angle);

                    return (
                      <div
                        key={iconIdx}
                        className="absolute bg-white border border-black/5 rounded-full p-2 shadow-md"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        {cfg.Icon && (
                          <cfg.Icon className="w-6 h-6" style={{ color: cfg.color }} />
                        )}
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>
      </div>

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
