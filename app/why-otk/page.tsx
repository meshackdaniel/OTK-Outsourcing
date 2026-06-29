import { Navbar } from"@/components/layout/Navbar";
import Footer from"@/components/layout/Footer";
import { ReadyToTransformCTA } from"@/components/layout/ReadyToTransformCTA";
import { CheckCircle2 } from"lucide-react";
import Image from"next/image";
import { FadeIn, StaggerContainer, FadeInStaggerItem } from"@/components/ui/fade-in";

export default function WhyOTKPage() {
 const sections = [
 {
 title:"Global Reach, Local Expertise",
 description:"We bridge the gap between global employers and elite talent in emerging markets, managing all the local complexities so you don't have to.",
 points: [
"Access to pre-vetted talent in multiple time zones",
"Local legal, tax, and compliance handled completely",
"Cultural alignment and integration support"
 ],
 image:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200&h=800",
 reversed: false,
 },
 {
 title:"Wallet-First Compliance",
 description:"Our infrastructure runs on secure, pre-funded wallet architecture to ensure zero upfront payout risks and 100% tax compliance.",
 points: [
"Escrow-like wallet funding for employer security",
"Automated cross-border payouts with localized currencies",
"Built-in taxation and mandatory deductions"
 ],
 image:"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200&h=800",
 reversed: true,
 },
 {
 title:"Rapid Deployment",
 description:"From job activation to onboarding, our automated matching and vetting processes cut time-to-hire by 60%. Build your team in days, not months.",
 points: [
"AI-assisted candidate matching algorithms",
"Standardized technical and behavioral vetting",
"One-click contract generation and onboarding"
 ],
 image:"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200&h=800",
 reversed: false,
 },
 {
 title:"Quality Guaranteed",
 description:"We don't just match resumes; we manage the entire lifecycle with integrated daily work logs and performance tracking.",
 points: [
"Real-time productivity and attendance tracking",
"Dedicated account managers for continuous support",
"Free replacement guarantee within the first 30 days"
 ],
 image:"https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200&h=800",
 reversed: true,
 }
 ];

 return (
 <div className="min-h-screen bg-[#FDFDFD] font-sans text-gray-900">
 <Navbar />
 <main>
 
 {/* 1. Hero Section */}
 <section className="pt-32 pb-24 px-4 lg:px-8 max-w-7xl mx-auto text-center min-h-[50vh] flex flex-col justify-center">
 <FadeIn>
 <h1 className="text-5xl md:text-8xl font-black text-[#222364] mb-8 leading-tight tracking-tight">
 Why choose <br />
 <span className="text-[#f2c060]">OTK Outsourcing?</span>
 </h1>
 </FadeIn>
 <FadeIn delay={0.1}>
 <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
 We are not just a job board. We are an end-to-end workforce operating system designed for modern, compliant, and scalable teams.
 </p>
 </FadeIn>
 </section>

 {/* 2. Detailed Z-Pattern Sections */}
 <section className="py-12 bg-white">
 <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col gap-24 lg:gap-32">
 {sections.map((section, idx) => (
 <div 
 key={idx} 
 className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
 section.reversed ?"lg:flex-row-reverse":""
 }`}
 >
 {/* Text Content */}
 <FadeIn className="flex-1 space-y-8">
 <h2 className="text-4xl lg:text-5xl font-black text-[#222364] leading-tight">
 {section.title}
 </h2>
 <p className="text-xl text-gray-600 leading-relaxed">
 {section.description}
 </p>
 
 <ul className="space-y-4 pt-4">
 {section.points.map((point, pIdx) => (
 <li key={pIdx} className="flex items-start gap-3">
 <CheckCircle2 className="w-6 h-6 text-[#f2c060] shrink-0 mt-0.5"/>
 <span className="text-lg text-gray-700 font-medium">{point}</span>
 </li>
 ))}
 </ul>
 </FadeIn>

 {/* Image */}
 <FadeIn delay={0.2} className="flex-1 w-full relative">
 <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden relative bg-gray-100 group">
 <img
 src={section.image}
 alt={section.title}
 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
 />
 {/* Decorative subtle overlay */}
 <div className="absolute inset-0 bg-[#222364]/5 mix-blend-multiply"></div>
 </div>
 
 {/* Decorative Elements */}
 <div className={`absolute -z-10 w-full h-full rounded-[2.5rem] bg-[#f2c060]/20 blur-2xl top-8 ${section.reversed ?'-right-8':'-left-8'}`}></div>
 </FadeIn>
 </div>
 ))}
 </div>
 </section>

 <FadeIn className="mt-24">
 <ReadyToTransformCTA 
 title="Ready to experience the OTK difference?"
 subtitle="Join thousands of companies and talents who trust our platform to scale."
 buttonText="Get Started Today"
 buttonLink="/signup"
 />
 </FadeIn>
 </main>
 <Footer />
 </div>
 );
}
