import Link from "next/link"
import { ArrowLeft, Phone, Mail, MapPin } from "lucide-react"

export default function MultiwallPipingCorrosionSolutions() {
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
            Multiwall Piping Solves Corrosion Problems
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

            {/* Byline */}
            <p className="text-gray-500 italic text-sm mb-5">
              Reprinted from the March 1998 issue of ELECTRIC LIGHT &amp; POWER magazine. Used with permission.
            </p>

            <p className="text-gray-700 mb-1">
              <span className="font-bold">Natarajan K. Raman</span>, Con Edison Co. of New York, Inc.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-bold">Kenneth Tierling</span> and{" "}
              <span className="font-bold">Matthew J. Feehery</span>, Unisert Multiwall Systems, Inc.
            </p>

            {/* ── Intro ── */}
            <p className="text-gray-700 mb-8">
              Con Ed recently replaced two corroded fuel oil pipelines in Manhattan using a new multiwall piping
              system. The project followed more than three years of engineering and evaluations by the utility to find
              a suitable replacement fuel oil supply system to connect the fossil fuel power plants serving New York
              City. Unisert Multiwall Systems Inc., a Texas-based multiwall pipe fabricator and installer, replaced the
              lines for Con Edison.
            </p>

            {/* ── Pipe Corrosion ── */}
            <p className="text-gray-700 mb-2 font-semibold text-gray-800">Pipe Corrosion</p>
            <p className="text-gray-700 mb-4">
              The two fuel oil pipelines were approximately 30 years old and were due for an overhaul. The system had
              begun to experience corrosion primarily caused by pipe insulation that shielded the cathodic protection
              system. During inspections and other operations, the utility observed that although the coated pipe was in
              excellent condition, the pipe wrapped with insulation needed to be replaced.
            </p>
            <p className="text-gray-700 mb-4">
              Other extraneous conditions, including a high water table and tidal action, contributed to the
              degradation of pipe segments located near the banks of the East River. Since much of the original
              installation took place in rocky granite beds and the trenches were backfilled with sand, the rock troughs
              were more susceptible to retaining moisture. The pipelines, which are located in a metropolitan area among
              a congested maze of underground electrical lines and other conduits, are also exposed to higher than
              normal amounts of stray current.
            </p>
            <p className="text-gray-700 mb-4">
              The utility&apos;s solution was to reverse the insulation process. By using a multiwall pipe, the coated
              steel pipe would be on the outside and the insulation would be located between the carrier pipe
              (fiberglass liner) and the outside steel.
            </p>
            <p className="text-gray-700 mb-4">
              This type of system served two primary functions simultaneously. The double wall system featured an
              internal fiberglass liner that was inert to galvanic corrosion and, therefore, would not cause the
              internal or external pipes to become sacrificial in the galvanic process.
            </p>
            <p className="text-gray-700 mb-4">
              Furthermore, the insulating cement in the annular space would drive the steel into a passive pH range
              acting as a corrosion inhibitor. The system could also be monitored for leak detection by applying a
              low-pressure detectable gas to the annular space. A pressure drop indicated a leak in the external case
              while line pressure equalization between the annulus and the internal liner indicated a leak in the
              carrier pipe.
            </p>
            <p className="text-gray-700 mb-8">
              Either of the two approaches, in situ/rejuvenation or replacement with new piping, would work in these
              applications. The existing external steel pipe case&apos;s condition was the major factor in reaching the
              decision to replace.
            </p>

            {/* ── Project Design ── */}
            <p className="text-gray-700 mb-2 font-semibold text-gray-800">Project Design</p>
            <p className="text-gray-700 mb-4">
              The first project involved replacing a 6-in. diameter fuel oil supply line connecting a generating
              station to a head house with a new 6-in. by 12-in. multiwall piping system.
            </p>
            <p className="text-gray-700 mb-4">
              The second project called for replacing two lines running parallel: a 10-in. diameter supply line and a
              4-in. diameter return line serving a generating station and a storage and pumping facility. Unisert
              installed a new 8-in. by 12-in. multiwall pipe system to replace the existing 10-in. supply line and a
              new 4-in. by 8-in. multiwall pipe system to replace the existing 4-in. return line.
            </p>
            <p className="text-gray-700 mb-4">
              The utility&apos;s engineering team decided that reducing the diameter of the supply line from 10 in. to
              8 in. would not significantly affect the throughput because of the improved C-factor (smoothness of the
              pipe&apos;s internal surface) of the fiberglass pipe, which compensated for the smaller diameter.
            </p>
            <p className="text-gray-700 mb-4">
              Con Ed engineers reviewed numerous approaches to rehabilitating or replacing the existing pipelines,
              including steel-inside-steel double wall piping, flexible liners and in situ-cured liners. Ultimately,
              they selected the multiwall technology because it offered the best options for system longevity and low
              maintenance, resistance to galvanic corrosion and related failures, and it met double wall containment
              requirements.
            </p>
            <p className="text-gray-700 mb-4">
              The Unisert IT3 multiwall piping system consists of sliding one pipe system inside another and then
              filling the annular space with a suitable material (grout) to create a multiwall pipe. Perhaps the most
              unique aspect of this approach is the patented SK Collar used for connecting the pipe joints and elbows
              of new pipe systems.
            </p>
            <p className="text-gray-700 mb-4">
              The SK Collar is a dual material fitting that is epoxied and inserted into the annulus prior to the two
              connecting segments being joined and welded. This precision process allows for the simultaneous joining
              of both the internal liner and the outside steel pipe. The completed weld makes for true double wall
              containment, even at the connections, and eliminates any portion of the liner from being exposed to
              external conditions and impact.
            </p>
            <p className="text-gray-700 mb-8">
              Other factors that played an important role in the decision to utilize the multiwall technology included
              the fabricator&apos;s ability to meet specific and unique design parameters. The system must handle both
              the temperatures of the product and the outside environment, so the cementatious material used in the
              grout should add insulating capabilities while maintaining the required compressive strength
              characteristics. Grout can include various cement products, flyash, plasticizers and insulation agents.
              This accounts for the system&apos;s larger than normal annular space between the fiberglass liner and
              the outside steel pipe. Typically, a liner one nominal pipe size smaller than the outer pipe is used.
              This insulation requirement was included because of the necessity of pumping No. 6 fuel oil in cold
              conditions through lines buried approximately 4 to 6 ft. below ground.
            </p>

            {/* ── System Design Life ── */}
            <p className="text-gray-700 mb-2 font-semibold text-gray-800">System Design Life</p>
            <p className="text-gray-700 mb-4">
              Life expectancy of the IT3 multiwall piping system was a primary consideration in the decision to use
              this product and approach. Estimates show that the system&apos;s life expectancy should surpass 100
              years.
            </p>
            <p className="text-gray-700 mb-4">
              By combining the components of the multiwall piping system in this configuration, limitations of the
              individual components are practically eliminated. Its operating parameters support the choice of the
              specified liner material for handling temperature, preventing erosion/corrosion and resisting chemical
              deterioration. The failure mode of shear between the glass and the resin, which can result from hoop
              loading and cyclic pressure, is eliminated because the hoop loading is transferred entirely to the steel
              via the cement.
            </p>
            <p className="text-gray-700 mb-6">
              Another important characteristic is how the three primary materials used — fiberglass, cement and steel
              — respond to thermal expansion. The cement grout acts as an anchor and locks both systems together,
              allowing them to thermally expand and contract as a single unit. All three are virtually identical in
              thermal expansion factors. Empirical testing results have indicated no degradation or detrimental effects
              to the system.
            </p>

            {/* Share */}
            <div className="border-t border-gray-200 mt-10 pt-6 flex items-center gap-4">
              <span className="text-sm text-gray-500 font-medium">Share this post:</span>
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https://www.pipeinpipetech.com/articles/multiwall-piping-corrosion-solutions"
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
              <a
                href="https://twitter.com/intent/tweet?url=https://www.pipeinpipetech.com/articles/multiwall-piping-corrosion-solutions&text=Multiwall+Piping+Solves+Corrosion+Problems"
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

      <section className="py-20 bg-gray-900 w-full mt-4">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4 text-center">Contact Info</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <a href="tel:936-242-3232" className="flex items-center justify-center group">
              <Phone className="text-yellow-400 h-8 w-8 mr-4 group-hover:text-yellow-500 transition-colors duration-200" />
              <div>
                <div className="text-sm text-white">Phone</div>
                <div className="text-lg font-semibold text-white group-hover:text-yellow-500 transition-colors duration-200">936-242-3232</div>
              </div>
            </a>
            <a href="mailto:info@pipeinpipe.com" className="flex items-center justify-center group">
              <Mail className="text-yellow-400 h-8 w-8 mr-4 group-hover:text-yellow-500 transition-colors duration-200" />
              <div>
                <div className="text-sm text-white">Email</div>
                <div className="text-lg font-semibold text-white group-hover:text-yellow-500 transition-colors duration-200">info@pipeinpipe.com</div>
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
