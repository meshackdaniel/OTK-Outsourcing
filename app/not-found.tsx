import { Navbar } from"@/components/layout/Navbar";
import Footer from"@/components/layout/Footer";
import Link from"next/link";
import { Button } from"@/components/ui/button";

export default function NotFound() {
 return (
 <div className="min-h-screen bg-[#FDFDFD] font-sans flex flex-col">
 <Navbar />
 <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-12">
 <h1 className="text-9xl md:text-[12rem] font-black text-[#f2c060] mb-6 leading-none">404</h1>
 <h2 className="text-3xl md:text-5xl font-black text-[#222364] mb-6">Page Not Found</h2>
 <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-xl mx-auto leading-relaxed">
 The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
 </p>
 <Link href="/">
 <Button className="h-14 px-10 bg-[#222364] hover:bg-[#1a1a4b] text-white rounded-xl font-bold text-lg transition-all">
 Return Home
 </Button>
 </Link>
 </main>
 <Footer />
 </div>
 );
}
