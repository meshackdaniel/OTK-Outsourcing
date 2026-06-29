"use client";

import { DashboardLayout } from"@/components/layout/DashboardLayout";
import { Button } from"@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from"@/components/ui/avatar";
import { 
 ArrowLeft, MapPin, Mail, Phone, Link as LinkIcon, 
 Download, FileText, Check, Zap, Search, Clock, File
} from"lucide-react";
import Link from"next/link";
import { useParams } from"next/navigation";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from"@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from"@/components/ui/select";
import { Input } from"@/components/ui/input";
import { Textarea } from"@/components/ui/textarea";
import { useState } from"react";

import { format } from"date-fns";
import { Calendar as CalendarIcon } from"lucide-react";
import { cn } from"@/lib/utils";
import { Calendar } from"@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from"@/components/ui/popover";


export default function ApplicationReviewPage() {
 const params = useParams();

 const [statusMessage, setStatusMessage] = useState("");
 const [selectedStatus, setSelectedStatus] = useState("first_interview");
 const [messageType, setMessageType] = useState("recommended");
 const [currentStatus, setCurrentStatus] = useState("applied");
 const [isDialogOpen, setIsDialogOpen] = useState(false);
 const [interviews, setInterviews] = useState<{date: string, time: string, title: string, dateObj: Date}[]>([]);
 const [isInterviewDialogOpen, setIsInterviewDialogOpen] = useState(false);
 const [interviewDate, setInterviewDate] = useState<Date>();
 const [interviewTime, setInterviewTime] = useState("");
 const [interviewTitle, setInterviewTitle] = useState("First Round Interview");
 const [editingIndex, setEditingIndex] = useState<number | null>(null);

 const handleScheduleInterview = () => {
 if (interviewDate && interviewTime && interviewTitle) {
 const formattedDate = format(interviewDate,"PPP");
 if (editingIndex !== null) {
 const newInterviews = [...interviews];
 newInterviews[editingIndex] = { date: formattedDate, time: interviewTime, title: interviewTitle, dateObj: interviewDate };
 setInterviews(newInterviews);
 } else {
 setInterviews([...interviews, { date: formattedDate, time: interviewTime, title: interviewTitle, dateObj: interviewDate }]);
 }
 setIsInterviewDialogOpen(false);
 setInterviewDate(undefined);
 setInterviewTime("");
 setInterviewTitle("First Round Interview");
 setEditingIndex(null);
 }
 };

 const openEditInterview = (index: number) => {
 const int = interviews[index];
 setInterviewTitle(int.title);
 setInterviewDate(int.dateObj);
 setInterviewTime(int.time);
 setEditingIndex(index);
 setIsInterviewDialogOpen(true);
 };
 
 const openNewInterview = () => {
 setInterviewTitle("First Round Interview");
 setInterviewDate(undefined);
 setInterviewTime("");
 setEditingIndex(null);
 setIsInterviewDialogOpen(true);
 };
 

 
 const recommendedMessages: Record<string, string> = {
 first_interview:"Hi Amanda, we were very impressed by your background and would love to invite you for a first-round interview.",
 rejected:"Hi Amanda, thank you for applying. Unfortunately, we are moving forward with other candidates at this time.",
 hired:"Hi Amanda, congratulations! We would like to offer you the position."
 };

 const handleStatusChange = (val: string) => {
 setSelectedStatus(val);
 if (messageType ==="recommended") {
 setStatusMessage(recommendedMessages[val]);
 }
 };

 // Initialize recommended message on first render hack for demo
 if (messageType ==="recommended"&& statusMessage ===""&& selectedStatus in recommendedMessages) {
 setStatusMessage(recommendedMessages[selectedStatus]);
 }

 const handleConfirmUpdate = () => {
 setCurrentStatus(selectedStatus);
 setIsDialogOpen(false);
 };

 const getStatusBadge = () => {
 switch(currentStatus) {
 case"first_interview":
 return (
 <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border bg-purple-50 text-purple-700 border-purple-200">
 <span className="w-2 h-2 rounded-full bg-purple-600"></span> First Interview
 </span>
 );
 case"rejected":
 return (
 <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border bg-red-50 text-red-700 border-red-200">
 <span className="w-2 h-2 rounded-full bg-red-600"></span> Rejected
 </span>
 );
 case"hired":
 return (
 <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border bg-green-50 text-green-700 border-green-200">
 <span className="w-2 h-2 rounded-full bg-green-600"></span> Hired
 </span>
 );
 default:
 return (
 <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border bg-gray-50 text-blue-700 border-blue-200">
 <span className="w-2 h-2 rounded-full bg-blue-600"></span> Applied
 </span>
 );
 }
 };
 
 return (
 <DashboardLayout type="employer">
 
 {/* Header & Breadcrumbs */}
 <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6 flex items-center gap-4">
 <Link href={`/employer/jobs/${params.id}`}>
 <Button variant="outline"size="icon"className="h-10 w-10 rounded-xl border-gray-200 text-gray-700 hover:bg-gray-50 transition">
 <ArrowLeft className="w-5 h-5"/>
 </Button>
 </Link>
 <div className="flex items-center gap-2 text-sm font-bold text-gray-900">
 <Link href="/employer/jobs"className="hover:text-[#222364]">Job Posts</Link>
 <span className="text-gray-400">›</span>
 <Link href={`/employer/jobs/${params.id}`} className="hover:text-[#222364]">Back-end Engineer</Link>
 <span className="text-gray-400">›</span>
 <span className="text-gray-400 font-medium">View Application</span>
 </div>
 </div>

 <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 pb-20">
 
 {/* Left Column: Candidate Profile & Details */}
 <div className="xl:col-span-2 space-y-6">
 
 {/* Main Profile Card */}
 <div className="bg-white rounded-3xl p-8 border border-gray-100">
 
 {/* Top Profile Section */}
 <div className="flex flex-col md:flex-row gap-6 items-start mb-8">
 <Avatar className="w-24 h-24 border border-gray-100">
 <AvatarImage src={`/avatars/${params.candidateId ||'1'}.png`} className="object-cover"/>
 <AvatarFallback className="bg-[#222364] text-white text-2xl font-bold">AT</AvatarFallback>
 </Avatar>
 
 <div className="flex-1">
 <div className="flex items-center gap-3 mb-1">
 <h1 className="text-xl font-black text-gray-900">Amanda Temi</h1>
 <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-bold bg-green-50 text-green-600">
 <Zap className="w-4 h-4 fill-current"/> 85 %
 </span>
 </div>
 
 <div className="flex items-center gap-3 mb-2">
 <span className="text-gray-600 font-medium text-base">Mechanical Engineer</span>
 <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-bold bg-gray-50 text-orange-600 border border-orange-100">
 Skilled <span className="w-3.5 h-3.5 rounded-full bg-gray-500 text-white flex items-center justify-center text-[8px]">✓</span>
 </span>
 </div>
 
 <div className="flex items-center gap-1.5 text-gray-500 text-sm font-medium mb-6">
 <MapPin className="w-4 h-4"/>
 Remote (Lagos, Nigeria)
 </div>

 {/* Actions */}
 <div className="flex flex-wrap items-center gap-3">
 <Button variant="outline"className="rounded-xl border-[#222364] text-[#222364] font-bold px-6 hover:bg-gray-50 h-11"asChild>
 <Link href="/employer/messages">Send Message</Link>
 </Button>
 
 <Dialog open={isInterviewDialogOpen} onOpenChange={setIsInterviewDialogOpen}>
 <DialogTrigger asChild>
 <Button onClick={openNewInterview} className="rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-bold px-6 h-11">
 Schedule Interview
 </Button>
 </DialogTrigger>
 <DialogContent className="sm:max-w-[425px]">
 <DialogHeader>
 <DialogTitle>{editingIndex !== null ?"Edit Interview":"Schedule an Interview"}</DialogTitle>
 </DialogHeader>
 <div className="space-y-4 py-4">
 <div className="space-y-2">
 <label className="text-sm font-bold text-gray-700">Interview Title</label>
 <Input 
 value={interviewTitle}
 onChange={(e) => setInterviewTitle(e.target.value)}
 className="h-11 rounded-xl"
 placeholder="e.g. Technical Interview"
 />
 </div>
 <div className="grid grid-cols-2 gap-4">
 <div className="space-y-2">
 <label className="text-sm font-bold text-gray-700">Date</label>
 <Popover>
 <PopoverTrigger asChild>
 <Button
 variant={"outline"}
 className={cn(
"w-full h-11 rounded-xl justify-start text-left font-normal border-gray-200",
 !interviewDate &&"text-gray-500"
 )}
 >
 <CalendarIcon className="mr-2 h-4 w-4"/>
 {interviewDate ? format(interviewDate,"PPP") : <span>Pick a date</span>}
 </Button>
 </PopoverTrigger>
 <PopoverContent className="w-auto p-0">
 <Calendar
 mode="single"
 selected={interviewDate}
 onSelect={setInterviewDate}
 />
 </PopoverContent>
 </Popover>
 </div>
 <div className="space-y-2">
 <label className="text-sm font-bold text-gray-700">Time</label>
 <Select value={interviewTime} onValueChange={setInterviewTime}>
 <SelectTrigger className="w-full h-11 rounded-xl border-gray-200">
 <SelectValue placeholder="Select time"/>
 </SelectTrigger>
 <SelectContent>
 {["09:00 AM","09:30 AM","10:00 AM","10:30 AM","11:00 AM","11:30 AM","12:00 PM","01:00 PM","01:30 PM","02:00 PM","02:30 PM","03:00 PM","03:30 PM","04:00 PM","04:30 PM","05:00 PM"].map(time => (
 <SelectItem key={time} value={time}>{time}</SelectItem>
 ))}
 </SelectContent>
 </Select>
 </div>
 </div>
 </div>
 <DialogFooter>
 <Button onClick={handleScheduleInterview} disabled={!interviewDate || !interviewTime} className="w-full rounded-xl bg-[#222364] text-white hover:bg-[#1a1a4b]">
 {editingIndex !== null ?"Save Changes":"Confirm Schedule"}
 </Button>
 </DialogFooter>
 </DialogContent>
 </Dialog>


 {!["hired","rejected"].includes(currentStatus) && (
 <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
 <DialogTrigger asChild>
 <Button className="rounded-xl bg-[#f2c060] hover:bg-[#e0b050] text-[#222364] font-bold px-6 h-11">
 Update Status
 </Button>
 </DialogTrigger>
 <DialogContent className="sm:max-w-[425px]">
 <DialogHeader>
 <DialogTitle>Update Candidate Status</DialogTitle>
 </DialogHeader>
 <div className="space-y-6 py-4">
 <div className="space-y-2">
 <label className="text-sm font-bold text-gray-700">New Status</label>
 <Select value={selectedStatus} onValueChange={handleStatusChange}>
 <SelectTrigger className="w-full h-11 rounded-xl">
 <SelectValue placeholder="Select status"/>
 </SelectTrigger>
 <SelectContent>
 <SelectItem value="first_interview">First Interview</SelectItem>
 <SelectItem value="hired">Hired</SelectItem>
 <SelectItem value="rejected">Rejected</SelectItem>
 </SelectContent>
 </Select>
 </div>
 
 <div className="space-y-2">
 <div className="flex items-center justify-between">
 <label className="text-sm font-bold text-gray-700">Message to Candidate</label>
 <div className="flex gap-2">
 <button 
 onClick={() => { setMessageType('recommended'); setStatusMessage(recommendedMessages[selectedStatus]); }}
 className={`text-xs font-bold px-2 py-1 rounded-md ${messageType ==='recommended'?'bg-[#222364] text-white':'bg-gray-100 text-gray-500'}`}
 >
 Recommended
 </button>
 <button 
 onClick={() => { setMessageType('custom'); setStatusMessage(""); }}
 className={`text-xs font-bold px-2 py-1 rounded-md ${messageType ==='custom'?'bg-[#222364] text-white':'bg-gray-100 text-gray-500'}`}
 >
 Custom
 </button>
 </div>
 </div>
 <Textarea 
 value={statusMessage}
 onChange={(e) => setStatusMessage(e.target.value)}
 placeholder="Type your message here..."
 className="min-h-[100px] rounded-xl text-sm"
 />
 </div>
 </div>
 <DialogFooter>
 <Button onClick={handleConfirmUpdate} className="w-full rounded-xl bg-[#222364] text-white hover:bg-[#1a1a4b]">
 Confirm Update
 </Button>
 </DialogFooter>
 </DialogContent>
 </Dialog>
 )}

 </div>
 </div>
 </div>

 {/* Skills */}
 <div className="flex flex-wrap gap-2 mb-6">
 <span className="border border-gray-200 text-gray-700 text-sm font-medium px-4 py-1.5 rounded-xl">AutoCad</span>
 <span className="border border-gray-200 text-gray-700 text-sm font-medium px-4 py-1.5 rounded-xl">SolidWorks</span>
 <span className="border border-gray-200 text-gray-700 text-sm font-medium px-4 py-1.5 rounded-xl">Thermodynamics</span>
 <span className="border border-gray-200 text-gray-700 text-sm font-medium px-4 py-1.5 rounded-xl">Design</span>
 </div>

 {/* Bio */}
 <p className="text-gray-700 leading-relaxed font-medium mb-8">
 I'm a mechanical engineer who loves solving real-world problems through design, motion, and innovation. Over the years, I've worked on projects ranging from automated systems to sustainable product designs, blending technical precision.
 </p>

 {/* Documents */}
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 <div className="bg-gray-50 rounded-2xl p-4 flex items-center justify-between border border-gray-100/50">
 <div className="flex items-center gap-3">
 <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
 <FileText className="w-5 h-5 text-red-500"/>
 </div>
 <div>
 <p className="text-sm font-bold text-gray-900">Bliss_Maurice_CV.pdf</p>
 <p className="text-xs text-gray-500 font-medium mt-0.5">2.4 MB • Resume</p>
 </div>
 </div>
 <button className="text-gray-400 hover:text-gray-900 transition">
 <Download className="w-5 h-5"/>
 </button>
 </div>

 <div className="bg-gray-50 rounded-2xl p-4 flex items-center justify-between border border-gray-100/50">
 <div className="flex items-center gap-3">
 <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center">
 <File className="w-5 h-5 text-gray-500"/>
 </div>
 <div>
 <p className="text-sm font-bold text-gray-900">Cover_Letter.docx</p>
 <p className="text-xs text-gray-500 font-medium mt-0.5">1.1 MB • Support Doc</p>
 </div>
 </div>
 <button className="text-gray-400 hover:text-gray-900 transition">
 <Download className="w-5 h-5"/>
 </button>
 </div>
 </div>

 </div>

 
 {/* Scheduled Interviews */}
 {interviews.length > 0 && (
 <div className="bg-white rounded-3xl p-8 border border-gray-100">
 <h2 className="text-lg font-black text-gray-900 mb-6">Scheduled Interviews</h2>
 <div className="space-y-4">
 {interviews.map((int, i) => (
 <div key={i} className="flex items-center justify-between bg-gray-50 p-4 rounded-2xl border border-gray-100/50">
 <div className="flex items-center gap-4">
 <div className="w-12 h-12 rounded-xl bg-[#222364] flex items-center justify-center shrink-0">
 <Clock className="w-5 h-5 text-white"/>
 </div>
 <div>
 <h3 className="text-sm font-black text-gray-900">{int.title}</h3>
 <p className="text-xs font-medium text-gray-500 mt-0.5">{int.date} at {int.time}</p>
 </div>
 </div>
 <Button onClick={() => openEditInterview(i)} variant="outline"size="sm"className="rounded-lg text-xs font-bold border-gray-200">
 Edit
 </Button>
 </div>
 ))}
 </div>
 </div>
 )}

 {/* Questionnaire Answers */}
 <div className="bg-white rounded-3xl p-8 border border-gray-100">
 <h2 className="text-lg font-black text-gray-900 mb-6">Questionnaire Answers</h2>
 
 <div className="space-y-6">
 <div>
 <h3 className="text-sm font-black text-gray-900 mb-2">Why do you want to work with us?</h3>
 <div className="bg-gray-100/70 p-4 rounded-xl text-gray-600 text-sm font-medium">
 Because I need money
 </div>
 </div>
 
 <div>
 <h3 className="text-sm font-black text-gray-900 mb-2">What makes you a good fit?</h3>
 <div className="bg-gray-100/70 p-4 rounded-xl text-gray-600 text-sm font-medium">
 I've been doing this for over a decade
 </div>
 </div>
 
 <div>
 <h3 className="text-sm font-black text-gray-900 mb-2">Are you authorized to work in NG?</h3>
 <div className="bg-gray-100/70 p-4 rounded-xl text-gray-600 text-sm font-medium">
 Yes, citizen
 </div>
 </div>
 </div>
 </div>

 </div>

 {/* Right Column: Status & Contact */}
 <div className="space-y-6">
 
 {/* Application Status */}
 <div className="bg-white rounded-3xl p-8 border border-gray-100">
 <div className="flex flex-col md:flex-row justify-between items-center mb-6">
 <h2 className="text-lg font-black text-gray-900">Application Status</h2>
 {getStatusBadge()}
 </div>
 
 <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[19px] before:w-0.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:bg-gray-100 before:h-full before:z-0">
 
 {/* Step 1: Applied (Always shown) */}
 <div className="relative z-10 flex flex-col md:flex-row gap-4 items-start">
 <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 border-4 border-white">
 <Check className="w-5 h-5 text-gray-500"/>
 </div>
 <div className="pt-2">
 <h3 className="text-sm font-black text-gray-900">Applied</h3>
 <p className="text-sm text-gray-500 font-medium mt-1">Oct 24, 2023 • 09:15 AM</p>
 </div>
 </div>

 {/* Step 2: Screening (Always shown) */}
 <div className="relative z-10 flex flex-col md:flex-row gap-4 items-start">
 <div className={`w-10 h-10 rounded-full ${currentStatus ==='applied'?'bg-[#222364]':'bg-blue-100'} flex items-center justify-center shrink-0 border-4 border-white`}>
 {currentStatus ==='applied'? <Search className="w-4 h-4 text-white"/> : <Check className="w-5 h-5 text-gray-500"/>}
 </div>
 <div className="pt-2">
 <h3 className="text-sm font-black text-gray-900">Screening</h3>
 <p className="text-sm text-gray-500 font-medium mt-1">
 {currentStatus ==='applied'?'Currently being reviewed':'Review completed'}
 </p>
 </div>
 </div>

 {/* Step 3: Interview (Shown if Interview, Hired, or Rejected) */}
 {(currentStatus ==='first_interview'|| currentStatus ==='hired'|| currentStatus ==='rejected') && (
 <div className="relative z-10 flex flex-col md:flex-row gap-4 items-start">
 <div className={`w-10 h-10 rounded-full ${currentStatus ==='first_interview'?'bg-[#222364]':'bg-blue-100'} flex items-center justify-center shrink-0 border-4 border-white`}>
 {currentStatus ==='first_interview'? <Clock className="w-4 h-4 text-white"/> : <Check className="w-5 h-5 text-gray-500"/>}
 </div>
 <div className="pt-2">
 <h3 className="text-sm font-black text-gray-900">Interview</h3>
 <p className="text-sm text-gray-500 font-medium mt-1">
 {currentStatus ==='first_interview'?'Pending schedule':'Interview completed'}
 </p>
 </div>
 </div>
 )}

 {/* Step 4: Hired / Rejected (Shown only if Hired or Rejected) */}
 {(currentStatus ==='hired'|| currentStatus ==='rejected') && (
 <div className="relative z-10 flex flex-col md:flex-row gap-4 items-start">
 <div className={`w-10 h-10 rounded-full ${currentStatus ==='hired'?'bg-green-500':'bg-red-500'} flex items-center justify-center shrink-0 border-4 border-white`}>
 {currentStatus ==='hired'? <Check className="w-5 h-5 text-white"/> : <File className="w-4 h-4 text-white"/>}
 </div>
 <div className="pt-2">
 <h3 className="text-sm font-black text-gray-900">
 {currentStatus ==='hired'?'Hired':'Rejected'}
 </h3>
 <p className="text-sm text-gray-500 font-medium mt-1">Status updated by employer</p>
 </div>
 </div>
 )}

 </div>
 </div>

 {/* Contact Info */}
 <div className="bg-white rounded-3xl p-8 border border-gray-100">
 <h2 className="text-lg font-black text-gray-900 mb-6">Contact Info</h2>
 
 <div className="space-y-6">
 <div className="flex items-center gap-4">
 <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100/50">
 <Mail className="w-4 h-4 text-[#222364]"/>
 </div>
 <div>
 <p className="text-xs font-medium text-gray-500 mb-0.5">Email</p>
 <p className="text-sm font-bold text-gray-900 break-all">blissmaurice@gmail.com</p>
 </div>
 </div>
 
 <div className="flex items-center gap-4">
 <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100/50">
 <Phone className="w-4 h-4 text-[#222364]"/>
 </div>
 <div>
 <p className="text-xs font-medium text-gray-500 mb-0.5">Phone</p>
 <p className="text-sm font-bold text-gray-900">+234 812 345 6789</p>
 </div>
 </div>

 <div className="flex items-center gap-4">
 <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100/50">
 <LinkIcon className="w-4 h-4 text-[#222364]"/>
 </div>
 <div>
 <p className="text-xs font-medium text-gray-500 mb-0.5">Portfolio</p>
 <Link href="#"className="text-sm font-bold text-blue-600 hover:underline">blissdev.me</Link>
 </div>
 </div>
 </div>
 </div>

 </div>
 </div>

 </DashboardLayout>
 );
}
