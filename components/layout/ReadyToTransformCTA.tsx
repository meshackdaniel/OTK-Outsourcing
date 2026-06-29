import Link from"next/link";
import { Button } from"@/components/ui/button";
import Image from"next/image";
import { cn } from"@/lib/utils";

interface ReadyToTransformCTAProps {
 title?: string;
 subtitle?: string;
 buttonText?: string;
 buttonLink?: string;
 secondaryButtonText?: string;
 secondaryButtonLink?: string;
 imageUrl?: string;
 className?: string;
}

export function ReadyToTransformCTA({
 title ="Your Next Job Is Just Few Clicks Away.",
 subtitle ="We're helping thousands of workers like you find reliable jobs, fair pay, and career growth.",
 buttonText ="Find Work",
 buttonLink ="/talent/jobs",
 secondaryButtonText ="I am Hiring",
 secondaryButtonLink ="/employer/jobs/create",
 imageUrl ="/fine-girl.png",
 className,
}: ReadyToTransformCTAProps) {
 return (
 <section className={cn("py-12 md:py-16 max-w-7xl mx-auto px-4 lg:px-8", className)}>
 <div className="bg-[#f9fafb] rounded-[3rem] p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
 
 {/* Left Content */}
 <div className="md:w-1/2 relative z-10 flex flex-col justify-center">
 <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-black text-gray-900 mb-6 leading-[1.1] tracking-tight">
 {title}
 </h2>
 <p className="text-gray-600 text-base md:text-lg mb-10 max-w-md font-medium leading-relaxed">
 {subtitle}
 </p>
 <div className="flex flex-wrap items-center gap-4">
 {buttonText && buttonLink && (
 <Link href={buttonLink}>
 <Button className="bg-[#222364] hover:bg-[#1a1a4b] text-white px-8 h-12 rounded-xl text-sm md:text-base font-semibold">
 {buttonText}
 </Button>
 </Link>
 )}
 {secondaryButtonText && secondaryButtonLink && (
 <Link href={secondaryButtonLink}>
 <Button className="bg-[#222364] hover:bg-[#1a1a4b] text-white px-8 h-12 rounded-xl text-sm md:text-base font-semibold">
 {secondaryButtonText}
 </Button>
 </Link>
 )}
 </div>
 </div>

 {/* Right Image */}
 <div className="md:w-1/2 relative w-full h-[350px] md:h-[450px]">
 {/* Yellow decorative background shape */}
 <div className="absolute inset-0 bg-[#f2c060] rounded-[3rem] transform -rotate-3 scale-[1.02] z-0 origin-center translate-y-1 translate-x-1"/>
 
 {/* Main Image */}
 <div className="absolute inset-0 z-10 rounded-[3rem] overflow-hidden bg-gray-200">
 {imageUrl ? (
 <Image 
 src={imageUrl} 
 alt="CTA Image"
 fill 
 className="object-cover object-top"
 priority
 />
 ) : (
 <div className="w-full h-full bg-gradient-to-tr from-gray-300 to-gray-200 flex items-center justify-center">
 <span className="text-gray-500 font-medium">CTA Image Placeholder</span>
 </div>
 )}
 </div>
 </div>

 </div>
 </section>
 );
}
