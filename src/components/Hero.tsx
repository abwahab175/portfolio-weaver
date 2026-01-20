import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/profile.jpg";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animations
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        imageRef.current,
        { opacity: 0, x: 100, scale: 0.9 },
        { opacity: 1, x: 0, scale: 1, duration: 1.2 }
      )
        .fromTo(
          textRef.current?.querySelectorAll(".animate-item") || [],
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, duration: 0.8, stagger: 0.15 },
          "-=0.8"
        )
        .fromTo(
          scrollRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          "-=0.2"
        );

      // Floating animation for scroll indicator
      gsap.to(scrollRef.current, {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      // Parallax on scroll
      gsap.to(imageRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      });

      gsap.to(textRef.current, {
        yPercent: 10,
        opacity: 0.3,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div ref={textRef} className="space-y-6 text-left">
            <p className="animate-item text-primary font-medium tracking-wide">
              Hi, I'm
            </p>
            
            <h1 className="animate-item text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-foreground">Abdul Wahab</span>{" "}
              <span className="text-gradient">Memon</span>
            </h1>
            
            <h2 className="animate-item text-xl sm:text-2xl md:text-3xl text-primary font-semibold">
              Data Scientist & AI Engineer
            </h2>
            
            <p className="animate-item text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed">
              Microsoft Certified Azure Data Scientist with 6+ years in healthcare IT, 
              specializing in ML/DL, Computer Vision, and NLP solutions that drive 
              real-world impact.
            </p>
            
            {/* CTA Buttons */}
            <div className="animate-item flex flex-wrap gap-4 pt-4">
              <Button variant="hero" size="lg" asChild>
                <a href="mailto:abwahab175@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Hire Me
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}>
                  Let's Talk
                </a>
              </Button>
            </div>
          </div>
          
          {/* Right Image */}
          <div ref={imageRef} className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-primary/50 to-primary/30 blur-3xl opacity-60 rounded-full" />
              <div className="absolute -inset-2 bg-gradient-to-t from-primary/40 to-transparent blur-2xl opacity-40" />
              
              {/* Profile image */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]">
                <img
                  src={profileImg}
                  alt="Abdul Wahab Memon"
                  className="w-full h-full object-cover object-top rounded-2xl shadow-2xl shadow-primary/20"
                />
                {/* Gradient overlay for stylized look */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent rounded-2xl" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0"
      >
        <button
          onClick={() => scrollToSection("about")}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
