import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/* project images */
// ADD these 4 imports (give them any names you like)
import kitchen1 from "@/assets/kitchen-extra‑1.jpg";   
import kitchen2 from "@/assets/kitchen-extra‑2.jpeg";   
import kitchen3 from "@/assets/kitchen-extra‑3.jpg";   
import kitchen4 from "@/assets/kitchen-extra‑4.jpeg";

// bedrooom images
import bedroom1 from "@/assets/bedroom-1.jpeg";
import bedroom2 from "@/assets/bedroom-2.jpeg";
import bedroom3 from "@/assets/bedroom-3.jpeg";
import bedroom4 from "@/assets/bedroom-4.jpg";

// rooms images
import Room1 from "@/assets/room-1.jpg";
import Room2 from "@/assets/room-2.jpg";
import Room3 from "@/assets/room-3.jpg";
import Room4 from "@/assets/room-4.jpg";

// dining images
import Dining1 from "@/assets/dining-1.jpg";
import Dining2 from "@/assets/dining-2.jpg";
import Dining3 from "@/assets/dining-3.jpg";
import Dining4 from "@/assets/dining-4.jpg";

// bathroom images
import bath1 from "@/assets/bath-1.jpg";
import bath2 from "@/assets/bath-2.jpg";  
import bath3 from "@/assets/bath-3.jpg";
import bath4 from "@/assets/bath-4.jpg";

// wardrobe images

import wardrobe1 from "@/assets/wardrobe-1.jpg";
import wardrobe2 from "@/assets/wardrobe-2.jpeg";  
import wardrobe3 from "@/assets/wardrobe-3.jpg";
import wardrobe4 from "@/assets/wardrobe-4.jpg";

// wallpaper images
import wallpaper1 from "@/assets/wallpaper-1.jpg";  
import wallpaper2 from "@/assets/wallpaper-2.jpg";
import wallpaper3 from "@/assets/wallpaper-3.jpg";


// cieling images
import Cieling1 from "@/assets/cieling-1.jpg";
import Cieling2 from "@/assets/cieling-2.jpg"; 
import Cieling3 from "@/assets/cieling-3.jpg";
import Cieling4 from "@/assets/cieling-4.jpg";     

// curtain images
import curtain1 from "@/assets/curtain-1.jpg";    
import curtain2 from "@/assets/curtain-2.jpeg";
import curtain3 from "@/assets/curtain-3.jpg";

// sofa images
import sofa1 from "@/assets/sofa1.jpeg";
import sofa2 from "@/assets/sofa2.jpeg";
import sofa3 from "@/assets/sofa3.jpg";
import sofa4 from "@/assets/sofa4.jpg";

import kitchenImage from "@/assets/kitchen-project.jpg";
import bedroomImage from "@/assets/bedroom-project.jpg";
import livingRoomImage from "@/assets/livingroom-project.jpg";
import diningRoomImage from "@/assets/dining-room-project.jpg";
import wallpaperImage from "@/assets/wallpaper-project.jpg";
import bathroomImage from "@/assets/bathroom-project.jpg";
import Cielingimage from "@/assets/cieling-project.jpg";
import wardrobeImage from "@/assets/wardrobe-project.jpg";
import SofaImage from "@/assets/sofa-project.jpg";

import BalajiSite1 from "@/assets/Balajisite-1.jpeg";
import BalajiSite2 from "@/assets/Balajisite-2.jpeg";
import BalajiSite3 from "@/assets/Balajisite-3.jpeg";
import BalajiSite4 from "@/assets/Balajisite-4.jpeg";
import BalajiSite5 from "@/assets/Balajisite-5.jpeg";
import BalajiSite6 from "@/assets/Balajisite-6.jpeg";

const Portfolio = () => {
  /* modal selection state */
  const [selectedProject, setSelectedProject] = useState<
    null | typeof projects[0]
  >(null);

  /* portfolio data */
  const projects = [
    {
  title: "Modern Kitchen Design",
  category: "Modular Kitchen",
  image: kitchenImage,            // main thumbnail
  extraImages: [
    kitchen1,
    kitchen2,
    kitchen3,
    kitchen4,
  ],
  description:
    "Contemporary modular kitchen with sleek finishes and optimal functionality",
},

    {
      title: "Elegant Bedroom Suite",
      category: "Bedroom Design",
      image: bedroomImage,
      extraImages: [bedroom1, bedroom2, bedroom3, bedroom4],
      description:
        "Luxurious bedroom design with custom furniture and sophisticated lighting",
    },
    {
      title: "Luxury Living Room",
      category: "Living Space",
      image: livingRoomImage,
      extraImages: [Room1, Room2, Room3, Room4],
      description:
        "Modern living room design with contemporary furniture and elegant decor",
    },
    {
      title: "Elegant Dining Area",
      category: "Dining Room",
      image: diningRoomImage,
      extraImages: [Dining1, Dining2, Dining3, Dining4],
      description:
        "Sophisticated dining room with modern table and stylish lighting",
    },
    {
      title: "Curtain and Wallpaper Design",
      category: "Wall Designing",
      image: wallpaperImage,
      extraImages: [wallpaper1,curtain1, wallpaper2,curtain2, wallpaper3,curtain3 ],
      description:
        "Luxurious curtains and bespoke wallpapers that add depth, drama, and sophistication to any interior.",
    },
    {
      title: "Luxury Bathroom",
      category: "Bathroom Design",
      image: bathroomImage,
      extraImages: [bath1, bath2, bath3, bath4],
      description:
        "Premium bathroom design with marble finishes and modern fixtures",
    },
    {
      title: "POP Cieling Design",
      category: "Cieling Project",
      image: Cielingimage,
      extraImages: [Cieling1, Cieling2, Cieling3, Cieling4],
      description:
        "Contemporary POP ceilings with clean lines and creative lighting integrations for a modern, elevated look.",
    },
    {
      title: "Custom Wardrobe Design",
      category: "Storage Solutions",
      image: wardrobeImage,
      extraImages: [wardrobe1, wardrobe2, wardrobe3, wardrobe4 ],
      description:
        "Organized wardrobe and closet design with elegant cabinetry",
    },
    {
      title: "Lounge Area Design",
      category: "Relaxing Spaces",
      image: SofaImage,
      extraImages: [sofa1, sofa2, sofa3, sofa4],
      description:
        "Sophisticated lounge area designs that blend comfort and class for a truly elevated relaxation space.",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-soft-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            Our Portfolio
          </h2>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto">
            Explore our collection of beautifully designed spaces that showcase
            our commitment to excellence and attention to detail.
          </p>
        </div>

        {/* project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105 group animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    variant="elegant"
                    size="sm"
                    onClick={() => setSelectedProject(project)}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-gold-accent bg-gold-accent/10 px-3 py-1 rounded-full">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-charcoal mt-3 mb-2">
                  {project.title}
                </h3>
                <p className="text-medium-gray">{project.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* featured project block */}
        <div className="bg-charcoal rounded-2xl p-8 text-warm-white animate-fade-in-up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-gold-accent">
                Featured Project
              </h3>
              <h4 className="text-xl font-semibold mb-4">
                Balaji Architect Complex
              </h4>
              <p className="text-warm-white/90 mb-6 leading-relaxed">
                Our flagship commercial project showcasing complete glasswork
                installation, comprehensive interior design, and premium marble
                and tile fitting. This project demonstrates our capability to
                handle large‑scale commercial assignments with precision and
                quality.
              </p>
              {/* <Button variant="elegant">
                Learn More
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button> */}
            </div>

            {/* mini‑carousel */}
            <FeaturedSlider />
          </div>
        </div>
      </div>

      {/* view‑details modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="relative bg-warm-white rounded-2xl shadow-elegant max-w-3xl w-full p-8 animate-fade-in-up">
            <button
              aria-label="Close"
              className="absolute top-4 right-4 text-charcoal hover:text-gold-accent transition-colors"
              onClick={() => setSelectedProject(null)}
            >
              <X className="h-6 w-6" />
            </button>

            <h3 className="text-2xl lg:text-3xl font-bold text-charcoal mb-4">
              {selectedProject.title}
            </h3>
            <p className="text-medium-gray mb-6 leading-relaxed">
              {selectedProject.description}
            </p>

            {/* one‑slide‑at‑a‑time carousel */}
            <ModalSlider
              images={[
                selectedProject.image,
                ...(selectedProject.extraImages ?? []),
              ].slice(0, 4)}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;

/* ──────────────────────────────────────────────
   Featured mini‑carousel component
────────────────────────────────────────────── */
const FeaturedSlider = () => {
  const images = [BalajiSite1, BalajiSite2, BalajiSite3, BalajiSite4, BalajiSite5, BalajiSite6];
  const [index, setIndex] = useState(0);

  const prevSlide = () =>
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const nextSlide = () =>
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="relative">
      <img
        src={images[index]}
        alt={`Balaji Architect Complex ${index + 1}`}
        className="w-full h-80 object-cover rounded-xl shadow-elegant transition-opacity duration-300"
      />

      {/* badge */}
      {/* <div className="absolute -bottom-4 -right-4 bg-gold-accent text-charcoal px-4 py-2 rounded-lg font-semibold shadow-hover">
        Commercial Project
      </div> */}

      {/* arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous"
        className="absolute top-1/2 -left-5 -translate-y-1/2 bg-warm-white/80 hover:bg-warm-white rounded-full p-2 shadow-card"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next"
        className="absolute top-1/2 -right-5 -translate-y-1/2 bg-warm-white/80 hover:bg-warm-white rounded-full p-2 shadow-card"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
};

/* ──────────────────────────────────────────────
   One‑image‑at‑a‑time slider for the modal
────────────────────────────────────────────── */
const ModalSlider = ({ images }: { images: string[] }) => {
  const [idx, setIdx] = useState(0);
  const total = images.length || 1;

  const prev = () => setIdx((i) => (i === 0 ? total - 1 : i - 1));
  const next = () => setIdx((i) => (i === total - 1 ? 0 : i + 1));

  return (
    <div className="relative">
      <img
        src={images[idx]}
        alt={`slide ${idx + 1}`}
        className="w-full h-72 sm:h-80 object-cover rounded-xl shadow-card transition-opacity duration-300"
      />

      {/* arrows */}
      {total > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="absolute top-1/2 -left-5 -translate-y-1/2 bg-warm-white/80 hover:bg-warm-white rounded-full p-2 shadow-card transition"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="absolute top-1/2 -right-5 -translate-y-1/2 bg-warm-white/80 hover:bg-warm-white rounded-full p-2 shadow-card transition"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      {/* dot indicators */}
      {total > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
          {images.map((_, i) => (
            <span
              key={i}
              className={`block h-1.5 w-1.5 rounded-full ${
                i === idx ? "bg-gold-accent" : "bg-soft-gray"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
