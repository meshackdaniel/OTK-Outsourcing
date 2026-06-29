import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ReadyToTransformCTA } from "@/components/layout/ReadyToTransformCTA";
import { Button } from "@/components/ui/button";
import PartnersMarquee from "@/components/layout/PartnersMarquee";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

export default function DirectPlacementPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        {/* 1. Typography-Led Hero Section */}
        <section className="pt-24 lg:pt-32 pb-16 px-4 lg:px-8 max-w-7xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-black tracking-tight leading-[1.1] mb-8 text-[#222364]">
              Permanent Hiring for <br />
              <span className="text-[#3b3c8f]">Core Roles.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto font-medium mb-12">
              We find, vet, and place top-tier talent directly into your organization. Focus on scaling your business while we handle the sourcing.
            </p>
          </FadeIn>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/employer/jobs/create">
              <Button className="bg-[#222364] hover:bg-[#1a1a4b] text-white h-14 px-10 rounded-full font-bold text-lg">
                Start Hiring Now
              </Button>
            </Link>
          </div>
        </section>

        {/* Huge Hero Image */}
        <section className="px-4 lg:px-8 max-w-7xl mx-auto mb-24">
          <div className="w-full h-[500px] md:h-[700px] bg-gray-100 rounded-[2rem] overflow-hidden relative">
            {/* Placeholder Image using Unsplash */}
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2850&q=80" alt="Team Collaboration" className="w-full h-full object-cover" />
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
              "We believe in connecting the best global talent with the best opportunities, seamlessly."
          
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl text-gray-500 font-medium">
              Skip the endless resume reviewing and let our experts find the perfect match for your team's long-term success.
            </p>
          </FadeIn>
        </section>

        {/* 3. Staggered Content Sections (Z-Pattern Layout) */}
        <section className="py-24 px-4 lg:px-8 max-w-7xl mx-auto space-y-32">
          {/* Row 1: Image Left, Text Right */}
          <FadeIn className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 h-[400px] md:h-[600px] bg-gray-100 rounded-[2rem] overflow-hidden">
               <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=80" alt="Quality Vetting" className="w-full h-full object-cover" />
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Guaranteed Quality</h3>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                Every candidate goes through a rigorous multi-step vetting process. We don't just look at their resume; we evaluate their technical skills, soft skills, and cultural fit to ensure they align with your company's values.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-4 text-lg font-bold text-gray-900">
                  <span className="w-8 h-8 rounded-full bg-gray-100 text-[#222364] flex items-center justify-center shrink-0">1</span>
                  Rigorous skill assessments
                </li>
                <li className="flex items-center gap-4 text-lg font-bold text-gray-900">
                  <span className="w-8 h-8 rounded-full bg-gray-100 text-[#222364] flex items-center justify-center shrink-0">2</span>
                  Cultural fit evaluation
                </li>
                <li className="flex items-center gap-4 text-lg font-bold text-gray-900">
                  <span className="w-8 h-8 rounded-full bg-gray-100 text-[#222364] flex items-center justify-center shrink-0">3</span>
                  Background verification
                </li>
              </ul>
              <Link href="/employer/jobs/create" className="inline-flex items-center gap-2 text-[#222364] font-bold text-lg hover:underline group">
                Get started <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeIn>

          {/* Row 2: Text Left, Image Right */}
          <FadeIn className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="w-full lg:w-1/2 h-[400px] md:h-[600px] bg-gray-100 rounded-[2rem] overflow-hidden">
               <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80" alt="Speed to Hire" className="w-full h-full object-cover" />
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Faster Time-to-Hire</h3>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                Tap into our extensive, pre-vetted talent pool to fill critical roles in a fraction of the traditional hiring time. We focus on aligning candidate career goals with your company vision to ensure high retention rates from day one.
              </p>
              <div className="bg-[#f9fafb] p-8 rounded-3xl">
                <h4 className="text-xl font-black text-[#222364] mb-4">The OTK Advantage</h4>
                <p className="text-gray-600">
                  Our dedicated recruiters work exclusively on your roles, utilizing AI-driven matching and deep industry networks to present you with only the top 1% of candidates.
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
                <div className="text-6xl md:text-7xl font-black text-[#f2c060] mb-4">1%</div>
                <div className="text-xl font-bold text-white mb-2">Top Talent</div>
                <p className="text-gray-500">Only the best candidates pass our rigorous vetting process.</p>
              </div>
              <div className="pt-8 md:pt-0">
                <div className="text-6xl md:text-7xl font-black text-[#f2c060] mb-4">48h</div>
                <div className="text-xl font-bold text-white mb-2">Average Match Time</div>
                <p className="text-gray-500">Get a curated shortlist of candidates in record time.</p>
              </div>
              <div className="pt-8 md:pt-0">
                <div className="text-6xl md:text-7xl font-black text-[#f2c060] mb-4">90</div>
                <div className="text-xl font-bold text-white mb-2">Day Guarantee</div>
                <p className="text-gray-500">We replace any candidate that doesn't work out within 90 days.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Bottom CTA */}
        <FadeIn className="max-w-7xl mx-auto px-4 lg:px-8 mb-16">
          <ReadyToTransformCTA 
            title="Ready to Build Your Core Team?"
            subtitle="Let us find the perfect permanent additions to your organization."
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
