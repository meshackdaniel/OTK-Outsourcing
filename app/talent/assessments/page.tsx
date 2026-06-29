"use client";

import { DashboardLayout } from"@/components/layout/DashboardLayout";
import { Button } from"@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from"@/components/ui/card";
import { Badge } from"@/components/ui/badge";
import { ShieldCheck, Brain, Code, Terminal, Play, Lock } from"lucide-react";
import { toast } from"sonner";

export default function TalentAssessmentsPage() {
 const isSubscribed = false;

 const handleStart = (test: string, locked: boolean) => {
 if (locked && !isSubscribed) {
 toast.error("Please purchase this assessment or subscribe to Talent Pro Plan to unlock.");
 return;
 }
 toast.success(`Starting ${test} assessment...`);
 };

 const handleSubscribe = () => {
 toast.success("Subscribing to Talent Pro Plan...");
 };

 return (
 <DashboardLayout type="talent">
 <div className="space-y-8">
 <div>
 <h1 className="text-3xl font-black text-[#222364]">Skill Assessments & Certifications</h1>
 <p className="text-gray-500 mt-2 max-w-2xl">
 Prove your expertise to employers. Earning a verified OaaS badge bumps your profile to the top of search results.
 </p>
 </div>

 {!isSubscribed && (
 <Card className="rounded-2xl border-[#222364]/20 bg-gray-50/50">
 <CardContent className="flex flex-col md:flex-row items-center justify-between p-6 gap-6">
 <div>
 <h3 className="text-lg font-black text-[#222364] flex items-center gap-2">
 <Brain className="w-5 h-5"/> Talent Pro Plan
 </h3>
 <p className="text-sm text-gray-600 mt-1">Get 2 premium skill assessments included every month.</p>
 </div>
 <div className="flex items-center gap-4 w-full md:w-auto">
 <div className="text-right hidden sm:block">
 <p className="text-xl font-bold text-[#222364]">₦10,000<span className="text-sm font-normal text-gray-500">/mo</span></p>
 </div>
 <Button onClick={handleSubscribe} className="w-full md:w-auto h-12 rounded-xl bg-[#222364] hover:bg-[#1a1a4b]">
 Subscribe Now
 </Button>
 </div>
 </CardContent>
 </Card>
 )}

 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 {[
 { title:"Frontend React Developer", category:"Engineering", icon: Code, time:"45 mins", questions: 30, price:"₦5,000", locked: true },
 { title:"Customer Service Mastery", category:"Operations", icon: ShieldCheck, time:"30 mins", questions: 20, price:"Free", locked: false },
 { title:"Advanced Data Analysis", category:"Data", icon: Terminal, time:"60 mins", questions: 40, price:"₦7,500", locked: true },
 { title:"Project Management Foundations", category:"Management", icon: Brain, time:"45 mins", questions: 30, price:"Free", locked: false },
 ].map((test, i) => (
 <Card key={i} className="rounded-2xl border-gray-100 overflow-hidden flex flex-col">
 <div className="p-6 pb-0 flex flex-col md:flex-row justify-between items-start">
 <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-600 mb-4">
 <test.icon className="w-6 h-6"/>
 </div>
 {test.locked && !isSubscribed ? (
 <Badge variant="secondary"className="bg-gray-100 text-gray-600 font-medium">
 <Lock className="w-3 h-3 mr-1"/> Premium ({test.price})
 </Badge>
 ) : (
 <Badge variant="default"className="bg-green-100 text-green-700 hover:bg-green-100 border-green-200">
 Unlocked
 </Badge>
 )}
 </div>
 <CardHeader className="pt-0">
 <CardDescription className="text-xs uppercase tracking-wider font-semibold text-indigo-500">{test.category}</CardDescription>
 <CardTitle className="text-lg text-gray-900">{test.title}</CardTitle>
 </CardHeader>
 <CardContent className="mt-auto">
 <div className="flex flex-col md:flex-row gap-4 text-sm text-gray-500 mb-6">
 <span>{test.time}</span>
 <span>•</span>
 <span>{test.questions} Questions</span>
 </div>
 <Button 
 onClick={() => handleStart(test.title, test.locked)}
 variant={test.locked && !isSubscribed ?"outline":"default"}
 className={`w-full rounded-xl h-10 ${!test.locked || isSubscribed ?'bg-[#222364] hover:bg-[#1a1a4b]':'border-gray-200 hover:bg-gray-50'}`}
 >
 {test.locked && !isSubscribed ?"Unlock Assessment": <><Play className="w-4 h-4 mr-2"/> Start Assessment</>}
 </Button>
 </CardContent>
 </Card>
 ))}
 </div>
 </div>
 </DashboardLayout>
 );
}
