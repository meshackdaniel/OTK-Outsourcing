import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ReadyToTransformCTA } from "@/components/layout/ReadyToTransformCTA";
import { Button } from "@/components/ui/button";
import { CheckCircle2, MessageSquareText, Headphones, Users } from "lucide-react";
import PartnersMarquee from "@/components/layout/PartnersMarquee";
import Link from "next/link";

export default function CustomerExperiencePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-amber-50 pt-24 pb-32 text-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
          <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm font-semibold mb-6">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  Industry Expertise
                </div>
                <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
                  Elevate Your <span className="text-amber-600">Customer Experience</span>
                </h1>
                <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
                  Provide world-class support with our vetted customer success agents, virtual assistants, and account managers. 24/7 coverage across all channels.
                </p>
                <div className="flex gap-4">
                  <Link href="/employer/jobs/create">
                    <Button className="bg-[#222364] hover:bg-[#1a1a4b] text-white h-12 px-8 rounded-xl font-bold">
                      Find Support Staff
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100 h-12 px-8 rounded-xl font-bold bg-transparent">
                      Talk to Sales
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block relative">
                <div className="bg-white rounded-3xl p-8 border border-amber-100 shadow-xl relative">
                   <div className="flex items-center gap-4 mb-8">
                     <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center shadow-inner">
                       <Headphones className="w-8 h-8 text-amber-600" />
                     </div>
                     <div>
                       <h3 className="font-bold text-xl text-gray-900">24/7 Coverage</h3>
                       <p className="text-gray-500 text-sm">Always Online</p>
                     </div>
                   </div>
                   <div className="space-y-4">
                     {[
                       "Omnichannel Support (Email, Chat, Voice)",
                       "Multilingual Capabilities",
                       "High CSAT & low response times",
                       "Scalable teams for peak seasons"
                     ].map((item, idx) => (
                       <div key={idx} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                         <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                         <span className="text-sm font-medium text-gray-700">{item}</span>
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
            <p className="text-sm font-bold text-gray-400 tracking-wider">COMPANIES THAT TRUST OUR SUPPORT STAFF</p>
          </div>
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <PartnersMarquee />
          </div>
        </section>

        {/* Roles Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">Customer-Centric Roles</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">Build a loyal customer base with empathetic, articulate, and proactive support staff.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-gray-100">
                <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center mb-6">
                  <MessageSquareText className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Support Agents</h3>
                <p className="text-gray-500 leading-relaxed text-sm">Empathetic problem-solvers handling live chat, email tickets, and phone calls to resolve issues quickly and efficiently.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-gray-100">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Account Managers</h3>
                <p className="text-gray-500 leading-relaxed text-sm">Dedicated relationship builders who drive customer success, onboarding, retention, and upsell opportunities.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-gray-100">
                <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6">
                  <Headphones className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Virtual Assistants</h3>
                <p className="text-gray-500 leading-relaxed text-sm">Highly organized professionals assisting with scheduling, data entry, CRM management, and administrative tasks.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="max-w-7xl mx-auto px-4 lg:px-8 mb-8 mt-24">
          <ReadyToTransformCTA 
            title="Improve Your CSAT Score Today"
            subtitle="Hire vetted support professionals ready to deliver exceptional service."
            buttonText="Post a Support Job"
            buttonLink="/employer/jobs/create"
            className="px-0 py-0"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
