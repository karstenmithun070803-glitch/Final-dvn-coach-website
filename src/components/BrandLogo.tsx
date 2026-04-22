import React from 'react';

export default function BrandLogo() {
  return (
    <a 
      href="#home" 
      className="inline-flex items-center gap-3 sm:gap-4 group transition-all"
    >
      <img 
        src="https://res.cloudinary.com/dxufff4iw/image/upload/q_auto/f_auto/v1776156067/WhatsApp_Image_2026-04-13_at_15.38.30_drtfms.png" 
        alt="DVN DURGA INDUSTRIES" 
        className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
        referrerPolicy="no-referrer"
      />
      
      {/* Vertical Separator Line - 20% White */}
      <div className="w-[1px] h-9 bg-white/20" />

      <div className="flex flex-col">
        <span className="text-sm sm:text-base font-black text-white tracking-[0.05em] uppercase leading-none">
          DURGA INDUSTRIES
        </span>
        <span className="text-[10px] sm:text-[11px] font-medium text-amber-burnt tracking-[0.4em] uppercase leading-none mt-2">
          KARUR
        </span>
      </div>
    </a>
  );
}
