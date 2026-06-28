"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { Switch } from "./switch";
import { Button } from "./button";
import { ChevronDown } from "lucide-react";

export function CookiePreferenceModal() {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);
  const [advertisingEnabled, setAdvertisingEnabled] = useState(false);
  const [open, setOpen] = useState(false);

  const handleAcceptAll = () => {
    setAnalyticsEnabled(true);
    setAdvertisingEnabled(true);
    setTimeout(() => setOpen(false), 200);
  };

  const handleRejectAll = () => {
    setAnalyticsEnabled(false);
    setAdvertisingEnabled(false);
    setTimeout(() => setOpen(false), 200);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="hover:text-white transition bg-transparent border-0 p-0 text-gray-400 font-normal">
          Cookie Preference
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl p-8 rounded-3xl border-0 shadow-lg">
        <DialogHeader className="mb-6 relative">
          <DialogTitle className="text-xl font-bold text-[#1a1b3a]">
            Cookies Settings
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Strictly necessary cookies */}
          <div className="flex items-start justify-between bg-gray-50/50 p-4 rounded-xl border border-gray-100">
            <div className="flex items-start gap-3">
              <div className="mt-1 p-1 bg-gray-100 rounded border border-gray-200">
                <ChevronDown className="w-3 h-3 text-gray-500" />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-[#1a1b3a]">
                  Stricly necessary cookies
                </h3>
                <p className="text-[13px] text-gray-500 mt-0.5">
                  Necessary for the site to function. Always On.
                </p>
              </div>
            </div>
            <span className="text-xs font-semibold text-[#1a1b3a] text-right mt-1">
              Always active
            </span>
          </div>

          {/* Analytics cookies */}
          <div className="flex items-center justify-between bg-gray-50/50 p-4 rounded-xl border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="p-1 bg-gray-100 rounded border border-gray-200">
                <ChevronDown className="w-3 h-3 text-gray-500" />
              </div>
              <h3 className="font-semibold text-sm text-[#1a1b3a]">
                Analytics cookies
              </h3>
            </div>
            <Switch
              checked={analyticsEnabled}
              onCheckedChange={setAnalyticsEnabled}
            />
          </div>

          {/* Advertising cookies */}
          <div className="flex items-center justify-between bg-gray-50/50 p-4 rounded-xl border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="p-1 bg-gray-100 rounded border border-gray-200">
                <ChevronDown className="w-3 h-3 text-gray-500" />
              </div>
              <h3 className="font-semibold text-sm text-[#1a1b3a]">
                Advertising cookies
              </h3>
            </div>
            <Switch
              checked={advertisingEnabled}
              onCheckedChange={setAdvertisingEnabled}
            />
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-8 pt-6">
          <Button
            variant="outline"
            className="w-32 rounded-xl text-[#1a1b3a] font-semibold border-gray-200"
            onClick={handleRejectAll}
          >
            Reject all
          </Button>
          <Button
            className="w-32 rounded-xl bg-[#1a1b3a] hover:bg-[#1a1b3a]/90 text-white font-semibold"
            onClick={handleAcceptAll}
          >
            Accept all
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
