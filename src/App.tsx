/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export default function App() {
  const navLinks = ["Get Started", "Developers", "Features", "Resources"];

  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden font-sans">
      {/* Fullscreen Video Background */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4"
            type="video/mp4"
          />
        </video>
        {/* 50% Black Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navbar */}
        <nav className="flex items-center justify-between px-6 lg:px-[120px] py-[20px] w-full">
          {/* Left Side: Logo & Links */}
          <div className="flex items-center gap-[30px]">
            {/* Custom Brand Logo */}
            <div className="w-[187px] h-[25px] flex items-center gap-2.5">
              <div className="flex flex-col gap-1">
                <div className="w-5 h-[2px] bg-white rounded-full" />
                <div className="w-5 h-[2px] bg-white/40 rounded-full" />
                <div className="w-3 h-[2px] bg-white rounded-full" />
              </div>
              <span className="text-white text-[20px] font-bold tracking-[0.2em] leading-none uppercase">
                AJS
              </span>
            </div>

            {/* Nav Links (Hidden on Mobile) */}
            <div className="hidden md:flex items-center gap-[30px]">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="flex items-center gap-[14px] text-white text-[14px] font-medium opacity-90 hover:opacity-100 transition-opacity"
                >
                  {link}
                  <ChevronDown size={14} strokeWidth={2.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: Join Waitlist Button */}
          <div className="hidden sm:block">
            <PillButton variant="dark" label="Join Waitlist" />
          </div>
        </nav>

        {/* Hero Content */}
        <main className="flex-grow flex flex-col items-center justify-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center gap-[40px] pt-[200px] lg:pt-[280px] pb-[102px]"
          >
            {/* Early Access Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
              <div className="w-1 h-1 rounded-full bg-white" />
              <span className="text-[13px] font-medium">
                <span className="text-white/60">Early access available from</span>{" "}
                <span className="text-white">May 1, 2026</span>
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-[613px] text-[36px] lg:text-[56px] font-medium leading-[1.28] tracking-tight text-gradient">
              Web3 at the Speed of Experience
            </h1>

            {/* Subtitle */}
            <p className="max-w-[680px] text-[15px] font-normal leading-relaxed text-white/70">
              Powering seamless experiences and real-time connections, AJS is the base for creators who move with purpose, leveraging resilience, speed, and scale to shape the future.
            </p>

            {/* CTA Button */}
            <PillButton variant="light" label="Join Waitlist" />
          </motion.div>
        </main>
      </div>
    </div>
  );
}

interface PillButtonProps {
  label: string;
  variant: "dark" | "light";
}

function PillButton({ label, variant }: PillButtonProps) {
  const isDark = variant === "dark";

  return (
    <button className="group relative p-[0.6px] rounded-full bg-white inline-flex items-center justify-center overflow-hidden transition-transform active:scale-95">
      {/* Light Streak / Glow Effect */}
      <div className="absolute top-[-10px] left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="w-1/2 h-[20px] light-streak blur-md" />
      </div>

      <div
        className={`
          flex items-center justify-center rounded-full px-[29px] py-[11px] h-full w-full
          text-[14px] font-medium transition-colors duration-300 relative
          ${
            isDark
              ? "bg-black text-white hover:bg-zinc-900"
              : "bg-white text-black hover:bg-zinc-100"
          }
        `}
      >
        {label}
        {/* Subtle top edge glow streak */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      </div>
    </button>
  );
}

