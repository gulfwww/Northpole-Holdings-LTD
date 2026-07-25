import { Building2, Mail, MapPin, Phone } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-border bg-navy shadow-xl">
          <div className="grid lg:grid-cols-2">
            {/* Left: message + details */}
            <div className="relative flex flex-col justify-center p-9 lg:p-12">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(194,161,77,0.16),transparent_55%)]" />
              <div className="relative">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                  Get in Touch
                </p>
                <h2 className="font-serif text-3xl font-semibold tracking-tight text-white text-balance sm:text-4xl">
                  Let&apos;s move your next project forward
                </h2>
                <p className="mt-4 leading-relaxed text-white/65 text-pretty">
                  Tell us about your project or market and our team will respond
                  with a clear view of how we can help de-risk and accelerate
                  delivery.
                </p>

                <div className="mt-9 space-y-5">
                  <a
                    href="mailto:info@northpole.holdings"
                    className="flex items-center gap-4 text-white/80 transition-colors hover:text-gold"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                      <Mail className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-medium">info@northpole.holdings</span>
                  </a>
                  <a
                    href="tel:+971568085301"
                    className="flex items-center gap-4 text-white/80 transition-colors hover:text-gold"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                      <Phone className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-medium">+971 56 808 5301</span>
                  </a>
                </div>

                <div className="mt-9 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-2">
                  <AddressBlock
                    icon={<Building2 className="h-5 w-5" />}
                    label="Jurisdiction"
                    lines={["Republic of Seychelles"]}
                  />
                  <AddressBlock
                    icon={<MapPin className="h-5 w-5" />}
                    label="Registered Office"
                    lines={[
                      "Suite 208, 2nd Floor, Sham Peng Tong Plaza, Victoria, Mahe, Seychelles",
                    ]}
                  />
                  <AddressBlock
                    icon={<MapPin className="h-5 w-5" />}
                    label="Operating Office"
                    lines={[
                      "Office No.8, Level 3, SBI Tower, Ebene, Mauritius",
                    ]}
                  />
                </div>
              </div>
            </div>

            {/* Right: map */}
            <div className="relative min-h-[380px] bg-navy-deep">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.35247916397!2d57.4908619759936!3d-20.244211348171408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x217c5b1d86c50655%3A0xc7410c6f646ff058!2sSBI%20Mauritius%20Ltd!5e0!3m2!1sen!2sae!4v1773310057771!5m2!1sen!2sae"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[380px] w-full"
                title="North Pole Holdings operating office - SBI Tower, Ebene, Mauritius"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AddressBlock({
  icon,
  label,
  lines,
}: {
  icon: React.ReactNode
  label: string
  lines: string[]
}) {
  return (
    <div className="flex gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-gold">
        {icon}
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          {label}
        </p>
        {lines.map((line) => (
          <p key={line} className="mt-1.5 text-sm leading-relaxed text-white/75">
            {line}
          </p>
        ))}
      </div>
    </div>
  )
}
