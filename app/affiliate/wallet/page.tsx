"use client";

import { DashboardLayout } from"@/components/layout/DashboardLayout";
import { Button } from"@/components/ui/button";
import { Users, Building, Wallet, Copy, Link2, CheckCircle2, TrendingUp, Filter, Search, ArrowDownToLine, Download } from"lucide-react";
import { toast } from"sonner";
import Link from"next/link";
import { cn } from"@/lib/utils";

export default function AffiliateWallet() {
 const handleWithdraw = () => {
 toast.success("Withdrawal initiated successfully to linked bank account.");
 };

 return (
 <DashboardLayout type="affiliate">
 <div className="space-y-6">
 
 {/* Wallet Balance Card */}
 <div className="bg-white rounded-2xl p-8 border border-gray-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
 <div>
 <p className="text-gray-500 font-medium mb-2">Withdrawable Commission</p>
 <h1 className="text-5xl font-bold text-[#222364]">₦45,000</h1>
 </div>
 <div className="flex items-center gap-4 w-full md:w-auto">
 <Button className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 h-12 px-6 rounded-xl w-full md:w-auto">
 <Download className="w-4 h-4 mr-2"/>
 Statement
 </Button>
 <Button onClick={handleWithdraw} className="bg-[#222364] text-white hover:bg-[#1a1a4b] h-12 px-8 rounded-xl w-full md:w-auto">
 <ArrowDownToLine className="w-5 h-5 mr-2"/>
 Withdraw Funds
 </Button>
 </div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 {/* Commission Tier */}
 <div className="bg-white rounded-2xl p-6 border border-gray-100">
 <h3 className="font-bold text-gray-900 mb-6">Current Tier</h3>
 <div className="space-y-4">
 <div className="flex justify-between items-center border-b border-gray-50 pb-4">
 <span className="text-sm text-gray-500 font-semibold">Starter Level</span>
 <span className="font-bold text-[#222364]">5%</span>
 </div>
 <div className="flex justify-between items-center pb-2">
 <span className="text-sm text-gray-500 font-semibold">Next Tier (Pro)</span>
 <span className="font-bold text-gray-400">10%</span>
 </div>
 </div>
 </div>
 
 {/* Earnings Summary */}
 <div className="md:col-span-2 bg-white rounded-2xl p-6 border border-gray-100">
 <h3 className="font-bold text-gray-900 mb-6">Commission Summary</h3>
 <div className="grid grid-cols-2 gap-4">
 <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
 <p className="text-xs font-semibold text-gray-500 mb-1">Total Earned</p>
 <p className="text-2xl font-bold text-[#222364]">₦125,000</p>
 </div>
 <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
 <p className="text-xs font-semibold text-gray-500 mb-1">Pending Clearance</p>
 <p className="text-2xl font-bold text-amber-600">₦15,000</p>
 </div>
 </div>
 </div>
 </div>

 {/* Ledger History Table */}
 <div className="bg-white rounded-2xl p-6 border border-gray-100">
 <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
 <h2 className="text-xl font-bold text-[#222364]">Ledger History</h2>
 <div className="flex items-center gap-3 w-full md:w-auto">
 <div className="relative flex-1 md:w-64">
 <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"/>
 <input 
 type="text"
 placeholder="Search transactions"
 className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 pl-9 pr-4 text-sm outline-none focus:ring-1 focus:ring-[#222364]/20"
 />
 </div>
 <Button variant="outline"className="border-gray-200 text-gray-700 h-[42px] rounded-xl px-4">
 <Filter className="w-4 h-4 mr-2"/>
 Filter
 </Button>
 </div>
 </div>

 <div className="overflow-x-auto">
 <table className="w-full text-left border-collapse">
 <thead>
 <tr className="border-b border-gray-100">
 <th className="pb-4 font-semibold text-gray-500 text-sm">Date</th>
 <th className="pb-4 font-semibold text-gray-500 text-sm">Description</th>
 <th className="pb-4 font-semibold text-gray-500 text-sm">Amount</th>
 <th className="pb-4 font-semibold text-gray-500 text-sm text-right">Status</th>
 </tr>
 </thead>
 <tbody>
 {[
 { date:"Oct 24, 2026", desc:"Commission: Acme Corp (Client)", amount:"+ ₦ 25,000", status:"Completed", type:"credit"},
 { date:"Oct 22, 2026", desc:"Commission: Sarah Jenkins (Talent)", amount:"+ ₦ 20,000", status:"Completed", type:"credit"},
 { date:"Sep 28, 2026", desc:"Withdrawal to GTBank", amount:"- ₦ 45,000", status:"Completed", type:"debit"},
 ].map((tx, i) => (
 <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition">
 <td className="py-4 text-gray-500 text-sm">{tx.date}</td>
 <td className="py-4 font-medium text-gray-900">{tx.desc}</td>
 <td className={cn(
"py-4 font-semibold",
 tx.type ==="credit"?"text-green-600":"text-gray-900"
 )}>{tx.amount}</td>
 <td className="py-4 text-right">
 <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">
 <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
 {tx.status}
 </span>
 </td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </div>

 </div>
 </DashboardLayout>
 );
}
