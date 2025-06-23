import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  onLoginClick: () => void;
  onSignupClick: () => void;
}

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openLoginModal = () => {
    const modal = document.getElementById("loginModal");
    if (modal) {
      modal.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    }
  };

  const openSignupModal = () => {
    const modal = document.getElementById("signupModal");
    if (modal) {
      modal.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md border-b border-gray-200" : "bg-white/90 backdrop-blur-md"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="text-2xl font-poppins font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            PremiumHomes
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection("home")}
              className="text-charcoal hover:text-gold transition-colors duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("listings")}
              className="text-charcoal hover:text-gold transition-colors duration-300"
            >
              Listings
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="text-charcoal hover:text-gold transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-charcoal hover:text-gold transition-colors duration-300"
            >
              Contact
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={openLoginModal}
              className="text-charcoal hover:text-gold"
            >
              Login
            </Button>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={openSignupModal}
                className="bg-gold text-navy hover:bg-yellow-300 font-medium rounded-full px-6"
              >
                Sign Up
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
