import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const programs = [
  {
    title: "Foundations of Ethical AI & Data Privacy",
    duration: "12 weeks",
    level: "Intermediate",
  },
  {
    title: "Blockchain for Social Good & Transparency",
    duration: "10 weeks",
    level: "Advanced",
  },
  {
    title: "Cybersecurity Fundamentals",
    duration: "8 weeks",
    level: "Beginner",
  },
  {
    title: "Decentralized Decision-Making",
    duration: "6 weeks",
    level: "Intermediate",
  },
];

const Programs = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Explore Our Programs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {programs.map((program, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/50 backdrop-blur-sm"
            >
              <CardHeader className="pb-4">
                <h3 className="text-xl font-semibold text-primary">{program.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">Duration: {program.duration}</p>
                <p className="text-muted-foreground">Level: {program.level}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => console.log("Explore courses clicked")}
          >
            Explore All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;