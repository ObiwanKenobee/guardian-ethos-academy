import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-secondary/50 to-background py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Empowering Humanity with Ethics & Innovation
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Shaping the Future of Digital Integrity, Security, and Responsible Innovation
          </p>
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => console.log("Sign up clicked")}
          >
            Join the Movement
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;