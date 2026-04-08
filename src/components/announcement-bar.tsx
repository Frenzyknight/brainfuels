export function AnnouncementBar() {
  const text =
    "Free US Shipping over $90 \u00B7 Free International Shipping over $175 \u00B7 Subscribe & Save 15%";

  return (
    <div className="bg-dark text-white text-xs py-2 overflow-hidden whitespace-nowrap">
      <div className="flex animate-marquee">
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} className="mx-8 shrink-0">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
