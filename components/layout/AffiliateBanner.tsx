import { FadeIn } from "@/components/ui/fade-in";
import Link from "next/link";
import { ArrowRight, Check, Wallet, Users, TrendingUp } from "lucide-react";

export function AffiliateBanner() {
  return (
    <section className="flex flex-col md:flex-row w-full border-t border-gray-100">
      {/* Left side */}
      <div className="w-full md:w-1/2 bg-white flex md:justify-end p-8 md:pr-16 lg:pr-24">
        <div className="max-w-lg w-full py-16 lg:py-24">
          <FadeIn>
            <span className="bg-[#f9fafb] text-[#222364] text-xs font-bold px-3 py-1.5 rounded-sm uppercase tracking-wider mb-6 inline-block">
              Partner Program (Affiliates)
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-[1.2]">
              Refer & Earn with the OTK Network
            </h2>
            <ul className="space-y-4 mb-10">
              {[
                "Earn 5%–15% commissions on all referrals",
                "Refer clients who hire top talent",
                "Refer professionals who subscribe to our services",
                "Track your earnings in real-time via dashboard",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start text-gray-800">
                  <Check className="w-5 h-5 text-[#222364] mr-3 shrink-0 mt-0.5" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/about/affiliates" className="text-[#222364] text-lg font-medium hover:text-[#222364] flex items-center transition-colors">
              Learn more <ArrowRight className="w-5 h-5 ml-1" />
            </Link>
          </FadeIn>
        </div>
      </div>

      {/* Right side */}
      <div className="w-full md:w-1/2 bg-[#f9fafb] flex md:justify-start p-8 md:pl-16 lg:pl-24 relative">
        <div className="max-w-lg w-full py-16 lg:py-24 flex flex-col justify-center relative z-10">
          <FadeIn delay={0.1}>
            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded bg-[#f9fafb] flex items-center justify-center border border-gray-200">
                  <Wallet className="w-4 h-4 text-[#222364]" />
                </div>
                <div>
                  <h3 className="font-black text-gray-900 text-lg">Affiliate Dashboard</h3>
                  <div className="h-1.5 w-24 bg-gray-100 mt-2 rounded-full"></div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="border border-gray-100 rounded-lg p-5 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors cursor-default">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Total Referrals</p>
                    <p className="text-xs text-[#222364] mt-1">12/12 completed</p>
                  </div>
                  <div className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg p-5 flex justify-between items-center bg-gray-50 cursor-default">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Total Earnings</p>
                    <p className="text-xs text-[#222364] mt-1">₦ 150,000 pending</p>
                  </div>
                  <div className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center">
                    <Wallet className="w-4 h-4 text-gray-500" />
                  </div>
                </div>
                <div className="border border-gray-100 rounded-lg p-5 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors cursor-default">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Conversion Rate</p>
                    <p className="text-xs text-gray-500 mt-1">8% conversion</p>
                  </div>
                  <div className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-gray-500" />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
