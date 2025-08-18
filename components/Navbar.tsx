"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { site } from "../site.config";

type NavLink = { label: string; href: string };
type NavParent = NavLink & { children: { label: string; href: string; description?: string }[] };
type NavItem = NavLink | NavParent;
function hasChildren(item: NavItem): item is NavParent { return (item as NavParent).children !== undefined; }

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, []);

  // Keyboard escape
  useEffect(() => {
    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenDropdown(null);
    };
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(d => d === label ? null : label);
  };

  return (
  <header className="backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50" ref={navRef}>
      <div className="bg-[#90b4d8] px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center" aria-label="Home">
            <span className="relative h-22 w-[250px]">
              <Image src="/logos/logo_nobackground.png" alt="CAPS mark" fill className="object-cover" />
            </span>
          </Link>
        </div>
  <nav className="hidden md:flex gap-1.5 text-sm">
      {site.nav.map(item => (
            <div key={item.label} className="relative">
        {hasChildren(item) ? (
                <>
                  <button
                    type="button"
                    className={`inline-flex items-center gap-1 px-3 py-2 rounded-md font-medium transition-colors ${openDropdown===item.label ? 'bg-neutral-900 text-white shadow-sm' : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/70'}`}
                    aria-haspopup="true"
                    aria-expanded={openDropdown === item.label}
                    onClick={() => toggleDropdown(item.label)}
                  >
                    {item.label}
                    <span className={`transition-transform ${openDropdown===item.label ? 'rotate-180' : ''}`}>▾</span>
                  </button>
                  {openDropdown === item.label && (
                    <div
                      role="menu"
                      className="absolute left-0 top-full mt-2 w-72 rounded-xl border border-neutral-200/80 bg-white/90 backdrop-blur-md shadow-[0_4px_24px_-6px_rgba(0,0,0,0.25)] p-2 animate-in fade-in"
                    >
                      <div className="flex flex-col divide-y divide-neutral-100">
                        {item.children.map(child => (
                          <Link
                            key={child.href}
                            href={child.href}
                            role="menuitem"
                            className="group flex flex-col gap-1 rounded-md px-3 py-3 hover:bg-[var(--grey-50)] focus:bg-[var(--grey-50)]"
                            onClick={() => setOpenDropdown(null)}
                          >
                            <span className="text-[13px] font-medium text-neutral-800 tracking-tight">{child.label}</span>
                            {child.description && <span className="text-[11px] text-neutral-500 leading-snug group-hover:text-neutral-700">{child.description}</span>}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="inline-flex items-center px-3 py-2 rounded-md font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/70 transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <button
          className="md:hidden inline-flex items-center justify-center rounded p-2 hover:bg-neutral-100/70"
          aria-label="Toggle navigation"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="text-2xl">☰</span>
          <span className="sr-only">Menu</span>
        </button>
      </div>
      {mobileOpen && (
  <div className="md:hidden border-t border-neutral-200 px-4 pb-6 pt-2 space-y-1 bg-white/95 backdrop-blur">
      {site.nav.map(item => (
            <div key={item.label}>
        {hasChildren(item) ? (
                <details className="group" onClick={e => e.preventDefault()} open={false}>
                  <summary className="flex cursor-pointer items-center justify-between py-2 text-sm font-medium text-neutral-700 group-open:text-neutral-900">
                    <span>{item.label}</span>
                    <span>▾</span>
                  </summary>
                  <div className="pl-3 border-l border-neutral-200 space-y-1">
                    {item.children.map(child => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-1.5 text-[13px] text-neutral-600 hover:text-neutral-900"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link
                  href={item.href}
                  className="block py-2 text-sm font-medium text-neutral-700 hover:text-neutral-900"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
