"use client";

import { DashboardLayout } from"@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from"@/components/ui/card";
import { Button } from"@/components/ui/button";
import { Badge } from"@/components/ui/badge";
import { Building2, Link as LinkIcon, ExternalLink, CheckCircle2 } from"lucide-react";

export default function AffiliateLeadsPage() {
 const referralLink ="https://otk-outsourcing.com/signup?ref=B2B-A77X";

 return (
 <DashboardLayout type="affiliate">
 <div className="space-y-8">
 <div>
 <h1 className="text-3xl font-black text-[#222364]">B2B Lead Generation</h1>
 <p className="text-gray-500 mt-2 max-w-2xl">
 Track corporate clients you've referred to our Enterprise Lead Generation and Outsourcing packages. High-value conversions mean high commissions.
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 <div className="md:col-span-2 space-y-6">
 <Card className="rounded-2xl border-gray-100">
 <CardHeader>
 <CardTitle className="text-xl">Your Corporate Referrals</CardTitle>
 <CardDescription>Track the status of companies you've sent to our platform.</CardDescription>
 </CardHeader>
 <CardContent>
 <div className="space-y-4">
 {[
 { name:"Acme Logistics Ltd.", date:"Oct 12, 2026", status:"Subscribed (Gold)", revenue:"₦300,000/mo", commission:"₦30,000/mo"},
 { name:"TechNova Solutions", date:"Oct 20, 2026", status:"Negotiating", revenue:"Pending", commission:"Pending"},
 { name:"Global Finance Corp", date:"Oct 22, 2026", status:"Registered", revenue:"Pending", commission:"Pending"}
 ].map((lead, i) => (
 <div key={i} className="flex flex-col md:flex-row justify-between items-center p-4 rounded-xl border border-gray-100 hover:border-[#222364]/20 transition-colors">
 <div className="flex flex-col md:flex-row gap-4 items-center">
 <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-[#222364]">
 <Building2 className="w-5 h-5"/>
 </div>
 <div>
 <p className="font-semibold text-gray-900">{lead.name}</p>
 <p className="text-sm text-gray-500">Referred: {lead.date}</p>
 </div>
 </div>
 <div className="text-right flex flex-col items-end gap-1">
 <Badge variant="outline"className={
 lead.status.includes("Subscribed") 
 ?"bg-green-50 text-green-700 border-green-200"
 : lead.status ==="Negotiating"
 ?"bg-amber-50 text-amber-700 border-amber-200"
 :"bg-gray-50 text-gray-700 border-gray-200"
 }>
 {lead.status}
 </Badge>
 {lead.status.includes("Subscribed") && (
 <span className="text-xs font-bold text-[#222364]">Earns {lead.commission}</span>
 )}
 </div>
 </div>
 ))}
 </div>
 </CardContent>
 </Card>
 </div>

 <div className="space-y-6">
 <Card className="rounded-2xl border-[#222364] bg-[#222364] text-white">
 <CardContent className="p-6">
 <h3 className="font-black text-lg mb-2">Enterprise Referral Link</h3>
 <p className="text-indigo-200 text-sm mb-4">Share this specific link with corporate HR and hiring managers.</p>
 <div className="flex items-center gap-2 bg-indigo-950/50 p-3 rounded-xl mb-4">
 <LinkIcon className="w-4 h-4 text-indigo-300"/>
 <span className="text-sm font-mono truncate">{referralLink}</span>
 </div>
 <Button className="w-full bg-white text-[#222364] hover:bg-indigo-50">
 Copy Link
 </Button>
 </CardContent>
 </Card>

 <Card className="rounded-2xl border-gray-100 bg-gray-50">
 <CardHeader>
 <CardTitle className="text-lg">Commission Logic</CardTitle>
 </CardHeader>
 <CardContent>
 <ul className="space-y-3 text-sm text-gray-600">
 <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0"/> You earn 10% of the platform margin for any Lead Generation subscription.</li>
 <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0"/> You earn 15% of the margin on Managed Outsourcing contracts.</li>
 <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0"/> Payouts are recurring for the first 6 months of a client's subscription.</li>
 </ul>
 </CardContent>
 </Card>
 </div>
 </div>
 </div>
 </DashboardLayout>
 );
}
