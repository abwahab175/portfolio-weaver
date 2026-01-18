import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Mail, Linkedin, Phone, ChevronDown, Github, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        tagRef.current,
        { opacity: 0, scale: 0.9, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.8 }
      )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.4"
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(
          buttonsRef.current?.children || [],
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
          "-=0.3"
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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Hero background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div>
          <div className="mb-6">
            <span
              ref={tagRef}
              className="skill-tag inline-block mb-4 opacity-0"
            >
              Microsoft Certified Azure Data Scientist
            </span>
          </div>

          <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold mb-4 opacity-0">
            <span className="text-foreground">Abdul Wahab</span>{" "}
            <span className="text-gradient">Memon</span>
          </h1>

          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 opacity-0"
          >
            Data Science & AI Professional with 6+ years in healthcare IT,
            specializing in ML/DL, Computer Vision, and NLP solutions.
          </p>

          {/* Contact Links */}
          <div
            ref={buttonsRef}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Button variant="hero" size="lg" asChild className="opacity-0">
              <a href="mailto:abwahab175@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild className="opacity-0">
              <a
                href="https://linkedin.com/in/abwahab175"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild className="opacity-0">
              <a href="tel:+923322538335">
                <Phone className="mr-2 h-5 w-5" />
                Call Me
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild className="opacity-0">
              <a
                href="https://github.com/abwahab175"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild className="opacity-0">
              <a href="/Abdul_Wahab_Resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Resume
              </a>
            </Button>
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
      </div>
    </section>
  );
};

export default Hero;
