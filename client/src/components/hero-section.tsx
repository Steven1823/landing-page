import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp, buttonHover } from "@/lib/animations";

export default function HeroSection() {
  const scrollToPrequalify = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-white to-gold/20" />
      
      {/* Floating house illustration */}
      <motion.div 
        className="absolute top-20 right-10 w-64 h-64 opacity-20 hidden lg:block"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative w-full h-full">
          <motion.div 
            className="absolute bottom-8 left-8 w-32 h-24 bg-navy rounded-lg shadow-xl"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute bottom-20 left-12 w-0 h-0 border-l-[48px] border-r-[48px] border-b-[64px] border-l-transparent border-r-transparent border-b-gold" />
          <motion.div 
            className="absolute bottom-12 left-16 w-8 h-12 bg-gold rounded-sm"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute bottom-16 left-24 w-6 h-6 bg-navy rounded-full" />
        </div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.h1 
            className="text-5xl md:text-7xl font-poppins font-bold mb-6"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Smart Mortgage Funnels for the{" "}
            <span className="gradient-text">Self-Made</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-warm-gray mb-8"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Built for flippers, investors, and entrepreneurs. No W-2s required.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div {...buttonHover}>
              <Button
                onClick={scrollToPrequalify}
                className="bg-navy text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-charcoal animate-glow"
                size="lg"
              >
                Start Pre-Qualification <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        onClick={scrollToPrequalify}
      >
        <ChevronDown className="h-8 w-8 text-warm-gray" />
      </motion.div>
    </section>
  );
}
