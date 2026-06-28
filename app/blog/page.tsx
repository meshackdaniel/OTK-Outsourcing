import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ReadyToTransformCTA } from "@/components/layout/ReadyToTransformCTA";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans">
      <Navbar />
      <main>
        <section className="pt-40 pb-24 px-4 max-w-5xl mx-auto text-center min-h-[60vh] flex flex-col justify-center">
          <h1 className="text-5xl md:text-7xl font-black text-[#222364] mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Insights, updates, and stories from the frontlines of global workforce management. Articles coming soon.
          </p>
        </section>
        <ReadyToTransformCTA />
      </main>
      <Footer />
    </div>
  );
}
