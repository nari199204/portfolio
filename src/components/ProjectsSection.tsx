import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Kickcall - AI Voice Assistant",
    desc: "AI Voice Assistant for healthcare platform, integrating LiveKit, Deepgram, and ElevenLabs for low-latency processing",
    tags: ["LiveKit", "Deepgram", "SOC 2", "HIPPA",  "AWS", "Kubernetes", "Docker", "Jenkins",  "Terraform"],
    live: "https://kickcall.ai",
  },
  {
    title: "Rawwine - Wine Retail ",
    desc: "Wine Retail platform for online wine sales, built with Ruby on Rails and PostgreSQL",
    tags: ["Grafana", "Prometheus", "ECS", "Docker" ,"Ruby on Rails" , "PostgreSQL"],
    live: "https://rawwine.com",
  },
  {
    title: "Itrust - Healthcare Platform",
    desc: "Healthcare platform for patient management, built with Ruby on Rails and PostgreSQL",
    tags: ["Ruby on Rails", "PostgreSQL", "AWS", "Kubernetes", "Docker", "Jenkins", "GitHub Actions", "Terraform"],
    live: "https://itrust.io",
  },

  {
    title: "Intrya - AI Interview Platform",
    desc: "AI Interview Platform for job seekers, built with Ruby on Rails and PostgreSQL",
    tags: ["node.js", "PostgreSQL", "AWS", "Kubernetes", "Docker", "Ingress"],
    live: "https://intrya.com",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subheading">Things I've  contributed to</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass-card glow-border p-6 hover:scale-[1.02] transition-transform duration-300 flex flex-col"
            >
              <h3 className="text-lg font-bold text-foreground mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 flex-1">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded bg-primary/10 text-primary font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {project.live && (
                  <a href={project.live} className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
