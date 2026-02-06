import { motion } from "framer-motion";
const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

export function ScrollReveal({ children, className, ...props }) {
  return (
    <motion.div
      initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function Appear({ children, className, ...props }) {
  return (
    <motion.div
      initial={isMobile ? { opacity: 1, y: 0 } : { y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
