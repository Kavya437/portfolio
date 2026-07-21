"use client";

import { Moon } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto mt-6 flex h-14 w-[92%] max-w-6xl items-center justify-between rounded-full border border-white/5 bg-black/ px-6 backdrop-blur-xl">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-sm font-semibold text-black">
            KP
          </div>

          <span className="text-[15px] font-medium tracking-tight text-white">
            Kavya Rupini
          </span>
        </a>

        {/* Links */}
        <div className="flex items-center gap-8 text-[15px]">
          <a className="text-neutral-400 transition hover:text-white" href="#">
            About
          </a>

          <a className="text-neutral-400 transition hover:text-white" href="#">
            Projects
          </a>

          <a className="text-neutral-400 transition hover:text-white" href="#">
            Skills
          </a>

          <a className="text-neutral-400 transition hover:text-white" href="#">
            Contact
          </a>
        </div>

        {/* Theme Button */}
        <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-neutral-300 transition hover:border-white/20 hover:bg-white/5 hover:text-white">
          <Moon size={18} />
        </button>
      </nav>
    </header>
  );
}