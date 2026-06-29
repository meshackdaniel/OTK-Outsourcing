"use client";

import { DashboardLayout } from"@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from"@/components/ui/card";
import { Button } from"@/components/ui/button";
import { Badge } from"@/components/ui/badge";
import { CheckCircle2, ShieldAlert, FileSpreadsheet } from"lucide-react";
import { toast } from"sonner";

export default function AdminPayrollPage() {
 const handleDisburse = () => {
 toast.success("Payroll executed. Funds dispersed to talent wallets. Tax ledgers updated.");
 };

 return (
 <DashboardLayout type="admin">
 <div className="space-y-8">
 <div>
 <h1 className="text-3xl font-black text-[#222364]">Payroll & Compliance Run</h1>
 <p className="text-gray-500 mt-2 max-w-2xl">
 Execute monthly Managed OaaS payroll. Ensures client wallet funds are captured, margin retained, PAYE/VAT calculated, and net salaries disbursed.
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
 <Card className="rounded-2xl border-gray-100">
 <CardContent className="p-6">
 <p className="text-sm font-medium text-gray-500 mb-1">Total Gross Payroll</p>
 <h3 className="text-2xl font-black text-gray-900">₦12,450,000</h3>
 </CardContent>
 </Card>
 <Card className="rounded-2xl border-gray-100">
 <CardContent className="p-6">
 <p className="text-sm font-medium text-gray-500 mb-1">Platform Margin Kept</p>
 <h3 className="text-2xl font-black text-green-600">₦2,490,000</h3>
 </CardContent>
 </Card>
 <Card className="rounded-2xl border-gray-100">
 <CardContent className="p-6">
 <p className="text-sm font-medium text-gray-500 mb-1">PAYE to Remit</p>
 <h3 className="text-2xl font-black text-amber-600">₦1,120,500</h3>
 </CardContent>
 </Card>
 <Card className="rounded-2xl border-gray-100">
 <CardContent className="p-6">
 <p className="text-sm font-medium text-gray-500 mb-1">Net to Talents</p>
 <h3 className="text-2xl font-black text-[#222364]">₦8,839,500</h3>
 </CardContent>
 </Card>
 </div>

 <Card className="rounded-2xl border-gray-100">
 <CardHeader>
 <div className="flex flex-col md:flex-row justify-between items-center">
 <div>
 <CardTitle className="text-xl">Pending October Payroll</CardTitle>
 <CardDescription>Only lines with approved worklogs can be processed.</CardDescription>
 </div>
 <Button variant="outline"className="rounded-xl border-gray-200">
 <FileSpreadsheet className="w-4 h-4 mr-2"/> Export CSV
 </Button>
 </div>
 </CardHeader>
 <CardContent>
 <div className="overflow-x-auto">
 <table className="w-full text-sm text-left">
 <thead className="bg-gray-50 text-gray-500">
 <tr>
 <th className="px-4 py-3 font-medium rounded-l-xl">Talent Name</th>
 <th className="px-4 py-3 font-medium">Client</th>
 <th className="px-4 py-3 font-medium">Gross Pay</th>
 <th className="px-4 py-3 font-medium">PAYE Deduct</th>
 <th className="px-4 py-3 font-medium">Net Disbursed</th>
 <th className="px-4 py-3 font-medium">Logs Status</th>
 <th className="px-4 py-3 font-medium rounded-r-xl">Action</th>
 </tr>
 </thead>
 <tbody className="divide-y divide-gray-100">
 <tr className="hover:bg-gray-50">
 <td className="px-4 py-4 font-medium text-gray-900">Sarah Jenkins</td>
 <td className="px-4 py-4 text-gray-600">TechNova Solutions</td>
 <td className="px-4 py-4 text-gray-900">₦450,000</td>
 <td className="px-4 py-4 text-gray-600">₦42,500</td>
 <td className="px-4 py-4 font-bold text-green-600">₦407,500</td>
 <td className="px-4 py-4"><Badge className="bg-green-100 text-green-700 hover:bg-green-100">Approved</Badge></td>
 <td className="px-4 py-4"><Button size="sm"variant="ghost"className="text-[#222364]">Review</Button></td>
 </tr>
 <tr className="hover:bg-gray-50">
 <td className="px-4 py-4 font-medium text-gray-900">Michael Okon</td>
 <td className="px-4 py-4 text-gray-600">Acme Logistics</td>
 <td className="px-4 py-4 text-gray-900">₦300,000</td>
 <td className="px-4 py-4 text-gray-600">₦21,000</td>
 <td className="px-4 py-4 font-bold text-green-600">₦279,000</td>
 <td className="px-4 py-4"><Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100">Pending Client</Badge></td>
 <td className="px-4 py-4"><Button size="sm"variant="ghost"className="text-[#222364]">Override</Button></td>
 </tr>
 </tbody>
 </table>
 </div>

 <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-blue-100 flex flex-col md:flex-row justify-between items-center gap-4">
 <div className="flex flex-col md:flex-row gap-4 items-center">
 <ShieldAlert className="w-8 h-8 text-[#222364]"/>
 <div>
 <h4 className="font-black text-[#222364]">Execute Compliance Run</h4>
 <p className="text-sm text-blue-800">This action will debit the reserved client wallet, log all tax liabilities, and credit the talent wallets.</p>
 </div>
 </div>
 <Button onClick={handleDisburse} className="h-12 px-8 rounded-xl bg-[#222364] hover:bg-[#1a1a4b]">
 Execute Payroll
 </Button>
 </div>
 </CardContent>
 </Card>
 </div>
 </DashboardLayout>
 );
}
