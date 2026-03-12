import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const badges = ["Lab Tested", "100% Natural", "Ethically Sourced", "Bulk Supply Experts"];

const TrustSection = () => (
  <section className="section-padding bg-muted">
    <div className="container-max">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title mb-4"
        >
          Trust & Quality
        </motion.h2>
      </div>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        {badges.map((badge, i) => (
          <motion.div
            key={badge}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card px-6 py-4 flex items-center gap-3"
          >
            <CheckCircle2 size={20} className="text-primary flex-shrink-0" />
            <span className="font-heading font-semibold text-sm text-foreground">{badge}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
