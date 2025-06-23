
import { useEffect } from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhatIsSection } from "@/components/sections/WhatIsSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { ServiceCategoriesSection } from "@/components/sections/ServiceCategoriesSection";
import { SignUpSection } from "@/components/sections/SignUpSection";
import { ThankYouSection } from "@/components/sections/ThankYouSection";
import { StickyBottomBar } from "@/components/sections/StickyBottomBar";
import { FooterSection } from "@/components/sections/FooterSection";

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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-green-50">
      <HeroSection />
      <WhatIsSection />
      <SocialProofSection />
      <HowItWorksSection />
      <ServiceCategoriesSection />
      <SignUpSection />
      <ThankYouSection />
      <FooterSection />
      <StickyBottomBar />
    </div>
  );
};

export default Index;
