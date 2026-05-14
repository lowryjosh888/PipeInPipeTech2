import { Phone, Mail, MapPin, Download, ExternalLink } from "lucide-react"

const PDF_PATH = "/PPT_Presentation_Revised.pdf"

export default function Brochure() {
  return (
    <div className="min-h-screen w-full bg-gray-100">

      {/* ── Hero Banner ── */}
      <div
        className="relative w-full h-72 md:h-96 flex items-end"
        style={{
          backgroundImage: "url('/images/company-brochure-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">Company Brochure</h1>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="w-full px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">

          {/* Intro text */}
          <p className="text-gray-600 mb-12" style={{ fontSize: "17px", lineHeight: "1.7" }}>
            Download our comprehensive technical brochure to learn more about the IT3 Multiwall System,
            installation methods, applications, and project experience.
          </p>

          {/* PDF Cover Thumbnail */}
          <div className="mb-8 flex justify-center">
            <div
              className="overflow-hidden rounded-lg shadow-lg"
              style={{ border: "1px solid #e5e7eb", maxWidth: 400, width: "100%" }}
            >
              <img
                src="/images/about-us-hero2.png"
                alt="PPT Company Brochure cover"
                className="w-full h-auto block"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={PDF_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 rounded-lg font-semibold transition-colors duration-200 w-full sm:w-auto"
              style={{
                background: "#0f1e35",
                color: "#ffffff",
                height: "48px",
                minWidth: "180px",
              }}
            >
              <ExternalLink className="h-4 w-4" />
              View PDF
            </a>
            <a
              href={PDF_PATH}
              download="PPT_Presentation_Revised.pdf"
              className="flex items-center justify-center gap-2 px-8 rounded-lg font-semibold transition-colors duration-200 w-full sm:w-auto"
              style={{
                background: "#f4c430",
                color: "#0f1e35",
                height: "48px",
                minWidth: "180px",
              }}
            >
              <Download className="h-4 w-4" />
              Download PDF
            </a>
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
  )
}
