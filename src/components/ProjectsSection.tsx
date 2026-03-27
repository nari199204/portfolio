import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "K8s Auto-Scaler",
    desc: "Custom Kubernetes autoscaler that adjusts pod replicas based on real-time metrics from Prometheus, reducing infrastructure costs by 35%.",
    tags: ["Kubernetes", "Go", "Prometheus", "Helm"],
    github: "#",
    live: "#",
  },
  {
    title: "CI/CD Pipeline Framework",
    desc: "Reusable GitHub Actions workflow templates for multi-environment deployments with automated testing, security scanning, and rollback support.",
    tags: ["GitHub Actions", "Docker", "Terraform", "Python"],
    github: "#",
  },
  {
    title: "Infrastructure Dashboard",
    desc: "Real-time monitoring dashboard combining Grafana, Prometheus, and custom APIs to visualize cloud resource usage and costs.",
    tags: ["Grafana", "Prometheus", "React", "Node.js"],
    github: "#",
    live: "#",
  },
  {
    title: "Log Aggregation Pipeline",
    desc: "Centralized logging solution using ELK Stack with custom Logstash filters, processing 10M+ events/day with sub-second search.",
    tags: ["Elasticsearch", "Logstash", "Kibana", "AWS"],
    github: "#",
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
          <p className="section-subheading">Things I've built & contributed to</p>
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
                {project.github && (
                  <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors">
                    <Github size={18} />
                  </a>
                )}
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
