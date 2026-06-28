import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function DataProtectionPage() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans">
      <Navbar />
      <main>
        <section className="pt-40 pb-24 px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl font-black text-[#222364] mb-12">
            Data Protection Policy
          </h1>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p>Our commitment to your privacy and data protection.</p>
            <p>This page details how we handle, process, and protect your personal and corporate data in compliance with global standards. The full document will be available soon.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
