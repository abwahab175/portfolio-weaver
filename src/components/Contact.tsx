import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "abwahab175@gmail.com",
    href: "mailto:abwahab175@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 332 2538335",
    href: "tel:+923322538335",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/abwahab175",
    href: "https://linkedin.com/in/abwahab175",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/abwahab175",
    href: "https://github.com/abwahab175",
  },
];

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

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

      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      className="py-24 relative bg-secondary/20"
      ref={sectionRef}
    >
      <div className="container mx-auto px-6">
        <div ref={titleRef} className="text-center mb-16 opacity-0">
          <h2 className="section-title">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Let's discuss how I can help bring your data science projects to
            life
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactLinks.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.label === "LinkedIn" || contact.label === "GitHub" ? "_blank" : undefined}
                rel={
                  contact.label === "LinkedIn" || contact.label === "GitHub"
                    ? "noopener noreferrer"
                    : undefined
                }
                className="glass-card rounded-xl p-6 text-center hover:glow-effect transition-all duration-300 group cursor-pointer opacity-0"
              >
                <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <contact.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">{contact.label}</h3>
                <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  {contact.value}
                </p>
              </a>
            ))}
          </div>

          <div ref={buttonRef} className="mt-12 text-center opacity-0">
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:abwahab175@gmail.com">
                <Send className="mr-2 h-5 w-5" />
                Send Me a Message
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
