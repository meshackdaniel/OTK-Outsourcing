"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Plus, Download, Search, Filter, ArrowUpRight, ArrowDownLeft, FileText, CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

type Transaction = {
  id: string;
  date: string;
  desc: string;
  amount: string;
  status: "Completed" | "Failed";
  type: "credit" | "debit";
};

const initialTransactions: Transaction[] = [
  { id: "tx_1", date: "Oct 24, 2023", desc: "Wallet Top Up", amount: "+ ₦ 1,450,000", status: "Completed", type: "credit" },
  { id: "tx_2", date: "Oct 22, 2023", desc: "Talent Payment (Amanda Temi)", amount: "- ₦ 250,000", status: "Completed", type: "debit" },
  { id: "tx_3", date: "Oct 20, 2023", desc: "OaaS Platform Fee", amount: "- ₦ 15,000", status: "Completed", type: "debit" },
  { id: "tx_4", date: "Oct 18, 2023", desc: "Wallet Top Up", amount: "+ ₦ 500,000", status: "Completed", type: "credit" },
  { id: "tx_5", date: "Oct 15, 2023", desc: "Talent Payment (Alex Nwosu)", amount: "- ₦ 120,000", status: "Failed", type: "debit" },
];

export default function EmployerWallet() {
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [selectedTx, setSelectedTx] = useState<Transaction | null>(null);

  const filteredTransactions = initialTransactions.filter((tx) => {
    const matchesSearch = 
      tx.desc.toLowerCase().includes(search.toLowerCase()) || 
      tx.date.toLowerCase().includes(search.toLowerCase());

    let matchesFilter = true;
    if (filterType === "credit") matchesFilter = tx.type === "credit";
    if (filterType === "debit") matchesFilter = tx.type === "debit";
    if (filterType === "completed") matchesFilter = tx.status === "Completed";
    if (filterType === "failed") matchesFilter = tx.status === "Failed";

    return matchesSearch && matchesFilter;
  });

  const handleDownloadReceipt = () => {
    if (!selectedTx) return;

    const receiptContent = `
========================================
             OTK OUTSOURCING
           TRANSACTION RECEIPT
========================================

Transaction ID: TXN-${Math.random().toString(36).substring(2, 11).toUpperCase()}
Date:           ${selectedTx.date}
Description:    ${selectedTx.desc}
Status:         ${selectedTx.status}

----------------------------------------
AMOUNT:         ${selectedTx.amount}
----------------------------------------

Thank you for using OTK Outsourcing!
========================================
`;

    const blob = new Blob([receiptContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Receipt_${selectedTx.id}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <DashboardLayout type="employer">
      <div className="space-y-6">
        
        {/* Wallet Balance Card */}
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-gray-500 font-medium mb-2">Wallet Balance</p>
            <h1 className="text-4xl md:text-5xl font-black text-[#222364]">₦1,450,000</h1>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <Button className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 h-12 px-6 rounded-xl w-full sm:w-auto">
              <Download className="w-4 h-4 mr-1.5" />
              Statement
            </Button>
            <Button className="bg-[#222364] text-white hover:bg-[#1a1a4b] h-12 px-8 rounded-xl w-full sm:w-auto">
              <Plus className="w-4 h-4 mr-1.5" />
              Top Up
            </Button>
          </div>
        </div>

        {/* Transactions Section */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <h2 className="text-xl font-black text-[#222364]">Transactions</h2>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input 
                  type="text"
                  placeholder="Search transactions"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 pl-9 pr-4 text-sm outline-none focus:ring-1 focus:ring-[#222364]/20"
                />
              </div>
              
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-full sm:w-[140px] h-[42px] rounded-xl border-gray-200 text-gray-700 font-medium bg-white">
                  <div className="flex items-center gap-2">
                    <Filter className="w-4 h-4" />
                    <SelectValue placeholder="Filter" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="credit">Credits Only</SelectItem>
                  <SelectItem value="debit">Debits Only</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="failed">Failed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="pb-4 font-semibold text-gray-500 text-sm">Date</th>
                  <th className="pb-4 font-semibold text-gray-500 text-sm">Description</th>
                  <th className="pb-4 font-semibold text-gray-500 text-sm">Amount</th>
                  <th className="pb-4 font-semibold text-gray-500 text-sm text-right">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.map((tx) => (
                  <tr 
                    key={tx.id} 
                    className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition cursor-pointer"
                    onClick={() => setSelectedTx(tx)}
                  >
                    <td className="py-4 text-gray-500 text-sm">{tx.date}</td>
                    <td className="py-4 font-medium text-gray-900">{tx.desc}</td>
                    <td className={cn(
                      "py-4 font-semibold",
                      tx.type === "credit" ? "text-green-600" : "text-gray-900"
                    )}>{tx.amount}</td>
                    <td className="py-4 text-right">
                      {tx.status === "Completed" ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
                          Completed
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-red-50 text-red-700 border border-red-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                          Failed
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
                {filteredTransactions.length === 0 && (
                  <tr>
                    <td colSpan={4} className="py-8 text-center text-gray-500 text-sm">
                      No transactions found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Mobile App View (List) */}
          <div className="md:hidden space-y-4">
            {filteredTransactions.map((tx) => (
              <div 
                key={tx.id} 
                className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl active:bg-gray-100 transition cursor-pointer"
                onClick={() => setSelectedTx(tx)}
              >
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center shrink-0",
                    tx.type === "credit" ? "bg-green-100 text-green-600" : "bg-gray-200 text-gray-600"
                  )}>
                    {tx.type === "credit" ? <ArrowDownLeft className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="font-black text-gray-900 text-sm line-clamp-1">{tx.desc}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">{tx.date}</p>
                  </div>
                </div>
                <div className="text-right shrink-0 ml-2">
                  <p className={cn(
                    "font-bold text-sm",
                    tx.type === "credit" ? "text-green-600" : "text-gray-900"
                  )}>{tx.amount}</p>
                  <p className={cn(
                    "text-[10px] font-semibold mt-1",
                    tx.status === "Completed" ? "text-green-600" : "text-red-500"
                  )}>{tx.status}</p>
                </div>
              </div>
            ))}
            {filteredTransactions.length === 0 && (
              <div className="py-8 text-center text-gray-500 text-sm">
                No transactions found.
              </div>
            )}
          </div>
        </div>

        {/* Transaction Detail Modal */}
        <Dialog open={!!selectedTx} onOpenChange={(open) => !open && setSelectedTx(null)}>
          <DialogContent className="sm:max-w-[425px] rounded-2xl">
            <DialogHeader>
              <DialogTitle className="text-center font-bold text-xl text-[#222364]">Transaction Details</DialogTitle>
            </DialogHeader>
            
            {selectedTx && (
              <div className="py-4">
                <div className="flex flex-col items-center justify-center mb-8">
                  <div className={cn(
                    "w-16 h-16 rounded-full flex items-center justify-center mb-4",
                    selectedTx.type === "credit" ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-600"
                  )}>
                    {selectedTx.type === "credit" ? <ArrowDownLeft className="w-8 h-8" /> : <ArrowUpRight className="w-8 h-8" />}
                  </div>
                  <h2 className={cn(
                    "text-3xl font-bold",
                    selectedTx.type === "credit" ? "text-green-600" : "text-gray-900"
                  )}>
                    {selectedTx.amount.replace('+ ', '+').replace('- ', '-')}
                  </h2>
                  <p className="text-gray-500 font-medium mt-1">{selectedTx.status}</p>
                </div>

                <div className="space-y-4 bg-gray-50 p-4 rounded-xl border border-gray-100 mb-6 text-sm">
                  <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-gray-500">Date</span>
                    <span className="font-semibold text-gray-900">{selectedTx.date}</span>
                  </div>
                  <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-gray-500">Transaction ID</span>
                    <span className="font-semibold text-gray-900">TXN-{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
                  </div>
                  <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-gray-500">Description</span>
                    <span className="font-semibold text-gray-900 text-right max-w-[200px] truncate">{selectedTx.desc}</span>
                  </div>
                  <div className="flex flex-col md:flex-row justify-between items-center">
                    <span className="text-gray-500">Status</span>
                    <div className="flex items-center gap-1.5">
                      {selectedTx.status === "Completed" ? (
                        <><CheckCircle2 className="w-4 h-4 text-green-600" /><span className="font-semibold text-green-600">Successful</span></>
                      ) : (
                        <><XCircle className="w-4 h-4 text-red-500" /><span className="font-semibold text-red-500">Failed</span></>
                      )}
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={handleDownloadReceipt}
                  className="w-full h-12 bg-[#222364] hover:bg-[#1a1a4b] text-white rounded-xl font-semibold"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Download Receipt
                </Button>
              </div>
            )}
          </DialogContent>
        </Dialog>

      </div>
    </DashboardLayout>
  );
}
