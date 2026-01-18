import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    // Animate the icon
    if (iconRef.current) {
      gsap.to(iconRef.current, {
        rotate: 360,
        scale: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          setTheme(resolvedTheme === "dark" ? "light" : "dark");
          gsap.fromTo(
            iconRef.current,
            { rotate: -180, scale: 0 },
            { rotate: 0, scale: 1, duration: 0.3, ease: "back.out(1.7)" }
          );
        },
      });
    } else {
      setTheme(resolvedTheme === "dark" ? "light" : "dark");
    }
  };

  if (!mounted) {
    return (
      <button className="p-2 rounded-lg bg-secondary/50 w-10 h-10" aria-label="Toggle theme">
        <span className="sr-only">Toggle theme</span>
      </button>
    );
  }

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors duration-200 group"
      aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
    >
      <div ref={iconRef} className="relative w-5 h-5">
        {resolvedTheme === "dark" ? (
          <Sun className="h-5 w-5 text-primary group-hover:text-primary/80 transition-colors" />
        ) : (
          <Moon className="h-5 w-5 text-primary group-hover:text-primary/80 transition-colors" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
