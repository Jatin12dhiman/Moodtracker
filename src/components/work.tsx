import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function Work() {
  return (
    <section className="w-full bg-background py-16">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-0 p-0">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col items-start justify-center px-8 py-12 lg:py-24 bg-background">
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6 leading-tight">
            Discover a Happier You<br />With MoodTrack
          </h1>
          <p className="mb-8 text-lg text-muted-foreground max-w-md">
            Take control of your emotions, set positive intentions, and celebrate your progress. MoodTrack empowers you to live each day with purpose and positivity.
          </p>
          <div className="flex gap-3">
            <Button size="lg" asChild>
              <a href="#">Start Your Free Journey <span aria-hidden="true">→</span></a>
            </Button>
            
          </div>
        </div>
        {/* Right: Image/Logo */}
        <div className="flex-1 flex items-center justify-center h-full min-h-[100px] lg:min-h-[350px]">
          <Image src="/Mood.jpg" alt="Mood" height={400}   width={600}   className="w-[80%] md:w-full max-w-lg mx-auto rounded-lg shadow-md object-cover" />
        </div>
      </div>
    </section>
  );
}
