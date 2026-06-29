"use client";

import { DashboardLayout } from"@/components/layout/DashboardLayout";
import { Button } from"@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from"@/components/ui/card";
import { Badge } from"@/components/ui/badge";
import { Check, Star, Zap, Building2, Megaphone } from"lucide-react";
import { toast } from"sonner";

export default function EmployerSubscriptionsPage() {
 const handleSubscribe = (plan: string) => {
 toast.success(`${plan} selected. Please ensure your wallet is funded.`);
 };

 return (
 <DashboardLayout type="employer">
 <div className="space-y-10">
 <div className="text-center max-w-2xl mx-auto space-y-4">
 <h1 className="text-3xl font-black text-[#222364]">Plans & Add-ons</h1>
 <p className="text-gray-500">
 Scale your recruitment efforts with our Managed OaaS subscriptions, Lead Generation, and Featured Job placements.
 </p>
 </div>

 {/* Managed OaaS Support Subscriptions */}
 <section>
 <div className="flex items-center gap-3 mb-6">
 <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-[#222364]">
 <Star className="w-5 h-5"/>
 </div>
 <div>
 <h2 className="text-xl font-black text-gray-900">OaaS Support Subscriptions</h2>
 <p className="text-sm text-gray-500">Recurring monthly support and recruitment seat licenses.</p>
 </div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 {[
 { name:"Silver Support", price:"$99", period:"per seat / mo", features: ["Basic Managed Outsourcing","Standard Job Board Tools","Email Support","Monthly Reporting"] },
 { name:"Gold Support", price:"$149", period:"per seat / mo", popular: true, features: ["Advanced Outsourcing","Featured Job Listings","Priority Support","Hiring Analytics Dashboard"] },
 { name:"Platinum Support", price:"$199", period:"per seat / mo", features: ["Enterprise Outsourcing","Unlimited Job Activations","Dedicated Account Manager","Custom API Integrations"] }
 ].map((plan, i) => (
 <Card key={i} className={`rounded-3xl border-2 relative overflow-hidden transition-all hover:border-[#222364] ${plan.popular ?'border-[#222364]':'border-gray-100'}`}>
 {plan.popular && (
 <div className="bg-[#222364] text-white text-xs font-bold uppercase tracking-wider text-center py-1.5 absolute top-0 w-full">
 Most Popular
 </div>
 )}
 <CardHeader className={plan.popular ?"pt-10":""}>
 <CardTitle className="text-lg font-semibold text-gray-900">{plan.name}</CardTitle>
 <div className="flex items-end gap-1 mt-2">
 <span className="text-3xl font-bold text-[#222364]">{plan.price}</span>
 <span className="text-sm text-gray-500 mb-1">{plan.period}</span>
 </div>
 </CardHeader>
 <CardContent>
 <ul className="space-y-4 mb-8">
 {plan.features.map((f, j) => (
 <li key={j} className="flex items-start gap-3 text-sm text-gray-600">
 <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5"/> {f}
 </li>
 ))}
 </ul>
 <Button 
 onClick={() => handleSubscribe(plan.name)} 
 variant={plan.popular ?"default":"outline"}
 className={`w-full h-12 rounded-xl ${plan.popular ?'bg-[#222364] hover:bg-[#1a1a4b]':'border-gray-200 hover:bg-gray-50'}`}
 >
 Subscribe Now
 </Button>
 </CardContent>
 </Card>
 ))}
 </div>
 </section>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 {/* Job Slot Activations & Featured */}
 <section>
 <div className="flex items-center gap-3 mb-6">
 <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-orange-600">
 <Zap className="w-5 h-5"/>
 </div>
 <div>
 <h2 className="text-xl font-black text-gray-900">Job Board Boosts</h2>
 <p className="text-sm text-gray-500">Pay-per-job visibility options.</p>
 </div>
 </div>
 
 <div className="space-y-4">
 <Card className="rounded-2xl border-gray-100 flex flex-col sm:flex-row justify-between items-center p-6 gap-4">
 <div>
 <h3 className="font-black text-gray-900 flex items-center gap-2">Standard Job Activation <Badge variant="secondary">30 Days</Badge></h3>
 <p className="text-sm text-gray-500 mt-1">Make your draft job visible to all candidates.</p>
 </div>
 <div className="flex items-center gap-4 w-full sm:w-auto">
 <span className="font-bold text-lg text-[#222364]">₦25,000</span>
 <Button onClick={() => handleSubscribe("Standard Activation")} className="rounded-xl h-10">Purchase</Button>
 </div>
 </Card>

 <Card className="rounded-2xl border-gray-100 flex flex-col sm:flex-row justify-between items-center p-6 gap-4 border-l-4 border-l-amber-400">
 <div>
 <h3 className="font-black text-gray-900 flex items-center gap-2">Featured Job Upgrade <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100">Top Placement</Badge></h3>
 <p className="text-sm text-gray-500 mt-1">Pin your job to the top of search results and emails.</p>
 </div>
 <div className="flex items-center gap-4 w-full sm:w-auto">
 <span className="font-bold text-lg text-[#222364]">₦75,000</span>
 <Button onClick={() => handleSubscribe("Featured Upgrade")} className="rounded-xl h-10 bg-amber-500 hover:bg-amber-600">Upgrade</Button>
 </div>
 </Card>
 </div>
 </section>

 {/* Lead Generation Services */}
 <section>
 <div className="flex items-center gap-3 mb-6">
 <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
 <Megaphone className="w-5 h-5"/>
 </div>
 <div>
 <h2 className="text-xl font-black text-gray-900">B2B Lead Generation</h2>
 <p className="text-sm text-gray-500">Qualified leads delivered to your pipeline monthly.</p>
 </div>
 </div>

 <div className="space-y-4">
 <Card className="rounded-2xl border-gray-100 p-6">
 <div className="flex flex-col md:flex-row justify-between items-start mb-4">
 <div>
 <h3 className="font-black text-gray-900">Silver Leads Package</h3>
 <p className="text-sm text-gray-500 mt-1">Standard B2B outreach.</p>
 </div>
 <span className="font-bold text-xl text-[#222364]">₦150,000<span className="text-sm font-normal text-gray-500">/mo</span></span>
 </div>
 <Button onClick={() => handleSubscribe("Silver Leads")} variant="outline"className="w-full rounded-xl h-10 border-gray-200">Subscribe</Button>
 </Card>
 <Card className="rounded-2xl border-gray-100 p-6">
 <div className="flex flex-col md:flex-row justify-between items-start mb-4">
 <div>
 <h3 className="font-black text-gray-900">Gold Leads Package</h3>
 <p className="text-sm text-gray-500 mt-1">High-volume qualified prospects.</p>
 </div>
 <span className="font-bold text-xl text-[#222364]">₦300,000<span className="text-sm font-normal text-gray-500">/mo</span></span>
 </div>
 <Button onClick={() => handleSubscribe("Gold Leads")} className="w-full rounded-xl h-10 bg-[#222364] hover:bg-[#1a1a4b]">Subscribe</Button>
 </Card>
 </div>
 </section>
 </div>

 </div>
 </DashboardLayout>
 );
}
