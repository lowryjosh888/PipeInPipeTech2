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

            <div className="border-t border-gray-200 mt-10 pt-6 flex items-center gap-4">
              <span className="text-sm text-gray-500 font-medium">Share this post:</span>
              <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.pipeinpipetech.com/articles/rehabilitation-techniques"
                target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook"
                className="w-9 h-9 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{ background: "#1877f2" }}>
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V21.88C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="https://twitter.com/intent/tweet?url=https://www.pipeinpipetech.com/articles/rehabilitation-techniques&text=Advanced+Pipeline+Rehabilitation+Techniques"
                target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter"
                className="w-9 h-9 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{ background: "#000000" }}>
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
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
