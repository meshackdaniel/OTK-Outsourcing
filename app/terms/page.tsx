import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Building2 } from "lucide-react";
import Link from "next/link";

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      <Navbar />

      <main>
        {/* Header */}
        <section className="pt-24 pb-12 px-4 max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-[#222364] mb-6">
            TERMS OF USE
          </h1>
          <p className="text-gray-500 text-lg md:text-xl mb-4">
            Please read these Terms of Use carefully before accessing or utilizing our workforce infrastructure platform, secure financial modules, or continuous software services.
          </p>
          <p className="text-sm text-gray-400 font-semibold">Effective Date: June 4, 2026</p>
        </section>

        {/* Content */}
        <section className="max-w-4xl mx-auto px-4 lg:px-8 pb-24">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm space-y-12">
            
            <h2 className="text-xl font-black text-gray-900 uppercase tracking-wider mb-6">FOR EMPLOYEES & CLIENTS</h2>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">1. Acceptance of Terms</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                By creating an account, running a payroll cycle, or deploying personnel through our digital platform, you explicitly form a binding legal agreement. This establishes a "Software as a Service" (SaaS) and "Infrastructure as a Service" (IaaS) agreement. You confirm that you possess the necessary organizational authority to execute these obligations.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">2. How does the 'Wallet-First' system protect my business?</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                The Wallet-First operational framework requires all verified clients to pre-fund their corporate dashboard wallets prior to triggering the active recruitment or active deployment milestones. Our system holds these allocated funds in a secure escrow protocol, disbursing payments incrementally only upon client-approved milestone completion.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">3. User Restrictions & Account Security</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                To guarantee operational integrity across the ecosystem, you agree strictly to the following parameters:
              </p>
              <ul className="list-disc list-outside ml-5 space-y-2 text-sm text-gray-600 leading-relaxed">
                <li><strong className="text-gray-900">Direct Employment Circumvention:</strong> You agree not to utilize our internal matching algorithms or candidate databases to solicit, hire, or directly employ talents outside of our billing ecosystem.</li>
                <li><strong className="text-gray-900">Third-Party Access:</strong> You are strictly forbidden from selling, licensing, renting, or transferring your corporate dashboard access to external, unverified third parties.</li>
                <li><strong className="text-gray-900">Security Notification:</strong> You agree to immediately notify our support team upon discovering any unauthorized platform access or security breaches connected to your active credentials.</li>
              </ul>
              <p className="text-sm text-gray-600 mt-4 leading-relaxed italic">
                Any circumvention of our "Talent Billing" firewall will immediately trigger permanent account deactivation and potential legal action.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">4. Financial Infrastructure & Wallet Protocols</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                Our payment processing operations are fully managed by integrated third-party financial service providers. By utilizing our payment pipelines:
              </p>
              <ul className="list-disc list-outside ml-5 space-y-2 text-sm text-gray-600 leading-relaxed">
                <li><strong className="text-gray-900">Fee Modifications:</strong> We explicitly retain the complete operational right to modify processing fees, subscription tier pricing, or standard transaction rates with active, written prior notice to your dashboard inbox.</li>
                <li><strong className="text-gray-900">Automatic Funding Reversals:</strong> If you initiate an unauthorized payment chargeback with your connected bank after a talent milestone has been actively confirmed by your supervisor dashboard, the total disputed value will immediately be treated as a definitive breach of contract.</li>
                <li><strong className="text-gray-900">Tax Responsibility:</strong> Our automated systems calculate and display necessary local statutory tax deductions (PAYE, VAT, etc.). However, final legal responsibility for accurate tax reporting and remittance fundamentally remains with the client entity operating the dashboard.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">5. Job Listing & Posting Rules</h3>
              <ul className="list-disc list-outside ml-5 space-y-2 text-sm text-gray-600 leading-relaxed">
                <li><strong className="text-gray-900">Content Accuracy:</strong> You agree that all official job listings published to our talent discovery pool accurately reflect actual, available roles and do not contain deceptive, discriminatory, or highly illegal parameters.</li>
                <li><strong className="text-gray-900">Platform Rejection:</strong> We hold absolute, unquestionable discretionary authority to flag, hide, or entirely delete any active job posting that violates our internal operating guidelines, specifically jobs promoting highly regulated or potentially dangerous services.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">6. Automated Tax Compliance Ledgers</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                To guarantee operational continuity, the OTK platform utilizes algorithmic tracking software to automatically isolate the following deductions before any net withdrawal or net invoice generation:
              </p>
              <ul className="list-disc list-outside ml-5 text-sm text-gray-600 leading-relaxed">
                <li>Local state-level PAYE (Pay-As-You-Earn) for active personnel.</li>
                <li>Corporate-level Value Added Tax (VAT) directly impacting client invoices.</li>
                <li>Applicable Withholding Tax (WHT) assessments regarding specific contracted categories.</li>
              </ul>
              <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                Our systemic isolation methodology allows us to provide clients and talents with accurate, audit-ready compliance ledgers that seamlessly export into third-party accounting modules.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">7. Performance Telemetry & Daily Logging</h3>
              <ul className="list-disc list-outside ml-5 space-y-2 text-sm text-gray-600 leading-relaxed">
                <li><strong className="text-gray-900">Active Tracking:</strong> The core workflow mechanism requires personnel to accurately record specific work hour inputs, quantitative project deliverables, and qualitative client feedback directly into the platform module.</li>
                <li><strong className="text-gray-900">Dispute Mediation:</strong> In the event of an active dispute over deployed personnel efficiency or milestone completion, our administrative teams will explicitly utilize these digital work logs alongside automated telemetry data to formulate a binding resolution concerning final financial disbursements.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">8. Intellectual Property & Course Content</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                All platform components, proprietary algorithms, specialized upskilling course structures, user interface designs, and digital brand marks are exclusively owned by OTK or its officially licensed operational partners. You do not acquire any ownership rights simply by accessing or operating within the platform module.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">9. Limitation of Liability & Service Disclaimer</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                The platform module and its native services are strictly provided on an "AS IS" and "AS AVAILABLE" operational baseline. We completely disclaim all implied or explicit warranties concerning merchantability, consistent platform up-time guarantees, or fitness for specific specialized operational demands. To the maximum legal extent, we shall not be held explicitly liable for any direct, indirect, incidental, or consequential damages resulting from platform downtime or loss of user connectivity.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">10. Modifications to Legal Terms</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We explicitly reserve the absolute right to modify, amend, or rewrite these Terms of Use at any given operational timeline. You agree that your continued use of our platform modules significantly constitutes your active legal acceptance of any updated term clauses. Any major updates will be systematically broadcast via dashboard announcements or direct account-associated email channels.
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
              Do you have a question, complaint or need help to understand the terms of use? Feel free to contact us.
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
