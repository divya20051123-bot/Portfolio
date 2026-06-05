"use client";

import React from "react";
import { motion, useInView } from "framer-motion";

interface TimelineContentProps {
  children: React.ReactNode;
  as?: "div" | "h1" | "h2" | "span" | "button" | "p";
  animationNum: number;
  timelineRef: React.RefObject<HTMLElement | null>;
  customVariants: any;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export function TimelineContent({
  children,
  as = "div",
  animationNum,
  timelineRef,
  customVariants,
  className,
  style,
  onClick,
}: TimelineContentProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const MotionComponent = motion[as];

  return (
    <MotionComponent
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={customVariants}
      custom={animationNum}
      className={className}
      style={style}
      onClick={onClick}
    >
      {children}
    </MotionComponent>
  );
}
