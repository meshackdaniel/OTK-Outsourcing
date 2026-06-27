import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ReadyToTransformCTA } from "@/components/layout/ReadyToTransformCTA";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Instagram, Twitter, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      <Navbar />

      <main>
        {/* Header */}
        <section className="pt-24 pb-12 px-4 max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-[#222364]">
            Contact Us
          </h1>
        </section>

        {/* Contact Form & Info */}
        <section className="max-w-6xl mx-auto px-4 lg:px-8 mb-24">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-2 flex flex-col lg:flex-row">
            
            {/* Form */}
            <div className="lg:w-3/5 p-8 lg:p-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h2>
              <p className="text-gray-500 mb-8 text-sm">
                Do you have a question, complaint or need help to choose the right service? Feel free to contact us.
              </p>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Input placeholder="First Name" className="h-12 rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Input placeholder="Last Name" className="h-12 rounded-xl" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Input placeholder="Phone" type="tel" className="h-12 rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Input placeholder="Email" type="email" className="h-12 rounded-xl" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Textarea placeholder="Your message" className="min-h-[150px] rounded-xl resize-none" />
                </div>
                <div className="flex justify-end">
                  <Button className="bg-[#222364] hover:bg-[#1a1a4b] text-white px-8 h-12 rounded-xl font-semibold">
                    Send a Message
                  </Button>
                </div>
              </form>
            </div>

            {/* Info Panel */}
            <div className="lg:w-2/5 bg-[#222364] rounded-3xl p-8 lg:p-12 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-10">Hi! we are always here to help you</h3>
                
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-2xl p-6">
                    <p className="text-blue-200 text-sm font-semibold mb-1">Hotline:</p>
                    <p className="font-bold text-lg">+234 90 7080 7080</p>
                  </div>
                  
                  <div className="bg-white/10 rounded-2xl p-6">
                    <p className="text-blue-200 text-sm font-semibold mb-1">SMS/WhatsApp</p>
                    <p className="font-bold text-lg">+234 90 7080 7080</p>
                  </div>
                  
                  <div className="bg-white/10 rounded-2xl p-6">
                    <p className="text-blue-200 text-sm font-semibold mb-1">Email:</p>
                    <p className="font-bold text-lg">info@otkoutsourcing.com</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6 mt-12">
                {/* Minimal Social Icons representing X, Tiktok, IG, FB, WhatsApp */}
                <a href="#" className="hover:text-gray-300 transition"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
                {/* Simple placeholder for Tiktok using music note icon or similar. Let's just use empty span or standard SVGs */}
                <a href="#" className="hover:text-gray-300 transition"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.23-3.66-5.59-.2-2.12.56-4.27 2.05-5.78 1.34-1.36 3.26-2.09 5.16-1.95v4.06c-1.12-.04-2.25.4-2.98 1.25-.66.75-.92 1.79-.69 2.75.18.77.73 1.45 1.43 1.78 1.1.53 2.45.28 3.29-.53.64-.62.96-1.5.95-2.39.01-4.99.01-9.98.01-14.97z"/></svg></a>
                <a href="#" className="hover:text-gray-300 transition"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="hover:text-gray-300 transition"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="hover:text-gray-300 transition"><MessageCircle className="w-5 h-5" /></a>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <ReadyToTransformCTA />

      </main>
      <Footer />
    </div>
  );
}
