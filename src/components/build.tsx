import React from "react";
import { Button } from "@/components/ui/button";
interface BuildProps {
  heading?: string;
  description?: string;
  button?: {
    text: string;
    url: string;
  };
}

export default function Build({
  heading = "Transform Your Mindset, Transform Your World",
  description =
    "Experience a new way to understand yourself, set positive goals, and celebrate every win—big or small. MoodTrack helps you grow, reflect, and live your best life every day.",
  button = {
    text: "Get Started Now",
    url: "#",
  },
}: BuildProps) {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-purple-200 to-background dark:from-purple-950 dark:to-background" >
      <div className="container mx-auto flex flex-col items-center justify-center text-center gap-4 " id="features">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
          {heading}
        </h2>
        <p className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-6">
          {description}
        </p>
        <Button
          asChild
          size="lg"
        >
          <a href={button.url}>{button.text}</a>
        </Button>
      </div>
    </section>
  );
}
