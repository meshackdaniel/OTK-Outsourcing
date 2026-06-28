import React from "react";
import { LegalPageTemplate, LegalSection } from "@/components/layout/LegalPageTemplate";
import { Users, Scale, FileKey, ShieldCheck, AlertOctagon, Flag } from "lucide-react";

export default function CodeOfConductPage() {
  const sections: LegalSection[] = [
    {
      id: "professionalism",
      title: "1. Professionalism & Respect",
      icon: <Users className="w-5 h-5" />,
      content: (
        <p>
          We expect all participants in the OTK ecosystem—clients, talents, and
          affiliates—to conduct themselves with the highest degree of
          professionalism. Communication should remain respectful, constructive,
          and strictly related to the professional scope of work. Any form of
          abusive language, threats, or intimidation during interviews, active
          deployments, or general correspondence will result in immediate platform
          removal.
        </p>
      ),
    },
    {
      id: "anti-harassment",
      title: "2. Anti-Harassment & Discrimination",
      icon: <Scale className="w-5 h-5" />,
      content: (
        <p>
          OTK maintains a strict zero-tolerance policy towards any form of
          harassment or discrimination. We are committed to fostering a safe,
          inclusive environment free from bias based on race, gender, age,
          religion, sexual orientation, disability, or national origin. This applies
          to job postings, hiring decisions, workplace interactions, and platform
          communications.
        </p>
      ),
    },
    {
      id: "confidentiality",
      title: "3. Confidentiality & Intellectual Property",
      icon: <FileKey className="w-5 h-5" />,
      content: (
        <>
          <p className="mb-4">
            Protecting sensitive business information is fundamental to our
            operations:
          </p>
          <ul className="list-disc list-outside ml-5 space-y-3">
            <li>
              <strong className="text-gray-900">For Talents:</strong> You must strictly
              protect all proprietary information, trade secrets, client lists, and
              internal documents accessed during your deployment. Unauthorized
              sharing or personal use of client data is a severe breach of contract.
            </li>
            <li>
              <strong className="text-gray-900">For Clients:</strong> You must respect
              the intellectual property and personal data of the talents you hire,
              using their information solely for the purposes of employment and
              workforce management.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "compliance",
      title: "4. Compliance & Legal Integrity",
      icon: <ShieldCheck className="w-5 h-5" />,
      content: (
        <p>
          All users must comply with local, state, and federal laws applicable to
          their operations. Clients are responsible for ensuring their job
          offerings and operational directives are legally sound. Talents are
          expected to execute their tasks without engaging in illicit, unethical,
          or legally questionable activities.
        </p>
      ),
    },
    {
      id: "platform-misuse",
      title: "5. Platform Misuse & Fraud",
      icon: <AlertOctagon className="w-5 h-5" />,
      content: (
        <p>
          The OTK platform relies on trust and accuracy. Falsifying qualifications,
          submitting fraudulent work logs, manipulating the wallet systems, or
          attempting to bypass the billing firewall to arrange direct payments
          off-platform constitutes severe misconduct. Such actions will trigger
          immediate financial freezes, permanent bans, and potential legal
          consequences.
        </p>
      ),
    },
    {
      id: "reporting",
      title: "6. Reporting & Enforcement",
      icon: <Flag className="w-5 h-5" />,
      content: (
        <>
          <p className="mb-4">
            If you witness or experience any behavior that violates this Code of
            Conduct, you are encouraged to report it immediately through our secure
            support channels.
          </p>
          <ul className="list-disc list-outside ml-5 space-y-3">
            <li>Reports are treated with the utmost confidentiality.</li>
            <li>
              Our compliance team will conduct a prompt, impartial investigation into
              all credible allegations.
            </li>
            <li>
              We reserve the right to suspend or terminate accounts, withhold
              funds pending investigation, and cooperate with law enforcement if
              necessary to protect our community.
            </li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <LegalPageTemplate
      title="Code of Conduct"
      description="Our community thrives on trust, respect, and professionalism. This Code of Conduct outlines the baseline expectations for all clients, talents, and partners interacting within the OTK ecosystem."
      effectiveDate="June 4, 2026"
      sections={sections}
    />
  );
}
