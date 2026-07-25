import Image from "next/image"
import { ArrowRight, Globe2 } from "lucide-react"
import { stats } from "@/lib/site-data"

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-navy">
      <Image
        src="/images/hero.png"
        alt="Aerial view of a modern industrial port terminal at dusk"
        fill
        priority
        className="object-cover object-center opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/80 to-navy" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(194,161,77,0.18),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-36 sm:pt-44 lg:px-8 lg:pb-28 lg:pt-52">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-gold-soft">
            <Globe2 className="h-3.5 w-3.5" />
            International B2B Consultancy · Since 2014
          </span>

          <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-white text-balance sm:text-5xl lg:text-6xl">
            We de-risk and accelerate
            <span className="text-gold"> capital-intensive projects</span> across
            emerging markets.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 text-pretty">
            North Pole Holdings provides end-to-end sourcing, procurement, and
            full-range project management support bridging the gap between
            clients, suppliers, financiers, and local stakeholders across seven
            countries.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold tracking-wide text-navy transition-all hover:bg-gold-soft"
            >
              Start a Conversation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-white/10"
            >
              Explore Our Services
            </a>
          </div>
        </div>

        <dl className="mt-16 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-navy/40 px-5 py-6 backdrop-blur-sm">
              <dt className="font-serif text-3xl font-semibold text-white">
                {stat.value}
              </dt>
              <dd className="mt-1 text-xs font-medium uppercase tracking-[0.15em] text-white/55">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
