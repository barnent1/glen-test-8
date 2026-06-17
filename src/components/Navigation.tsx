"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto w-full">
      <div className="text-2xl font-bold text-coffee-dark">Bean & Brew</div>
      <ul className="flex gap-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`transition-colors font-medium ${
                pathname === link.href
                  ? "text-coffee-primary underline underline-offset-4"
                  : "text-coffee-medium hover:text-coffee-primary"
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
