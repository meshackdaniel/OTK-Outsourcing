import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ReadyToTransformCTA } from "@/components/layout/ReadyToTransformCTA";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, MapPin, Briefcase, TrendingUp } from "lucide-react";
import Link from "next/link";
import PartnersMarquee from "@/components/layout/PartnersMarquee";
import Image from "next/image";
import { FadeIn, StaggerContainer, FadeInStaggerItem } from "@/components/ui/fade-in";

export default function CareersPage() {
  const jobs = [
    {
      title: "UI/UX & Product Designer",
      type: "Full Time",
      description: "Product design encompasses both UI/UX design but it also involves a broader understanding of the entire product.",
      location: "On-site",
      salary: "₦1.5M - ₦2.5M"
    },
    {
      title: "Social Media Marketing",
      type: "Contract",
      description: "It involves creating and sharing content on social media networks to achieve marketing and branding goals.",
      location: "Remote",
      salary: "₦800K - ₦1.2M"
    },
    {
      title: "Web Developer",
      type: "Full Time",
      description: "Encompasses a rang of task including web design form and development back end development & server management.",
      location: "Remote",
      salary: "₦2.0M - ₦3.5M"
    },
    {
      title: "Graphic Designer",
      type: "Part Time",
      description: "Graphic designers combine art technology to the message through images & the layout of web screens & Printed.",
      location: "Hybrid",
      salary: "₦500K - ₦800K"
    },
    {
      title: "VP of Growth Marketing",
      type: "Full Time",
      description: "Marketing often works closely with other departments such as product development sales & analytics implement.",
      location: "On-site",
      salary: "₦4.0M - ₦6.0M"
    },
    {
      title: "Lead of Product Design",
      type: "Full Time",
      description: "Encompasses a rang of task including web design form and development back end development & server management.",
      location: "Remote",
      salary: "₦3.0M - ₦4.5M"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-gray-900">
      <Navbar />
      <main>
        
        {/* 1. Hero Section */}
        <section className="pt-24 pb-16 px-4 lg:px-8 max-w-7xl mx-auto text-center min-h-[60vh] flex flex-col items-center justify-center">
          <FadeIn>
            <h1 className="text-5xl md:text-8xl font-black text-[#222364] mb-8 leading-tight tracking-tight">
              Build the future of <br />
              <span className="text-[#f2c060]">global workforce.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
              Join a mission-driven team powering the infrastructure for recruitment, deployment, and payroll across emerging markets.
            </p>
          </FadeIn>
          <FadeIn delay={0.2} className="mt-12">
            <a href="#open-positions">
              <Button className="h-14 px-8 bg-[#222364] hover:bg-[#1a1a4b] text-white rounded-xl font-bold text-lg">
                View Open Roles
              </Button>
            </a>
          </FadeIn>
        </section>

        {/* 2. Meet the Team Section */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <FadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight md:max-w-md">
                Meet the team work behind our success
              </h2>
              <p className="text-gray-500 max-w-sm text-sm md:text-base leading-relaxed">
                Our team consists of a group of talents. We solve customer problems with sincerity. All of our team members are very intelligent and skilled.
              </p>
            </FadeIn>

            {/* Large Team Image */}
            <FadeIn delay={0.2} className="w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden relative bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200&h=600" 
                alt="Team working together"
                className="w-full h-full object-cover"
              />
            </FadeIn>
          </div>
        </section>

        {/* 3. Open Positions */}
        <section id="open-positions" className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <FadeIn className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                Currently open positions
              </h2>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-2 gap-6">
              {jobs.map((job, idx) => (
                <FadeInStaggerItem key={idx} className="border border-gray-100 rounded-3xl p-8 hover:border-[#f2c060] transition-colors duration-300 bg-white group cursor-pointer">
                  
                  {/* Top Row: Title & Arrow */}
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-black text-gray-900 mb-1 group-hover:text-[#222364] transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-gray-400 text-sm font-medium">{job.type}</p>
                    </div>
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#222364] transition-colors">
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed mt-6 mb-8 min-h-[60px]">
                    {job.description}
                  </p>

                  {/* Bottom Row: Location & Salary */}
                  <div className="flex items-center gap-6 text-sm font-semibold text-gray-700">
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-400" /> {job.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-gray-400" /> {job.salary}
                    </span>
                  </div>

                </FadeInStaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* 4. Partners Marquee */}
        <section className="py-20 bg-gray-50 text-center">
          <h3 className="text-gray-500 font-black mb-10 text-sm">
            Trusted by 1000+ of the world's most popular companies
          </h3>
          <PartnersMarquee />
        </section>

      </main>
      <Footer />
    </div>
  );
}
