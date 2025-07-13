import { Card } from "@/components/ui/card";
import { Award, MapPin, GraduationCap } from "lucide-react";
import profileImage from "@/assets/sunil-profile.jpeg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-soft-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="animate-fade-in">
            <div className="relative">
              <img
                src={profileImage}
                alt="Sunil Singh Shaktawat"
                className="w-full max-w-md mx-auto rounded-2xl shadow-elegant"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gold-accent rounded-full flex items-center justify-center shadow-hover">
                <Award className="h-12 w-12 text-charcoal" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-charcoal mb-6">
              About Sunil
            </h2>
            <p className="text-lg text-medium-gray mb-6 leading-relaxed">
              Sunil Singh Shaktawat, Founder of S R Studio, is known for blending functionality 
              with elegance in each design. With a Bachelor's in Interior Design and hands-on 
              experience across Surat, he ensures every project captures the client's vision.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6 bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300">
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-8 w-8 text-gold-accent mr-3" />
                  <h3 className="text-lg font-semibold text-charcoal">Education</h3>
                </div>
                <p className="text-medium-gray">Bachelor in Interior Design</p>
              </Card>
              
              <Card className="p-6 bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300">
                <div className="flex items-center mb-4">
                  <MapPin className="h-8 w-8 text-gold-accent mr-3" />
                  <h3 className="text-lg font-semibold text-charcoal">Location</h3>
                </div>
                <p className="text-medium-gray">Ambar Palace, Kamrej (Surat)</p>
              </Card>
            </div>

            <div className="bg-charcoal rounded-xl p-6 text-warm-white">
              <h3 className="text-xl font-semibold mb-3">Experience & Expertise</h3>
              <ul className="space-y-2 text-warm-white/90">
                <li>• Local project experience and site supervision</li>
                <li>• Complete design concept to execution</li>
                <li>• Specialization in residential and commercial spaces</li>
                <li>• Quality craftsmanship and attention to detail</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;