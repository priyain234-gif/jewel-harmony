import ProductCard from "./ProductCard";

const Collections = () => {
  const products = [
    {
      image: "https://images.unsplash.com/photo-1600185365385-59dea6c427cf?auto=format&fit=crop&w=800&q=80",
      title: "Bridal Gold Set",
      description: "Traditional craftsmanship for your special day.",
    },
    {
      image: "https://images.unsplash.com/photo-1617038220319-fd7234326d37?auto=format&fit=crop&w=800&q=80",
      title: "Diamond Collection",
      description: "Modern elegance in every sparkle.",
    },
    {
      image: "https://images.unsplash.com/photo-1616401784845-180c0ada502b?auto=format&fit=crop&w=800&q=80",
      title: "Silver Essentials",
      description: "Minimalistic designs for everyday beauty.",
    },
  ];

  return (
    <section id="collections" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h3 className="text-4xl md:text-5xl font-serif font-bold mb-4 bg-gradient-luxury bg-clip-text text-transparent">
            Our Signature Collections
          </h3>
          <p className="text-lg text-muted-foreground">
            Inspired by luxury brands like Joyalukkas & Kanishk
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              {...product}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
