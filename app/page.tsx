import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/layout/Navbar";
import PartnersMarquee from "@/components/layout/PartnersMarquee";
import Footer from "@/components/layout/Footer";
import EarlyAdopters from "@/components/layout/testimonial/EarlyAdopters";
import { ReadyToTransformCTA } from "@/components/layout/ReadyToTransformCTA";
import { Search, MapPin, Briefcase, ChevronRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* Top Hero Section */}
        <ReadyToTransformCTA 
          title="Your Next Job is Just Few Clicks Away."
          subtitle="Find flexible, rewarding work that matches your schedule and skills. Join our community today."
          buttonText="Find Work"
          buttonLink="/talent/jobs"
          imageUrl="/images/hero-girl.png"
          className="pt-6 pb-8 max-w-7xl mx-auto"
        />

        {/* Stats */}
        <section className="py-6">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { num: "500 +", label: "Active Employers" },
                { num: "15,526", label: "Posted Jobs" },
                { num: "200 +", label: "Hiring Companies" },
                { num: "2000 +", label: "Skilled Talents and Workers" },
              ].map((s) => (
                <div key={s.label} className="bg-gray-50 py-6 px-4 rounded-xl flex flex-col items-center justify-center text-center">
                  <div className="text-xl lg:text-2xl font-black text-gray-900 mb-1">
                    {s.num}
                  </div>
                  <p className="text-gray-500 font-medium text-xs">{s.label}</p>
                </div>
              ))}
            </div>
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
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-3">
                A Game Changer For Finding Real Work
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto text-base">
                We're helping thousands of workers like you find reliable jobs, fair pay.
              </p>
            </div>
            
            <div className="space-y-8">
              {/* Row 1: For Job Seekers */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 bg-[#F5F2EC] rounded-3xl p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="font-black text-xl text-gray-900 mb-6">For Job Seekers</h3>
                    <div className="space-y-4 mb-8">
                      {["Verified Jobs", "Smart Matching", "Fair Pay"].map((item) => (
                        <div key={item} className="bg-white rounded-xl p-4 flex items-center justify-between">
                          <span className="font-bold text-gray-900 text-sm">{item}</span>
                          <div className="w-6 h-6 bg-gray-800 rounded-md flex items-center justify-center">
                            <ChevronRight className="w-4 h-4 text-white transform rotate-90" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full bg-[#222364] hover:bg-[#1a1a4b] text-white rounded-xl h-12 font-semibold">
                    Find Work
                  </Button>
                </div>
                <div className="md:w-2/3 bg-[#F5F2EC] rounded-3xl overflow-hidden relative min-h-[300px]">
                  <div className="absolute inset-4 bg-black rounded-2xl overflow-hidden flex items-center justify-center">
                    <img src="/placeholder-job-seekers.png" alt="Dashboard Preview" className="w-full h-full object-cover opacity-50" />
                    <span className="absolute text-white font-medium">Image Placeholder</span>
                  </div>
                </div>
              </div>

              {/* Row 2: For Recruiters and Employers */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 bg-[#F5F2EC] rounded-3xl p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="font-black text-xl text-gray-900 mb-6">For Recruiters and Employers</h3>
                    <div className="space-y-4 mb-8">
                      {["Quality Talents", "Smart Matching", "Workforce Management"].map((item) => (
                        <div key={item} className="bg-white rounded-xl p-4 flex items-center justify-between">
                          <span className="font-bold text-gray-900 text-sm">{item}</span>
                          <div className="w-6 h-6 bg-gray-800 rounded-md flex items-center justify-center">
                            <ChevronRight className="w-4 h-4 text-white transform rotate-90" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full bg-[#222364] hover:bg-[#1a1a4b] text-white rounded-xl h-12 font-semibold">
                    Find Talent
                  </Button>
                </div>
                <div className="md:w-2/3 bg-[#F5F2EC] rounded-3xl overflow-hidden relative min-h-[300px]">
                  <div className="absolute inset-4 bg-black rounded-2xl overflow-hidden flex items-center justify-center">
                    <img src="/placeholder-employers.png" alt="Dashboard Preview" className="w-full h-full object-cover opacity-50" />
                    <span className="absolute text-white font-medium">Image Placeholder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recently Posted Jobs */}
        <section className="py-20 bg-[#F5F2EC]">
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
                  title: "Senior Frontend Developer",
                  company: "Moniepoint",
                  employees: "10 - 50",
                  time: "2 hours ago",
                  desc: "We're looking for a Senior Frontend Developer who doesn't just write code, you craft experiences, obsess over pixels, and get a weird amount of joy from turning complex problems into clean, intuitive UI. If you're that kind of engineer ... we want you",
                  badges: [
                    { label: "₦250,000 - ₦300,000", color: "bg-green-500" },
                    { label: "Lagos - Nigeria", color: "bg-orange-500" },
                    { label: "Full Time", color: "bg-gray-500" },
                    { label: "On-site", color: "bg-blue-500" },
                    { label: "3-5 years experience", color: "bg-green-500" },
                    { label: "Skilled Workers", color: "bg-indigo-500" },
                  ],
                  clicks: "20 people clicked apply",
                  logoBg: "bg-blue-600"
                },
                {
                  title: "Pipeline Engineer",
                  company: "Shell",
                  employees: "900 - 1k",
                  time: "3 hours ago",
                  desc: "We're looking for a Pipeline Engineer with strong technical expertise, experience in pipeline design, maintenance, and field operations. If you thrive in high impact engineering environments and deliver with precision — we'd love to meet you.",
                  badges: [
                    { label: "₦1,250,000 - ₦1,300,000", color: "bg-green-500" },
                    { label: "Port Harcourt", color: "bg-orange-500" },
                    { label: "Full Time", color: "bg-gray-500" },
                    { label: "On-site", color: "bg-blue-500" },
                    { label: "3-5 years experience", color: "bg-green-500" },
                    { label: "Skilled Workers", color: "bg-indigo-500" },
                  ],
                  clicks: "67 people clicked apply",
                  logoBg: "bg-red-500"
                },
                {
                  title: "Project Manager",
                  company: "Globacom",
                  employees: "650 - 700",
                  time: "Yesterday",
                  desc: "GLO is looking for a Project Manager who can lead cross functional teams, manage timelines, and deliver complex telecom projects with clarity and confidence. If you take ownership, communicate well, and execute flawlessly. Apply if this role is fits you.",
                  badges: [
                    { label: "₦650,000 - ₦700,000", color: "bg-green-500" },
                    { label: "Lagos - Nigeria", color: "bg-orange-500" },
                    { label: "Full Time", color: "bg-gray-500" },
                    { label: "Hybrid", color: "bg-blue-500" },
                    { label: "3-5 years experience", color: "bg-green-500" },
                    { label: "Skilled Workers", color: "bg-indigo-500" },
                  ],
                  clicks: "20 people clicked apply",
                  logoBg: "bg-green-600"
                }
              ].map((job, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-6 md:p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white text-xl ${job.logoBg}`}>
                        {job.company[0]}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{job.title}</h3>
                        <div className="flex items-center gap-3 text-sm text-gray-500 mt-1">
                          <span className="font-semibold text-gray-900">{job.company}</span>
                          {job.employees && (
                            <span className="bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full text-xs font-semibold flex items-center gap-1.5">
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
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
            
            <div className="mt-10 flex justify-center">
              <Link href="/talent/jobs">
                <Button className="bg-[#222364] hover:bg-[#1a1a4b] text-white px-10 h-12 rounded-xl font-semibold text-sm">
                  View all Jobs
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Our Targeted Outsourcing Solutions */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#222364] mb-3">
                Our Targeted Outsourcing Solutions
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto text-base">
                Flexible engagement models designed to meet your specific business needs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Direct Placement",
                  desc: "Permanent hiring for core team roles. We find, vet, and place top-tier talent directly into your organization.",
                },
                {
                  title: "Contract & Freelance",
                  desc: "Flexible talent for project-based roles. Scale your workforce up or down based on seasonal demands.",
                },
                {
                  title: "Dedicated Teams",
                  desc: "Fully managed, outsourced remote departments. Complete operational pods built specifically for your goals.",
                },
              ].map((s) => (
                <div key={s.title} className="bg-white rounded-2xl p-8 border border-gray-100 text-center transition">
                  <h3 className="font-bold text-gray-900 text-xl mb-3">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{s.desc}</p>
                  <Button variant="outline" className="rounded-xl font-semibold border-gray-200 hover:bg-gray-50 h-10 text-sm px-6">
                    Learn more
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Expertise */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#222364] mb-3">
                Industry Expertise
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto text-base">
                We provide specialized talent across key operational sectors.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {[
                {
                  title: "Tech & Development",
                  desc: "UI/UX designers, developers, QA testers.",
                  roles: ["Frontend Developer", "Backend Engineer", "Product Designer", "QA Tester"]
                },
                {
                  title: "Customer Experience",
                  desc: "Support agents, Virtual assistants, account managers.",
                  roles: ["Customer Support", "Virtual Assistant", "Account Manager", "Sales Rep"]
                },
                {
                  title: "Operations & Finance",
                  desc: "Bookkeepers, data analyst, HR specialist.",
                  roles: ["Bookkeeper", "Data Analyst", "HR Manager", "Operations Exec"]
                },
              ].map((s) => (
                <div key={s.title} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                  <h3 className="font-bold text-gray-900 text-xl mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm mb-6">{s.desc}</p>
                  <ul className="space-y-3">
                    {s.roles.map((role) => (
                      <li key={role} className="flex items-center gap-2.5 text-sm font-semibold text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-[#222364]" />
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            {/* Banner */}
            <div className="bg-[#222364] rounded-xl p-6 flex flex-col md:flex-row items-center justify-between text-white gap-4">
              <div>
                <h4 className="font-bold text-lg mb-1">Don't see your industry listed?</h4>
                <p className="text-blue-200 text-sm">Our talent pool is vast. Contact us for custom recruitment solutions.</p>
              </div>
              <Link href="/contact">
                <Button className="bg-white text-[#222364] hover:bg-gray-100 font-bold rounded-lg h-10 px-6 text-sm">
                  Contact Us Today
                </Button>
              </Link>
            </div>
          </div>
        </section>


        {/* Testimonials */}
        <EarlyAdopters />

        {/* Bottom CTA */}
        <div className="max-w-7xl mx-auto px-4 lg:px-8 mb-8">
          <ReadyToTransformCTA 
            title="Ready to Transform Your Operations?"
            subtitle="Move operations weight off your shoulders. Scale your business, access global talent, and get started in just a few clicks."
            buttonText="Post Your Requirements"
            buttonLink="/employer/jobs/create"
            imageUrl="/images/cta-bottom.png"
            className="px-0 py-0"
          />
        </div>
        
      </main>
      <Footer />
    </div>
  );
}
