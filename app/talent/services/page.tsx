"use client";

import { DashboardLayout } from"@/components/layout/DashboardLayout";
import { Button } from"@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from"@/components/ui/card";
import { FileText, CheckCircle2, Sparkles, Award } from"lucide-react";
import { toast } from"sonner";

export default function TalentServicesPage() {
 const handlePurchase = (service: string) => {
 toast.success(`${service} added to your cart. Please ensure your wallet is funded.`);
 };

 return (
 <DashboardLayout type="talent">
 <div className="space-y-8">
 <div className="text-center max-w-2xl mx-auto space-y-4">
 <h1 className="text-3xl font-black text-[#222364]">Career Acceleration Services</h1>
 <p className="text-gray-500">
 Stand out to top employers with professionally crafted resumes and profile optimization services.
 </p>
 </div>

 <section>
 <div className="flex items-center gap-3 mb-6">
 <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-[#222364]">
 <FileText className="w-5 h-5"/>
 </div>
 <div>
 <h2 className="text-xl font-black text-gray-900">Professional Resume Writing</h2>
 <p className="text-sm text-gray-500">Get noticed by ATS scanners and human recruiters alike.</p>
 </div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 {[
 { title:"Basic Rewrite", price:"₦25,000", desc:"For entry-level to mid-level professionals.", features: ["ATS Formatting","Keyword Optimization","Grammar Check","1 Revision"] },
 { title:"Professional", price:"₦45,000", popular: true, desc:"For experienced professionals looking to pivot or advance.", features: ["Everything in Basic","Cover Letter Draft","LinkedIn Optimization","2 Revisions"] },
 { title:"Executive", price:"₦85,000", desc:"For C-level, Directors, and Senior Management.", features: ["Everything in Pro","Executive Bio","1-on-1 Consultation","Unlimited Revisions"] }
 ].map((plan, i) => (
 <Card key={i} className={`rounded-3xl border-2 relative overflow-hidden transition-all hover:border-[#222364] ${plan.popular ?'border-[#222364]':'border-gray-100'}`}>
 {plan.popular && (
 <div className="bg-[#222364] text-white text-xs font-bold uppercase tracking-wider text-center py-1.5 absolute top-0 w-full">
 Most Popular
 </div>
 )}
 <CardHeader className={plan.popular ?"pt-10":""}>
 <CardTitle className="text-lg font-semibold text-gray-900">{plan.title}</CardTitle>
 <p className="text-xs text-gray-500 min-h-[40px]">{plan.desc}</p>
 <div className="flex items-end gap-1 mt-2">
 <span className="text-3xl font-bold text-[#222364]">{plan.price}</span>
 </div>
 </CardHeader>
 <CardContent>
 <ul className="space-y-4 mb-8">
 {plan.features.map((f, j) => (
 <li key={j} className="flex items-start gap-3 text-sm text-gray-600">
 <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5"/> {f}
 </li>
 ))}
 </ul>
 <Button 
 onClick={() => handlePurchase(`${plan.title} Resume`)} 
 variant={plan.popular ?"default":"outline"}
 className={`w-full h-12 rounded-xl ${plan.popular ?'bg-[#222364] hover:bg-[#1a1a4b]':'border-gray-200 hover:bg-gray-50'}`}
 >
 Purchase Now
 </Button>
 </CardContent>
 </Card>
 ))}
 </div>
 </section>

 <section className="pt-8 border-t border-gray-100">
 <h2 className="text-xl font-black text-gray-900 mb-6">Additional Services</h2>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <Card className="rounded-2xl border-gray-100 flex flex-col sm:flex-row justify-between items-center p-6 gap-4">
 <div>
 <h3 className="font-black text-gray-900 flex items-center gap-2"><Sparkles className="w-4 h-4 text-amber-500"/> CV Optimization Only</h3>
 <p className="text-sm text-gray-500 mt-1">Lower-tier service focused purely on formatting and keyword alignment.</p>
 </div>
 <div className="flex items-center gap-4 w-full sm:w-auto">
 <span className="font-bold text-lg text-[#222364]">₦10,000</span>
 <Button onClick={() => handlePurchase("CV Optimization")} className="rounded-xl h-10 border-gray-200"variant="outline">Buy</Button>
 </div>
 </Card>

 <Card className="rounded-2xl border-gray-100 flex flex-col sm:flex-row justify-between items-center p-6 gap-4 border-l-4 border-l-[#222364]">
 <div>
 <h3 className="font-black text-gray-900 flex items-center gap-2"><Award className="w-4 h-4 text-[#222364]"/> Interview Preparation</h3>
 <p className="text-sm text-gray-500 mt-1">1-hour mock interview session with industry experts.</p>
 </div>
 <div className="flex items-center gap-4 w-full sm:w-auto">
 <span className="font-bold text-lg text-[#222364]">₦20,000</span>
 <Button onClick={() => handlePurchase("Interview Prep")} className="rounded-xl h-10 bg-[#222364] hover:bg-[#1a1a4b]">Buy</Button>
 </div>
 </Card>
 </div>
 </section>
 </div>
 </DashboardLayout>
 );
}
