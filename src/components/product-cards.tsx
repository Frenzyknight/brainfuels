import Image from "next/image";

export function ProductCards() {
  return (
    <section className="px-4 md:px-6 py-4 md:py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* Product card */}
        <div className="bg-[#e8e3de] flex flex-col rounded-2xl overflow-hidden">
          <div className="relative aspect-square">
            <Image
              src="/images/pink-gummies.jpeg"
              alt="Sleep Mushroom Gummy Delights"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="p-6 text-center">
            <p className="text-base font-semibold">
              Sleep Mushroom Gummy Delights &middot; $32
            </p>
            <p className="text-sm text-muted-foreground italic mt-1">
              For Deep &amp; Rejuvenating ZZs*
            </p>
          </div>
        </div>

        {/* Lifestyle image */}
        <div className="relative aspect-square md:aspect-auto overflow-hidden rounded-2xl">
          <Image
            src="/images/woman-gummies.jpeg"
            alt="Enjoying functional mushroom gummies"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
