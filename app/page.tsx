import { SiteHeader } from "@/components/site/site-header"
import { Hero } from "@/components/site/hero"
import { About } from "@/components/site/about"
import { Services } from "@/components/site/services"
import { Industries } from "@/components/site/industries"
import { ValueProposition } from "@/components/site/value-proposition"
import { GlobalPresence } from "@/components/site/global-presence"
import { Contact } from "@/components/site/contact"
import { SiteFooter } from "@/components/site/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Services />
        <Industries />
        <ValueProposition />
        <GlobalPresence />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
