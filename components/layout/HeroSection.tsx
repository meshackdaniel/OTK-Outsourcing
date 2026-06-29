"use client";

import React, { useState, useEffect } from"react";
import Link from"next/link";
import { Button } from"@/components/ui/button";
import { FadeIn } from"@/components/ui/fade-in";
import { Star } from"lucide-react";

const slides = [
 {
 image:"/images/homepage/hero slide/1.png",
 name:"Sophia Orji",
 role:"Hr Intern, Sterling",
 testimonial:"Got my First Job here. I am so happy I got to know about Otk."
 },
 {
 image:"/images/homepage/hero slide/2.png",
 name:"David Adeleke",
 role:"Frontend Developer",
 testimonial:"The matching process was incredibly fast. Highly recommended!"
 },
 {
 image:"/images/homepage/hero slide/3.png",
 name:"Amina Yusuf",
 role:"Product Manager",
 testimonial:"Otk made hiring dedicated talent a breeze for our team."
 },
 {
 image:"/images/homepage/hero slide/4.png",
 name:"Emeka Okafor",
 role:"UI/UX Designer",
 testimonial:"I found a role that perfectly matched my skill set in days."
 }
];

export function HeroSection() {
 const [currentSlide, setCurrentSlide] = useState(0);
 const [fadeTestimonial, setFadeTestimonial] = useState(true);

 useEffect(() => {
 const timer = setInterval(() => {
 setFadeTestimonial(false);
 setTimeout(() => {
 setCurrentSlide((prev) => (prev + 1) % slides.length);
 setFadeTestimonial(true);
 }, 300); // Wait for fade out
 }, 5000);
 return () => clearInterval(timer);
 }, []);

 return (
 <section className="pt-4 pb-8 max-w-[1400px] mx-auto px-4 lg:px-8">
 <FadeIn>
 <div className="flex flex-col lg:flex-row gap-4 lg:h-[480px] relative">
 
 {/* Left Side */}
 <div className="w-full lg:w-1/2 bg-[#f9fafb] rounded-[2.5rem] p-6 md:p-10 flex flex-col justify-center relative overflow-hidden"
 style={{ backgroundImage:"radial-gradient(#d5d5d5 1px, transparent 1px)", backgroundSize:"16px 16px"}}>
 <div className="relative z-10">
 <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-[1.1] tracking-tight mb-5">
 Your Next Job Is<br />
 Just a Few Clicks<br />
 Away.
 </h1>
 <p className="text-gray-700 text-base md:text-lg font-medium max-w-md mb-8 leading-relaxed">
 We're helping thousands of workers like you find reliable jobs, fair pay, and career growth.
 </p>
 <div className="flex flex-wrap items-center gap-4">
 <Link href="/talent/jobs">
 <Button className="bg-[#222364] hover:bg-[#1a1a4b] text-white px-8 h-12 rounded-xl font-bold text-base">
 Find Work
 </Button>
 </Link>
 <Link href="/employer/jobs/create">
 <Button className="bg-[#222364] hover:bg-[#1a1a4b] text-white px-8 h-12 rounded-xl font-bold text-base">
 I am Hiring
 </Button>
 </Link>
 </div>
 </div>
 </div>

 {/* Right Side (Slideshow) */}
 <div className="w-full lg:w-1/2 relative rounded-[2.5rem] overflow-hidden bg-gray-200 h-[400px] lg:h-full">
 {slides.map((slide, idx) => (
 <div 
 key={idx}
 className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
 idx === currentSlide ?"opacity-100 z-10":"opacity-0 z-0"
 }`}
 >
 <img 
 src={slide.image} 
 alt="Hero Slide"
 className="w-full h-full object-cover"
 />
 
 {/* Overlay Gradient for text readability */}
 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"/>

 {/* Name and Role Overlay */}
 <div className="absolute bottom-10 left-10 z-20">
 <h4 className="text-white font-black text-xl">{slide.name}</h4>
 <p className="text-gray-300 font-medium text-sm">{slide.role}</p>
 </div>
 </div>
 ))}

 {/* Pagination Dots */}
 <div className="absolute bottom-10 right-10 z-30 flex flex-col gap-2">
 {slides.map((_, idx) => (
 <button
 key={idx}
 onClick={() => setCurrentSlide(idx)}
 className={`w-2 h-2 rounded-full transition-all duration-300 ${
 idx === currentSlide ?"bg-white scale-125":"bg-white/40 hover:bg-white/80"
 }`}
 aria-label={`Go to slide ${idx + 1}`}
 />
 ))}
 </div>
 </div>

 {/* Floating Testimonial Card */}
 <div className="hidden lg:block absolute top-1/4 left-1/2 -translate-x-1/2 z-30">
 <div 
 className="bg-white/70 backdrop-blur-md rounded-2xl p-5 w-[280px]"
 style={{
 background:"linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)",
 border:"1px solid rgba(255, 255, 255, 0.4)"
 }}
 >
 <div className="flex items-center gap-1 mb-2">
 {[1,2,3,4,5].map((star) => (
 <Star key={star} className={`w-3.5 h-3.5 ${star === 5 ?'text-gray-400 fill-gray-400':'text-gray-800 fill-gray-800'}`} />
 ))}
 </div>
 <p className={`text-gray-800 font-semibold text-xs leading-relaxed transition-opacity duration-300 ${fadeTestimonial ?'opacity-100':'opacity-0'}`}>
 {slides[currentSlide].testimonial}
 </p>
 </div>
 </div>

 </div>
 </FadeIn>
 </section>
 );
}
