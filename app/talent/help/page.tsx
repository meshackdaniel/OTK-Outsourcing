"use client";

import { DashboardLayout } from"@/components/layout/DashboardLayout";
import { Button } from"@/components/ui/button";
import { Input } from"@/components/ui/input";
import { Search, Book, CreditCard, Briefcase, Settings, ChevronDown, Mail, MessageSquare } from"lucide-react";
import Link from"next/link";
import { useState } from"react";

export default function TalentHelpPage() {
 const [openFaq, setOpenFaq] = useState<number | null>(0);
 const [searchQuery, setSearchQuery] = useState("");

 const categories = [
 { id:"getting-started", icon: Book, title:"Getting Started", desc:"Setting up your profile and finding your first job."},
 { id:"payments-wallet", icon: CreditCard, title:"Payments & Wallet", desc:"Understanding withdrawals, fees, and milestones."},
 { id:"jobs-offers", icon: Briefcase, title:"Jobs & Offers", desc:"Navigating contracts, active jobs, and invitations."},
 { id:"account-settings", icon: Settings, title:"Account Settings", desc:"Updating passwords, email preferences, and security."}
 ];

 const faqs = [
 { 
 q:"How do I withdraw funds from my wallet?", 
 a:"You can withdraw funds by navigating to your Wallet page and clicking'Withdraw'. Ensure you have linked a valid bank account or payout method first. Transfers typically take 1-2 business days to process depending on your region."
 },
 { 
 q:"What happens if a client disputes a milestone?", 
 a:"If a milestone is disputed, our arbitration team will step in to review the work submitted against the original requirements. We recommend keeping all project communication within the OaaS platform to ensure a fair resolution."
 },
 { 
 q:"How can I improve my Match Score?", 
 a:"Your Match Score is dynamically generated based on your profile completeness, past job ratings, and how well your tagged skills align with client requirements. Adding portfolio items and verifying your skills will naturally boost your score."
 },
 { 
 q:"Is there a limit to how many jobs I can apply for?", 
 a:"Standard talent accounts can submit up to 30 proposals per month. Upgrading to Pro+ removes this limit and highlights your proposals to top-tier enterprise clients."
 }
 ];

 const filteredCategories = categories.filter(c => 
 c.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
 c.desc.toLowerCase().includes(searchQuery.toLowerCase())
 );

 const filteredFaqs = faqs.filter(f => 
 f.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
 f.a.toLowerCase().includes(searchQuery.toLowerCase())
 );

 return (
 <DashboardLayout type="talent">
 
 {/* Header section with search */}
 <div className="bg-[#222364] rounded-3xl p-10 md:p-14 text-white text-center relative overflow-hidden mb-12">
 <div className="relative z-10 max-w-2xl mx-auto">
 <h1 className="text-3xl md:text-4xl font-black mb-4">How can we help you today?</h1>
 <p className="text-blue-200 mb-8 text-sm md:text-base">Search for answers, browse our articles, or reach out to our support team.</p>
 
 <div className="relative">
 <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"/>
 <Input 
 value={searchQuery}
 onChange={(e) => setSearchQuery(e.target.value)}
 placeholder="Search for articles, topics, or FAQs..."
 className="pl-12 h-14 rounded-2xl bg-white border-0 text-gray-900 text-sm md:text-base focus-visible:ring-2 focus-visible:ring-[#f2c060]"
 />
 </div>
 </div>
 
 {/* Background decorations */}
 <div className="absolute -left-20 -top-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
 <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-gray-500/10 rounded-full blur-3xl"></div>
 </div>

 <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
 
 <div className="lg:col-span-2 space-y-12">
 {/* Categories */}
 <section>
 <h2 className="text-xl font-black text-gray-900 mb-6">Browse by Category</h2>
 {filteredCategories.length > 0 ? (
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
 {filteredCategories.map((cat, i) => (
 <Link href={`/talent/help/${cat.id}`} key={i} className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-[#222364]/30 transition group block">
 <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#222364]/5 transition">
 <cat.icon className="w-6 h-6 text-[#222364]"/>
 </div>
 <h3 className="font-black text-gray-900 mb-2 group-hover:text-[#222364] transition">{cat.title}</h3>
 <p className="text-sm text-gray-500 leading-relaxed">{cat.desc}</p>
 </Link>
 ))}
 </div>
 ) : (
 <div className="bg-white p-8 rounded-2xl border border-gray-100 text-center">
 <p className="text-gray-500">No categories found matching"{searchQuery}"</p>
 </div>
 )}
 </section>

 {/* FAQs */}
 <section>
 <h2 className="text-xl font-black text-gray-900 mb-6">Frequently Asked Questions</h2>
 {filteredFaqs.length > 0 ? (
 <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden">
 {filteredFaqs.map((faq, i) => (
 <div key={i} className="border-b border-gray-100 last:border-0">
 <button 
 onClick={() => setOpenFaq(openFaq === i ? null : i)}
 className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition"
 >
 <span className="font-semibold text-gray-900 pr-8">{faq.q}</span>
 <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openFaq === i ?'rotate-180':''}`} />
 </button>
 {openFaq === i && (
 <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">
 {faq.a}
 </div>
 )}
 </div>
 ))}
 </div>
 ) : (
 <div className="bg-white p-8 rounded-3xl border border-gray-100 text-center">
 <p className="text-gray-500">No FAQs found matching"{searchQuery}"</p>
 </div>
 )}
 </section>
 </div>

 {/* Sidebar Support Contact */}
 <div className="space-y-6">
 <div className="bg-white rounded-3xl p-8 border border-gray-100 text-center">
 <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
 <MessageSquare className="w-8 h-8 text-blue-600"/>
 </div>
 <h3 className="font-black text-gray-900 text-lg mb-2">Still need help?</h3>
 <p className="text-sm text-gray-500 mb-6 leading-relaxed">
 Our support team is available 24/7 to help you resolve any issues or answer your questions.
 </p>
 <Link href="/talent/help/chat"className="w-full block mb-3">
 <Button className="w-full h-11 rounded-xl bg-[#222364] hover:bg-[#1a1b4b] text-white font-bold">
 Chat with Support
 </Button>
 </Link>
 <Button variant="outline"className="w-full h-11 rounded-xl border-gray-200 text-gray-700 font-bold hover:bg-gray-50">
 <Mail className="w-4 h-4 mr-2"/>
 Email Us
 </Button>
 </div>

 <div className="bg-[#f2c060] rounded-3xl p-8 text-[#222364]">
 <h3 className="font-black text-lg mb-2">Community Forum</h3>
 <p className="text-sm text-[#222364]/80 font-medium mb-6 leading-relaxed">
 Join thousands of other talents to share tips, request portfolio reviews, and network.
 </p>
 <Button className="bg-white text-[#222364] hover:bg-gray-50 font-bold w-full h-11 rounded-xl">
 Visit Forum
 </Button>
 </div>
 </div>

 </div>

 </DashboardLayout>
 );
}
