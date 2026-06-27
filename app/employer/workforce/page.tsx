"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Plus, Maximize2, ChevronDown, ChevronUp, ChevronRight, ChevronsUpDown, Trash2, Users } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const initialGroups = [
  {
    id: "accountant",
    role: "Accountant",
    employees: [
      { id: "046", name: "Aisha Bello", jobType: "Contract", status: "Active", joined: "Feb 14, 2025" }
    ]
  },
  {
    id: "mechanical_engineer",
    role: "Mechanical Engineer",
    employees: [
      { id: "024", name: "Bliss Maurice", jobType: "Full-time", status: "Active", joined: "Nov 8, 2020" },
      { id: "044", name: "Wilson Maurice", jobType: "Full-time", status: "On Leave", joined: "Feb 14, 2025" }
    ]
  },
  { id: "data_analyst", role: "Data Analyst", employees: [] },
  { id: "it_manager", role: "IT Manager", employees: [] }
];

export default function EmployerWorkforce() {
  const router = useRouter();
  const [groups, setGroups] = useState(initialGroups);
  const [expanded, setExpanded] = useState<string[]>(['accountant', 'mechanical_engineer']);
  const [viewType, setViewType] = useState<'group' | 'list'>('group');
  const [newGroupName, setNewGroupName] = useState("");
  const [manageTab, setManageTab] = useState<'groups' | 'users'>('groups');
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortFilter, setSortFilter] = useState("recent");
  
  const filteredGroups = groups.map(g => {
    let filtered = g.employees;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(emp => emp.name.toLowerCase().includes(q) || emp.id.toLowerCase().includes(q));
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter(emp => emp.status.toLowerCase() === statusFilter.toLowerCase());
    }

    if (sortFilter === "oldest") {
      filtered = [...filtered].reverse();
    }

    return { ...g, employees: filtered };
  });

  const [errorPopup, setErrorPopup] = useState<string | null>(null);
  
  const toggle = (id: string) => {
    setExpanded(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const handleDeleteGroup = (groupId: string) => {
    const group = groups.find(g => g.id === groupId);
    if (group && group.employees.length > 0) {
      setErrorPopup("You cannot delete this group because it is not empty. Please reassign its members first.");
      return;
    }
    setGroups(prev => prev.filter(g => g.id !== groupId));
  };

  const handleAddGroup = () => {
    if (!newGroupName.trim()) return;
    const newId = newGroupName.toLowerCase().replace(/[^a-z0-9]/g, '_');
    if (groups.some(g => g.id === newId)) {
      setErrorPopup("Group already exists.");
      return;
    }
    setGroups(prev => [...prev, { id: newId, role: newGroupName, employees: [] }]);
    setNewGroupName("");
  };

  const handleChangeUserGroup = (empId: string, oldGroupId: string, newGroupId: string) => {
    if (oldGroupId === newGroupId) return;
    
    setGroups(prev => {
      const updated = [...prev];
      const oldGroupIndex = updated.findIndex(g => g.id === oldGroupId);
      const newGroupIndex = updated.findIndex(g => g.id === newGroupId);
      
      if (oldGroupIndex !== -1 && newGroupIndex !== -1) {
        const empIndex = updated[oldGroupIndex].employees.findIndex(e => e.id === empId);
        if (empIndex !== -1) {
          const [emp] = updated[oldGroupIndex].employees.splice(empIndex, 1);
          updated[newGroupIndex].employees.push(emp);
        }
      }
      return updated;
    });
  };

  return (
    <DashboardLayout type="employer">
      <div className="space-y-6">
        
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Employees</h1>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl p-4 border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-bold text-gray-900 text-sm">Filter By :</span>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="border-gray-200 text-[#222364] font-bold rounded-xl h-11 px-4 w-[160px]">
                <SelectValue placeholder="All Employees" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all" className="font-bold text-sm">All Employees</SelectItem>
                <SelectItem value="active" className="font-bold text-sm">Active</SelectItem>
                <SelectItem value="on leave" className="font-bold text-sm">On Leave</SelectItem>
                <SelectItem value="terminated" className="font-bold text-sm">Terminated</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortFilter} onValueChange={setSortFilter}>
              <SelectTrigger className="border-gray-200 text-[#222364] font-bold rounded-xl h-11 px-4 w-[160px]">
                <SelectValue placeholder="Most Recent" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent" className="font-bold text-sm">Most Recent</SelectItem>
                <SelectItem value="oldest" className="font-bold text-sm">Oldest First</SelectItem>
              </SelectContent>
            </Select>

            <div className="relative w-[300px]">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input 
                placeholder="Search employees by name or ID" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-11 h-11 rounded-xl border-gray-200" 
              />
            </div>
          </div>
        </div>

        {/* Main List */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          
          <div className="flex items-center justify-between border-b border-gray-100 px-8 pt-6">
            <div className="flex gap-8">
              <button 
                onClick={() => setViewType('list')}
                className={cn(
                  "font-bold text-sm pb-4 -mb-[1px] border-b-2 transition-colors",
                  viewType === 'list' ? "text-[#222364] border-[#222364]" : "text-gray-500 border-transparent hover:text-gray-900"
                )}
              >
                List View
              </button>
              <button 
                onClick={() => setViewType('group')}
                className={cn(
                  "font-bold text-sm pb-4 -mb-[1px] border-b-2 transition-colors",
                  viewType === 'group' ? "text-[#222364] border-[#222364]" : "text-gray-500 border-transparent hover:text-gray-900"
                )}
              >
                Group View
              </button>
            </div>
            <button className="w-8 h-8 mb-4 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 shrink-0">
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
          
          <div className="p-8 space-y-4">
            
            {viewType === 'list' && (
              <div className="border border-gray-100 rounded-2xl overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-100 bg-[#F7F7F7]">
                      <th className="py-5 w-16 px-6"><Checkbox className="rounded bg-white border-gray-300" /></th>
                      <th className="py-5 font-bold text-gray-500 text-sm px-4">Employee <ChevronsUpDown className="inline w-3 h-3 text-gray-400 ml-1" /></th>
                      <th className="py-5 font-bold text-gray-500 text-sm px-4">ID <ChevronsUpDown className="inline w-3 h-3 text-gray-400 ml-1" /></th>
                      <th className="py-5 font-bold text-gray-500 text-sm px-4">Role <ChevronsUpDown className="inline w-3 h-3 text-gray-400 ml-1" /></th>
                      <th className="py-5 font-bold text-gray-500 text-sm px-4">Job Type <ChevronsUpDown className="inline w-3 h-3 text-gray-400 ml-1" /></th>
                      <th className="py-5 font-bold text-gray-500 text-sm px-4">Status <ChevronsUpDown className="inline w-3 h-3 text-gray-400 ml-1" /></th>
                      <th className="py-5 font-bold text-gray-500 text-sm px-4">Joined Date <ChevronsUpDown className="inline w-3 h-3 text-gray-400 ml-1" /></th>
                      <th className="py-5 px-6 text-right"><ChevronRight className="w-4 h-4 inline text-gray-400" /></th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredGroups.flatMap(g => g.employees.map(emp => ({ ...emp, role: g.role }))).map((emp) => (
                      <tr key={emp.id} onClick={() => router.push(`/employer/workforce/${emp.id}`)} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition bg-white cursor-pointer">
                        <td className="py-5 px-6" onClick={(e) => e.stopPropagation()}><Checkbox className="rounded bg-white border-gray-300" /></td>
                        <td className="py-5 px-4">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-9 w-9">
                              <AvatarImage src={`/avatars/${emp.id}.png`} />
                              <AvatarFallback className="bg-gray-100 text-gray-600 font-bold">{emp.name.split(' ').map(n=>n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <span className="font-bold text-gray-900 text-sm">{emp.name}</span>
                          </div>
                        </td>
                        <td className="py-5 px-4 text-gray-500 font-medium text-sm">{emp.id}</td>
                        <td className="py-5 px-4 text-gray-500 font-medium text-sm">{emp.role}</td>
                        <td className="py-5 px-4 text-gray-500 font-medium text-sm">{emp.jobType}</td>
                        <td className="py-5 px-4">
                          <span className={cn(
                            "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border",
                            emp.status === 'Active' ? "text-green-700 border-green-200 bg-white" : "text-gray-600 border-gray-300 bg-white"
                          )}>
                            <span className={cn("w-1.5 h-1.5 rounded-full", emp.status === 'Active' ? "bg-green-600" : "bg-gray-400")}></span>
                            {emp.status}
                          </span>
                        </td>
                        <td className="py-5 px-4 text-gray-500 font-medium text-sm">{emp.joined}</td>
                        <td className="py-5 px-6 text-right cursor-pointer hover:bg-gray-50"><ChevronRight className="w-4 h-4 inline text-gray-400" /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {viewType === 'group' && (
              <>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="border-[#222364] text-[#222364] rounded-xl h-11 px-6 font-bold mb-4 hover:bg-gray-50">
                      <Plus className="w-4 h-4 mr-2" /> Manage Groups
                    </Button>
                  </DialogTrigger>
                  <DialogContent onInteractOutside={(e) => { if (errorPopup) e.preventDefault(); }} className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle className="text-[#222364]">Manage Workforce</DialogTitle>
                    </DialogHeader>
                    
                    <div className="flex gap-4 border-b border-gray-100 mb-4">
                      <button 
                        onClick={() => setManageTab('groups')}
                        className={cn("text-sm font-bold pb-2 border-b-2", manageTab === 'groups' ? "border-[#222364] text-[#222364]" : "border-transparent text-gray-500")}
                      >
                        Groups
                      </button>
                      <button 
                        onClick={() => setManageTab('users')}
                        className={cn("text-sm font-bold pb-2 border-b-2", manageTab === 'users' ? "border-[#222364] text-[#222364]" : "border-transparent text-gray-500")}
                      >
                        Users
                      </button>
                    </div>

                    {manageTab === 'groups' && (
                      <div className="grid gap-4 py-2">
                        {groups.map((g) => (
                          <div key={g.id} className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-[#F7F7F7] flex items-center justify-center text-xs font-bold text-gray-700">{g.employees.length}</div>
                              <span className="font-bold text-gray-900">{g.role}</span>
                            </div>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              onClick={() => handleDeleteGroup(g.id)}
                              className="text-gray-400 hover:text-red-500 hover:bg-red-50"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        ))}
                        <div className="pt-4 border-t border-gray-100">
                          <Label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Create New Group</Label>
                          <div className="flex gap-2">
                            <Input 
                              placeholder="E.g. UX Designer" 
                              value={newGroupName}
                              onChange={(e) => setNewGroupName(e.target.value)}
                              className="rounded-xl border-gray-200" 
                            />
                            <Button onClick={handleAddGroup} className="bg-[#222364] hover:bg-[#1a1a4b] text-white rounded-xl">Add</Button>
                          </div>
                        </div>
                      </div>
                    )}

                    {manageTab === 'users' && (
                      <div className="grid gap-4 py-2 max-h-[300px] overflow-y-auto pr-2">
                        {groups.flatMap(g => g.employees.map(emp => ({ ...emp, groupId: g.id }))).map((emp) => (
                          <div key={emp.id} className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                            <div className="flex items-center gap-3">
                              <Avatar className="h-8 w-8">
                                <AvatarFallback className="bg-gray-100 text-gray-600 font-bold">{emp.name.split(' ').map(n=>n[0]).join('')}</AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-bold text-gray-900 text-sm">{emp.name}</div>
                                <div className="text-xs text-gray-500">{emp.id}</div>
                              </div>
                            </div>
                            
                            <Select 
                              value={emp.groupId} 
                              onValueChange={(val) => handleChangeUserGroup(emp.id, emp.groupId, val)}
                            >
                              <SelectTrigger className="w-[140px] h-8 text-xs font-bold rounded-lg border-gray-200">
                                <SelectValue placeholder="Select Group" />
                              </SelectTrigger>
                              <SelectContent>
                                {groups.map(g => (
                                  <SelectItem key={g.id} value={g.id} className="text-xs font-bold">{g.role}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        ))}
                        {groups.flatMap(g => g.employees).length === 0 && (
                          <div className="text-center text-gray-500 text-sm py-4">No employees found.</div>
                        )}
                      </div>
                    )}
                  </DialogContent>
                </Dialog>

                {filteredGroups.map(g => (
                  <div key={g.id} className="rounded-2xl overflow-hidden mb-4 border border-transparent">
                    <div onClick={() => toggle(g.id)} className={cn(
                      "flex items-center gap-4 bg-[#F7F7F7] p-5 cursor-pointer transition-colors hover:bg-gray-100",
                      expanded.includes(g.id) ? "rounded-t-2xl" : "rounded-2xl"
                    )}>
                      {expanded.includes(g.id) ? <ChevronUp className="w-5 h-5 text-gray-700" /> : <ChevronDown className="w-5 h-5 text-gray-700" />}
                      <div className="w-7 h-7 rounded-full bg-[#3B3C3D] text-white flex items-center justify-center text-xs font-bold">{g.employees.length}</div>
                      <span className="font-bold text-gray-900 text-[15px]">{g.role}</span>
                    </div>

                    {expanded.includes(g.id) && g.employees.length > 0 && (
                      <div className="border border-gray-100 border-t-0 rounded-b-2xl overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="border-b border-gray-100 bg-white">
                              <th className="py-5 w-16 px-6"><Checkbox className="rounded bg-white border-gray-300" /></th>
                              <th className="py-5 font-bold text-gray-500 text-sm px-4">Employee <ChevronsUpDown className="inline w-3 h-3 text-gray-400 ml-1" /></th>
                              <th className="py-5 font-bold text-gray-500 text-sm px-4">ID <ChevronsUpDown className="inline w-3 h-3 text-gray-400 ml-1" /></th>
                              <th className="py-5 font-bold text-gray-500 text-sm px-4">Role <ChevronsUpDown className="inline w-3 h-3 text-gray-400 ml-1" /></th>
                              <th className="py-5 font-bold text-gray-500 text-sm px-4">Job Type <ChevronsUpDown className="inline w-3 h-3 text-gray-400 ml-1" /></th>
                              <th className="py-5 font-bold text-gray-500 text-sm px-4">Status <ChevronsUpDown className="inline w-3 h-3 text-gray-400 ml-1" /></th>
                              <th className="py-5 font-bold text-gray-500 text-sm px-4">Joined Date <ChevronsUpDown className="inline w-3 h-3 text-gray-400 ml-1" /></th>
                              <th className="py-5 px-6 text-right"><ChevronRight className="w-4 h-4 inline text-gray-400" /></th>
                            </tr>
                          </thead>
                          <tbody>
                            {g.employees.map((emp) => (
                              <tr key={emp.id} onClick={() => router.push(`/employer/workforce/${emp.id}`)} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition bg-white cursor-pointer">
                                <td className="py-5 px-6" onClick={(e) => e.stopPropagation()}><Checkbox className="rounded bg-white border-gray-300" /></td>
                                <td className="py-5 px-4">
                                  <div className="flex items-center gap-3">
                                    <Avatar className="h-9 w-9">
                                      <AvatarImage src={`/avatars/${emp.id}.png`} />
                                      <AvatarFallback className="bg-gray-100 text-gray-600 font-bold">{emp.name.split(' ').map(n=>n[0]).join('')}</AvatarFallback>
                                    </Avatar>
                                    <span className="font-bold text-gray-900 text-sm">{emp.name}</span>
                                  </div>
                                </td>
                                <td className="py-5 px-4 text-gray-500 font-medium text-sm">{emp.id}</td>
                                <td className="py-5 px-4 text-gray-500 font-medium text-sm">{g.role}</td>
                                <td className="py-5 px-4 text-gray-500 font-medium text-sm">{emp.jobType}</td>
                                <td className="py-5 px-4">
                                  <span className={cn(
                                    "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border",
                                    emp.status === 'Active' ? "text-green-700 border-green-200 bg-white" : "text-gray-600 border-gray-300 bg-white"
                                  )}>
                                    <span className={cn("w-1.5 h-1.5 rounded-full", emp.status === 'Active' ? "bg-green-600" : "bg-gray-400")}></span>
                                    {emp.status}
                                  </span>
                                </td>
                                <td className="py-5 px-4 text-gray-500 font-medium text-sm">{emp.joined}</td>
                                <td className="py-5 px-6 text-right cursor-pointer hover:bg-gray-50"><ChevronRight className="w-4 h-4 inline text-gray-400" /></td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                ))}
              </>
            )}

          </div>
        </div>

        {/* Custom Error Popup */}
        <Dialog open={!!errorPopup} onOpenChange={(open) => !open && setErrorPopup(null)}>
          <DialogContent onCloseAutoFocus={(e) => e.preventDefault()} className="sm:max-w-[400px]">
            <DialogHeader>
              <DialogTitle className="text-red-600">Action Denied</DialogTitle>
            </DialogHeader>
            <div className="py-4">
              <p className="text-gray-700 font-medium">{errorPopup}</p>
            </div>
            <div className="flex justify-end">
              <Button onClick={() => setErrorPopup(null)} className="bg-red-600 hover:bg-red-700 text-white rounded-xl">
                Understood
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
}
