"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { AiLoader } from "@/components/ui/ai-loader";
import { InteractiveMenu } from "@/components/ui/modern-mobile-menu";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { Home, User, Cpu, Code, MessageSquare, Mail, Briefcase, Menu, X } from "lucide-react";

import AboutSection2 from "@/components/ui/about-section-2";
import FeatureSection from "@/components/ui/stack-feature-section";
import { Features as SkillsFeatures } from "@/components/ui/features-8";
import { AnimatedFeatureSpotlight } from "@/components/ui/feature-spotlight";
import Testimonial1 from "@/components/ui/testimonial-1";
import { ContactPage } from "@/components/ui/contact-page";

export function Portfolio() {
  const [progress, setProgress] = useState(0);
  const [isPreloaderDone, setIsPreloaderDone] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [showPortfolioText, setShowPortfolioText] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const loadedImages = useRef<boolean[]>(new Array(243).fill(false));

  const targetFrameRef = useRef(0);
  const currentFrameRef = useRef(0);
  const animationFrameId = useRef<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Load first 10 frames
  useEffect(() => {
    let loadedCount = 0;
    const totalFirstBatch = 10;

    const preloadRemaining = () => {
      for (let i = 11; i <= 243; i++) {
        const img = new Image();
        img.src = `/part 1/ezgif-frame-${String(i).padStart(3, "0")}.jpg`;
        img.onload = () => {
          loadedImages.current[i - 1] = true;
          imagesRef.current[i - 1] = img;
        };
        img.onerror = () => { loadedImages.current[i - 1] = true; };
      }
    };

    for (let i = 1; i <= totalFirstBatch; i++) {
      const img = new Image();
      img.src = `/part 1/ezgif-frame-${String(i).padStart(3, "0")}.jpg`;
      img.onload = () => {
        loadedImages.current[i - 1] = true;
        imagesRef.current[i - 1] = img;
        loadedCount++;
        setProgress((loadedCount / totalFirstBatch) * 100);
        if (loadedCount === totalFirstBatch) {
          setTimeout(() => {
            setIsPreloaderDone(true);
            preloadRemaining();
          }, 600);
        }
      };
      img.onerror = () => {
        loadedImages.current[i - 1] = true;
        loadedCount++;
        setProgress((loadedCount / totalFirstBatch) * 100);
        if (loadedCount === totalFirstBatch) {
          setTimeout(() => {
            setIsPreloaderDone(true);
            preloadRemaining();
          }, 600);
        }
      };
    }
  }, []);

  // Canvas drawing function for scroll sequence
  const drawImage = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let targetIndex = index;
    if (!loadedImages.current[targetIndex]) {
      let found = false;
      for (let j = targetIndex; j >= 0; j--) {
        if (loadedImages.current[j] && imagesRef.current[j]) { targetIndex = j; found = true; break; }
      }
      if (!found) {
        for (let j = index; j < 243; j++) {
          if (loadedImages.current[j] && imagesRef.current[j]) { targetIndex = j; break; }
        }
      }
    }

    const img = imagesRef.current[targetIndex];
    if (!img) return;

    if (canvas.width !== canvas.offsetWidth || canvas.height !== canvas.offsetHeight) {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const imgRatio = (img.naturalWidth || img.width) / (img.naturalHeight || img.height);
    const canvasRatio = canvas.width / canvas.height;
    let drawWidth = canvas.width, drawHeight = canvas.height, offsetX = 0, offsetY = 0;

    if (imgRatio > canvasRatio) {
      drawWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - drawWidth) / 2;
    } else {
      drawHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - drawHeight) / 2;
    }
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Scroll sequence trigger with frame interpolation (lerping) for ultra-smooth rendering
  useEffect(() => {
    if (!isPreloaderDone) return;

    let localShowIntro = false;
    let localShowPortfolioText = true;
    let firstRender = true;

    const updateLoop = () => {
      const diff = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diff) > 0.01 || firstRender) {
        firstRender = false;
        currentFrameRef.current += diff * 0.12; // Easing speed
        const currentFrame = Math.min(158, Math.max(0, Math.floor(currentFrameRef.current)));
        drawImage(currentFrame);

        // Detect threshold for introduction text (frame 87)
        const isIntro = currentFrame >= 87;
        if (isIntro !== localShowIntro) {
          localShowIntro = isIntro;
          setShowIntro(isIntro);
        }

        // Detect threshold for portfolio text (disappear at frame 80)
        const isPortfolioVisible = currentFrame < 80;
        if (isPortfolioVisible !== localShowPortfolioText) {
          localShowPortfolioText = isPortfolioVisible;
          setShowPortfolioText(isPortfolioVisible);
        }
      }
      animationFrameId.current = requestAnimationFrame(updateLoop);
    };

    const handleScroll = () => {
      if (!containerRef.current || !canvasRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollHeight = rect.height - window.innerHeight;
      const progressValue = -rect.top / scrollHeight;
      const clamped = Math.min(1, Math.max(0, progressValue));
      targetFrameRef.current = clamped * 158;

      const homeHeight = containerRef.current?.offsetHeight || (2 * window.innerHeight);
      setScrolled(window.scrollY >= homeHeight - 80);
      
      // Auto-close mobile menu on scroll
      setMobileMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    // Start the update loop
    animationFrameId.current = requestAnimationFrame(updateLoop);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isPreloaderDone]);

  // Section highlight trigger using Intersection Observer
  useEffect(() => {
    const sections = ["home", "about", "project", "skills", "internship", "testimonial", "contact"];
    
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -50% 0px", // Trigger when section is in the middle of viewport reading area
      threshold: 0.05,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = sections.indexOf(entry.target.id);
          if (idx !== -1) {
            setActiveSection(idx);
          }
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Handle scroll boundary edges (absolute top and bottom) explicitly
    const handleScrollBoundary = () => {
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      if (isAtBottom) {
        setActiveSection(sections.length - 1); // Highlight Contact
      } else if (window.scrollY === 0) {
        setActiveSection(0); // Highlight Home
      }
    };

    window.addEventListener("scroll", handleScrollBoundary);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScrollBoundary);
    };
  }, []);

  const mobileMenuItems = [
    { label: "Home", icon: Home, href: "#home" },
    { label: "About", icon: User, href: "#about" },
    { label: "Project", icon: Cpu, href: "#project" },
    { label: "Skills", icon: Code, href: "#skills" },
    { label: "Internship", icon: Briefcase, href: "#internship" },
    { label: "Reviews", icon: MessageSquare, href: "#testimonial" },
    { label: "Contact", icon: Mail, href: "#contact" },
  ];

  const handleMobileActiveIndexChange = (mobIdx: number) => {
    const targetId = mobileMenuItems[mobIdx].href;
    const el = document.querySelector(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(mobIdx);
  };

  return (
    <>
      <AnimatePresence>
        {!isPreloaderDone && (
          <motion.div
            key="preloader"
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-50"
          >
            <AiLoader progress={progress} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative w-full">

        {/* ─── TOP NAVBAR ─── */}
        {isPreloaderDone && (
          <>
            <motion.header
              initial={{ y: -80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
                ? "bg-[#eef1f6]/80 backdrop-blur-md border-b border-black/5 shadow-md"
                : "bg-black/90 backdrop-blur-md border-b border-white/10 shadow-md"
                }`}
            >
              <div className="w-full px-6 md:px-12 py-4 flex items-center justify-between">
                {/* Logo */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer flex items-center h-10"
                  onClick={() => {
                    const el = document.getElementById("home");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <img
                    src={scrolled ? "/light.png" : "/Dark.png"}
                    alt="Logo"
                    className="h-8 md:h-10 w-auto object-contain transition-all duration-300"
                  />
                </motion.div>

                {/* Desktop nav links */}
                <nav className="hidden md:flex items-center gap-4 lg:gap-8">
                  {["Home", "About", "Project", "Skills", "Internship", "Testimonial", "Contact"].map((item, i) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setActiveSection(i)}
                      className={`text-xs font-bold tracking-wider uppercase transition-colors duration-200 ${activeSection === i
                        ? (scrolled ? "text-[#760031]" : "text-[#ff8ea8]")
                        : (scrolled ? "text-slate-500 hover:text-slate-800" : "text-neutral-400 hover:text-white")
                        }`}
                    >
                      {item}
                      {activeSection === i && (
                        <motion.div
                          layoutId="nav-underline"
                          className="h-0.5 mt-0.5 rounded-full"
                          style={{ background: scrolled ? "#760031" : "#ff8ea8" }}
                        />
                      )}
                    </a>
                  ))}
                </nav>

                {/* CTA */}
                <a
                  href="mailto:divya20051123@gmail.com"
                  className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{
                    background: scrolled ? "#ffffff" : "#760031",
                    boxShadow: scrolled ? "0 0 20px rgba(118,0,49,0.25)" : "0 0 20px rgba(255,142,168,0.35)",
                    color: scrolled ? "#760031" : "#ffffff"
                  }}
                >
                  Hire Me
                </a>

                {/* Mobile Menu Toggle Button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden p-2 rounded-lg transition-colors z-50 pointer-events-auto"
                  style={{ color: scrolled ? "#760031" : "#ff8ea8" }}
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </motion.header>

            {/* Mobile menu dropdown */}
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className={`fixed top-[64px] md:top-[72px] left-0 right-0 z-30 flex flex-col p-6 gap-4 border-b shadow-xl backdrop-blur-xl md:hidden ${scrolled
                    ? "bg-[#eef1f6]/95 border-black/5"
                    : "bg-black/95 border-white/10"
                    }`}
                >
                  {["Home", "About", "Project", "Skills", "Internship", "Testimonial", "Contact"].map((item, i) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={() => {
                        setActiveSection(i);
                        setMobileMenuOpen(false);
                      }}
                      className={`text-sm font-bold tracking-wider uppercase py-2 transition-colors duration-200 ${activeSection === i
                        ? (scrolled ? "text-[#760031]" : "text-[#ff8ea8]")
                        : (scrolled ? "text-slate-600 hover:text-slate-900" : "text-neutral-400 hover:text-white")
                        }`}
                    >
                      {item}
                    </a>
                  ))}
                  <a
                    href="mailto:divya20051123@gmail.com"
                    onClick={() => setMobileMenuOpen(false)}
                    className="mt-2 w-full text-center py-2.5 rounded-full text-sm font-bold transition-all duration-300"
                    style={{
                      background: scrolled ? "#760031" : "#ffffff",
                      color: scrolled ? "#ffffff" : "#760031"
                    }}
                  >
                    Hire Me
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}

        {/* ─── SECTION 1: HERO / SCROLL SEQUENCE ─── */}
        <div id="home" ref={containerRef} className="relative h-[200vh] w-full bg-black">
          <div 
            className="fixed top-0 left-0 h-screen w-full overflow-hidden select-none z-0"
            style={{ 
              pointerEvents: scrolled ? "none" : "auto",
              visibility: scrolled ? "hidden" : "visible"
            }}
          >

            {/* The background canvas — full bg */}
            <canvas ref={canvasRef} className="w-full h-full" style={{ display: "block" }} />

            {/* Subtle gradient overlays */}
            <div className="absolute inset-0 pointer-events-none z-10"
              style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, transparent 30%, transparent 60%, rgba(0,0,0,0.7) 100%)" }}
            />

            {/* ─── CREATIVE PORTFOLIO TEXT LAYOUT ─── */}
            <div className="absolute inset-0 flex flex-col justify-between px-6 md:px-12 py-8 pointer-events-none z-10" style={{ paddingTop: "80px", paddingBottom: "40px" }}>

              {/* TOP ROW: Date/Name (right-aligned) */}
              <div className="flex justify-end items-start w-full">
                <AnimatePresence>
                  {!showIntro && (
                    <motion.div
                      key="june-divya-date"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: isPreloaderDone ? 1 : 0, x: isPreloaderDone ? 0 : 30 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="text-right pointer-events-auto"
                    >
                      <p className="text-white/70 text-xs md:text-sm font-semibold tracking-[0.25em] uppercase">
                        JUNE / 2026
                      </p>
                      <p className="text-white font-extrabold text-sm md:text-base tracking-[0.15em] uppercase mt-1">
                        DIVYA BHARATHI S
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* MIDDLE ROW: Introduction paragraph summaries (Positioned upper right to prevent bottom-left overlaps) */}
              <div className="absolute inset-x-0 top-[16%] px-6 md:px-12 pointer-events-none flex justify-end">
                <AnimatePresence>
                  {showIntro && (
                    <motion.div
                      key="about-intro-text"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.5 }}
                      className="w-full md:w-[50%] lg:w-[46%] pointer-events-auto space-y-4 text-left"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      <p className="text-neutral-200 text-sm md:text-lg lg:text-xl leading-relaxed font-bold">
                        I am a dedicated B.Sc. Computer Science student, eager to apply technical skills and adapt to professional environments to contribute positively to organizational success.
                      </p>
                      <p className="text-neutral-200 text-sm md:text-lg lg:text-xl leading-relaxed font-bold">
                        To secure a challenging role that provides opportunities to learn and grow while effectively contributing my skills for the development of the organization, taking on projects that test my programming knowledge and push my front-end craft.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CENTERED ROW: Giant PORTFOLIO Title (Only shown when showPortfolioText is true) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <AnimatePresence>
                  {showPortfolioText && (
                    <motion.div
                      key="centered-portfolio"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: isPreloaderDone ? 1 : 0, scale: isPreloaderDone ? 1 : 0.95 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.6 }}
                      className="relative inline-block select-none pointer-events-auto text-center"
                    >
                      {/* "Creative" label in Brittany font and yellow */}
                      <div className="absolute left-0 bottom-[95%] mb-2 ml-1 z-20">
                        <h2 className="text-[#facc15] font-normal text-4xl md:text-6xl tracking-normal normal-case leading-none"
                          style={{ fontFamily: "'Brittany Signature', cursive" }}
                        >
                          Creative
                        </h2>
                      </div>

                      <h1
                        className="font-bebas font-black leading-none text-center select-none text-white uppercase tracking-[0.06em] font-extrabold"
                        style={{
                          fontFamily: "var(--font-bebas)",
                          fontSize: "clamp(60px, 16vw, 220px)",
                          lineHeight: 0.8,
                        }}
                      >
                        <span className="opacity-85">POR</span>
                        <span className="opacity-0">TFO</span>
                        <span className="opacity-85">LIO</span>
                      </h1>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* BOTTOM ROW: Giant Titles at the bottom-left & summaries on the right */}
              <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8 min-h-[180px]">
                {/* Left side: Giant Title or Skills/Internship details */}
                <div className="relative inline-block select-none pointer-events-auto w-full md:w-auto">
                  <AnimatePresence mode="wait">
                    {showIntro ? (
                      <motion.h1
                        key="intro-title"
                        initial={{ opacity: 0, scale: 0.93, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.93, y: -10 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="font-bebas font-black leading-none text-left select-none text-white uppercase tracking-[0.06em] font-extrabold pb-4"
                        style={{
                          fontFamily: "var(--font-bebas)",
                          fontSize: "clamp(60px, 14vw, 180px)",
                          lineHeight: 0.8,
                        }}
                      >
                        INTRODUCTION
                      </motion.h1>
                    ) : (
                      <motion.div
                        key="hero-skills-box"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: isPreloaderDone ? 1 : 0, y: isPreloaderDone ? 0 : 15 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="pb-4 w-full"
                      >
                        <div className="w-full md:max-w-[500px] text-left space-y-2 text-white/95 leading-relaxed">
                          <p className="text-[#760031] uppercase tracking-wider font-extrabold text-xl md:text-2xl">
                            Technical Skills & Internship
                          </p>
                          <p className="font-extrabold text-white text-base md:text-lg lg:text-xl leading-snug">
                            HTML, CSS, JavaScript, React, Python, and SQL.
                          </p>
                          <p className="text-white/80 text-xs md:text-sm lg:text-base leading-normal font-medium">
                            Web Development Intern specialized in building interactive component architectures, speed optimization, and responsive design systems.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Right side: Summaries and buttons (Always visible, text transitions) */}
                <div className="w-full md:max-w-[450px] text-left md:text-right space-y-4 pointer-events-auto z-20 pb-4">
                  <div className="min-h-[60px] flex items-end justify-start md:justify-end">
                    <AnimatePresence mode="wait">
                      {!showIntro ? (
                        <motion.p
                          key="hero-desc"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.4 }}
                          className="text-white/80 text-sm md:text-base leading-relaxed font-semibold"
                        >
                          Passionate about learning, teamwork, and contributing positively. Pursuing B.Sc. Computer Science at Vel Tech. Skilled in HTML, CSS, Python, and SQL.
                        </motion.p>
                      ) : (
                        <motion.p
                          key="intro-desc"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.4 }}
                          className="text-[#ff8ea8] text-xs md:text-sm leading-relaxed font-bold uppercase tracking-widest"
                        >
                          Scroll down to explore details
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className="flex items-center justify-start md:justify-end gap-4">
                    <a
                      href="#about"
                      className="px-5 py-2.5 rounded-full text-xs font-bold hover:scale-105 transition-transform"
                      style={{ background: "#760031", color: "#ffffff" }}
                      onClick={() => setActiveSection(1)}
                    >
                      Discover More
                    </a>
                    <a href="mailto:divya20051123@gmail.com" className="text-white/50 hover:text-white text-xs font-bold tracking-widest transition-colors">EMAIL ↗</a>
                    <span className="text-white/20">|</span>
                    <a href="tel:+917200082317" className="text-white/50 hover:text-white text-xs font-bold tracking-widest transition-colors">CALL ↗</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── MOBILE BOTTOM FLOATING MENU ─── */}
        {isPreloaderDone && (
          <div className="md:hidden">
            <InteractiveMenu
              items={mobileMenuItems}
              activeIndex={activeSection}
              setActiveIndex={handleMobileActiveIndexChange}
            />
          </div>
        )}

        {/* ─── CONTENT SECTIONS ─── */}
        <div className="relative bg-bg-dark z-10 w-full">
          <div className="blob blob-1" />
          <div className="blob blob-2" />

          {/* Section 2: About Me */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <AboutSection2 />
          </motion.div>

          {/* Section 3: Project (FoodConnect details orbiting tech) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <FeatureSection />
          </motion.div>

          {/* Section 4: Skills & Academic History */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <SkillsFeatures />
          </motion.div>

          {/* Section 5: Internship Experience */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div id="internship" className="py-20 px-6 border-t border-black/5 bg-transparent relative">
              <div className="max-w-6xl mx-auto">
                <AnimatedFeatureSpotlight
                  preheaderIcon={<Briefcase className="h-4 w-4" />}
                  preheaderText="Internship Experience"
                  heading={
                    <>
                      Web Development <span className="text-primary-color">Intern</span>
                    </>
                  }
                  description="I am crafting premium front-end web experiences to be highly interactive, responsive, and always user-first. My goal is to continually raise the bar and challenge how creative web applications can work for you."
                  buttonText="Explore My Work"
                  buttonProps={{
                    onClick: () => {
                      const el = document.getElementById("project");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  imageUrl="/light.png"
                  imageAlt="Divya Bharathi S Logo"
                />
              </div>
            </div>
          </motion.div>

          {/* Section 6: Testimonials (Tooltip Metrics Card) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Testimonial1 />
          </motion.div>

          {/* Section 7: Contact Page */}
          <ContactPage />

          {/* Cinematic Footer */}
          {isPreloaderDone && <CinematicFooter />}
        </div>
      </div>
    </>
  );
}

export default Portfolio;
