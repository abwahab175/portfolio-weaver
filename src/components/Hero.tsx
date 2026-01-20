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
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        imageRef.current,
        { opacity: 0, x: 120, scale: 0.95 },
        { opacity: 1, x: 0, scale: 1, duration: 1.2 }
      ).fromTo(
        textRef.current?.querySelectorAll(".animate-item") || [],
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.15, duration: 0.8 },
        "-=0.8"
      );

      gsap.to(scrollRef.current, {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-[#08182f]"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#08182f] via-[#0a1f3c] to-[#020b1a]" />

      <div className="relative z-10 container mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 items-center gap-10">
          {/* LEFT CONTENT */}
          <div ref={textRef} className="space-y-6">
            <p className="animate-item text-primary tracking-widest uppercase">
              Hi, I’m
            </p>

            <h1 className="animate-item text-5xl md:text-6xl font-extrabold leading-tight text-white">
              Abdul Wahab <br />
              <span className="text-primary">Memon</span>
            </h1>

            <h2 className="animate-item text-xl md:text-2xl text-primary font-semibold">
              Data Scientist & AI Engineer
            </h2>

            <p className="animate-item max-w-xl text-gray-300 leading-relaxed">
              Microsoft Certified Azure Data Scientist with 6+ years of
              experience in Healthcare AI, specializing in Computer Vision,
              NLP, and ML systems.
            </p>

            <div className="animate-item flex gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Mail className="mr-2 h-5 w-5" />
                Hire Me
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
                onClick={() => scrollToSection("contact")}
              >
                Let’s Talk
              </Button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div ref={imageRef} className="relative flex justify-center lg:justify-end">
            {/* Glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 bg-primary/40 blur-[120px] rounded-full" />
            </div>

            {/* Image */}
            <div className="relative w-80 md:w-[26rem] h-[28rem] overflow-hidden">
              <img
                src={profileImg}
                alt="Abdul Wahab Memon"
                className="w-full h-full object-cover object-top grayscale-[10%]"
              />

              {/* Blue overlay stripes */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-transparent mix-blend-screen" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll */}
      <div
        ref={scrollRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="h-8 w-8 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
