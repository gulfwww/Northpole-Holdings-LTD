"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { navLinks } from "@/lib/site-data"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/85 backdrop-blur-md shadow-[0_1px_20px_rgba(11,26,46,0.06)]"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-md bg-white p-1.5 shadow-sm border">
            <Image
              src="/images/logo-0.png"
              alt="North Pole Holdings logo"
              width={40}
              height={40}
              className="h-full w-full object-contain"
            />
          </span>
          <span className="flex flex-col leading-none">
            <span
              className={cn(
                "font-serif text-base font-semibold tracking-wide transition-colors sm:text-lg",
                scrolled ? "text-navy" : "text-white",
              )}
            >
              North Pole Holdings
            </span>
            <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.28em] text-gold">
              Limited
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn("text-sm font-medium tracking-wide transition-colors" , scrolled ? "text-navy/70  hover:text-navy" : "text-white hover:text-white/70")}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-navy px-6 py-2.5 text-sm font-medium tracking-wide text-primary-foreground shadow-sm transition-all hover:bg-navy-light hover:shadow-md"
          >
            Get in Touch
          </a>
        </nav>

        <button
          className={cn("rounded-lg p-2 transition-colors hover:bg-muted lg:hidden" , scrolled ? "text-navy" : "text-white" )}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-border/70 bg-background/95 backdrop-blur-md transition-[max-height,opacity] duration-300 lg:hidden",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col gap-1 px-5 py-4" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-medium text-navy/80 transition-colors hover:bg-muted hover:text-navy"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-navy px-6 py-3 text-center text-sm font-medium text-primary-foreground"
          >
            Get in Touch
          </a>
        </nav>
      </div>
    </header>
  )
}
