import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Phone, Mail, MapPin } from "lucide-react"
import CollapsibleProjectHistory from "../../components/CollapsibleProjectHistory"

export default function History() {
  const timelineEntries = [
    { era: "1960s", text: "Mr. Tierling serves as district manager for Magna Chem. Ltd. in Alberta, Canada" },
    { era: "Late 1960s", text: "Mr. Tierling meets engineer Bennant Fruck, beginning their collaboration" },
    { era: "1968", text: "Tierling & Fruck begin dedicated engineering, development, and installation of the patented IT3 multiwall system" },
    { era: "1971", text: "First IT3 System successfully installed" },
    { era: "1973", text: "Ken Tierling relocates and incorporates in Conroe, Texas" },
    { era: "1970s–80s", text: "Expansion of IT3 System applications across multiple industries" },
    { era: "1980s–90s", text: "International expansion with installations in South America and the Caribbean" },
    { era: "2000s–10s", text: "Continued growth with major projects in Peru, Chile, and other locations" },
    { era: "Present", text: "IT3 Systems continue to operate successfully in diverse environments worldwide" },
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

      {/* ── Step 1: Hero Banner ── */}
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

          {/* Ken Tierling section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">The Founder of IT3: Ken Tierling's Story</h2>

            {/* ── Step 2: Ken Tierling photo with dark navy background and caption ── */}
            <div className="rounded-xl overflow-hidden mb-6" style={{ background: "#0f1e35" }}>
              <div className="relative h-72 md:h-96">
                <Image
                  src="/images/KenTierling.png"
                  alt="Ken Tierling, founder of the IT3 System"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-center text-gray-400 text-sm py-3 px-4">
                Ken Tierling — founder of the IT3 Multiwall Piping System, patented over 50 years ago
              </p>
            </div>

            {/* ── Step 3: body text gray-800 ── */}
            <p className="text-gray-800 mb-4">
              In the mid 60's Mr. Tierling served as the district manager for Magna Chem. Ltd. in Alberta, Canada which
              would dispense chemical solutions to try and neutralize pipeline corrosion issues. Realizing that pipe
              line corrosion was becoming difficult to manage and grave concern, Mr. Tierling coincidently met Bennant
              Fruck an engineer in the same field. Together they teamed and developed a relationship that would change
              the pipe line industry and thus the IT3 Multiwall Piping System was developed.
            </p>
            <p className="text-gray-800 mb-4">
              In 1971 the first IT3 System was installed and in 1973 Mr. Tierling relocated and incorporated in Conroe,
              Texas. Throughout the years the necessity in fabricating multiwall piping systems became evident in
              replacing existing pipelines beyond repair. Mr. Tierling's primary focus was designing and building
              multiwall pipe line systems that contain / eliminate corrosion complications that meet or exceed double
              wall containment requirements. His vision was that the IT3 System would not only be segmented to one
              industry but to be universal in all fields including oil, gas, chemical, mining, power utility and all
              municipal entities.
            </p>
            <p className="text-gray-800">
              Mr. Tierling has successfully implemented the IT3 System in both onshore and offshore environments, across
              a wide range of fluid streams and multiphase systems. The IT3 System remains fully intact and operational
              to this day, demonstrating long-term performance in diverse climates throughout North and South America,
              as well as the Caribbean.
            </p>
          </div>

          {/* About IT3 Multiwall System */}
          <div className="border-t border-gray-200 pt-8 mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">About IT3 Multiwall System</h3>

            {/* ── Step 6: Pull quote ── */}
            <blockquote className="border-l-4 border-yellow-400 bg-gray-50 px-6 py-4 my-6 rounded-r-lg">
              <p className="text-gray-700 text-lg italic leading-relaxed">
                "Since 1968, dedicated to engineering solutions that eliminate galvanic corrosion — meeting
                the double-wall containment requirements of petroleum, mining, and power line industries."
              </p>
            </blockquote>

            <p className="text-gray-800 mb-4">
              Since 1968, Mr. Tierling has been dedicated to the engineering, development, and installation of its
              patented multiwall system, IT3, which eliminates galvanic corrosion problems and meets the necessary
              requirements of the petroleum, mining, and power line industries regarding double-wall containment.
            </p>
            <p className="text-gray-800 mb-4">
              The IT3 Multiwall Piping System has been installed in numerous climates and terrains across the American
              continent, including the North Slope of Alaska, the streets of New York City, the Bahamas, California, and
              Peru, among others. The system operates with all types of fluids such as crude oil, oil, gas, water,
              slurry, and multi-phase systems with pressures ranging from vacuum to 3500 PSI. Additionally, the PPT IT3
              system has developed projects in areas where endangered species are found, thus ensuring the system's
              ability to protect the environment.
            </p>
          </div>

          {/* IT3 Technology section */}
          <div className="border-t border-gray-200 pt-8 mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">The IT3 Multiwall System Technology</h3>
            <p className="text-gray-800 mb-4">
              PPT's design focused on the proposed fusion of three materials (IT3), sliding a corrosion-resistant lining
              inside a stronger metal tube; thus providing a material option that contains chemical and mechanical
              properties resistant to corrosion.
            </p>
            <p className="text-gray-800 mb-4">
              The important art and science of the procedure consists of controlling the flow characteristics and
              properties of a non-Newtonian fluid, the cement slurry, to ensure complete continuity of the stress
              transfer mechanism. Our patented techniques, based on decades of experience, are the only ones known to
              make a very high success rate.
            </p>
            <p className="text-gray-800 mb-4">
              PPT engineers determine the selection of the internal lining material (fiberglass reinforced plastic,
              polyethylene, polybutylene, ceramics, PVC, etc.). These are chosen for their high corrosion resistance and
              excellent flow characteristics. The coating must also adapt to present and future operational demands.
            </p>
            <p className="text-gray-800 mb-4">
              The cement slurry, its design and mixture is exclusive to the IT3 system. The cement injected into the
              annular space confines the lining, managing to join the lining with the outer tube.
            </p>
          </div>

          {/* ── Step 4: Visual vertical timeline ── */}
          <div className="border-t border-gray-200 pt-8 mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-8">Evolution of the IT3 System</h3>
            <div className="relative">
              {/* Vertical yellow line */}
              <div
                className="absolute left-16 top-0 bottom-0 w-0.5"
                style={{ background: "linear-gradient(to bottom, #facc15, #facc15 90%, transparent)" }}
              />
              <div className="space-y-6">
                {timelineEntries.map((entry, i) => (
                  <div key={i} className="flex items-start gap-6">
                    {/* Date badge */}
                    <div
                      className="flex-shrink-0 w-32 text-right pr-4 relative"
                    >
                      <span
                        className="inline-block text-xs font-bold text-yellow-400 px-2 py-1 rounded"
                        style={{ background: "#0f1e35" }}
                      >
                        {entry.era}
                      </span>
                      {/* Dot on the line */}
                      <span
                        className="absolute right-[-5px] top-2 w-3 h-3 rounded-full border-2 border-yellow-400"
                        style={{ background: "#0f1e35" }}
                      />
                    </div>
                    {/* Entry text */}
                    <div className="flex-grow pt-0.5 pb-2">
                      <p className="text-gray-800">{entry.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Complete Project History (collapsible) */}
          <CollapsibleProjectHistory />

          {/* Global Implementation */}
          <div className="border-t border-gray-200 pt-8 mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Global Implementation</h3>

            <blockquote className="border-l-4 border-yellow-400 bg-gray-50 px-6 py-4 my-6 rounded-r-lg">
              <p className="text-gray-700 text-lg italic leading-relaxed">
                "Over 54 years and 65+ projects across the Americas — every IT3 pipeline constructed to date
                continues to operate with sustained integrity and no signs of degradation."
              </p>
            </blockquote>

            <p className="text-gray-800 mb-6">
              Over the past 54+ years in the hydrocarbon industry (Oil &amp; Gas), the IT3 Multiwall System has been
              effectively engineered and applied in over 65 projects throughout the Americas — including North, Central,
              and South America, as well as the Caribbean. To date, pipelines constructed using the IT3 System continue
              to operate with sustained integrity and no signs of degradation over time, enabling operations to be
              carried out with confidence, safety, and efficiency.
            </p>

            <p className="text-gray-800 font-medium mb-4">Notable installations include:</p>

            {/* ── Step 5: Location cards ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
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

            <p className="text-gray-800">
              The IT3 System has been successfully implemented in various applications, handling fluid streams and
              multiphase systems with pressures ranging from vacuum to 3500 psi. This remarkable versatility has made it
              the preferred solution across multiple industries, including oil, gas, chemical, mining, power utility,
              and municipal infrastructure.
            </p>
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
