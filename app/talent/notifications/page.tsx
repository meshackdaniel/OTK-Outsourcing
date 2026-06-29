"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Calendar, Info, CheckCircle2 } from "lucide-react";

const notifications = [
  {
    id: 1,
    type: "match",
    title: "New Job Match: Senior React Developer",
    message: "Your profile matches a new job posting from TechNova Solutions. They are looking for a Senior React Developer with 5+ years of experience.",
    time: "2 hours ago",
    read: false,
    icon: Briefcase,
    color: "text-blue-600",
    bg: "bg-gray-50"
  },
  {
    id: 2,
    type: "interview",
    title: "Interview Request",
    message: "BuildRight Logistics has requested an interview for tomorrow at 2:00 PM. Please confirm your availability in the messages tab.",
    time: "Yesterday",
    read: false,
    icon: Calendar,
    color: "text-purple-600",
    bg: "bg-purple-50"
  },
  {
    id: 3,
    type: "alert",
    title: "Work Log Approved",
    message: "Your work log for the week of Oct 18 - Oct 24 has been approved. Your payout will be processed shortly.",
    time: "Oct 24, 2026",
    read: true,
    icon: CheckCircle2,
    color: "text-green-600",
    bg: "bg-green-50"
  },
  {
    id: 4,
    type: "system",
    title: "Platform Maintenance",
    message: "The OaaS platform will undergo scheduled maintenance this Sunday from 2 AM to 4 AM EST.",
    time: "Oct 22, 2026",
    read: true,
    icon: Info,
    color: "text-gray-600",
    bg: "bg-gray-50"
  }
];

export default function TalentNotificationsPage() {
  return (
    <DashboardLayout type="talent">
      <div>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black text-gray-900">Notifications</h1>
            <p className="text-gray-500 mt-1">Stay updated on job matches, interviews, and platform alerts.</p>
          </div>
          <Button variant="outline" className="border-gray-200 text-gray-600 rounded-xl bg-white hover:bg-gray-50">
            <CheckCircle2 className="w-4 h-4 mr-2" />
            Mark all as read
          </Button>
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
          {notifications.map((notif) => (
            <Card key={notif.id} className={`rounded-2xl border-0 overflow-hidden transition ${notif.read ? 'bg-white opacity-70' : 'bg-white'}`}>
              <CardContent className="p-6 flex items-start gap-4">
                <div className={`p-3 rounded-full flex-shrink-0 ${notif.bg}`}>
                  <notif.icon className={`w-6 h-6 ${notif.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className={`font-bold text-lg truncate ${notif.read ? 'text-gray-700' : 'text-gray-900'}`}>
                      {notif.title}
                    </h3>
                    <span className="text-xs font-medium text-gray-400 flex-shrink-0">{notif.time}</span>
                  </div>
                  <p className={`mt-1 text-sm ${notif.read ? 'text-gray-500' : 'text-gray-600 font-medium'}`}>
                    {notif.message}
                  </p>
                  
                  {!notif.read && notif.type === "match" && (
                    <div className="mt-4 flex gap-3">
                      <Button className="bg-[#222364] hover:bg-[#1a1b4b] text-white rounded-xl px-6">
                        View Job Details
                      </Button>
                      <Button variant="outline" className="rounded-xl border-gray-200 text-gray-600">
                        Dismiss
                      </Button>
                    </div>
                  )}
                  {!notif.read && notif.type === "interview" && (
                    <div className="mt-4 flex gap-3">
                      <Button className="bg-[#222364] hover:bg-[#1a1b4b] text-white rounded-xl px-6">
                        Respond in Messages
                      </Button>
                    </div>
                  )}
                </div>
                {!notif.read && (
                  <div className="w-2.5 h-2.5 bg-[#f2c060] rounded-full flex-shrink-0 mt-2"></div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </DashboardLayout>
  );
}

