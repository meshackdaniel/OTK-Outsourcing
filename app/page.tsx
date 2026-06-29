import Image from"next/image";
import { Button } from"@/components/ui/button";
import { Card } from"@/components/ui/card";
import { Navbar } from"@/components/layout/Navbar";
import PartnersMarquee from"@/components/layout/PartnersMarquee";
import Footer from"@/components/layout/Footer";
import EarlyAdopters from"@/components/layout/testimonial/EarlyAdopters";
import { ReadyToTransformCTA } from"@/components/layout/ReadyToTransformCTA";
import { Search, MapPin, Briefcase, ChevronRight, CheckCircle2, TrendingUp, Users, Building2, Globe, ArrowRight } from"lucide-react";
import Link from"next/link";
import { FadeIn, StaggerContainer, FadeInStaggerItem } from"@/components/ui/fade-in";
import { HeroSection } from"@/components/layout/HeroSection";
import { TechnologySolutionsSection } from"@/components/layout/TechnologySolutionsSection";
import { AffiliateBanner } from"@/components/layout/AffiliateBanner";
import { SolutionsIndustryScroll } from"@/components/layout/SolutionsIndustryScroll";

export default function HomePage() {
 return (
 <div className="min-h-screen bg-white">
 <Navbar />
 
 <main>
 {/* Top Hero Section */}
 <HeroSection />

 {/* Stats */}
 <section className="py-10">
 <div className="max-w-7xl mx-auto px-4 lg:px-8">
 <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6">
 {[
 { num:"500 +", label:"Active Employers" },
 { num:"15,526", label:"Posted Jobs" },
 { num:"200 +", label:"Hiring Companies" },
 { num:"2000 +", label:"Skilled Talents" },
 ].map((s) => (
 <FadeInStaggerItem key={s.label} className="bg-white border border-gray-100 py-8 px-6 rounded-[2rem] flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-all duration-300">
 <div className="text-2xl lg:text-3xl font-black text-gray-900 mb-2">
 {s.num}
 </div>
 <p className="text-gray-500 font-semibold text-sm">{s.label}</p>
 </FadeInStaggerItem>
 ))}
 </StaggerContainer>
 </div>
 </section>

 {/* Company Logos */}
 <div className="border-b border-gray-100 pb-8">
 <div className="max-w-7xl mx-auto px-4 lg:px-8">
 <PartnersMarquee />
 </div>
 </div>

 {/* A Game Changer For Finding Real Work */}
 <section className="py-16 bg-white">
 <div className="max-w-7xl mx-auto px-4 lg:px-8">
 <FadeIn className="text-center mb-12">
 <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-3">
 A Game Changer For Finding Real Work
 </h2>
 <p className="text-gray-600 max-w-xl mx-auto text-base">
 We're helping thousands of workers like you find reliable jobs, fair pay.
 </p>
 </FadeIn>
 
 <div className="space-y-8">
 {/* Row 1: For Job Seekers */}
 <FadeIn className="flex flex-col md:flex-row gap-8">
 <div className="md:w-5/12 bg-[#f9fafb] rounded-[3rem] p-10 flex flex-col justify-between transition-">
 <div>
 <h3 className="font-black text-2xl text-gray-900 mb-6">For Job Seekers</h3>
 <div className="space-y-4 mb-8">
 {["Verified Jobs","Smart Matching","Fair Pay"].map((item) => (
 <div key={item} className="bg-white rounded-2xl p-5 flex items-center justify-between group cursor-pointer hover:bg-gray-50 transition-colors">
 <span className="font-bold text-gray-900 text-base">{item}</span>
 <div className="w-8 h-8 bg-gray-100 group-hover:bg-[#f2c060] rounded-full flex items-center justify-center transition-colors">
 <ChevronRight className="w-4 h-4 text-gray-900"/>
 </div>
 </div>
 ))}
 </div>
 </div>
 <Link href="/talent/jobs"className="w-full">
 <Button className="w-full bg-[#222364] hover:bg-[#1a1a4b] text-white rounded-xl h-14 font-bold text-lg">
 Find Work
 </Button>
 </Link>
 </div>
 <div className="md:w-7/12 bg-[#f9fafb] rounded-[3rem] overflow-hidden relative min-h-[350px]">
 <div className="absolute inset-4 bg-gray-200 rounded-[2rem] overflow-hidden flex items-center justify-center">
 <span className="text-gray-500 font-medium">Dashboard Preview Placeholder</span>
 </div>
 </div>
 </FadeIn>

 {/* Row 2: For Recruiters and Employers */}
 <FadeIn delay={0.2} className="flex flex-col md:flex-row-reverse gap-8">
 <div className="md:w-5/12 bg-[#f9fafb] rounded-[3rem] p-10 flex flex-col justify-between transition-">
 <div>
 <h3 className="font-black text-2xl text-gray-900 mb-6">For Recruiters</h3>
 <div className="space-y-4 mb-8">
 {["Quality Talents","Smart Matching","Workforce Management"].map((item) => (
 <div key={item} className="bg-white rounded-2xl p-5 flex items-center justify-between group cursor-pointer hover:bg-gray-50 transition-colors">
 <span className="font-bold text-gray-900 text-base">{item}</span>
 <div className="w-8 h-8 bg-gray-100 group-hover:bg-[#f2c060] rounded-full flex items-center justify-center transition-colors">
 <ChevronRight className="w-4 h-4 text-gray-900"/>
 </div>
 </div>
 ))}
 </div>
 </div>
 <Link href="/employer/jobs/create"className="w-full">
 <Button className="w-full bg-[#222364] hover:bg-[#1a1a4b] text-white rounded-xl h-14 font-bold text-lg">
 Find Talent
 </Button>
 </Link>
 </div>
 <div className="md:w-7/12 bg-[#f9fafb] rounded-[3rem] overflow-hidden relative min-h-[350px]">
 <div className="absolute inset-4 bg-gray-200 rounded-[2rem] overflow-hidden flex items-center justify-center">
 <span className="text-gray-500 font-medium">Dashboard Preview Placeholder</span>
 </div>
 </div>
 </FadeIn>
 </div>
 </div>
 </section>

 {/* Recently Posted Jobs */}
 <section className="py-20 bg-[#f9fafb]">
 <div className="max-w-7xl mx-auto px-4 lg:px-8">
 <div className="text-center mb-12">
 <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-3">
 Recently Posted Jobs
 </h2>
 <p className="text-gray-600 max-w-lg mx-auto text-sm md:text-base">
 We're helping thousands of workers like you find reliable jobs, fair pay.
 </p>
 </div>

 <div className="space-y-6">
 {[
 {
 title:"Senior Frontend Developer",
 company:"Moniepoint",
 employees:"10 - 50",
 time:"2 hours ago",
 desc:"We're looking for a Senior Frontend Developer who doesn't just write code, you craft experiences, obsess over pixels, and get a weird amount of joy from turning complex problems into clean, intuitive UI. If you're that kind of engineer ... we want you",
 badges: [
 { label:"₦250,000 - ₦300,000", color:"bg-[#222364]"},
 { label:"Lagos - Nigeria", color:"bg-gray-500"},
 { label:"Full Time", color:"bg-gray-500"},
 { label:"On-site", color:"bg-gray-500"},
 { label:"3-5 years experience", color:"bg-[#222364]"},
 { label:"Skilled Workers", color:"bg-[#222364]"},
 ],
 clicks:"20 people clicked apply",
 logoBg:"bg-[#222364]"
 },
 {
 title:"Pipeline Engineer",
 company:"Shell",
 employees:"900 - 1k",
 time:"3 hours ago",
 desc:"We're looking for a Pipeline Engineer with strong technical expertise, experience in pipeline design, maintenance, and field operations. If you thrive in high impact engineering environments and deliver with precision — we'd love to meet you.",
 badges: [
 { label:"₦1,250,000 - ₦1,300,000", color:"bg-[#222364]"},
 { label:"Port Harcourt", color:"bg-gray-500"},
 { label:"Full Time", color:"bg-gray-500"},
 { label:"On-site", color:"bg-gray-500"},
 { label:"3-5 years experience", color:"bg-[#222364]"},
 { label:"Skilled Workers", color:"bg-[#222364]"},
 ],
 clicks:"67 people clicked apply",
 logoBg:"bg-[#222364]"
 },
 {
 title:"Project Manager",
 company:"Globacom",
 employees:"650 - 700",
 time:"Yesterday",
 desc:"GLO is looking for a Project Manager who can lead cross functional teams, manage timelines, and deliver complex telecom projects with clarity and confidence. If you take ownership, communicate well, and execute flawlessly. Apply if this role is fits you.",
 badges: [
 { label:"₦650,000 - ₦700,000", color:"bg-[#222364]"},
 { label:"Lagos - Nigeria", color:"bg-gray-500"},
 { label:"Full Time", color:"bg-gray-500"},
 { label:"Hybrid", color:"bg-gray-500"},
 { label:"3-5 years experience", color:"bg-[#222364]"},
 { label:"Skilled Workers", color:"bg-[#222364]"},
 ],
 clicks:"20 people clicked apply",
 logoBg:"bg-[#222364]"
 }
 ].map((job, idx) => (
 <div key={idx} className="bg-white rounded-3xl p-6 md:p-8">
 <div className="flex flex-col md:flex-row justify-between items-start mb-4">
 <div className="flex items-center gap-4">
 <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white text-xl ${job.logoBg}`}>
 {job.company[0]}
 </div>
 <div>
 <h3 className="font-black text-gray-900">{job.title}</h3>
 <div className="flex items-center gap-3 text-sm text-gray-500 mt-1">
 <span className="font-semibold text-gray-900">{job.company}</span>
 {job.employees && (
 <span className="bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full text-xs font-semibold flex items-center gap-1.5">
 <svg className="w-3 h-3"fill="currentColor"viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
 {job.employees}
 </span>
 )}
 </div>
 </div>
 </div>
 <span className="text-sm text-gray-500 font-medium">{job.time}</span>
 </div>

 {job.desc && <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-4xl">{job.desc}</p>}
 
 {job.badges.length > 0 && (
 <div className="flex flex-wrap gap-3 mb-8">
 {job.badges.map((badge, bIdx) => (
 <div key={bIdx} className="border border-gray-100 bg-gray-50 rounded-lg px-3 py-1.5 flex items-center gap-2 text-xs font-semibold text-gray-600">
 <span className={`w-2 h-2 rounded-full ${badge.color}`}></span>
 {badge.label}
 </div>
 ))}
 </div>
 )}

 {job.badges.length > 0 && (
 <div className="flex items-center gap-6">
 <Button className="bg-[#222364] hover:bg-[#1a1a4b] text-white px-10 h-10 rounded-lg font-semibold text-sm">
 Apply Now
 </Button>
 <span className="text-gray-500 text-xs font-medium">{job.clicks}</span>
 </div>
 )}
 

 </div>
 ))}
 </div>
 
 <div className="mt-12 flex justify-center">
 <Link href="/talent/jobs">
 <Button className="bg-[#222364] hover:bg-[#1a1a4b] text-white px-12 h-14 rounded-xl font-bold text-base">
 Explore all Jobs <ArrowRight className="w-4 h-4 ml-2"/>
 </Button>
 </Link>
      </div>
    </div>
  </section>
  
  <SolutionsIndustryScroll />

 {/* Technology & Software Solutions */}
 <TechnologySolutionsSection />

 {/* Affiliate & Partner Program */}
 <AffiliateBanner />


 {/* Testimonials */}
 <EarlyAdopters />

 {/* Bottom CTA */}
 <div className="max-w-7xl mx-auto px-4 lg:px-8 mb-8">
 <ReadyToTransformCTA 
 title="Ready to Transform Your Operations?"
 subtitle="Move operations weight off your shoulders. Scale your business, access global talent, and get started in just a few clicks."
 buttonText="Post Your Requirements"
 buttonLink="/employer/jobs/create"
 imageUrl="/images/homepage/footer CTA.png"
 className="px-0 py-0"
 />
 </div>
 
 </main>
 <Footer />
 </div>
 );
}
