import { Server, Cloud, GitBranch, Terminal } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    { icon: Cloud, label: "Cloud Architecture", desc: "AWS, GCP, Azure" },
    { icon: GitBranch, label: "CI/CD Pipelines", desc: "Jenkins, GitHub Actions" },
    { icon: Server, label: "Infrastructure as Code", desc: "Terraform, Ansible" },
    { icon: Terminal, label: "Containerization", desc: "Docker, Kubernetes" },
  ];

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="section-subheading">Passionate about automation & reliability</p>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-muted-foreground text-lg leading-relaxed text-center">
            I'm a DevOps Engineer with 3 years of experience designing, building, and maintaining
            cloud infrastructure and CI/CD pipelines. I thrive on automating repetitive tasks,
            improving deployment workflows, and ensuring systems are reliable and scalable. When
            I'm not shipping infrastructure code, you'll find me exploring new tools, contributing
            to open source, or writing about DevOps best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map(({ icon: Icon, label, desc }) => (
            <div
              key={label}
              className="glass-card glow-border p-6 text-center hover:scale-[1.03] transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{label}</h3>
              <p className="text-muted-foreground text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
