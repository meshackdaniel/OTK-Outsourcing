import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ReadyToTransformCTA } from "@/components/layout/ReadyToTransformCTA";
import { Button } from "@/components/ui/button";
import PartnersMarquee from "@/components/layout/PartnersMarquee";
import Link from "next/link";
import { ArrowRight, UserPlus, FileCheck, BookOpen, UserSearch, Briefcase, Clock } from "lucide-react";

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        {/* 1. Typography-Led Hero Section */}
        <section className="pt-24 lg:pt-32 pb-16 px-4 lg:px-8 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-black tracking-tight leading-[1.1] mb-8 text-gray-900">
            How OTK <br />
            <span className="text-[#222364]">Works.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto font-medium mb-12">
            We have outlined the standard process to give you a clear view of how OTK recruits, onboards, and manages talent globally.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/employer/jobs/create">
              <Button className="bg-[#222364] hover:bg-[#1a1a4b] text-white h-14 px-10 rounded-full font-bold text-lg">
                Get Started
              </Button>
            </Link>
          </div>
        </section>

        {/* Huge Hero Image */}
        <section className="px-4 lg:px-8 max-w-7xl mx-auto mb-24">
          <div className="w-full h-[500px] md:h-[700px] bg-gray-100 rounded-[2rem] overflow-hidden relative shadow-lg">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2850&q=80" alt="Team Collaboration" className="w-full h-full object-cover" />
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
            "Our platform is designed to connect world-class professionals with organizations seamlessly."
          </h2>
          <p className="text-xl text-gray-500 font-medium">
            From profile creation to daily logging and automated payouts, every step is built for transparency and speed.
          </p>
        </section>

        {/* 3. Staggered Content Sections (Z-Pattern Layout) */}
        <section className="py-24 px-4 lg:px-8 max-w-7xl mx-auto space-y-32">
          
          {/* Step 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 h-[400px] md:h-[600px] bg-gray-100 rounded-[2rem] overflow-hidden">
               <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80" alt="Profile Setup" className="w-full h-full object-cover" />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                 <UserPlus className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-2">Step 01</div>
              <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Account Creation & Setup</h3>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                For talents, simply upload your resume & credentials. Clients can register their business profiles to specify their hiring metrics and expected timeline. It takes under 3 minutes to get verified.
              </p>
              <Link href="/register" className="inline-flex items-center gap-2 text-blue-600 font-bold text-lg hover:underline group">
                Join Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="w-full lg:w-1/2 h-[400px] md:h-[600px] bg-gray-100 rounded-[2rem] overflow-hidden">
               <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80" alt="Screening" className="w-full h-full object-cover" />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                 <FileCheck className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-sm font-bold tracking-widest text-purple-600 uppercase mb-2">Step 02</div>
              <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Screening & Verification</h3>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                Our admin team evaluates every talent application. We cross-verify educational credentials, reference networks, and work history to ensure high professional competency standards.
              </p>
              <div className="bg-purple-50 p-8 rounded-3xl">
                <h4 className="text-xl font-bold text-purple-900 mb-4">Zero Compromises</h4>
                <p className="text-purple-800">
                  We guarantee that every talent entering the marketplace has passed rigorous background and professional checks.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 h-[400px] md:h-[600px] bg-gray-100 rounded-[2rem] overflow-hidden">
               <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80" alt="Skill Assessment" className="w-full h-full object-cover" />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                 <BookOpen className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-sm font-bold tracking-widest text-green-600 uppercase mb-2">Step 03</div>
              <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Skill Assessment & Up-skilling</h3>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                Talents are expected to take standard skills measurements under our E-Learning modules. If a talent falls short in an assessment, they gain access to structured tutorials to quickly boost compliance.
              </p>
              <Link href="/courses" className="inline-flex items-center gap-2 text-green-600 font-bold text-lg hover:underline group">
                View Courses <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="w-full lg:w-1/2 h-[400px] md:h-[600px] bg-gray-100 rounded-[2rem] overflow-hidden">
               <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1000&q=80" alt="Automated Matching" className="w-full h-full object-cover" />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                 <UserSearch className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-2">Step 04</div>
              <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Automated Matching</h3>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                Our predictive algorithm connects vetted talents with the active job vacancies matching their technical skills. Clients receive shortlists to run virtual assessments directly from their dashboards.
              </p>
              <div className="bg-blue-50 p-8 rounded-3xl">
                <h4 className="text-xl font-bold text-blue-900 mb-4">Precision Hiring</h4>
                <p className="text-blue-800">
                  Spend less time scrolling through resumes and more time interviewing candidates perfectly tailored to your needs.
                </p>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 h-[400px] md:h-[600px] bg-gray-100 rounded-[2rem] overflow-hidden">
               <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=80" alt="Offer Acceptance" className="w-full h-full object-cover" />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                 <Briefcase className="w-8 h-8 text-emerald-600" />
              </div>
              <div className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-2">Step 05</div>
              <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Offer Acceptance</h3>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                Client initiates formal offers detailing payout rates and probation metrics. Upon talent acceptance, both parties are securely contracted. The talent's earning wallet unlocks completely.
              </p>
              <Link href="/employer/jobs/create" className="inline-flex items-center gap-2 text-emerald-600 font-bold text-lg hover:underline group">
                Find Talent <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Step 6 */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="w-full lg:w-1/2 h-[400px] md:h-[600px] bg-gray-100 rounded-[2rem] overflow-hidden">
               <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80" alt="Site Deployment" className="w-full h-full object-cover" />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
                 <Clock className="w-8 h-8 text-amber-600" />
              </div>
              <div className="text-sm font-bold tracking-widest text-amber-600 uppercase mb-2">Step 06</div>
              <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Site Deployment & Daily Logging</h3>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                Deployed talent begin capturing work histories via the Time Tracking tool. Supervisors validate daily timesheets which triggers automated split-payment distribution into the respective earning wallets.
              </p>
              <div className="bg-amber-50 p-8 rounded-3xl">
                <h4 className="text-xl font-bold text-amber-900 mb-4">Milestone Driven</h4>
                <p className="text-amber-800">
                  Track your work, hit your goals, and unlock your payments based on agreed deliverables with full transparent pay deductions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Stats/Impact Section */}
        <section className="py-24 bg-[#222364] text-white my-24">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-4 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
              <div className="pt-8 md:pt-0">
                <div className="text-5xl md:text-6xl font-black text-blue-400 mb-4">500+</div>
                <div className="text-lg font-bold text-white mb-2">Active Employers</div>
                <p className="text-blue-200 text-sm">Hiring top talent weekly.</p>
              </div>
              <div className="pt-8 md:pt-0">
                <div className="text-5xl md:text-6xl font-black text-blue-400 mb-4">15k+</div>
                <div className="text-lg font-bold text-white mb-2">Posted Jobs</div>
                <p className="text-blue-200 text-sm">Opportunities across all industries.</p>
              </div>
              <div className="pt-8 md:pt-0">
                <div className="text-5xl md:text-6xl font-black text-blue-400 mb-4">200+</div>
                <div className="text-lg font-bold text-white mb-2">Hiring Companies</div>
                <p className="text-blue-200 text-sm">Global brands trusting OTK.</p>
              </div>
              <div className="pt-8 md:pt-0">
                <div className="text-5xl md:text-6xl font-black text-blue-400 mb-4">2k+</div>
                <div className="text-lg font-bold text-white mb-2">Skilled Talents</div>
                <p className="text-blue-200 text-sm">Pre-vetted and ready to work.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="max-w-7xl mx-auto px-4 lg:px-8 mb-16">
          <ReadyToTransformCTA 
            title="Your Next Job is Just Few Clicks Away."
            subtitle="Find flexible, rewarding work that matches your schedule and skills. Join our community today."
            buttonText="Find Work"
            buttonLink="/talent/jobs"
            className="px-0 py-0"
          />
        </div>

      </main>
      <Footer />
    </div>
  );
}
