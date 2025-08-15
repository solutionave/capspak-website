"use client";
import Link from "next/link";
import { useState } from "react";
import { site } from "../site.config";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="border-b border-neutral-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="font-semibold text-lg tracking-tight">
            {site.shortName}
          </Link>
        </div>
        <nav className="hidden md:flex gap-6 text-sm">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-neutral-900 text-neutral-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          className="md:hidden inline-flex items-center justify-center rounded p-2 hover:bg-neutral-100"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          <span className="i-mdi-menu text-2xl" />
          <span className="sr-only">Menu</span>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-neutral-200 px-4 pb-4 space-y-2">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2 text-sm font-medium text-neutral-700 hover:text-neutral-900"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
