"use client";

import { DashboardLayout } from"@/components/layout/DashboardLayout";
import { Button } from"@/components/ui/button";
import { Card, CardContent } from"@/components/ui/card";
import { CalendarDays, MapPin, Building2, Ticket } from"lucide-react";
import { toast } from"sonner";

export default function TalentEventsPage() {
 const handleRegister = (event: string, price: string) => {
 if (price ==="Free") {
 toast.success(`Successfully registered for ${event}. We've sent you an email confirmation.`);
 } else {
 toast.success(`Ticket for ${event} added to cart. Please fund your wallet to complete purchase.`);
 }
 };

 return (
 <DashboardLayout type="talent">
 <div className="space-y-8">
 <div>
 <h1 className="text-3xl font-black text-[#222364]">Career Summits & Job Fairs</h1>
 <p className="text-gray-500 mt-2 max-w-2xl">
 Attend exclusive virtual events to network directly with top employers, drop your CV at corporate booths, and attend expert panels.
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <Card className="rounded-2xl border-gray-100 overflow-hidden">
 <div className="h-40 bg-gradient-to-r from-blue-600 to-indigo-800 flex items-center justify-center p-6 relative">
 <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-semibold">
 Featured
 </div>
 <h3 className="text-white text-2xl font-black text-center">Tech Innovators Summit 2026</h3>
 </div>
 <CardContent className="p-6">
 <div className="flex flex-col md:flex-row gap-6 mb-6 text-sm text-gray-600">
 <span className="flex items-center gap-1.5"><CalendarDays className="w-4 h-4"/> Nov 15, 2026</span>
 <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4"/> Virtual</span>
 </div>
 
 <div className="space-y-4 mb-6">
 <p className="text-gray-600 text-sm">Join top engineering teams from leading startups and enterprises. Keynotes on AI, Cloud Architecture, and the future of remote work.</p>
 <div className="flex flex-wrap gap-2">
 <span className="px-2 py-1 bg-gray-50 rounded text-xs font-medium text-gray-600 flex items-center gap-1"><Building2 className="w-3 h-3"/> 50+ Employers</span>
 <span className="px-2 py-1 bg-gray-50 rounded text-xs font-medium text-gray-600 flex items-center gap-1"><Ticket className="w-3 h-3"/> Live Interviews</span>
 </div>
 </div>

 <div className="flex items-center justify-between pt-4 border-t border-gray-100">
 <div>
 <p className="text-sm text-gray-500">Ticket Price</p>
 <p className="font-bold text-lg text-green-600">Free</p>
 </div>
 <Button onClick={() => handleRegister("Tech Innovators Summit","Free")} className="rounded-xl bg-[#222364] hover:bg-[#1a1a4b] px-8">
 Register
 </Button>
 </div>
 </CardContent>
 </Card>

 <Card className="rounded-2xl border-gray-100 overflow-hidden">
 <div className="h-40 bg-gradient-to-r from-emerald-600 to-teal-800 flex items-center justify-center p-6">
 <h3 className="text-white text-2xl font-black text-center">Finance & Operations Expo</h3>
 </div>
 <CardContent className="p-6">
 <div className="flex flex-col md:flex-row gap-6 mb-6 text-sm text-gray-600">
 <span className="flex items-center gap-1.5"><CalendarDays className="w-4 h-4"/> Dec 05, 2026</span>
 <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4"/> Virtual</span>
 </div>
 
 <div className="space-y-4 mb-6">
 <p className="text-gray-600 text-sm">The premier hiring event for financial analysts, accountants, HR professionals, and operations managers.</p>
 <div className="flex flex-wrap gap-2">
 <span className="px-2 py-1 bg-gray-50 rounded text-xs font-medium text-gray-600 flex items-center gap-1"><Building2 className="w-3 h-3"/> 30+ Employers</span>
 <span className="px-2 py-1 bg-gray-50 rounded text-xs font-medium text-gray-600 flex items-center gap-1"><Ticket className="w-3 h-3"/> Resume Drop</span>
 </div>
 </div>

 <div className="flex items-center justify-between pt-4 border-t border-gray-100">
 <div>
 <p className="text-sm text-gray-500">Ticket Price</p>
 <p className="font-bold text-lg text-[#222364]">₦2,500</p>
 </div>
 <Button onClick={() => handleRegister("Finance & Ops Expo","2500")} className="rounded-xl bg-[#222364] hover:bg-[#1a1a4b] px-8">
 Buy Ticket
 </Button>
 </div>
 </CardContent>
 </Card>
 </div>
 </div>
 </DashboardLayout>
 );
}
