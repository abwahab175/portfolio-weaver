import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Database, Eye, MessageSquare, Bot, Award } from "lucide-react";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Building end-to-end AI solutions with real-world project experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card rounded-xl p-6 hover:glow-effect transition-all duration-300"
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
            </motion.div>
          ))}
        </div>

        {/* Certification Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 glass-card rounded-xl p-8 text-center"
        >
          <Award className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            Microsoft DP-100 Certified
          </h3>
          <p className="text-muted-foreground">
            Designing and Implementing a Data Science Solution on Azure
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
