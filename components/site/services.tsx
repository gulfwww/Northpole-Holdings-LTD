import { Check } from "lucide-react"
import { services } from "@/lib/site-data"

export function Services() {
  return (
    <section id="services" className="bg-off-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            What We Do
          </p>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-navy text-balance sm:text-4xl">
            Core capabilities across the project lifecycle
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
            From first feasibility study to on-site delivery, we provide the
            advisory, management, and commercial muscle to move projects forward.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.title}
                className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_20px_40px_-20px_rgba(11,26,46,0.25)]"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy text-gold transition-colors group-hover:bg-navy-light">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-navy">
                    {service.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-3 border-t border-border pt-6">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      <span className="text-sm leading-relaxed text-navy/75">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
