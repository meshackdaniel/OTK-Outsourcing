"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, Camera, Save, MapPin, Building2, Phone } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState, useRef } from "react";

export default function CompanyProfile() {
  const [logoUrl, setLogoUrl] = useState("/company-placeholder.png");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setLogoUrl(url);
    }
  };

  return (
    <DashboardLayout type="employer">
      <div className="space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-black text-gray-900">Company Profile</h1>
            <p className="text-gray-500 text-sm mt-1">Manage your company information, branding, and contact details.</p>
          </div>
          <Button className="bg-[#222364] hover:bg-[#1a1a4b] text-white rounded-xl h-11 px-8 font-bold shrink-0">
            <Save className="w-4 h-4 mr-2" /> Save Changes
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Info Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* General Info Card */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8">
              <h2 className="text-lg font-black text-[#222364] mb-6 flex items-center gap-2">
                <Building2 className="w-5 h-5" /> General Information
              </h2>
              
              <div className="flex flex-col md:flex-row gap-8 items-start mb-8 pb-8 border-b border-gray-50">
                <div className="relative group shrink-0">
                  <Avatar className="w-24 h-24 border-4 border-white bg-gray-50">
                    <AvatarImage src={logoUrl} className="object-cover" />
                    <AvatarFallback className="text-2xl text-gray-400 font-bold">CO</AvatarFallback>
                  </Avatar>
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    className="hidden" 
                    accept="image/png, image/jpeg" 
                    onChange={handleFileChange} 
                  />
                  <button onClick={() => fileInputRef.current?.click()} className="absolute bottom-0 right-0 w-8 h-8 bg-[#222364] rounded-full text-white flex items-center justify-center hover:bg-[#1a1a4b] transition-transform group-hover:scale-105 border-2 border-white">
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex-1 space-y-1 w-full">
                  <Label className="text-sm font-bold text-gray-700">Company Logo</Label>
                  <p className="text-sm text-gray-500 mb-3">Upload a high-res image (PNG or JPG). Max size 5MB.</p>
                  <Button onClick={() => fileInputRef.current?.click()} variant="outline" className="border-gray-200 text-[#222364] font-bold rounded-xl h-10 px-6 hover:bg-gray-50">
                    <Upload className="w-4 h-4 mr-2" /> Upload New Logo
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-sm font-bold text-gray-700">Company Name <span className="text-red-500">*</span></Label>
                  <Input placeholder="Enter company name" defaultValue="OTK Outsourcing" className="h-12 rounded-xl border-gray-200 focus-visible:ring-[#222364]" />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-bold text-gray-700">Industry / Sector</Label>
                  <Select defaultValue="tech">
                    <SelectTrigger className="h-12! w-full rounded-xl border-gray-200 focus:ring-[#222364]">
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tech">Technology & IT</SelectItem>
                      <SelectItem value="finance">Finance & Banking</SelectItem>
                      <SelectItem value="health">Healthcare</SelectItem>
                      <SelectItem value="retail">Retail & E-commerce</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label className="text-sm font-bold text-gray-700">Company Bio</Label>
                  <Textarea placeholder="Write a short description about your company..." className="min-h-[120px] rounded-xl border-gray-200 focus-visible:ring-[#222364] resize-none p-4" defaultValue="We are a leading provider of outsourcing solutions, helping businesses scale effortlessly with top-tier talent." />
                  <p className="text-xs text-gray-400 text-right mt-1">Maximum 500 characters</p>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8">
              <h2 className="text-lg font-black text-[#222364] mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5" /> Location Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 md:col-span-2">
                  <Label className="text-sm font-bold text-gray-700">Head Office Address</Label>
                  <Input placeholder="123 Business Avenue, Tech District" className="h-12 rounded-xl border-gray-200 focus-visible:ring-[#222364]" />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-bold text-gray-700">Country</Label>
                  <Select defaultValue="ng">
                    <SelectTrigger className="h-12! w-full rounded-xl border-gray-200 focus:ring-[#222364]">
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ng">Nigeria</SelectItem>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-bold text-gray-700">City / State</Label>
                  <Input placeholder="Lagos" className="h-12 rounded-xl border-gray-200 focus-visible:ring-[#222364]" />
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar Column */}
          <div className="space-y-8">
            
            {/* Contact Details */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8">
              <h2 className="text-lg font-black text-[#222364] mb-6 flex items-center gap-2">
                <Phone className="w-5 h-5" /> Contact Details
              </h2>
              <div className="space-y-5">
                <div className="space-y-2">
                  <Label className="text-sm font-bold text-gray-700">Email Address</Label>
                  <Input type="email" placeholder="contact@company.com" defaultValue="hello@otkoutsourcing.com" className="h-12 rounded-xl border-gray-200 focus-visible:ring-[#222364]" />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-bold text-gray-700">Phone Number</Label>
                  <Input type="tel" placeholder="+234 (90) 7080-7080" className="h-12 rounded-xl border-gray-200 focus-visible:ring-[#222364]" />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-bold text-gray-700">Website</Label>
                  <Input type="url" placeholder="https://www.company.com" className="h-12 rounded-xl border-gray-200 focus-visible:ring-[#222364]" />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-bold text-gray-700">Company Size</Label>
                  <Select defaultValue="50-200">
                    <SelectTrigger className="h-12! w-full rounded-xl border-gray-200 focus:ring-[#222364]">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10">1 - 10 Employees</SelectItem>
                      <SelectItem value="11-50">11 - 50 Employees</SelectItem>
                      <SelectItem value="50-200">50 - 200 Employees</SelectItem>
                      <SelectItem value="200+">200+ Employees</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}
