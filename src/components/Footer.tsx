import { Linkedin, Twitter, Youtube } from "lucide-react";
import NewsletterSignup from "./NewsletterSignup";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-accent">About</a></li>
              <li><a href="#" className="hover:text-accent">Programs</a></li>
              <li><a href="#" className="hover:text-accent">Partnerships</a></li>
              <li><a href="#" className="hover:text-accent">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-accent">Digital Ethics</a></li>
              <li><a href="#" className="hover:text-accent">Cybersecurity</a></li>
              <li><a href="#" className="hover:text-accent">Blockchain</a></li>
              <li><a href="#" className="hover:text-accent">Civic Tech</a></li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="mb-4">Get the latest updates on ethical technology and innovation.</p>
            <NewsletterSignup />
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex justify-between items-center">
            <p>&copy; 2024 Guardian IO Academy. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent"><Linkedin className="w-6 h-6" /></a>
              <a href="#" className="hover:text-accent"><Twitter className="w-6 h-6" /></a>
              <a href="#" className="hover:text-accent"><Youtube className="w-6 h-6" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;