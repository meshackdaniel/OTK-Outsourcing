import { Navbar } from"@/components/layout/Navbar";
import Footer from"@/components/layout/Footer";
import { ReadyToTransformCTA } from"@/components/layout/ReadyToTransformCTA";
import { Globe2, Users, ShieldCheck, Zap } from"lucide-react";
import Image from"next/image";
import { FadeIn, StaggerContainer, FadeInStaggerItem } from"@/components/ui/fade-in";

export default function AboutPage() {
 const values = [
 {
 icon: <Globe2 className="w-8 h-8 text-[#222364]"/>,
 title:"Global First",
 description:"We believe talent is evenly distributed, even if opportunity is not. We're building the infrastructure to bridge that gap."
 },
 {
 icon: <Users className="w-8 h-8 text-[#f2c060]"/>,
 title:"People Centric",
 description:"From comprehensive HMOs to reliable payouts, we put the well-being and growth of our talents at the forefront."
 },
 {
 icon: <ShieldCheck className="w-8 h-8 text-[#222364]"/>,
 title:"Absolute Compliance",
 description:"We navigate the complex web of global taxes, legalities, and compliance so that our clients never have to worry about it."
 },
 {
 icon: <Zap className="w-8 h-8 text-[#222364]"/>,
 title:"Relentless Execution",
 description:"We move fast. We build, ship, and iterate rapidly to provide the best tools for modern workforce management."
 }
 ];

 return (
 <div className="min-h-screen bg-[#FDFDFD] font-sans text-gray-900">
 <Navbar />
 <main>
 
 {/* 1. Hero Section */}
 <section className="pt-20 pb-16 px-4 lg:px-8 max-w-5xl mx-auto text-center min-h-[50vh] flex flex-col items-center justify-center">
 <FadeIn>
 <h1 className="text-5xl md:text-7xl font-black text-[#222364] mb-8 leading-tight tracking-tight">
 Building the operating system for the <span className="text-[#f2c060]">global workforce.</span>
 </h1>
 </FadeIn>
 <FadeIn delay={0.1}>
 <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
 OTK Outsourcing was born out of a simple realization: hiring globally is too hard, too risky, and too fragmented. We're here to change that.
 </p>
 </FadeIn>
 </section>

 {/* 2. Our Story / Image Section */}
 <section className="py-24 bg-white border-t border-gray-100">
 <div className="max-w-7xl mx-auto px-4 lg:px-8">
 <div className="flex flex-col lg:flex-row items-center gap-16">
 <FadeIn className="flex-1 w-full">
 <div className="aspect-square rounded-[2.5rem] overflow-hidden relative">
 <img 
 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200&h=1200"
 alt="Our team"
 className="w-full h-full object-cover"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-[#222364]/40 to-transparent"></div>
 </div>
 </FadeIn>
 <FadeIn delay={0.2} className="flex-1 w-full">
 <h2 className="text-4xl font-black text-[#222364] mb-6 tracking-tight">
 Our Story
 </h2>
 <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
 <p>
 A few years ago, our founders experienced firsthand the immense friction of building a cross-border team. Between navigating local compliance, figuring out secure payroll across different currencies, and dealing with disorganized talent pools, the process was broken.
 </p>
 <p>
 We realized that companies didn't just need a job board; they needed infrastructure. They needed an"Operating System as a Service"(OaaS) that handled everything from the moment a job is posted to the day the talent receives their monthly paycheck.
 </p>
 <p>
 Today, OTK Outsourcing powers hundreds of fast-growing companies and provides secure, reliable work for thousands of top-tier talents globally.
 </p>
 </div>
 </FadeIn>
 </div>
 </div>
 </section>

 {/* 3. Metrics Banner */}
 <section className="py-20 bg-[#0b0c19] text-white">
 <div className="max-w-7xl mx-auto px-4 lg:px-8">
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:divide-x divide-gray-800 space-y-8 md:space-y-0">
 <div>
 <p className="text-5xl md:text-6xl font-black text-[#f2c060] mb-2">10k+</p>
 <p className="text-gray-400 font-medium">Vetted Talents</p>
 </div>
 <div>
 <p className="text-5xl md:text-6xl font-black text-[#f2c060] mb-2">98%</p>
 <p className="text-gray-400 font-medium">Retention Rate</p>
 </div>
 <div>
 <p className="text-5xl md:text-6xl font-black text-[#f2c060] mb-2">24/7</p>
 <p className="text-gray-400 font-medium">Support Operations</p>
 </div>
 </div>
 </div>
 </section>

 {/* 4. Core Values */}
 <section className="py-24 bg-[#FAFAFA]">
 <div className="max-w-7xl mx-auto px-4 lg:px-8">
 <FadeIn className="text-center mb-16">
 <h2 className="text-4xl font-black text-[#222364] mb-4 tracking-tight">Core Values</h2>
 <p className="text-xl text-gray-500 max-w-2xl mx-auto">The principles that guide how we build our product and serve our community.</p>
 </FadeIn>

 <StaggerContainer className="grid md:grid-cols-2 gap-8">
 {values.map((val, i) => (
 <FadeInStaggerItem key={i} className="bg-white p-10 rounded-[2rem] border border-gray-100 transition-all duration-300">
 <div className="mb-6 bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center">
 {val.icon}
 </div>
 <h3 className="text-2xl font-black text-gray-900 mb-4">{val.title}</h3>
 <p className="text-gray-600 leading-relaxed">
 {val.description}
 </p>
 </FadeInStaggerItem>
 ))}
 </StaggerContainer>
 </div>
 </section>

 <ReadyToTransformCTA 
 title="Join us on our journey"
 subtitle="Whether you're an employer looking to scale, or a talent looking for your next big role."
 buttonText="Get Started"
 buttonLink="/signup"
 />

 </main>
 <Footer />
 </div>
 );
}
