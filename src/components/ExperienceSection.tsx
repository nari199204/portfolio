import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "DevOps Engineer",
    company: "Bluebash Pvt Ltd - Mohali, Punjab, India.",
    period: "September 2023 – Present",
    points: [
      " Owned end-to-end DevOps lifecycle in a startup environment, including infrastructure design, deployment, monitoring, and cost optimization ",
      " Managed and scaled Amazon EKS clusters running 10+ microservicesacross healthcare, AI voice, and e-commerce platforms, ensuring 99.9% uptime ",
      " Built and optimized CI/CD pipelines (Jenkins, GitHub Actions, ArgoCD) reducing deployment time by 40% ",
      "Automated infrastructure provisioning using Terraform, managing VPC, EKS, RDS, and IAM across multiple environments ",
      " Reduced AWS infrastructure cost by 20% through EC2 rightsizing, storage optimization, and resource cleanup strategies ",
      " Implemented monitoring and observability stack (Prometheus, Grafana, Loki, CloudWatch) reducing incident resolution time significantly ",
      " Deployed and maintained real-time AI voice infrastructure integrating LiveKit, Deepgram, and ElevenLabs for low-latency processing ",
      " Configured Karpenter for Kubernetes autoscaling, improving resource utilization and reducing compute overhead ",



    ],
  },
  {
    role: "Cloud Engineer",
    company: "Blackbuck Technologies Pvt Ltd - Hyderabad, Telangana, India.",
    period: "June 2023 - August 2023 ",
    points: [
      "Built automated CI/CD pipelines using GitHub Actions and Jenkins",
      "Created monitoring dashboards using Grafana improving operational visibility for production services", 
      "Containerized internal applications using Docker supporting migration toward microservices architecture",
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
