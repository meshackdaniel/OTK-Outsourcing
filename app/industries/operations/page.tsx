import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ReadyToTransformCTA } from "@/components/layout/ReadyToTransformCTA";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Calculator, LineChart, Briefcase } from "lucide-react";
import PartnersMarquee from "@/components/layout/PartnersMarquee";
import Link from "next/link";

export default function OperationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-slate-900 pt-24 pb-32 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
          <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-sm font-semibold mb-6">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  Industry Expertise
                </div>
                <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
                  Streamlined <span className="text-emerald-400">Operations & Finance</span>
                </h1>
                <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed">
                  Keep your back-office running flawlessly with meticulous bookkeepers, data analysts, and HR specialists. Trustworthy talent for your most sensitive tasks.
                </p>
                <div className="flex gap-4">
                  <Link href="/employer/jobs/create">
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white h-12 px-8 rounded-xl font-bold border-0">
                      Hire Specialists
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 h-12 px-8 rounded-xl font-bold bg-transparent">
                      Talk to Sales
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block relative">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
                <div className="bg-slate-800/50 rounded-3xl p-8 border border-slate-700 backdrop-blur-sm relative">
                   <div className="flex items-center gap-4 mb-8">
                     <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-inner">
                       <Calculator className="w-8 h-8 text-white" />
                     </div>
                     <div>
                       <h3 className="font-bold text-xl text-white">Accuracy & Compliance</h3>
                       <p className="text-emerald-200 text-sm">Zero compromises</p>
                     </div>
                   </div>
                   <div className="space-y-4">
                     {[
                       "Strict data privacy protocols",
                       "Certified accounting professionals",
                       "Advanced analytics & reporting",
                       "HR & recruitment specialists"
                     ].map((item, idx) => (
                       <div key={idx} className="flex items-center gap-3 bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                         <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                         <span className="text-sm font-medium text-slate-200">{item}</span>
                       </div>
                     ))}
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Marquee */}
        <section className="py-12 border-b border-slate-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center mb-6">
            <p className="text-sm font-bold text-slate-400 tracking-wider">SUPPORTING OPERATIONS FOR</p>
          </div>
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <PartnersMarquee />
          </div>
        </section>

        {/* Roles Section */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">Core Operational Roles</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">Build a solid foundation for your business with reliable back-office professionals.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-slate-200">
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
                  <Calculator className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Finance & Bookkeeping</h3>
                <p className="text-slate-500 leading-relaxed text-sm">Certified accountants and bookkeepers to manage invoicing, payroll, reconciliation, and financial reporting with precision.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-slate-200">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                  <LineChart className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Data Analytics</h3>
                <p className="text-slate-500 leading-relaxed text-sm">Data experts who can clean, organize, and visualize your company data to help you make informed strategic decisions.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-slate-200">
                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6">
                  <Briefcase className="w-7 h-7 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">HR & Recruitment</h3>
                <p className="text-slate-500 leading-relaxed text-sm">Experienced HR specialists to handle sourcing, interviewing, onboarding, and employee engagement initiatives.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="max-w-7xl mx-auto px-4 lg:px-8 mb-8 mt-24">
          <ReadyToTransformCTA 
            title="Strengthen Your Back Office"
            subtitle="Hire vetted operations and finance experts to keep your business running smoothly."
            buttonText="Post an Operations Job"
            buttonLink="/employer/jobs/create"
            className="px-0 py-0"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
