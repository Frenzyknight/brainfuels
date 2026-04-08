"use client";

import Link from "next/link";
import { Menu, User, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Shop All", href: "/shop" },
  { label: "The Science", href: "/science" },
  { label: "Our Ethos", href: "#" },
  { label: "Herbal Index", href: "#" },
  { label: "Find Us", href: "#" },
];

export function Navbar() {
  return (
    <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm border-b border-transparent">
      <div className="flex items-center justify-between px-6 lg:px-10 py-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-extrabold tracking-tight">
          BRAINFUEL
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium hover:opacity-70 transition-opacity"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button className="hidden md:flex items-center gap-1 text-sm hover:opacity-70 transition-opacity">
            <User className="size-4" />
            Account
          </button>
          <button className="text-sm hover:opacity-70 transition-opacity">
            <ShoppingBag className="size-4" />
          </button>
          <span className="text-xs">(0)</span>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="md:hidden" />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-white p-6">
              <SheetHeader>
                <SheetTitle className="text-xl font-extrabold">
                  BRAINFUEL
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 mt-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-lg font-medium hover:opacity-70 transition-opacity"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
