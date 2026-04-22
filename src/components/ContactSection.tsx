import { Linkedin, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  const contact = {
   
    phone: "+91 8790298266",
    phoneLink: "+918790298266",
    linkedin: "https://www.linkedin.com/in/lakshmi-narayana-nunna/",
    email: "narayana.cloudengineer@gmail.com",
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="section-subheading">Reach out directly</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="glass-card p-8">
            <p className="text-muted-foreground text-center mb-8">
              I am open to DevOps and cloud opportunities. Feel free to connect with me directly.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <a
                href={`mailto:${contact.email}`}
                className="border border-border rounded-lg p-4 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2 text-primary">
                  <Mail size={18} />
                  <span className="font-semibold">Email</span>
                </div>
                <p className="text-sm text-muted-foreground whitespace-nowrap">{contact.email}</p>
              </a>

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="border border-border rounded-lg p-4 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2 text-primary">
                  <Linkedin size={18} />
                  <span className="font-semibold">LinkedIn</span>
                </div>
                <p className="text-sm text-muted-foreground">linkedin.com/in/lakshmi-narayana-nunna</p>
              </a>

              <a
                href={`tel:${contact.phoneLink}`}
                className="border border-border rounded-lg p-4 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2 text-primary">
                  <Phone size={18} />
                  <span className="font-semibold">Phone</span>
                </div>
                <p className="text-sm text-muted-foreground">{contact.phone}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
