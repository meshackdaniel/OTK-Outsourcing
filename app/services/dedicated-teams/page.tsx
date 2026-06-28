import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ReadyToTransformCTA } from "@/components/layout/ReadyToTransformCTA";
import { Button } from "@/components/ui/button";
import PartnersMarquee from "@/components/layout/PartnersMarquee";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function DedicatedTeamsPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        {/* 1. Typography-Led Hero Section */}
        <section className="pt-24 lg:pt-32 pb-16 px-4 lg:px-8 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-black tracking-tight leading-[1.1] mb-8 text-[#222364]">
            Fully Managed <br />
            <span className="text-purple-600">Remote Departments.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto font-medium mb-12">
            Build complete operational pods designed specifically for your goals. We handle the recruitment, HR, infrastructure, and daily management.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/employer/jobs/create">
              <Button className="bg-[#222364] hover:bg-[#1a1a4b] text-white h-14 px-10 rounded-full font-bold text-lg">
                Build Your Team
              </Button>
            </Link>
          </div>
        </section>

        {/* Huge Hero Image */}
        <section className="px-4 lg:px-8 max-w-7xl mx-auto mb-24">
          <div className="w-full h-[500px] md:h-[700px] bg-gray-100 rounded-[2rem] overflow-hidden relative">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2850&q=80" alt="Remote Teams" className="w-full h-full object-cover" />
          </div>
        </section>

        {/* Partners Marquee */}
        <section className="py-12 border-y border-gray-100 bg-white mb-24">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center mb-8">
            <p className="text-sm font-bold text-gray-400 tracking-widest uppercase">Trusted by forward-thinking companies</p>
          </div>
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <PartnersMarquee />
          </div>
        </section>

        {/* 2. The "Mission/Statement" Block */}
        <section className="py-24 px-4 lg:px-8 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black text-[#222364] leading-tight mb-8">
            "We build dedicated offshore departments that operate as a seamless extension of your local office."
          </h2>
          <p className="text-xl text-gray-500 font-medium">
            Get all the benefits of an in-house department with zero operational headaches and significantly reduced overhead.
          </p>
        </section>

        {/* 3. Staggered Content Sections (Z-Pattern Layout) */}
        <section className="py-24 px-4 lg:px-8 max-w-7xl mx-auto space-y-32">
          {/* Row 1: Image Left, Text Right */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 h-[400px] md:h-[600px] bg-gray-100 rounded-[2rem] overflow-hidden">
               <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1000&q=80" alt="Dedicated Management" className="w-full h-full object-cover" />
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Turnkey Management</h3>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                We manage HR, payroll, benefits, IT support, and day-to-day operations so you can focus on high-level strategy and scaling your business.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-4 text-lg font-bold text-gray-900">
                  <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">1</span>
                  Dedicated account managers
                </li>
                <li className="flex items-center gap-4 text-lg font-bold text-gray-900">
                  <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">2</span>
                  Performance tracking & reporting
                </li>
                <li className="flex items-center gap-4 text-lg font-bold text-gray-900">
                  <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">3</span>
                  Enterprise-grade IT security
                </li>
              </ul>
              <Link href="/employer/jobs/create" className="inline-flex items-center gap-2 text-purple-600 font-bold text-lg hover:underline group">
                Build your team <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Row 2: Text Left, Image Right */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="w-full lg:w-1/2 h-[400px] md:h-[600px] bg-gray-100 rounded-[2rem] overflow-hidden">
               <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&w=1000&q=80" alt="Cost Efficiency" className="w-full h-full object-cover" />
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Unmatched Cost Efficiency</h3>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                Save significantly on overhead costs compared to local hiring, without compromising on talent quality, culture, or output. Reinvest those savings directly into your product.
              </p>
              <div className="bg-[#F8F5FB] p-8 rounded-3xl">
                <h4 className="text-xl font-bold text-purple-900 mb-4">Transparent Pricing</h4>
                <p className="text-purple-800">
                  No hidden fees, no complex legal structures. You pay a simple, flat monthly rate per team member that covers salary, benefits, office space, and IT infrastructure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Stats/Impact Section */}
        <section className="py-24 bg-purple-900 text-white my-24">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
              <div className="pt-8 md:pt-0">
                <div className="text-6xl md:text-7xl font-black text-purple-400 mb-4">60%</div>
                <div className="text-xl font-bold text-white mb-2">Cost Savings</div>
                <p className="text-purple-200">Average reduction in operational overhead.</p>
              </div>
              <div className="pt-8 md:pt-0">
                <div className="text-6xl md:text-7xl font-black text-purple-400 mb-4">98%</div>
                <div className="text-xl font-bold text-white mb-2">Retention Rate</div>
                <p className="text-purple-200">We keep your dedicated team happy and engaged.</p>
              </div>
              <div className="pt-8 md:pt-0">
                <div className="text-6xl md:text-7xl font-black text-purple-400 mb-4">24/7</div>
                <div className="text-xl font-bold text-white mb-2">IT & HR Support</div>
                <p className="text-purple-200">Round-the-clock infrastructure monitoring.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Bottom CTA */}
        <div className="max-w-7xl mx-auto px-4 lg:px-8 mb-16">
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
