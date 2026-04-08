import Image from "next/image";

export function ProductShowcase() {
  return (
    <section className="px-4 md:px-6 py-4 md:py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="relative aspect-square md:aspect-4/5 overflow-hidden rounded-2xl">
          <Image
            src="/images/lime-closeup.jpeg"
            alt="Natural ingredients"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="relative aspect-square md:aspect-4/5 overflow-hidden rounded-2xl">
          <Image
            src="/images/gummies-ice.jpeg"
            alt="Functional mushroom gummies"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
