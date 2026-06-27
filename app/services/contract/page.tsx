import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ReadyToTransformCTA } from "@/components/layout/ReadyToTransformCTA";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, Briefcase, TrendingUp } from "lucide-react";
import PartnersMarquee from "@/components/layout/PartnersMarquee";
import Link from "next/link";

export default function ContractFreelancePage() {
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
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
                  Our Services
                </div>
                <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
                  Flexible Talent for <span className="text-green-400">Projects</span>
                </h1>
                <p className="text-lg text-blue-100 mb-8 max-w-xl leading-relaxed">
                  Scale your workforce up or down based on seasonal demands or specific project requirements. Access expert freelancers instantly.
                </p>
                <div className="flex gap-4">
                  <Link href="/employer/jobs/create">
                    <Button className="bg-white text-[#222364] hover:bg-gray-100 h-12 px-8 rounded-xl font-bold">
                      Post a Project
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
                     <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center shadow-inner">
                       <Clock className="w-8 h-8 text-white" />
                     </div>
                     <div>
                       <h3 className="font-bold text-xl text-white">Hire in 48 Hours</h3>
                       <p className="text-blue-200 text-sm">Quick & Efficient</p>
                     </div>
                   </div>
                   <div className="space-y-4">
                     {[
                       "Pre-vetted freelance experts",
                       "Flexible engagement terms",
                       "Automated payment handling",
                       "Easy scaling up or down"
                     ].map((item, idx) => (
                       <div key={idx} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                         <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
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
              <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">Why Choose Contract Talent?</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">Get the exact skills you need, precisely when you need them, without the overhead of full-time employment.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-gray-100">
                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Agile Scaling</h3>
                <p className="text-gray-500 leading-relaxed text-sm">Ramp up your team for major product launches or busy seasons, and seamlessly scale down when the work is done.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-gray-100">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                  <Clock className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Speed to Market</h3>
                <p className="text-gray-500 leading-relaxed text-sm">Don't let hiring delays slow down your roadmap. Our contract talent is ready to jump in and start contributing immediately.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-gray-100">
                <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6">
                  <Briefcase className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Niche Expertise</h3>
                <p className="text-gray-500 leading-relaxed text-sm">Access specialized skills for one-off projects without committing to a full-time hire for a temporary need.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="max-w-7xl mx-auto px-4 lg:px-8 mb-8 mt-24">
          <ReadyToTransformCTA 
            title="Need Talent Fast?"
            subtitle="Post your contract or freelance project and get matched within 48 hours."
            buttonText="Post Your Requirements"
            buttonLink="/employer/jobs/create"
            className="px-0 py-0"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
