const skills = [
  { category: "Cloud & Infrastructure", items: ["AWS (EC2, S3, ECS, Lambda)", "Google Cloud Platform", "Azure", "Terraform", "Ansible", "CloudFormation"] },
  { category: "Containers & Orchestration", items: ["Docker", "Kubernetes", "Helm", "Docker Compose", "ECS/Fargate", "ArgoCD"] },
  { category: "CI/CD & Automation", items: ["GitHub Actions", "Jenkins", "GitLab CI", "CircleCI", "Bash/Python Scripting", "Make"] },
  { category: "Monitoring & Observability", items: ["Prometheus", "Grafana", "Datadog", "ELK Stack", "CloudWatch", "PagerDuty"] },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="section-subheading">Tools & technologies I work with daily</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((group) => (
            <div key={group.category} className="glass-card p-6">
              <h3 className="font-semibold text-primary mb-4">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-md bg-primary/10 text-foreground text-sm font-medium border border-primary/20 hover:border-primary/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
