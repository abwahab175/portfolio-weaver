import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen && mobileMenuRef.current) {
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      );
      gsap.fromTo(
        mobileMenuRef.current.querySelectorAll("button, a"),
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.05, ease: "power2.out" }
      );
    }
  }, [isMobileMenuOpen]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass-card py-4" : "py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a
            href="#"
            className="text-xl font-bold text-gradient"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            AWM
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                {link.label}
              </button>
            ))}
            <ThemeToggle />
            <Button variant="hero" size="sm" asChild>
              <a href="mailto:abwahab175@gmail.com">Hire Me</a>
            </Button>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              className="text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg pt-24 md:hidden"
        >
          <div className="container mx-auto px-6 flex flex-col gap-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-2xl font-semibold text-foreground hover:text-primary transition-colors text-left"
              >
                {link.label}
              </button>
            ))}
            <Button variant="hero" size="lg" className="mt-4" asChild>
              <a href="mailto:abwahab175@gmail.com">Hire Me</a>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
