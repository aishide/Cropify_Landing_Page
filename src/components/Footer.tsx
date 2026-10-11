"use client";

import React from "react";
import { Sprout, HelpCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#FFFFFF] dark:bg-[#05070A] border-t border-slate-150 dark:border-slate-900 py-16 relative overflow-hidden bg-dot-pattern transition-colors duration-500">
      <div className="absolute bottom-0 left-0 w-full h-[150px] bg-emerald-100/10 dark:bg-emerald-950/10 blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top Info section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 border-b border-slate-150 dark:border-slate-900 pb-12 transition-colors duration-500">
          
          {/* Logo & introduction */}
          <div className="md:col-span-7 space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-emerald-100 dark:bg-emerald-950/40 rounded-xl">
                <Sprout className="w-5 h-5 text-farm-green" />
              </div>
              <span className="font-extrabold text-lg tracking-tight text-[#0F172A] dark:text-[#F8FAFC] font-sans">
                Cropify <span className="text-farm-green">OS</span>
              </span>
            </div>
            <p className="text-slate-505 dark:text-[#94A3B8] text-xs font-semibold max-w-sm leading-relaxed">
              The friendly, easy-to-use Digital Twin platform enabling growers to simulate crops, forecast weather, and scale carbon conservation.
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-5 space-y-3">
            <h4 className="font-sans text-xs font-extrabold text-slate-700 dark:text-[#F8FAFC] uppercase tracking-wider">
              Explore Cropify
            </h4>
            <div className="flex flex-col gap-2 font-sans text-xs font-bold">
              <a href="#scrollytelling" className="text-slate-500 dark:text-[#94A3B8] hover:text-farm-green dark:hover:text-[#34D399] transition-colors">
                Launch Sandbox
              </a>
              <a href="#" className="text-slate-500 dark:text-[#94A3B8] hover:text-farm-green dark:hover:text-[#34D399] transition-colors">
                System Terms
              </a>
              <a href="#" className="text-slate-500 dark:text-[#94A3B8] hover:text-farm-green dark:hover:text-[#34D399] transition-colors">
                Documentation
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-[10px] font-bold text-slate-400 dark:text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Cropify OS. Open-Core Farm License.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-600 dark:hover:text-slate-350 transition-colors flex items-center gap-1">
              <HelpCircle className="w-4 h-4 text-sky-500" />
              Help & Support
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
