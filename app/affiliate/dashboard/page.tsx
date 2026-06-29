"use client";

import { DashboardLayout } from"@/components/layout/DashboardLayout";
import { Button } from"@/components/ui/button";
import { Users, Building, Wallet, Copy, Link2, CheckCircle2 } from"lucide-react";
import { toast } from"sonner";
import Link from"next/link";
import { cn } from"@/lib/utils";

export default function AffiliateDashboard() {
 const handleCopyLink = () => {
 toast.success("Affiliate tracking link copied to clipboard!");
 };

 return (
 <DashboardLayout type="affiliate">
 <div className="space-y-6">
 
 <div className="flex flex-col md:flex-row justify-between items-end mb-2">
 <div>
 <h1 className="text-2xl font-black text-[#222364]">Affiliate Dashboard</h1>
 <p className="text-gray-500 mt-1">Track your referrals, commissions, and network growth.</p>
 </div>
 </div>

 <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
 
 <div className="lg:col-span-2 space-y-6">
 
 {/* Tracking Link Card */}
 <div className="bg-white rounded-2xl p-8 border border-gray-100 relative overflow-hidden">
 <div className="relative z-10">
 <h2 className="text-xl font-black text-[#222364] mb-2">Your Tracking Link</h2>
 <p className="text-gray-500 font-medium mb-6 max-w-md">
 Share this link with potential Clients or Talent. Commissions trigger upon monetized events (funding, deployment).
 </p>
 
 <div className="flex bg-gray-50 rounded-xl border border-gray-200 overflow-hidden max-w-xl">
 <div className="flex-1 px-4 py-4 text-gray-700 font-mono text-sm truncate flex items-center gap-2">
 <Link2 className="w-4 h-4 text-gray-400"/>
 https://oaas.com/join?ref=AFF-4991-X
 </div>
 <Button onClick={handleCopyLink} className="bg-[#222364] hover:bg-[#1a1a4b] text-white px-6 h-auto font-bold rounded-none">
 <Copy className="mr-2 h-4 w-4"/> Copy
 </Button>
 </div>
 </div>
 </div>

 {/* Referrals Stats */}
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div className="bg-white rounded-2xl p-6 border border-gray-100 flex flex-col">
 <div className="w-12 h-12 rounded-xl bg-gray-50 text-blue-600 flex items-center justify-center mb-4">
 <Users className="h-6 w-6"/>
 </div>
 <p className="text-sm font-semibold text-gray-500">Talent Referrals</p>
 <h3 className="text-4xl font-black text-[#222364] mt-1">12</h3>
 <p className="text-sm text-green-600 mt-3 font-semibold">4 successfully deployed</p>
 </div>
 
 <div className="bg-white rounded-2xl p-6 border border-gray-100 flex flex-col">
 <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
 <Building className="h-6 w-6"/>
 </div>
 <p className="text-sm font-semibold text-gray-500">Client Referrals</p>
 <h3 className="text-4xl font-black text-[#222364] mt-1">3</h3>
 <p className="text-sm text-green-600 mt-3 font-semibold">1 active subscription</p>
 </div>
 </div>

 {/* Recent Activity */}
 <div className="bg-white rounded-2xl p-6 border border-gray-100">
 <div className="flex items-center justify-between mb-6">
 <h2 className="text-xl font-black text-[#222364]">Recent Activity</h2>
 </div>
 <div className="divide-y divide-gray-50">
 {[
 { name:"Acme Corp Ltd.", type:"Client", status:"Subscribed", earned:"+ ₦ 25,000"},
 { name:"Sarah Jenkins", type:"Talent", status:"Deployed", earned:"+ ₦ 20,000"},
 ].map((ref, i) => (
 <div key={i} className="py-4 flex flex-col md:flex-row justify-between items-center hover:bg-gray-50/50 transition cursor-pointer">
 <div>
 <h3 className="font-black text-gray-900 text-lg">{ref.name}</h3>
 <p className="text-gray-500 font-medium text-sm mt-0.5">{ref.type}</p>
 </div>
 <div className="flex items-center gap-6">
 <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">
 <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
 {ref.status}
 </span>
 <span className="font-bold text-[#222364] text-lg">{ref.earned}</span>
 </div>
 </div>
 ))}
 </div>
 </div>
 </div>

 <div className="space-y-6">
 
 {/* Wallet Quick Access */}
 <div className="bg-white rounded-2xl p-6 border border-gray-100 border-t-4 border-t-[#222364]">
 <div className="w-12 h-12 rounded-xl bg-gray-50 text-gray-600 border border-gray-200 flex items-center justify-center mb-4">
 <Wallet className="h-6 w-6"/>
 </div>
 <p className="text-gray-500 font-bold mb-1">Withdrawable Commission</p>
 <h3 className="text-4xl font-black text-[#222364] mb-6">₦45,000</h3>
 <Link href="/affiliate/wallet">
 <Button className="w-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 font-bold rounded-xl h-12">
 Manage Wallet
 </Button>
 </Link>
 </div>

 {/* Commission Tiers */}
 <div className="bg-white rounded-2xl p-6 border border-gray-100">
 <h3 className="font-black text-[#222364] mb-6">Commission Tiers</h3>
 <div className="space-y-4">
 <div className="flex flex-col md:flex-row justify-between items-center bg-gray-50 p-4 rounded-xl border border-gray-200">
 <div>
 <p className="font-bold text-gray-900">Starter</p>
 <p className="text-xs text-blue-600 font-bold mt-1">Current Tier</p>
 </div>
 <p className="font-bold text-[#222364] text-xl">5%</p>
 </div>
 <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-xl border border-gray-100 opacity-60">
 <div>
 <p className="font-bold text-gray-500">Pro</p>
 <p className="text-xs text-gray-400 font-medium mt-1">After 5 Deployments</p>
 </div>
 <p className="font-bold text-gray-500 text-xl">10%</p>
 </div>
 </div>
 </div>

 </div>

 </div>
 </div>
 </DashboardLayout>
 );
}
