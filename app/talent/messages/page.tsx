"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Send, Paperclip, MoreVertical, Phone, Video } from "lucide-react";
import { useState } from "react";

const conversations = [
  { id: 1, name: "TechNova Solutions", lastMessage: "Can we schedule an interview for...", time: "10:30 AM", unread: 2, online: true },
  { id: 2, name: "BuildRight Logistics", lastMessage: "Your daily log has been approved.", time: "Yesterday", unread: 0, online: false },
  { id: 3, name: "FinTrust Bank", lastMessage: "Please sign the NDA document.", time: "Oct 24", unread: 0, online: true },
];

export default function TalentMessagesPage() {
  const [activeChat, setActiveChat] = useState(conversations[0]);

  return (
    <DashboardLayout type="talent">
      <div className="bg-white rounded-2xl border border-gray-100 flex w-full overflow-hidden h-[calc(100vh-10rem)]">
          
          {/* Sidebar */}
          <div className="w-1/3 border-r border-gray-100 flex flex-col h-full">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-2xl font-black text-gray-900 mb-4">Messages</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input placeholder="Search conversations..." className="pl-10 bg-gray-50 border-0 rounded-xl" />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto">
              {conversations.map((chat) => (
                <div 
                  key={chat.id}
                  onClick={() => setActiveChat(chat)}
                  className={`p-4 border-b border-gray-50 flex items-center gap-4 cursor-pointer transition ${
                    activeChat.id === chat.id ? "bg-gray-50" : "hover:bg-gray-50"
                  }`}
                >
                  <div className="relative">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={`/avatars/${chat.id}.png`} />
                      <AvatarFallback className="bg-[#222364] text-white">
                        {chat.name.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    {chat.online && (
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                    )}
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <div className="flex items-center justify-between">
                      <h3 className="font-black text-gray-900 truncate">{chat.name}</h3>
                      <span className="text-xs text-gray-400 flex-shrink-0">{chat.time}</span>
                    </div>
                    <p className="text-sm text-gray-500 truncate mt-1">{chat.lastMessage}</p>
                  </div>
                  {chat.unread > 0 && (
                    <div className="w-5 h-5 rounded-full bg-[#f2c060] text-[#222364] text-xs font-bold flex items-center justify-center">
                      {chat.unread}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Main Chat Area */}
          <div className="flex-1 flex flex-col h-full bg-gray-50/30">
            {/* Chat Header */}
            <div className="p-6 border-b border-gray-100 bg-white flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="w-10 h-10">
                  <AvatarFallback className="bg-[#222364] text-white">
                    {activeChat.name.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-black text-gray-900">{activeChat.name}</h3>
                  <p className="text-xs text-green-600 font-medium">Online</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="text-gray-500">
                  <MoreVertical className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-6 overflow-y-auto space-y-6">
              <div className="flex justify-center">
                <span className="text-xs font-medium text-gray-400 bg-gray-50 px-3 py-1 rounded-full">
                  Today
                </span>
              </div>
              
              <div className="flex flex-col md:flex-row gap-4 max-w-[80%]">
                <Avatar className="w-8 h-8 flex-shrink-0 mt-auto">
                  <AvatarFallback className="bg-[#222364] text-white">
                    {activeChat.name.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="bg-white p-4 rounded-2xl rounded-bl-none border border-gray-100">
                  <p className="text-gray-700 text-sm">Hi there! We reviewed your profile and would love to schedule an interview for the Senior Developer role.</p>
                  <p className="text-xs text-gray-400 mt-2">10:28 AM</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 max-w-[80%] ml-auto justify-end">
                <div className="bg-[#222364] p-4 rounded-2xl rounded-br-none text-white">
                  <p className="text-sm text-white/90">That sounds great! I am available tomorrow after 2 PM.</p>
                  <p className="text-xs text-white/60 mt-2 text-right">10:30 AM</p>
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className="p-4 bg-white border-t border-gray-100">
              <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-2xl border border-gray-100">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-600 rounded-xl">
                  <Paperclip className="w-5 h-5" />
                </Button>
                <Input 
                  placeholder="Type a message..." 
                  className="flex-1 bg-transparent border-0 focus-visible:ring-0 text-gray-700 "
                />
                <Button className="bg-[#222364] hover:bg-[#1a1b4b] text-white rounded-xl px-4">
                  <Send className="w-4 h-4 mr-2" />
                  Send
                </Button>
              </div>
            </div>
          </div>

        </div>
    </DashboardLayout>
  );
}

