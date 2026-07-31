import React, { useState } from 'react';
import { Sparkles, Sliders } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  aspectRatio?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'OEM GLOSS / UNPROTECTED',
  afterLabel = 'SATIN STEALTH PPF /// Z LAB',
  aspectRatio = 'aspect-[16/9]'
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging && e.buttons !== 1) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  return (
    <div className="relative group select-none overflow-hidden rounded-sm border border-[#1A1A1A]/20 bg-stone-100 shadow-sm">
      {/* Container aspect ratio */}
      <div 
        className={`relative w-full ${aspectRatio} overflow-hidden cursor-ew-resize`}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* After Image (Background layer) */}
        <img 
          src={afterImage} 
          alt={afterLabel}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Before Image (Clipped overlay) */}
        <div 
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img 
            src={beforeImage} 
            alt={beforeLabel}
            className="absolute inset-y-0 left-0 max-w-none h-full object-cover object-center"
            style={{ width: '100%', minWidth: '100%', height: '100%' }}
          />
        </div>

        {/* Divider Bar */}
        <div 
          className="absolute inset-y-0 w-0.5 bg-[#1A1A1A] shadow-md cursor-ew-resize"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 bg-[#1A1A1A] border-2 border-[#F8F7F4] rounded-full flex items-center justify-center text-[#F8F7F4] shadow-md">
            <Sliders className="w-4 h-4" />
          </div>
        </div>

        {/* Labels Overlay */}
        <div className="absolute top-4 left-4 pointer-events-none">
          <span className="px-3 py-1 bg-[#F8F7F4]/90 backdrop-blur-md border border-[#1A1A1A]/20 text-[#1A1A1A] font-mono-tech text-[10px] tracking-wider uppercase rounded-xs font-semibold">
            {beforeLabel}
          </span>
        </div>
        <div className="absolute top-4 right-4 pointer-events-none">
          <span className="px-3 py-1 bg-[#1A1A1A] text-[#F8F7F4] font-mono-tech text-[10px] tracking-wider uppercase font-bold rounded-xs shadow-sm flex items-center space-x-1">
            <Sparkles className="w-3 h-3 text-[#F8F7F4]" />
            <span>{afterLabel}</span>
          </span>
        </div>

        {/* Hint text bottom */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
          <span className="px-3 py-1 bg-[#F8F7F4]/90 backdrop-blur-md text-[#1A1A1A] font-mono-tech text-[10px] uppercase tracking-widest rounded-full border border-[#1A1A1A]/20">
            DRAG TO COMPARE FINISHES
          </span>
        </div>
      </div>
    </div>
  );
};
