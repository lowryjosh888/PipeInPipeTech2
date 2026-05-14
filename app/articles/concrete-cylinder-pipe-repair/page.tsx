import Link from "next/link"
import { ArrowLeft, Phone, Mail, MapPin } from "lucide-react"

export default function ConcreteCylinderPipeRepair() {
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
            In-situ Repair Method for Concrete Cylinder Pipe
          </h1>
        </div>
      </div>

      {/* ── Article Body ── */}
      <div className="w-full px-4 py-12">
        <div className="max-w-3xl mx-auto">

          {/* Back link + meta */}
          <Link
            href="/resources/articles"
            className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-600 text-sm font-medium mb-6"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Articles
          </Link>

          <p className="text-gray-400 text-sm mb-10">May 29, 2020</p>

          {/* Article content */}
          <div className="bg-white rounded-lg shadow-md px-8 py-10" style={{ lineHeight: "1.8" }}>

            <h2 className="text-xl font-bold mb-4 uppercase tracking-wide" style={{ color: "#0f1e35" }}>
              History
            </h2>
            <p className="text-gray-700 mb-4">
              The IT3 System has recently been used to repair concrete cylinder pipe that has been used extensively in
              both industrial and municipal pipeline systems for many years. However, once the calcium hydroxide is
              leached out of the concrete by the interaction with constituents in the fluid — especially H₂S, CO₂,
              chloride and sulfate ions, and bacteria — the steel component sees an accelerated rate of corrosion failure.
            </p>
            <p className="text-gray-700 mb-10">
              Unisert Systems was contacted in 1979 to repair two extensively corroded concrete cylinder systems. The
              first was an 18" line for Shell in West Texas carrying brackish water, and the second, a 14" line owned by
              Texaco, Inc. in Aneth, Utah that transports river water. Used in injection systems, both had seen
              approximately 15 to 20 years' service. The corrosion in both systems had reached a level where catastrophic
              failures were occurring even at the average operating pressures of 150 and 260 psi with pressure
              fluctuations ranging from vacuum to 360 and 400 psi respectively.
            </p>

            <h2 className="text-xl font-bold mb-4 uppercase tracking-wide" style={{ color: "#0f1e35" }}>
              Solution
            </h2>
            <p className="text-gray-700 mb-4">
              Since the original concrete cylinder pipelines were in such an advanced stage of deterioration, they could
              not be counted on to contribute the total hoop strength to the overall multiwall design. As a result,
              Unisert's design basis called for the layers of grout and reinforced plastic to contribute the major load
              carrying capabilities in the steel-cement-FRP multi-layer system.
            </p>
            <p className="text-gray-700 mb-4">
              Concrete cylinder pipe is joined with a bell and spigot connection and these are designed to a maximum
              degree of mitre. A specially designed pig was sent through the line in both installations to verify that
              this degree of mitre did not produce a bending radius that would microcrack the FRP during insertion.
            </p>
            <p className="text-gray-700 mb-10">
              Each project involved work in entirely different terrains — from flat, populated areas in Odessa, Texas, to
              the rocky hills of Utah. In West Texas a major design constraint was the staging areas, used to join the
              FRP liner on the surface, were in the midst of populated areas involving street crossing, and they provided
              limited access to the pipeline. Therefore, once joined, the liner segments had to be transported on rollers
              distances of up to 2 miles and at times when it would not interfere with traffic. For Texaco, the rocky
              terrain and, again, the distance between the staging areas and the insertion sites were constraints to be
              considered along with a greater severity of mitre angle.
            </p>

            <h2 className="text-xl font-bold mb-4 uppercase tracking-wide" style={{ color: "#0f1e35" }}>
              Results
            </h2>
            <p className="text-gray-700 mb-4">
              Both systems were pressure tested successfully after installation and both have not experienced any
              problems or leaks. Shell's line has been in service for over a year and Texaco's, since late May. In West
              Texas the end connection utilized was the SF joint (flanged packer) and in Utah the SL joint (inline
              overwrap sleeve) was incorporated. Both connections were equally effective in accomplishing a seal
              preventing migration of fluids into the annular space, but the SL joint was found more efficient in terms
              of saving installation time.
            </p>
            <p className="text-gray-700 mb-6">
              Installation costs for the IT3 System were 70% to 80% of the replacement cost of a new-coated steel
              system. But most important, these two projects serve to document the use of Unisert's IT3 system as a
              repair alternative for concrete cylinder pipelines. The IT3 System provides a repair in continuous lengths
              from the inside rather than the outside of the carrier pipe. And, by its very nature, IT3 design provides:
              one, reinforcement in which the added layers of FRP/cement bear approximately 65% of the hoop load; two,
              excellent internal corrosion protection contributed by the plastic liner; and three, the ability as
              evidenced during fracture testing, to successfully bridge the large holes which can develop in the exterior
              case without danger of further system failures.
            </p>

            {/* Divider */}
            <div className="border-t border-gray-200 mt-10 pt-6 flex items-center gap-4">
              <span className="text-sm text-gray-500 font-medium">Share this post:</span>
              {/* Facebook */}
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https://www.pipeinpipetech.com/articles/concrete-cylinder-pipe-repair"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Facebook"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
                style={{ background: "#1877f2" }}
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V21.88C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              {/* Twitter / X */}
              <a
                href="https://twitter.com/intent/tweet?url=https://www.pipeinpipetech.com/articles/concrete-cylinder-pipe-repair&text=In-situ+Repair+Method+for+Concrete+Cylinder+Pipe"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Twitter"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
                style={{ background: "#000000" }}
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900 w-full mt-4" id="contact">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4 text-center">Contact Info</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <a href="tel:936-242-3232" className="flex items-center justify-center group">
              <Phone className="text-yellow-400 h-8 w-8 mr-4 group-hover:text-yellow-500 transition-colors duration-200" />
              <div>
                <div className="text-sm text-white">Phone</div>
                <div className="text-lg font-semibold text-white group-hover:text-yellow-500 transition-colors duration-200">
                  936-242-3232
                </div>
              </div>
            </a>
            <a href="mailto:info@pipeinpipe.com" className="flex items-center justify-center group">
              <Mail className="text-yellow-400 h-8 w-8 mr-4 group-hover:text-yellow-500 transition-colors duration-200" />
              <div>
                <div className="text-sm text-white">Email</div>
                <div className="text-lg font-semibold text-white group-hover:text-yellow-500 transition-colors duration-200">
                  info@pipeinpipe.com
                </div>
              </div>
            </a>
            <div className="flex items-center justify-center">
              <MapPin className="text-yellow-400 h-8 w-8 mr-4" />
              <div>
                <div className="text-sm text-white">Located In</div>
                <div className="text-lg font-semibold text-white">Spring, Texas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
