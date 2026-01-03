import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Linkedin, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

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
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      className="py-24 relative bg-secondary/20"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Let's discuss how I can help bring your data science projects to
            life
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {contactLinks.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.label === "LinkedIn" ? "_blank" : undefined}
                rel={
                  contact.label === "LinkedIn"
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 text-center hover:glow-effect transition-all duration-300 group cursor-pointer"
              >
                <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <contact.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">{contact.label}</h3>
                <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  {contact.value}
                </p>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:abwahab175@gmail.com">
                <Send className="mr-2 h-5 w-5" />
                Send Me a Message
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
