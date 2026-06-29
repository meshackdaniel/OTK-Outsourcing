import { Facebook, Instagram, Mail, Twitter, Youtube } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Link from "next/link";
import { CookiePreferenceModal } from "../ui/cookie-preference-modal";

const Footer = () => {
  const footerSections = [
    {
      title: "For Employers",
      links: [
        { label: "Post a Job", url: "/signup" },
        { label: "Manage Hires", url: "/login" },
        { label: "Hire Talents", url: "/signup" },
        { label: "Pricing & SLAs", url: "/pricing" },
      ],
    },
    {
      title: "For Talents",
      links: [
        { label: "Find Jobs", url: "/signup" },
        { label: "Browse Jobs", url: "/signup" },
        { label: "How It Works", url: "/how-it-works" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", url: "/about" },
        { label: "Careers", url: "/careers" },
        { label: "Contact Us", url: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Help Center", url: "/faq" },
        { label: "FAQs", url: "/faq" },
        { label: "Blog", url: "/blog" },
      ],
    },

  ];

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 mb-14 w-full mt-24">
      <footer className="bg-[#0b0c19] text-white rounded-[2.5rem]">
        <div className="container mx-auto px-10 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-15 mb-12">
            <div className="col-span-2 pr-8">
              <h3 className="font-black mb-4 text-xl">Stay in the Loop</h3>
              <p className="text-gray-400 mb-6 text-sm leading-6">
                Get tips, updates, and stories from teams and talents using OTK.
              </p>
              <form className="relative max-w-sm">
                <input
                  placeholder="Type email here"
                  required
                  className="border-0 border-b-2 bg-transparent w-full border-gray-600 py-2 focus:border-b-2 focus:border-gray-200 focus:ring-0 focus:outline-none rounded-none text-white placeholder:text-gray-500"
                />
                <button className="hover:cursor-pointer absolute right-0 p-0 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-semibold">
                  Submit
                </button>
              </form>
            </div>

            {footerSections.map((section) => (
              <div key={section.title} className="mt-8 lg:mt-0">
                <h4 className="font-black mb-6 text-lg">{section.title}</h4>
                <ul className="flex flex-col gap-4 text-gray-400 text-sm">
                  {section.links.map((link, idx) => (
                    <Link href={link.url} key={idx}>
                      <li className="hover:text-white cursor-pointer transition">
                        {link.label}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col xl:flex-row justify-between items-center text-sm gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <p className="text-gray-500">© 2026 OTK. All Rights Reserved.</p>
              <div className="flex flex-wrap justify-center items-center gap-4 text-gray-400">
                <CookiePreferenceModal />
                <span className="text-gray-600">•</span>
                <Link href="/terms" className="hover:text-white transition">Terms</Link>
                <span className="text-gray-600">•</span>
                <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
                <span className="text-gray-600">•</span>
                <Link href="/code-of-conduct" className="hover:text-white transition">Code of conduct</Link>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 mt-6 md:mt-0">
              <Twitter className="w-5 h-5 text-gray-400 cursor-pointer hover:text-[#222364] transition" />
              <Facebook className="w-5 h-5 text-gray-400 cursor-pointer hover:text-[#222364] transition" />
              <Instagram className="w-5 h-5 text-gray-400 cursor-pointer hover:text-[#222364] transition" />
              <Youtube className="w-5 h-5 text-gray-400 cursor-pointer hover:text-[#222364] transition" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
