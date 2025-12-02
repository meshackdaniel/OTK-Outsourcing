import { Facebook, Instagram, Mail, Twitter, Youtube } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Link from "next/link";

const Footer = () => {
    const footerSections = [
      {
        title: "For Employers",
        links: [
          { label: "Post a Job", url: "/" },
          { label: "Manage Hires", url: "/" },
          { label: "Hire Talents", url: "/" },
          { label: "Pricing & SLAs", url: "/" },
        ],
      },
      {
        title: "For Talents",
        links: [
          { label: "Find Jobs", url: "/help" },
          { label: "Browse Jobs", url: "/contact" },
          { label: "How It Works", url: "/privacy" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About Us", url: "/" },
          { label: "Careers", url: "/" },
          { label: "Contact Us", url: "/" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Help Center", url: "/" },
          { label: "FAQs", url: "/" },
          { label: "Blog", url: "/" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Security", url: "/" },
          { label: "Terms & Condition", url: "/" },
          { label: "Privacy Policy", url: "/" },
          { label: "Data Protection", url: "/" },
        ],
      },
    ];


  return (
    <footer className="bg-gray-900 text-white rounded-4xl mb-14">
      <div className="container mx-auto px-10 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-15 mb-12">
          <div className="col-span-2">
            <h3 className="font-bold mb-4">Stay in the Loop</h3>
            <p className="text-gray-400 mb-6 text-xs leading-6">
              Get tips, updates, and stories from teams and talents using OTK.
            </p>
            <form className="relative max-w-sm">
              <input
                placeholder="Type email here"
                required
                className="border-0 border-b-2 w-full border-gray-400 py-1 focus:border-b-2 focus:border-blue-500 focus:ring-0 focus:outline-none rounded-none"
              />
              <button className="hover:cursor-pointer absolute right-0 p-0 top-1/2 -translate-y-1/2  text-blue-500">
                Submit
              </button>
            </form>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold mb-4">{section.title}</h4>
              <ul className="flex flex-col gap-3 text-gray-400 text-sm">
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

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-gray-500">© 2025 OTK. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Twitter className="w-5 h-5" />
            <Facebook className="w-5 h-5" />
            <Instagram className="w-5 h-5" />
            <Youtube className="w-5 h-5" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
