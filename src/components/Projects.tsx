import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, GraduationCap, Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative bg-secondary/20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Projects & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Hands-on experience building AI solutions and continuous learning
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group glass-card rounded-xl overflow-hidden hover:glow-effect transition-all duration-300"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
