"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronUp } from "lucide-react";
import { AnnouncementBar } from "@/components/announcement-bar";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

function AccordionItem({
  title,
  children,
  defaultOpen = true,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-t border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-base font-semibold">{title}</span>
        <ChevronUp
          className={`size-5 shrink-0 transition-transform duration-200 ${
            open ? "" : "rotate-180"
          }`}
        />
      </button>
      {open && (
        <div className="pb-5 text-sm leading-relaxed text-gray-600">
          {children}
        </div>
      )}
    </div>
  );
}

function DotPatternScattered() {
  return (
    <svg
      width="140"
      height="140"
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto"
    >
      {[
        [20, 15],
        [50, 10],
        [80, 20],
        [110, 15],
        [35, 35],
        [65, 30],
        [95, 35],
        [120, 40],
        [15, 55],
        [45, 50],
        [75, 55],
        [105, 50],
        [25, 75],
        [55, 70],
        [85, 75],
        [30, 95],
        [60, 90],
        [90, 95],
        [115, 85],
        [45, 110],
        [75, 115],
        [20, 120],
        [100, 110],
        [65, 50],
        [40, 70],
        [110, 65],
        [50, 130],
        [80, 100],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={4} fill="currentColor" />
      ))}
    </svg>
  );
}

function DotPatternGrid() {
  return (
    <svg
      width="140"
      height="140"
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto"
    >
      {Array.from({ length: 7 }).flatMap((_, row) =>
        Array.from({ length: 7 }).map((_, col) => {
          const baseX = 15 + col * 18;
          const baseY = 15 + row * 18;
          const size = row < 3 || col > 3 ? 5.5 : 3.5;
          return (
            <circle
              key={`${row}-${col}`}
              cx={baseX}
              cy={baseY}
              r={size}
              fill="currentColor"
            />
          );
        })
      )}
    </svg>
  );
}

export default function SciencePage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="flex flex-col">
        {/* ── Section 1: Hero ── */}
        <section className="px-6 lg:px-10 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold italic leading-tight">
                Good science feels like magic, and we&rsquo;re here to share
                that with the world
              </h1>
              <p className="mt-6 text-sm md:text-base leading-relaxed text-gray-700 max-w-md">
                We&rsquo;ve done the hard work to find clinically-studied
                ingredients and novel technologies so you can enjoy clean,
                natural and high efficacy products. Neuroscience-backed formulas
                you can feel that support your balance.
              </p>
            </div>
            <div className="relative aspect-3/4 md:aspect-auto md:h-[550px] lg:h-[650px] overflow-hidden rounded-2xl">
              <Image
                src="/images/mushroom-sculpture.jpeg"
                alt="Artistic mushroom sculpture"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </section>

        {/* ── Section 2: Values Grid ── */}
        <section className="px-6 lg:px-10 pb-16 md:pb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                label: "Transparency",
                image: "/images/science-transparency.jpeg",
              },
              {
                label: "Scientific Efficacy",
                image: "/images/science-efficacy.jpeg",
              },
              {
                label: "Clean Ingredients",
                image: "/images/science-clean.jpeg",
              },
              {
                label: "Maximum effect",
                image: "/images/science-effect.jpeg",
              },
            ].map((card) => (
              <div
                key={card.label}
                className="relative aspect-3/4 overflow-hidden rounded-2xl"
              >
                <Image
                  src={card.image}
                  alt={card.label}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/10" />
                <span className="absolute top-5 left-5 text-white text-sm font-medium">
                  {card.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 3: Scientific Team ── */}
        <section className="px-6 lg:px-10 pb-16 md:pb-24">
          <hr className="border-gray-200 mb-12" />
          <p className="text-lg md:text-xl font-semibold leading-snug max-w-2xl mb-12">
            Neuroscience meets nature. Our scientific leadership team combines
            expertise in cutting-edge research with the therapeutic power of
            plants.
          </p>
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            {/* Dr. Julie Hwang */}
            <div className="flex gap-6">
              <div className="relative w-44 h-52 shrink-0 overflow-hidden">
                <Image
                  src="/images/dr-julie-hwang.jpeg"
                  alt="Dr. Julie Hwang, ND"
                  fill
                  className="object-cover"
                  sizes="176px"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Dr. Julie Hwang, ND
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  A distinguished board-certified naturopathic physician and
                  acupuncture provider supporting patients with neurological
                  &amp; skin conditions. As a board member &amp; Global
                  Ambassador to the Integrative &amp; Naturopathic Medicine
                  World Congress, she brings 10+ years of daily clinical
                  experience using plant medicine and functional nutrition tools.
                </p>
              </div>
            </div>
            {/* Dr. Christine Wong */}
            <div className="flex gap-6">
              <div className="relative w-44 h-52 shrink-0 overflow-hidden">
                <Image
                  src="/images/dr-christine-wong.jpeg"
                  alt="Dr. Christine Wong, PhD"
                  fill
                  className="object-cover"
                  sizes="176px"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Dr. Christine Wong, PhD
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  A published neuroscientist, prestigiously awarded by the
                  Natural Sciences and Engineering Research Council, with over a
                  decade of experience in Molecular, Cellular &amp; Behavioral
                  Neuroscience. She is on a mission to empower all people along
                  their personal health journey, through creating accessible
                  tools for the mind.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 4: Proprietary Formulas ── */}
        <section className="px-6 lg:px-10 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Proprietary formulas made by Neuroscientists and Clinical Doctors
            </h2>
            <div>
              <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-6">
                Each formula is crafted with care by our Neuroscience &amp;
                Clinical Formulation team with clinically-tested ingredients and
                informed by centuries of herbal tradition. We have a rigorous
                method to create each product, founded on key principles that
                guide our designs.
              </p>
              <div>
                <AccordionItem title="Backed by Human Clinical Studies">
                  Every ingredient and potential bioactive pairings have at least
                  one human-based clinical study behind them. This means we know
                  these herbs work on people!
                </AccordionItem>
                <AccordionItem title="Made for Maximum Value & Effect">
                  We use highly concentrated 10:1 herbal extracts in our
                  gummies, paired with the most powerful and effective
                  combinations in modern medicine. We&rsquo;ve screened thousands
                  of herbal bioactive components to uncover the most powerful
                  plant and mushroom synergies &mdash; so you feel more, with
                  less.
                </AccordionItem>
                <AccordionItem title="For Immediate and Longterm Effects">
                  Each NOON product is designed for both immediate and long-term
                  benefits. So you can feel the direct effects of the herbs,
                  while also having longterm benefits after consistent repeat
                  usage. We categorize ingredients by their action speed:
                  Fast-acting (within 20 minutes to 5 hours); Medium-action (1
                  to 3 weeks); Long action (4 to 12 weeks).
                </AccordionItem>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 5: Full-width Gummy Image ── */}
        <section className="px-6 lg:px-10 py-4">
          <div className="relative w-full aspect-video overflow-hidden rounded-2xl">
            <Image
              src="/images/gummies-ice.jpeg"
              alt="Dual-layer gummy supplements"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </section>

        {/* ── Section 6: Dual-Layer Technology ── */}
        <section className="px-6 lg:px-10 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold italic leading-tight mb-12">
                Innovative dual-layer gummies that work better, faster and
                longer
              </h2>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <DotPatternScattered />
                  <p className="mt-4 text-xs text-gray-600 leading-snug">
                    Outer Protective Layer from environmental degradation
                  </p>
                </div>
                <div className="text-center">
                  <DotPatternGrid />
                  <p className="mt-4 text-xs text-gray-600 leading-snug">
                    Outer Protective Layer from environmental degradation
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-6">
                Not all gummy supplements are made equal, and we canvased the
                world to find the best technology to ensure you get the maximum
                effect. Our innovative dual-layer gummy technology is designed to
                keep our proprietary formulas of bioactive ingredients as potent
                as possible.
              </p>
              <div>
                <AccordionItem title="Outer Protective Layer">
                  The outer layer of the gummy protects the inner bioactive
                  ingredients, keeping them stable and ensuring they deliver the
                  maximum benefit when consumed.
                </AccordionItem>
                <AccordionItem title="Enhanced Bioavailability">
                  Our dual-layer technology also enhances the bioavailability of
                  key ingredients. This means that more of what you consume
                  reaches your bloodstream, offering quicker results. The
                  technology allows for greater absorption in your mouth,
                  bypassing the digestive system for faster effects.
                </AccordionItem>
                <AccordionItem title="Quick-Release Effects with Extended Benefits">
                  The intention behind our beautiful, dual-layer design is to
                  create a delightful reward, so that it&rsquo;s even easier to
                  make your favorite habits into consistent, daily events. Cue
                  &rarr; Action &rarr; Reward &rarr; Repeat. Encouraging habit
                  loops like this supports creating sustainable, lasting changes
                  to help you feel good.
                </AccordionItem>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 7: Full-width Hand Image ── */}
        <section className="px-6 lg:px-10 py-4">
          <div className="relative w-full aspect-video overflow-hidden rounded-2xl bg-[#e8e0d8]">
            <Image
              src="/images/hand-gummy.jpeg"
              alt="Hand holding a gummy supplement"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </section>

        {/* ── Section 8: Standards ── */}
        <section className="px-6 lg:px-10 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Committing to the highest standards in formulation, testing and
              production
            </h2>
            <div>
              <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-6">
                We back up every product with scientific research and rigorous
                testing to ensure that you can trust the quality and efficacy of
                NOON products. We hold by our commitment to engage in
                sustainable practices for sourcing and manufacturing.
              </p>
              <div>
                <AccordionItem title="Multi-step Clinical Research Methodology">
                  Each formulation is created with a rigorous and thorough
                  deep-dive into clinical studies per ingredient and also by
                  cognitive outcome. Dr. Christine Wong has combed through
                  hundreds of studies and thousands of bioactive interactions to
                  determine the safest and most effective combination of herbs.
                  Each ingredient is backed by at least one human-based study for
                  efficacy.
                </AccordionItem>
                <AccordionItem title="Good Manufacturing Practices (GMP)">
                  All our gummies and chocolates are made in GMP-certified
                  facilities, ensuring the highest quality in every batch. All of
                  our facilities are also FDA-registered for controlled storage
                  and distribution.
                </AccordionItem>
                <AccordionItem title="Alpha, Beta and Third Party Testing">
                  Throughout the formulation process, we do multiple rounds of
                  testing to adjust the formula for effectiveness, taste, texture
                  and experience before they get into your hands. Every product
                  undergoes multiple stages of consumer testing to improve our
                  formulas and third-party testing to check for purity and
                  safety.
                </AccordionItem>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
