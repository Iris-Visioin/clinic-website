"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "الرئيسية" },
    { href: "#smile-pro", label: "السمايل برو" },
    { href: "#cataract", label: "الماء الابيض" },
    { href: "#about", label: "من نحن" },
    { href: "#contact", label: "تواصل معنا" },
  ];

  return (
    <nav className="w-full top-0 z-50 bg-blue-950 dark:bg-gray-950 shadow-lg transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-4 gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 select-none shrink-0">
          
          <span className="text-white dark:text-blue-200 text-xl font-extrabold tracking-wider hidden sm:inline">
            آيرس للعيون والليزر
          </span>
        </Link>

        
        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-row-reverse gap-2 items-center shrink-0">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`px-3 py-1 rounded-md transition 
                  ${
                    (link.href === "/" && pathname === "/") ||
                    (link.href !== "/" && pathname === link.href)
                      ? "bg-blue-700 text-white shadow-lg"
                      : "text-gray-300 hover:text-blue-400 hover:bg-gray-700 dark:hover:bg-gray-800"
                  }
                `}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition shrink-0"
          onClick={() => setMenuOpen((m) => !m)}
          aria-label="فتح القائمة"
        >
          <span className="sr-only">قائمة</span>
          <svg
            className={`w-7 h-7 text-white transition-all ${menuOpen ? "rotate-90" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* خلفية لإغلاق القائمة عند الضغط خارجها */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* قائمة الموبايل */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-gray-900 dark:bg-gray-950 text-white flex flex-col pt-8 z-50 shadow-2xl transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ direction: "rtl" }}
      >
        {/* زر إغلاق أعلى القائمة */}
        <button
          className="absolute top-3 left-3 p-2 rounded-full hover:bg-gray-800 transition"
          onClick={() => setMenuOpen(false)}
          aria-label="إغلاق القائمة"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {/* روابط القائمة */}
        <ul className="flex flex-col gap-2 mt-12">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block px-6 py-3 rounded-md transition text-lg
                  ${
                    (link.href === "/" && pathname === "/") ||
                    (link.href !== "/" && pathname === link.href)
                      ? "bg-blue-700 text-white shadow"
                      : "text-gray-300 hover:text-blue-400 hover:bg-gray-800"
                  }
                `}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
