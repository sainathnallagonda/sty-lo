
import { useEffect } from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { VideoSection } from "@/components/sections/VideoSection";
import { WaitlistSection } from "@/components/sections/WaitlistSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { ServiceCategoriesSection } from "@/components/sections/ServiceCategoriesSection";
import { ServiceProvidersSection } from "@/components/sections/ServiceProvidersSection";
import { StickyBottomBar } from "@/components/sections/StickyBottomBar";

const Index = () => {
  useEffect(() => {
    // Smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <VideoSection />
      <WaitlistSection />
      <HowItWorksSection />
      <ServiceCategoriesSection />
      <ServiceProvidersSection />
      <StickyBottomBar />
    </div>
  );
};

export default Index;
