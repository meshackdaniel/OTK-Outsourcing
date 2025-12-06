import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const NextJob = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <section className="py-8 md:py-20 md:px-15 bg-gray-100 rounded-xl mb-5">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-20 md:gap-40 items-center mx-auto">
          <div className="space-y-6">
            <h1 className="text-3xl lg:text-4xl font-black leading-13">
              Your Next Job Is Just
              <br />
              <span className="text-primary">Few Clicks Away.</span>
            </h1>
            <p className="text-gray-900">
              We're helping thousands of workers like you find reliable jobs,
              fair pay, and career growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-dark-blue rounded-2xl w-36 text-white"
              >
                Find Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-dark-blue rounded-2xl w-36 text-white"
              >
                I am Hiring
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-dark-yellow rounded-[40] h-70 rotate-1 md:h-80 w-full">
              <div className="absolute left-1 md:-left-1 -top-2.5 md:-top-5 h-75 md:h-86 w-[97%] md:w-full mx-auto origin-top-right -rotate-1 rounded-[40] overflow-hidden">
                <Image
                  src={imageUrl}
                  alt="Worker"
                  width={700}
                  height={600}
                  className="md:w-full h-full md:h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextJob;
