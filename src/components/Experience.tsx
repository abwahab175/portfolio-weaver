import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "IT Manager & PACS Administrator",
    company: "Neurospinal & Cancer Care Institute",
    location: "Karachi, Pakistan",
    period: "October 2018 – December 2023",
    highlights: [
      "Oversaw IT infrastructure planning, implementation, and maintenance for optimal performance and security",
      "Managed Picture Archiving and Communication System (PACS) for efficient medical image storage and retrieval",
      "Led integration of PACS with healthcare systems (Linear Accelerator, Mosaiq Server) for improved data flow",
      "Monitored system performance, conducted audits, and resolved issues to minimize downtime",
    ],
  },
  {
    title: "Junior Java Developer",
    company: "PACSLINK Corporation Pvt LTD.",
    location: "Lahore, Pakistan",
    period: "May 2017 – September 2018",
    highlights: [
      "Designed user-friendly applications for Hospital Management and PACS using Java Swing and JavaFX",
      "Created comprehensive reports for patient data and imaging records using JasperReports",
      "Managed and optimized Oracle 11g databases for efficient data storage and retrieval",
      "Integrated Java applications with existing healthcare systems to enhance interoperability",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            6+ years in healthcare IT, building robust systems and solutions
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0
                  ? "md:pr-[50%] md:text-right"
                  : "md:pl-[50%] md:text-left"
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-0 w-4 h-4 rounded-full bg-primary glow-effect ${
                  index % 2 === 0
                    ? "left-0 md:left-1/2 md:-translate-x-1/2"
                    : "left-0 md:left-1/2 md:-translate-x-1/2"
                }`}
              />

              <div
                className={`ml-8 md:ml-0 ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}
              >
                <div className="glass-card rounded-xl p-6 hover:glow-effect transition-all duration-300">
                  <div
                    className={`flex items-center gap-2 mb-2 text-primary ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    <Briefcase className="h-4 w-4" />
                    <span className="font-semibold">{exp.company}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3">{exp.title}</h3>

                  <div
                    className={`flex flex-wrap gap-4 text-sm text-muted-foreground mb-4 ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </span>
                  </div>

                  <ul
                    className={`space-y-2 text-muted-foreground text-sm ${
                      index % 2 === 0 ? "md:text-right" : ""
                    }`}
                  >
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="leading-relaxed">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
