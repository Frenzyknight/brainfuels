const pressNames = [
  "VOGUE",
  "ELLE",
  "Wallpaper*",
  "HUNGER",
  "BAZAAR",
  "VANITY FAIR",
  "marie claire",
];

export function PressMarquee() {
  return (
    <section className="py-12 md:py-16 overflow-hidden bg-white">
      <div className="flex animate-marquee">
        {Array.from({ length: 4 }).map((_, setIndex) =>
          pressNames.map((name, i) => (
            <span
              key={`${setIndex}-${i}`}
              className="mx-8 md:mx-14 text-xl md:text-3xl font-bold tracking-wide whitespace-nowrap shrink-0 uppercase"
              style={{
                fontFamily:
                  name === "Wallpaper*"
                    ? "serif"
                    : name === "BAZAAR"
                      ? "serif"
                      : name === "VANITY FAIR"
                        ? "serif"
                        : "inherit",
              }}
            >
              {name}
            </span>
          ))
        )}
      </div>
    </section>
  );
}
