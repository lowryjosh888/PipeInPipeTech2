import Link from "next/link"
import { ArrowLeft, Phone, Mail, MapPin } from "lucide-react"

export default function ConEdisonMultiwallReplacement() {
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
            Con Edison Lines Replaced by New Multiwall Piping System
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
              Reprinted from the April 1997 issue of PIPE LINE &amp; GAS INDUSTRY magazine. Used with permission.
            </p>

            <p className="text-gray-700 mb-1">
              <span className="font-bold">Natarajan K. Raman</span>, Senior Engineer, General Studies &amp;
              Development, Con Edison Co. of New York, Inc., New York, New York.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-bold">Kenneth Tierling</span>, President, and{" "}
              <span className="font-bold">Matthew J. Feehery</span>, Vice President, Unisert Multiwall Systems, Inc.,
              Conroe, Texas.
            </p>

            {/* ── Intro ── */}
            <p className="text-gray-700 mb-4">
              Consolidated Edison Company of New York recently replaced two corroded fuel oil pipelines using a new
              multiwall piping system.
            </p>
            <p className="text-gray-700 mb-4">
              The project followed more than three years of engineering and evaluations by the utility company to find
              a suitable replacement fuel oil supply system to connect the fossil fuel power plants serving New York
              City.
            </p>
            <p className="text-gray-700 mb-4">
              The fuel oil supply lines run beneath the streets of New York City&apos;s Manhattan, Queens and Brooklyn
              boroughs and across the East River in two locations connecting the power plants and fuel storage
              facilities on either side of the river.
            </p>
            <p className="text-gray-700 mb-8">
              Unisert Multiwall Systems, Inc., a Texas-based multiwall pipe fabricator and installer, replaced the
              lines for the utility company. The replacement lines are located in Manhattan.
            </p>

            {/* ── Problem and Solution Overview ── */}
            <p className="text-gray-700 mb-2 font-semibold text-gray-800">Problem and solution overview</p>
            <p className="text-gray-700 mb-4">
              The two fuel oil pipelines were approximately 30 years old and were due for an overhaul. The system had
              begun to experience some corrosion primarily caused by the pipe insulation that shielded the cathodic
              protection system from operating properly. During inspections and other normal operations, the utility
              company observed that while the coated pipe was in excellent condition, the pipe wrapped with insulation
              needed to be replaced. Other extraneous conditions contributing to the degradation of some pipe segments
              located along the banks of the East River included tidal action stray current. Since much of the original
              installation took place in rocky granite beds and the trenches were backfilled with sand, the rock troughs
              were more susceptible to holding in moisture. The pipelines, which are located in a metropolitan area
              among a congested maze of underground electrical lines and other conduits, are also exposed to higher than
              normal amounts of stray current.
            </p>
            <p className="text-gray-700 mb-4">
              The utility&apos;s solution was to find a way to reverse the insulation process. By using a multiwall
              pipe, the coated steel pipe would be on the outside and the insulation would be located between the
              carrier pipe (fiberglass liner) and the outside steel. This type system serves two primary functions
              simultaneously. The double-wall system features an internal fiberglass liner that is inert to galvanic
              corrosion and, therefore, does not cause the internal or external pipes to become sacrificial in the
              galvanic process. Furthermore, the insulating cement in the annular space drives the steel into a passive
              pH range acting as a corrosion inhibitor. The system can also be monitored for leak detection by applying
              a low-pressure detectable gas to the annular space. A pressure drop would indicate a leak in the external
              case while line pressure equalization between the annulus and the internal liner would indicate a leak in
              the carrier pipe.
            </p>
            <p className="text-gray-700 mb-8">
              Either of the two Unisert approaches, insitu/rejuvenation or replacement with new piping, would work in
              these applications. Condition of the existing external steel pipe case was the major factor in determining
              which approach to incorporate.
            </p>

            {/* ── Project Description ── */}
            <p className="text-gray-700 mb-2 font-semibold text-gray-800">Project description</p>
            <p className="text-gray-700 mb-4">
              The first project involved replacing a 6-in. diameter fuel oil supply line with a new 6-in. by 12-in.
              multiwall piping system. The supply line connects the East 74th Street Generating Station to the head
              house located at East 71st Street near the East River tunnel crossing which in turn connects the line to
              the Rainey Tank Farm in Queens. Product temperature averages 165° F and the operating pressure is 80 psi.
              Test pressure was rated and performed at 600 psi.
            </p>
            <p className="text-gray-700 mb-8">
              The second project called for replacing two lines running parallel: a 10-in. diameter supply line and a
              4-in. diameter return line serving the Waterside Generating Station and Kips Bay, a storage and pumping
              facility. Unisert installed a new 8-in. by 12-in. multiwall pipe system to replace the existing 10-in.
              supply line and a new 4-in. by 8-in. multiwall pipe system to replace the existing 4-in. return line.
              The utility company&apos;s engineering team decided that reducing the diameter of the supply line from
              10 in. to 8 in. would not significantly affect the throughput because of the C-factor of the fiberglass
              pipe, which compensates for the smaller diameter. The fuel oil supply line is an auxiliary line used to
              provide back-up fuel for the boilers during high demand times during the winter months when gas is in
              short supply. Product temperature averages 165° F and the operating pressure is 260 psi. Test pressure
              was rated and performed at 600 psi.
            </p>

            {/* ── Design Criteria ── */}
            <p className="text-gray-700 mb-2 font-semibold text-gray-800">Design criteria</p>
            <p className="text-gray-700 mb-4">
              Con Edison engineers reviewed numerous approaches to rehabilitating or replacing the existing pipelines,
              including steel-inside-steel double-wall piping, flexible liners, and insitu-cured liners. Ultimately,
              the company selected the multiwall technology because it offered the utility company the best options for
              system longevity and low maintenance, exceptional resistance to galvanic corrosion and related failures,
              and met double-wall containment requirements. Because of the location of the pipelines under city streets
              and among a congested system of pipes and conduits, excavation, installation and restoration would be
              difficult and expensive. Therefore, enhancing the system longevity by reducing the impact of galvanic
              corrosion and preventing costly leaks was a top priority.
            </p>
            <p className="text-gray-700 mb-4">
              The Unisert IT3 Multiwall Piping System consists of sliding one pipe system inside another and then
              filling the annular space with a suitable material to create a multiwall pipe. Perhaps the most unique
              aspect of this approach is the patented SK Collar used for connecting the pipe joints and elbows of new
              pipe systems. The SK Collar is a dual material fitting that is epoxied and inserted into the annulus
              prior to the two connecting segments being joined and welded. This precision process allows for the
              simultaneous joining of both the internal liner and the outside steel pipe. The completed weld makes for
              true double-wall containment, even at the connections, and eliminates any portion of the liner from being
              exposed to external conditions and impact. When preferred, a flanged connection is available.
            </p>
            <p className="text-gray-700 mb-4">
              Other factors that played an important role in the decision to utilize the multiwall technology included
              the fabricator&apos;s ability to meet specific design parameters, some of them unique. The system should
              handle both the temperature of the product and the outside environment, so the cementatious material used
              in the grout should have added insulating capabilities while maintaining the required compressive strength
              characteristics. This accounts for the system&apos;s larger than normal annular space between the
              fiberglass liner and the outside steel pipe. Typically, a liner one nominal pipe size smaller than the
              outer pipe in either new or insitu/retrofit applications is used. This insulation requirement was included
              because of the necessity of pumping #6 fuel oil in cold conditions. The lines are buried approximately 4
              to 6 feet below ground. With the liner located so close to the East River, they also can experience the
              highly corrosive effects of a high water table and heavy tidal action. Other design parameters included
              the system&apos;s ability to handle high-pressure operations, start-ups and surges, some possibly caused
              by operator error. Allowing for the future capability of using alternative fuel sources was one reason the
              design pressures were rated at 600 psi.
            </p>
            <p className="text-gray-700 mb-4">
              While these two projects called for the fabrication and installation of an entirely new pipe system in
              place of the existing lines, the Texas company had previously performed an insitu lining project for Con
              Edison in 1993 at the Astoria Power Generating Station. This experience coupled with the supplier&apos;s
              29-year history of success without system failures, also contributed to the utility company&apos;s
              decision to utilize the multiwall technology in place of a more traditional replacement method.
            </p>
            <p className="text-gray-700 mb-8">
              For these replacement projects, the fabricator used Red Thread® II fiberglass pipe and Red Thread® II
              Performance Plus fiberglass pipe from Smith Fiberglass Products mated with .500 wall steel pipe (used as
              a corrosion allowance). A cementatious, insulating grout was used to fill the annular space. The
              components for fabricating the numerous 22½°, 45° and 90° steel and fiberglass 3-D radius bend elbows
              were matched to accommodate intelligent pigging of the lines. Hicks Industrial Fiberglass of Santa Ana,
              California assisted in the manufacturing of the custom-wound fiberglass elbows for the
              fabricator/installer. All pipe, elbows and fittings were then fabricated at the supplier&apos;s plant in
              Conroe, Texas. Bredero Price coated the finished pipe at the coater&apos;s Morrisville, Pennsylvania,
              plant using Pritec® coating while the elbows, fittings and welded connections were field coated with
              Scotch Kote® 312. The fabrication and installation were performed under Unisert&apos;s Quality Control
              Level One specifications, which indicates that the system design will allow for the liner to handle the
              fuel oil system operating criteria on its own.
            </p>

            {/* ── System Design Life ── */}
            <p className="text-gray-700 mb-2 font-semibold text-gray-800">System design life</p>
            <p className="text-gray-700 mb-4">
              As noted previously, life expectancy of the IT3 multiwall piping system was a primary consideration in
              the decision to use this product and approach. It is estimated that the system&apos;s life expectancy
              should surpass 100 years. By combining the components of the multiwall piping system in this
              configuration, limitations of the individual components are practically eliminated. For example, the
              failure mode of the fiberglass pipe is dependent on a number of factors. Four specific factors considered
              include the shear between the glass and resin, the high temperature deterioration of the resin,
              erosion/corrosion and chemical deterioration.
            </p>

            <p className="text-gray-700 mb-2">
              <span className="font-bold">Shear between the glass and the resin.</span> This failure mode is a
              function of hoop loading and cyclic pressure causing shear between the glass and the resin. In the IT3
              multiwall piping system the hoop loading is transferred entirely to the steel via the cement. This
              particular failure mode is negated until such time as the steel deteriorates to the point of yield,
              allowing hoop loading or strain on the fiberglass. With proper cathodic protection on the system,
              failure of the .50-in. wall steel pipe as designed in the system is very difficult to calculate or
              predict. Using a worst case scenario, the 3/8-in. wall steel pipe used in the existing systems had
              lasted approximately 30 years to any pinholing and pitting. Increasing the pipe size to .50-in. wall
              steel should allow for a 40-year life prior to any pinholing of the steel. In order for there to be
              significant enough general corrosion on the steel pipe wall to affect hoop strain on the fiberglass, it
              is estimated to take double that time frame, thereby extending the life expectancy to 80 years prior to
              obtaining significant strain on the glass and a conservative 20-year hoop loading on the fiberglass will
              extend the system life to 100+ years.
            </p>
            <p className="text-gray-700 mb-4">
              The only difference with an in-situ approach would be that the existing steel had already reached its
              half-life for providing a fully intact barrier prior to subjecting the liner to any actual strain. Under
              this scenario, all other parameters apply as with the new steel pipe and life expectancy is 50 years
              before strain becomes a factor, giving the in-situ lines system a 70+ year design life.
            </p>
            <p className="text-gray-700 mb-4">
              Normal operating pressures of the system do not come close to the 20-year cyclic design life of the
              liner material as there is primarily static pressure loading on the system. Centrifugal pumps are used
              and cyclic loading is not a major concern. Given the worst-case scenario of having the pressures
              increased to the 20-year design life, it would still provide for a 100-year life expectancy on the
              system.
            </p>

            <p className="text-gray-700 mb-4">
              <span className="font-bold">High temperature deterioration of the resin.</span> The liner material is
              designed to function at 210° F maximum. As long as this temperature range is not exceeded, breakdown of
              the molecular chain will not occur and the tensile strength of the material will remain unchanged.
            </p>
            <p className="text-gray-700 mb-4">
              <span className="font-bold">Erosion/corrosion.</span> Fuel oil does not have any significant particles
              of sufficient hardness to impinge or erode the liner material. The viscosity and flow characteristics of
              the heavy fuel oils in the system reduce the velocity at the pipe surface and provide some natural
              inhibition to erosion.
            </p>
            <p className="text-gray-700 mb-4">
              <span className="font-bold">Chemical deterioration.</span> The epoxy materials utilized in the pipe
              system are UL approved for gasoline and fuel oil transportation because they are chemically resistant to
              these products.
            </p>
            <p className="text-gray-700 mb-4">
              <span className="font-bold">Thermal expansion.</span> Another important characteristic of the multiwall
              system is how the three primary materials used — fiberglass, cement and steel — respond to thermal
              expansion. The cement grout acts as an anchor and locks both systems together, allowing them to thermally
              expand and contract as a single unit. All three are virtually identical in thermal expansion factors. The
              empirical data on all tests performed have indicated no degradation or detrimental effects to the system.
            </p>
            <p className="text-gray-700 mb-6">
              <span className="font-bold">Conclusion.</span> By utilizing the new multiwall piping system and having
              the insulation properties built into the annular space, the cathodic protection system was greatly
              improved, therefore extending the system&apos;s design life to well over the 100-year mark.
            </p>

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
