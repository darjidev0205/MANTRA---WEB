import { motion } from "framer-motion";
import { TrendingDown, Handshake, FlaskConical, Truck } from "lucide-react";

const features = [
  { icon: TrendingDown, title: "Bulk Advantage", desc: "The more you buy, the less you pay." },
  { icon: Handshake, title: "Ethically Sourced", desc: "Direct partnerships with farmers." },
  { icon: FlaskConical, title: "Lab Tested", desc: "Every batch tested for purity and safety." },
  { icon: Truck, title: "Fast Logistics", desc: "Reliable nationwide delivery." },
];

const WhyChoose = () => (
  <section id="why" className="section-padding bg-background">
    <div className="container-max">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title mb-4"
        >
          Why Choose Mantra
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-subtitle mx-auto"
        >
          Built on trust, quality, and scale — we are India's reliable herbal bulk partner.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-8 text-center group"
          >
            <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
              <f.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors duration-500" />
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground font-body">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChoose;
