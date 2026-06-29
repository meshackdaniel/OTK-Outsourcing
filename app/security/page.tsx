import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { FadeIn } from "@/components/ui/fade-in";

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans">
      <Navbar />
      <main>
        <section className="pt-40 pb-24 px-4 max-w-4xl mx-auto">
          <FadeIn>
            <h1 className="text-5xl font-black text-[#222364] mb-12">
              Security Overview
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p>At OTK Outsourcing, we take your security seriously.</p>
              <p>This document outlines our security protocols, infrastructure protections, and compliance standards. The full policy is being updated and will be published shortly.</p>
            </div>
          </FadeIn>
        </section>
      </main>
      <Footer />
    </div>
  );
}
