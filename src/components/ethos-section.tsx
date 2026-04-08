import Image from "next/image";
import { Button } from "@/components/ui/button";

export function EthosSection() {
  return (
    <section className="px-4 md:px-6 py-4 md:py-6">
      <div className="grid md:grid-cols-2 items-center gap-4 md:gap-6">
        <div className="relative aspect-square md:aspect-auto md:h-[600px] lg:h-[700px] overflow-hidden rounded-2xl">
          <Image
            src="/images/powder-bowl.jpeg"
            alt="Functional mushrooms ritual"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="p-8 md:p-14 lg:p-20 flex flex-col justify-center">
          <p className="text-2xl md:text-3xl lg:text-4xl font-medium italic leading-snug max-w-lg">
            Connecting you to a new level of care&mdash; mind to the
            body&mdash; with the everyday ritual of functional mushrooms
          </p>
          <div className="mt-8">
            <Button
              variant="outline"
              className="rounded-full border-dark text-dark bg-transparent hover:bg-dark hover:text-white px-6 py-2 text-sm font-semibold transition-all"
            >
              Our Ethos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
