import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-warm-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-gold-accent">
              S R Studio
            </h3>
            <p className="text-warm-white/80 mb-6 leading-relaxed">
              Founded by Sunil Singh Shaktawat, S R Studio is your trusted partner 
              for exceptional interior design and architecture solutions in Surat. 
              We transform spaces into beautiful, functional environments.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/sunil.shaktawat.5" className="w-10 h-10 bg-gold-accent rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <Facebook className="h-5 w-5 text-charcoal" />
              </a>
              <a href="https://www.instagram.com/shaktawat.sunil/" className="w-10 h-10 bg-gold-accent rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <Instagram className="h-5 w-5 text-charcoal" />
              </a>
              {/* <a href="#" className="w-10 h-10 bg-gold-accent rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <Linkedin className="h-5 w-5 text-charcoal" />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold-accent">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-warm-white/80 hover:text-gold-accent transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-warm-white/80 hover:text-gold-accent transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-warm-white/80 hover:text-gold-accent transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-warm-white/80 hover:text-gold-accent transition-colors duration-300">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-warm-white/80 hover:text-gold-accent transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold-accent">
              Contact Info
            </h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-gold-accent mr-3" />
                <span className="text-warm-white/80 text-sm">+917600949591</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-gold-accent mr-3" />
                <span className="text-warm-white/80 text-sm">sunil.shaktawat@gmail.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 text-gold-accent mr-3 mt-0.5" />
                <span className="text-warm-white/80 text-sm">
                  Ambar Palace, Kamrej<br />Surat, Gujarat
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-warm-white/20 mt-8 pt-8 text-center">
          <p className="text-warm-white/60 text-sm">
            © 2024 S R Studio. All rights reserved. | Designed by Sunil Singh Shaktawat
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;