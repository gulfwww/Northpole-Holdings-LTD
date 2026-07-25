import { Users, Boxes, Landmark } from "lucide-react"
import { valueProps } from "@/lib/site-data"

const icons = [Users, Boxes, Landmark]

export function ValueProposition() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(194,161,77,0.14),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            Why Partner With Us
          </p>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-white text-balance sm:text-4xl">
            Value on every side of the table
          </h2>
          <p className="mt-4 leading-relaxed text-white/60 text-pretty">
            We create measurable advantages for clients, suppliers, and the
            financiers who back the projects we deliver.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {valueProps.map((item, i) => {
            const Icon = icons[i]
            return (
              <div
                key={item.audience}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition-colors hover:border-gold/40 hover:bg-white/[0.07]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-serif text-xl font-semibold text-white">
                  {item.audience}
                </h3>
                <p className="mt-3 leading-relaxed text-white/65">{item.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
