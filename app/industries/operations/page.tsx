import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ReadyToTransformCTA } from "@/components/layout/ReadyToTransformCTA";
import { Button } from "@/components/ui/button";
import PartnersMarquee from "@/components/layout/PartnersMarquee";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function OperationsPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      <main>
        {/* 1. Typography-Led Hero Section */}
        <section className="pt-24 lg:pt-32 pb-16 px-4 lg:px-8 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-black tracking-tight leading-[1.1] mb-8 text-slate-900">
            Streamlined <br />
            <span className="text-emerald-600">Operations & Finance.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto font-medium mb-12">
            Keep your back-office running flawlessly with meticulous bookkeepers, data analysts, and HR specialists. Trustworthy talent for your most sensitive tasks.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/employer/jobs/create">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white h-14 px-10 rounded-full font-bold text-lg border-0">
                Hire Specialists
              </Button>
            </Link>
          </div>
        </section>

        {/* Huge Hero Image */}
        <section className="px-4 lg:px-8 max-w-7xl mx-auto mb-24">
          <div className="w-full h-[500px] md:h-[700px] bg-slate-200 rounded-[2rem] overflow-hidden relative shadow-lg">
            <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=2850&q=80" alt="Finance Operations" className="w-full h-full object-cover" />
          </div>
        </section>

        {/* Partners Marquee */}
        <section className="py-12 border-y border-slate-200 bg-white mb-24">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center mb-8">
            <p className="text-sm font-bold text-slate-400 tracking-widest uppercase">Supporting operations for top brands</p>
          </div>
          <div className="max-w-7xl mx-auto px-4 lg:px-8 grayscale opacity-60">
            <PartnersMarquee />
          </div>
        </section>

        {/* 2. The "Mission/Statement" Block */}
        <section className="py-24 px-4 lg:px-8 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-8">
            "Your back-office is the backbone of your business. We provide the expertise to keep it unbreakable."
          </h2>
          <p className="text-xl text-slate-500 font-medium">
            Build a solid foundation for your business with reliable professionals handling compliance, payroll, data, and HR.
          </p>
        </section>

        {/* 3. Staggered Content Sections (Z-Pattern Layout) */}
        <section className="py-24 px-4 lg:px-8 max-w-7xl mx-auto space-y-32">
          {/* Row 1: Image Left, Text Right */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 h-[400px] md:h-[600px] bg-slate-200 rounded-[2rem] overflow-hidden">
               <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80" alt="Data and Finance" className="w-full h-full object-cover" />
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Finance & Data Analytics</h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Certified accountants to manage invoicing, payroll, and reconciliation. Paired with data experts who can clean, organize, and visualize your company data for strategic decisions.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-4 text-lg font-bold text-slate-800">
                  <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">1</span>
                  Strict data privacy protocols
                </li>
                <li className="flex items-center gap-4 text-lg font-bold text-slate-800">
                  <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">2</span>
                  Certified accounting professionals
                </li>
                <li className="flex items-center gap-4 text-lg font-bold text-slate-800">
                  <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">3</span>
                  Advanced analytics & reporting dashboards
                </li>
              </ul>
              <Link href="/employer/jobs/create" className="inline-flex items-center gap-2 text-emerald-600 font-bold text-lg hover:underline group">
                Hire analysts <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Row 2: Text Left, Image Right */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="w-full lg:w-1/2 h-[400px] md:h-[600px] bg-slate-200 rounded-[2rem] overflow-hidden">
               <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80" alt="HR Operations" className="w-full h-full object-cover" />
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">HR & Recruitment</h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Scale your internal team rapidly with experienced HR specialists who handle sourcing, interviewing, onboarding, and employee engagement initiatives.
              </p>
              <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm">
                <h4 className="text-xl font-bold text-slate-900 mb-4">Culture First</h4>
                <p className="text-slate-600">
                  Our HR professionals are trained to deeply understand your company culture, ensuring that every hire they source is a perfect cultural and technical fit for your long-term goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Stats/Impact Section */}
        <section className="py-24 bg-slate-900 text-white my-24">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
              <div className="pt-8 md:pt-0">
                <div className="text-6xl md:text-7xl font-black text-emerald-400 mb-4">100%</div>
                <div className="text-xl font-bold text-white mb-2">Data Compliance</div>
                <p className="text-slate-400">Strict adherence to GDPR, SOC2, and HIPAA where required.</p>
              </div>
              <div className="pt-8 md:pt-0">
                <div className="text-6xl md:text-7xl font-black text-emerald-400 mb-4">0</div>
                <div className="text-xl font-bold text-white mb-2">Errors Tolerated</div>
                <p className="text-slate-400">Meticulous professionals who double-check everything.</p>
              </div>
              <div className="pt-8 md:pt-0">
                <div className="text-6xl md:text-7xl font-black text-emerald-400 mb-4">5x</div>
                <div className="text-xl font-bold text-white mb-2">Faster Reporting</div>
                <p className="text-slate-400">Automate your financial closes and data pipelines.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Bottom CTA */}
        <div className="max-w-7xl mx-auto px-4 lg:px-8 mb-16">
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
