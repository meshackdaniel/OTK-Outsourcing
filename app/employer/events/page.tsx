"use client";

import { DashboardLayout } from"@/components/layout/DashboardLayout";
import { Button } from"@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from"@/components/ui/card";
import { CalendarDays, MapPin, Users, Ticket, PlayCircle } from"lucide-react";
import { toast } from"sonner";

export default function EmployerEventsPage() {
 const handlePurchase = (item: string) => {
 toast.success(`${item} reserved successfully. Invoice sent to billing.`);
 };

 return (
 <DashboardLayout type="employer">
 <div className="space-y-8">
 <div>
 <h1 className="text-3xl font-black text-[#222364]">Virtual Job Fairs & Events</h1>
 <p className="text-gray-500 mt-2 max-w-2xl">
 Sponsor or host booths at upcoming industry-specific job fairs to connect directly with top-tier talent.
 </p>
 </div>

 {/* Upcoming Events */}
 <section className="space-y-6">
 <h2 className="text-xl font-black text-gray-900">Upcoming Career Summits</h2>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <Card className="rounded-2xl border-gray-100 overflow-hidden">
 <div className="h-32 bg-gradient-to-r from-blue-600 to-indigo-800 flex items-center justify-center p-6 relative">
 <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-semibold">
 Featured
 </div>
 <h3 className="text-white text-2xl font-black text-center">Tech Innovators Summit 2026</h3>
 </div>
 <CardContent className="p-6">
 <div className="flex flex-col md:flex-row gap-6 mb-6 text-sm text-gray-600">
 <span className="flex items-center gap-1.5"><CalendarDays className="w-4 h-4"/> Nov 15, 2026</span>
 <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4"/> Virtual Event</span>
 <span className="flex items-center gap-1.5"><Users className="w-4 h-4"/> 5k+ Attendees</span>
 </div>
 
 <div className="space-y-3">
 <div className="flex flex-col md:flex-row justify-between items-center p-3 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors">
 <div>
 <p className="font-semibold text-gray-900">Virtual Corporate Booth</p>
 <p className="text-xs text-gray-500">Host live interviews and collect CVs.</p>
 </div>
 <div className="flex items-center gap-4">
 <span className="font-bold text-[#222364]">₦250,000</span>
 <Button onClick={() => handlePurchase("Tech Summit Booth")} size="sm"className="rounded-lg">Reserve</Button>
 </div>
 </div>
 <div className="flex flex-col md:flex-row justify-between items-center p-3 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors">
 <div>
 <p className="font-semibold text-gray-900">Gold Sponsorship</p>
 <p className="text-xs text-gray-500">Logo on main stage + keynote slot.</p>
 </div>
 <div className="flex items-center gap-4">
 <span className="font-bold text-[#222364]">₦1,500,000</span>
 <Button onClick={() => handlePurchase("Tech Summit Sponsorship")} size="sm"variant="outline"className="rounded-lg">Contact Sales</Button>
 </div>
 </div>
 </div>
 </CardContent>
 </Card>

 <Card className="rounded-2xl border-gray-100 overflow-hidden">
 <div className="h-32 bg-gradient-to-r from-emerald-600 to-teal-800 flex items-center justify-center p-6">
 <h3 className="text-white text-2xl font-black text-center">Finance & Operations Expo</h3>
 </div>
 <CardContent className="p-6">
 <div className="flex flex-col md:flex-row gap-6 mb-6 text-sm text-gray-600">
 <span className="flex items-center gap-1.5"><CalendarDays className="w-4 h-4"/> Dec 05, 2026</span>
 <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4"/> Virtual Event</span>
 <span className="flex items-center gap-1.5"><Users className="w-4 h-4"/> 3k+ Attendees</span>
 </div>
 
 <div className="space-y-3">
 <div className="flex flex-col md:flex-row justify-between items-center p-3 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors">
 <div>
 <p className="font-semibold text-gray-900">Virtual Corporate Booth</p>
 <p className="text-xs text-gray-500">Host live interviews and collect CVs.</p>
 </div>
 <div className="flex items-center gap-4">
 <span className="font-bold text-[#222364]">₦200,000</span>
 <Button onClick={() => handlePurchase("Finance Expo Booth")} size="sm"className="rounded-lg">Reserve</Button>
 </div>
 </div>
 </div>
 </CardContent>
 </Card>
 </div>
 </section>

 {/* Ad Slots */}
 <section className="space-y-6 pt-6 border-t border-gray-100">
 <h2 className="text-xl font-black text-gray-900">Advertising Slots</h2>
 <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
 <Card className="rounded-2xl border-gray-100 text-center p-6">
 <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
 <Ticket className="w-6 h-6"/>
 </div>
 <h3 className="font-black text-gray-900 mb-1">Pre-Event Newsletter Ad</h3>
 <p className="text-sm text-gray-500 mb-4">Sent to 50k+ registered talents.</p>
 <div className="font-bold text-lg text-[#222364] mb-4">₦100,000</div>
 <Button onClick={() => handlePurchase("Newsletter Ad")} variant="outline"className="w-full rounded-xl">Purchase Slot</Button>
 </Card>
 <Card className="rounded-2xl border-gray-100 text-center p-6">
 <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
 <PlayCircle className="w-6 h-6"/>
 </div>
 <h3 className="font-black text-gray-900 mb-1">Waiting Room Video</h3>
 <p className="text-sm text-gray-500 mb-4">Play your 30s promo video before sessions.</p>
 <div className="font-bold text-lg text-[#222364] mb-4">₦350,000</div>
 <Button onClick={() => handlePurchase("Video Ad")} variant="outline"className="w-full rounded-xl">Purchase Slot</Button>
 </Card>
 </div>
 </section>

 </div>
 </DashboardLayout>
 );
}
