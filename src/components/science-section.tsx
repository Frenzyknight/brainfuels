import Image from "next/image";
import { Button } from "@/components/ui/button";

export function ScienceSection() {
  return (
    <section className="px-4 md:px-6 py-4 md:py-6">
      <div className="grid md:grid-cols-2 items-center gap-4 md:gap-6">
        <div className="p-8 md:p-14 lg:p-20 flex flex-col justify-center">
          <p className="text-lg md:text-xl lg:text-2xl font-medium italic leading-relaxed max-w-md">
            A new era of wellbeing made by a team of neuroscientists and
            functional health doctors harnessing plant technology into powerful,
            delightful rituals.
          </p>
          <div className="mt-8">
            <Button
              variant="outline"
              className="rounded-full border-dark text-dark bg-transparent hover:bg-dark hover:text-white px-6 py-2 text-sm font-semibold transition-all"
            >
              Our Science
            </Button>
          </div>
        </div>
        <div className="relative aspect-square md:aspect-auto md:h-[600px] lg:h-[700px] overflow-hidden rounded-2xl">
          <Image
            src="/images/brain-mushroom.jpeg"
            alt="Neuroscience meets nature"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
