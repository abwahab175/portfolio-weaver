import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            <span className="text-gradient">Education</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card rounded-xl p-8 text-center hover:glow-effect transition-all duration-300">
            <div className="inline-flex items-center justify-center p-4 rounded-full bg-primary/10 mb-6">
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
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
