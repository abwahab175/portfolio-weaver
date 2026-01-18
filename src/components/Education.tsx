import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Animate the icon with a bounce
      const icon = cardRef.current?.querySelector(".edu-icon");
      if (icon) {
        gsap.fromTo(
          icon,
          { scale: 0, rotation: -180 },
          {
            scale: 1,
            rotation: 0,
            duration: 0.8,
            delay: 0.3,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="education" className="py-24 relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div ref={titleRef} className="text-center mb-16 opacity-0">
          <h2 className="section-title">
            <span className="text-gradient">Education</span>
          </h2>
        </div>

        <div ref={cardRef} className="max-w-2xl mx-auto opacity-0">
          <div className="glass-card rounded-xl p-8 text-center hover:glow-effect transition-all duration-300">
            <div className="edu-icon inline-flex items-center justify-center p-4 rounded-full bg-primary/10 mb-6">
              <GraduationCap className="h-10 w-10 text-primary" />
            </div>

            <h3 className="text-2xl font-bold mb-2">University of Sindh</h3>
            <p className="text-lg text-primary mb-4">
              Bachelor of Science in Information Technology
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                January 2011 – December 2014
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Jamshoro, Pakistan
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
