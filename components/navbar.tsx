"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@wrksz/themes/client";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-black/70 backdrop-blur-xl">
      <nav className="mx-auto mt-6 flex h-14 w-[92%] max-w-6xl items-center justify-between rounded-full border border-white/5 bg-black/ px-6 backdrop-blur-xl">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-sm font-semibold text-black">
            KP
          </div>

          <span className="hidden text-[15px] font-medium tracking-tight text-white sm:inline">
            Kavya Rupini
          </span>
        </a>

        {/* Links */}
        <div className="flex items-center gap-4 text-[14px]">
          <a className="text-neutral-400 transition hover:text-white" href="#about">
            About
          </a>

          <a className="text-neutral-400 transition hover:text-white" href="#projects">
            Projects
          </a>

          <a className="text-neutral-400 transition hover:text-white" href="#skills">
            Skills
          </a>

          <a className="text-neutral-400 transition hover:text-white" href="#contact">
            Contact
          </a>
        </div>

        {/* Theme Button */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-neutral-300 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </nav>
    </header>
  );
}