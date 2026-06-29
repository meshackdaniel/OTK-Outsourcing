"use client";

import { DashboardLayout } from"@/components/layout/DashboardLayout";
import { Input } from"@/components/ui/input";
import { Button } from"@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from"@/components/ui/avatar";
import { Send, Paperclip, MoreVertical, Phone, Video, ArrowLeft } from"lucide-react";
import Link from"next/link";

export default function SupportChatPage() {
 return (
 <DashboardLayout type="talent">
 <div className="bg-white rounded-2xl border border-gray-100 flex flex-col w-full overflow-hidden h-[calc(100vh-10rem)] max-w-4xl mx-auto">
 
 {/* Chat Header */}
 <div className="p-4 md:p-6 border-b border-gray-100 bg-white flex items-center justify-between">
 <div className="flex items-center gap-4">
 <Link href="/talent/help">
 <Button variant="ghost"size="icon"className="text-gray-500 mr-2 hover:bg-gray-50 rounded-xl">
 <ArrowLeft className="w-5 h-5"/>
 </Button>
 </Link>
 <div className="relative">
 <Avatar className="w-12 h-12 border-2 border-white">
 <AvatarFallback className="bg-[#222364] text-white font-bold">
 OS
 </AvatarFallback>
 </Avatar>
 <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></span>
 </div>
 <div>
 <h3 className="font-black text-gray-900 text-lg">OaaS Support</h3>
 <p className="text-sm text-green-600 font-medium">Typically replies in under 5 mins</p>
 </div>
 </div>
 <div className="hidden md:flex items-center gap-2">
 <Button variant="ghost"size="icon"className="text-gray-500 rounded-xl hover:bg-gray-50">
 <MoreVertical className="w-5 h-5"/>
 </Button>
 </div>
 </div>

 {/* Chat Messages */}
 <div className="flex-1 p-6 overflow-y-auto space-y-6 bg-gray-50/50">
 <div className="flex justify-center">
 <span className="text-xs font-semibold text-gray-500 bg-white border border-gray-100 px-4 py-1.5 rounded-full">
 Today
 </span>
 </div>
 
 <div className="flex flex-col md:flex-row gap-4 max-w-[85%] md:max-w-[70%]">
 <Avatar className="w-8 h-8 flex-shrink-0 mt-auto">
 <AvatarFallback className="bg-[#222364] text-white text-xs font-bold">
 OS
 </AvatarFallback>
 </Avatar>
 <div className="bg-white p-4 rounded-2xl rounded-bl-none border border-gray-100">
 <p className="text-gray-700 text-sm leading-relaxed">
 Hi there! Welcome to OaaS Support. How can we help you today? You can ask me about your wallet, jobs, match score, or anything else!
 </p>
 <p className="text-[11px] text-gray-400 mt-2 font-medium">10:28 AM</p>
 </div>
 </div>
 </div>

 {/* Chat Input */}
 <div className="p-4 bg-white border-t border-gray-100">
 <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-2xl border border-gray-100 focus-within:border-[#222364]/30 focus-within:ring-4 focus-within:ring-[#222364]/5 transition-all">
 <Button variant="ghost"size="icon"className="text-gray-400 hover:text-gray-600 rounded-xl shrink-0">
 <Paperclip className="w-5 h-5"/>
 </Button>
 <Input 
 placeholder="Type your message to support..."
 className="flex-1 bg-transparent border-0 focus-visible:ring-0 text-gray-700 text-sm md:text-base px-2 h-10"
 />
 <Button className="bg-[#222364] hover:bg-[#1a1b4b] text-white rounded-xl px-5 shrink-0">
 <Send className="w-4 h-4 md:mr-2"/>
 <span className="hidden md:inline font-semibold">Send</span>
 </Button>
 </div>
 </div>

 </div>
 </DashboardLayout>
 );
}
