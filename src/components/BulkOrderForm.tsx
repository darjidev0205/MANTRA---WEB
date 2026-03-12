import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const BulkOrderForm = () => {
  const [form, setForm] = useState({
    name: "", company: "", product: "", quantity: "", phone: "", email: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you within 24 hours.");
    setForm({ name: "", company: "", product: "", quantity: "", phone: "", email: "", message: "" });
  };

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all";

  return (
    <section id="contact" className="section-padding bg-muted">
      <div className="container-max">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-title mb-4"
            >
              Request Wholesale Quote
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-subtitle mx-auto"
            >
              Fill out the form and our team will respond within 24 hours.
            </motion.p>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-card p-8 sm:p-10 space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input placeholder="Your Name" value={form.name} onChange={update("name")} required className={inputClass} />
              <input placeholder="Company Name" value={form.company} onChange={update("company")} className={inputClass} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <select value={form.product} onChange={update("product")} required className={inputClass}>
                <option value="">Product Required</option>
                <option>Neem Powder</option>
                <option>Amla Powder</option>
                <option>Moringa Powder</option>
                <option>Turmeric Powder</option>
                <option>Ashwagandha Powder</option>
              </select>
              <input placeholder="Quantity Needed (e.g., 25kg)" value={form.quantity} onChange={update("quantity")} required className={inputClass} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input type="tel" placeholder="Phone Number" value={form.phone} onChange={update("phone")} required className={inputClass} />
              <input type="email" placeholder="Email" value={form.email} onChange={update("email")} required className={inputClass} />
            </div>
            <textarea placeholder="Additional Message" value={form.message} onChange={update("message")} rows={4} className={inputClass} />
            <button type="submit" className="btn-primary w-full">
              Request Wholesale Quote
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default BulkOrderForm;
