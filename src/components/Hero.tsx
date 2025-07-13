// import { Button } from "@/components/ui/button";
// import { ArrowRight, Phone } from "lucide-react";
// import heroImage from "@/assets/hero-interior.jpg";

// const Hero = () => (
//   <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
//     {/* background image */}
//     <div
//       className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//       style={{ backgroundImage: `url(${heroImage})` }}
//     >
//       <div className="absolute inset-0 bg-gradient-hero" />
//     </div>

//     {/* main text */}
//     <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 animate-fade-in-up">
//       <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-warm-white mb-6 leading-tight">
//         Sunil Singh Shaktawat
//       </h1>
//       <p className="text-xl sm:text-2xl lg:text-3xl text-warm-white/90 mb-4 font-light">
//         Interior Designer | Architecture Consultant
//       </p>
//       <p className="text-lg sm:text-xl text-warm-white/80 mb-8 max-w-2xl mx-auto">
//         "Transforming Spaces. Enhancing Lifestyles."
//       </p>
//       <p className="text-base sm:text-lg text-warm-white/70 mb-12 max-w-xl mx-auto">
//         Founder of S R Studio, Surat – Providing custom interior &amp; architecture
//         solutions.
//       </p>

//       {/* CTA buttons */}
//       <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//         {/* jump to portfolio */}
//         <Button asChild variant="hero" size="lg" className="text-lg px-8 py-6">
//           <a href="#portfolio">
//             View My Work
//             <ArrowRight className="ml-2 h-5 w-5" />
//           </a>
//         </Button>

//         {/* jump to contact */}
//         <Button asChild variant="elegant" size="lg">
//   <a href="#contact">
//     Get in Touch
//     <Phone className="ml-2 h-5 w-5" />
//   </a>
// </Button>

//       </div>
//     </div>

//     {/* scroll indicator */}
//     <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
//       <div className="w-6 h-10 border-2 border-warm-white/50 rounded-full flex justify-center">
//         <div className="w-1 h-3 bg-warm-white/70 rounded-full mt-2 animate-pulse" />
//       </div>
//     </div>
//   </div>
// );

// export default Hero;


import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroImage from "@/assets/hero-interior.jpg";

/**
 * Fully‑responsive Hero section
 * --------------------------------------------------------------
 * – Scales typography & spacing from mobile → 2XL screens.
 * – Uses a fixed background on wider viewports for subtle parallax.
 * – Maintains a minimum 80 vh height on very small devices, then
 *   fills the viewport on ≥ 640 px (sm) screens.
 * – Keeps the call‑to‑action buttons comfortably tappable on touch
 *   devices while preventing excessive size on desktops.
 */
const Hero = () => (
  <section
    id="hero"
    className="relative flex items-center justify-center overflow-hidden min-h-[80vh] sm:min-h-screen px-4 sm:px-6 lg:px-8"
  >
    {/* background image */}
    <div
      className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat sm:bg-fixed"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-hero" />
    </div>

    {/* main content */}
    <div className="relative z-10 w-full max-w-screen-xl text-center animate-fade-in-up">
      <h1 className="font-bold text-warm-white leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
        Sunil&nbsp;Singh&nbsp;Shaktawat
      </h1>

      <p className="font-light text-warm-white/90 mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
        Interior&nbsp;Designer&nbsp;|&nbsp;Architecture&nbsp;Consultant
      </p>

      <p className="text-warm-white/80 mt-4 mx-auto max-w-2xl text-base sm:text-lg md:text-xl lg:text-2xl">
        "Transforming&nbsp;Spaces.&nbsp;Enhancing&nbsp;Lifestyles."
      </p>

      <p className="text-warm-white/70 mt-6 mb-10 mx-auto max-w-xl text-sm sm:text-base md:text-lg">
        Founder of&nbsp;S&nbsp;R&nbsp;Studio, Surat – Providing custom interior &amp; architecture solutions.
      </p>

      {/* CTA buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        {/* jump to portfolio */}
        <Button asChild variant="hero" size="lg" className="px-8 py-5 text-base sm:text-lg">
          <a href="#portfolio" aria-label="View my work">
            View&nbsp;My&nbsp;Work
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </Button>

        {/* jump to contact */}
        <Button asChild variant="elegant" size="lg" className="px-8 py-5 text-base sm:text-lg">
          <a href="#contact" aria-label="Get in touch">
            Get&nbsp;in&nbsp;Touch
            <Phone className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </div>
    </div>

    {/* scroll indicator */}
    <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-warm-white/50 rounded-full flex justify-center">
        <div className="w-1 h-3 bg-warm-white/70 rounded-full mt-2 animate-pulse" />
      </div>
    </div>
  </section>
);

export default Hero;

