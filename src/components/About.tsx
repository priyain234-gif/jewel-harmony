const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-warm-beige/30">
      <div className="container mx-auto max-w-4xl text-center animate-fade-in">
        <h3 className="text-4xl md:text-5xl font-serif font-bold mb-8 bg-gradient-gold bg-clip-text text-transparent">
          About Jewellery Hub
        </h3>
        <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
          <p>
            We craft jewellery that blends tradition and modern artistry. With decades of 
            craftsmanship excellence, Jewellery Hub stands as a symbol of trust, purity, 
            and timeless beauty.
          </p>
          <p>
            Each piece is meticulously designed to celebrate life's precious moments, from 
            weddings to everyday elegance. Our master artisans pour their passion into every 
            creation, ensuring unmatched quality and breathtaking designs.
          </p>
          <div className="flex flex-wrap justify-center gap-12 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-luxury bg-clip-text text-transparent mb-2">
                25+
              </div>
              <div className="text-muted-foreground">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-luxury bg-clip-text text-transparent mb-2">
                10,000+
              </div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-luxury bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-muted-foreground">Pure Gold</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
