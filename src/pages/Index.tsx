
import { useState, useEffect, useRef } from "react";
import { Leaf, Zap, TrendingUp, Trophy, BarChart3 } from "lucide-react";
import Navbar from "@/components/Navbar";
import DashboardCard from "@/components/DashboardCard";
import CarbonTracker from "@/components/CarbonTracker";
import TradePanel from "@/components/TradePanel";
import Leaderboard from "@/components/Leaderboard";
import Challenges from "@/components/Challenges";
import ActionButton from "@/components/ActionButton";

const Index = () => {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const sections = ["hero", "dashboard", "trade", "impact", "challenges"];
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    sectionRefs.current = sections.map((_, i) => document.getElementById(sections[i]));

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      sectionRefs.current.forEach((section, index) => {
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(sections[index]);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-yuzn-dark text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="orbit w-[500px] h-[500px] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin-slow"></div>
          <div className="orbit w-[700px] h-[700px] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin-slow" style={{ animationDuration: '12s' }}></div>
          <div className="orbit w-[900px] h-[900px] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin-slow" style={{ animationDuration: '16s' }}></div>
        </div>
        
        <div className="container max-w-6xl mx-auto px-4 z-10">
          <div className="text-center mb-10 md:mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-yuzn-dark-lightest border border-white/10 text-white/70 text-sm">
                <Leaf className="w-4 h-4 mr-2 text-yuzn-green" />
                Turn sustainable actions into tradable assets
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gradient-blue">Earth-positive</span> actions, 
              <span className="text-gradient-green"> real-world</span> value
            </h1>
            
            <p className="text-white/70 text-xl max-w-2xl mx-auto mb-10">
              Yuzn is the first platform that transforms your everyday sustainable choices into micro carbon credits that you can earn, trade, and invest in real climate impact.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <ActionButton 
                variant="primary" 
                size="lg" 
                icon={<Zap className="w-5 h-5" />}
                onClick={() => scrollToSection("dashboard")}
              >
                Explore the Platform
              </ActionButton>
              
              <ActionButton 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection("trade")}
              >
                Learn How It Works
              </ActionButton>
            </div>
          </div>
          
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card rounded-xl p-8 text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="w-14 h-14 mx-auto rounded-full flex items-center justify-center bg-yuzn-green/10 mb-6">
                <Leaf className="w-7 h-7 text-yuzn-green" />
              </div>
              <h3 className="text-xl font-medium mb-3">Track Carbon Impact</h3>
              <p className="text-white/70">
                AI automatically tracks your sustainable choices across all areas of your life.
              </p>
            </div>
            
            <div className="glass-card rounded-xl p-8 text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-14 h-14 mx-auto rounded-full flex items-center justify-center bg-yuzn-blue/10 mb-6">
                <TrendingUp className="w-7 h-7 text-yuzn-blue" />
              </div>
              <h3 className="text-xl font-medium mb-3">Trade & Invest mCC</h3>
              <p className="text-white/70">
                Exchange your earned micro carbon credits or invest them in climate projects.
              </p>
            </div>
            
            <div className="glass-card rounded-xl p-8 text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="w-14 h-14 mx-auto rounded-full flex items-center justify-center bg-purple-400/10 mb-6">
                <Trophy className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-xl font-medium mb-3">Compare & Challenge</h3>
              <p className="text-white/70">
                Track your progress, compete with friends, and take on personalized challenges.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center mt-16">
            <button
              onClick={() => scrollToSection("dashboard")}
              className="flex flex-col items-center text-white/50 hover:text-white transition-colors"
              aria-label="Scroll down"
            >
              <span className="text-sm mb-2">See More</span>
              <span className="animate-bounce">↓</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="container max-w-6xl mx-auto px-4 pb-20">
        {/* Dashboard Section */}
        <section id="dashboard" className="py-16">
          <div className="mb-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-yuzn-dark-lightest border border-white/10 text-white/70 text-sm mb-4">
              <Leaf className="w-4 h-4 mr-2 text-yuzn-green" />
              Dashboard
            </div>
            <h2 className="text-3xl font-bold mb-3">Track Your Sustainable Impact</h2>
            <p className="text-white/70 max-w-2xl">
              Monitor your carbon footprint and see the real-time value of your eco-friendly actions in micro carbon credits (mCC).
            </p>
          </div>

          <CarbonTracker />
        </section>

        {/* Trade Section */}
        <section id="trade" className="py-16">
          <div className="mb-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-yuzn-dark-lightest border border-white/10 text-white/70 text-sm mb-4">
              <BarChart3 className="w-4 h-4 mr-2 text-yuzn-blue" />
              Trade & Invest
            </div>
            <h2 className="text-3xl font-bold mb-3">Grow Your Climate Impact</h2>
            <p className="text-white/70 max-w-2xl">
              Trade your earned mCCs or invest them in verified climate projects to amplify your positive impact.
            </p>
          </div>

          <TradePanel />
        </section>

        {/* Impact Leaderboard Section */}
        <section id="impact" className="py-16">
          <div className="mb-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-yuzn-dark-lightest border border-white/10 text-white/70 text-sm mb-4">
              <Trophy className="w-4 h-4 mr-2 text-purple-400" />
              Impact Leaderboard
            </div>
            <h2 className="text-3xl font-bold mb-3">Compare Your Progress</h2>
            <p className="text-white/70 max-w-2xl">
              See how your sustainable actions stack up against friends and the global community.
            </p>
          </div>

          <Leaderboard />
        </section>

        {/* Challenges Section */}
        <section id="challenges" className="py-16">
          <div className="mb-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-yuzn-dark-lightest border border-white/10 text-white/70 text-sm mb-4">
              <Zap className="w-4 h-4 mr-2 text-yuzn-blue" />
              AI Nudges & Challenges
            </div>
            <h2 className="text-3xl font-bold mb-3">Personalized Sustainability Challenges</h2>
            <p className="text-white/70 max-w-2xl">
              Receive AI-powered suggestions to boost your impact based on your lifestyle and preferences.
            </p>
          </div>

          <Challenges />
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-yuzn-dark-light">
        <div className="container max-w-6xl mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold text-gradient-green mb-4 md:mb-0">yuzn</div>
            
            <div className="flex space-x-6 text-white/60 text-sm">
              <a href="#" className="hover:text-white transition-colors">About Us</a>
              <a href="#" className="hover:text-white transition-colors">How It Works</a>
              <a href="#" className="hover:text-white transition-colors">Partners</a>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-white/40 text-sm">
            <p>© 2023 Yuzn. All rights reserved.</p>
            <p>Making sustainable living rewarding.</p>
          </div>
        </div>
      </footer>

      {/* Fixed Navigation */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-yuzn-dark-light/90 backdrop-blur-lg border border-white/10 rounded-full px-2 py-1.5 shadow-lg hidden md:block">
        <div className="flex space-x-1">
          {sections.slice(1).map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`px-4 py-1.5 rounded-full transition-all ${
                activeSection === section
                  ? "bg-white/10 text-white"
                  : "text-white/50 hover:text-white"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
