"use client";

import { DashboardLayout } from"@/components/layout/DashboardLayout";
import { Button } from"@/components/ui/button";
import { Checkbox } from"@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from"@/components/ui/avatar";
import { Plus, Search, ChevronDown, ChevronRight, Maximize2 } from"lucide-react";
import { cn } from"@/lib/utils";

export default function EmployerEmployees() {
 const employees = [
 { id:"024", name:"Bliss Maurice", role:"Mechanical Engineer", type:"Full-time", status:"Active", joined:"Nov 8, 2020", statusColor:"green"},
 { id:"026", name:"John Okoro", role:"Secretary", type:"Full-time", status:"Onboarding", joined:"Jan 24, 2026", statusColor:"orange"},
 { id:"037", name:"Emeka Ibe", role:"IT Manager", type:"Full-time", status:"Active", joined:"Mar 7, 2023", statusColor:"green"},
 { id:"044", name:"Wilson Maurice", role:"Mechanical Engineer", type:"Full-time", status:"On Leave", joined:"Feb 14, 2025", statusColor:"gray"},
 ];

 return (
 <DashboardLayout type="employer">
 <div className="space-y-6">
 
 <h1 className="text-2xl font-bold text-[#222364]">Employees</h1>

 {/* Filter Bar */}
 <div className="bg-white rounded-2xl p-6 border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
 <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
 <span className="text-gray-600 font-medium">Filter By :</span>
 <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2.5 rounded-xl hover:bg-gray-50 transition">
 All Employees <ChevronDown className="w-4 h-4 text-gray-400"/>
 </button>
 <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2.5 rounded-xl hover:bg-gray-50 transition">
 Most Recent <ChevronDown className="w-4 h-4 text-gray-400"/>
 </button>
 <div className="relative flex-1 md:w-64">
 <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"/>
 <input 
 type="text"
 placeholder="Search employees"
 className="w-full bg-white border border-gray-200 rounded-xl py-2.5 pl-9 pr-4 text-sm outline-none focus:ring-1 focus:ring-[#222364]/20"
 />
 </div>
 </div>
 <Button className="bg-[#222364] text-white hover:bg-[#1a1a4b] rounded-xl px-6 h-11 w-full md:w-auto">
 <Plus className="w-4 h-4 mr-2"/>
 Add New
 </Button>
 </div>

 {/* Employees Table Area */}
 <div className="bg-white rounded-2xl p-6 border border-gray-100">
 
 <div className="flex items-center justify-between border-b border-gray-100 mb-6">
 <div className="flex items-center gap-8">
 <button className="pb-4 font-bold text-[#222364] border-b-2 border-[#222364]">
 List View
 </button>
 <button className="pb-4 font-semibold text-gray-500 hover:text-gray-800 transition">
 Group View
 </button>
 </div>
 <button className="p-2 border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 mb-2">
 <Maximize2 className="w-4 h-4"/>
 </button>
 </div>

 <div className="overflow-x-auto">
 <table className="w-full text-left border-collapse">
 <thead>
 <tr className="border-b border-gray-100">
 <th className="pb-4 w-12 px-4">
 <Checkbox className="rounded bg-white border-gray-300"/>
 </th>
 <th className="pb-4 font-bold text-gray-900 text-sm px-4">Employee</th>
 <th className="pb-4 font-bold text-gray-900 text-sm px-4">ID</th>
 <th className="pb-4 font-bold text-gray-900 text-sm px-4">Role</th>
 <th className="pb-4 font-bold text-gray-900 text-sm px-4">Job Type</th>
 <th className="pb-4 font-bold text-gray-900 text-sm px-4">Status</th>
 <th className="pb-4 font-bold text-gray-900 text-sm px-4">Joined Date</th>
 <th className="pb-4 w-12 px-4"></th>
 </tr>
 </thead>
 <tbody>
 {employees.map((emp, i) => (
 <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition">
 <td className="py-4 px-4">
 <Checkbox className="rounded bg-white border-gray-300"/>
 </td>
 <td className="py-4 px-4">
 <div className="flex items-center gap-3">
 <Avatar className="h-8 w-8">
 <AvatarImage src={`https://i.pravatar.cc/150?u=${emp.id}`} />
 <AvatarFallback>{emp.name.charAt(0)}</AvatarFallback>
 </Avatar>
 <span className="font-bold text-gray-900 text-sm">{emp.name}</span>
 </div>
 </td>
 <td className="py-4 px-4 text-gray-600 text-sm">{emp.id}</td>
 <td className="py-4 px-4 text-gray-600 text-sm">{emp.role}</td>
 <td className="py-4 px-4 text-gray-600 text-sm">{emp.type}</td>
 <td className="py-4 px-4">
 <span className={cn(
"inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border",
 emp.statusColor ==="green"?"bg-green-50 text-green-700 border-green-200":
 emp.statusColor ==="orange"?"bg-orange-50 text-orange-700 border-orange-200":
"bg-gray-50 text-gray-700 border-gray-200"
 )}>
 <span className={cn(
"w-1.5 h-1.5 rounded-full",
 emp.statusColor ==="green"?"bg-green-600":
 emp.statusColor ==="orange"?"bg-orange-500":
"bg-gray-500"
 )}></span>
 {emp.status}
 </span>
 </td>
 <td className="py-4 px-4 text-gray-600 text-sm">{emp.joined}</td>
 <td className="py-4 px-4">
 <button className="text-gray-400 hover:text-[#222364] p-1">
 <ChevronRight className="w-5 h-5"/>
 </button>
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
