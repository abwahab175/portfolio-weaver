import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
          © {new Date().getFullYear()} Abdul Wahab Memon.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
