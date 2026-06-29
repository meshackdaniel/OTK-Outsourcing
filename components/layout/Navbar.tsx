"use client";

import Link from"next/link";
import { Button } from"@/components/ui/button";
import {
 NavigationMenu,
 NavigationMenuContent,
 NavigationMenuItem,
 NavigationMenuLink,
 NavigationMenuList,
 NavigationMenuTrigger,
} from"@/components/ui/navigation-menu";
import {
 Sheet,
 SheetContent,
 SheetHeader,
 SheetTitle,
 SheetTrigger,
} from"@/components/ui/sheet";
import { Menu, ChevronDown } from"lucide-react";
import { useState } from"react";
import Image from"next/image";

export function Navbar() {
 const [mobileOpen, setMobileOpen] = useState(false);

 return (
 <header className="sticky top-0 bg-white z-50 border-b border-gray-100">
 <div className="container mx-auto px-4 lg:px-8">
 <div className="flex h-20 items-center justify-between">
 {/* Logo */}
 <Link href="/"className="flex items-center gap-3 group shrink-0">
 <Image
 src="/logo.png"
 width={100}
 height={40}
 className="object-contain"
 alt="OTK Logo"
 />
 </Link>

 {/* Desktop Navigation */}
 <NavigationMenu className="hidden lg:flex mx-auto">
 <NavigationMenuList className="gap-2">
 
 {/* For Employers Mega Menu */}
 <NavigationMenuItem>
 <NavigationMenuTrigger className="text-[15px] text-gray-800 bg-transparent font-medium hover:bg-gray-50/50">
 For Employers
 </NavigationMenuTrigger>
 <NavigationMenuContent>
 <div className="w-[1000px] p-8 bg-white grid grid-cols-12 gap-8 rounded-2xl border border-gray-100">
 <div className="col-span-9 grid grid-cols-3 gap-8">
 {/* OUR SERVICES */}
 <div>
 <h4 className="text-xs font-black text-gray-400 mb-6 tracking-wider">OUR SERVICES</h4>
 <div className="space-y-6">
 <Link href="/services/direct-placement"className="block group">
 <h5 className="font-black text-gray-900 group-hover:text-[#222364] transition text-sm mb-1">Direct Placement</h5>
 <p className="text-xs text-gray-500 leading-relaxed">Permanent hiring for core team roles</p>
 </Link>
 <Link href="/services/contract"className="block group">
 <h5 className="font-black text-gray-900 group-hover:text-[#222364] transition text-sm mb-1">Contract & Freelance</h5>
 <p className="text-xs text-gray-500 leading-relaxed">Flexible talent for project-based roles</p>
 </Link>
 <Link href="/services/dedicated-teams"className="block group">
 <h5 className="font-black text-gray-900 group-hover:text-[#222364] transition text-sm mb-1">Dedicated Teams</h5>
 <p className="text-xs text-gray-500 leading-relaxed">Fully managed, outsourced remote departments</p>
 </Link>
 </div>
 </div>

 {/* INDUSTRY EXPERTISE */}
 <div>
 <h4 className="text-xs font-black text-gray-400 mb-6 tracking-wider">INDUSTRY EXPERTISE</h4>
 <div className="space-y-6">
 <Link href="/industries/tech"className="block group">
 <h5 className="font-black text-gray-900 group-hover:text-[#222364] transition text-sm mb-1">Tech & Development</h5>
 <p className="text-xs text-gray-500 leading-relaxed">UI/UX designers, developers, QA testers.</p>
 </Link>
 <Link href="/industries/customer-experience"className="block group">
 <h5 className="font-black text-gray-900 group-hover:text-[#222364] transition text-sm mb-1">Customer Experience</h5>
 <p className="text-xs text-gray-500 leading-relaxed">Support agents, Virtual assistants, account managers.</p>
 </Link>
 <Link href="/industries/operations"className="block group">
 <h5 className="font-black text-gray-900 group-hover:text-[#222364] transition text-sm mb-1">Operations & Finance</h5>
 <p className="text-xs text-gray-500 leading-relaxed">Bookkeepers, data analyst, HR specialist.</p>
 </Link>
 </div>
 </div>

 {/* RESOURCE & VALUE */}
 <div>
 <h4 className="text-xs font-black text-gray-400 mb-6 tracking-wider">RESOURCE & VALUE</h4>
 <div className="space-y-6">
 <Link href="/how-it-works"className="block group">
 <h5 className="font-black text-gray-900 group-hover:text-[#222364] transition text-sm mb-1">Our Vetting Process</h5>
 <p className="text-xs text-gray-500 leading-relaxed">We help you the most experienced industry experts.</p>
 </Link>
 <Link href="/pricing"className="block group">
 <h5 className="font-black text-gray-900 group-hover:text-[#222364] transition text-sm mb-1">Pricing</h5>
 <p className="text-xs text-gray-500 leading-relaxed">We offer the best pricing in the business</p>
 </Link>
 </div>
 </div>
 </div>

 {/* Right CTA Area */}
 <div className="col-span-3 bg-gray-50/50 rounded-xl p-6 text-center border border-gray-100 flex flex-col items-center justify-center">
 <div className="w-full h-32 relative mb-4 rounded-lg overflow-hidden bg-gray-100">
 {/* Placeholder for the keyboard/chair image */}
 <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
 CTA Image
 </div>
 </div>
 <h5 className="font-black text-gray-900 text-sm mb-2">Need Talent Fast?</h5>
 <p className="text-xs text-gray-500 mb-6">Post your hiring requirements today for quick matching</p>
 <Link href="/employer/jobs/create">
 <Button className="w-full bg-[#222364] hover:bg-[#1a1a4b] text-white text-xs h-9 rounded-lg">
 Post a Job
 </Button>
 </Link>
 </div>

 {/* Bottom Footer Area inside Dropdown */}
 <div className="col-span-12 mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
 <p className="text-sm text-gray-600">We're helping thousands of workers find flexible jobs, fair pay, and career growth.</p>
 <div className="flex items-center gap-3">
 <Link href="/signup">
 <Button variant="outline"className="border-[#222364] text-[#222364] hover:bg-gray-50 px-6 h-10 rounded-xl font-semibold">
 Find Work
 </Button>
 </Link>
 <Link href="/employer/jobs/create">
 <Button className="bg-[#222364] text-white hover:bg-[#1a1a4b] px-6 h-10 rounded-xl font-semibold">
 I am Hiring
 </Button>
 </Link>
 </div>
 </div>
 </div>
 </NavigationMenuContent>
 </NavigationMenuItem>

 {/* For Talents Dropdown */}
 <NavigationMenuItem>
 <NavigationMenuTrigger className="text-[15px] text-gray-800 bg-transparent font-medium hover:bg-gray-50/50">
 For Talents
 </NavigationMenuTrigger>
 <NavigationMenuContent>
 <div className="w-[1000px] p-8 bg-white grid grid-cols-12 gap-8 rounded-2xl border border-gray-100">
 <div className="col-span-9 grid grid-cols-3 gap-8">
 {/* FIND WORK */}
 <div>
 <h4 className="text-xs font-black text-gray-400 mb-6 tracking-wider">FIND WORK</h4>
 <div className="space-y-6">
 <Link href="/signup"className="block group">
 <h5 className="font-black text-gray-900 group-hover:text-[#222364] transition text-sm mb-1">Browse Jobs</h5>
 <p className="text-xs text-gray-500 leading-relaxed">Explore available opportunities tailored to you</p>
 </Link>
 <Link href="/signup"className="block group">
 <h5 className="font-black text-gray-900 group-hover:text-[#222364] transition text-sm mb-1">Build Profile</h5>
 <p className="text-xs text-gray-500 leading-relaxed">Showcase your skills to top employers</p>
 </Link>
 <Link href="/signup"className="block group">
 <h5 className="font-black text-gray-900 group-hover:text-[#222364] transition text-sm mb-1">Wallet & Payments</h5>
 <p className="text-xs text-gray-500 leading-relaxed">Secure, automated payments directly to you</p>
 </Link>
 </div>
 </div>

 {/* CAREER GROWTH */}
 <div>
 <h4 className="text-xs font-black text-gray-400 mb-6 tracking-wider">CAREER GROWTH</h4>
 <div className="space-y-6">
 <Link href="/signup"className="block group">
 <h5 className="font-black text-gray-900 group-hover:text-[#222364] transition text-sm mb-1">Certifications</h5>
 <p className="text-xs text-gray-500 leading-relaxed">Verify your expertise and earn more</p>
 </Link>
 <Link href="/signup"className="block group">
 <h5 className="font-black text-gray-900 group-hover:text-[#222364] transition text-sm mb-1">Talent Community</h5>
 <p className="text-xs text-gray-500 leading-relaxed">Connect with other professionals</p>
 </Link>
 </div>
 </div>

 {/* RESOURCES */}
 <div>
 <h4 className="text-xs font-black text-gray-400 mb-6 tracking-wider">RESOURCES</h4>
 <div className="space-y-6">
 <Link href="/how-it-works"className="block group">
 <h5 className="font-black text-gray-900 group-hover:text-[#222364] transition text-sm mb-1">How It Works</h5>
 <p className="text-xs text-gray-500 leading-relaxed">Learn our vetting and matching process</p>
 </Link>
 <Link href="/faq"className="block group">
 <h5 className="font-black text-gray-900 group-hover:text-[#222364] transition text-sm mb-1">Help & FAQ</h5>
 <p className="text-xs text-gray-500 leading-relaxed">Get answers to common questions</p>
 </Link>
 </div>
 </div>
 </div>

 {/* Right CTA Area */}
 <div className="col-span-3 bg-gray-50/50 rounded-xl p-6 text-center border border-gray-100 flex flex-col items-center justify-center">
 <div className="w-full h-32 relative mb-4 rounded-lg overflow-hidden bg-gray-100">
 {/* Placeholder */}
 <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
 CTA Image
 </div>
 </div>
 <h5 className="font-black text-gray-900 text-sm mb-2">Ready to Work?</h5>
 <p className="text-xs text-gray-500 mb-6">Create a free profile and start getting matched with jobs today</p>
 <Link href="/signup">
 <Button className="w-full bg-[#222364] hover:bg-[#1a1a4b] text-white text-xs h-9 rounded-lg">
 Create Profile
 </Button>
 </Link>
 </div>

 {/* Bottom Footer Area inside Dropdown */}
 <div className="col-span-12 mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
 <p className="text-sm text-gray-600">We're helping thousands of workers find flexible jobs, fair pay, and career growth.</p>
 <div className="flex items-center gap-3">
 <Link href="/talent/jobs">
 <Button variant="outline"className="border-[#222364] text-[#222364] hover:bg-gray-50 px-6 h-10 rounded-xl font-semibold">
 Find Work
 </Button>
 </Link>
 <Link href="/employer/jobs/create">
 <Button className="bg-[#222364] text-white hover:bg-[#1a1a4b] px-6 h-10 rounded-xl font-semibold">
 I am Hiring
 </Button>
 </Link>
 </div>
 </div>
 </div>
 </NavigationMenuContent>
 </NavigationMenuItem>

 {/* About */}
 <NavigationMenuItem>
 <NavigationMenuLink asChild>
 <Link href="/about"className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-[15px] font-medium transition-colors hover:bg-gray-50/50 hover:text-gray-900 focus:bg-gray-50/50 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-50/50 data-[state=open]:bg-gray-50/50 text-gray-800">
 About
 </Link>
 </NavigationMenuLink>
 </NavigationMenuItem>

 {/* Why OTK */}
 <NavigationMenuItem>
 <NavigationMenuLink asChild>
 <Link href="/why-otk"className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-[15px] font-medium transition-colors hover:bg-gray-50/50 hover:text-gray-900 focus:bg-gray-50/50 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-50/50 data-[state=open]:bg-gray-50/50 text-gray-800">
 Why OTK
 </Link>
 </NavigationMenuLink>
 </NavigationMenuItem>

 </NavigationMenuList>
 </NavigationMenu>

 {/* Desktop Auth Buttons */}
 <div className="hidden lg:flex items-center gap-4 shrink-0">
 <Link href="/login"className="text-[15px] font-semibold text-gray-800 hover:text-[#222364] transition">
 Log In
 </Link>
 <Link href="/signup">
 <Button className="bg-[#222364] text-white hover:bg-[#1a1a4b] px-6 h-11 rounded-xl font-semibold">
 Create account
 </Button>
 </Link>
 </div>

 {/* Mobile Menu Toggle */}
 <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
 <SheetTrigger asChild>
 <Button variant="ghost"size="icon"className="lg:hidden text-gray-700 hover:bg-gray-50">
 <Menu className="h-6 w-6"/>
 <span className="sr-only">Open menu</span>
 </Button>
 </SheetTrigger>
 <SheetContent side="left"className="w-80 p-0 overflow-y-auto bg-white border-r-0">
 <SheetHeader className="p-6 border-b border-gray-100">
 <SheetTitle className="flex items-center gap-3">
 <Image
 src="/logo.png"
 width={100}
 height={40}
 alt="logo"
 className="object-contain"
 />
 </SheetTitle>
 </SheetHeader>

 <nav className="flex-1 py-6 px-6 space-y-6">
 {/* Mobile For Employers */}
 <div>
 <p className="font-bold text-gray-900 mb-3 text-sm tracking-wide">For Employers</p>
 <ul className="space-y-3 pl-2">
 <li><Link href="/services/direct-placement"onClick={() => setMobileOpen(false)} className="block text-sm text-gray-600 hover:text-[#222364] transition">Direct Placement</Link></li>
 <li><Link href="/services/contract"onClick={() => setMobileOpen(false)} className="block text-sm text-gray-600 hover:text-[#222364] transition">Contract & Freelance</Link></li>
 <li><Link href="/services/dedicated-teams"onClick={() => setMobileOpen(false)} className="block text-sm text-gray-600 hover:text-[#222364] transition">Dedicated Teams</Link></li>
 <li><Link href="/pricing"onClick={() => setMobileOpen(false)} className="block text-sm text-gray-600 hover:text-[#222364] transition">Pricing</Link></li>
 </ul>
 </div>
 
 {/* Mobile For Talents */}
 <div>
 <p className="font-bold text-gray-900 mb-3 text-sm tracking-wide">For Talents</p>
 <ul className="space-y-3 pl-2">
 <li><Link href="/signup"onClick={() => setMobileOpen(false)} className="block text-sm text-gray-600 hover:text-[#222364] transition">Find Jobs</Link></li>
 <li><Link href="/how-it-works"onClick={() => setMobileOpen(false)} className="block text-sm text-gray-600 hover:text-[#222364] transition">How It Works</Link></li>
 </ul>
 </div>

 {/* Mobile Simple Links */}
 <div className="pt-2">
 <Link href="/about"onClick={() => setMobileOpen(false)} className="block py-2 font-bold text-gray-900 text-sm hover:text-[#222364] transition">About</Link>
 <Link href="/why-otk"onClick={() => setMobileOpen(false)} className="block py-2 font-bold text-gray-900 text-sm hover:text-[#222364] transition">Why OTK</Link>
 </div>
 </nav>

 <div className="border-t border-gray-100 p-6 space-y-4 bg-gray-50/50">
 <Link href="/login">
 <Button variant="outline"className="w-full h-12 rounded-xl font-semibold border-gray-200">
 Log In
 </Button>
 </Link>
 <Link href="/signup">
 <Button className="w-full bg-[#222364] hover:bg-[#1a1a4b] text-white h-12 rounded-xl font-semibold mt-3">
 Create account
 </Button>
 </Link>
 </div>
 </SheetContent>
 </Sheet>
 </div>
 </div>
 </header>
 );
}
