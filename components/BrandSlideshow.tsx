import fs from "node:fs";
import path from "node:path";
import Container from "@/components/Container";

const BRANDS_DIR = path.join(process.cwd(), "public", "images", "carbrands");
const IMAGE_EXT = /\.(png|jpe?g|webp|svg|avif)$/i;

/** Turn "land-rover_logo.png" into "Land Rover" for alt text. */
function toLabel(file: string) {
  return file
    .replace(IMAGE_EXT, "")
    .replace(/[-_]+/g, " ")
    .replace(/\blogo\b/gi, "")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function getBrandFiles(): string[] {
  try {
    return fs.readdirSync(BRANDS_DIR).filter((f) => IMAGE_EXT.test(f)).sort();
  } catch {
    return []; // folder missing: render nothing instead of crashing the build
  }
}

/**
 * Auto-scrolling strip of brand logos. Reads every image in
 * public/images/carbrands at build time, so adding a logo = dropping a file in the folder.
 */
export default function BrandSlideshow() {
  const files = getBrandFiles();
  if (files.length === 0) return null;

  // Repeat short lists so the strip is always wider than the screen, then duplicate once for a seamless loop.
  const repeats = Math.max(1, Math.ceil(12 / files.length));
  const track = Array.from({ length: repeats }, () => files).flat();

  return (
    <section aria-label="Vehicle brands we work with" className="section bg-gradient-to-b from-surface to-white">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Brands</span>
          <h2 className="section-title">Brands You Can Trust</h2>
          <p className="section-subtitle">
            From everyday family cars to business fleets, we help you find vehicles from leading manufacturers.
          </p>
        </div>
      </Container>

      <div className="group relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <ul className="flex w-max animate-marquee gap-6 group-hover:[animation-play-state:paused]">
          {[0, 1].map((copy) =>
            track.map((file, i) => (
              <li
                key={`${copy}-${i}`}
                aria-hidden={copy === 1}
                className="flex h-24 w-40 shrink-0 items-center justify-center rounded-xl border-t-4 border-accent bg-white p-4 shadow-card"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/carbrands/${encodeURIComponent(file)}`}
                  alt={copy === 0 ? toLabel(file) : ""}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </li>
            ))
          )}
        </ul>
      </div>
    </section>
  );
}