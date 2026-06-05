"use client";

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button, type ButtonProps } from '@/components/ui/button';

interface AnimatedFeatureSpotlightProps extends React.HTMLAttributes<HTMLElement> {
  preheaderIcon?: React.ReactNode;
  preheaderText: string;
  heading: React.ReactNode;
  description: string;
  buttonText: string;
  buttonProps?: ButtonProps;
  imageUrl: string;
  imageAlt?: string;
}

const AnimatedFeatureSpotlight = React.forwardRef<HTMLElement, AnimatedFeatureSpotlightProps>(
  (
    {
      className,
      preheaderIcon,
      preheaderText,
      heading,
      description,
      buttonText,
      buttonProps,
      imageUrl,
      imageAlt = 'Feature illustration',
      ...props
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          'w-full max-w-6xl mx-auto p-8 md:p-12 rounded-2xl bg-white/70 backdrop-blur-xl border border-black/5 shadow-xl overflow-hidden',
          className
        )}
        aria-labelledby="feature-spotlight-heading"
        {...props}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Animated Text Content */}
          <div className="flex flex-col space-y-6 text-center md:text-left items-center md:items-start">
            <div
              className="flex items-center space-x-2 text-sm font-semibold text-primary-color tracking-wider uppercase animate-in fade-in slide-in-from-top-4 duration-700"
            >
              {preheaderIcon}
              <span>{preheaderText}</span>
            </div>
            <h2
              id="feature-spotlight-heading"
              className="text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-800 animate-in fade-in slide-in-from-top-4 duration-700 delay-150"
            >
              {heading}
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-medium animate-in fade-in slide-in-from-top-4 duration-700 delay-300">
              {description}
            </p>
            <div className="animate-in fade-in slide-in-from-top-4 duration-700 delay-400">
              <Button 
                size="lg" 
                className="bg-primary-color hover:bg-primary-hover text-white rounded-full font-bold shadow-lg shadow-primary-color/20"
                {...buttonProps}
              >
                {buttonText}
              </Button>
            </div>
          </div>

          {/* Right Column: Animated Visual */}
          <div className="relative w-full min-h-[250px] md:min-h-[320px] flex items-center justify-center animate-in fade-in zoom-in-95 duration-700 delay-200">
            {/* Main Image with float animation */}
            <img
              src={imageUrl}
              alt={imageAlt}
              className="w-full max-w-md object-contain rounded-2xl shadow-lg border border-black/5 animate-smooth-float"
            />
          </div>
        </div>
      </section>
    );
  }
);
AnimatedFeatureSpotlight.displayName = 'AnimatedFeatureSpotlight';

export { AnimatedFeatureSpotlight };
