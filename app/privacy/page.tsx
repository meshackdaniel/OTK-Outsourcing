import React from "react";
import { LegalPageTemplate, LegalSection } from "@/components/layout/LegalPageTemplate";
import { Database, LineChart, CheckCircle2, Calculator, Shield, Lock } from "lucide-react";

export default function PrivacyPolicyPage() {
  const sections: LegalSection[] = [
    {
      id: "data-collection",
      title: "1. Data Collection Framework",
      icon: <Database className="w-5 h-5" />,
      content: (
        <>
          <p className="mb-4">
            We collect information across our functional modules to ensure secure
            platform operations:
          </p>
          <ul className="list-disc list-outside ml-5 space-y-3">
            <li>
              <strong className="text-gray-900">For Clients & Business Owners:</strong>{" "}
              Company name, registered location, sector details, operational
              staffing criteria, and wallet transaction histories.
            </li>
            <li>
              <strong className="text-gray-900">For Talents & Personnel:</strong>{" "}
              Legal name, contact data, curriculum vitae (CV), academic certificates,
              verified government identification records, performance work logs, and
              payout configurations.
            </li>
            <li>
              <strong className="text-gray-900">For Content Creators & Affiliates:</strong>{" "}
              Professional background, promotional tracking telemetry, bank details,
              and unique referral identification strings.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "data-usage",
      title: "2. How We Use Your Information",
      icon: <LineChart className="w-5 h-5" />,
      content: (
        <>
          <p className="mb-4">
            Data gathered by our platform is processed exclusively for the
            following operational workflows:
          </p>
          <ul className="list-disc list-outside ml-5 space-y-3">
            <li>
              <strong className="text-gray-900">Automated Selection:</strong> Running
              our algorithmic matching engine to link certified talents with active
              client job descriptions based on skills, verified credentials, and
              location metrics.
            </li>
            <li>
              <strong className="text-gray-900">Performance Telemetry:</strong>{" "}
              Monitoring and validating daily personnel work logs, productivity
              entries, and activity documentation to support client supervisor
              approval workflows.
            </li>
            <li>
              <strong className="text-gray-900">Financial Processing:</strong>{" "}
              Automating earnings distributions, processing split payments between
              multiple wallets, managing external withdrawals, and generating
              accurate transactional balance sheets.
            </li>
            <li>
              <strong className="text-gray-900">Targeted Content:</strong> Powering our
              admin-controlled marketing system to supply status-based
              notifications, e-learning track suggestions, and workflow updates
              tailored to your explicit profile tier.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "verification",
      title: "3. Verification & Third-Party Audits",
      icon: <CheckCircle2 className="w-5 h-5" />,
      content: (
        <p>
          To maintain a high-trust database for enterprise operations, candidate
          profile details undergo intensive verification steps. By registering, you
          explicitly authorize our platform to share specific credentials with
          accredited third-party screening providers to perform identity checks,
          professional reference verifications, and educational validation reviews.
          Deployed personnel data may also be visible to assigned client
          supervisors via secure, evaluative telemetry dashboards.
        </p>
      ),
    },
    {
      id: "financial-ledgering",
      title: '4. "Compliance by Design" Financial Ledgering',
      icon: <Calculator className="w-5 h-5" />,
      content: (
        <p>
          Our wallet system incorporates automated tax and legal tracking
          mechanisms. Financial information related to your contract values or
          earnings will be parsed by system algorithms to calculate, record, and
          maintain audit-ready ledgers for state and federal regulatory frameworks,
          directly addressing local PAYE, value-added tax (VAT), and corporate
          withholding tax (WHT) obligations.
        </p>
      ),
    },
    {
      id: "fraud-prevention",
      title: "5. Automated Fraud Prevention & Anti-Abuse Tracking",
      icon: <Shield className="w-5 h-5" />,
      content: (
        <p>
          To protect our platform margins and prevent structural affiliate network
          abuse, our security systems monitor interaction data. We collect and
          analyze technical logs—including device fingerprinting metrics, unique IP
          tracking coordinates, and phone/email verification responses—to block
          self-referral schemes, duplicate profile formations, and unauthorized
          system access attempts.
        </p>
      ),
    },
    {
      id: "security",
      title: "6. Information Security & Data Retention",
      icon: <Lock className="w-5 h-5" />,
      content: (
        <p>
          Your personal and corporate data behaves like escrow within our secure
          digital database parameters. We deploy rigorous remote hardware
          configurations, data encryption pipelines, and restricted access layers
          to shield sensitive records from unauthorized discovery. Data is
          retained only as long as necessary to fulfill active contract milestones,
          track financial transaction histories, or satisfy ongoing regulatory audit
          timelines.
        </p>
      ),
    },
  ];

  return (
    <LegalPageTemplate
      title="Privacy Policy"
      description="Your privacy and data security are fundamental to our workforce operating system. This policy details how we collect, safeguard, and process personal and corporate telemetry across our ecosystem."
      effectiveDate="June 4, 2026"
      sections={sections}
    />
  );
}
