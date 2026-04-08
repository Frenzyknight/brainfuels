import Image from "next/image";
import { Star } from "lucide-react";

export interface ProductCardProps {
  name: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  reviewCount: number;
  badge?: string;
}

function StarRating({
  rating,
  reviewCount,
}: {
  rating: number;
  reviewCount: number;
}) {
  return (
    <div className="flex items-center gap-1 shrink-0">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`size-3 ${
            i < Math.round(rating)
              ? "fill-current text-foreground"
              : "text-muted-foreground/40"
          }`}
        />
      ))}
      <span className="text-xs text-muted-foreground ml-0.5">
        ({reviewCount})
      </span>
    </div>
  );
}

export function ProductCard({
  name,
  price,
  description,
  image,
  rating,
  reviewCount,
  badge,
}: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-3/4 overflow-hidden rounded-2xl bg-[#e8e3de]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {badge && (
          <span className="absolute top-3 right-3 bg-amber-300 text-dark text-xs font-semibold px-3 py-1 rounded-full">
            {badge}
          </span>
        )}
      </div>
      <div className="mt-3 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-sm font-semibold truncate">
            {name} &middot; ${price}
          </p>
          <p className="text-xs text-muted-foreground italic mt-0.5">
            {description}
          </p>
        </div>
        <StarRating rating={rating} reviewCount={reviewCount} />
      </div>
    </div>
  );
}
