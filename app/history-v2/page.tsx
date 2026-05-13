"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Phone, Mail, MapPin } from "lucide-react"
import CollapsibleProjectHistory from "../../components/CollapsibleProjectHistory"
import HistoryMap from "../../components/HistoryMap"

export default function HistoryV2() {
  const timelineEntries = [
    { era: "1960s",     text: "Mr. Tierling serves as district manager for Magna Chem. Ltd. in Alberta, Canada" },
    { era: "Late 1960s", text: "Mr. Tierling meets engineer Bennant Fruck, beginning their collaboration" },
    { era: "1968",      text: "Tierling & Fruck begin dedicated engineering, development, and installation of the patented IT3 multiwall system" },
    { era: "1971",      text: "First IT3 System successfully installed" },
    { era: "1970s–80s", text: "Expansion of IT3 System applications across multiple industries" },
    { era: "1980s–90s", text: "International expansion with installations in South America and the Caribbean" },
    { era: "2000s–10s", text: "Continued growth with major projects in Peru, Chile, and other locations" },
    { era: "Present",   text: "IT3 Systems continue to operate successfully in diverse environments worldwide" },
  ]

  const installations = [
    "Prudhoe Bay, Alaska — North Slope (1982)",
    "New York City — East River & Astoria (1993–1997)",
    "Grand Bahamas, Bahama Islands (1980)",
    "California — Multiple locations (1976–2005)",
    "Peru — Multiple coastal locations (2007–2013)",
    "Chile — Arica (2012)",
    "Texas — Multiple locations (1973–1984)",
    "Canada — Multiple provinces (1971–1975)",
  ]

  return (
    <div className="min-h-screen w-full bg-gray-100">

      {/* ── Hero Banner ── */}
      <div
        className="relative w-full h-72 md:h-96 flex items-end"
        style={{
          backgroundImage: "url('/images/In-Situ-Pipe-Rehabilitation.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            The History of the IT3 System
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

        <div className="bg-white rounded-lg shadow-xl p-8 max-w-7xl mx-auto mb-12">

          {/* ── Founder Section: photo left, paragraph 1 right ── */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">The Founder of IT3: Ken Tierling's Story</h2>
            <div className="w-16 h-1 bg-yellow-400 mb-6 rounded-full" />

            <div className="flex gap-8 items-center">
              {/* Photo — ~16% smaller than previous */}
              <div className="flex-shrink-0" style={{ width: 235 }}>
                <div className="rounded-lg overflow-hidden border-4 border-gray-200 shadow-md">
                  <Image
                    src="/images/KenTierling.png"
                    alt="Ken Tierling, founder of the IT3 System"
                    width={235}
                    height={285}
                    className="object-cover object-top w-full"
                  />
                </div>
                <p className="text-center text-gray-500 text-xs mt-2 px-2 leading-snug">
                  Ken Tierling<br />Founder, IT3 Multiwall Piping System
                </p>
              </div>

              {/* Paragraph 1 only — vertically centered beside photo */}
              <p className="text-gray-800 flex-1 min-w-0">
                In the mid 60's Mr. Tierling served as the district manager for Magna Chem. Ltd. in Alberta, Canada
                which would dispense chemical solutions to try and neutralize pipeline corrosion issues. Realizing that
                pipe line corrosion was becoming difficult to manage and grave concern, Mr. Tierling coincidently met
                Bennant Fruck an engineer in the same field. Together they teamed and developed the IT3 Multiwall
                Piping System that contains / eliminates corrosion complications while meeting or exceeding double wall
                containment requirements, with the first installation occurring in 1971 in Alberta, Canada.
              </p>
            </div>
          </div>

          {/* ── Global Reach: paragraph 2 left, map right ── */}
          <div className="border-t border-gray-200 pt-8 mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Global Reach</h3>
            <div className="w-16 h-1 bg-yellow-400 mb-6 rounded-full" />
            <div className="flex gap-8 items-start">
              {/* Paragraph 2 on the left */}
              <div className="flex-1 min-w-0">
                <p className="text-gray-800">
                  Since that time the IT3 System has been installed in both onshore and offshore environments, in a wide
                  range of fluid streams and multiphase systems, and in numerous climates and terrains across the American
                  continent, including the North Slope of Alaska, the streets of New York City, the Bahamas, California,
                  and Peru, among others.
                  <br /><br />
                  The system operates with all types of fluids such as crude oil, oil, gas, water,
                  slurry, and multi-phase systems with pressures ranging from vacuum to 3500 PSI. Additionally, the PPT
                  IT3 system has developed projects in areas where endangered species are found, thus ensuring the
                  system's ability to protect the environment. This remarkable versatility has made it the preferred
                  solution across multiple industries, including oil, gas, chemical, mining, power utility, and municipal
                  infrastructure.
                  <br /><br />
                  To date, pipelines constructed using the IT3 System continue to operate with sustained
                  integrity and no signs of degradation over time, enabling operations to be carried out with confidence,
                  safety, and efficiency.
                </p>
              </div>

              {/* Map on the right — position:relative + z-index:0 contains Leaflet's internal z-indices */}
              <div className="flex-1 min-w-0" style={{ position: "relative", zIndex: 0 }}>
                <HistoryMap />
              </div>
            </div>
          </div>

          {/* ── Notable Installations ── */}
          <div className="border-t border-gray-200 pt-8 mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Notable Installations</h3>
            <div className="w-16 h-1 bg-yellow-400 mb-6 rounded-full" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {installations.map((loc, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-lg px-4 py-3 border-l-4 border-yellow-400"
                  style={{ background: "#0f1e35" }}
                >
                  <span className="text-yellow-400 mt-0.5 flex-shrink-0">▸</span>
                  <span className="text-gray-300 text-sm">{loc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Complete Project History (collapsible) ── */}
          <CollapsibleProjectHistory />

          {/* ── Evolution Timeline (at bottom) ── */}
          <div className="border-t border-gray-200 pt-8 mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Evolution of the IT3 System</h3>
            <div className="w-16 h-1 bg-yellow-400 mb-8 rounded-full" />
            <div className="relative">
              {/* Vertical yellow line */}
              <div
                className="absolute left-16 top-0 bottom-0 w-0.5"
                style={{ background: "linear-gradient(to bottom, #facc15, #facc15 90%, transparent)" }}
              />
              <div className="space-y-6">
                {timelineEntries.map((entry, i) => (
                  <div key={i} className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-32 text-right pr-4 relative">
                      <span
                        className="inline-block text-xs font-bold text-yellow-400 px-2 py-1 rounded"
                        style={{ background: "#0f1e35" }}
                      >
                        {entry.era}
                      </span>
                      <span
                        className="absolute right-[-5px] top-2 w-3 h-3 rounded-full border-2 border-yellow-400"
                        style={{ background: "#0f1e35" }}
                      />
                    </div>
                    <div className="flex-grow pt-0.5 pb-2">
                      <p className="text-gray-800">{entry.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
