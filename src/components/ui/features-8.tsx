"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Shield, Users, Code2, Cpu, Zap, Database, Globe } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

export function Features() {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.12,
        duration: 0.6,
        ease: "easeOut" as const
      }
    })
  };

  return (
    <section id="skills" className="py-20 px-6 border-t border-black/5 bg-transparent relative">
      <div className="mx-auto max-w-3xl lg:max-w-5xl">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-primary-color bg-primary-color/10 border border-primary-color/20 w-fit mb-3">
            Technical Expertise
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-800">Skills & Competencies</h2>
          <p className="text-sm text-slate-600 mt-3 font-medium">
            A comprehensive breakdown of my development capabilities, programming tools, and core engineering skills.
          </p>
        </div>

        <div className="relative">
          <div className="relative z-10 grid grid-cols-6 gap-6">
            
            {/* Card 1: UI Precision */}
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-50px" }}
              variants={cardVariants}
              className="col-span-full lg:col-span-2 flex"
            >
              <Card className="relative flex overflow-hidden group w-full">
                <CardContent className="relative m-auto size-fit pt-6 pb-6">
                  <div className="relative flex h-24 w-56 items-center">
                    <svg className="text-primary-color/20 absolute inset-0 size-full transition-transform duration-700 group-hover:scale-105" viewBox="0 0 254 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M112.891 97.7022C140.366 97.0802 171.004 94.6715 201.087 87.5116C210.43 85.2881 219.615 82.6412 228.284 78.2473C232.198 76.3179 235.905 73.9942 239.348 71.3124C241.85 69.2557 243.954 66.7571 245.555 63.9408C249.34 57.3235 248.281 50.5341 242.498 45.6109C239.033 42.7237 235.228 40.2703 231.169 38.3054C219.443 32.7209 207.141 28.4382 194.482 25.534C184.013 23.1927 173.358 21.7755 162.64 21.2989C161.376 21.3512 160.113 21.181 158.908 20.796C158.034 20.399 156.857 19.1682 156.962 18.4535C157.115 17.8927 157.381 17.3689 157.743 16.9139C158.104 16.4588 158.555 16.0821 159.067 15.8066C160.14 15.4683 161.274 15.3733 162.389 15.5286C179.805 15.3566 196.626 18.8373 212.998 24.462C220.978 27.2494 228.798 30.4747 236.423 34.1232C240.476 36.1159 244.202 38.7131 247.474 41.8258C254.342 48.2578 255.745 56.9397 251.841 65.4892C249.793 69.8582 246.736 73.6777 242.921 76.6327C236.224 82.0192 228.522 85.4602 220.502 88.2924C205.017 93.7847 188.964 96.9081 172.738 99.2109C153.442 101.949 133.993 103.478 114.506 103.79C91.1468 104.161 67.9334 102.97 45.1169 97.5831C36.0094 95.5616 27.2626 92.1655 19.1771 87.5116C13.839 84.5746 9.1557 80.5802 5.41318 75.7725C-0.54238 67.7259 -1.13794 59.1763 3.25594 50.2827C5.82447 45.3918 9.29572 41.0315 13.4863 37.4319C24.2989 27.5721 37.0438 20.9681 50.5431 15.7272C68.1451 8.8849 86.4883 5.1395 105.175 2.83669C129.045 0.0992292 153.151 0.134761 177.013 2.94256C197.672 5.23215 218.04 9.01724 237.588 16.3889C240.089 17.3418 242.498 18.5197 244.933 19.6446C246.627 20.4387 247.725 21.6695 246.997 23.615C246.455 25.1105 244.814 25.5605 242.63 24.5811C230.322 18.9961 217.233 16.1904 204.117 13.4376C188.761 10.3438 173.2 8.36665 157.558 7.52174C129.914 5.70776 102.154 8.06792 75.2124 14.5228C60.6177 17.8788 46.5758 23.2977 33.5102 30.6161C26.6595 34.3329 20.4123 39.0673 14.9818 44.658C12.9433 46.8071 11.1336 49.1622 9.58207 51.6855C4.87056 59.5336 5.61172 67.2494 11.9246 73.7608C15.2064 77.0494 18.8775 79.925 22.8564 82.3236C31.6176 87.7101 41.3848 90.5291 51.3902 92.5804C70.6068 96.5773 90.0219 97.7419 112.891 97.7022Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="mx-auto block w-fit text-5xl font-black text-slate-800 select-none">100%</span>
                  </div>
                  <h3 className="mt-4 text-center text-lg font-bold text-slate-800">UI Precision</h3>
                  <p className="text-center text-xs font-semibold text-slate-500 mt-2 max-w-[14rem] mx-auto leading-relaxed">
                    Translating design mockups into pixel-perfect responsive layouts.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 2: Modern Frameworks */}
            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-50px" }}
              variants={cardVariants}
              className="col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 flex"
            >
              <Card className="relative overflow-hidden group w-full">
                <CardContent className="pt-8 pb-6 flex flex-col items-center">
                  <div className="relative mx-auto flex aspect-square size-24 rounded-full border border-black/5 bg-slate-50 flex-items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-500">
                    <Code2 className="m-auto size-10 text-primary-color" strokeWidth={1.5} />
                  </div>
                  <div className="relative z-10 mt-6 space-y-2 text-center">
                    <h3 className="text-lg font-bold text-slate-800">React & Web App Craft</h3>
                    <p className="text-xs font-semibold text-slate-500 leading-relaxed max-w-[14rem] mx-auto">
                      Building component-driven interactive architectures with React and Tailwind CSS.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 3: Optimization & Git */}
            <motion.div
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-50px" }}
              variants={cardVariants}
              className="col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 flex"
            >
              <Card className="relative overflow-hidden group w-full">
                <CardContent className="pt-8 pb-6 flex flex-col items-center">
                  <div className="relative mx-auto flex aspect-square size-24 rounded-full border border-black/5 bg-slate-50 flex-items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-500">
                    <Zap className="m-auto size-10 text-primary-color" strokeWidth={1.5} />
                  </div>
                  <div className="relative z-10 mt-6 space-y-2 text-center">
                    <h3 className="text-lg font-bold text-slate-800">Speed & Performance</h3>
                    <p className="text-xs font-semibold text-slate-500 leading-relaxed max-w-[14rem] mx-auto">
                      Optimizing bundle sizes, assets, responsive images, and custom animations.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 4: Python & Programming Logic */}
            <motion.div
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-50px" }}
              variants={cardVariants}
              className="col-span-full overflow-hidden lg:col-span-3 flex"
            >
              <Card className="relative overflow-hidden group w-full">
                <CardContent className="grid pt-6 sm:grid-cols-2 h-full gap-4 items-center">
                  <div className="relative z-10 flex flex-col justify-between h-full space-y-6 lg:space-y-4 py-4">
                    <div className="relative flex aspect-square size-12 rounded-full border border-black/5 bg-slate-50 shadow-inner">
                      <Cpu className="m-auto size-5 text-primary-color" strokeWidth={1.5} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-slate-800">Programming Logic</h3>
                      <p className="text-xs font-semibold text-slate-500 leading-relaxed">
                        Structuring core computer science scripts and procedural algorithms in Python and C.
                      </p>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-black/5 bg-slate-50/50 p-4 py-6 sm:ml-6 flex items-center justify-center">
                    <svg className="w-full text-primary-color/40" viewBox="0 0 386 123" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3 123C3 123 14.3298 94.153 35.1282 88.0957C55.9266 82.0384 65.9333 80.5508 65.9333 80.5508C65.9333 80.5508 80.699 80.5508 92.1777 80.5508C103.656 80.5508 100.887 63.5348 109.06 63.5348C117.233 63.5348 117.217 91.9728 124.78 91.9728C132.343 91.9728 142.264 78.03 153.831 80.5508C165.398 83.0716 186.825 91.9728 193.761 91.9728C200.697 91.9728 206.296 63.5348 214.07 63.5348C221.844 63.5348 238.653 93.7771 244.234 91.9728C249.814 90.1684 258.8 60 266.19 60C272.075 60 284.1 88.057 286.678 88.0957C294.762 88.2171 300.192 72.9284 305.423 72.9284C312.323 72.9284 323.377 65.2437 335.553 63.5348C347.729 61.8259 348.218 82.07 363.639 80.5508C367.875 80.1335 372.949 82.2017 376.437 87.1008C379.446 91.3274 381.054 97.4325 382.521 104.647C383.479 109.364 382.521 123 382.521 123"
                        fill="url(#paint0_linear_0_106)"
                      />
                      <path
                        className="text-primary-color"
                        d="M3 121.077C3 121.077 15.3041 93.6691 36.0195 87.756C56.7349 81.8429 66.6632 80.9723 66.6632 80.9723C66.6632 80.9723 80.0327 80.9723 91.4656 80.9723C102.898 80.9723 100.415 64.2824 108.556 64.2824C116.696 64.2824 117.693 92.1332 125.226 92.1332C132.759 92.1332 142.07 78.5115 153.591 80.9723C165.113 83.433 186.092 92.1332 193 92.1332C199.908 92.1332 205.274 64.2824 213.017 64.2824C220.76 64.2824 237.832 93.8946 243.39 92.1332C248.948 90.3718 257.923 60.5 265.284 60.5C271.145 60.5 283.204 87.7182 285.772 87.756C293.823 87.8746 299.2 73.0802 304.411 73.0802C311.283 73.0802 321.425 65.9506 333.552 64.2824C345.68 62.6141 346.91 82.4553 362.27 80.9723C377.629 79.4892 383 106.605 383 106.605"
                        stroke="currentColor"
                        strokeWidth="3"
                      />
                      <defs>
                        <linearGradient id="paint0_linear_0_106" x1="3" y1="60" x2="3" y2="123" gradientUnits="userSpaceOnUse">
                          <stop className="text-primary-color/20" stopColor="currentColor" />
                          <stop className="text-transparent" offset="1" stopColor="currentColor" stopOpacity="0.05" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 5: SQL & Relational Databases */}
            <motion.div
              custom={4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-50px" }}
              variants={cardVariants}
              className="col-span-full overflow-hidden lg:col-span-3 flex"
            >
              <Card className="relative overflow-hidden group w-full">
                <CardContent className="grid h-full pt-6 sm:grid-cols-2 gap-4 items-center">
                  <div className="relative z-10 flex flex-col justify-between h-full space-y-6 lg:space-y-4 py-4">
                    <div className="relative flex aspect-square size-12 rounded-full border border-black/5 bg-slate-50 shadow-inner">
                      <Database className="m-auto size-5 text-primary-color" strokeWidth={1.5} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-slate-800">SQL & Relational DBs</h3>
                      <p className="text-xs font-semibold text-slate-500 leading-relaxed">
                        Constructing query logic, structuring datasets, and managing relational schemas.
                      </p>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-black/5 bg-slate-50/50 p-4 py-6 sm:ml-6 flex items-center justify-center h-36">
                    <div className="relative flex h-full flex-col justify-center space-y-4 py-2 w-full">
                      <div className="relative flex w-[calc(50%+1.5rem)] items-center justify-end gap-2">
                        <span className="block h-fit rounded border border-black/5 bg-white px-2 py-1 text-[10px] font-bold shadow-sm text-slate-700">MySQL</span>
                        <div className="size-6 rounded-full bg-primary-color/10 flex items-center justify-center">
                          <Database className="size-3 text-primary-color" />
                        </div>
                      </div>
                      <div className="relative ml-[calc(50%-1.25rem)] flex items-center gap-2">
                        <div className="size-7 rounded-full bg-primary-color/10 flex items-center justify-center">
                          <Code2 className="size-4 text-primary-color" />
                        </div>
                        <span className="block h-fit rounded border border-black/5 bg-white px-2 py-1 text-[10px] font-bold shadow-sm text-slate-700">SQL Server</span>
                      </div>
                      <div className="relative flex w-[calc(50%+1.5rem)] items-center justify-end gap-2">
                        <span className="block h-fit rounded border border-black/5 bg-white px-2 py-1 text-[10px] font-bold shadow-sm text-slate-700">SQLite</span>
                        <div className="size-6 rounded-full bg-primary-color/10 flex items-center justify-center">
                          <Database className="size-3 text-primary-color" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
