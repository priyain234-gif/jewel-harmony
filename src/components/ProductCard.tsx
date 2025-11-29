import { Card, CardContent } from "./ui/card";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  delay?: number;
}

const ProductCard = ({ image, title, description, delay = 0 }: ProductCardProps) => {
  return (
    <Card 
      className="group overflow-hidden border-border shadow-card hover:shadow-luxury transition-all duration-500 hover:scale-105 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardContent className="p-0">
        <div className="relative overflow-hidden aspect-square">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        <div className="p-6 bg-card">
          <h4 className="text-xl font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {title}
          </h4>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
