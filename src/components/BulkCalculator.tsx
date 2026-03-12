import { useState } from "react";
import { motion } from "framer-motion";
import { products } from "@/data/products";

const quantities = [1, 5, 10, 25];

const BulkCalculator = () => {
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [selectedQty, setSelectedQty] = useState(1);
  const product = products[selectedProduct];
  const pricePerKg = product.prices[selectedQty] || product.prices[1];
  const total = pricePerKg * selectedQty;

  return (
    <section id="calculator" className="section-padding bg-muted">
      <div className="container-max">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title mb-4"
          >
            Bulk Price Calculator
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-subtitle mx-auto"
          >
            The more you buy, the less you pay. Select a product and quantity to see pricing.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto glass-card p-8 sm:p-10"
        >
          {/* Product selector */}
          <div className="mb-8">
            <label className="text-sm font-heading font-semibold text-foreground mb-3 block">Select Product</label>
            <div className="flex flex-wrap gap-2">
              {products.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedProduct(i)}
                  className={`px-4 py-2 rounded-full text-xs font-heading font-medium transition-all duration-300 ${
                    selectedProduct === i
                      ? "bg-primary text-primary-foreground"
                      : "bg-background border border-border text-muted-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  {p.name}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity selector */}
          <div className="mb-8">
            <label className="text-sm font-heading font-semibold text-foreground mb-3 block">Select Quantity</label>
            <div className="flex gap-3">
              {quantities.map((q) => (
                <button
                  key={q}
                  onClick={() => setSelectedQty(q)}
                  className={`flex-1 py-3 rounded-xl text-sm font-heading font-semibold transition-all duration-300 ${
                    selectedQty === q
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-background border border-border text-muted-foreground hover:border-primary"
                  }`}
                >
                  {q}kg
                </button>
              ))}
            </div>
          </div>

          {/* Price display */}
          <div className="bg-accent rounded-2xl p-6 text-center">
            <p className="text-sm text-muted-foreground font-body mb-1">Price per kg</p>
            <p className="text-4xl font-heading font-bold text-primary mb-2">₹{pricePerKg}</p>
            <p className="text-sm text-muted-foreground font-body">
              Total for {selectedQty}kg: <span className="font-semibold text-foreground">₹{total.toLocaleString()}</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BulkCalculator;
