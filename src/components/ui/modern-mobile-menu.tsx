"use client";

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Home, User, GraduationCap, Code, Briefcase } from 'lucide-react';

type IconComponentType = React.ElementType<{ className?: string }>;
export interface InteractiveMenuItem {
  label: string;
  icon: IconComponentType;
  href: string;
}

export interface InteractiveMenuProps {
  items?: InteractiveMenuItem[];
  accentColor?: string;
  activeIndex?: number;
  setActiveIndex?: (index: number) => void;
}

const defaultItems: InteractiveMenuItem[] = [
    { label: 'home', icon: Home, href: '#home' },
    { label: 'about', icon: User, href: '#about' },
    { label: 'education', icon: GraduationCap, href: '#education' },
    { label: 'skills', icon: Code, href: '#skills' },
    { label: 'experience', icon: Briefcase, href: '#experience' },
];

const defaultAccentColor = 'var(--component-active-color-default)';

const InteractiveMenu: React.FC<InteractiveMenuProps> = ({ 
  items, 
  accentColor,
  activeIndex: externalActiveIndex,
  setActiveIndex: externalSetActiveIndex 
}) => {

  const finalItems = useMemo(() => {
     const isValid = items && Array.isArray(items) && items.length >= 2 && items.length <= 8;
     if (!isValid) {
        return defaultItems;
     }
     return items;
   }, [items]);

  const [localActiveIndex, setLocalActiveIndex] = useState(0);

  const activeIndex = externalActiveIndex !== undefined ? externalActiveIndex : localActiveIndex;
  const setActiveIndex = externalSetActiveIndex !== undefined ? externalSetActiveIndex : setLocalActiveIndex;

  useEffect(() => {
      if (externalActiveIndex === undefined && activeIndex >= finalItems.length) {
          setLocalActiveIndex(0);
      }
  }, [finalItems, activeIndex, externalActiveIndex]);

  const textRefs = useRef<(HTMLElement | null)[]>([]);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const setLineWidth = () => {
      const activeItemElement = itemRefs.current[activeIndex];
      const activeTextElement = textRefs.current[activeIndex];

      if (activeItemElement && activeTextElement) {
        const textWidth = activeTextElement.offsetWidth;
        activeItemElement.style.setProperty('--lineWidth', `${textWidth}px`);
      }
    };

    setLineWidth();

    window.addEventListener('resize', setLineWidth);
    return () => {
      window.removeEventListener('resize', setLineWidth);
    };
  }, [activeIndex, finalItems]);

  const handleItemClick = (index: number, e: React.MouseEvent) => {
    setActiveIndex(index);
    const item = finalItems[index];
    if (item && item.href) {
      e.preventDefault();
      const targetElement = document.querySelector(item.href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navStyle = useMemo(() => {
      const activeColor = accentColor || defaultAccentColor;
      return { '--component-active-color': activeColor } as React.CSSProperties;
  }, [accentColor]); 

  return (
    <nav
      className="menu"
      role="navigation"
      style={navStyle}
    >
      {finalItems.map((item, index) => {
        const isActive = index === activeIndex;
        const isTextActive = isActive;
        const IconComponent = item.icon;

        return (
          <button
            key={item.label}
            className={`menu__item ${isActive ? 'active' : ''}`}
            onClick={(e) => handleItemClick(index, e)}
            ref={(el) => { itemRefs.current[index] = el; }}
            style={{ '--lineWidth': '0px' } as React.CSSProperties} 
          >
            <div className="menu__icon">
              <IconComponent className="icon" />
            </div>
            <strong
              className={`menu__text ${isTextActive ? 'active' : ''}`}
              ref={(el) => { textRefs.current[index] = el; }}
            >
              {item.label}
            </strong>
          </button>
        );
      })}
    </nav>
  );
};

export { InteractiveMenu };
