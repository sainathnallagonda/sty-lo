
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
    <div className="min-h-screen bg-global-gradient relative overflow-hidden">
      {/* Floating background shapes */}
      <div className="floating-shapes">
        <div className="floating-shape w-32 h-32 left-[10%]" style={{ animationDelay: '0s' }}></div>
        <div className="floating-shape w-20 h-20 left-[80%]" style={{ animationDelay: '5s' }}></div>
        <div className="floating-shape w-40 h-40 left-[50%]" style={{ animationDelay: '10s' }}></div>
        <div className="floating-shape w-16 h-16 left-[30%]" style={{ animationDelay: '15s' }}></div>
      </div>
      
      {/* Main content with proper spacing for sticky bar */}
      <div className="relative z-10 pb-24">
        <HeroSection />
        <VideoSection />
        <WaitlistSection />
        <HowItWorksSection />
        <ServiceCategoriesSection />
        <ServiceProvidersSection />
      </div>
      
      <StickyBottomBar />
    </div>
  );
};

export default Index;
