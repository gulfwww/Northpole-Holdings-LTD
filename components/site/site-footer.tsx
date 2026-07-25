import { navLinks, services } from "@/lib/site-data"

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-white/70">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} North Pole Holdings Limited. All
            rights reserved.
          </p>
          <p className="text-xs text-white/50">
            Strategic Sourcing · Procurement · Project Management
          </p>
        </div>
      </div>
    </footer>
  )
}
