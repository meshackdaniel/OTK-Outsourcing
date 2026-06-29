"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function SolutionsIndustryScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Solutions fades out from 40% to 50%
  const solutionsOpacity = useTransform(scrollYProgress, [0.3, 0.5], [1, 0]);
  const solutionsY = useTransform(scrollYProgress, [0.3, 0.5], [0, -50]);
  
  // Industry fades in from 50% to 70%
  const industryOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);
  const industryY = useTransform(scrollYProgress, [0.5, 0.7], [50, 0]);

  // Using z-index instead of pointerEvents mapping to avoid TS issues
  const solutionsZIndex = useTransform(scrollYProgress, (v) => v < 0.5 ? 20 : 0);
  const industryZIndex = useTransform(scrollYProgress, (v) => v >= 0.5 ? 20 : 0);

  return (
    <div ref={containerRef} className="relative h-[250vh]">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden bg-white border-t border-gray-100">
        
        {/* Solutions Section */}
        <motion.div 
          style={{ opacity: solutionsOpacity, y: solutionsY, zIndex: solutionsZIndex }}
          className="absolute inset-0 flex flex-col justify-center bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
                Targeted Outsourcing Solutions
              </h2>
              <p className="text-gray-600 max-w-2xl text-lg">
                Flexible engagement models designed to meet your specific business needs and scale with your growth.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  title: "Direct Placement",
                  desc: "Permanent hiring for core team roles. We find, vet, and place top-tier talent directly into your organization.",
                  link: "/services/direct-placement"
                },
                {
                  title: "Contract & Freelance",
                  desc: "Flexible talent for project-based roles. Scale your workforce up or down based on seasonal demands.",
                  link: "/services/contract"
                },
                {
                  title: "Dedicated Teams",
                  desc: "Fully managed, outsourced remote departments. Complete operational pods built specifically for your goals.",
                  link: "/services/dedicated-teams"
                },
              ].map((s) => (
                <div key={s.title} className="group border-t border-gray-200 pt-6">
                  <h3 className="font-black text-gray-900 text-xl mb-3">{s.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-6">{s.desc}</p>
                  <Link href={s.link} className="inline-flex items-center text-[#222364] font-medium group-hover:text-[#222364] transition-colors">
                    Learn more <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Industry Expertise Section */}
        <motion.div 
          style={{ opacity: industryOpacity, y: industryY, zIndex: industryZIndex }}
          className="absolute inset-0 flex flex-col justify-center bg-[#f9fafb]"
        >
          <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full">
            <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
                  Industry Expertise
                </h2>
                <p className="text-gray-600 max-w-xl text-lg">
                  We provide specialized, pre-vetted talent across key operational sectors.
                </p>
              </div>
              <Link href="/contact" className="inline-flex items-center justify-center bg-white border border-gray-200 text-gray-900 hover:bg-gray-50 font-medium rounded-lg h-12 px-6 transition-colors shrink-0">
                Contact for custom solutions
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
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
                <div key={s.title}>
                  <h3 className="font-black text-gray-900 text-xl mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm mb-6">{s.desc}</p>
                  <ul className="space-y-3">
                    {s.roles.map((role) => (
                      <li key={role} className="flex items-center text-base text-gray-800 bg-white border border-gray-100 rounded-lg p-3">
                        <CheckCircle2 className="w-5 h-5 text-[#222364] mr-3 shrink-0" />
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
