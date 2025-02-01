import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-secondary to-white py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-text mb-6">
            Empowering Humanity with Ethics & Innovation
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Shaping the Future of Digital Integrity, Security, and Responsible Innovation
          </p>
          <Button 
            className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg rounded-lg"
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