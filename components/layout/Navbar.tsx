// components/layout/StylishNav.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navItems = [
    {
      label: "For Employers",
      dropdown: ["Post a Job", "Hire Talents", "Pricing & SLAs"],
    },
    {
      label: "For Talents",
      dropdown: ["Find Jobs", "Browse Jobs", "How it Works"],
    },
    { label: "Resources", href: "#" },
    { label: "Why OTK", href: "#" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-yellow-400 rounded-xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
            </div>
            <span className="text-2xl lg:text-3xl font-black tracking-tighter bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Labr
            </span>
          </Link>

          {/* Desktop Navigation with NavigationMenu */}
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList className="gap-6">
              {navItems.map((item, idx) => {
                if (item.dropdown)
                  return (
                    <>
                      {/* For Talents */}
                      <NavigationMenuItem key={idx}>
                        <NavigationMenuTrigger className="text-sm font-medium">
                          {item.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid gap-3 p-6 w-64 bg-white rounded-lg shadow-xl">
                            {item.dropdown.map(
                              (item) => (
                                <li key={item}>
                                  <NavigationMenuLink asChild>
                                    <a
                                      href="#"
                                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                                    >
                                      <div className="text-sm font-medium leading-none">
                                        {item}
                                      </div>
                                    </a>
                                  </NavigationMenuLink>
                                </li>
                              )
                            )}
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </>
                      );
                  if (!item.dropdown) {
                      return (
                        <>
                          {/* Simple Links */}
                          <NavigationMenuItem key={idx}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={item.href}
                                className="text-sm font-medium text-gray-700 hover:text-primary transition"
                              >
                                {item.label}
                              </Link>
                            </NavigationMenuLink>
                          </NavigationMenuItem>
                        </>
                      );
                  }
              })}

              
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" size="sm" className="font-medium">
              Log In
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold shadow-lg"
            >
              Create account
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 p-0">
              <SheetHeader className="p-6 border-b">
                <SheetTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl" />
                  <span className="text-2xl font-black">Labr</span>
                </SheetTitle>
              </SheetHeader>

              <nav className="flex-1 py-8 px-6 space-y-8">
                {[
                  {
                    title: "For Employers",
                    items: ["Post a Job", "Hire Talents", "Pricing & SLAs"],
                  },
                  {
                    title: "For Talents",
                    items: ["Find Jobs", "Browse Jobs", "How it Works"],
                  },
                  { title: "Resources", href: "#" },
                  { title: "Why OTK", href: "#" },
                ].map((section) => (
                  <div key={section.title}>
                    {"items" in section ? (
                      <>
                        <p className="font-semibold mb-3">{section.title}</p>
                        <ul className="space-y-2">
                          {section.items?.map((item) => (
                            <li key={item}>
                              <Link
                                href="#"
                                onClick={() => setMobileOpen(false)}
                                className="block py-2 text-muted-foreground hover:text-primary transition"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <Link
                        href={section.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-3 font-medium hover:text-primary transition"
                      >
                        {section.title}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              <div className="border-t p-6 space-y-3">
                <Button variant="outline" className="w-full" size="lg">
                  Log In
                </Button>
                <Button className="w-full" size="lg">
                  Create account
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
