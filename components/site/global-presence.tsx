import { MapPin } from "lucide-react"
import { countries } from "@/lib/site-data"

const clientTypes = [
  "Real estate developers & contractors",
  "Infrastructure and Oil & Gas firms",
  "Logistics operators & terminal developers",
  "Energy and Power companies",
  "Private equity & investment funds",
]

export function GlobalPresence() {
  return (
    <section id="global" className="bg-off-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              Global Footprint
            </p>
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-navy text-balance sm:text-4xl">
              On the ground where your projects happen
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              We support multinationals and regional champions expanding across
              three continents—combining international standards with genuine
              local execution in each market we operate.
            </p>

            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {countries.map((country) => (
                <li
                  key={country}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3.5 transition-colors hover:border-gold/40"
                >
                  <MapPin className="h-4 w-4 shrink-0 text-gold" />
                  <span className="text-sm font-medium text-navy">{country}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:pl-6">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-sm lg:p-10">
              <h3 className="font-serif text-2xl font-semibold text-navy">
                Who we work with
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Our clients are multinationals and regional leaders entering or
                scaling in high-growth emerging markets.
              </p>
              <ul className="mt-8 space-y-4">
                {clientTypes.map((type, i) => (
                  <li key={type} className="flex items-center gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy font-serif text-sm font-semibold text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-medium leading-snug text-navy/85">
                      {type}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
