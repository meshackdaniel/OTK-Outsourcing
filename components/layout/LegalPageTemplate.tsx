"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Building2, ChevronRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type LegalSection = {
  id: string;
  title: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
};

interface LegalPageTemplateProps {
  title: string;
  description: string;
  effectiveDate: string;
  sections: LegalSection[];
}

export function LegalPageTemplate({
  title,
  description,
  effectiveDate,
  sections,
}: LegalPageTemplateProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || "");

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((s) => document.getElementById(s.id));
      let currentSection = sections[0]?.id;

      for (const el of sectionElements) {
        if (el && window.scrollY >= el.offsetTop - 150) {
          currentSection = el.id;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      <Navbar />

      <main>
        {/* Header */}
        <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-[#f4f7fb] to-[#FDFDFD]">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-black text-[#1a1b3a] mb-6 tracking-tight">
              {title}
            </h1>
            <p className="text-gray-500 text-lg md:text-xl mb-6 max-w-2xl mx-auto">
              {description}
            </p>
            <p className="text-sm text-[#1a1b3a] font-bold bg-dark-yellow px-5 py-2 rounded-full inline-block border border-transparent">
              Effective Date: {effectiveDate}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-7xl mx-auto px-4 lg:px-8 pb-24 flex flex-col md:flex-row gap-12">
          {/* Sidebar */}
          <div className="md:w-1/4 hidden md:block">
            <div className="sticky top-32 space-y-2">
              <h3 className="font-black text-gray-900 mb-6 uppercase tracking-wider text-sm px-4">
                Table of Contents
              </h3>
              <nav className="flex flex-col space-y-1 relative before:absolute before:inset-y-0 before:left-4 before:w-px before:bg-gray-200">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollTo(section.id)}
                    className={cn(
                      "text-left px-8 py-3 text-sm font-semibold transition-all duration-200 relative",
                      activeSection === section.id
                        ? "text-[#1a1b3a]"
                        : "text-gray-500 hover:text-gray-800"
                    )}
                  >
                    {activeSection === section.id && (
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-dark-yellow ring-4 ring-dark-yellow/20" />
                    )}
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="md:w-3/4">
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 space-y-16">
              {sections.map((section) => (
                <div key={section.id} id={section.id} className="scroll-mt-32 group">
                  <div className="flex items-center gap-3 mb-6">
                    {section.icon && (
                      <div className="p-2.5 bg-gray-50 rounded-xl border border-gray-100 text-[#1a1b3a] group-hover:bg-dark-yellow group-hover:border-dark-yellow transition-colors duration-300">
                        {section.icon}
                      </div>
                    )}
                    <h2 className="text-xl md:text-2xl font-black text-gray-900">
                      {section.title}
                    </h2>
                  </div>
                  <div className="prose prose-gray max-w-none text-gray-600 text-sm md:text-base leading-relaxed">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Have Any Question? */}
        <section className="max-w-4xl mx-auto px-4 lg:px-8 pb-24">
          <div className="bg-[#f8f9fc] rounded-3xl p-10 md:p-16 text-center border border-gray-100 transition">
            <div className="w-16 h-16 bg-[#1a1b3a] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Building2 className="w-8 h-8 text-dark-yellow" />
            </div>
            <h2 className="text-3xl font-black text-gray-900 mb-4">
              Have Any Question?
            </h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto text-sm">
              Do you have a question, complaint or need help to understand our legal documents? Feel free to contact us.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1a1b3a] border border-gray-200 rounded-xl font-bold hover:border-gray-300 hover:bg-gray-50 transition"
            >
              Contact support team <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
