import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ReadyToTransformCTA } from "@/components/layout/ReadyToTransformCTA";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HowItWorksPage() {
  const timelineSteps = [
    {
      title: "Account Creation & Profile Setup",
      desc: "For talents, simply upload your resume & credentials. Clients can register their business profiles to specify their hiring metrics and expected timeline. It takes under 3 minutes to get verified.",
      actionText: "Join Now",
      imageAlign: "right"
    },
    {
      title: "Screening & Verification",
      desc: "Our admin team evaluates every talent application. We cross-verify educational credentials, reference networks, and work history to ensure high professional competency standards.",
      actionText: "View Policies",
      imageAlign: "left"
    },
    {
      title: "Skill Assessment & up-skilling",
      desc: "Talents expected to take standard skills measurements under our E-Learning modules. If a talent falls short in an assessment, they gain access to structured tutorials to quickly boost compliance to match client roles.",
      actionText: "View Courses",
      imageAlign: "right"
    },
    {
      title: "Automated Matching & Interviewing",
      desc: "Our predictive algorithm connects vetted talents with the active job vacancies matching their technical skills. Clients receive shortlists to run virtual assessments directly from their dashboards.",
      actionText: "Find Talent",
      imageAlign: "left"
    },
    {
      title: "Offer Acceptance & Account Activation",
      desc: "Client initiates formal offers detailing payout rates and probation metrics. Upon talent acceptance, both parties are securely contracted. The talent's earning wallet unlocks completely.",
      actionText: "View Wallet",
      imageAlign: "right"
    },
    {
      title: "Site deployment & daily log tagging",
      desc: "Deployed talent begin capturing work histories via the Time Tracking tool. Supervisors validate daily timesheets which triggers automated split-payment distribution into the respective earning wallets.",
      actionText: "Start Tracking",
      imageAlign: "left"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      <Navbar />

      <main>
        {/* Header */}
        <section className="pt-24 pb-16 px-4 max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-[#222364] mb-6">
            How It Works?
          </h1>
          <p className="text-gray-500 text-lg md:text-xl mb-8">
            We have outlined the standard process to give you a clear view of how OTK recruits, onboards, and manages talent.
          </p>
          <Button className="bg-[#222364] hover:bg-[#1a1a4b] text-white px-8 h-12 rounded-xl font-semibold">
            Get started
          </Button>
        </section>

        {/* Stats Row */}
        <section className="max-w-4xl mx-auto px-4 lg:px-8 mb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {[
                { num: "500 +", label: "Active Employers" },
                { num: "15,526", label: "Posted Jobs" },
                { num: "200 +", label: "Hiring Companies" },
                { num: "2000 +", label: "Skilled Talents and Workers" },
              ].map((s) => (
                <div key={s.label} className="bg-gray-50 py-4 px-4 rounded-xl text-center">
                  <div className="text-lg font-black text-gray-900">{s.num}</div>
                  <p className="text-gray-500 font-medium text-xs">{s.label}</p>
                </div>
              ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="max-w-5xl mx-auto px-4 lg:px-8 mb-24 relative">
          
          <div className="space-y-24">
            {timelineSteps.map((step, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row items-center gap-12 ${step.imageAlign === 'left' ? 'md:flex-row-reverse' : ''}`}>
                
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-500 mb-8 leading-relaxed">
                    {step.desc}
                  </p>
                  <Button className="bg-[#222364] hover:bg-[#1a1a4b] text-white px-8 h-11 rounded-xl font-semibold">
                    {step.actionText}
                  </Button>
                </div>

                <div className="md:w-1/2">
                  <div className="w-full aspect-[4/3] bg-gray-200 rounded-3xl overflow-hidden relative">
                    {/* Placeholder for images */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      Step {idx + 1} Image
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </section>

        {/* Bottom Stats / Circular diagram alternative */}
        <section className="max-w-5xl mx-auto px-4 lg:px-8 mb-24">
          <div className="grid md:grid-cols-3 gap-8 items-center text-sm text-gray-600">
            <div className="space-y-12">
              <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-purple-500">
                <h4 className="font-bold text-gray-900 mb-2">PERFORMANCE-BASED MILESTONES</h4>
                <p>Track your work, hit your goals, and unlock your payments based on agreed deliverables.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-pink-500">
                <h4 className="font-bold text-gray-900 mb-2">TRANSPARENT PAY DEDUCTIONS</h4>
                <p>Tax and statutory deductions are automatically managed. You see exactly what you earn.</p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="w-48 h-48 rounded-full bg-[#F5F2EC] flex items-center justify-center shadow-inner">
                {/* Decorative center piece */}
              </div>
            </div>

            <div className="space-y-12">
              <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-blue-500">
                <h4 className="font-bold text-gray-900 mb-2">EARN YOUR EMPLOYER BADGE</h4>
                <p>Maintain high ratings and compliance to earn premium badges and unlock better opportunities.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <ReadyToTransformCTA 
          title="Your Next Job is Just Few Clicks Away."
          subtitle="Find flexible, rewarding work that matches your schedule and skills. Join our community today."
          buttonText="Find Work"
          buttonLink="/talent/jobs"
          imageUrl="/images/hero-girl.png"
        />

      </main>
      <Footer />
    </div>
  );
}
