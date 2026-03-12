import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "@/data/products";

const FeaturedProducts = () => {
  return (
    <section id="products" className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title mb-4"
          >
            Our Products
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-subtitle mx-auto"
          >
            Premium herbal powders sourced directly from organic farms across India.
          </motion.p>
        </div>
<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card group overflow-hidden"
            >
              <div className="aspect-square overflow-hidden rounded-t-2xl bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-28 sm:h-40 md:h-48 object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
              <div className="p-3 md:p-5">
                <h3 className="font-heading font-semibold text-xs text-foreground mb-1 md:text-sm">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground font-body mb-3">
                  {product.benefit}
                </p>
                <p className="text-sm font-heading font-semibold text-primary mb-4">
                  {product.priceRange}
                </p>
                <Link
                  to={`/product/${product.id}`}
                  className="inline-flex items-center gap-2 text-sm font-heading font-medium text-primary hover:gap-3 transition-all duration-300"
                >
                  View Details <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
