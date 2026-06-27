import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ReadyToTransformCTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  imageUrl?: string;
  className?: string;
}

export function ReadyToTransformCTA({
  title = "Ready to Transform Your Operations?",
  subtitle = "Move operations weight off your shoulders. Scale your business, access global talent, and get started in just a few clicks.",
  buttonText = "Post Your Requirements",
  buttonLink = "/employer/jobs/create",
  imageUrl = "/images/cta-girl.png",
  className,
}: ReadyToTransformCTAProps) {
  return (
    <section className={cn("py-12 md:py-16 max-w-7xl mx-auto px-4 lg:px-8", className)}>
      <div className="bg-[#F5F2EC] rounded-[2rem] p-8 md:p-10 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden">
        
        <div className="md:w-1/2 relative z-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-4 leading-tight">
            {title}
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-8 max-w-sm">
            {subtitle}
          </p>
          <Link href={buttonLink}>
            <Button className="bg-[#222364] hover:bg-[#1a1a4b] text-white px-8 h-14 rounded-xl text-lg font-semibold shadow-md">
              {buttonText}
            </Button>
          </Link>
        </div>

        <div className="md:w-1/2 relative w-full h-[300px] md:h-[400px]">
          {/* Yellow decorative background shape */}
          <div className="absolute top-4 bottom-4 left-4 right-4 bg-[#f2c060] rounded-[2rem] transform -rotate-3 z-0" />
          
          {/* Main Image */}
          <div className="absolute inset-0 z-10 rounded-[2rem] overflow-hidden bg-gray-200">
            {/* We use object-cover to make sure the image fills the container nicely */}
            {/* If the exact image from the mockup isn't available, we fallback to a placeholder */}
            <div className="w-full h-full bg-gradient-to-tr from-gray-300 to-gray-200 flex items-center justify-center">
              {/* <Image src={imageUrl} alt="CTA Image" fill className="object-cover" /> */}
              <span className="text-gray-500 font-medium">CTA Image Placeholder</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
