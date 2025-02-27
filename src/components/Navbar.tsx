
import { useState, useEffect } from "react";
import { Bell, User, MenuIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-2 bg-yuzn-dark-light/80 backdrop-blur-lg border-b border-white/5"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-gradient-green mr-8">yuzn</div>
          <div className="hidden md:flex space-x-6">
            <a href="#dashboard" className="text-sm text-white/80 hover:text-white transition-colors">
              Dashboard
            </a>
            <a href="#trade" className="text-sm text-white/80 hover:text-white transition-colors">
              Trade
            </a>
            <a href="#impact" className="text-sm text-white/80 hover:text-white transition-colors">
              Impact
            </a>
            <a href="#challenges" className="text-sm text-white/80 hover:text-white transition-colors">
              Challenges
            </a>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative text-white/80 hover:text-white">
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-yuzn-green"></span>
          </Button>
          
          <Button variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 text-white">
            <User className="h-4 w-4 mr-2" />
            <span>Profile</span>
          </Button>
        </div>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white/80"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-yuzn-dark-light/95 backdrop-blur-lg border-b border-white/5 animate-fade-in">
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            <a href="#dashboard" className="text-sm text-white/80 hover:text-white py-2 transition-colors">
              Dashboard
            </a>
            <a href="#trade" className="text-sm text-white/80 hover:text-white py-2 transition-colors">
              Trade
            </a>
            <a href="#impact" className="text-sm text-white/80 hover:text-white py-2 transition-colors">
              Impact
            </a>
            <a href="#challenges" className="text-sm text-white/80 hover:text-white py-2 transition-colors">
              Challenges
            </a>
            <div className="flex items-center justify-between pt-2 border-t border-white/5">
              <Button variant="ghost" size="icon" className="relative text-white/80 hover:text-white">
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-yuzn-green"></span>
              </Button>
              
              <Button variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 text-white">
                <User className="h-4 w-4 mr-2" />
                <span>Profile</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
