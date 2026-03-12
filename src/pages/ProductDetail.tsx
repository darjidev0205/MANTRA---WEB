import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Package, CheckCircle2 } from "lucide-react";
import { products } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="section-title mb-4">Product Not Found</h1>
          <Link to="/" className="btn-primary">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Back link */}
        <div className="container-max px-4 sm:px-6 lg:px-8 py-6">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft size={16} /> Back to Products
          </Link>
        </div>

        {/* Product hero */}
        <div className="container-max px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="aspect-square rounded-3xl overflow-hidden bg-muted"
            >
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col justify-center"
            >
              <h1 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-2">
                {product.name}
              </h1>
              <p className="text-sm text-muted-foreground font-body mb-4">{product.benefit}</p>
              <p className="text-xl font-heading font-bold text-primary mb-6">{product.priceRange}</p>

              {/* Quantity options */}
              <div className="mb-6">
                <p className="text-sm font-heading font-semibold text-foreground mb-3">Bulk Pricing</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {Object.entries(product.prices).map(([qty, price]) => (
                    <div key={qty} className="bg-accent rounded-xl p-3 text-center">
                      <p className="text-xs text-muted-foreground font-body">{qty}kg</p>
                      <p className="font-heading font-bold text-primary">₹{price}</p>
                    </div>
                  ))}
                </div>
              </div>

              <a href="/#contact" className="btn-primary text-center">
                Request Quote
              </a>
            </motion.div>
          </div>
        </div>

        {/* Description & details */}
        <div className="bg-muted">
          <div className="container-max px-4 sm:px-6 lg:px-8 section-padding">
            <div className="grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2">
                <h2 className="font-heading font-bold text-xl text-foreground mb-4">Product Description</h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-8">{product.description}</p>

                <h3 className="font-heading font-bold text-lg text-foreground mb-3">Applications</h3>
                <div className="flex flex-wrap gap-2 mb-8">
                  {product.applications.map((app) => (
                    <span key={app} className="px-4 py-2 rounded-full bg-accent text-accent-foreground text-xs font-heading font-medium">
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-4">Packaging Options</h3>
                <div className="space-y-3">
                  {product.packaging.map((pkg) => (
                    <div key={pkg.qty} className="glass-card p-4 flex items-center gap-3">
                      <Package size={18} className="text-primary flex-shrink-0" />
                      <div>
                        <p className="font-heading font-semibold text-sm text-foreground">{pkg.qty}</p>
                        <p className="text-xs text-muted-foreground font-body">{pkg.type}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 space-y-2">
                  {["Lab Tested", "100% Natural", "Ethically Sourced"].map((t) => (
                    <div key={t} className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-primary" />
                      <span className="text-sm font-body text-foreground">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetail;
