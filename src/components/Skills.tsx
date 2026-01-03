import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "Python", level: 95 },
  { name: "Machine Learning", level: 90 },
  { name: "TensorFlow / Keras", level: 85 },
  { name: "PyTorch", level: 80 },
  { name: "Computer Vision (OpenCV)", level: 88 },
  { name: "NLP / Transformers", level: 85 },
  { name: "SQL / MySQL", level: 90 },
  { name: "Pandas / NumPy", level: 92 },
  { name: "Power BI", level: 75 },
  { name: "Azure ML", level: 80 },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative bg-secondary/20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Skills <span className="text-gradient">Proficiency</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Technical expertise measured by years of hands-on experience
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-x-12 gap-y-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium text-foreground">{skill.name}</span>
                <span className="text-primary font-semibold">{skill.level}%</span>
              </div>
              <div className="h-3 bg-secondary/50 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
