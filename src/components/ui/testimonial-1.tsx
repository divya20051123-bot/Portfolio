"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { ArrowDown, ArrowUp } from "lucide-react";
import { useState } from "react";

export default function Testimonial1() {
  interface StatItem {
    percentage: string;
    logo: string;
    label: string;
    isIncrease: boolean;
  }

  const stats: StatItem[] = [
    {
      percentage: "95%",
      label: "code responsiveness",
      isIncrease: true,
      logo: "customer/vercel.png",
    },
    {
      percentage: "40%",
      label: "page load reduction",
      isIncrease: false,
      logo: "customer/netflix.png",
    },
    {
      percentage: "100%",
      label: "semantic html structures",
      isIncrease: true,
      logo: "customer/amazon.png",
    },
    {
      percentage: "5+",
      label: "fully working demos",
      isIncrease: true,
      logo: "customer/alibaba.png",
    },
  ];

  return (
    <section id="testimonial" className="py-24 px-6 border-t border-white/5 relative bg-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Community Badge */}
        <div className="flex justify-center mb-8">
          <div className="bg-primary-color/10 border border-primary-color/20 text-primary-color px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-bold">
            Feedback & Reviews
          </div>
        </div>

        {/* Main Heading with Images */}
        <div className="text-center max-w-screen-xl mx-auto relative text-slate-800 space-y-2">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-extrabold leading-tight tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
            Trusted by developers to build <br className="sm:hidden" />
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="inline-block mx-2 align-middle relative pointer-events-auto">
                    <div className="relative overflow-hidden sm:w-16 w-12 h-12 origin-center transition-all duration-300 md:hover:w-36 hover:w-24 rounded-full border-2 border-primary-color cursor-help">
                      <img
                        src={`https://pro-section.ui-layouts.com/people/aam1.png`}
                        alt="Senior Developer smiling"
                        className="object-cover w-full h-full"
                        style={{ objectPosition: "center" }}
                      />
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="bottom"
                  className="max-w-xs bg-slate-800 text-white p-4 rounded-xl shadow-2xl border border-white/10 z-50 font-sans"
                >
                  <p className="mb-2 text-sm leading-relaxed text-neutral-300">
                    "Divya has a fantastic eye for modern front-end design and clean semantic structures. Her work is extremely reliable."
                  </p>
                  <p className="font-bold text-sm text-primary-color">Siddharth R. (Tech Lead)</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            interactive sites and
          </h2>

          <h2 className="text-xl md:text-2xl lg:text-4xl font-extrabold leading-tight tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
            bring their
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="inline-block mx-2 align-middle pointer-events-auto">
                    <div className="relative overflow-hidden sm:w-16 w-14 h-14 origin-center transition-all duration-300 lg:hover:w-36 md:hover:w-24 hover:w-20 rounded-full border-2 border-secondary-color cursor-help">
                      <img
                        src={`https://pro-section.ui-layouts.com/people/aam3.jpg`}
                        alt="Project Manager"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="bottom"
                  className="max-w-xs bg-slate-800 text-white p-4 rounded-xl shadow-2xl border border-white/10 z-50 font-sans"
                >
                  <p className="mb-2 text-sm leading-relaxed text-neutral-300">
                    "Exceptional adaptability and a very positive attitude. Worked well in our team and completed tasks on time."
                  </p>
                  <p className="font-bold text-sm text-secondary-color">Priya K. (Project Manager)</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            ideas to life with
          </h2>
          <h2 className="text-xl md:text-2xl lg:text-4xl font-extrabold text-primary-color leading-tight tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
            high visual appeal
          </h2>
        </div>

        <div className="sm:flex grid grid-cols-2 gap-8 bg-white/70 backdrop-blur-xl mt-12 w-full mx-auto px-8 py-8 border border-black/5 rounded-2xl relative shadow-lg">
          {stats.map((stat, index) => (
            <div
              key={stat?.label}
              className="flex-1 flex gap-4 pl-6 md:pl-10 relative items-center"
            >
              {index !== 0 && (
                <div className="w-px h-12 border-l border-dashed border-black/10 absolute left-0 hidden sm:block" />
              )}
              <div className="w-full h-full group relative min-h-[4rem] flex flex-col items-center justify-center">
                <img
                  src={`https://pro-section.ui-layouts.com/${stat?.logo}`}
                  alt="client logo"
                  className="w-[80%] h-8 object-contain group-hover:opacity-0 group-hover:-translate-y-6 transition-all duration-300 ease-out"
                />
                <div className="absolute opacity-0 flex flex-col items-center justify-center w-full group-hover:opacity-100 group-hover:translate-y-0 translate-y-6 transition-all duration-300 ease-out">
                  <div className="flex items-center justify-center gap-1.5">
                    {stat.isIncrease ? (
                      <ArrowUp className="w-4 h-4 text-green-600" />
                    ) : (
                      <ArrowDown className="w-4 h-4 text-red-600" />
                    )}
                    <span className="text-xl font-bold text-slate-800 tracking-tight">
                      {stat.percentage}
                    </span>
                  </div>
                  <p className="text-slate-500 text-[10px] md:text-xs text-center capitalize font-semibold tracking-wider mt-1">
                    {stat.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
