import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Guardian IO Academy transformed my understanding of ethical technology.",
    author: "Sarah Chen",
    role: "AI Ethics Researcher",
  },
  {
    quote: "The most comprehensive blockchain education I've encountered.",
    author: "Michael Rodriguez",
    role: "Blockchain Developer",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          What Our Learners Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/50 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-primary mb-4 animate-pulse" />
                <p className="text-lg mb-4 text-foreground">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold text-primary">{testimonial.author}</p>
                  <p className="text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;