import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ReadyToTransformCTA } from "@/components/layout/ReadyToTransformCTA";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Users, Network, BarChart3 } from "lucide-react";
import PartnersMarquee from "@/components/layout/PartnersMarquee";
import Link from "next/link";

export default function DedicatedTeamsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-[#222364] pt-24 pb-32 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
          <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-200 text-sm font-semibold mb-6">
                  <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                  Our Services
                </div>
                <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
                  Fully Managed <span className="text-purple-400">Remote Departments</span>
                </h1>
                <p className="text-lg text-blue-100 mb-8 max-w-xl leading-relaxed">
                  Build complete operational pods designed specifically for your goals. We handle the recruitment, HR, infrastructure, and daily management.
                </p>
                <div className="flex gap-4">
                  <Link href="/employer/jobs/create">
                    <Button className="bg-white text-[#222364] hover:bg-gray-100 h-12 px-8 rounded-xl font-bold">
                      Build Your Team
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
                <div className="absolute inset-0 bg-gradient-to-r from-[#222364] to-transparent z-10"></div>
                <div className="bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-sm relative">
                   <div className="flex items-center gap-4 mb-8">
                     <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center shadow-inner">
                       <Users className="w-8 h-8 text-white" />
                     </div>
                     <div>
                       <h3 className="font-bold text-xl text-white">End-to-End Management</h3>
                       <p className="text-blue-200 text-sm">We handle everything</p>
                     </div>
                   </div>
                   <div className="space-y-4">
                     {[
                       "Dedicated account managers",
                       "Customized workflow integration",
                       "Performance tracking & reporting",
                       "IT infrastructure & security"
                     ].map((item, idx) => (
                       <div key={idx} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                         <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0" />
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
            <p className="text-sm font-bold text-gray-400 tracking-wider">TRUSTED BY INNOVATIVE COMPANIES</p>
          </div>
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <PartnersMarquee />
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">Why Build Dedicated Teams?</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">Get all the benefits of an in-house department with zero operational headaches and significantly reduced overhead.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-gray-100">
                <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6">
                  <BarChart3 className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cost Efficiency</h3>
                <p className="text-gray-500 leading-relaxed text-sm">Save up to 60% on overhead costs compared to local hiring, without compromising on talent quality or output.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-gray-100">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                  <Network className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Seamless Integration</h3>
                <p className="text-gray-500 leading-relaxed text-sm">Your dedicated team operates as a direct extension of your local staff, aligning perfectly with your company culture and processes.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-gray-100">
                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Turnkey Management</h3>
                <p className="text-gray-500 leading-relaxed text-sm">We manage HR, payroll, benefits, IT support, and day-to-day operations so you can focus on high-level strategy.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="max-w-7xl mx-auto px-4 lg:px-8 mb-8 mt-24">
          <ReadyToTransformCTA 
            title="Ready to Build Your Offshore Team?"
            subtitle="Let us assemble a fully managed, dedicated team to scale your operations."
            buttonText="Talk to an Expert"
            buttonLink="/contact"
            className="px-0 py-0"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
