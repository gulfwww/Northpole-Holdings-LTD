import Image from "next/image"
import { industries } from "@/lib/site-data"

export function Industries() {
  return (
    <section id="industries" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            Sectors We Serve
          </p>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-navy text-balance sm:text-4xl">
            Deep expertise in capital-intensive industries
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
            We support developers, operators, and investors delivering ambitious
            projects in the sectors that power economies.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <article
              key={industry.name}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={industry.image || "/placeholder.svg"}
                  alt={`${industry.name} projects`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/35 to-transparent transition-colors duration-300 group-hover:from-navy-deep group-hover:via-navy/50" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-serif text-xl font-semibold text-white">
                  {industry.name}
                </h3>
                <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-white/75 opacity-0 transition-all duration-300 group-hover:max-h-24 group-hover:opacity-100">
                  {industry.description}
                </p>
                <span className="mt-3 block h-0.5 w-10 bg-gold" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
