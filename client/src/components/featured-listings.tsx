import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Bed, Bath, Square, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedCard } from "@/components/ui/animated-card";
import { staggerChildren } from "@/lib/animations";
import type { Property } from "@shared/schema";

export default function FeaturedListings() {
  const { data: properties, isLoading } = useQuery<Property[]>({
    queryKey: ["/api/properties/featured"],
  });

  const openVideoModal = (propertyId: number) => {
    const modal = document.getElementById("videoModal");
    if (modal) {
      modal.classList.remove("hidden");
      document.body.style.overflow = "hidden";
      // Store property ID for video modal
      modal.setAttribute("data-property-id", propertyId.toString());
    }
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">Featured Properties</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-200 rounded-2xl h-96 animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="listings" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">Featured Properties</h2>
          <p className="text-xl text-warm-gray max-w-2xl mx-auto">
            Discover hand-picked premium properties that represent the epitome of luxury living
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {properties?.map((property, index) => (
            <AnimatedCard key={property.id} delay={index * 0.1}>
              <div className="relative overflow-hidden">
                <motion.img
                  src={property.imageUrl}
                  alt={property.title}
                  className="w-full h-64 object-cover transition-transform duration-500"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute top-4 left-4 bg-gold text-navy px-3 py-1 rounded-full text-sm font-semibold">
                  {property.badge}
                </div>
                <motion.button
                  onClick={() => openVideoModal(property.id)}
                  className="absolute top-4 right-4 bg-white/90 text-navy w-10 h-10 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="h-4 w-4" />
                </motion.button>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-poppins font-semibold mb-2">{property.title}</h3>
                <p className="text-warm-gray mb-3">{property.location}</p>
                <p className="text-3xl font-bold text-navy mb-4">
                  ${property.price.toLocaleString()}
                </p>
                
                <div className="flex items-center justify-between text-sm text-warm-gray mb-4">
                  <span className="flex items-center">
                    <Bed className="h-4 w-4 mr-1" /> {property.beds} Beds
                  </span>
                  <span className="flex items-center">
                    <Bath className="h-4 w-4 mr-1" /> {property.baths} Baths
                  </span>
                  <span className="flex items-center">
                    <Square className="h-4 w-4 mr-1" /> {property.sqft.toLocaleString()} sqft
                  </span>
                </div>
                
                <Button className="w-full bg-navy text-white hover:bg-charcoal">
                  View Details
                </Button>
              </div>
            </AnimatedCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
