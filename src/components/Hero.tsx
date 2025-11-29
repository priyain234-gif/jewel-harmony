import { Button } from "./ui/button";
import heroImage from "@/assets/hero-jewellery.jpg";

const Hero = () => {
  const scrollToCollections = () => {
    const element = document.getElementById("collections");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury jewellery collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl animate-fade-in">
        <h2 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-foreground drop-shadow-lg">
          Elegant. Timeless.{" "}
          <span className="bg-gradient-luxury bg-clip-text text-transparent">
            Yours.
          </span>
        </h2>
        <p className="text-xl md:text-2xl text-foreground/90 mb-8 font-light">
          Premium jewellery crafted with passion and heritage.
        </p>
        <Button
          onClick={scrollToCollections}
          size="lg"
          className="bg-gradient-gold text-white px-8 py-6 text-lg shadow-luxury hover:shadow-glow transition-all hover:scale-105"
        >
          Explore Collections
        </Button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
