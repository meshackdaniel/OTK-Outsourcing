"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Search, Paperclip, Send, MoreVertical, FileText, X } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { useState, useRef, useEffect } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────
type Message = {
  id: number;
  from: "me" | "them";
  text?: string;
  file?: { name: string; size: string };
  time: string;
};

type Contact = {
  id: number;
  name: string;
  role: string;
  time: string;
  unread: number;
  online: boolean;
};

// ─── Seed Data ────────────────────────────────────────────────────────────────
const initialConversations: Record<number, Message[]> = {
  1: [
    { id: 1, from: "them", text: "Hi there, I noticed you were looking for a Mechanical Engineer. I have over 5 years of experience in product design using SolidWorks.", time: "10:40 AM" },
    { id: 2, from: "me",   text: "Hello Amanda, your profile looks great. Could you send over a copy of your recent portfolio?", time: "10:41 AM" },
    { id: 3, from: "them", text: "Here is my updated portfolio.", file: { name: "Amanda_Portfolio.pdf", size: "2.4 MB" }, time: "10:42 AM" },
  ],
  2: [
    { id: 1, from: "them", text: "Thank you for the opportunity. Looking forward to hearing from you.", time: "Yesterday" },
    { id: 2, from: "me",   text: "We will be in touch soon Alex.", time: "Yesterday" },
  ],
  3: [
    { id: 1, from: "them", text: "When can we schedule the call?", time: "Oct 22" },
  ],
};

const contactsData: Contact[] = [
  { id: 1, name: "Amanda Temi", role: "Mechanical Engineer", time: "10:42 AM", unread: 2, online: true },
  { id: 2, name: "Alex Nwosu",  role: "Backend Developer",   time: "Yesterday", unread: 0, online: false },
  { id: 3, name: "Sarah John",  role: "UI/UX Designer",      time: "Oct 22",    unread: 0, online: false },
];

function getTime() {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export default function EmployerMessages() {
  const [activeChat, setActiveChat]       = useState<number>(1);
  const [conversations, setConversations] = useState(initialConversations);
  const [contacts, setContacts]           = useState(contactsData);
  const [inputText, setInputText]         = useState("");
  const [search, setSearch]               = useState("");
  const [attachedFile, setAttachedFile]   = useState<File | null>(null);
  const fileInputRef  = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const activeContact = contacts.find((c) => c.id === activeChat)!;
  const messages      = conversations[activeChat] ?? [];

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length, activeChat]);

  // Clear unread on open
  useEffect(() => {
    setContacts((prev) =>
      prev.map((c) => (c.id === activeChat ? { ...c, unread: 0 } : c))
    );
  }, [activeChat]);

  const sendMessage = () => {
    const trimmed = inputText.trim();
    if (!trimmed && !attachedFile) return;

    const newMsg: Message = {
      id: Date.now(),
      from: "me",
      text: trimmed || undefined,
      file: attachedFile
        ? { name: attachedFile.name, size: `${(attachedFile.size / 1024).toFixed(0)} KB` }
        : undefined,
      time: getTime(),
    };

    setConversations((prev) => ({
      ...prev,
      [activeChat]: [...(prev[activeChat] ?? []), newMsg],
    }));

    // Update sidebar last msg
    setContacts((prev) =>
      prev.map((c) =>
        c.id === activeChat
          ? { ...c, time: getTime(), unread: 0 }
          : c
      )
    );

    setInputText("");
    setAttachedFile(null);
  };

  const filteredContacts = contacts.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardLayout type="employer">
      <div className="bg-white rounded-2xl border border-gray-100 flex h-[82vh] overflow-hidden">

        {/* ── Left Pane ─────────────────────────────────────────────────────── */}
        <div className="w-80 border-r border-gray-100 flex flex-col shrink-0">
          <div className="p-4 border-b border-gray-100">
            <h2 className="text-xl font-bold text-[#222364] mb-4">Messages</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search conversations"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 pl-9 pr-4 text-sm outline-none focus:ring-1 focus:ring-[#222364]/20"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {filteredContacts.map((contact) => {
              const lastMsg = conversations[contact.id]?.at(-1);
              return (
                <div
                  key={contact.id}
                  onClick={() => setActiveChat(contact.id)}
                  className={cn(
                    "p-4 border-b border-gray-50 cursor-pointer transition hover:bg-gray-50 border-l-4",
                    activeChat === contact.id
                      ? "bg-[#fcf7e6] border-l-[#f2c060]"
                      : "border-l-transparent"
                  )}
                >
                  <div className="flex gap-3">
                    <div className="relative shrink-0">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-[#222364] text-white text-sm font-bold">
                          {contact.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      {contact.online && (
                        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-semibold truncate text-gray-800">{contact.name}</h3>
                        <span className="text-xs text-gray-400 whitespace-nowrap ml-2">{contact.time}</span>
                      </div>
                      <p className="text-xs text-gray-500 truncate">{contact.role}</p>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-xs text-gray-500 truncate">
                          {lastMsg?.file ? `📎 ${lastMsg.file.name}` : lastMsg?.text ?? ""}
                        </p>
                        {contact.unread > 0 && (
                          <span className="bg-[#222364] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full ml-2 shrink-0">
                            {contact.unread}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Right Pane ────────────────────────────────────────────────────── */}
        <div className="flex-1 flex flex-col bg-[#fafafa] min-w-0">

          {/* Header */}
          <div className="p-4 bg-white border-b border-gray-100 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-[#222364] text-white font-bold">
                    {activeContact?.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                {activeContact?.online && (
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white" />
                )}
              </div>
              <div>
                <h3 className="font-bold text-gray-900">{activeContact?.name}</h3>
                <p className={cn("text-xs font-medium", activeContact?.online ? "text-green-600" : "text-gray-400")}>
                  {activeContact?.online ? "Online" : "Offline"}
                </p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600 p-2">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-6 overflow-y-auto space-y-5">
            <div className="flex justify-center">
              <span className="text-xs font-medium text-gray-400 bg-gray-100 px-3 py-1 rounded-full">Today</span>
            </div>

            {messages.map((msg) => (
              <div
                key={msg.id}
                className={cn("flex gap-3 max-w-[78%]", msg.from === "me" && "ml-auto flex-row-reverse")}
              >
                <Avatar className="h-8 w-8 shrink-0 mt-1">
                  <AvatarFallback className={cn("text-xs font-bold", msg.from === "me" ? "bg-[#f2c060] text-[#222364]" : "bg-[#222364] text-white")}>
                    {msg.from === "me" ? "O" : activeContact?.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div
                    className={cn(
                      "rounded-2xl p-4 text-sm space-y-3",
                      msg.from === "me"
                        ? "bg-[#222364] text-white rounded-tr-sm"
                        : "bg-white border border-gray-100 text-gray-700 rounded-tl-sm"
                    )}
                  >
                    {msg.text && <p>{msg.text}</p>}
                    {msg.file && (
                      <div className={cn("flex items-center gap-3 p-3 rounded-xl w-60", msg.from === "me" ? "bg-white/10" : "bg-gray-50 border border-gray-200")}>
                        <div className="w-9 h-9 bg-red-100 text-red-600 rounded-lg flex items-center justify-center shrink-0">
                          <FileText className="w-4 h-4" />
                        </div>
                        <div className="overflow-hidden">
                          <p className={cn("text-xs font-semibold truncate", msg.from === "me" ? "text-white" : "text-gray-900")}>{msg.file.name}</p>
                          <p className={cn("text-xs", msg.from === "me" ? "text-white/60" : "text-gray-500")}>{msg.file.size}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <span className={cn("text-[10px] text-gray-400 mt-1 block", msg.from === "me" && "text-right")}>
                    {msg.time}
                  </span>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* File preview strip */}
          {attachedFile && (
            <div className="px-4 pt-2 bg-white border-t border-gray-100">
              <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl p-2 w-fit">
                <FileText className="w-4 h-4 text-red-500" />
                <span className="text-xs font-medium text-gray-700 max-w-[140px] truncate">{attachedFile.name}</span>
                <button onClick={() => setAttachedFile(null)} className="text-gray-400 hover:text-red-500">
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-100 shrink-0">
            <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl p-2 pr-3">
              <input ref={fileInputRef} type="file" className="hidden" onChange={(e) => setAttachedFile(e.target.files?.[0] ?? null)} />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="p-2 text-gray-400 hover:text-[#222364] transition"
              >
                <Paperclip className="w-5 h-5" />
              </button>
              <input
                type="text"
                placeholder="Type your message..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), sendMessage())}
                className="flex-1 bg-transparent border-none text-sm outline-none"
              />
              <button
                onClick={sendMessage}
                disabled={!inputText.trim() && !attachedFile}
                className="p-2 bg-[#222364] text-white rounded-lg hover:bg-[#1a1a4b] transition disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
