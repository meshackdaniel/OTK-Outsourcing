import React from "react";
import { LegalPageTemplate, LegalSection } from "@/components/layout/LegalPageTemplate";
import { Scale, Wallet, ShieldAlert, CreditCard, FileText, Calculator, Activity, Copyright, AlertTriangle, RefreshCw } from "lucide-react";

export default function TermsOfUsePage() {
  const sections: LegalSection[] = [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      icon: <Scale className="w-5 h-5" />,
      content: (
        <p>
          By creating an account, running a payroll cycle, or deploying personnel
          through our digital platform, you explicitly form a binding legal
          agreement. This establishes a "Software as a Service" (SaaS) and
          "Infrastructure as a Service" (IaaS) agreement. You confirm that you
          possess the necessary organizational authority to execute these
          obligations.
        </p>
      ),
    },
    {
      id: "wallet-first",
      title: "2. How does the 'Wallet-First' system protect my business?",
      icon: <Wallet className="w-5 h-5" />,
      content: (
        <p>
          The Wallet-First operational framework requires all verified clients to
          pre-fund their corporate dashboard wallets prior to triggering the active
          recruitment or active deployment milestones. Our system holds these
          allocated funds in a secure escrow protocol, disbursing payments
          incrementally only upon client-approved milestone completion.
        </p>
      ),
    },
    {
      id: "user-restrictions",
      title: "3. User Restrictions & Account Security",
      icon: <ShieldAlert className="w-5 h-5" />,
      content: (
        <>
          <p className="mb-4">
            To guarantee operational integrity across the ecosystem, you agree
            strictly to the following parameters:
          </p>
          <ul className="list-disc list-outside ml-5 space-y-3">
            <li>
              <strong className="text-gray-900">Direct Employment Circumvention:</strong>{" "}
              You agree not to utilize our internal matching algorithms or candidate
              databases to solicit, hire, or directly employ talents outside of our
              billing ecosystem.
            </li>
            <li>
              <strong className="text-gray-900">Third-Party Access:</strong> You are
              strictly forbidden from selling, licensing, renting, or transferring
              your corporate dashboard access to external, unverified third parties.
            </li>
            <li>
              <strong className="text-gray-900">Security Notification:</strong> You
              agree to immediately notify our support team upon discovering any
              unauthorized platform access or security breaches connected to your
              active credentials.
            </li>
          </ul>
          <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-100 text-sm italic">
            Any circumvention of our "Talent Billing" firewall will immediately
            trigger permanent account deactivation and potential legal action.
          </div>
        </>
      ),
    },
    {
      id: "financial-infrastructure",
      title: "4. Financial Infrastructure & Wallet Protocols",
      icon: <CreditCard className="w-5 h-5" />,
      content: (
        <>
          <p className="mb-4">
            Our payment processing operations are fully managed by integrated
            third-party financial service providers. By utilizing our payment
            pipelines:
          </p>
          <ul className="list-disc list-outside ml-5 space-y-3">
            <li>
              <strong className="text-gray-900">Fee Modifications:</strong> We explicitly
              retain the complete operational right to modify processing fees,
              subscription tier pricing, or standard transaction rates with active,
              written prior notice to your dashboard inbox.
            </li>
            <li>
              <strong className="text-gray-900">Automatic Funding Reversals:</strong> If you
              initiate an unauthorized payment chargeback with your connected bank
              after a talent milestone has been actively confirmed by your
              supervisor dashboard, the total disputed value will immediately be
              treated as a definitive breach of contract.
            </li>
            <li>
              <strong className="text-gray-900">Tax Responsibility:</strong> Our automated
              systems calculate and display necessary local statutory tax deductions
              (PAYE, VAT, etc.). However, final legal responsibility for accurate tax
              reporting and remittance fundamentally remains with the client entity
              operating the dashboard.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "job-listing",
      title: "5. Job Listing & Posting Rules",
      icon: <FileText className="w-5 h-5" />,
      content: (
        <ul className="list-disc list-outside ml-5 space-y-3">
          <li>
            <strong className="text-gray-900">Content Accuracy:</strong> You agree that all
            official job listings published to our talent discovery pool accurately
            reflect actual, available roles and do not contain deceptive,
            discriminatory, or highly illegal parameters.
          </li>
          <li>
            <strong className="text-gray-900">Platform Rejection:</strong> We hold absolute,
            unquestionable discretionary authority to flag, hide, or entirely delete
            any active job posting that violates our internal operating guidelines,
            specifically jobs promoting highly regulated or potentially dangerous
            services.
          </li>
        </ul>
      ),
    },
    {
      id: "tax-compliance",
      title: "6. Automated Tax Compliance Ledgers",
      icon: <Calculator className="w-5 h-5" />,
      content: (
        <>
          <p className="mb-4">
            To guarantee operational continuity, the OTK platform utilizes
            algorithmic tracking software to automatically isolate the following
            deductions before any net withdrawal or net invoice generation:
          </p>
          <ul className="list-disc list-outside ml-5 space-y-2 mb-4">
            <li>Local state-level PAYE (Pay-As-You-Earn) for active personnel.</li>
            <li>Corporate-level Value Added Tax (VAT) directly impacting client invoices.</li>
            <li>Applicable Withholding Tax (WHT) assessments regarding specific contracted categories.</li>
          </ul>
          <p>
            Our systemic isolation methodology allows us to provide clients and
            talents with accurate, audit-ready compliance ledgers that seamlessly
            export into third-party accounting modules.
          </p>
        </>
      ),
    },
    {
      id: "performance-telemetry",
      title: "7. Performance Telemetry & Daily Logging",
      icon: <Activity className="w-5 h-5" />,
      content: (
        <ul className="list-disc list-outside ml-5 space-y-3">
          <li>
            <strong className="text-gray-900">Active Tracking:</strong> The core workflow
            mechanism requires personnel to accurately record specific work hour
            inputs, quantitative project deliverables, and qualitative client
            feedback directly into the platform module.
          </li>
          <li>
            <strong className="text-gray-900">Dispute Mediation:</strong> In the event of an
            active dispute over deployed personnel efficiency or milestone
            completion, our administrative teams will explicitly utilize these
            digital work logs alongside automated telemetry data to formulate a
            binding resolution concerning final financial disbursements.
          </li>
        </ul>
      ),
    },
    {
      id: "intellectual-property",
      title: "8. Intellectual Property & Course Content",
      icon: <Copyright className="w-5 h-5" />,
      content: (
        <p>
          All platform components, proprietary algorithms, specialized upskilling
          course structures, user interface designs, and digital brand marks are
          exclusively owned by OTK or its officially licensed operational
          partners. You do not acquire any ownership rights simply by accessing or
          operating within the platform module.
        </p>
      ),
    },
    {
      id: "liability",
      title: "9. Limitation of Liability & Service Disclaimer",
      icon: <AlertTriangle className="w-5 h-5" />,
      content: (
        <p>
          The platform module and its native services are strictly provided on an
          "AS IS" and "AS AVAILABLE" operational baseline. We completely disclaim
          all implied or explicit warranties concerning merchantability, consistent
          platform up-time guarantees, or fitness for specific specialized
          operational demands. To the maximum legal extent, we shall not be held
          explicitly liable for any direct, indirect, incidental, or consequential
          damages resulting from platform downtime or loss of user connectivity.
        </p>
      ),
    },
    {
      id: "modifications",
      title: "10. Modifications to Legal Terms",
      icon: <RefreshCw className="w-5 h-5" />,
      content: (
        <p>
          We explicitly reserve the absolute right to modify, amend, or rewrite
          these Terms of Use at any given operational timeline. You agree that your
          continued use of our platform modules significantly constitutes your
          active legal acceptance of any updated term clauses. Any major updates
          will be systematically broadcast via dashboard announcements or direct
          account-associated email channels.
        </p>
      ),
    },
  ];

  return (
    <LegalPageTemplate
      title="Terms of Use"
      description="Please read these Terms of Use carefully before accessing or utilizing our workforce infrastructure platform, secure financial modules, or continuous software services."
      effectiveDate="June 4, 2026"
      sections={sections}
    />
  );
}
