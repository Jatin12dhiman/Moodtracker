import React from "react";

const testimonials = [
  {
    quote:
      "MoodTrack has truly changed my life. I feel more in control and happier every day! Highly recommended for anyone who wants to improve their well-being.",
    name: "John Doe",
    role: "CEO & Founder",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote:
      "The daily insights and positive reminders keep me motivated and focused. MoodTrack makes it easy to track my progress and celebrate my wins!",
    name: "Jane Doe",
    role: "CTO",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote:
      "Finally, a tool that helps me understand and improve my mood. MoodTrack is simple, effective, and a joy to use every day!",
    name: "John Smith",
    role: "COO",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

export default function Testimonial() {
  return (
    <section className="w-full py-16 bg-background " id="testimonial">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-12">
          Why Clients Love Us
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="border rounded-xl p-8 flex flex-col justify-between h-full bg-background"
            >
              <p className="text-lg text-foreground mb-8">“{t.quote}”</p>
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border"
                />
                <div>
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <div className="text-muted-foreground text-sm">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
