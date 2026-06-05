"use client";

import { cn } from "@/lib/utils";
import { Sparkles, GraduationCap, BookOpen, Award } from "lucide-react";

interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
  iconClassName?: string;
  titleClassName?: string;
}

function DisplayCard({
  className,
  icon = <Sparkles className="size-4 text-blue-300" />,
  title = "Featured",
  description = "Discover amazing content",
  date = "Just now",
  iconClassName = "text-blue-500",
  titleClassName = "text-blue-500",
}: DisplayCardProps) {
  return (
    <div
      className={cn(
        "relative flex min-h-[11.5rem] h-auto w-[22rem] -skew-y-[8deg] select-none flex-col justify-between rounded-xl border border-black/10 bg-white/70 backdrop-blur-md px-5 py-4 pb-5 transition-all duration-700 hover:border-black/20 hover:bg-white hover:-translate-y-2 hover:shadow-xl shadow-md",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <span className={cn("relative inline-flex rounded-full p-2 text-white bg-primary-color", iconClassName)}>
          {icon}
        </span>
        <p className={cn("text-base font-bold text-slate-800", titleClassName)}>{title}</p>
      </div>
      <p className="text-sm text-slate-600 font-medium leading-snug mt-2 line-clamp-3">{description}</p>
      <div className="flex justify-between items-center mt-3 pt-2 border-t border-black/5">
        <p className="text-xs font-semibold text-primary-color">{date}</p>
      </div>
    </div>
  );
}

interface DisplayCardsProps {
  cards?: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  const defaultCards = [
    {
      className: "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      className: "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      className: "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
    },
  ];

  const displayCards = cards || defaultCards;

  return (
    <div className="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700">
      {displayCards.map((cardProps, index) => (
        <DisplayCard key={index} {...cardProps} />
      ))}
    </div>
  );
}
