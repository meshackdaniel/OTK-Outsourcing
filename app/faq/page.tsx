import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Building2 } from "lucide-react";
import Link from "next/link";

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
    <div className="min-h-screen bg-[#FDFDFD]">
      <Navbar />

      <main>
        {/* Header */}
        <section className="pt-24 pb-16 px-4 max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-[#222364] mb-6 tracking-tight">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <p className="text-gray-500 text-lg md:text-xl">
            Find clear answers about our wallet-first infrastructure, rigorous talent screening protocols, and compliance frameworks.
          </p>
        </section>

        {/* Content */}
        <section className="max-w-4xl mx-auto px-4 lg:px-8 pb-24">
          
          {/* For Employees & Clients */}
          <div className="mb-16">
            <h2 className="text-xl font-bold text-gray-900 mb-6 uppercase tracking-wider">
              FOR EMPLOYEES & CLIENTS
            </h2>
            <div className="space-y-4">
              {employeeFaqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-3">{faq.q}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* For Talents & Candidates */}
          <div className="mb-16">
            <h2 className="text-xl font-bold text-gray-900 mb-6 uppercase tracking-wider">
              FOR TALENTS & CANDIDATES
            </h2>
            <div className="space-y-4">
              {talentFaqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-3">{faq.q}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Still Have Questions? */}
          <div className="bg-[#F5F2EC] rounded-3xl p-10 md:p-16 text-center max-w-3xl mx-auto border border-gray-100">
            <div className="w-16 h-16 bg-[#222364] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-black text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              Can't find the specific compliance or technical answer you are looking for? Our administrative team is here to assist you.
            </p>
            <Link href="/contact" className="text-[#222364] font-bold underline hover:text-[#1a1a4b]">
              Talk to an Outsourcing Expert →
            </Link>
          </div>

        </section>

      </main>
      <Footer />
    </div>
  );
}
