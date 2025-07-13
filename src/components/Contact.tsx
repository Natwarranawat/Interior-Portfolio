import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";

const Contact = () => {
  /* form state */
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  /* WhatsApp submit */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const msgLines = [
      "New enquiry from portfolio website:",
      "",
      `Name: ${form.name}`,
      form.email ? `Email: ${form.email}` : null,
      `Phone: ${form.phone}`,
      "Project details:",
      form.project,
    ].filter(Boolean); // remove null if email blank

    const url =
      "https://wa.me/917600029591?text=" + encodeURIComponent(msgLines.join("\n"));
    window.open(url, "_blank");
  };

  /* info cards */
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Number",
      detail: "+91 76000 29591",
      label: "Call Now",
      href: "tel:+917600029591",
    },
    {
      icon: Phone,
      title: "Alternate Number",
      detail: "+91 76009 49591",
      label: "Call Now",
      href: "tel:+917600949591",
    },
    {
      icon: Mail,
      title: "Email Address",
      detail: "sunil.shaktawat@gmail.com",
      label: "Send Email",
      href: "mailto:sunil.shaktawat@gmail.com",
    },
    {
      icon: MapPin,
      title: "Studio Location",
      detail: "Ambar Palace, Kamrej (Surat)",
      label: "Get Directions",
      href: "https://www.google.com/maps/search/?api=1&query=Ambar+Palace+Kamrej+Surat",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Chat",
      detail: "Quick Response Available",
      label: "Chat on WhatsApp",
      href: "https://wa.me/917600029591?text=Hi%20Sunil%2C%20I%27d%20like%20to%20discuss%20an%20interior%20project",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto">
            Ready to transform your space? Let’s discuss your vision and bring
            your dream interior to life with our expert design solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* contact form */}
          <div className="animate-fade-in">
            <Card className="p-8 shadow-elegant">
              <h3 className="text-2xl font-bold text-charcoal mb-6">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Your Name
                    </label>
                    <Input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      className="border-soft-gray focus:border-gold-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Email Address (optional)
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="border-soft-gray focus:border-gold-accent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Phone Number
                  </label>
                  <Input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                    className="border-soft-gray focus:border-gold-accent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Project Details
                  </label>
                  <Textarea
                    name="project"
                    value={form.project}
                    onChange={handleChange}
                    placeholder="Tell us about your project requirements…"
                    rows={4}
                    required
                    className="border-soft-gray focus:border-gold-accent resize-none"
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* info cards
          <div className="animate-fade-in-up">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 mb-8">
              {contactInfo.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={item.title + idx}
                    className="p-6 shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105 group"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gold-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-6 w-6 text-charcoal" />
                      </div>

                      <div className="flex-1">
                        <h4 className="font-semibold text-charcoal">
                          {item.title}
                        </h4>
                        <p className="text-medium-gray text-sm">{item.detail}</p>
                      </div>

                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="text-gold-accent hover:bg-gold-accent/10"
                      >
                        <a href={item.href} target="_blank" rel="noopener">
                          {item.label}
                        </a>
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div> */}

          {/* info cards */}
<div className="animate-fade-in-up">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6 mb-8">
    {contactInfo.map((item, idx) => {
      const Icon = item.icon;
      return (
        <Card
          key={item.title + idx}
          className="p-5 sm:p-6 shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105 group"
          style={{ animationDelay: `${idx * 0.1}s` }}
        >
          {/* flex column on mobile, row from sm: */}
          <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            {/* icon */}
            <div className="w-12 h-12 bg-gold-accent rounded-full flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Icon className="h-6 w-6 text-charcoal" />
            </div>

            {/* text */}
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-charcoal break-words">
                {item.title}
              </h4>
              <p className="text-medium-gray text-sm break-words">
                {item.detail}
              </p>
            </div>

            {/* action */}
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="text-gold-accent hover:bg-gold-accent/10 sm:self-auto self-start mt-4 sm:mt-0"
            >
              <a href={item.href} target="_blank" rel="noopener">
                {item.label}
              </a>
            </Button>
          </div>
        </Card>
      );
    })}
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
