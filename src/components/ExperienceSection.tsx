import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "DevOps Engineer",
    company: "CloudScale Inc.",
    period: "2023 – Present",
    points: [
      "Designed and maintained Kubernetes clusters serving 50+ microservices",
      "Reduced deployment time by 70% through optimized CI/CD pipelines",
      "Implemented infrastructure as code with Terraform across multi-cloud environments",
    ],
  },
  {
    role: "Junior DevOps Engineer",
    company: "TechFlow Solutions",
    period: "2021 – 2023",
    points: [
      "Built automated CI/CD pipelines using GitHub Actions and Jenkins",
      "Managed AWS infrastructure including EC2, RDS, S3, and CloudFront",
      "Set up monitoring and alerting with Prometheus and Grafana",
    ],
  },
  {
    role: "DevOps Intern",
    company: "StartupHub",
    period: "2021 (6 months)",
    points: [
      "Containerized legacy applications using Docker",
      "Assisted in migrating on-premise workloads to AWS",
      "Wrote automation scripts in Bash and Python",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="section-subheading">My professional journey so far</p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-16 md:pl-20">
                {/* Dot */}
                <div className="absolute left-4 md:left-6 top-1 w-4 h-4 rounded-full bg-primary glow-border border-2 border-primary" />

                <div className="glass-card p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-foreground text-lg">{exp.role}</h3>
                      <p className="text-primary text-sm font-medium flex items-center gap-1.5">
                        <Briefcase size={14} /> {exp.company}
                      </p>
                    </div>
                    <span className="text-muted-foreground text-sm mt-1 sm:mt-0">{exp.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.points.map((point, j) => (
                      <li key={j} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-primary mt-1.5 shrink-0">▹</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
