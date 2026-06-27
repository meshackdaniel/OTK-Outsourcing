"use client";

import { DashboardLayout } from"@/components/layout/DashboardLayout";
import { Avatar, AvatarFallback, AvatarImage } from"@/components/ui/avatar";
import { MapPin, FileCheck, Edit2, Plus } from"lucide-react";

export default function TalentProfile() {
 return (
 <DashboardLayout type="talent">
 <div className="space-y-6 max-w-[900px] mx-auto">
 
 {/* Header Card */}
 <div className="flex items-start gap-6 bg-transparent">
 <Avatar className="w-24 h-24 border border-gray-100">
 <AvatarImage src="https://i.pravatar.cc/150?u=alex"/>
 <AvatarFallback>AN</AvatarFallback>
 </Avatar>
 <div className="flex-1 mt-2">
 <h1 className="text-2xl font-bold text-gray-900 mb-2">Alex Nwosu</h1>
 <div className="flex items-center gap-4 mb-2">
 <span className="text-gray-600 font-medium">Mechanical Engineer</span>
 <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 px-2 py-0.5 rounded-md text-xs font-semibold border border-amber-200">
 Skilled <FileCheck className="w-3 h-3"/>
 </span>
 </div>
 <div className="flex items-center gap-1 text-sm text-gray-500">
 <MapPin className="w-4 h-4"/>
 Lagos, Nigeria
 </div>
 </div>
 </div>

 {/* Bio */}
 <div className="bg-white rounded-2xl p-8 border border-gray-100 relative">
 <h2 className="font-bold text-gray-900 mb-4">Bio</h2>
 <button className="absolute right-6 top-6 p-2 text-gray-400 hover:text-gray-900 border border-gray-200 rounded-full hover:bg-gray-50 transition">
 <Edit2 className="w-4 h-4"/>
 </button>
 <p className="text-gray-600 leading-relaxed max-w-[90%]">
 I'm a mechanical engineer who loves solving real-world problems through design, motion, and innovation. Over the years, I've worked on projects ranging from automated systems to sustainable product designs, blending technical precision.
 </p>
 </div>

 {/* Skills */}
 <div className="bg-white rounded-2xl p-8 border border-gray-100 relative">
 <h2 className="font-bold text-gray-900 mb-4">Skills</h2>
 <button className="absolute right-6 top-6 p-2 text-gray-400 hover:text-gray-900 border border-gray-200 rounded-full hover:bg-gray-50 transition">
 <Edit2 className="w-4 h-4"/>
 </button>
 <div className="flex flex-wrap gap-2">
 {["AutoCad","SolidWorks","Thermodynamics","Design"].map(skill => (
 <span key={skill} className="px-4 py-1.5 border border-gray-200 text-gray-800 rounded-lg text-xs font-semibold bg-white">
 {skill}
 </span>
 ))}
 </div>
 </div>

 {/* Languages */}
 <div className="bg-white rounded-2xl p-8 border border-gray-100 relative">
 <h2 className="font-bold text-gray-900 mb-4">Languages</h2>
 <button className="absolute right-6 top-6 p-2 text-gray-400 hover:text-gray-900 border border-gray-200 rounded-full hover:bg-gray-50 transition">
 <Edit2 className="w-4 h-4"/>
 </button>
 <div className="flex flex-wrap gap-2">
 {["Hausa","English"].map(lang => (
 <span key={lang} className="px-4 py-1.5 border border-gray-200 text-gray-800 rounded-lg text-xs font-semibold bg-white">
 {lang}
 </span>
 ))}
 </div>
 </div>

 {/* CV */}
 <div className="bg-white rounded-2xl p-8 border border-gray-100 relative">
 <h2 className="font-bold text-gray-900 mb-6">CV</h2>
 <button className="absolute right-6 top-6 p-2 text-[#222364] hover:text-[#1a1a4b] border border-[#222364] rounded-full hover:bg-gray-50 transition">
 <Plus className="w-4 h-4"/>
 </button>
 <div className="w-[300px] h-[200px] bg-gray-50 border border-gray-200 rounded-xl overflow-hidden p-4 relative">
 <div className="absolute inset-0 opacity-20 pointer-events-none"style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 19px, #000 19px, #000 20px)' }}></div>
 <p className="text-[8px] text-gray-500 font-serif leading-tight">
 ALEX NWOSU<br/>
 Mechanical Engineer<br/><br/>
 PROFESSIONAL EXPERIENCE<br/>
 Senior Mechanical Engineer | Oct 2020 - Present<br/>
 • Designed and implemented automated systems...<br/>
 • Reduced production bottlenecks by 15%...
 </p>
 </div>
 </div>

 {/* Education */}
 <div className="bg-white rounded-2xl p-8 border border-gray-100 relative">
 <h2 className="font-bold text-gray-900 mb-6">Education</h2>
 <button className="absolute right-6 top-6 p-2 text-[#222364] hover:text-[#1a1a4b] border border-[#222364] rounded-full hover:bg-gray-50 transition">
 <Plus className="w-4 h-4"/>
 </button>
 <div className="space-y-6">
 <div className="flex justify-between items-start border-b border-gray-50 pb-4">
 <div>
 <p className="font-bold text-gray-900 text-sm">Master of Science in Logistics & Supply Chain Management</p>
 <p className="text-gray-500 text-sm mt-1">University of Illinois Chicago</p>
 </div>
 <span className="text-gray-400 text-sm">2018 - 2020</span>
 </div>
 <div className="flex justify-between items-start">
 <div>
 <p className="font-bold text-gray-900 text-sm">Bachelor of Business Administration</p>
 <p className="text-gray-500 text-sm mt-1">DePaul University</p>
 </div>
 <span className="text-gray-400 text-sm">2014 - 2018</span>
 </div>
 </div>
 </div>

 {/* Certifications */}
 <div className="bg-white rounded-2xl p-8 border border-gray-100 relative">
 <h2 className="font-bold text-gray-900 mb-6">Certifications</h2>
 <button className="absolute right-6 top-6 p-2 text-[#222364] hover:text-[#1a1a4b] border border-[#222364] rounded-full hover:bg-gray-50 transition">
 <Plus className="w-4 h-4"/>
 </button>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
 {[1, 2, 3].map((cert) => (
 <div key={cert} className="w-full aspect-[1.4] bg-green-50 border border-green-100 rounded-xl overflow-hidden relative p-4 flex flex-col justify-center border-l-8 border-l-green-700">
 <div className="absolute top-2 right-2 flex gap-1 opacity-20">
 <div className="w-4 h-4 rounded-full bg-amber-500"></div>
 <div className="w-4 h-4 rounded-full bg-green-700"></div>
 </div>
 <p className="text-[8px] uppercase tracking-wider text-green-800 font-bold mb-1">Certificate Of Excellence</p>
 <p className="text-xl font-serif text-green-900">Francisco Andrade</p>
 <div className="mt-4 flex gap-4 text-[6px] text-green-700">
 <div>Signature<br/><hr className="border-green-700 mt-1"/></div>
 <div>Date<br/><hr className="border-green-700 mt-1"/></div>
 </div>
 </div>
 ))}
 </div>
 </div>

 </div>
 </DashboardLayout>
 );
}
