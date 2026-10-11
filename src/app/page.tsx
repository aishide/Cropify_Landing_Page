"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import VideoScrubber from "@/components/VideoScrubber";
import Footer from "@/components/Footer";
import type { Language } from "@/lib/translations";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [language, setLanguageState] = useState<Language>("en");

  // Synchronize saved preferences on load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark";
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) {
        setTheme("dark");
        document.documentElement.classList.add("dark");
      }
    }

    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage === "en" || savedLanguage === "hi" || savedLanguage === "mr") {
      setLanguageState(savedLanguage);
      document.documentElement.lang = savedLanguage;
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem("language", newLanguage);
    document.documentElement.lang = newLanguage;
  };

  return (
    <div className="bg-white dark:bg-[#0B0F17] min-h-screen text-[#0F172A] dark:text-[#F8FAFC] relative selection:bg-farm-green/20 selection:text-slate-800 transition-colors duration-500">
      {/* Sticky header navbar with theme actions */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        language={language}
        setLanguage={setLanguage}
      />
      
      <main>
        {/* Full-viewport Video Scrollytelling Scrubber */}
        <VideoScrubber theme={theme} language={language} />
      </main>

      {/* Footer system details */}
      <Footer language={language} />
    </div>
  );
}
