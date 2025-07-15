import { Button } from "@/components/ui/button";

interface Cta10Props {
  heading: string;
  description: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
}

export default function Cta({
  heading = "Take Charge of Your Happiness Today!",
  description = "Start your journey towards a brighter, more balanced life. Track your mood, gain insights, and unlock your true potential with MoodTrack.",
  buttons = {
    primary: {
      text: "Start Your Journey",
      url: "https://www.shadcnblocks.com",
    },
  },
}: Cta10Props): React.ReactElement {
  return (
    <section className="pt-0 pb-12 w-full " id="plans">
      <div className="w-full max-w-none ">
        <div className=" flex w-full flex-col gap-16 overflow-hidden rounded-none p-8 md:rounded-none lg:flex-row lg:items-center lg:p-12 bg-white-700 ">
          <div className="flex-1">
            <h3 className="mb-3 text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
              {heading}
            </h3>
            <p className="text-muted-foreground max-w-xl lg:text-lg">
              {description}
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            {buttons.secondary && (
              <Button variant="outline" asChild className="text-foreground">
                <a href={buttons.secondary.url}>{buttons.secondary.text}</a>
              </Button>
            )}
            {buttons.primary && (
              <Button asChild variant="default" size="lg">
                <a href={buttons.primary.url}>{buttons.primary.text}</a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


