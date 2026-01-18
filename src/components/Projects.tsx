import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Brain, GraduationCap, Award } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "TumorOnco - Brain Tumor Detection",
    subtitle: "Computer Vision & Machine Learning",
    period: "November 2023 – December 2023",
    organization: "Ministry of IT, MetaPi Technologies, Pakistan",
    description:
      "Developed a Flask-based web application for brain tumor detection and classification using computer vision and machine learning. Enabled users to upload medical images for automated classification, improving accessibility and diagnostic efficiency.",
    tags: ["Flask", "Computer Vision", "ML", "Medical Imaging"],
    icon: Brain,
    type: "project",
  },
  {
    title: "High Impact Skills Bootcamp",
    subtitle: "Data Science & Machine Learning",
    period: "July 2023 – November 2023",
    organization: "Ministry of IT, MetaPi Technologies, Pakistan",
    description:
      "Completed a four-month full-time intensive training program focused on Data Science and Machine Learning. Engaged in hands-on projects applying theoretical concepts to real-world scenarios.",
    tags: ["Data Science", "Machine Learning", "Python", "Project-Based"],
    icon: GraduationCap,
    type: "training",
  },
  {
    title: "Microsoft DP-100 Certification",
    subtitle: "Azure Data Science Solution",
    period: "January 2025",
    organization: "Microsoft",
    description:
      "Validated skills in deploying and managing machine learning models on Azure using ML pipelines, compute targets, and MLflow. Demonstrates expertise in designing end-to-end data science solutions.",
    tags: ["Azure", "ML Pipelines", "MLflow", "Cloud"],
    icon: Award,
    type: "certification",
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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
          { opacity: 0, y: 50, rotateX: 10 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="py-24 relative bg-secondary/20" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div ref={titleRef} className="text-center mb-16 opacity-0">
          <h2 className="section-title">
            Projects & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Hands-on experience building AI solutions and continuous learning
          </p>
        </div>

        <div ref={cardsRef} className="grid lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group glass-card rounded-xl overflow-hidden hover:glow-effect transition-all duration-300 opacity-0"
            >
              {/* Card Header */}
              <div className="p-6 pb-0">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <project.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-full ${
                      project.type === "project"
                        ? "bg-primary/20 text-primary"
                        : project.type === "training"
                        ? "bg-accent/20 text-accent"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {project.type === "project"
                      ? "Project"
                      : project.type === "training"
                      ? "Training"
                      : "Certification"}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-primary mb-2">{project.subtitle}</p>
                <p className="text-xs text-muted-foreground mb-4">
                  {project.period} • {project.organization}
                </p>
              </div>

              {/* Card Body */}
              <div className="px-6 pb-6">
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="skill-tag text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
