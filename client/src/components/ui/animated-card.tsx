import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { hoverLift } from "@/lib/animations";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedCard({ children, className = "", delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      {...hoverLift}
    >
      <Card className={`overflow-hidden ${className}`}>
        {children}
      </Card>
    </motion.div>
  );
}
