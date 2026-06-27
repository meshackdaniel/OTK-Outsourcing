import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Building2 } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      <Navbar />

      <main>
        {/* Header */}
        <section className="pt-24 pb-12 px-4 max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-[#222364] mb-6">
            PRIVACY POLICY
          </h1>
          <p className="text-gray-500 text-lg md:text-xl mb-4">
            Your privacy and data security are fundamental to our workforce operating system. This policy details how we collect, safeguard, and process personal and corporate telemetry across our ecosystem.
          </p>
          <p className="text-sm text-gray-400 font-semibold">Effective Date: June 4, 2026</p>
        </section>

        {/* Content */}
        <section className="max-w-4xl mx-auto px-4 lg:px-8 pb-24">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm space-y-12">
            
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">1. Data Collection Framework</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                We collect information across our functional modules to ensure secure platform operations:
              </p>
              <ul className="list-disc list-outside ml-5 space-y-2 text-sm text-gray-600 leading-relaxed">
                <li><strong className="text-gray-900">For Clients & Business Owners:</strong> Company name, registered location, sector details, operational staffing criteria, and wallet transaction histories.</li>
                <li><strong className="text-gray-900">For Talents & Personnel:</strong> Legal name, contact data, curriculum vitae (CV), academic certificates, verified government identification records, performance work logs, and payout configurations.</li>
                <li><strong className="text-gray-900">For Content Creators & Affiliates:</strong> Professional background, promotional tracking telemetry, bank details, and unique referral identification strings.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">2. How We Use Your Information</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                Data gathered by our platform is processed exclusively for the following operational workflows:
              </p>
              <ul className="list-disc list-outside ml-5 space-y-2 text-sm text-gray-600 leading-relaxed">
                <li><strong className="text-gray-900">Automated Selection:</strong> Running our algorithmic matching engine to link certified talents with active client job descriptions based on skills, verified credentials, and location metrics.</li>
                <li><strong className="text-gray-900">Performance Telemetry:</strong> Monitoring and validating daily personnel work logs, productivity entries, and activity documentation to support client supervisor approval workflows.</li>
                <li><strong className="text-gray-900">Financial Processing:</strong> Automating earnings distributions, processing split payments between multiple wallets, managing external withdrawals, and generating accurate transactional balance sheets.</li>
                <li><strong className="text-gray-900">Targeted Content:</strong> Powering our admin-controlled marketing system to supply status-based notifications, e-learning track suggestions, and workflow updates tailored to your explicit profile tier.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">3. Verification & Third-Party Audits</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                To maintain a high-trust database for enterprise operations, candidate profile details undergo intensive verification steps. By registering, you explicitly authorize our platform to share specific credentials with accredited third-party screening providers to perform identity checks, professional reference verifications, and educational validation reviews. Deployed personnel data may also be visible to assigned client supervisors via secure, evaluative telemetry dashboards.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">4. "Compliance by Design" Financial Ledgering</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our wallet system incorporates automated tax and legal tracking mechanisms. Financial information related to your contract values or earnings will be parsed by system algorithms to calculate, record, and maintain audit-ready ledgers for state and federal regulatory frameworks, directly addressing local PAYE, value-added tax (VAT), and corporate withholding tax (WHT) obligations.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">5. Automated Fraud Prevention & Anti-Abuse Tracking</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                To protect our platform margins and prevent structural affiliate network abuse, our security systems monitor interaction data. We collect and analyze technical logs—including device fingerprinting metrics, unique IP tracking coordinates, and phone/email verification responses—to block self-referral schemes, duplicate profile formations, and unauthorized system access attempts.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">6. Information Security & Data Retention</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Your personal and corporate data behaves like escrow within our secure digital database parameters. We deploy rigorous remote hardware configurations, data encryption pipelines, and restricted access layers to shield sensitive records from unauthorized discovery. Data is retained only as long as necessary to fulfill active contract milestones, track financial transaction histories, or satisfy ongoing regulatory audit timelines.
              </p>
            </div>

          </div>
        </section>

        {/* Have Any Question? */}
        <section className="max-w-4xl mx-auto px-4 lg:px-8 pb-24">
          <div className="bg-[#F5F2EC] rounded-3xl p-10 md:p-16 text-center border border-gray-100">
            <div className="w-16 h-16 bg-[#222364] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-black text-gray-900 mb-4">
              Have Any Question?
            </h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto text-sm">
              For direct inquiries regarding data handling, technical tracking systems, or to submit an official request to access your platform account logs, please contact our privacy representative.
            </p>
            <Link href="/contact" className="text-[#222364] font-bold underline hover:text-[#1a1a4b]">
              Contact privacy representative →
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
