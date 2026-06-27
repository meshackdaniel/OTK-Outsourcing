import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ReadyToTransformCTA } from "@/components/layout/ReadyToTransformCTA";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Code2, Database, Smartphone } from "lucide-react";
import PartnersMarquee from "@/components/layout/PartnersMarquee";
import Link from "next/link";

export default function TechIndustryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gray-900 pt-24 pb-32 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
          <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-gray-300 text-sm font-semibold mb-6">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  Industry Expertise
                </div>
                <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
                  Top-Tier <span className="text-blue-500">Tech & Development</span> Talent
                </h1>
                <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
                  Hire world-class UI/UX designers, developers, and QA testers. Scale your engineering team rapidly with pre-vetted experts.
                </p>
                <div className="flex gap-4">
                  <Link href="/employer/jobs/create">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white h-12 px-8 rounded-xl font-bold border-0">
                      Hire Developers
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 h-12 px-8 rounded-xl font-bold bg-transparent">
                      Talk to Sales
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block relative">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
                <div className="bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-sm relative">
                   <div className="flex items-center gap-4 mb-8">
                     <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-inner">
                       <Code2 className="w-8 h-8 text-white" />
                     </div>
                     <div>
                       <h3 className="font-bold text-xl text-white">Full-Stack Experts</h3>
                       <p className="text-gray-400 text-sm">React, Node.js, Python</p>
                     </div>
                   </div>
                   <div className="space-y-4">
                     {[
                       "Frontend & Backend Engineers",
                       "Mobile App Developers (iOS/Android)",
                       "UI/UX Product Designers",
                       "QA Automation Testers"
                     ].map((item, idx) => (
                       <div key={idx} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                         <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                         <span className="text-sm font-medium text-white">{item}</span>
                       </div>
                     ))}
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Marquee */}
        <section className="py-12 border-b border-gray-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center mb-6">
            <p className="text-sm font-bold text-gray-400 tracking-wider">OUR TALENT POWERS INNOVATIVE TEAMS</p>
          </div>
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <PartnersMarquee />
          </div>
        </section>

        {/* Roles Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">Specialized Tech Roles</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">We provide experienced professionals across the entire software development lifecycle.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-gray-100">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                  <Code2 className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Software Engineering</h3>
                <p className="text-gray-500 leading-relaxed text-sm">From React frontend wizards to scalable Node.js and Python backend architects. We supply talent fluent in modern tech stacks.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-gray-100">
                <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6">
                  <Smartphone className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Product Design (UI/UX)</h3>
                <p className="text-gray-500 leading-relaxed text-sm">Designers who understand user psychology and translate complex requirements into beautiful, intuitive interfaces.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-gray-100">
                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6">
                  <Database className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">QA & Infrastructure</h3>
                <p className="text-gray-500 leading-relaxed text-sm">Ensure your product's reliability with manual testers, automation engineers, and DevOps specialists.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="max-w-7xl mx-auto px-4 lg:px-8 mb-8 mt-24">
          <ReadyToTransformCTA 
            title="Accelerate Your Roadmap"
            subtitle="Hire top tech talent today and ship products faster."
            buttonText="Post a Tech Job"
            buttonLink="/employer/jobs/create"
            className="px-0 py-0"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
