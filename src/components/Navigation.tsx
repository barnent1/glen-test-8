"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="flex justify-between items-center p-6 max-w-5xl mx-auto w-full">
      <div className="text-2xl font-bold text-coffee-dark">
        Brew & Bean
      </div>
      <div className="flex gap-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`transition-colors duration-200 ${
              pathname === link.href
                ? "text-coffee-medium font-semibold underline underline-offset-4"
                : "text-coffee-dark hover:text-coffee-medium"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
