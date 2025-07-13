import { Card } from "@/components/ui/card";
import { 
  Home, 
  Building, 
  ChefHat, 
  Bed, 
  Sofa, 
  Utensils, 
  Hammer, 
  Palette 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Interior Design",
      description: "Complete interior design solutions for residential and commercial spaces"
    },
    {
      icon: Building,
      title: "Architecture Consultancy",
      description: "Professional architectural consultation and planning services"
    },
    {
      icon: ChefHat,
      title: "Modular Kitchens",
      description: "Custom modular kitchen designs with modern functionality"
    },
    {
      icon: Bed,
      title: "Bedrooms",
      description: "Elegant bedroom designs with comfortable and stylish layouts"
    },
    {
      icon: Sofa,
      title: "Living Rooms",
      description: "Beautiful living room designs that enhance your lifestyle"
    },
    {
      icon: Utensils,
      title: "Dining Areas",
      description: "Sophisticated dining spaces for memorable gatherings"
    },
    {
      icon: Hammer,
      title: "Renovation & Construction",
      description: "Complete renovation and construction management services"
    },
    {
      icon: Palette,
      title: "Painting & Finishing",
      description: "Professional painting, marble, and tile fitting services"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            Our Services
          </h2>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto">
            From concept to execution, we provide comprehensive design solutions 
            tailored to your unique vision and lifestyle needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title}
                className="p-6 bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105 group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-charcoal" />
                  </div>
                  <h3 className="text-lg font-semibold text-charcoal mb-3">
                    {service.title}
                  </h3>
                  <p className="text-medium-gray text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center animate-fade-in-up">
          <div className="bg-charcoal rounded-2xl p-8 text-warm-white">
            <h3 className="text-2xl font-bold mb-4">Complete Design Solutions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-gold-accent mb-2">Concept to Execution</h4>
                <p className="text-warm-white/90">End-to-end project management from initial design to final implementation</p>
              </div>
              <div>
                <h4 className="font-semibold text-gold-accent mb-2">Turnkey Solutions</h4>
                <p className="text-warm-white/90">Complete project delivery with quality assurance and timely completion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;