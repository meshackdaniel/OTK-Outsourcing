"use client";

import { DashboardLayout } from"@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from"@/components/ui/card";
import { Button } from"@/components/ui/button";
import { Input } from"@/components/ui/input";
import { Settings, Percent, DollarSign, Save } from"lucide-react";
import { toast } from"sonner";

export default function AdminSettingsPage() {
 const handleSave = () => {
 toast.success("Global pricing logic updated successfully.");
 };

 return (
 <DashboardLayout type="admin">
 <div className="space-y-8">
 <div>
 <h1 className="text-3xl font-black text-[#222364]">Platform Pricing Engine</h1>
 <p className="text-gray-500 mt-2 max-w-2xl">
 Configure global fees, subscription prices, margins, and affiliate commission tiers as defined in the commercial PRD.
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <Card className="rounded-2xl border-gray-100">
 <CardHeader>
 <CardTitle className="text-lg flex items-center gap-2"><DollarSign className="w-5 h-5 text-indigo-500"/> Job Board & Ad Fees</CardTitle>
 </CardHeader>
 <CardContent className="space-y-4">
 <div className="space-y-2">
 <label className="text-sm font-medium text-gray-700">Standard Job Activation (₦)</label>
 <Input defaultValue="25000"className="rounded-xl border-gray-200"/>
 </div>
 <div className="space-y-2">
 <label className="text-sm font-medium text-gray-700">Featured Slot Upgrade (₦)</label>
 <Input defaultValue="75000"className="rounded-xl border-gray-200"/>
 </div>
 </CardContent>
 </Card>

 <Card className="rounded-2xl border-gray-100">
 <CardHeader>
 <CardTitle className="text-lg flex items-center gap-2"><Percent className="w-5 h-5 text-green-500"/> Global Margins & Commissions</CardTitle>
 </CardHeader>
 <CardContent className="space-y-4">
 <div className="space-y-2">
 <label className="text-sm font-medium text-gray-700">Managed OaaS Platform Margin (%)</label>
 <Input defaultValue="20"className="rounded-xl border-gray-200"/>
 </div>
 <div className="grid grid-cols-2 gap-4">
 <div className="space-y-2">
 <label className="text-sm font-medium text-gray-700">Affiliate (Starter) %</label>
 <Input defaultValue="5"className="rounded-xl border-gray-200"/>
 </div>
 <div className="space-y-2">
 <label className="text-sm font-medium text-gray-700">Affiliate (Elite) %</label>
 <Input defaultValue="15"className="rounded-xl border-gray-200"/>
 </div>
 </div>
 </CardContent>
 </Card>

 <Card className="rounded-2xl border-gray-100">
 <CardHeader>
 <CardTitle className="text-lg flex items-center gap-2"><Settings className="w-5 h-5 text-gray-500"/> Subscriptions & Services</CardTitle>
 </CardHeader>
 <CardContent className="space-y-4">
 <div className="space-y-2">
 <label className="text-sm font-medium text-gray-700">Resume Writing (Professional) ₦</label>
 <Input defaultValue="45000"className="rounded-xl border-gray-200"/>
 </div>
 <div className="space-y-2">
 <label className="text-sm font-medium text-gray-700">Recruiter Rental (Mid-Level) ₦/hr</label>
 <Input defaultValue="20000"className="rounded-xl border-gray-200"/>
 </div>
 </CardContent>
 </Card>

 <Card className="rounded-2xl border-gray-100">
 <CardHeader>
 <CardTitle className="text-lg flex items-center gap-2"><Settings className="w-5 h-5 text-red-500"/> Compliance Tax Rates</CardTitle>
 </CardHeader>
 <CardContent className="space-y-4">
 <div className="space-y-2">
 <label className="text-sm font-medium text-gray-700">VAT (%)</label>
 <Input defaultValue="7.5"disabled className="rounded-xl border-gray-200 bg-gray-50 text-gray-500"/>
 <p className="text-xs text-gray-400">Fixed statutory rate.</p>
 </div>
 <div className="space-y-2">
 <label className="text-sm font-medium text-gray-700">WHT (%)</label>
 <Input defaultValue="5"className="rounded-xl border-gray-200"/>
 </div>
 </CardContent>
 </Card>
 </div>

 <div className="flex justify-end pt-4 border-t border-gray-100">
 <Button onClick={handleSave} className="h-12 px-8 rounded-xl bg-[#222364] hover:bg-[#1a1a4b]">
 <Save className="w-4 h-4 mr-2"/>
 Save Configuration
 </Button>
 </div>
 </div>
 </DashboardLayout>
 );
}
