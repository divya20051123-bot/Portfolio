"use client";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { Zap, GraduationCap, BookOpen, Award } from "lucide-react";
import { useRef } from "react";
import DisplayCards from "@/components/ui/display-cards";

export default function AboutSection2() {
  const heroRef = useRef<HTMLDivElement>(null);
  
  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.2,
        duration: 0.7,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: 40,
      opacity: 0,
    },
  };

  const textVariants = {
    visible: (i: number) => ({
      filter: "blur(0px)",
      opacity: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.7,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
    },
  };

  const educationCards = [
    {
      icon: <Award className="size-5" />,
      title: "Higher Secondary (12th)",
      description: "Govt. Higher Secondary School, Pandeshwaram. Specialized in MPCCS (Maths, Physics, Chemistry, Computer Science). Score: 53%.",
      date: "2022 - 2023",
      iconClassName: "bg-[#760031] text-white",
      titleClassName: "text-[#760031]",
      className: "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0"
    },
    {
      icon: <BookOpen className="size-5" />,
      title: "B.Sc. Computer Science",
      description: "Vel Tech Ranga Sanku Arts College (University of Madras). Cumulative percentage up to 4th semester: 76%.",
      date: "2023 - 2026",
      iconClassName: "bg-[#760031] text-white",
      titleClassName: "text-[#760031]",
      className: "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0"
    },
    {
      icon: <GraduationCap className="size-5" />,
      title: "MCA (Master of Computer Applications)",
      description: "Jaya College of Arts and Science. Pursuing postgraduate studies in computer applications.",
      date: "2026 - Present",
      iconClassName: "bg-[#760031] text-white",
      titleClassName: "text-[#760031]",
      className: "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10"
    }
  ];

  return (
    <section id="about" className="py-32 px-6 border-t border-black/5 relative bg-transparent">
      <div className="max-w-6xl mx-auto" ref={heroRef}>
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Column: Stacked Cards */}
          <div className="flex-1 w-full flex justify-center lg:justify-start lg:pr-12">
            <DisplayCards cards={educationCards} />
          </div>

          {/* Right Column: Content */}
          <div className="flex-1">
            <TimelineContent
              as="h1"
              animationNum={0}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="text-lg md:text-xl lg:text-2xl !leading-[140%] font-black text-slate-800 mb-4 tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              To secure a{" "}
              <TimelineContent
                as="span"
                animationNum={1}
                timelineRef={heroRef}
                customVariants={textVariants}
                className="inline-block border border-dotted px-2 py-0.5 rounded-lg"
                style={{ color: "#760031", borderColor: "rgba(118, 0, 49, 0.4)", backgroundColor: "transparent" }}
              >
                challenging
              </TimelineContent>{" "}
              role that provides opportunities to{" "}
              <TimelineContent
                as="span"
                animationNum={2}
                timelineRef={heroRef}
                customVariants={textVariants}
                className="inline-block border border-dotted px-2 py-0.5 rounded-lg"
                style={{ color: "#760031", borderColor: "rgba(118, 0, 49, 0.4)", backgroundColor: "transparent" }}
              >
                learn
              </TimelineContent>{" "}
              and{" "}
              <TimelineContent
                as="span"
                animationNum={3}
                timelineRef={heroRef}
                customVariants={textVariants}
                className="inline-block border border-dotted px-2 py-0.5 rounded-lg"
                style={{ color: "#760031", borderColor: "rgba(118, 0, 49, 0.4)", backgroundColor: "transparent" }}
              >
                grow
              </TimelineContent>{" "}
              while effectively contributing my skills for the development of the organization.
            </TimelineContent>

            <TimelineContent
              as="p"
              animationNum={3.5}
              timelineRef={heroRef}
              customVariants={textVariants}
              className="text-slate-600 text-xs md:text-sm leading-relaxed mt-4 mb-6 max-w-4xl font-semibold"
              style={{ fontFamily: "var(--font-body)" }}
            >
              I am a dedicated B.Sc. Computer Science student, eager to apply technical skills and adapt to professional environments to contribute positively to organizational success.
            </TimelineContent>

            <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center">
              <TimelineContent
                as="div"
                animationNum={4}
                timelineRef={heroRef}
                customVariants={textVariants}
                className="sm:text-lg text-xs"
              >
                <div className="font-semibold text-slate-500 mb-1 capitalize text-xs">
                  I am Divya Bharathi and I will
                </div>
                <div className="text-slate-800 font-extrabold uppercase tracking-wider text-sm md:text-base">
                  build your vision
                </div>
              </TimelineContent>

              <TimelineContent
                as="button"
                animationNum={5}
                timelineRef={heroRef}
                customVariants={textVariants}
                className="bg-primary-color hover:bg-primary-hover gap-2 font-bold shadow-lg shadow-primary-color/20 text-white h-10 px-5 rounded-full text-xs inline-flex items-center cursor-pointer hover:scale-105 transition-transform"
                onClick={() => {
                  const el = document.getElementById("project");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Zap fill="white" size={14} />
                Explore My Work
              </TimelineContent>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
