import Image from "next/image";
import { AnnouncementBar } from "@/components/announcement-bar";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ProductCard } from "@/components/product-card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop All | BRAINFUEL",
  description: "Browse our full range of functional mushroom products.",
};

const products = {
  trifectaKit: {
    name: "The Trifecta Kit",
    price: 85,
    description: "The $60 Gummy Trio with 12% savings",
    image: "/images/pink-gummies.jpeg",
    rating: 5,
    reviewCount: 71,
  },
  chocolateDuo: {
    name: "The Chocolate Delights Duo",
    price: 42,
    description: "For Energy, Focus & Good Mood",
    image: "/images/powder-bowl.jpeg",
    rating: 5,
    reviewCount: 14,
  },
  focusGummies: {
    name: "Focus Mushroom Gummy Delights",
    price: 32,
    description: "For Clean, Energized Productivity*",
    image: "/images/enoki-mushrooms.jpeg",
    rating: 5,
    reviewCount: 18,
  },
  chillGummies: {
    name: "Chill Mushroom Gummy Delights",
    price: 32,
    description: "For Happy Calm & Less Stress*",
    image: "/images/brain-mushroom.jpeg",
    rating: 4,
    reviewCount: 19,
  },
  sleepGummies: {
    name: "Sleep Mushroom Gummy Delights",
    price: 32,
    description: "For Deep & Rejuvenating ZZs*",
    image: "/images/gummies-ice.jpeg",
    rating: 5,
    reviewCount: 28,
  },
  inTheZone: {
    name: "In the Zone Chocolate Delights",
    price: 23,
    description: "For focus, energy & good mood",
    image: "/images/mushroom-sculpture.jpeg",
    rating: 5,
    reviewCount: 3,
  },
  discoveryKit: {
    name: "The Discovery Kit",
    price: 115,
    description: "The ultimate kit from AM to PM with 23% savings",
    image: "/images/powder-bowl.jpeg",
    rating: 5,
    reviewCount: 8,
  },
  matchaChocolate: {
    name: "Matcha Chocolate Delights",
    price: 23,
    description: "For Clean Energy, Calm Focus & Good Mood",
    image: "/images/enoki-mushrooms.jpeg",
    rating: 5,
    reviewCount: 7,
    badge: "Bestseller",
  },
};

export default function ShopPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="flex flex-col gap-4 md:gap-6 px-4 md:px-6 py-4 md:py-6">
        {/* Row 1: 3-col — 3 product cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <ProductCard {...products.trifectaKit} />
          <ProductCard {...products.chocolateDuo} />
          <ProductCard {...products.inTheZone} />
        </div>

        {/* Row 2: 3-col — product | lifestyle | product */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <ProductCard {...products.focusGummies} />
          <div className="relative aspect-3/4 overflow-hidden rounded-2xl">
            <Image
              src="/images/lime-closeup.jpeg"
              alt="Natural ingredients"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <ProductCard {...products.sleepGummies} />
        </div>

        {/* Row 3: 2-col (40/60) — product | lifestyle */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-4 md:gap-6">
          <ProductCard {...products.matchaChocolate} />
          <div className="relative aspect-square md:aspect-auto overflow-hidden rounded-2xl">
            <Image
              src="/images/lions-mane.jpeg"
              alt="Functional mushrooms"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </div>
        </div>

        {/* Row 4: 2-col (60/40) — lifestyle | product */}
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-4 md:gap-6">
          <div className="relative aspect-square md:aspect-auto overflow-hidden rounded-2xl">
            <Image
              src="/images/woman-gummies.jpeg"
              alt="Enjoying functional mushroom gummies"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </div>
          <ProductCard {...products.discoveryKit} />
        </div>
      </main>
      <Footer />
    </>
  );
}
