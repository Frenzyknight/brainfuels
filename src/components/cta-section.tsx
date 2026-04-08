import Image from "next/image";

export function CTASection() {
  return (
    <section>
      <div className="py-16 md:py-24 px-6 text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium italic max-w-3xl mx-auto leading-tight">
          Tap into your best state of mind with us.
        </h2>
      </div>
      <div className="px-4 md:px-6 pb-4 md:pb-6">
        <div className="relative w-full aspect-video md:aspect-2/1 overflow-hidden rounded-2xl">
          <Image
            src="/images/mushroom-sculpture.jpeg"
            alt="Tap into your best state of mind"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
}
