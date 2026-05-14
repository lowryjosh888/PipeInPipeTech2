import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Settings, Layers, Zap, Wrench, Droplets, Gauge, Phone, Mail, MapPin } from "lucide-react"

export default function Features() {
  return (
    <div className="min-h-screen w-full bg-gray-100">

      {/* ── Hero Banner ── */}
      <div
        className="relative w-full h-72 md:h-96 flex items-end"
        style={{
          backgroundImage: "url('/images/In-Situ-Pipe-Rehabilitation2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">IT3 System Features</h1>
        </div>
      </div>

      <div className="w-full px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center text-yellow-400 hover:text-yellow-500 mb-8">
            <ArrowLeft className="mr-2" /> Back to Home
          </Link>
        </div>

        {/* ── Key Features — photo background treatment ── */}
        <div className="relative overflow-hidden max-w-7xl mx-auto mb-8 rounded-xl shadow-xl">
          {/* Background photo */}
          <img
            src="/images/BenefitStrips1.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Dark navy overlay ~90% */}
          <div className="absolute inset-0" style={{ background: "rgba(10, 22, 40, 0.76)" }} />

          {/* Content */}
          <div className="relative px-8" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
            <h2 className="text-2xl font-bold text-white mb-4">Key Features of the IT3 System</h2>
            <p className="mb-8" style={{ color: "rgba(255,255,255,0.75)" }}>
              The IT3 Multiwall Pipe System is built on a design principle that ensures the plastic carrier pipe is
              separated from the steel containment pipe, delivering several key benefits and features that make it the
              ideal solution for challenging pipeline environments.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: <Layers className="h-10 w-10 text-yellow-400 flex-shrink-0" />, title: "Three-Phase Design", body: "The IT3 System features three distinct layers: an inner plastic liner, an outer steel or hard material casing, and a cement grout filling the annular space between them, creating a robust multiwall piping solution." },
                { icon: <Settings className="h-10 w-10 text-yellow-400 flex-shrink-0" />, title: "Flange or Flange-Free Installation", body: "The system eliminates the need for numerous flanges, simplifying installation and reducing potential leak points. This is dependent on valves, flow monitors, and other components." },
                { icon: <Zap className="h-10 w-10 text-yellow-400 flex-shrink-0" />, title: "Controlled Stress State", body: "The plastic liner remains within its elastic deformation range, extending its lifespan and preventing stress-related failures common in other piping systems." },
                { icon: <Wrench className="h-10 w-10 text-yellow-400 flex-shrink-0" />, title: "Liner Material Flexibility", body: "Any type of plastic pipe can be used as the liner, offering adaptability for different applications and fluid types, from corrosive chemicals to high-temperature streams." },
                { icon: <Droplets className="h-10 w-10 text-yellow-400 flex-shrink-0" />, title: "Corrosion Protection", body: "The high pH of the cement grout passivates steel and acts as an inhibitor between the OD of the inner liner and ID of the outer steel casing, providing a secondary corrosion defense system." },
                { icon: <Gauge className="h-10 w-10 text-yellow-400 flex-shrink-0" />, title: "High-Performance Under Pressure", body: "The IT3 System can handle pressures from vacuum to 3500 psi, making it suitable for a wide range of industrial applications from low-pressure drainage to high-pressure transport lines." },
              ].map((card, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-6 rounded-lg"
                  style={{ background: "#0f1e35", borderLeft: "3px solid #f4c430" }}
                >
                  {card.icon}
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#cbd5e1" }}>{card.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 max-w-7xl mx-auto mb-12">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Specialized Features</h2>

            <div className="mb-16">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Collar Coupling</h3>
              <p className="text-gray-600 mb-4">
                New IT piping systems incorporate a patented coupling device, the Collar, enabling simultaneous
                welding of the steel and fiberglass components for a robust joint. This innovative coupling
                technology ensures:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
                <li>Leak-free connections between pipe sections</li>
                <li>Maintenance of the three-phase integrity throughout the pipeline</li>
                <li>Simplified installation and joining process</li>
                <li>Enhanced structural integrity at connection points</li>
              </ul>

              {/* 4-photo gallery */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { src: "/images/Collar1.JPG",   caption: "Epoxy application" },
                  { src: "/images/Collar2.jpg",   caption: "Epoxy application complete" },
                  { src: "/images/Collar3.jpeg",  caption: "Collar inset for joining" },
                  { src: "/images/Collar4.jpg",   caption: "Final weld" },
                ].map((photo, i) => (
                  <div key={i}>
                    <div className="h-64 rounded-lg overflow-hidden shadow-md">
                      <img
                        src={photo.src}
                        alt={photo.caption}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-sm text-gray-600 font-medium text-center mt-2">{photo.caption}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">In-Situ Rejuvenation</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="relative h-48 md:h-auto rounded-lg overflow-hidden bg-gray-200">
                  <Image
                    src="/images/in-situ-rejuvenation.JPG"
                    alt="In-Situ Rejuvenation Process"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-2">
                  <p className="text-gray-600 mb-4">
                    This proprietary process revitalizes existing pipelines, restoring them to optimal performance and
                    operating standards through the IT3 multiwall system. The in-situ rejuvenation process offers:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                    <li>Minimal disruption to surrounding infrastructure</li>
                    <li>Significant cost savings compared to full replacement</li>
                    <li>Extended pipeline life by decades</li>
                    <li>Improved flow characteristics and reduced maintenance</li>
                    <li>Ability to address localized corrosion issues effectively</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Centralization Technology</h3>
              <p className="text-gray-600 mb-4">
                The IT3 System features a unique approach to liner centralization within the outer casing:
              </p>

              {/* Paragraph 1 — buoyancy/corrosion */}
              <p className="text-gray-600 mb-6">
                Without the use of any centralizers, the plastic liner surrounded by cement slurry with a specific
                gravity of 1.8 will rise to the top/12:00 position causing a buoyancy effect. This is exceptionally
                beneficial in rejuvenation applications since the majority of localized corrosion occurs at the bottom
                of the pipeline.
              </p>

              {/* 2-column photo grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="h-64 rounded-lg overflow-hidden shadow-md">
                    <img src="/images/pipe-centralizer1.jpg" alt="Centralizer device in-situ" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-sm text-gray-600 font-medium text-center mt-2">Centralizer device in-situ</p>
                </div>
                <div>
                  <div className="h-64 rounded-lg overflow-hidden shadow-md">
                    <img src="/images/pipe-centralizer2.jpg.png" alt="Cross-section showing liner placement" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-sm text-gray-600 font-medium text-center mt-2">Cross-section showing liner placement</p>
                </div>
              </div>

              {/* Paragraph 2 — cement thickness/stress */}
              <p className="text-gray-600 mb-6">
                Even with varying grout thickness (e.g., 0.3" at the top and 1.2" at the bottom), stress on the
                plastic liner varies insignificantly. With most standard in-situ rejuvenations, it is preferred to
                avoid the use of centralizers, though in other intricate situations, centralizing techniques have been
                and will be used.
              </p>

              {/* Single centered diagram */}
              <div className="mb-8">
                <div className="max-w-md mx-auto rounded-lg overflow-hidden shadow-md">
                  <img src="/images/centralizing.png" alt="Varying grout thickness diagram" className="w-full h-auto" />
                </div>
                <p className="text-sm text-gray-600 font-medium text-center mt-2">Varying grout thickness: .3" at top, 1.2" at bottom</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Applications</h2>
            <p className="text-gray-600 mb-6">
              The main target with the majority of multilayer processes is to combine various properties that are
              difficult, if not impossible to achieve in a single material. The IT3 System is suitable for a wide range
              of applications:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Oil & Gas Pipelines</h3>
                <p className="text-gray-600">
                  For crude oil, refined products, and natural gas transport with corrosion protection
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Chemical Processing</h3>
                <p className="text-gray-600">For handling corrosive chemicals and preventing contamination</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Mining Operations</h3>
                <p className="text-gray-600">For slurry transport and acid-resistant applications</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Municipal Infrastructure</h3>
                <p className="text-gray-600">For water and wastewater systems with extended service life</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Submarine Pipelines</h3>
                <p className="text-gray-600">With enhanced stability and corrosion resistance in marine environments</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Power Utilities</h3>
                <p className="text-gray-600">For cooling water systems and process piping with thermal insulation</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 text-white rounded-lg shadow-xl p-8 max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center">Discover the IT3 System Advantage</h2>
          <p className="text-center mb-8">
            Contact our team to learn more about how the IT3 System's features can address your specific pipeline
            challenges.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/technology"
              className="bg-white text-gray-800 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Explore the Technology
            </Link>
            <Link
              href="/benefits"
              className="bg-white text-gray-800 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              See the Benefits
            </Link>
          </div>
        </div>

        {/* Contact Section */}
        <section className="py-20 bg-gray-900 w-full" id="contact">
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
