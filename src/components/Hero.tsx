
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Herbal powder with fresh leaves" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary-foreground/80 font-body text-sm tracking-[0.2em] uppercase mb-6"
        >
          Premium Herbal Bulk Supply
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-6"
        >
          Pure Herbal Powders
          <br />
          for Bulk Buyers
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-primary-foreground/80 font-body text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Direct from farmers to industries. Premium quality Neem, Amla, Moringa,
          Turmeric, and Ashwagandha powders supplied in bulk across India.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#products" className="btn-primary bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            Explore Products
          </a>
          <a href="#contact" className="btn-outline border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            Get Bulk Quote
          </a>
        </motion.div>
      </div>

      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary-foreground/20 rounded-full"
          style={{ left: `${15 + i * 18}%`, top: `${20 + (i % 3) * 25}%` }}
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </section>
  );
};

export default Hero;
