import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const skillsContainerRef = useRef<HTMLDivElement>(null);

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

      const skillItems = skillsContainerRef.current?.querySelectorAll(".skill-item");
      const progressBars = skillsContainerRef.current?.querySelectorAll(".skill-progress");

      if (skillItems) {
        gsap.fromTo(
          skillItems,
          { opacity: 0, x: (i) => (i % 2 === 0 ? -40 : 40) },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: skillsContainerRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      if (progressBars) {
        progressBars.forEach((bar, index) => {
          const level = skills[index].level;
          gsap.fromTo(
            bar,
            { width: "0%" },
            {
              width: `${level}%`,
              duration: 1.2,
              delay: 0.3 + index * 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: skillsContainerRef.current,
                start: "top 75%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" className="py-24 relative bg-secondary/20" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div ref={titleRef} className="text-center mb-16 opacity-0">
          <h2 className="section-title">
            Skills <span className="text-gradient">Proficiency</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Technical expertise measured by years of hands-on experience
          </p>
        </div>

        <div ref={skillsContainerRef} className="max-w-4xl mx-auto grid md:grid-cols-2 gap-x-12 gap-y-6">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-item opacity-0">
              <div className="flex justify-between mb-2">
                <span className="font-medium text-foreground">{skill.name}</span>
                <span className="text-primary font-semibold">{skill.level}%</span>
              </div>
              <div className="h-3 bg-secondary/50 rounded-full overflow-hidden">
                <div
                  className="skill-progress h-full rounded-full bg-gradient-to-r from-primary to-primary/60"
                  style={{ width: "0%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
