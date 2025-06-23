import { motion } from "framer-motion";
import { Building, TrendingUp, Briefcase, Home, CheckCircle } from "lucide-react";
import { staggerChildren, fadeInUp } from "@/lib/animations";

const loanProducts = [
  {
    icon: TrendingUp,
    title: "DSCR Loans",
    subtitle: "No Income Docs Required",
    description: "Qualify based on property income with DSCR ≥1.25. Perfect for investors.",
    features: ["No W-2s or tax returns", "Investor-focused underwriting", "FDM verified process"],
    badge: "No W-2s"
  },
  {
    icon: Briefcase,
    title: "Bank Statement Loans",
    subtitle: "Self-Employed Friendly",
    description: "12-24 months bank deposits accepted for income verification.",
    features: ["Self-employed entrepreneurs", "Business owners", "Flexible documentation"],
    badge: "Self-Employed"
  },
  {
    icon: Building,
    title: "LLC Mortgages",
    subtitle: "Entity-Based Lending",
    description: "Title and loan in business name for investment properties.",
    features: ["Business entity qualification", "Asset protection benefits", "Investment-focused"],
    badge: "LLC Ready"
  },
  {
    icon: Home,
    title: "Fix & Flip Loans",
    subtitle: "Fast-Close Solutions",
    description: "Quick financing for property flippers and rehabbers.",
    features: ["Fast closing process", "Rehab-friendly terms", "Short-term financing"],
    badge: "Fast Close"
  }
];

export default function LoanProducts() {
  return (
    <section id="loans" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">Loan Products Built for You</h2>
          <p className="text-xl text-warm-gray max-w-3xl mx-auto">
            Specialized financing solutions for investors, entrepreneurs, and self-employed professionals
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {loanProducts.map((product, index) => (
            <motion.div 
              key={product.title}
              className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              variants={fadeInUp}
              custom={index}
              whileHover={{ 
                y: -8, 
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="flex items-start justify-between mb-6">
                <motion.div 
                  className="bg-cream w-16 h-16 rounded-full flex items-center justify-center"
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: "hsl(45, 86%, 60%)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <product.icon className="h-8 w-8 text-navy" />
                </motion.div>
                <div className="bg-gold text-navy px-3 py-1 rounded-full text-sm font-semibold">
                  {product.badge}
                </div>
              </div>
              
              <h3 className="text-2xl font-poppins font-bold mb-2">{product.title}</h3>
              <p className="text-gold font-semibold mb-3">{product.subtitle}</p>
              <p className="text-warm-gray mb-6">{product.description}</p>
              
              <div className="space-y-2">
                {product.features.map((feature, idx) => (
                  <motion.div 
                    key={idx}
                    className="flex items-center text-sm text-charcoal"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-cream p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-poppins font-bold mb-4">Trusted Partners</h3>
            <p className="text-warm-gray mb-4">
              All applications are processed through our network of trusted lending partners, 
              ensuring reliable funding and competitive rates for our specialized loan programs.
            </p>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-navy font-semibold">Institutional Backing</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}