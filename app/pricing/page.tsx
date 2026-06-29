import { Navbar } from"@/components/layout/Navbar";
import Footer from"@/components/layout/Footer";
import { ReadyToTransformCTA } from"@/components/layout/ReadyToTransformCTA";
import { Button } from"@/components/ui/button";
import { Check, Zap, Briefcase, Star, Search, Clock, Users } from"lucide-react";
import PartnersMarquee from"@/components/layout/PartnersMarquee";
import { FadeIn, StaggerContainer, FadeInStaggerItem } from"@/components/ui/fade-in";

export default function PricingPage() {
 return (
 <div className="min-h-screen bg-[#FDFDFD]">
 <Navbar />

 <main>
 {/* Header */}
 <section className="pt-24 pb-16 px-4 max-w-5xl mx-auto text-center">
 <FadeIn>
 <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#222364] mb-6 leading-tight">
 Flexible Modular Pricing for <br />
 <span className="text-[#f2c060]">Every Workforce Strategy</span>
 </h1>
 </FadeIn>
 <FadeIn delay={0.1}>
 <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto">
 From single job listings to fully managed enterprise outsourcing, our wallet-first ecosystem ensures transparent billing and compliant payouts.
 </p>
 </FadeIn>
 </section>

 {/* 1. Job Board & Marketplace Packages */}
 <section className="max-w-7xl mx-auto px-4 lg:px-8 mb-24">
 <FadeIn className="text-center mb-12">
 <h2 className="text-3xl font-black text-gray-900 mb-4">Job Board & Marketplace</h2>
 <p className="text-gray-500">Post roles, activate listings, and boost your visibility to top talent.</p>
 </FadeIn>
 
 <StaggerContainer className="grid lg:grid-cols-3 gap-8 items-start">
 {/* Free Draft */}
 <FadeInStaggerItem className="bg-white rounded-3xl p-8 border border-gray-100">
 <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
 <Briefcase className="w-6 h-6 text-gray-600"/>
 </div>
 <h3 className="text-xl font-black text-gray-900 mb-2">Draft Mode</h3>
 <p className="text-sm text-gray-500 mb-6 h-10">
 Best for planning your hiring pipeline before going live.
 </p>
 <div className="flex items-end gap-1 mb-8">
 <span className="text-4xl font-black text-gray-900">₦0</span>
 <span className="text-gray-500 text-sm mb-1">/unlimited</span>
 </div>
 <Button variant="outline"className="w-full rounded-xl h-12 mb-8 font-semibold border-gray-200">
 Start Drafting
 </Button>
 <ul className="space-y-4">
 {["Unlimited Job Drafts","Save for Later","Internal Review Access","No Visibility to Candidates"].map((feature) => (
 <li key={feature} className="flex items-center gap-3 text-sm text-gray-600">
 <Check className="w-4 h-4 text-[#222364] shrink-0"/> {feature}
 </li>
 ))}
 </ul>
 </FadeInStaggerItem>

 {/* Active Listing */}
 <FadeInStaggerItem className="bg-[#222364] rounded-3xl p-8 text-white relative overflow-hidden transform lg:-translate-y-4 border border-[#3b3c8f]">
 <div className="absolute top-0 right-0 bg-[#f2c060] text-gray-900 text-xs font-bold px-4 py-1 rounded-bl-xl">
 Standard Hire
 </div>
 <div className="w-12 h-12 bg-[#3b3c8f] rounded-xl flex items-center justify-center mb-6">
 <Zap className="w-6 h-6 text-[#f2c060]"/>
 </div>
 <h3 className="text-xl font-black text-white mb-2">Job Activation</h3>
 <p className="text-sm text-gray-500 mb-6 h-10">
 Activate your job to start receiving applications immediately.
 </p>
 <div className="flex items-end gap-1 mb-8">
 <span className="text-4xl font-black text-white">₦25,000</span>
 <span className="text-gray-500 text-sm mb-1">/job for 30 days</span>
 </div>
 <Button className="w-full bg-[#f2c060] hover:bg-[#dcae53] text-gray-900 rounded-xl h-12 mb-8 font-bold">
 Activate Job
 </Button>
 <ul className="space-y-4">
 {["Live on Talent Marketplace","Automated Matching","Dashboard Application Tracking","30-Day Visibility","Email Notifications"].map((feature) => (
 <li key={feature} className="flex items-center gap-3 text-sm text-gray-500">
 <Check className="w-4 h-4 text-[#f2c060] shrink-0"/> {feature}
 </li>
 ))}
 </ul>
 </FadeInStaggerItem>

 {/* Featured Upgrade */}
 <FadeInStaggerItem className="bg-white rounded-3xl p-8 border border-gray-100 relative">
 <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
 <Star className="w-6 h-6 text-[#222364]"/>
 </div>
 <h3 className="text-xl font-black text-gray-900 mb-2">Featured Upgrade</h3>
 <p className="text-sm text-gray-500 mb-6 h-10">
 Maximize visibility for urgent or highly competitive roles.
 </p>
 <div className="flex items-end gap-1 mb-8">
 <span className="text-4xl font-black text-gray-900">₦75,000</span>
 <span className="text-gray-500 text-sm mb-1">/additional</span>
 </div>
 <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-xl h-12 mb-8 font-semibold">
 Upgrade Listing
 </Button>
 <ul className="space-y-4">
 {["Top Placement in Search","Highlighted Featured Badge","Email Promotion Inclusion","Priority Match Alerts","Homepage Rotation"].map((feature) => (
 <li key={feature} className="flex items-center gap-3 text-sm text-gray-600">
 <Check className="w-4 h-4 text-[#222364] shrink-0"/> {feature}
 </li>
 ))}
 </ul>
 </FadeInStaggerItem>
 </StaggerContainer>
 </section>

 {/* 2. Managed OaaS Subscriptions */}
 <section className="max-w-7xl mx-auto px-4 lg:px-8 mb-24">
 <FadeIn className="bg-gray-50 rounded-[2rem] p-8 md:p-16 border border-gray-200">
 <div className="text-center mb-12">
 <h2 className="text-3xl font-black text-gray-900 mb-4">Managed OaaS Subscriptions</h2>
 <p className="text-gray-500 max-w-2xl mx-auto">
 Comprehensive operational support for managing remote teams, compliance, and payroll. Billed per company, per month.
 </p>
 </div>
 
 <div className="grid md:grid-cols-3 gap-8">
 <div className="bg-white p-8 rounded-3xl border border-gray-100 text-center transition-all duration-300">
 <h4 className="text-xl font-black text-gray-900 mb-2">Silver</h4>
 <div className="text-4xl font-black text-[#222364] mb-6">$99<span className="text-lg text-gray-400 font-normal">/mo</span></div>
 <p className="text-sm text-gray-500 mb-6">Essential management tools for growing teams.</p>
 <Button variant="outline"className="w-full rounded-xl h-11 mb-6 border-gray-200">Select Silver</Button>
 </div>
 <div className="bg-white p-8 rounded-3xl border-2 border-[#222364] text-center relative transition-all duration-300">
 <div className="absolute top-0 inset-x-0 transform -translate-y-1/2 flex justify-center">
 <span className="bg-[#222364] text-white text-xs font-bold px-3 py-1 rounded-full">Recommended</span>
 </div>
 <h4 className="text-xl font-black text-gray-900 mb-2">Gold</h4>
 <div className="text-4xl font-black text-[#222364] mb-6">$149<span className="text-lg text-gray-400 font-normal">/mo</span></div>
 <p className="text-sm text-gray-500 mb-6">Advanced recruitment and compliance SaaS tools.</p>
 <Button className="w-full bg-[#222364] hover:bg-[#1a1a4b] text-white rounded-xl h-11 mb-6">Select Gold</Button>
 </div>
 <div className="bg-white p-8 rounded-3xl border border-gray-100 text-center transition-all duration-300">
 <h4 className="text-xl font-black text-gray-900 mb-2">Platinum</h4>
 <div className="text-4xl font-black text-[#222364] mb-6">$199<span className="text-lg text-gray-400 font-normal">/mo</span></div>
 <p className="text-sm text-gray-500 mb-6">Enterprise-grade support, analytics & VIP SLAs.</p>
 <Button variant="outline"className="w-full rounded-xl h-11 mb-6 border-gray-200">Select Platinum</Button>
 </div>
 </div>
 
 <div className="mt-12 pt-8 border-t border-gray-200 text-center">
 <p className="text-gray-600 font-medium">
 <span className="text-[#222364] font-bold">Also Available:</span> Fixed Management Fee (e.g., ₦150,000/staff/month) and Mark-Up Margin Models for custom enterprise deployments.
 </p>
 </div>
 </FadeIn>
 </section>

 {/* 3. On-Demand Recruiter Rental & Other Services */}
 <section className="max-w-7xl mx-auto px-4 lg:px-8 mb-24 grid md:grid-cols-2 gap-12">
 
 {/* Recruiter Rental */}
 <div>
 <div className="flex items-center gap-4 mb-8">
 <div className="w-12 h-12 bg-gray-100 text-[#222364] rounded-xl flex items-center justify-center">
 <Search className="w-6 h-6"/>
 </div>
 <div>
 <h3 className="text-2xl font-black text-gray-900">On-Demand Recruiter Rental</h3>
 <p className="text-gray-500 text-sm">Hire a professional recruiter temporarily.</p>
 </div>
 </div>
 <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden">
 <div className="divide-y divide-gray-100">
 {[
 { level:"Junior Recruiter", rate:"₦10,000/hr"},
 { level:"Mid-Level Recruiter", rate:"₦20,000/hr"},
 { level:"Senior Recruiter", rate:"₦35,000/hr"},
 { level:"Executive Search Specialist", rate:"₦60,000/hr"},
 ].map((tier) => (
 <div key={tier.level} className="p-6 flex items-center justify-between hover:bg-gray-50 transition">
 <span className="font-semibold text-gray-900">{tier.level}</span>
 <span className="font-bold text-[#222364]">{tier.rate}</span>
 </div>
 ))}
 </div>
 <div className="bg-gray-50 p-6 border-t border-gray-100 text-sm text-gray-500">
 *Project-based pricing available upon request. Subject to minimum billable hours.
 </div>
 </div>
 </div>

 {/* Software & Ancillary Services */}
 <div className="space-y-8">
 <div className="bg-white border border-gray-200 rounded-3xl p-8">
 <div className="flex items-center gap-3 mb-6">
 <Users className="w-6 h-6 text-[#222364]"/>
 <h3 className="text-xl font-black text-gray-900">Lead Generation SaaS</h3>
 </div>
 <div className="space-y-4">
 <div className="flex flex-col md:flex-row justify-between items-center pb-4 border-b border-gray-100">
 <span className="text-gray-600">Silver Tier</span>
 <span className="font-bold text-gray-900">₦150,000/month</span>
 </div>
 <div className="flex flex-col md:flex-row justify-between items-center">
 <span className="text-gray-600">Gold Tier</span>
 <span className="font-bold text-gray-900">₦300,000/month</span>
 </div>
 </div>
 </div>

 <div className="bg-white border border-gray-200 rounded-3xl p-8">
 <div className="flex items-center gap-3 mb-6">
 <Clock className="w-6 h-6 text-[#222364]"/>
 <h3 className="text-xl font-black text-gray-900">Sponsored Job Placements</h3>
 </div>
 <div className="space-y-4">
 <div className="flex flex-col md:flex-row justify-between items-center pb-4 border-b border-gray-100">
 <span className="text-gray-600">7-Day Boost</span>
 <span className="font-bold text-gray-900">₦50,000</span>
 </div>
 <div className="flex flex-col md:flex-row justify-between items-center">
 <span className="text-gray-600">30-Day Boost</span>
 <span className="font-bold text-gray-900">₦150,000</span>
 </div>
 </div>
 </div>
 </div>

 </section>

 {/* Note on Tax & Wallet */}
 <section className="max-w-4xl mx-auto px-4 lg:px-8 mb-24">
 <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center">
 <p className="text-sm text-[#222364] font-medium leading-relaxed">
 <strong>Financial Compliance:</strong> All transactions are executed via our wallet-first architecture. VAT (7.5%) applies to applicable service components. WHT applies to B2B corporate payments. No hidden fees.
 </p>
 </div>
 </section>

 {/* Bottom CTA */}
 <FadeIn>
 <ReadyToTransformCTA 
 title="Ready to Scale Your Workforce?"
 subtitle="Fund your wallet and activate your chosen services instantly."
 buttonText="Create Employer Account"
 buttonLink="/register"
 />
 </FadeIn>

 </main>
 <Footer />
 </div>
 );
}
