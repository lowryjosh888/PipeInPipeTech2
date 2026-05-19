import Link from "next/link"
import { ArrowLeft, Phone, Mail, MapPin } from "lucide-react"

export default function RehabilitationTechniques() {
  return (
    <div className="min-h-screen w-full bg-gray-100">

      {/* ── Hero Banner ── */}
      <div
        className="relative w-full h-72 md:h-96 flex items-end"
        style={{
          backgroundImage: "url('/images/BenefitStrips1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
        <div className="relative z-10 w-full max-w-3xl mx-auto px-6 pb-10">
          <p className="text-yellow-400 text-sm font-semibold tracking-widest uppercase mb-2">Articles of Reference</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Advanced Pipeline Rehabilitation Techniques
          </h1>
        </div>
      </div>

      {/* ── Article Body ── */}
      <div className="w-full px-4 py-12">
        <div className="max-w-3xl mx-auto">

          <Link
            href="/resources/articles"
            className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-600 text-sm font-medium mb-6"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Articles
          </Link>

          <p className="text-gray-400 text-sm mb-10">May 29, 2020</p>

          <div className="bg-white rounded-lg shadow-md px-8 py-10" style={{ lineHeight: "1.8" }}>

            <p className="text-gray-700 mb-6">
              Exploring innovative approaches to in-situ pipeline rehabilitation using multiwall containment systems.
            </p>

            <div className="rounded-lg p-6 mb-6" style={{ background: "#f9fafb", borderLeft: "4px solid #f4c430" }}>
              <p className="text-gray-500 italic text-sm">Full article content coming soon.</p>
            </div>

            <p className="text-gray-700 mb-4">
              In-situ pipeline rehabilitation has evolved significantly over the past several decades, driven by the
              increasing cost of full pipeline replacement and growing environmental regulations that limit excavation
              in sensitive or populated areas. The IT3 multiwall system represents a significant advancement in this field.
            </p>
            <p className="text-gray-700 mb-4">
              Unlike traditional slip-lining methods, the IT3 approach incorporates a cement grout annulus that
              transforms two independent conduits into a single unified multiwall pipe. This design distributes hoop
              stress more effectively, reduces the load on the polymer liner, and provides secondary corrosion
              protection through the high-pH grout environment.
            </p>
            <p className="text-gray-700 mb-6">
              This article examines the engineering principles behind advanced rehabilitation techniques, compares the
              IT3 approach against conventional alternatives, and presents case data from field applications across
              diverse operating environments and fluid types.
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-gray-900 w-full mt-4">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4 text-center">Contact Info</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <a href="tel:936-242-3232" className="flex items-center justify-center group">
              <Phone className="text-yellow-400 h-8 w-8 mr-4 group-hover:text-yellow-500 transition-colors duration-200" />
              <div><div className="text-sm text-white">Phone</div><div className="text-lg font-semibold text-white group-hover:text-yellow-500 transition-colors duration-200">936-242-3232</div></div>
            </a>
            <a href="mailto:info@pipeinpipe.com" className="flex items-center justify-center group">
              <Mail className="text-yellow-400 h-8 w-8 mr-4 group-hover:text-yellow-500 transition-colors duration-200" />
              <div><div className="text-sm text-white">Email</div><div className="text-lg font-semibold text-white group-hover:text-yellow-500 transition-colors duration-200">info@pipeinpipe.com</div></div>
            </a>
            <div className="flex items-center justify-center">
              <MapPin className="text-yellow-400 h-8 w-8 mr-4" />
              <div><div className="text-sm text-white">Located In</div><div className="text-lg font-semibold text-white">Spring, Texas</div></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
