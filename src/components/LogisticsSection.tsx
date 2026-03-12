import { motion } from "framer-motion";
import { MapPin, Package, Clock } from "lucide-react";

const LogisticsSection = () => (
  <section className="section-padding bg-background">
    <div className="container-max">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title mb-6">
            Reliable Bulk Supply
            <br />
            Across India
          </h2>
          <p className="section-subtitle mb-8">
            We provide large-scale logistics support for industries nationwide. From 1kg sample orders to 25-tonne shipments, our supply chain is built for scale.
          </p>
          <div className="space-y-4">
            {[
              { icon: MapPin, text: "Pan-India delivery network" },
              { icon: Package, text: "Custom packaging solutions" },
              { icon: Clock, text: "On-time delivery guarantee" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                  <Icon size={18} className="text-primary" />
                </div>
                <span className="font-body text-sm text-foreground">{text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-accent rounded-3xl p-12 flex items-center justify-center"
        >
          <div className="text-center">
            <div className="text-6xl mb-4">🇮🇳</div>
            <p className="font-heading font-bold text-2xl text-foreground mb-2">Nationwide Delivery</p>
            <p className="text-sm text-muted-foreground font-body">All major cities & industrial hubs</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default LogisticsSection;
