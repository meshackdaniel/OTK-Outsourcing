// app/page.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import {
  Menu,
  BadgeCheck,
  BrainCircuit,
  Users,
  DollarSign,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Mail,
} from "lucide-react";
import NextJob from "@/components/layout/NextJob";
import EarlyAdopters from "@/components/layout/testimonial/EarlyAdopters";
import { Navbar } from "@/components/layout/Navbar";
import PartnersMarquee from "@/components/layout/PartnersMarquee";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-5">
      <Navbar />
      <main>
        {/* Hero */}
        <NextJob imageUrl="/fine-girl.png" />

        {/* Stats */}
        <section className="bg-white my-10">
          <div className=" mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mx-auto">
              {[
                { num: "500 +", label: "Active Employers" },
                { num: "15,526", label: "Posted Jobs" },
                { num: "200 +", label: "Hiring Companies" },
                { num: "2000 +", label: "Skilled Talents and Workers" },
              ].map((s) => (
                <div key={s.label} className="bg-gray-100 py-5 px-4 rounded-xl">
                  <div className="text-xl lg:text-2xl font-black text-primary">
                    {s.num}
                  </div>
                  <p className="text-gray-600 mt-2 font-semibold">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Logos */}
        <PartnersMarquee />

        {/* Worker Features */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              A Game Changer For Finding Real Work
            </h2>
            <p className="text-gray-600 mb-12">
              We're helping thousands of workers like you find reliable jobs,
              fair pay.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  icon: <BadgeCheck className="w-6 h-6" />,
                  title: "Verified Jobs",
                },
                {
                  icon: <BrainCircuit className="w-6 h-6" />,
                  title: "Smart Matching",
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "For Every Skill Level",
                },
                {
                  icon: <DollarSign className="w-6 h-6" />,
                  title: "Transparent Pay",
                },
              ].map((f) => (
                <Card
                  key={f.title}
                  className="p-6 text-left flex items-start gap-4 hover:shadow-lg transition"
                >
                  <div className="p-3 bg-gray-100 rounded-lg">{f.icon}</div>
                  <h3 className="font-semibold text-lg">{f.title}</h3>
                </Card>
              ))}
            </div>
            <Button size="lg">Hire Talents</Button>
          </div>
        </section>

        {/* Employer Features (repeated pattern) */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              For Recruiters and Employers
            </h2>
            <p className="text-gray-600 mb-12">
              We're helping thousands of workers like you find reliable jobs,
              fair pay.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {/* Same cards as above */}
            </div>
            <Button size="lg">Hire Talents</Button>
          </div>
        </section>

        {/* Recently Posted Jobs Placeholder */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Recently Posted Jobs
            </h2>
            <p className="text-gray-600 mb-12">
              We're helping thousands of workers like you find reliable jobs,
              fair pay.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="p-8">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-40 mb-4" />
                  <h3 className="font-semibold">Job Title {i}</h3>
                  <p className="text-gray-600">Company • Location</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <EarlyAdopters />

        {/* CTA */}
        <NextJob imageUrl="/fine-girl.png" />
        <Footer />
      </main>
    </div>
  );
}
