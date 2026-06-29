import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ReadyToTransformCTA } from "@/components/layout/ReadyToTransformCTA";
import { Button } from "@/components/ui/button";
import PartnersMarquee from "@/components/layout/PartnersMarquee";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

export default function ContractFreelancePage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        {/* 1. Typography-Led Hero Section */}
        <section className="pt-24 lg:pt-32 pb-16 px-4 lg:px-8 max-w-7xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-black tracking-tight leading-[1.1] mb-8 text-[#222364]">
              Flexible Talent for <br />
              <span className="text-[#222364]">Project Roles.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto font-medium mb-12">
              Scale your workforce up or down based on seasonal demands or specific project requirements. Access expert freelancers instantly.
            </p>
          </FadeIn>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/employer/jobs/create">
              <Button className="bg-[#222364] hover:bg-[#1a1a4b] text-white h-14 px-10 rounded-full font-bold text-lg">
                Find Freelancers
              </Button>
            </Link>
          </div>
        </section>

        {/* Huge Hero Image */}
        <section className="px-4 lg:px-8 max-w-7xl mx-auto mb-24">
          <div className="w-full h-[500px] md:h-[700px] bg-gray-100 rounded-[2rem] overflow-hidden relative">
            <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2850&q=80" alt="Remote Workers" className="w-full h-full object-cover" />
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
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-black text-[#222364] leading-tight mb-8">
              "Agility is the new competitive advantage. Hire the exact skills you need, precisely when you need them."
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl text-gray-500 font-medium">
              Don't let hiring delays slow down your roadmap. Our contract talent is ready to jump in and start contributing immediately.
            </p>
          </FadeIn>
        </section>

        {/* 3. Staggered Content Sections (Z-Pattern Layout) */}
        <section className="py-24 px-4 lg:px-8 max-w-7xl mx-auto space-y-32">
          {/* Row 1: Image Left, Text Right */}
          <FadeIn className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 h-[400px] md:h-[600px] bg-gray-100 rounded-[2rem] overflow-hidden">
               <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1000&q=80" alt="Agile Scaling" className="w-full h-full object-cover" />
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Agile Scaling</h3>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                Ramp up your team for major product launches or busy seasons, and seamlessly scale down when the work is done. You only pay for the time and deliverables you need.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-4 text-lg font-bold text-gray-900">
                  <span className="w-8 h-8 rounded-full bg-gray-100 text-[#222364] flex items-center justify-center shrink-0">1</span>
                  Flexible engagement terms
                </li>
                <li className="flex items-center gap-4 text-lg font-bold text-gray-900">
                  <span className="w-8 h-8 rounded-full bg-gray-100 text-[#222364] flex items-center justify-center shrink-0">2</span>
                  Easy scaling up or down
                </li>
                <li className="flex items-center gap-4 text-lg font-bold text-gray-900">
                  <span className="w-8 h-8 rounded-full bg-gray-100 text-[#222364] flex items-center justify-center shrink-0">3</span>
                  Access specialized skills for one-off projects
                </li>
              </ul>
              <Link href="/employer/jobs/create" className="inline-flex items-center gap-2 text-[#222364] font-bold text-lg hover:underline group">
                Post a project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeIn>

          {/* Row 2: Text Left, Image Right */}
          <FadeIn className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="w-full lg:w-1/2 h-[400px] md:h-[600px] bg-gray-100 rounded-[2rem] overflow-hidden">
               <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1000&q=80" alt="Seamless Administration" className="w-full h-full object-cover" />
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Seamless Administration</h3>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                Forget the headaches of managing freelancer payments, compliance, and onboarding across different countries. We handle all the backend administration so you can focus on the deliverables.
              </p>
              <div className="bg-[#F5F8F5] p-8 rounded-3xl">
                <h4 className="text-xl font-black text-[#222364] mb-4">Zero Overhead</h4>
                <p className="text-[#222364]">
                  Our platform automates timesheets, invoicing, and cross-border payments. You get one simple, consolidated invoice while we ensure local tax compliance for your remote contractors.
                </p>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* 4. Stats/Impact Section */}
        <section className="py-24 bg-[#222364] text-white my-24">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
              <div className="pt-8 md:pt-0">
                <div className="text-6xl md:text-7xl font-black text-[#f2c060] mb-4">24h</div>
                <div className="text-xl font-bold text-white mb-2">Fast Deployment</div>
                <p className="text-gray-500">Freelancers ready to start working tomorrow.</p>
              </div>
              <div className="pt-8 md:pt-0">
                <div className="text-6xl md:text-7xl font-black text-[#f2c060] mb-4">100+</div>
                <div className="text-xl font-bold text-white mb-2">Skills Covered</div>
                <p className="text-gray-500">From React developers to fractional CFOs.</p>
              </div>
              <div className="pt-8 md:pt-0">
                <div className="text-6xl md:text-7xl font-black text-[#f2c060] mb-4">0%</div>
                <div className="text-xl font-bold text-white mb-2">Compliance Risk</div>
                <p className="text-gray-500">We handle all the legal complexities for you.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Bottom CTA */}
        <FadeIn className="max-w-7xl mx-auto px-4 lg:px-8 mb-16">
          <ReadyToTransformCTA 
            title="Need Talent Fast?"
            subtitle="Post your contract or freelance project and get matched within 48 hours."
            buttonText="Post Your Requirements"
            buttonLink="/employer/jobs/create"
            className="px-0 py-0"
          />
        </FadeIn>
      </main>
      <Footer />
    </div>
  );
}
