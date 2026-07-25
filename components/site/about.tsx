import Image from "next/image"
import { Check } from "lucide-react"

const highlights = [
  "End-to-end sourcing & procurement",
  "Full-range project management",
  "Local execution across 7 countries",
  "Trusted supplier & financier network",
]

export function About() {
  return (
    <section id="about" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-last lg:order-first">
            <div className="relative overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/images/about.png"
                alt="Consultants reviewing project plans in a modern office"
                width={720}
                height={560}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-border bg-background p-6 shadow-lg sm:block lg:-right-6">
              <p className="font-serif text-4xl font-semibold text-navy">10+</p>
              <p className="mt-1 max-w-[9rem] text-sm leading-snug text-muted-foreground">
                Years bridging clients, suppliers & stakeholders
              </p>
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              Who We Are
            </p>
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-navy text-balance sm:text-4xl">
              A business support partner built for complex, cross-border delivery
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              North Pole Holdings Limited is a 2014-established B2B international business support services and project management consultancy firm. 
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
              We provide end-to-end sourcing, procurement, and full-range project management support to corporate clients and project owners in capital-intensive industries: Real Estate, Construction, Infrastructure, Oil & Gas, Power, Energy, and Logistics. 
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
              Our role is to de-risk and accelerate project delivery by bridging the gap between clients, suppliers, financiers, and local stakeholders across South Africa, Nigeria, United Arab Emirates, Netherlands, Portugal, Brazil, and Mozambique. 
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15">
                    <Check className="h-3 w-3 text-gold" />
                  </span>
                  <span className="text-sm font-medium text-navy/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
