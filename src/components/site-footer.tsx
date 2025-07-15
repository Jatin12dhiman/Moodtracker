import React from "react";
import { Button } from "@/components/ui/button";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function SiteFooter() {
  return (
    <footer className="w-full bg-background pt-16 pb-8 px-4 bg-gradient-to-t from-purple-200/60 to-transparent dark:from-purple-950/60 dark:to-transparent">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left: Logo + Description + Social */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 mb-2">
            <img src="https://images.vexels.com/media/users/3/137337/isolated/preview/9a5ed5bf74c9c394d925e596665c4fe8-heart-logo-hearts.png" alt="Logo" className="w-12 h-12 rounded dark:invert" />
            <span className="text-2xl font-bold text-foreground">MoodTrack</span>
          </div>
          <p className="text-muted-foreground text-base max-w-md">
            MoodTrack is your companion for a happier, healthier life. Discover tools, tips, and inspiration to help you track your mood, boost your well-being, and live your best life every day.
          </p>
          <div className="flex gap-5 mt-2 text-xl">
            <a href="#" aria-label="Instagram"><FaInstagram className="hover:text-primary transition" /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedin className="hover:text-primary transition" /></a>
            <a href="#" aria-label="Facebook"><FaFacebook className="hover:text-primary transition" /></a>
            <a href="#" aria-label="Twitter"><FaTwitter className="hover:text-primary transition" /></a>
          </div>
        </div>
        {/* Center: Quick Links */}
        <div>
          <h4 className="font-semibold text-foreground mb-4 text-lg">Quick Links</h4>
          <ul className="flex flex-col gap-3 text-muted-foreground text-base">
            <li><a href="#Home">Home</a></li>
            <li><a href="#feature">Feature</a></li>
            <li><a href="#plans">Plans</a></li>
            <li><a href="#testimonial">Stories</a></li>
          </ul>
        </div>
        {/* Right: Contact Us + Newsletter */}
        <div className="flex flex-col gap-8">
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-lg">Contact Us</h4>
            <ul className="flex flex-col gap-3 text-muted-foreground text-base">
              <li className="flex items-center gap-2"><FaPhone className="inline-block" /> +91 99903 57676</li>
              <li className="flex items-center gap-2"><FaEnvelope className="inline-block" /> info@moodtrack.com</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3 text-lg">Newsletter</h4>
            <form className="flex gap-2 mb-2">
              <input
                type="email"
                placeholder="Email"
                className="px-3 py-2 rounded border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary w-full"
              />
              <Button type="submit" className="shrink-0">Subscribe</Button>
            </form>
            <p className="text-xs text-muted-foreground">
              By submitting, you agree to our <a href="#" className="underline">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
      <hr className="my-8 border-t border-muted-foreground/20" />
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground px-2">
        <div>
          Copyright © {new Date().getFullYear()} MoodTrack | All rights reserved.
        </div>
        <div className="flex gap-4 py-8">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
