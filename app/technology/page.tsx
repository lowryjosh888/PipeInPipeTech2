import Link from "next/link"
import { ArrowLeft, Phone, Mail, MapPin } from "lucide-react"
import PipeModel3D from "../../components/PipeModel3D"

export default function Technology() {
  return (
    <div className="min-h-screen w-full bg-gray-100">

      {/* ── Step 1: Hero Banner ── */}
      <div
        className="relative w-full h-72 md:h-96 flex items-end"
        style={{
          backgroundImage: "url('/images/offshore-pipeline-installation.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            IT3 System Technology
          </h1>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="w-full px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center text-yellow-400 hover:text-yellow-500 mb-8">
            <ArrowLeft className="mr-2" /> Back to Home
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 max-w-7xl mx-auto">

          {/* What is the IT3 System */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What is the IT3 System?</h2>
            <p className="text-gray-800 mb-4">
              IT3 refers to Internal Tube 3-Phase in a multiwall piping configuration which consists of 3 components: a
              smaller plastic pipe (liner) inserted into a larger diameter steel or other hard material (casing) with a
              cement grout injected between the OD of the liner and the ID of the casing (annulus). The primary
              objective in this superior piping application is the implementation in virtually all pipe line
              configurations where reducing, neutralizing and eliminating internal corrosion is imminent.
            </p>

            {/* Two photos between paragraphs */}
            <div className="flex gap-3 mb-4 w-full">
              <div className="flex-1 overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center" style={{ height: 320 }}>
                <img
                  src="/images/IT3-System1.png"
                  alt="IT3 System"
                  className="w-full h-full object-contain"
                  style={{ objectPosition: "left center" }}
                />
              </div>
              <div className="flex-1 overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center" style={{ height: 320 }}>
                <img
                  src="/images/IT3-System2.jpeg"
                  alt="IT3 System"
                  className="w-full h-full object-contain"
                  style={{ objectPosition: "right center" }}
                />
              </div>
            </div>

            <p className="text-gray-800">
              The trade name IT3 short for Internal Tube 3-Phase reflects the three distinct material layers integrated
              into its design. This innovative multiwall piping system, originally patented by Ken Tierling over 50
              years ago, demonstrates the advanced approach to manufacturing and installation techniques for demanding
              industrial environments.
            </p>
          </div>

          {/* ── Step 2 & 3: 3D Model in dark container with instructional text ── */}
          <div className="rounded-xl overflow-hidden mb-10" style={{ background: "#0f1e35" }}>
            <div className="px-6 pt-6 pb-2 text-center">
              <p className="text-yellow-400 text-sm font-semibold tracking-widest uppercase mb-1">
                Interactive 3D Model
              </p>
              <p className="text-gray-300 text-sm">
                Click and drag to rotate &nbsp;&bull;&nbsp; Scroll to zoom &nbsp;&bull;&nbsp; Right-click to pan
              </p>
            </div>
            <PipeModel3D />
          </div>

          {/* Compressed Liner Classification */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Compressed Liner Classification</h2>

            {/* ── Step 4: Pull quote ── */}
            <blockquote className="border-l-4 border-yellow-400 bg-gray-50 px-6 py-4 my-6 rounded-r-lg">
              <p className="text-gray-700 text-lg italic leading-relaxed">
                "The design is classified as a compressed liner since the plastic to steel conformity is not derived
                from altering the polymer component."
              </p>
            </blockquote>

            {/* CompressedLiner graphic */}
            <img
              src="/images/CompressedLiner.png"
              alt="Compressed Liner Classification diagram"
              className="w-full h-auto"
              style={{ marginTop: "2rem", marginBottom: "2rem" }}
            />

            <p className="text-gray-800 mb-4">
              The IT3 System design is based on the concept that the liner is not directly bonded/fixed to the ID of the
              steel casing through deformation which does not affect its natural state. Through this unique concept the
              design is classified as a compressed liner since the plastic to steel conformity is not derived from
              altering the polymer component.
            </p>
            <p className="text-gray-800 mb-4">
              In relation to the plastic inner pipe, the design is classified as a compressed liner since the plastic to
              steel connection is not derived through the deformation of the polymeric component. Basically, the design
              inserts an incompressible material at the interface thereby totally limiting radial strain of the inner
              polymer pipe. As a result, the cement annular transfers the majority of stress to the outer casing and
              perfectly anchors the inner pipe.
            </p>
            <p className="text-gray-800">
              Due to the extremely low stress in the tensile mode, actuation of microcracking in the plastic is entirely
              avoided. Thus, the IT3 System enables numerous polymeric materials to be successfully implemented without
              jeopardizing their structural integrity. Furthermore, polyethylenes even in the presence of surface-active
              agents, elude all possibility of the familiar stress cracking corrosion failure mode occurring due to the
              absence of any significant degree of stress.
            </p>
          </div>

          {/* Technical Example */}
          <div className="border-t border-gray-200 pt-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Technical Example</h2>
            <p className="text-gray-800 mb-6">
              By intentionally disregarding the compressive effect of the cement on the inner liner during its set, a
              specific instance using a P.V.C. liner illustrates the magnitude of stress to be projected in the liner
              and steel layers:
            </p>

            {/* Example Parameters */}
            <div className="rounded-lg p-6 mb-8" style={{ background: "#f9fafb" }}>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-gray-700">
                <div>• Internal pressure = 2,200 psi</div>
                <div>• Steel O.D. = 6.625"</div>
                <div>• P.V.C. O.D. = 4.5"</div>
                <div>• Steel Thickness = .312"</div>
                <div>• P.V.C. thickness = .337"</div>
              </div>
            </div>

            {/* Liner Performance */}
            <div className="mb-8">
              <p
                className="text-center font-medium text-gray-500 uppercase mb-4"
                style={{ fontSize: "14px", letterSpacing: "0.5px" }}
              >
                Liner Performance
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl p-6 text-center" style={{ background: "#1e3a5f" }}>
                  <div className="text-4xl font-extrabold text-yellow-400 leading-none mb-1">160</div>
                  <div className="text-gray-400 uppercase tracking-wide mt-1" style={{ fontSize: "11px" }}>PSI</div>
                  <div className="text-white mt-2" style={{ fontSize: "13px" }}>Tangential Stress in P.V.C.</div>
                </div>
                <div className="rounded-xl p-6 text-center" style={{ background: "#1e3a5f" }}>
                  <div className="text-4xl font-extrabold text-yellow-400 leading-none mb-1">2,600</div>
                  <div className="text-gray-400 uppercase tracking-wide mt-1" style={{ fontSize: "11px" }}>PSI</div>
                  <div className="text-white mt-2" style={{ fontSize: "13px" }}>Plastic Limit of P.V.C.</div>
                </div>
              </div>
            </div>

            {/* Steel Stress Comparison */}
            <div className="mb-2">
              <p
                className="text-center font-medium text-gray-500 uppercase mb-4"
                style={{ fontSize: "14px", letterSpacing: "0.5px" }}
              >
                Steel Stress Comparison
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl p-6 text-center" style={{ background: "#1e3a5f" }}>
                  <div className="font-extrabold text-yellow-400 leading-none mb-1" style={{ fontSize: "40px", color: "#f4c430" }}>11,475</div>
                  <div className="text-gray-400 mt-1" style={{ fontSize: "11px" }}>PSI</div>
                  <div className="text-white mt-2" style={{ fontSize: "13px" }}>Tangential Stress in Steel</div>
                  <div className="text-gray-400 italic mt-1" style={{ fontSize: "12px" }}>Reduced from 21,150 PSI before IT3</div>
                </div>
                <div
                  className="rounded-xl p-6 flex flex-col items-center justify-center text-center"
                  style={{ background: "#f4c430" }}
                >
                  <div className="font-extrabold leading-none mb-1" style={{ fontSize: "56px", color: "#1e3a5f" }}>46%</div>
                  <div className="font-semibold mt-1" style={{ fontSize: "15px", color: "#1e3a5f" }}>Stress Reduction</div>
                  <div className="mt-1" style={{ fontSize: "12px", color: "#2d5282" }}>vs. conventional single-wall pipe</div>
                </div>
              </div>
            </div>
          </div>

          {/* Neat Cement Grout */}
          <div className="border-t border-gray-200 pt-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">The Crucial Component: Neat Cement Grout</h2>

            {/* ── Step 4: Pull quote ── */}
            <blockquote className="border-l-4 border-yellow-400 bg-gray-50 px-6 py-4 my-6 rounded-r-lg">
              <p className="text-gray-700 text-lg italic leading-relaxed">
                "Once injected and cured in the annular space, the cement combines the two conduits into one
                multiwall pipe — the most advantageous solution for double-wall containment."
              </p>
            </blockquote>

            <p className="text-gray-800 mb-6">
              The most crucial and fundamental component is the specific neat cement grout formula that once injected
              and cured in the annular space it combines the two conduits into one multiwall pipe. This makes the IT3
              System the most advantageous solution that meets or exceeds double wall containment requirements.
            </p>

            {/* ── Step 5: Yellow left-border bullet cards ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
              <div
                className="rounded-lg p-6 border-l-4 border-yellow-400"
                style={{ background: "#0f1e35" }}
              >
                <h3 className="text-lg font-semibold text-yellow-400 mb-4">Key Properties of the Cement Grout</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-0.5">▸</span>
                    High modulus of elasticity in compression (2.0–3.0×10<sup>6</sup> psi)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-0.5">▸</span>
                    High compressive strength (8,000–10,000 psi)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-0.5">▸</span>
                    Low shrinkage value
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-0.5">▸</span>
                    Hydraulic set — external heat not required to cure
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-0.5">▸</span>
                    Similar thermal expansion to steel
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-0.5">▸</span>
                    Optimum flow properties
                  </li>
                </ul>
              </div>
              <div
                className="rounded-lg p-6 border-l-4 border-yellow-400"
                style={{ background: "#0f1e35" }}
              >
                <h3 className="text-lg font-semibold text-yellow-400 mb-4">Functions of the Cement Grout</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-0.5">▸</span>
                    Combines the two conduits into a unified multiwall pipe
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-0.5">▸</span>
                    Meets or exceeds double-wall containment standards
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-0.5">▸</span>
                    Provides hoop strength transmission for structural integrity
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-0.5">▸</span>
                    Serves as a secondary corrosion barrier
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-0.5">▸</span>
                    Offers negative buoyancy, enhancing stability in submerged environments
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-0.5">▸</span>
                    Acts as a thermal insulator
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Manufacturing Options */}
          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Manufacturing Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Factory Manufacturing</h3>
                <p className="text-gray-800">
                  The multiwall pipe can be manufactured in double-random lengths in a plant, ensuring precise quality
                  control and consistent production standards.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">In-Situ Installation</h3>
                <p className="text-gray-800">
                  Alternatively, it can be installed in-situ, using existing pipelines as the outer containment layer.
                  This proprietary process revitalizes existing pipelines, restoring them to optimal performance and
                  operating standards.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <section className="py-20 bg-gray-900 w-full mt-12" id="contact">
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
    </div>
  )
}
