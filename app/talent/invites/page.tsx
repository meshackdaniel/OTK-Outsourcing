"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Bookmark, Check, TrendingUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function TalentInvites() {
  const [activeTab, setActiveTab] = useState("active");

  const invites = [
    {
      id: "1",
      title: "Lead UX Researcher",
      company: "Nexus Global",
      fitScore: "95% Fit Score",
      priority: true,
      rate: "₦85/hr",
      expires: "Expires in 24 hours",
      desc: "Seeking a strategic UX Researcher to lead our global fintech expansion. You will be responsible for defining user journey frameworks across multiple...",
      skills: ["User Research", "Fintech", "Strategy"],
      status: "active"
    },
    {
      id: "2",
      title: "Backend Architect (Node.js/Go)",
      company: "CloudFlow Systems",
      fitScore: "88% Fit Score",
      priority: false,
      rate: "₦120/hr",
      expires: "Expires in 3 days",
      desc: "We are rebuilding our core microservices architecture to handle 10x current scale. Looking for an expert in distributed systems and high-concurrency...",
      skills: ["Kubernetes", "GoLang", "Scalability"],
      status: "active"
    },
    {
      id: "3",
      title: "Senior UI Designer - Mobile Apps",
      company: "Lumina Tech",
      fitScore: "92% Fit Score",
      priority: false,
      rate: "₦4,500 Fixed",
      expires: "Expires in 2 hours",
      desc: "Immediate need for a visual designer to polish a high-fidelity prototype for a Series A pitch. Must have experience with Material 3 and complex data...",
      skills: ["Figma", "Mobile Design"],
      status: "pending"
    }
  ];

  const filteredInvites = invites.filter(inv => inv.status === activeTab);

  return (
    <DashboardLayout type="talent">
      <div className="space-y-8 max-w-[1200px]">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-[#222364]">Invites & Offers</h1>
            <p className="text-gray-600 mt-1">Manage your active invitations and formal job offers from high-tier enterprise clients.</p>
          </div>
          <Button className="bg-[#f2c060] text-[#222364] hover:bg-[#e0b050] font-bold px-6 py-2.5 h-11 rounded-xl">
            <CheckCircle2 className="w-5 h-5 mr-2" />
            Daily Check-In
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main List */}
          <div className="lg:col-span-2">
            
            {/* Tabs */}
            <div className="flex items-center gap-8 border-b border-gray-200 mb-6">
              <button 
                onClick={() => setActiveTab('active')}
                className={`pb-3 font-bold transition border-b-2 ${activeTab === 'active' ? 'text-[#222364] border-[#222364]' : 'text-gray-500 border-transparent hover:text-gray-800'}`}
              >
                Active Invites (2)
              </button>
              <button 
                onClick={() => setActiveTab('pending')}
                className={`pb-3 font-bold transition border-b-2 ${activeTab === 'pending' ? 'text-[#222364] border-[#222364]' : 'text-gray-500 border-transparent hover:text-gray-800'}`}
              >
                Pending Offers (1)
              </button>
              <button 
                onClick={() => setActiveTab('archived')}
                className={`pb-3 font-bold transition border-b-2 ${activeTab === 'archived' ? 'text-[#222364] border-[#222364]' : 'text-gray-500 border-transparent hover:text-gray-800'}`}
              >
                Archived
              </button>
            </div>

            <div className="space-y-6">
              {filteredInvites.length > 0 ? filteredInvites.map((invite) => (
                <div key={invite.id} className="bg-white rounded-2xl p-6 border border-gray-100 flex flex-col relative overflow-hidden group hover:border-[#222364]/20 transition">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-bold text-gray-900 text-lg">{invite.title}</h3>
                        {invite.priority && (
                          <span className="bg-[#f2c060] text-[#222364] text-[10px] font-black px-2 py-0.5 rounded uppercase">Priority</span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-gray-600 font-medium">{invite.company}</span>
                        <span className="text-gray-300">•</span>
                        <span className="text-green-700 font-bold">{invite.fitScore}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-black text-gray-900">{invite.rate}</p>
                      <p className={`text-xs mt-1 ${invite.expires.includes('hours') ? 'text-red-500 font-bold' : 'text-gray-500'}`}>
                        {invite.expires}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-6 leading-relaxed max-w-[90%]">
                    {invite.desc}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    {invite.skills.map(skill => (
                      <span key={skill} className="px-3 py-1 bg-gray-50 border border-gray-100 text-gray-600 rounded-md text-xs font-semibold">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 mt-auto">
                    <Button variant="outline" size="icon" className="h-10 w-10 rounded-xl border-gray-200 text-gray-500">
                      <Bookmark className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" className="h-10 rounded-xl border-gray-200 text-gray-700 px-6 font-semibold">
                      Decline
                    </Button>
                    <Link href={`/talent/invites/${invite.id}`}>
                      <Button className="h-10 rounded-xl bg-[#222364] text-white hover:bg-[#1a1a4b] px-6 font-bold">
                        View Job
                      </Button>
                    </Link>
                  </div>
                </div>
              )) : (
                <div className="bg-white p-12 rounded-2xl border border-gray-100 text-center">
                  <p className="text-gray-500 font-medium">No items found in this section.</p>
                </div>
              )}
            </div>
          </div>

          {/* Right Sidebar Metrics */}
          <div className="space-y-6">
            
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <div className="bg-[#222364] p-4 text-white">
                <h3 className="font-bold text-sm tracking-wide">Success Metrics</h3>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <p className="text-sm font-semibold text-gray-600">Response Rate</p>
                    <p className="font-bold text-[#222364]">98%</p>
                  </div>
                  <div className="w-full h-2 bg-gray-50 rounded-full overflow-hidden">
                    <div className="h-full bg-[#222364] w-[98%] rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <p className="text-sm font-semibold text-gray-600">Response Time</p>
                    <p className="font-bold text-[#222364]">&lt; 2 hours</p>
                  </div>
                  <div className="w-full h-2 bg-gray-50 rounded-full overflow-hidden">
                    <div className="h-full bg-[#f2c060] w-[85%] rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100 mt-4">
                  <div className="mt-0.5 text-[#f2c060]">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <p className="text-sm text-gray-700 leading-snug font-medium">"Expert Responder" badge active</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-amber-600" />
                </div>
                <h3 className="font-bold text-[#222364]">Offer Tips</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#222364] shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-600 leading-relaxed">Respond within 4 hours to maintain your "Expert Responder" status and boost profile visibility.</p>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#222364] shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-600 leading-relaxed">Review the "Match Score" breakdown to tailor your pitch based on specific skill gaps the client identified.</p>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#222364] shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-600 leading-relaxed">If the rate is lower than your target, use the "Negotiate" feature within the offer view.</p>
                </li>
              </ul>
            </div>

            <div className="bg-[#222364] rounded-2xl p-6 text-white relative overflow-hidden group cursor-pointer">
              <div className="relative z-10">
                <h3 className="font-bold text-lg mb-2">Upgrade to Pro+</h3>
                <p className="text-sm text-blue-100 leading-relaxed mb-6">Get 20% more invites from Fortune 500 clients.</p>
                <Button className="bg-[#f2c060] text-[#222364] hover:bg-[#e0b050] font-bold h-10 px-6 rounded-lg w-fit">
                  Learn More
                </Button>
              </div>
              <div className="absolute right-[-20%] bottom-[-20%] w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition duration-500"></div>
            </div>

          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
