import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-40"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4 animate-fade-up">
          Hello, I'm
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-fade-up-delay-1">
          <span className="text-gradient">Alex Morgan</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up-delay-2">
          DevOps Engineer — building scalable infrastructure, automating everything, and shipping fast.
        </p>

        <div className="flex items-center justify-center gap-4 animate-fade-up-delay-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 border border-primary/40 text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors"
          >
            View Work
          </a>
        </div>

        {/* Socials */}
        <div className="flex items-center justify-center gap-5 mt-10 animate-fade-up-delay-3">
          {[
            { icon: Github, href: "#", label: "GitHub" },
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            { icon: Mail, href: "#contact", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon size={22} />
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <a href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce">
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
