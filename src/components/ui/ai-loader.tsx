"use client";

import * as React from "react";
import LoaderGrid from "@/components/ui/loader-grid";

interface LoaderProps {
  size?: number; 
  progress?: number;
}

export const AiLoader: React.FC<LoaderProps> = ({ size = 180, progress = 0 }) => {
  const text = `Loading ${Math.round(progress)}%`;
  const letters = text.split("");

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-[#eef1f6] via-[#e2e8f0] to-[#cbd5e1]">
      <div className="flex flex-col items-center gap-8">
        {/* Custom Loader Grid */}
        <LoaderGrid />

        {/* Loading Percentage Text */}
        <div className="flex gap-0.5 justify-center items-center font-inter select-none">
          {letters.map((letter, index) => (
            <span
              key={index}
              className="inline-block text-slate-800 opacity-40 animate-loaderLetter text-sm md:text-base font-bold tracking-wider"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </div>
      </div>
      
      <p className="mt-8 text-neutral-500 text-xs font-mono tracking-widest uppercase animate-pulse">
        Preloading Initial Frames
      </p>
    </div>
  );
};
export default AiLoader;
