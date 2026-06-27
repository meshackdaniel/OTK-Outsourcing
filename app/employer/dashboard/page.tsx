"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import {
  Users,
  Briefcase,
  Wallet,
  CheckCircle2,
  MoreVertical,
  Activity,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  CartesianGrid,
} from "recharts";

const funnelData = [
  { value: 1245, name: "Applications", fill: "#222364" },
  { value: 420,  name: "Interviewed",  fill: "#3a3b9e" },
  { value: 48,   name: "Hired",        fill: "#f2c060" },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const d = payload[0].payload;
    const idx = funnelData.findIndex((f) => f.name === d.name);
    const prev = funnelData[idx - 1];
    const rate = prev ? Math.round((d.value / prev.value) * 100) : 100;
    return (
      <div className="bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-lg text-sm">
        <p className="font-bold text-gray-900">{d.name}</p>
        <p className="text-[#222364] font-semibold">{d.value.toLocaleString()} candidates</p>
        {prev && (
          <p className="text-gray-500 text-xs mt-1">
            {rate}% conversion from {prev.name}
          </p>
        )}
      </div>
    );
  }
  return null;
};

export default function EmployerDashboard() {
  const metrics = [
    { title: "Total sourcing spend", value: "₦4,250,000", trend: "+ 12% vs last month", icon: Wallet,       trendUp: true },
    { title: "Vetted applications",  value: "1,245",       trend: "+ 8% vs last month",  icon: Users,        trendUp: true },
    { title: "Successful placement", value: "48",           trend: "+ 15% vs last month", icon: Briefcase,    trendUp: true },
    { title: "Average match rate",   value: "92%",          trend: "+ 5% vs last month",  icon: CheckCircle2, trendUp: true },
  ];

  return (
    <DashboardLayout type="employer">
      <div className="space-y-6">

        {/* Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 flex flex-col justify-between border border-gray-100">
              <div className="flex items-center gap-2 text-gray-600 mb-4 font-medium">
                <metric.icon className="w-5 h-5 text-gray-500" />
                <span>{metric.title}</span>
              </div>
              <div className="text-4xl font-bold text-[#222364]">{metric.value}</div>
              <div className={cn(
                "mt-4 inline-flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-md self-start",
                metric.trendUp ? "text-green-700 bg-green-50" : "text-red-700 bg-red-50"
              )}>
                {metric.trend}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Recruitment Funnel Chart */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-gray-100 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-[#222364]">Recruitment Funnel</h2>
                <p className="text-sm text-gray-400 mt-0.5">Candidate progression overview</p>
              </div>
              <select className="bg-gray-50 border border-gray-200 text-sm rounded-lg px-3 py-2 outline-none cursor-pointer">
                <option>Last 30 Days</option>
                <option>This Year</option>
              </select>
            </div>

            <div className="flex gap-6 flex-1">
              {/* Chart */}
              <div className="flex-1 min-h-[340px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={funnelData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                    <XAxis dataKey="name" tick={{ fontSize: 13, fill: "#6b7280", fontWeight: 500 }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 12, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: "#f9fafb" }} />
                    <Bar dataKey="value" radius={[8, 8, 0, 0]} maxBarSize={90}>
                      {funnelData.map((entry, index) => (
                        <Cell key={index} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Stage Breakdown */}
              <div className="w-48 flex flex-col justify-center gap-4 shrink-0">
                {funnelData.map((stage, i) => {
                  const prev = funnelData[i - 1];
                  const rate = prev ? Math.round((stage.value / prev.value) * 100) : 100;
                  return (
                    <div key={stage.name} className="flex items-center gap-3">
                      <span className="w-3 h-3 rounded-full shrink-0" style={{ background: stage.fill }} />
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-gray-700 truncate">{stage.name}</p>
                        <p className="text-xs text-gray-400">
                          {stage.value.toLocaleString()}
                          {prev && <span className="ml-1 text-green-600">↓ {rate}%</span>}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Activity Logs */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-[#222364]">Activity Logs</h2>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 space-y-6">
              {[
                { title: "New application received", desc: "Amanda Temi applied for Backend Eng.", time: "10 mins ago" },
                { title: "Interview scheduled",      desc: "For Mechanical Engineer role",         time: "2 hours ago" },
                { title: "Job post approved",        desc: "Data Analyst role is now live",        time: "5 hours ago" },
                { title: "Wallet topped up",         desc: "Added ₦500,000 to wallet",             time: "1 day ago"   },
              ].map((log, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-[#222364] flex items-center justify-center shrink-0 mt-1">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">{log.title}</h3>
                    <p className="text-sm text-gray-500 mt-0.5">{log.desc}</p>
                    <p className="text-xs text-gray-400 mt-1">{log.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-2.5 text-sm font-semibold text-gray-600 hover:text-gray-900 bg-gray-50 rounded-xl transition">
              View All Activity
            </button>
          </div>
        </div>

        {/* Active Jobs List */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-[#222364]">Your Active Jobs</h2>
            <Link href="/employer/jobs" className="text-[#222364] text-sm font-semibold hover:underline flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="pb-4 font-semibold text-gray-500 text-sm">Role</th>
                  <th className="pb-4 font-semibold text-gray-500 text-sm">Type</th>
                  <th className="pb-4 font-semibold text-gray-500 text-sm">Applications</th>
                  <th className="pb-4 font-semibold text-gray-500 text-sm">Status</th>
                  <th className="pb-4 font-semibold text-gray-500 text-sm text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { role: "Backend Engineer",    type: "Remote", apps: 56, status: "Active" },
                  { role: "Mechanical Engineer", type: "Onsite", apps: 24, status: "Active" },
                  { role: "Data Analyst",        type: "Hybrid", apps: 12, status: "Active" },
                ].map((job, i) => (
                  <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition">
                    <td className="py-4 font-semibold text-gray-900">{job.role}</td>
                    <td className="py-4 text-gray-600 text-sm">{job.type}</td>
                    <td className="py-4 text-gray-600 text-sm">{job.apps} Candidates</td>
                    <td className="py-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-600" />
                        {job.status}
                      </span>
                    </td>
                    <td className="py-4 text-right">
                      <Link href="/employer/jobs" className="text-gray-400 hover:text-[#222364]">
                        <ArrowRight className="w-5 h-5 ml-auto" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}
