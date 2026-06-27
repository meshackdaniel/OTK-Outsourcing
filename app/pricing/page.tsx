import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ReadyToTransformCTA } from "@/components/layout/ReadyToTransformCTA";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import PartnersMarquee from "@/components/layout/PartnersMarquee";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      <Navbar />

      <main>
        {/* Header */}
        <section className="pt-24 pb-16 px-4 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-[#222364] mb-6">
            Flexible Plans Built to Scale Your Business
          </h1>
          <p className="text-gray-500 text-lg md:text-xl">
            No hidden fees, no complex contracts. Choose the outsourcing model that fits your operational goals and adjust your team size as your business evolves.
          </p>
        </section>

        {/* Pricing Cards */}
        <section className="max-w-7xl mx-auto px-4 lg:px-8 mb-16">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            
            {/* Dedicated Support (Left) */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dedicated Support</h3>
              <p className="text-sm text-gray-500 mb-8 h-10">
                Best for teams that need dedicated HR or Administrative help, every step of the way.
              </p>
              <Button className="w-full bg-[#222364] hover:bg-[#1a1a4b] text-white rounded-xl h-12 mb-8 font-semibold">
                Contact Sales Team
              </Button>
              <p className="text-sm font-bold text-gray-900 mb-4">What you get:</p>
              <ul className="space-y-4">
                {["Task Management", "Performance Tracking", "24/7 Dedicated Support", "Dedicated Account Manager"].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-[#222364] shrink-0" /> {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Business (Middle) */}
            <div className="bg-white rounded-3xl border border-[#f2c060] shadow-md relative overflow-hidden transform lg:-translate-y-4">
              <div className="bg-[#f2c060] text-center py-2 text-sm font-bold text-gray-900">
                Most Popular 🌟
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Business</h3>
                <p className="text-sm text-gray-500 mb-6">Best for growing teams</p>
                <div className="flex items-end gap-1 mb-8">
                  <span className="text-4xl font-black text-gray-900">₦1600</span>
                  <span className="text-gray-500 text-sm mb-1">/month</span>
                </div>
                <Button className="w-full bg-[#222364] hover:bg-[#1a1a4b] text-white rounded-xl h-12 mb-8 font-semibold">
                  Get started
                </Button>
                <p className="text-sm font-bold text-gray-900 mb-4">All starter features, plus:</p>
                <ul className="space-y-4">
                  {["Customizable Workflows", "Reporting and Analytics", "Document Management", "Up to 50 Gb of storage space", "Email Tracking"].map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-[#222364] shrink-0" /> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Basic (Right) */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Basic</h3>
              <p className="text-sm text-gray-500 mb-6">Best for starters and solo</p>
              <div className="flex items-end gap-1 mb-8">
                <span className="text-4xl font-black text-gray-900">₦600</span>
                <span className="text-gray-500 text-sm mb-1">/month</span>
              </div>
              <Button className="w-full bg-[#222364] hover:bg-[#1a1a4b] text-white rounded-xl h-12 mb-8 font-semibold">
                Get started
              </Button>
              <p className="text-sm font-bold text-gray-900 mb-4">What you get:</p>
              <ul className="space-y-4">
                {["Task Management", "Project Planning", "Up to 10 Workspace", "Collaborative Whiteboards", "Email Support"].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-[#222364] shrink-0" /> {feature}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>

        {/* Included in every plan */}
        <section className="max-w-7xl mx-auto px-4 lg:px-8 mb-24">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/3">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Included in every plan</h3>
              <p className="text-sm text-gray-500">Every plan comes with these core features to help you start getting to work fast.</p>
            </div>
            <div className="md:w-1/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Free Onboarding", "Project Planning", "Dedicated Support", "Collaborative Workspace"].map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm text-gray-700 font-semibold">
                  <Check className="w-4 h-4 text-[#222364]" /> {feature}
                </div>
              ))}
            </div>
            <div className="md:w-1/3 flex justify-end">
              <Button className="bg-[#f2c060] hover:bg-[#dcae53] text-gray-900 font-bold rounded-xl h-12 px-8 w-full md:w-auto">
                Get started
              </Button>
            </div>
          </div>
        </section>

        {/* Stats & Logos */}
        <section className="max-w-7xl mx-auto px-4 lg:px-8 mb-24">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
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
            <PartnersMarquee />
        </section>

        {/* Frequently Asked Questions */}
        <section className="max-w-4xl mx-auto px-4 lg:px-8 mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-center text-[#222364] mb-12">
            Frequently Asked Questions
          </h2>
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 space-y-8">
            {[
              {
                q: "Are there any setup fees or hidden recruitment charges?",
                a: "No. Our pricing model is entirely transparent. You pay your fixed monthly retainer or customized quote fee. There are zero hidden search fees, contract placement fees, or backend talent onboarding charges."
              },
              {
                q: "What happens if a talent isn't working out for my team?",
                a: "We offer an absolute match guarantee. If a professional doesn't meet your operational expectations within the first 30 days, we will transition them out and secure a vetted replacement immediately at no additional cost to your company."
              },
              {
                q: "How quickly can my new outsourced professional start working?",
                a: "For standard roles like virtual assistants or customer support, we can typically match and onboard your talent within 5 to 7 business days. For highly specialized technical roles, it typically takes 10 to 14 days to complete final matching."
              },
              {
                q: "Can I scale my team up or down based on seasonal demands?",
                a: "Absolutely. OTK is built for operational flexibility. You can add more talent during your peak business cycles or scale back your team size with a simple 30-day notice."
              }
            ].map((faq, idx) => (
              <div key={idx}>
                <h4 className="font-semibold text-gray-900 mb-2">{faq.q}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <ReadyToTransformCTA />

      </main>
      <Footer />
    </div>
  );
}
