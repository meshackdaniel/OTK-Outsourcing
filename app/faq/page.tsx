import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ReadyToTransformCTA } from "@/components/layout/ReadyToTransformCTA";

export default function FAQPage() {
  const employeeFaqs = [
    {
      q: "What exactly is Outsourcing-as-a-Service (OaaS)?",
      a: "OaaS is our end-to-end workforce operating system. Instead of merely matching you with a resume, we manage the entire lifecycle of your staff—including verified recruitment, background mapping, deployment, contract administration, and performance tracking via integrated daily work logs."
    },
    {
      q: "How does the 'Wallet-First' system protect my business?",
      a: "Our infrastructure runs on secure, pre-funded wallet architecture. By funding your unified corporate wallet via bank transfer or direct payment gateways, you secure the necessary capital for upcoming payroll or milestones. Funds are safely held and only split and disbursed after work logs are validated, ensuring zero upfront payout risks."
    },
    {
      q: "Can I post jobs on the platform for free?",
      a: "Yes. Our hybrid marketplace model allows you to create and post unlimited job listings in draft mode entirely for free. You only authorize a payment when you decide to activate the job or upgrade it to a high-visibility featured slot to accelerate your hiring pipeline."
    },
    {
      q: "How do you handle local statutory taxes like PAYE, WHT, and VAT?",
      a: "Our automated billing system features 'Compliance by Design'. When payroll or service fees are calculated, the platform automatically isolates and calculates statutory tax deductions—including local PAYE for talents, corporate withholding tax (WHT), and value-added tax (VAT)—keeping your business fully audit-ready."
    },
    {
      q: "What categories of workers can I hire through the platform?",
      a: "We support a diverse, multi-tiered talent base spanning skilled, semi-skilled, and unskilled job roles across multiple industries, including technology, logistics, client operations, and administration."
    }
  ];

  const talentFaqs = [
    {
      q: "How do I join the OTK talent database?",
      a: "Getting started is simple. Create a candidate account, complete your digital profile, and upload your CV along with your baseline professional certifications. This places you in our initial pre-employment candidate pool."
    },
    {
      q: "What does your talent screening process look like?",
      a: "To maintain an elite tier of personnel for global projects, we enforce a strict multi-level vetting system. This includes identity authentication, educational credential verification, background checks, and active reference follow-ups."
    },
    {
      q: "What happens if I fail the technical skill assessments?",
      a: "We believe in continuous upskilling. If you don't pass a specific technical entry assessment, you can access our built-in E-Learning and branded up module. Here, you can take course assignments, earn compliance, or engage in upskill to course to get re-certified for future algorithmic matches."
    },
    {
      q: "When does my digital Talent Wallet activate for withdrawals?",
      a: "Your wallet initializes as an inactive profile balance during registration. Once you pass vetting, accept a formal probationary or final digital employment contract, and verify your payout details, your status updates to active 'Personnel,' which fully unlocks your earning wallet for seamless bank withdrawals."
    },
    {
      q: "Why do I need to log daily work logs on my dashboard?",
      a: "Daily logs are the foundation of our secure payroll model. By tracking hours and inputting task data daily, your client supervisor can seamlessly review and sign off on your performance data, triggering automated end-of-cycle milestone payouts directly to your wallet."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-gray-900">
      <Navbar />

      <main>
        {/* 1. Typography-Led Hero Section */}
        <section className="pt-32 pb-24 px-4 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black text-[#222364] mb-8 leading-tight tracking-tight">
              Got Questions? <br />
              <span className="text-[#f2c060]">We Have Answers.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              Everything you need to know about our wallet-first infrastructure, rigorous talent screening protocols, and compliance frameworks.
            </p>
          </div>
        </section>

        {/* 2. For Employers Section (Z-Pattern Layout style) */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
              {/* Sticky Title Column */}
              <div className="lg:col-span-4 relative">
                <div className="sticky top-32">
                  <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
                    For Employers <br/> & Clients
                  </h2>
                  <div className="w-16 h-2 bg-[#f2c060] mt-6"></div>
                </div>
              </div>
              
              {/* FAQ List Column */}
              <div className="lg:col-span-8">
                <div className="divide-y divide-gray-200">
                  {employeeFaqs.map((faq, idx) => (
                    <div key={idx} className="py-10 first:pt-0">
                      <h3 className="text-2xl md:text-3xl font-bold text-[#222364] mb-4">
                        {faq.q}
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. For Talents Section (Z-Pattern Layout style) */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
              {/* Sticky Title Column */}
              <div className="lg:col-span-4 relative">
                <div className="sticky top-32">
                  <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
                    For Talents <br/> & Candidates
                  </h2>
                  <div className="w-16 h-2 bg-[#222364] mt-6"></div>
                </div>
              </div>
              
              {/* FAQ List Column */}
              <div className="lg:col-span-8">
                <div className="divide-y divide-gray-100">
                  {talentFaqs.map((faq, idx) => (
                    <div key={idx} className="py-10 first:pt-0">
                      <h3 className="text-2xl md:text-3xl font-bold text-[#f2c060] mb-4">
                        {faq.q}
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <ReadyToTransformCTA 
          title="Still have questions?"
          subtitle="Reach out to our support team and we will get back to you immediately."
          buttonText="Contact Support"
          buttonLink="/contact"
        />
      </main>
      
      <Footer />
    </div>
  );
}
