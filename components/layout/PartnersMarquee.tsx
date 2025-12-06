// components/PartnersMarquee.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

// Example partner data (replace with your actual partners)
const partners = [
  { id: 1, name: "Access", logo: "/partners/Access.png" },
  { id: 2, name: "Airtel", logo: "/partners/Airtel.png" },
  { id: 3, name: "Backdrop", logo: "/partners/Backdrop.png" },
  { id: 4, name: "Betway", logo: "/partners/Betway.png" },
  { id: 5, name: "Citi Bank", logo: "/partners/Citi Bank.png" },
  { id: 6, name: "GoLemon", logo: "/partners/GoLemon.png" },
  { id: 6, name: "Herconomy", logo: "/partners/Herconomy.png" },
];

const PartnersMarquee = () => {
  return (
    <section className="w-full overflow-hidden bg-gray-50 py-12 mx-auto">
      <div className="relative">
        {/* Wrapping container with hover pause */}
        <motion.div
          className="flex gap-16"
          animate={{ x: [0, -100 + "%"] }} // Moves from 0 to -100% of its own width
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30, // Adjust speed here (lower = faster)
              ease: "linear",
            },
          }}
          whileHover={{ animationPlayState: "paused" }} // Modern CSS-in-JS pause on hover
          style={{ display: "flex" }}
        >
          {/* Render partners twice for seamless infinite loop */}
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="shrink-0 flex items-center justify-center"
              style={{ minWidth: "100px" }} // Adjust based on your logo size
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={160}
                height={80}
                className="object-contain transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>

        {/* Optional: Fade edges for polished look */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10" />
      </div>
    </section>
  );
};

export default PartnersMarquee;
