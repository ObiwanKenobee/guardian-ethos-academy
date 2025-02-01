import { Shield, Brain, Users, Network } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const focusAreas = [
  {
    icon: <Brain className="w-8 h-8 text-primary" />,
    title: "Digital Ethics",
    description: "Ensuring responsible AI development and ethical use of technology",
  },
  {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "Cybersecurity",
    description: "Protecting personal and organizational digital assets from evolving threats",
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Civic Engagement",
    description: "Empowering individuals to participate in democratic processes",
  },
  {
    icon: <Network className="w-8 h-8 text-primary" />,
    title: "Decentralized Governance",
    description: "Leveraging blockchain for transparent and fair decision-making",
  },
];

const CoreFocus = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Building a Future with Ethics and Innovation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {focusAreas.map((area, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/50 backdrop-blur-sm"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center transform hover:scale-110 transition-transform duration-200">
                  {area.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary">{area.title}</h3>
                <p className="text-muted-foreground">{area.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFocus;