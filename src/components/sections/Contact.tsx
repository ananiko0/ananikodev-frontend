import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import contactLinks from "@/data/contacts";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20" id="contact">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities,
            collaborations, or just having a chat about tech. Feel free to reach
            out!
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group"
              >
                <Card className="p-6 hover:shadow-lg transition-all  hover:-translate-y-1 duration-500 ease-in-out rounded-[4px]">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500 ease-in-out">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {link.name}
                      </p>
                      <p className="font-medium">{link.value}</p>
                    </div>
                  </div>
                </Card>
              </a>
            );
          })}
        </div>

        {/* Optional: Quick CTA */}
        <div className="text-center p-8 bg-muted/50">
          <p className="text-lg font-semibold mb-2">
            Currently Available for Opportunities
          </p>
          <p className="text-muted-foreground mb-4">
            Looking for full-stack or frontend roles
          </p>
          <Button asChild size="lg">
            <a href="mailto:your.email@example.com">
              <Mail className="mr-2 h-4 w-4" />
              Send Me an Email
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
