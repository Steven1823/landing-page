import { motion, useMotionValue, useTransform } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp, buttonHover } from "@/lib/animations";
import { useEffect } from "react";

export default function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Create parallax transforms for different houses
  const house1X = useTransform(mouseX, [0, 1000], [0, 30]);
  const house1Y = useTransform(mouseY, [0, 1000], [0, 20]);
  
  const house2X = useTransform(mouseX, [0, 1000], [0, -25]);
  const house2Y = useTransform(mouseY, [0, 1000], [0, 15]);
  
  const house3X = useTransform(mouseX, [0, 1000], [0, 20]);
  const house3Y = useTransform(mouseY, [0, 1000], [0, -18]);
  
  const house4X = useTransform(mouseX, [0, 1000], [0, -15]);
  const house4Y = useTransform(mouseY, [0, 1000], [0, 25]);
  
  const house5X = useTransform(mouseX, [0, 1000], [0, 35]);
  const house5Y = useTransform(mouseY, [0, 1000], [0, -22]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

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
        {/* House 1 - Modern Colonial */}
        <motion.div 
          className="absolute top-8 right-16 w-64 h-64"
          style={{
            x: house1X,
            y: house1Y
          }}
        >
          <div className="relative w-full h-full">
            {/* Main house structure */}
            <div className="absolute bottom-10 left-10 w-44 h-32 bg-gradient-to-b from-slate-200 to-slate-300 rounded-sm shadow-xl">
              {/* Brick texture lines */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-100 to-red-200 opacity-60 rounded-sm" />
              <div className="absolute top-3 left-0 right-0 h-px bg-red-300 opacity-40" />
              <div className="absolute top-8 left-0 right-0 h-px bg-red-300 opacity-40" />
              <div className="absolute top-13 left-0 right-0 h-px bg-red-300 opacity-40" />
              <div className="absolute top-18 left-0 right-0 h-px bg-red-300 opacity-40" />
              <div className="absolute top-23 left-0 right-0 h-px bg-red-300 opacity-40" />
              <div className="absolute top-28 left-0 right-0 h-px bg-red-300 opacity-40" />
            </div>
            
            {/* Roof */}
            <div className="absolute bottom-32 left-12 w-0 h-0 border-l-[56px] border-r-[56px] border-b-[38px] border-l-transparent border-r-transparent border-b-gray-700" />
            <div className="absolute bottom-34 left-14 w-0 h-0 border-l-[52px] border-r-[52px] border-b-[34px] border-l-transparent border-r-transparent border-b-gray-600" />
            
            {/* Front door */}
            <motion.div 
              className="absolute bottom-10 left-16 w-10 h-20 bg-gradient-to-b from-amber-800 to-amber-900 rounded-t-sm"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute top-4 left-2 w-2 h-2 bg-yellow-400 rounded-full" />
            </motion.div>
            
            {/* Windows */}
            <div className="absolute bottom-22 left-12 w-8 h-8 bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-gray-400">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-400" />
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-400" />
            </div>
            <div className="absolute bottom-22 left-34 w-8 h-8 bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-gray-400">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-400" />
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-400" />
            </div>
            
            {/* Chimney */}
            <div className="absolute bottom-36 left-38 w-5 h-12 bg-gradient-to-b from-red-600 to-red-700" />
            
            {/* Porch light */}
            <motion.div 
              className="absolute bottom-26 left-8 w-3 h-5 bg-yellow-300 rounded-full opacity-60"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        {/* House 2 - Modern Townhouse */}
        <motion.div 
          className="absolute top-1/4 left-8 w-52 h-52"
          style={{
            x: house2X,
            y: house2Y
          }}
        >
          <div className="relative w-full h-full">
            {/* Main structure */}
            <div className="absolute bottom-6 left-6 w-32 h-26 bg-gradient-to-b from-stone-300 to-stone-400 shadow-xl">
              {/* Modern siding texture */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 opacity-50" />
              <div className="absolute top-2 left-0 right-0 h-px bg-gray-300 opacity-60" />
              <div className="absolute top-5 left-0 right-0 h-px bg-gray-300 opacity-60" />
              <div className="absolute top-8 left-0 right-0 h-px bg-gray-300 opacity-60" />
              <div className="absolute top-11 left-0 right-0 h-px bg-gray-300 opacity-60" />
              <div className="absolute top-14 left-0 right-0 h-px bg-gray-300 opacity-60" />
              <div className="absolute top-17 left-0 right-0 h-px bg-gray-300 opacity-60" />
              <div className="absolute top-20 left-0 right-0 h-px bg-gray-300 opacity-60" />
              <div className="absolute top-23 left-0 right-0 h-px bg-gray-300 opacity-60" />
            </div>
            
            {/* Flat modern roof */}
            <div className="absolute bottom-30 left-4 w-36 h-3 bg-gradient-to-b from-gray-800 to-gray-900" />
            
            {/* Large front window */}
            <div className="absolute bottom-12 left-10 w-12 h-10 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-gray-400">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-400" />
              <div className="absolute left-1/3 top-0 bottom-0 w-0.5 bg-gray-400" />
              <div className="absolute left-2/3 top-0 bottom-0 w-0.5 bg-gray-400" />
            </div>
            
            {/* Modern door */}
            <motion.div 
              className="absolute bottom-6 left-26 w-6 h-16 bg-gradient-to-b from-gray-700 to-gray-800"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute top-5 left-1 w-1 h-1 bg-silver rounded-full" />
            </motion.div>
            
            {/* Side windows */}
            <div className="absolute bottom-20 left-30 w-5 h-5 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-gray-400">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-400" />
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-400" />
            </div>
            
            {/* Entrance light */}
            <motion.div 
              className="absolute bottom-22 left-22 w-2.5 h-3 bg-yellow-200 rounded-sm opacity-70"
              animate={{ opacity: [0.5, 0.9, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        {/* House 3 - Victorian Style */}
        <motion.div 
          className="absolute bottom-20 right-20 w-56 h-56"
          style={{
            x: house3X,
            y: house3Y
          }}
        >
          <div className="relative w-full h-full">
            {/* Main house body */}
            <div className="absolute bottom-10 left-10 w-36 h-28 bg-gradient-to-b from-yellow-100 to-yellow-200 shadow-xl">
              {/* Victorian wood siding */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-50 to-amber-100 opacity-70" />
              <div className="absolute top-3 left-0 right-0 h-px bg-amber-200 opacity-80" />
              <div className="absolute top-6 left-0 right-0 h-px bg-amber-200 opacity-80" />
              <div className="absolute top-9 left-0 right-0 h-px bg-amber-200 opacity-80" />
              <div className="absolute top-12 left-0 right-0 h-px bg-amber-200 opacity-80" />
              <div className="absolute top-15 left-0 right-0 h-px bg-amber-200 opacity-80" />
              <div className="absolute top-18 left-0 right-0 h-px bg-amber-200 opacity-80" />
              <div className="absolute top-21 left-0 right-0 h-px bg-amber-200 opacity-80" />
              <div className="absolute top-24 left-0 right-0 h-px bg-amber-200 opacity-80" />
            </div>
            
            {/* Steep Victorian roof */}
            <div className="absolute bottom-32 left-12 w-0 h-0 border-l-[48px] border-r-[48px] border-b-[54px] border-l-transparent border-r-transparent border-b-slate-700" />
            <div className="absolute bottom-34 left-14 w-0 h-0 border-l-[44px] border-r-[44px] border-b-[50px] border-l-transparent border-r-transparent border-b-slate-600" />
            
            {/* Decorative gable */}
            <div className="absolute bottom-28 left-22 w-12 h-9 bg-gradient-to-b from-white to-gray-100">
              <div className="absolute top-0 left-3 w-6 h-3 bg-gradient-to-b from-purple-200 to-purple-300" />
            </div>
            
            {/* Victorian front door with details */}
            <motion.div 
              className="absolute bottom-10 left-18 w-8 h-18 bg-gradient-to-b from-green-800 to-green-900"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute top-3 left-1.5 w-5 h-9 bg-gradient-to-b from-green-700 to-green-800" />
              <div className="absolute top-5 left-1 w-1.5 h-1.5 bg-brass rounded-full" />
              <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-red-400" />
            </motion.div>
            
            {/* Bay window */}
            <div className="absolute bottom-18 left-12 w-9 h-9 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-gray-500">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-500" />
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-500" />
              <div className="absolute top-1.5 left-1.5 w-6 h-3 bg-gradient-to-r from-yellow-100 to-yellow-200 opacity-60" />
            </div>
            
            {/* Side windows */}
            <div className="absolute bottom-21 left-30 w-6 h-6 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-gray-500">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-500" />
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-500" />
            </div>
            
            {/* Ornate chimney */}
            <div className="absolute bottom-36 left-33 w-5 h-15 bg-gradient-to-b from-red-700 to-red-800">
              <div className="absolute top-0 left-0 w-5 h-2 bg-red-600" />
            </div>
            
            {/* Porch light */}
            <motion.div 
              className="absolute bottom-28 left-15 w-3 h-5 bg-yellow-200 rounded-full opacity-70"
              animate={{ opacity: [0.4, 0.9, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        {/* House 4 - Craftsman Bungalow */}
        <motion.div 
          className="absolute top-16 left-20 w-48 h-48"
          style={{
            x: house4X,
            y: house4Y
          }}
        >
          <div className="relative w-full h-full">
            {/* Main bungalow structure */}
            <div className="absolute bottom-6 left-6 w-32 h-22 bg-gradient-to-b from-emerald-100 to-emerald-200 shadow-xl">
              {/* Craftsman wood details */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-green-100 opacity-60" />
              <div className="absolute top-3 left-0 right-0 h-px bg-green-200 opacity-70" />
              <div className="absolute top-8 left-0 right-0 h-px bg-green-200 opacity-70" />
              <div className="absolute top-13 left-0 right-0 h-px bg-green-200 opacity-70" />
              <div className="absolute top-18 left-0 right-0 h-px bg-green-200 opacity-70" />
            </div>
            
            {/* Low-pitched gable roof */}
            <div className="absolute bottom-26 left-10 w-0 h-0 border-l-[38px] border-r-[38px] border-b-[25px] border-l-transparent border-r-transparent border-b-gray-600" />
            <div className="absolute bottom-28 left-12 w-0 h-0 border-l-[34px] border-r-[34px] border-b-[22px] border-l-transparent border-r-transparent border-b-gray-500" />
            
            {/* Front porch */}
            <div className="absolute bottom-6 left-3 w-38 h-5 bg-gradient-to-b from-stone-200 to-stone-300" />
            
            {/* Craftsman columns */}
            <div className="absolute bottom-11 left-6 w-3 h-10 bg-gradient-to-b from-stone-400 to-stone-500" />
            <div className="absolute bottom-11 left-32 w-3 h-10 bg-gradient-to-b from-stone-400 to-stone-500" />
            
            {/* Front door with sidelights */}
            <motion.div 
              className="absolute bottom-6 left-16 w-6 h-16 bg-gradient-to-b from-amber-700 to-amber-800"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute top-3 left-1 w-4 h-6 bg-gradient-to-b from-amber-600 to-amber-700" />
              <div className="absolute top-6 left-1.5 w-1 h-1 bg-brass rounded-full" />
            </motion.div>
            
            {/* Sidelight windows */}
            <div className="absolute bottom-12 left-12 w-3 h-10 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-gray-400">
              <div className="absolute top-1/3 left-0 right-0 h-0.5 bg-gray-400" />
              <div className="absolute top-2/3 left-0 right-0 h-0.5 bg-gray-400" />
            </div>
            <div className="absolute bottom-12 left-26 w-3 h-10 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-gray-400">
              <div className="absolute top-1/3 left-0 right-0 h-0.5 bg-gray-400" />
              <div className="absolute top-2/3 left-0 right-0 h-0.5 bg-gray-400" />
            </div>
            
            {/* Large front windows */}
            <div className="absolute bottom-16 left-10 w-8 h-6 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-gray-400">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-400" />
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-400" />
            </div>
            <div className="absolute bottom-16 left-24 w-8 h-6 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-gray-400">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-400" />
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-400" />
            </div>
            
            {/* Porch light fixture */}
            <motion.div 
              className="absolute bottom-20 left-4 w-2.5 h-4 bg-yellow-200 rounded-sm opacity-60"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        {/* House 5 - Contemporary Estate */}
        <motion.div 
          className="absolute top-1/3 right-4 w-72 h-72 hidden lg:block"
          style={{
            x: house5X,
            y: house5Y
          }}
        >
          <div className="relative w-full h-full">
            {/* Main contemporary structure */}
            <div className="absolute bottom-12 left-12 w-48 h-32 bg-gradient-to-b from-gray-100 to-gray-200 shadow-xl">
              {/* Modern stucco texture */}
              <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-50 opacity-80" />
              <div className="absolute top-5 left-0 right-0 h-px bg-gray-200 opacity-50" />
              <div className="absolute top-12 left-0 right-0 h-px bg-gray-200 opacity-50" />
              <div className="absolute top-19 left-0 right-0 h-px bg-gray-200 opacity-50" />
              <div className="absolute top-26 left-0 right-0 h-px bg-gray-200 opacity-50" />
            </div>
            
            {/* Flat contemporary roof with overhang */}
            <div className="absolute bottom-42 left-10 w-52 h-5 bg-gradient-to-b from-gray-800 to-gray-900 shadow-xl" />
            <div className="absolute bottom-38 left-12 w-48 h-2 bg-gray-700" />
            
            {/* Glass facade section */}
            <div className="absolute bottom-12 left-20 w-32 h-26 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-gray-300">
              <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-300" />
              <div className="absolute top-13 left-0 right-0 h-0.5 bg-gray-300" />
              <div className="absolute top-20 left-0 right-0 h-0.5 bg-gray-300" />
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300" />
              <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-gray-300" />
              <div className="absolute left-24 top-0 bottom-0 w-0.5 bg-gray-300" />
            </div>
            
            {/* Modern entrance */}
            <motion.div 
              className="absolute bottom-12 left-12 w-12 h-26 bg-gradient-to-b from-charcoal to-gray-900"
              animate={{ opacity: [0.9, 1, 0.9] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute top-10 left-3 w-6 h-12 bg-gradient-to-b from-gray-700 to-gray-800" />
              <div className="absolute top-13 left-2 w-2 h-2 bg-silver rounded-full" />
            </motion.div>
            
            {/* Side wing */}
            <div className="absolute bottom-12 left-52 w-18 h-18 bg-gradient-to-b from-stone-200 to-stone-300">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 opacity-60" />
            </div>
            
            {/* Contemporary windows */}
            <div className="absolute bottom-26 left-22 w-12 h-6 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-gray-300">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300" />
            </div>
            <div className="absolute bottom-26 left-38 w-12 h-6 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-gray-300">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300" />
            </div>
            
            {/* Upper level windows */}
            <div className="absolute bottom-36 left-26 w-10 h-5 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-gray-300" />
            <div className="absolute bottom-36 left-38 w-10 h-5 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-gray-300" />
            
            {/* Landscaping elements */}
            <div className="absolute bottom-8 left-16 w-3 h-3 bg-green-400 rounded-full opacity-60" />
            <div className="absolute bottom-8 left-48 w-3 h-3 bg-green-400 rounded-full opacity-60" />
            <div className="absolute bottom-8 left-60 w-3 h-3 bg-green-500 rounded-full opacity-60" />
            
            {/* Modern exterior lighting */}
            <motion.div 
              className="absolute bottom-32 left-8 w-3 h-6 bg-yellow-100 rounded-sm opacity-50"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute bottom-20 left-64 w-2.5 h-5 bg-yellow-100 rounded-sm opacity-50"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
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
