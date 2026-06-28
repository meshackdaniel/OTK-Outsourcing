import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ReadyToTransformCTA } from "@/components/layout/ReadyToTransformCTA";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Instagram, Twitter, MessageCircle, Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-gray-900">
      <Navbar />

      <main>
        {/* 1. Typography-Led Hero Section */}
        <section className="pt-32 pb-16 px-4 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black text-[#222364] mb-8 leading-tight tracking-tight">
              Let's build <br />
              <span className="text-[#f2c060]">something great.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              Do you have a question, complaint, or need help choosing the right service? Our team of experts is ready to assist you.
            </p>
          </div>
        </section>

        {/* 2. Flat Layout Contact Section */}
        <section className="max-w-7xl mx-auto px-4 lg:px-8 pb-32">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Contact Info (Left Column) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12">
                  We are always here to help you.
                </h2>
                
                <div className="space-y-10">
                  {/* Phone */}
                  <div className="flex gap-6">
                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-[#222364]" />
                    </div>
                    <div>
                      <p className="text-gray-500 font-bold mb-1 tracking-wide uppercase text-sm">Hotline / WhatsApp</p>
                      <p className="text-2xl font-bold text-gray-900">+234 90 7080 7080</p>
                    </div>
                  </div>
                  
                  {/* Email */}
                  <div className="flex gap-6">
                    <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-[#f2c060]" />
                    </div>
                    <div>
                      <p className="text-gray-500 font-bold mb-1 tracking-wide uppercase text-sm">Email Us</p>
                      <p className="text-2xl font-bold text-gray-900">info@otkoutsourcing.com</p>
                    </div>
                  </div>

                  {/* Office */}
                  <div className="flex gap-6">
                    <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-gray-700" />
                    </div>
                    <div>
                      <p className="text-gray-500 font-bold mb-1 tracking-wide uppercase text-sm">Head Office</p>
                      <p className="text-lg font-medium text-gray-900 leading-relaxed">
                        Lagos, Nigeria<br/>
                        Operating globally to serve your needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-16 pt-12 border-t border-gray-100">
                <p className="text-gray-500 font-bold mb-6 tracking-wide uppercase text-sm">Connect With Us</p>
                <div className="flex items-center gap-6 text-gray-400">
                  <a href="#" className="hover:text-[#222364] transition-colors duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                  <a href="#" className="hover:text-[#222364] transition-colors duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.23-3.66-5.59-.2-2.12.56-4.27 2.05-5.78 1.34-1.36 3.26-2.09 5.16-1.95v4.06c-1.12-.04-2.25.4-2.98 1.25-.66.75-.92 1.79-.69 2.75.18.77.73 1.45 1.43 1.78 1.1.53 2.45.28 3.29-.53.64-.62.96-1.5.95-2.39.01-4.99.01-9.98.01-14.97z"/></svg>
                  </a>
                  <a href="#" className="hover:text-[#222364] transition-colors duration-300"><Instagram className="w-6 h-6" /></a>
                  <a href="#" className="hover:text-[#222364] transition-colors duration-300"><Facebook className="w-6 h-6" /></a>
                  <a href="#" className="hover:text-[#222364] transition-colors duration-300"><MessageCircle className="w-6 h-6" /></a>
                </div>
              </div>
            </div>

            {/* Form (Right Column) */}
            <div className="lg:col-span-7">
              <div className="bg-gray-50/50 rounded-[2rem] p-8 md:p-12 lg:p-16 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Send a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">First Name</label>
                      <Input placeholder="John" className="h-14 rounded-xl bg-white border-gray-200 text-lg focus-visible:ring-[#222364]" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Last Name</label>
                      <Input placeholder="Doe" className="h-14 rounded-xl bg-white border-gray-200 text-lg focus-visible:ring-[#222364]" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Phone</label>
                      <Input placeholder="+123..." type="tel" className="h-14 rounded-xl bg-white border-gray-200 text-lg focus-visible:ring-[#222364]" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Email</label>
                      <Input placeholder="john@company.com" type="email" className="h-14 rounded-xl bg-white border-gray-200 text-lg focus-visible:ring-[#222364]" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Your Message</label>
                    <Textarea placeholder="How can we help you today?" className="min-h-[180px] rounded-xl resize-none bg-white border-gray-200 text-lg focus-visible:ring-[#222364] p-4" />
                  </div>
                  <div className="pt-4">
                    <Button className="w-full bg-[#222364] hover:bg-[#1a1a4b] text-white h-14 rounded-xl font-bold text-lg transition-transform hover:-translate-y-1">
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </section>

        {/* Bottom CTA */}
        <ReadyToTransformCTA 
          title="Ready to Transform Your Workforce?"
          subtitle="Skip the message and sign up directly to explore our talent pool or apply for jobs."
        />

      </main>
      <Footer />
    </div>
  );
}
