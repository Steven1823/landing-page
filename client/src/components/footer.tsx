import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" },
];

const propertyLinks = [
  "DSCR Loans",
  "Bank Statement", 
  "LLC Mortgages",
  "Fix & Flip",
];

const serviceLinks = [
  "Pre-Qualification",
  "DSCR Calculator",
  "Loan Processing", 
  "Investor Support",
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-poppins font-bold gradient-text mb-4">Kirril Mortgages</h3>
            <p className="text-gray-400 mb-4">
              Smart mortgage funnels for the self-made. Specialized financing backed by institutional partners.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-navy rounded-full flex items-center justify-center hover:bg-gold transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Loan Products</h4>
            <ul className="space-y-2 text-gray-400">
              {propertyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-gold transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-gold transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <p className="flex items-center">
                <Phone className="h-4 w-4 mr-2" /> +1 (571) 276-0986
              </p>
              <p className="flex items-center">
                <Mail className="h-4 w-4 mr-2" /> kirillrealtor@gmail.com
              </p>
              <p className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" /> Washington, DC Metro Area
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-gray-700 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>&copy; 2025 Kirril Mortgages. All rights reserved. | Privacy Policy | Terms of Service</p>
        </motion.div>
      </div>
    </footer>
  );
}