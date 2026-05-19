import Link from "next/link"
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react"

const articles = [
  {
    title: "In-situ Repair Method for Concrete Cylinder Pipe",
    date: "May 29, 2020",
    excerpt:
      "The IT3 System provides an effective repair solution for concrete cylinder pipe that has experienced corrosion failure in both industrial and municipal pipeline systems.",
    href: "/articles/concrete-cylinder-pipe-repair",
  },
  {
    title: "Multiwall Piping Solves Corrosion Problems",
    date: "May 29, 2020",
    excerpt:
      "Con Ed recently replaced two corroded fuel oil pipelines in Manhattan using a new multiwall piping system.",
    href: "/articles/multiwall-piping-corrosion-solutions",
  },
  {
    title: "Multiwall System Curbs Sour Gas Corrosion",
    date: "May 29, 2020",
    excerpt:
      "How the IT3 System addresses corrosion challenges in sour gas environments with its compressed liner technology.",
    href: "/articles/multiwall-sour-gas-corrosion",
  },
  {
    title: "Multiwall System Used to Repair Subsea Line",
    date: "May 29, 2020",
    excerpt:
      "Case study demonstrating the application of IT3 technology in challenging subsea pipeline repair scenarios.",
    href: "/articles/multiwall-subsea-repair",
  },
  {
    title: "Con Edison Lines Replaced by New Multiwall Piping System",
    date: "May 29, 2020",
    excerpt:
      "Consolidated Edison Company of New York recently replaced two corroded fuel oil pipelines using a new multiwall piping system.",
    href: "/articles/con-edison-multiwall-replacement",
  },
]

export default function Articles() {
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
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">Articles of Reference</h1>
        </div>
      </div>

      {/* ── Attribution ── */}
      <div className="w-full px-4" style={{ marginTop: "32px", marginBottom: "40px" }}>
        <p className="text-center italic text-gray-500 max-w-2xl mx-auto" style={{ fontSize: "14px" }}>
          All articles reproduced below are sourced from the family of Ken Tierling.
        </p>
      </div>

      {/* ── Article Grid ── */}
      <div className="w-full px-4 pb-12">
        <div className="max-w-7xl mx-auto">

          {/* 2-col grid; last card centred via the wrapper trick */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article, i) => {
              const isLast = i === articles.length - 1
              return (
                <div
                  key={i}
                  className={`bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col${isLast ? " md:col-start-1 md:col-end-2 md:justify-self-center md:w-full" : ""}`}
                  style={{ borderTop: "4px solid #f4c430" }}
                >
                  {/* Icon area */}
                  <div className="px-6 pt-6 pb-2 flex items-center justify-center">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center"
                      style={{ background: "#0f1e35" }}
                    >
                      <svg className="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-6 pt-4 pb-6 flex flex-col flex-1">
                    <h2 className="text-lg font-bold mb-1 leading-snug" style={{ color: "#0f1e35" }}>
                      {article.title}
                    </h2>
                    <p className="text-gray-400 text-xs mb-3">{article.date}</p>
                    <p className="text-gray-600 text-sm leading-relaxed flex-1">{article.excerpt}</p>
                    <div className="mt-5">
                      <Link
                        href={article.href}
                        className="inline-flex items-center gap-1 text-sm font-semibold hover:gap-2 transition-all duration-150"
                        style={{ color: "#0f1e35" }}
                      >
                        Read Article <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
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
