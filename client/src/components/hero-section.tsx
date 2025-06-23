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
      
      {/* Moving houses background */}
      <div className="absolute inset-0 opacity-10">
        {/* House 1 - Top right */}
        <motion.div 
          className="absolute top-16 right-20 w-32 h-32"
          animate={{ 
            x: [0, -20, 0],
            y: [-10, 10, -10] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <div className="relative w-full h-full">
            <motion.div 
              className="absolute bottom-4 left-4 w-16 h-12 bg-navy rounded-lg"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute bottom-12 left-6 w-0 h-0 border-l-[24px] border-r-[24px] border-b-[32px] border-l-transparent border-r-transparent border-b-gold" />
            <motion.div 
              className="absolute bottom-6 left-8 w-4 h-6 bg-gold rounded-sm"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        {/* House 2 - Middle left */}
        <motion.div 
          className="absolute top-1/3 left-16 w-24 h-24"
          animate={{ 
            x: [0, 15, 0],
            y: [10, -10, 10] 
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        >
          <div className="relative w-full h-full">
            <motion.div 
              className="absolute bottom-3 left-3 w-12 h-9 bg-charcoal rounded-lg"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
            <div className="absolute bottom-9 left-4 w-0 h-0 border-l-[18px] border-r-[18px] border-b-[24px] border-l-transparent border-r-transparent border-b-navy" />
            <motion.div 
              className="absolute bottom-5 left-6 w-3 h-4 bg-warm-gold rounded-sm"
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </div>
        </motion.div>

        {/* House 3 - Bottom right */}
        <motion.div 
          className="absolute bottom-32 right-32 w-28 h-28"
          animate={{ 
            x: [-10, 10, -10],
            y: [0, -15, 0] 
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        >
          <div className="relative w-full h-full">
            <motion.div 
              className="absolute bottom-4 left-4 w-14 h-10 bg-navy rounded-lg"
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            />
            <div className="absolute bottom-10 left-5 w-0 h-0 border-l-[21px] border-r-[21px] border-b-[28px] border-l-transparent border-r-transparent border-b-gold" />
            <motion.div 
              className="absolute bottom-6 left-7 w-3 h-5 bg-gold rounded-sm"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
            <div className="absolute bottom-7 left-12 w-3 h-3 bg-charcoal rounded-full" />
          </div>
        </motion.div>

        {/* House 4 - Top left */}
        <motion.div 
          className="absolute top-24 left-32 w-20 h-20"
          animate={{ 
            x: [5, -5, 5],
            y: [-5, 15, -5] 
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 3
          }}
        >
          <div className="relative w-full h-full">
            <motion.div 
              className="absolute bottom-2 left-2 w-10 h-8 bg-charcoal rounded-lg"
              animate={{ scale: [1, 1.12, 1] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
            <div className="absolute bottom-8 left-3 w-0 h-0 border-l-[15px] border-r-[15px] border-b-[20px] border-l-transparent border-r-transparent border-b-navy" />
            <motion.div 
              className="absolute bottom-4 left-5 w-2 h-4 bg-warm-gold rounded-sm"
              animate={{ opacity: [0.2, 0.9, 0.2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            />
          </div>
        </motion.div>

        {/* House 5 - Center right */}
        <motion.div 
          className="absolute top-1/2 right-12 w-36 h-36 hidden lg:block"
          animate={{ 
            x: [-15, 15, -15],
            y: [8, -8, 8] 
          }}
          transition={{ 
            duration: 9, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1.5
          }}
        >
          <div className="relative w-full h-full">
            <motion.div 
              className="absolute bottom-6 left-6 w-18 h-14 bg-navy rounded-lg"
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <div className="absolute bottom-16 left-8 w-0 h-0 border-l-[27px] border-r-[27px] border-b-[36px] border-l-transparent border-r-transparent border-b-gold" />
            <motion.div 
              className="absolute bottom-9 left-10 w-4 h-7 bg-gold rounded-sm"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
            />
            <div className="absolute bottom-11 left-16 w-4 h-4 bg-charcoal rounded-full" />
          </div>
        </motion.div>
      </div>

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
