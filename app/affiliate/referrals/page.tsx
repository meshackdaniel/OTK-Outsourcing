"use client";

import { useState } from "react";
import { Copy, Users, Briefcase, Activity } from "lucide-react";

const NairaSign = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M6 21V3l12 18V3" />
    <path d="M4 10h16" />
    <path d="M4 14h16" />
  </svg>
);
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const stats = [
  { title: "Total Referrals", value: "142", change: "+12%", icon: Users },
  { title: "Active Referrals", value: "38", change: "+5%", icon: Activity },
  { title: "Pending Commissions", value: "₦45,000", change: "-2%", icon: Briefcase },
  { title: "Total Earned", value: "₦1,250,000", change: "+18%", icon: NairaSign },
];

const clientReferrals = [
  { id: "CR-1029", name: "TechNova Solutions", date: "Oct 12, 2026", status: "Active", type: "Subscription", earned: "₦15,000" },
  { id: "CR-1030", name: "BuildRight Logistics", date: "Oct 15, 2026", status: "Pending", type: "Job Activation", earned: "₦0" },
  { id: "CR-1031", name: "FinTrust Bank", date: "Oct 18, 2026", status: "Expired", type: "None", earned: "₦0" },
  { id: "CR-1032", name: "HealthPlus Clinics", date: "Oct 20, 2026", status: "Active", type: "Managed OaaS", earned: "₦45,000" },
];

const talentReferrals = [
  { id: "TR-2041", name: "John Doe", date: "Oct 10, 2026", status: "Deployed", role: "Frontend Developer", earned: "₦20,000" },
  { id: "TR-2042", name: "Sarah Smith", date: "Oct 14, 2026", status: "Pending", role: "Data Analyst", earned: "₦0" },
  { id: "TR-2043", name: "Mike Johnson", date: "Oct 16, 2026", status: "Registered", role: "Product Manager", earned: "₦0" },
  { id: "TR-2044", name: "Emily Davis", date: "Oct 19, 2026", status: "Deployed", role: "UX Designer", earned: "₦15,000" },
];

import { DashboardLayout } from "@/components/layout/DashboardLayout";

export default function ReferralsPage() {
  const [activeTab, setActiveTab] = useState<"clients" | "talents">("clients");
  const referralLink = "https://oaas.com/ref/AF-99210";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    toast.success("Referral link copied to clipboard!");
  };

  return (
    <DashboardLayout type="affiliate">
    <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Referrals</h1>
          <p className="text-gray-500 mt-1">Track your client and talent referrals and monitor your commissions.</p>
        </div>
        <div className="flex items-center gap-2 bg-white p-2 rounded-xl border border-gray-200">
          <Input 
            value={referralLink} 
            readOnly 
            className="border-0 focus-visible:ring-0 bg-transparent w-64 text-gray-600"
          />
          <Button onClick={copyToClipboard} className="bg-[#222364] hover:bg-[#1a1b4b] text-white rounded-lg">
            <Copy className="w-4 h-4 mr-2" />
            Copy Link
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Card key={i} className="rounded-2xl border-0">
            <CardContent className="p-6 flex flex-col justify-between h-full">
              <div className="flex items-center justify-between">
                <div className="p-3 bg-gray-50 rounded-xl">
                  <stat.icon className="w-6 h-6 text-[#222364]" />
                </div>
                <Badge variant="secondary" className="bg-green-50 text-green-700 hover:bg-green-50 border-0">
                  {stat.change}
                </Badge>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-500 font-medium">{stat.title}</p>
                <h3 className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="bg-white rounded-2xl border-0 overflow-hidden">
        {/* Tabs */}
        <div className="flex items-center border-b border-gray-100 p-4 gap-4">
          <button
            onClick={() => setActiveTab("clients")}
            className={`px-4 py-2 font-semibold text-sm rounded-lg transition ${
              activeTab === "clients" ? "bg-gray-50 text-[#222364]" : "text-gray-500 hover:text-gray-900"
            }`}
          >
            Client Referrals
          </button>
          <button
            onClick={() => setActiveTab("talents")}
            className={`px-4 py-2 font-semibold text-sm rounded-lg transition ${
              activeTab === "talents" ? "bg-gray-50 text-[#222364]" : "text-gray-500 hover:text-gray-900"
            }`}
          >
            Talent Referrals
          </button>
        </div>

        {/* Table Area */}
        <div className="p-0 overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 text-gray-500 font-medium border-b border-gray-100">
              <tr>
                <th className="px-6 py-4">Referral ID</th>
                <th className="px-6 py-4">{activeTab === "clients" ? "Company Name" : "Talent Name"}</th>
                <th className="px-6 py-4">Date Referred</th>
                <th className="px-6 py-4">{activeTab === "clients" ? "Trigger Event" : "Role"}</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Earned</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {(activeTab === "clients" ? clientReferrals : talentReferrals).map((ref) => (
                <tr key={ref.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 font-medium text-gray-900">{ref.id}</td>
                  <td className="px-6 py-4">{ref.name}</td>
                  <td className="px-6 py-4">{ref.date}</td>
                  <td className="px-6 py-4">{'type' in ref ? ref.type : ref.role}</td>
                  <td className="px-6 py-4">
                    <Badge
                      variant="outline"
                      className={`border-0 ${
                        ref.status === "Active" || ref.status === "Deployed"
                          ? "bg-green-50 text-green-700"
                          : ref.status === "Pending" || ref.status === "Registered"
                          ? "bg-yellow-50 text-yellow-700"
                          : "bg-red-50 text-red-700"
                      }`}
                    >
                      {ref.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-right font-semibold text-gray-900">{ref.earned}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {(activeTab === "clients" ? clientReferrals : talentReferrals).length === 0 && (
            <div className="p-8 text-center text-gray-500">
              No referrals found.
            </div>
          )}
        </div>
      </div>
    </div>
    </DashboardLayout>
  );
}
