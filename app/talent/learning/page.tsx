"use client";

import { DashboardLayout } from"@/components/layout/DashboardLayout";
import { Card } from"@/components/ui/card";
import { Button } from"@/components/ui/button";
import { FileText, GraduationCap, CheckCircle2 } from"lucide-react";
import { toast } from"sonner";

export default function TalentLearning() {
 const handlePurchase = (service: string) => {
 toast.success(`Purchased ${service}! Our consultants will contact you shortly.`);
 };

 return (
 <DashboardLayout type="talent">
 <div className="flex flex-col gap-8">
 
 <div className="flex justify-between items-end">
 <div>
 <h1 className="text-3xl font-black text-[#222364]">Learning & Services</h1>
 <p className="text-gray-500 mt-1 font-medium">Boost your employability with our professional services and assessments.</p>
 </div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 
 <Card className="p-0 rounded-2xl border border-gray-100 bg-white overflow-hidden flex flex-col">
 <div className="bg-[#222364] p-8 text-white">
 <FileText className="h-10 w-10 mb-4 text-[#f2c060]"/>
 <h2 className="text-2xl font-black">Resume Writing Services</h2>
 <p className="text-gray-300 mt-2 font-medium">Stand out to top employers with a professionally crafted CV.</p>
 </div>
 <div className="p-8 flex-1 flex flex-col space-y-4 bg-gray-50/50">
 {[
 { tier:"Basic Optimization", price:"₦15,000", desc:"Formatting & keyword alignment for ATS."},
 { tier:"Professional Rewrite", price:"₦45,000", desc:"Complete rewrite by an HR consultant."},
 { tier:"Executive Package", price:"₦85,000", desc:"C-Level rewrite + Cover Letter + LinkedIn Profile."}
 ].map((pkg, idx) => (
 <div key={idx} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-[#f2c060] transition-colors cursor-pointer group">
 <div className="flex justify-between items-center mb-2">
 <h3 className="font-bold text-[#222364]">{pkg.tier}</h3>
 <span className="font-black text-[#222364]">{pkg.price}</span>
 </div>
 <p className="text-sm text-gray-500 mb-4 font-medium">{pkg.desc}</p>
 <Button onClick={() => handlePurchase(pkg.tier)} variant="outline"className="w-full border-gray-200 text-[#222364] font-bold hover:bg-[#f2c060] hover:text-[#222364] transition-colors">
 Select Package
 </Button>
 </div>
 ))}
 </div>
 </Card>

 <Card className="p-0 rounded-2xl border border-gray-100 bg-white overflow-hidden flex flex-col">
 <div className="bg-[#f2c060] p-8 text-[#222364]">
 <GraduationCap className="h-10 w-10 mb-4"/>
 <h2 className="text-2xl font-black">Skill Assessments</h2>
 <p className="text-[#222364]/80 mt-2 font-medium">Prove your expertise with verifiable skill badges.</p>
 </div>
 <div className="p-8 flex-1 flex flex-col bg-gray-50/50">
 <div className="bg-white border-2 border-[#222364] rounded-xl p-6 mb-8 relative">
 <div className="absolute top-0 right-6 -translate-y-1/2 bg-[#222364] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Recommended</div>
 <h3 className="font-black text-[#222364] text-xl mb-1">Talent Pro Plan</h3>
 <div className="text-3xl font-black text-[#222364] mb-4">₦10,000<span className="text-base font-bold text-gray-400">/mo</span></div>
 <ul className="space-y-3 mb-6">
 <li className="flex items-center gap-2 text-sm text-[#222364] font-bold"><CheckCircle2 className="h-5 w-5 text-emerald-500"/> 2 premium assessments / month</li>
 <li className="flex items-center gap-2 text-sm text-[#222364] font-bold"><CheckCircle2 className="h-5 w-5 text-emerald-500"/> Priority placement on auto-match</li>
 <li className="flex items-center gap-2 text-sm text-[#222364] font-bold"><CheckCircle2 className="h-5 w-5 text-emerald-500"/> Exclusive webinar access</li>
 </ul>
 <Button onClick={() => handlePurchase("Talent Pro Plan")} className="w-full bg-[#222364] hover:bg-[#1a1b4d] text-white font-bold h-12 rounded-xl">
 Subscribe to Pro
 </Button>
 </div>
 
 <h3 className="font-black text-[#222364] mb-4 text-lg">One-Time Assessments</h3>
 <div className="space-y-3">
 {[
 { name:"Advanced React.js", price:"₦5,000"},
 { name:"Data Structures", price:"₦5,000"},
 { name:"PMP Prep Course", price:"₦12,000"}
 ].map((test, idx) => (
 <div key={idx} className="flex justify-between items-center p-4 bg-white border border-gray-200 rounded-xl hover:border-[#f2c060] transition-colors">
 <span className="font-bold text-[#222364] text-sm">{test.name}</span>
 <div className="flex items-center gap-4">
 <span className="font-black text-[#222364]">{test.price}</span>
 <Button onClick={() => handlePurchase(test.name)} className="bg-[#222364] hover:bg-[#1a1b4d] text-[#f2c060] rounded-lg text-xs font-bold px-4 h-8">
 Buy
 </Button>
 </div>
 </div>
 ))}
 </div>
 </div>
 </Card>

 </div>
 </div>
 </DashboardLayout>
 );
}
