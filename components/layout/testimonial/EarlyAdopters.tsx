import { Card } from "@/components/ui/card";
import Facebook from "@/components/ui/social-icons/Facebook";
import LinkedIn from "@/components/ui/social-icons/LinkedIn";
import X from "@/components/ui/social-icons/X";
import Image from "next/image";
import React from "react";

const EarlyAdopters = () => {
    const testimonies = [
      {
        handle: "@kd7889",
        profileImage: "/profile.jpg",
        icon: X,
        testimony:
          "Get paid fairly. Track your earnings in real time and always get paid on time. No hidden delays",
      },
      {
        handle: "@kd7889",
        profileImage: "/profile.jpg",
        icon: LinkedIn,
        testimony:
          "Get paid fairly. Track your earnings in real time and always get paid on time. No hidden delays",
      },
      {
        handle: "@kd7889",
        profileImage: "/profile.jpg",
        icon: Facebook,
        testimony:
          "Get paid fairly. Track your earnings in real time and always get paid on time. No hidden delays",
      },
      {
        handle: "@kd7889",
        profileImage: "/profile.jpg",
        icon: Facebook,
        testimony:
          "Get paid fairly. Track your earnings in real time and always get paid on time. No hidden delays",
      },
      {
        handle: "@kd7889",
        profileImage: "/profile.jpg",
        icon: X,
        testimony:
          "Get paid fairly. Track your earnings in real time and always get paid on time. No hidden delays",
      },
      {
        handle: "@kd7889",
        profileImage: "/profile.jpg",
        icon: LinkedIn,
        testimony:
          "Get paid fairly. Track your earnings in real time and always get paid on time. No hidden delays",
      },
    ];
  return (
    <section className="pt-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Hear From Our Early Adopters
        </h2>
        <p className="text-gray-600 mb-16 mx-auto">
          We're helping thousands of workers like <br /> you find reliable jobs
          with fair pay.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto px-5 py-16 md:py-20 md:px-15 bg-gray-50 my-20 rounded-4xl">
          {testimonies.map((testimony, i) => (
            <Card key={i} className="p-6 text-left">
              <div className="flex items-center gap-3 mb-4">
                      <div className="overflow-hidden w-12 h-12 bg-gray-300 rounded-full">
                          <Image src={testimony.profileImage} width={300} height={300} alt={testimony.handle} />
                </div>
                <div className="flex items-center justify-between w-full">
                  <p className="font-semibold">{testimony.handle}</p>
                  <div className="flex gap-2">
                    <testimony.icon />
                  </div>
                </div>
              </div>
                  <p className="text-sm text-gray-600">{testimony.testimony}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EarlyAdopters;
