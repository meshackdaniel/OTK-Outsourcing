"use client";

import { useState, useEffect } from"react";
import {
 Dialog,
 DialogContent,
 DialogHeader,
 DialogTitle,
} from"@/components/ui/dialog";
import { Switch } from"@/components/ui/switch";
import { Button } from"@/components/ui/button";
import { ChevronDown, ChevronUp } from"lucide-react";

export function CookiesSettingsModal({
 isOpen,
 setIsOpen,
}: {
 isOpen: boolean;
 setIsOpen: (open: boolean) => void;
}) {
 const [analyticsEnabled, setAnalyticsEnabled] = useState(true);
 const [advertisingEnabled, setAdvertisingEnabled] = useState(false);

 // Example of using local storage to remember choice
 useEffect(() => {
 const hasConsented = localStorage.getItem("cookieConsent");
 if (!hasConsented) {
 // You could automatically open it on first visit if you wanted
 // setIsOpen(true);
 }
 }, [setIsOpen]);

 const handleAcceptAll = () => {
 setAnalyticsEnabled(true);
 setAdvertisingEnabled(true);
 localStorage.setItem("cookieConsent","all");
 setIsOpen(false);
 };

 const handleRejectAll = () => {
 setAnalyticsEnabled(false);
 setAdvertisingEnabled(false);
 localStorage.setItem("cookieConsent","strictly_necessary");
 setIsOpen(false);
 };

 return (
 <Dialog open={isOpen} onOpenChange={setIsOpen}>
 <DialogContent className="sm:max-w-xl p-0 rounded-2xl overflow-hidden bg-white gap-0 border-0">
 <DialogHeader className="p-6 border-b border-gray-100 flex flex-row items-center justify-between">
 <DialogTitle className="text-xl font-bold text-[#222364] m-0">Cookies Settings</DialogTitle>
 {/* Close button is handled by DialogPrimitive internally, but we can customize if needed */}
 </DialogHeader>

 <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
 {/* Strictly necessary cookies */}
 <div className="bg-gray-50/50 rounded-xl p-4 border border-gray-100 flex items-start gap-4">
 <div className="mt-1 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
 <ChevronDown className="w-4 h-4 text-gray-500"/>
 </div>
 <div className="flex-1">
 <div className="flex items-center justify-between mb-1">
 <h4 className="font-black text-[#222364]">Strictly necessary cookies</h4>
 <span className="text-xs font-semibold text-[#222364]">Always active</span>
 </div>
 <p className="text-xs text-gray-500">Necessary for the site to function. Always On.</p>
 </div>
 </div>

 {/* Analytics cookies */}
 <div className="bg-gray-50/50 rounded-xl p-4 border border-gray-100 flex items-start gap-4">
 <div className="mt-1 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
 <ChevronDown className="w-4 h-4 text-gray-500"/>
 </div>
 <div className="flex-1">
 <div className="flex items-center justify-between mb-1">
 <h4 className="font-black text-[#222364]">Analytics cookies</h4>
 <Switch 
 checked={analyticsEnabled} 
 onCheckedChange={setAnalyticsEnabled} 
 className="data-[state=checked]:bg-[#222364]"
 />
 </div>
 </div>
 </div>

 {/* Advertising cookies */}
 <div className="bg-gray-50/50 rounded-xl p-4 border border-gray-100 flex items-start gap-4">
 <div className="mt-1 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
 <ChevronDown className="w-4 h-4 text-gray-500"/>
 </div>
 <div className="flex-1">
 <div className="flex items-center justify-between mb-1">
 <h4 className="font-black text-[#222364]">Advertising cookies</h4>
 <Switch 
 checked={advertisingEnabled} 
 onCheckedChange={setAdvertisingEnabled} 
 className="data-[state=checked]:bg-[#222364]"
 />
 </div>
 </div>
 </div>
 </div>

 <div className="p-6 border-t border-gray-100 flex justify-center gap-4 bg-white">
 <Button 
 onClick={handleRejectAll}
 variant="outline"
 className="w-32 h-11 rounded-xl font-semibold border-gray-200 text-gray-600 hover:bg-gray-50"
 >
 Reject all
 </Button>
 <Button 
 onClick={handleAcceptAll}
 className="w-32 h-11 bg-[#222364] hover:bg-[#1a1a4b] text-white rounded-xl font-semibold"
 >
 Accept all
 </Button>
 </div>
 </DialogContent>
 </Dialog>
 );
}
