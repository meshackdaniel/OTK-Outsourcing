import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ReadyToTransformCTA } from "@/components/layout/ReadyToTransformCTA";
import { Globe2, Users, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const values = [
    {
      icon: <Globe2 className="w-8 h-8 text-[#222364]" />,
      title: "Global First",
      description: "We believe talent is evenly distributed, even if opportunity is not. We're building the infrastructure to bridge that gap."
    },
    {
      icon: <Users className="w-8 h-8 text-[#f2c060]" />,
      title: "People Centric",
      description: "From comprehensive HMOs to reliable payouts, we put the well-being and growth of our talents at the forefront."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-emerald-600" />,
      title: "Absolute Compliance",
      description: "We navigate the complex web of global taxes, legalities, and compliance so that our clients never have to worry about it."
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Relentless Execution",
      description: "We move fast. We build, ship, and iterate rapidly to provide the best tools for modern workforce management."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-gray-900">
      <Navbar />
      <main>
        
        {/* 1. Hero Section */}
        <section className="pt-20 pb-16 px-4 lg:px-8 max-w-5xl mx-auto text-center min-h-[50vh] flex flex-col items-center justify-center">
          <p className="text-[#f2c060] font-bold tracking-widest uppercase mb-4 text-sm">Our Mission</p>
          <h1 className="text-5xl md:text-7xl font-black text-[#222364] mb-8 leading-tight tracking-tight">
            Building the operating system for the <span className="text-[#f2c060]">global workforce.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            OTK Outsourcing was born out of a simple realization: hiring globally is too hard, too risky, and too fragmented. We're here to change that.
          </p>
        </section>

        {/* 2. Our Story / Image Section */}
        <section className="py-24 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 w-full">
                <div className="aspect-square rounded-[2.5rem] overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200&h=1200"
                    alt="Our team"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#222364]/10 mix-blend-multiply"></div>
                </div>
              </div>
              
              <div className="flex-1 space-y-8">
                <h2 className="text-4xl md:text-5xl font-black text-[#222364] leading-tight">
                  The future of work is borderless.
                </h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    A few years ago, building a remote team meant juggling multiple platforms: a job board to find candidates, an HR agency to vet them, a legal firm to draft compliant contracts, and a sketchy remittance service to pay them.
                  </p>
                  <p>
                    <strong>That's why we built OTK.</strong> We consolidated the entire lifecycle of global hiring into a single, seamless platform.
                  </p>
                  <p>
                    Today, we power the remote operations of hundreds of companies worldwide, providing them with elite talent from emerging markets while handling 100% of the compliance, payroll, and HR complexities.
                  </p>
                </div>
              </div>
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
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-[#222364]">Our Core Values</h2>
              <p className="text-lg text-gray-500 mt-6 max-w-2xl mx-auto">
                These are the principles that guide our product decisions, our hiring, and the way we interact with our clients and talents every single day.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((val, idx) => (
                <div key={idx} className="bg-white p-10 rounded-[2rem] border-2 border-gray-100 hover:border-[#f2c060] transition-colors">
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 border border-gray-100">
                    {val.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{val.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-lg">{val.description}</p>
                </div>
              ))}
            </div>
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
