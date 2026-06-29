import { FadeIn, StaggerContainer, FadeInStaggerItem } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function TechnologySolutionsSection() {
 return (
 <section className="py-20 bg-white">
 <div className="max-w-7xl mx-auto px-4 lg:px-8">
 <div className="text-center mb-16">
 <FadeIn>
 <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
 Technology & Software Solutions
 </h2>
 <p className="text-gray-600 max-w-2xl mx-auto text-lg">
 Beyond hiring, we provide powerful digital solutions to supercharge your career or scale your business operations.
 </p>
 </FadeIn>
 </div>

 <StaggerContainer className="grid md:grid-cols-3 gap-8">
 {[
 {
 image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&auto=format&fit=crop&q=60",
 title: "Resume Writing & Optimization",
 desc: "Stand out to top employers. Get expert-crafted resumes designed to pass ATS systems and highlight your best skills.",
 link: "/talent/resume-services"
 },
 {
 image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=60",
 title: "Skill Assessments & Certifications",
 desc: "Prove your expertise. Take industry-recognized tests to boost your profile and match with premium opportunities.",
 link: "/talent/assessments"
 },
 {
 image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60",
 title: "Lead Generation Services",
 desc: "For businesses looking to grow. Get highly qualified B2B leads delivered directly to your pipeline every month.",
 link: "/employer/lead-generation"
 }
 ].map((service, idx) => (
 <FadeInStaggerItem key={idx} className="bg-gray-50 hover:bg-gray-100 transition-colors duration-300 rounded-[2.5rem] p-6 border border-gray-100 flex flex-col h-full group overflow-hidden">
 <div className="w-full h-48 bg-gray-200 rounded-[2rem] overflow-hidden mb-6 relative">
 <Image 
 src={service.image}
 alt={service.title}
 fill
 className="object-cover group-hover:scale-105 transition-transform duration-500"
 />
 </div>
 <h3 className="font-black text-gray-900 text-xl mb-3 px-2">{service.title}</h3>
 <p className="text-gray-600 text-base mb-8 flex-grow leading-relaxed px-2">{service.desc}</p>
 <div className="px-2">
 <Link href={service.link}>
 <span className="inline-flex items-center text-[#222364] font-semibold hover:text-[#222364] transition-colors">
 Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
 </span>
 </Link>
 </div>
 </FadeInStaggerItem>
 ))}
 </StaggerContainer>
 </div>
 </section>
 );
}
