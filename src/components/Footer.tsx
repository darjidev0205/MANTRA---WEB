import { Leaf, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container-max section-padding pb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">  
            <Leaf size={20} />
            <span className="font-heading text-xl font-bold">MANTRA</span>
          </div>
          <p className="text-sm font-heading font-medium text-primary-foreground/70 mb-1">Pure. Powerful. Proven.</p>
          <p className="text-xs font-body text-primary-foreground/50">Your Bulk Partner in Natural Wellness</p>
           <p className="text-sm text-white/60">
              Direct from farmers to industries. Premium quality herbal powders for B2B buyers across India.
            </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-heading font-semibold text-sm mb-4">Quick Links</h4>
          <div className="space-y-2">
            {["Home", "Products", "Bulk Orders", "About", "Contact"].map((l) => (
              <a key={l} href="#" className="block text-sm font-body text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
       <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#4CAF50] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm text-white/60 mb-1">Email</div>
                  <a href="mailto:sales@mantra.com" className="text-white/90 hover:text-[#4CAF50] transition-colors">
                    sales@mantra.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#4CAF50] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm text-white/60 mb-1">Phone</div>
                  <a href="tel:+916351882923" className="text-white/90 hover:text-[#4CAF50] transition-colors">
                    +91 63518 82923
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#4CAF50] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm text-white/60 mb-1">Address</div>
                  <p className="text-white/90">
                    Industrial Area, Phase 2<br />
                    Mumbai, Maharashtra, India
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

      <div className="border-t border-primary-foreground/10 pt-6 text-center">
        <p className="text-xs font-body text-primary-foreground/40 hover:text-[#4CAF50] transition-colors">
          © {new Date().getFullYear()} Mantra Herbals. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
