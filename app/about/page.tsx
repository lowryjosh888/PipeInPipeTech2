import Image from "next/image"
import { MapPin, Phone, Mail, Globe, Award, Target } from "lucide-react"

export default function AboutUs() {
  return (
    <div className="min-h-screen w-full bg-gray-100">

      {/* ── Hero Banner ── */}
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
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">About Us</h1>
        </div>
      </div>

      {/* ── Stats Bar ── */}
      <div className="w-full bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {["54+ Years of Innovation", "65+ Projects", "North & South America", "Vacuum to 3500 PSI"].map((stat, i, arr) => (
            <div key={stat} className="flex items-center gap-6">
              <span className="text-sm font-semibold tracking-wide" style={{ color: "#0f1e35" }}>{stat}</span>
              {i < arr.length - 1 && <span className="text-gray-300 font-light select-none">|</span>}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Pipe-in-Pipe Technologies</h1>
        </div>

        {/* Company Overview */}
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-7xl mx-auto mb-12">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Company</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 mb-4">
                  Pipe in Pipe Technologies Inc. (PPT) was formed in 2020 on the basis and implementation of the IT3
                  Multiwall System, and is now the only leading designer, manufacturer and installer. With continued
                  success on corrosion prevention, inhibition and structural failures in new and existing pipe lines,
                  PPT leads the industry in maintaining the longevity and efficiency in multiwall pipe solutions.
                </p>
                <p className="text-gray-600 mb-4">
                  PPT has over 30 years combined experience with a team dedicated to be the exclusive company and
                  industry leader in multiwall pipelines with the proven IT3 System. From in-situ repairs to new
                  installations in all fluid streams, the IT3 System has saved the industry considerably on short term
                  and long-term costs based on stability and maintenance free operation.
                </p>
                <p className="text-gray-600">
                  PPT remains determined, committed and devoted in becoming a global leader in addressing internal
                  corrosion issues in existing and new pipe lines by installing multiwall containment solutions in order
                  to maintain a healthy, clean and safe environment.
                </p>
              </div>
              <div className="relative h-64 md:h-full rounded-lg overflow-hidden bg-gray-200">
                <Image
                  src="/images/our-company.jpeg"
                  alt="Pipe-in-Pipe Technologies"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* CEO Section */}
          <div className="border-t border-gray-200 pt-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Brian Ohlendorff – CEO</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1 flex flex-col items-start">
                <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-200 mb-4" style={{ width: "60%" }}>
                  <Image
                    src="/images/BrianOhlendorff.png"
                    alt="Brian Ohlendorff - CEO"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <p className="text-gray-600 mb-4">
                  In 2007 Brian Ohlendorff began his employment with the late Ken Tierling. Starting at an entry level
                  position learning the mechanics and operation of the equipment, hot tapping, pipeline cleaning,
                  gauging and calibrating, liner joint assembly, joint layups, liner insertion, hydrostatic and nematic
                  testing, cementation, onshore and offshore termination ends, field supervisor and finally project
                  management.
                </p>
                <p className="text-gray-600 mb-4">
                  Mr. Ohlendorff is the only individual to obtain the knowledge, skills, technique and implementation of
                  the IT3 multiwall pipeline system through the direct training and supervision of Mr. Tierling.
                </p>
              </div>
            </div>
          </div>

          {/* Mission, Vision, Values */}
          <div className="border-t border-gray-200 pt-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-black p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-yellow-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Our Mission</h3>
                </div>
                <p className="text-white">
                  To provide innovative, environmentally responsible pipe rehabilitation solutions that extend
                  infrastructure lifespan while minimizing disruption and maximizing value for our clients.
                </p>
              </div>
              <div className="bg-black p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Globe className="h-8 w-8 text-yellow-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Our Vision</h3>
                </div>
                <p className="text-white">
                  To be the global leader in pipe rehabilitation technology, setting industry standards for innovation,
                  quality, and environmental stewardship in infrastructure renewal.
                </p>
              </div>
              <div className="bg-black p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 text-yellow-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Our Values</h3>
                </div>
                <ul className="text-white space-y-2">
                  <li>• Innovation and continuous improvement</li>
                  <li>• Environmental responsibility</li>
                  <li>• Quality and excellence in execution</li>
                  <li>• Integrity and transparency</li>
                  <li>• Client-focused solutions</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Company Facts */}
          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Company Facts</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-yellow-400 p-4 rounded-lg text-center shadow-md">
                <p className="text-3xl font-bold text-black mb-2">50+</p>
                <p className="text-black">Combined Years of Experience</p>
              </div>
              <div className="bg-yellow-400 p-4 rounded-lg text-center shadow-md">
                <p className="text-3xl font-bold text-black mb-2">65+</p>
                <p className="text-black">Major Projects Completed</p>
              </div>
              <div className="bg-yellow-400 p-4 rounded-lg text-center shadow-md">
                <p className="text-3xl font-bold text-black mb-2">12</p>
                <p className="text-black">Regions Served</p>
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
