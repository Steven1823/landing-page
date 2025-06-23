import { motion } from "framer-motion";
import { Crown, Users, Shield } from "lucide-react";
import { staggerChildren, fadeInUp } from "@/lib/animations";

const features = [
  {
    icon: Crown,
    title: "Premium Properties",
    description: "Curated selection of the finest luxury properties in prime locations worldwide"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Dedicated professionals with decades of experience in luxury real estate"
  },
  {
    icon: Shield,
    title: "Trusted Service",
    description: "Comprehensive support from initial viewing to final transaction and beyond"
  }
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-20 bg-cream">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">Why Choose PremiumHomes</h2>
          <p className="text-xl text-warm-gray max-w-2xl mx-auto">
            Experience unparalleled service and expertise in luxury real estate
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              className="text-center group"
              variants={fadeInUp}
              custom={index}
            >
              <motion.div 
                className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg transition-all duration-300"
                whileHover={{ 
                  scale: 1.1, 
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)" 
                }}
              >
                <feature.icon className="h-8 w-8 text-gold" />
              </motion.div>
              <h3 className="text-2xl font-poppins font-semibold mb-4">{feature.title}</h3>
              <p className="text-warm-gray">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
