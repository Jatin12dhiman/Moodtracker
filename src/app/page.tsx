import Build from "@/components/build";
import Cta from "@/components/cta";
import HeroSection from "@/components/hero-section";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import Testimonial from "@/components/testimonial";
import Work from "@/components/work";

export default function Home() {
  return (
  <div >
    <SiteHeader />
    <HeroSection />
   <Cta />
   <Build />
    <Work />
    <Testimonial />
    <SiteFooter />
  </div> 
  );
}
