import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="px-4 md:px-6 pt-4">
      <div className="relative h-[85vh] md:h-[90vh] w-full overflow-hidden rounded-2xl">
        <Image
          src="/images/lions-mane.jpeg"
          alt="Functional mushrooms"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 rounded-2xl" />

        <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-14 pb-12 lg:pb-16">
          <div className="max-w-md">
            <p className="text-white text-lg md:text-xl lg:text-2xl font-medium leading-snug">
              Mental clarity, elevated calm and deeper sleep, powered by
              Mushrooms. Functional delights made by neuroscientists.
            </p>
            <Button
              variant="outline"
              className="mt-6 rounded-full border-white text-white bg-transparent hover:bg-white hover:text-dark px-6 py-2 text-sm font-semibold transition-all"
            >
              Shop Now
            </Button>
          </div>
        </div>

        <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 bg-dark/80 text-white text-xs font-medium px-4 py-2 rounded-full flex items-center gap-2 backdrop-blur-sm">
          JOIN THE BRAINFUEL CLUB &middot; SAVE 15%{" "}
          <span className="text-sm">&#10040;</span>
        </div>
      </div>
    </section>
  );
}
