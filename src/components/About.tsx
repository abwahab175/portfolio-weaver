import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Brain, Database, Eye, MessageSquare, Bot, Award } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    category: "Languages & Databases",
    items: ["Python", "SQL", "MySQL"],
    icon: Database,
  },
  {
    category: "Machine Learning",
    items: ["Scikit-Learn", "TensorFlow", "Keras", "PyTorch"],
    icon: Brain,
  },
  {
    category: "Computer Vision",
    items: ["OpenCV", "Object Detection", "Segmentation", "CNNs"],
    icon: Eye,
  },
  {
    category: "NLP",
    items: ["NLTK", "SpaCy", "Transformers", "Sentiment Analysis"],
    icon: MessageSquare,
  },
  {
    category: "Data Analysis",
    items: ["Pandas", "Numpy", "Matplotlib", "Seaborn", "Power BI"],
    icon: Database,
  },
  {
    category: "Generative AI",
    items: ["Chatbots", "AI Assistants", "RNNs"],
    icon: Bot,
  },
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const certRef = useRef<HTMLDivElement>(null);

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
        cardsRef.current?.children || [],
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        certRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: certRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="py-24 relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div ref={titleRef} className="text-center mb-16 opacity-0">
          <h2 className="section-title">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Building end-to-end AI solutions with real-world project experience
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="glass-card rounded-xl p-6 hover:glow-effect transition-all duration-300 opacity-0"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <skill.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span key={item} className="skill-tag text-xs">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certification Highlight */}
        <div
          ref={certRef}
          className="mt-12 glass-card rounded-xl p-8 text-center opacity-0"
        >
          <Award className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            Microsoft DP-100 Certified
          </h3>
          <p className="text-muted-foreground">
            Designing and Implementing a Data Science Solution on Azure
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
