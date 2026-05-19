import Link from "next/link"
import { ArrowLeft, Phone, Mail, MapPin } from "lucide-react"

export default function MultiWallSourGasCorrosion() {
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
            Multiwall System Curbs Sour Gas Corrosion
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

            {/* Byline + subtitle */}
            <p className="text-gray-500 italic text-sm mb-5">
              Reprinted from the 1981 issue of Pipe Line Industry Copyright 1981
            </p>

            <p className="text-gray-800 font-semibold mb-5">
              Six year leak-free record verifies success of the concept
            </p>

            <p className="text-gray-700 mb-1">
              <span className="font-bold">Ken Tierling</span>, President,{" "}
              <span className="font-bold italic">Unisert Multiwall Systems, Inc.</span>, Conroe, TX
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-bold">John Baron</span>, Staff Chemical Technologist, Shell Canada Resources, Ltd.
            </p>

            {/* ── Intro ── */}
            <p className="text-gray-700 mb-4">
              <span className="font-bold">P</span>LASTIC-LINED steel pipe (plastic pipe within steel pipe) has been
              used in the chemical process industry for many years as an effective means for transporting corrosive
              chemicals, particularly acids. Since it consists of two very different materials, metal and plastic,
              joining of pipe sections has generally been achieved with flanges every 20 to 40 feet, the plastic
              overlapped face compressed between two steel flanges. Although this feature does not present a barrier to
              process piping, it certainly does in the pipe line industry from the standpoint of both cost and
              underground corrosion.
            </p>
            <p className="text-gray-700 mb-4">
              Yet the need for such a product definitely exists in the pipe line market where corrosion/erosion
              resistance and strength are required, i.e., in acid (sour) gas pipe lines, water systems, crude oil lines
              with a significant water cut, tailings disposal, and slurry lines, and more recently carbon dioxide (CO2)
              injection and gathering systems. The Unisert process of sliding a long length (1/2 to 1 mile) of plastic
              piping into a similar segment of steel pipe and then grouting the annular space to lock the two together
              makes the plastic-lined steel concept applicable for pipe lines, since it eliminates the need for
              underground flanges. The system is also cost effective, the repair application being 50 to 70 percent of
              replacement. In new pipeline construction, the costs compare very favorably to high-pressure RTR pipe.
            </p>
            <p className="text-gray-700 mb-8">
              The following discussion concentrates on the materials selection criteria, testing, installation and results
              relative to the first application of this system to a highly corrosive sour gas pipe line performed for
              Shell Canada Resources Ltd. at the Hunter Valley field, Alberta, Canada in 1975. The last six-year period
              allowed time to closely evaluate the success of the project and general concept.
            </p>

            {/* ── History ── */}
            <p className="text-gray-700 mb-4">
              <span className="font-bold">History</span>. The 6-inch sour gas pipe line was originally placed into
              service in the fall of 1970, transporting sour gas well production at a temperature of 150° F and an
              operating pressure of about 1,200 psig. The well flowed some 7 million scf/day of natural gas containing
              14% H2S and 5% CO2 along with hydrocarbon condensate and several barrels per day of salt water.
            </p>
            <p className="text-gray-700 mb-4">
              After ten months of service, a leak from internal corrosion occurred in a low area some 1,000 feet from
              the well. The pipeline faces extreme elevation differences, being situated in the Rocky Mountain foothills.
              A chemical inhibition program was initiated through continuous injection of film forming chemicals
              supplemented with bi-weekly pigging of the pipeline with slugs of inhibited condensate.
            </p>
            <p className="text-gray-700 mb-8">
              The chemical inhibition program failed to arrest the corrosion and another leak occurred after eleven
              months. In all probability, adequate filming of the steel pipe by the inhibitor was impaired by heavy
              sludge material consisting of elemental sulfur and iron sulfide corrosion product which had settled in the
              pipeline. The pipeline was shut in until a safer method of producing the well could be found.
            </p>

            {/* ── General Design ── */}
            <p className="text-gray-700 mb-4">
              <span className="font-bold">General Design</span>. In the late sixties, Unisert Systems had initiated
              development of a close-fitted polyolefin liner expanded against the steel jacket with pressure. However,
              the experience gathered as well as that observed in the process piping industry suggested that the highest
              probability of success with a plastic-lined steel concept was to be achieved by not inducing a significant
              hoop stress on the plastic component during manufacture.
            </p>
            <p className="text-gray-700 mb-4">
              The only way to accomplish that aim without the use of flanges was to fill the annular space between
              plastic pipe and the steel pipe with a high compressive strength material. The plastic pipe was thus purely
              used for its long suit, corrosion resistance, without concern for its structural and mechanical integrity
              over the design life of the pipeline. This procedure, which came to be termed the compressed liner concept,
              also avoided stress concentration at the end connections since any axial stresses were distributed along
              the entire length of the pipeline. Unisert Systems received patent rights for the general method in both
              Canada and the United States and has further developed the system in the last decade.
            </p>
            <p className="text-gray-700 mb-4">
              One huge advantage was that the flexibility in materials selection was greatly enhanced. Any recognized
              plastic piping system with a sound integral joining system could be used including polyethylene, polyvinyl
              chloride, polybutylene and fiberglass reinforced thermoset pipe.
            </p>
            <p className="text-gray-700 mb-4">
              The major uses for the polyolefins were seen to be chemical waste water systems and tailings disposal
              pipelines because of their often superior chemical and abrasion resistance. However, since polyolefin pipe
              products soften in liquid hydrocarbon service, PVC and RTR pipe has been generally employed in the oil and
              gas industry.
            </p>
            <p className="text-gray-700 mb-8">
              For the repair of pipe lines with extensive external and internal corrosion, it has since been determined
              that only the FRP liner increases the failure pressures of defected steel pipe a significant degree, since
              the combined fracture must shear across the full glass-resin thickness to invite a fluid leak.
            </p>

            {/* ── Annular Material ── */}
            <p className="text-gray-700 mb-4">
              <span className="font-bold">Annular material</span>. The annular material is an inorganic Portland cement
              grout, also to fit several parameters: (1) the required compressive strengths are attained; (2) the
              viscosities can be easily varied so that the grout can be pumped relatively long distances at minimal
              pressures; and (3) a set and hardening process that can be achieved without external heat and one that is
              only influenced by ambient conditions to a minor extent.
            </p>
            <p className="text-gray-700 mb-4">
              Other than practicality, the cement grout also provides a second defense system against corrosion of the
              steel component. It is well known that the basic nature of cement (pH of 11 to 13) passivates steel beyond
              its corrosive range. However, cement structures exposed directly to the environment deteriorate over time
              since the fluid reacts with the lime and clinker material in the cement grout in the form of: (1) leaching
              from reaction with water, (2) ion exchange with magnesium and sodium chloride found in salt waters and
              also with carbonic or hydrochloric acid, and (3) the formation of expansive salt reaction product with the
              sulfate ion. The time period after which these interactions are felt becomes a direct function of the
              velocity and aggressiveness of the fluid.
            </p>
            <p className="text-gray-700 mb-8">
              Since the Unisert process separates the fluid from the cementatious structure by an inner plastic liner,
              the annular material is spared these corrosion mechanisms. If, however, the inner plastic liner suffers a
              microcrack or pinhole failure the grout would then become exposed to the fluids, but in a stagnant
              velocity situation so that the corrosive elements would not be continuously replenished. Hence, the
              selection of inorganic cement grout as the annular material was designed to cost-effectively increase the
              design life of the plastic lined concept — particularly since cement is 1/10 to 1/20 of the cost of most
              plastic materials.
            </p>

            {/* ── Design for Gas Systems ── */}
            <p className="text-gray-700 mb-4">
              <span className="font-bold">Design for gas systems</span>. A gas system involves an additional design
              constraint over and above that common to all systems: that of external collapse of the inner plastic.
            </p>
            {/* Fig. 1 */}
            <figure className="my-8 flex flex-col items-center">
              <div className="max-w-2xl w-full rounded-lg overflow-hidden shadow-md">
                <img
                  src="/images/sour-gas-fig1.jpg"
                  alt="Fig. 1 — Wall crushing action on plastic liner"
                  className="w-full h-auto"
                />
              </div>
            </figure>

            <p className="text-gray-700 mb-4">
              In any system that places a non-metallic material inside a metallic one, the difference in gas
              permeability rates between the two basic material types leads to gas entrapment at the interface. This
              phenomenon occurs regardless of whether this interface is a micro-area as with thin film coatings or a
              macro area as with plastic-lined steel, the only difference being the volume. The smaller the volume, the
              faster the pressure develops at this interface.
            </p>
            <p className="text-gray-700 mb-4">
              Interfacial gas pressure becomes of consequence only when the pipe line system is quickly depressured
              creating a situation in which the internal pressure exceeds the internal pressure. Thin film coatings then
              tend to spall or blister at localized areas, and in a pipe-soil envelope, the mode of external collapse
              transfers to what has been called a wall crushing action which requires a considerably higher pressure than
              what is normally expected of plastic pipe. (Fig. 1)
            </p>

            <p className="text-gray-700 mb-8">
              The calculation method utilizes the familiar Barlow equation, but with the application of compressive
              strengths. Therefore, because the reinforced thermoset materials retain a much greater strength,
              particularly in compression, it becomes mandatory to use them in high pressure gas systems.
            </p>

            {/* ── Testing ── */}
            <p className="text-gray-700 mb-4">
              <span className="font-bold">Testing</span>. Shell Canada initiated an experiment to evaluate lining
              materials for high pressure H2S gas service in relation to the afore-mentioned design constraint.
            </p>
            <p className="text-gray-700 mb-4">
              The test samples included PVC lined steel and RTR lined steel along with various thin film coatings
              (epoxy, phenolic, cement mortar, etc.). The various suppliers were asked to submit lined four-foot tubing
              pups which were subsequently screwed together in a test loop and installed in a high pressure (1,200psi)
              sour gas stream at 140° F. The gas was composed of 5.8% H2S, 5.74% CO2 and 81.5% methane, the liquids
              13 and .3 barrels/MMscfd of condensate and salt water respectively.
            </p>
            <p className="text-gray-700 mb-4">
              The test lasted one year. The first phase involved a static test with rapid depressuring every three days
              for one month. Following this phase, the gas stream was followed through the surviving systems for
              11-months with monthly depressuring and inspection.
            </p>
            <p className="text-gray-700 mb-4">
              Several of the above systems survived the test with differing degrees of deterioration. Based on visual
              examination, the only system to pass the test program unscathed was to be the RTR lined steel pipe. The
              PVC liner deformed due to a gas pocket formed in the upper quadrant of the circumference, indicating that
              the wall crushing strength had been exceeded.
            </p>
            <p className="text-gray-700 mb-8">
              Subsequent testing independent of these showed that the short term compressive strength for plastic pipe
              could be used to determine its collapse resistance, since depressuring is a relatively instantaneous
              procedure. Typical calculations for 4-inch plastic pipe, for example, are: (1) 500 psi for PE SDR 15.5;
              (2) 950 psi for PVC SDR 17; and (3) 1,850 psi for standard thin wall RTR pipe — which lends further
              credence to the nature of the results in the Shell Canada tests.
            </p>

            {/* ── Installation ── */}
            <p className="text-gray-700 mb-4">
              <span className="font-bold">Installation</span>. It was decided in 1974 to install the RTR lined steel
              concept in a critical 1.1-mile portion of the Hunter Valley pipeline as a repair system.
            </p>
            {/* Fig. 3 */}
            <figure className="my-8 flex flex-col items-center">
              <div className="max-w-2xl w-full rounded-lg overflow-hidden shadow-md">
                <img
                  src="/images/sour-gas-fig3.jpg"
                  alt="Fig. 3 — Pipe line profile and layout"
                  className="w-full h-auto"
                />
              </div>
            </figure>

            <p className="text-gray-700 mb-4">
              A nominal 4-inch RTR pipe was chosen which had a rating of 300 psi in a free-standing system. It was
              constructed with anhydride-cured bisphenol A epoxy resin reinforced with continuous winding of glass
              strands and a plasticized inner resin-rich layer.
            </p>
            <p className="text-gray-700 mb-4">
              Unisert Systems installed the RTR lined steel pipe in the summer of 1975. The RTR pipe was completely
              joined on surface and pressure tested to 500 psi. It was then winched into the existing steel case with a
              steel cable as is common in a slip-lining technique. The annular space was then packed off at the ends to
              provide a defined volume. The cementing ports, 500 to 1,000 feet apart, were situated to act as air
              escape vents. (Fig. 3) The grout was pumped from one port to next port in succession. The final system
              was then pressure tested at 2,200 psi.
            </p>
            <p className="text-gray-700 mb-4">
              The success of the cementing process is attributed to the rising action of the liner during grout
              injection. This eliminates any stagnant areas in the annular space and ensures a complete fill with solid
              material.
            </p>
            <p className="text-gray-700 mb-4">
              The plastic pipe positions itself in the following manner after being inserted into the existing metal
              carrier pipe: Figure 5A — after pulling, the plastic may be positioned eccentrically within the outer
              pipe, particularly around side bends. Figure 5B — the plastic pipe is filled with water, the weight of
              which relaxes any slight residual tension from the pull and forces the inner pipe to be cradled at the
              bottom of the outer pipe as in two concentric circles. The pipe is internally pressured at this time to
              prevent its collapse during the cement process. In the case of the 4-inch nominal diameter RTR, the pipe
              itself weighs approximately .80 lb./ft.
            </p>

            {/* Fig. 5 */}
            <figure className="my-8 flex flex-col items-center">
              <div className="max-w-2xl w-full rounded-lg overflow-hidden shadow-md">
                <img
                  src="/images/sour-gas-fig5.jpg"
                  alt="Fig. 5 — Positions that liner assumes after insertion and during cementing process"
                  className="w-full h-auto"
                />
              </div>
            </figure>

            <p className="text-gray-700 mb-4">
              Figure 5C — the grout initially starts flowing in the upper zone between plastic pipe and metal pipe.
            </p>
            <p className="text-gray-700 mb-8">
              Figure 5D — the buoyancy action from the plastic pipe encased in fluid cement (5.5 lb./ft. for 4&quot;)
              forces the pipe to rise, thereby eliminating any stagnant areas at the bottom of the pipe circumference.
            </p>

            {/* ── Results ── */}
            <p className="text-gray-700 mb-4">
              <span className="font-bold">Results</span>. A leak-free record in the last six years verifies the success
              of the project. To date, the RTR lined system has outlasted the longest previous run life by a factor of
              six while allowing uninterrupted production of the well. The aggressiveness of the fluid stream has not
              decreased over time as borne out by further corrosion studies.
            </p>
            <p className="text-gray-700 mb-4">
              Pressure gages had been placed at the cementing ports to monitor the annular pressure. It has been found
              that the annular pressure is generally 200 psi lower than the system pressure while in operation. They
              also indicate that the RTR liner had been subject to microcracking, likely from two factors: first, the
              freestanding liner was internally over-pressured during the cementing operation due to incorrect design
              specification; second, carbon disulfide solvent known to be very aggressive to the epoxy resin had been
              inadvertently pumped through the line following well stimulation, this practice being subsequently
              discontinued.
            </p>
            <p className="text-gray-700 mb-4">
              A TV camera inspection survey performed by Shell Canada in 1980 showed that the inner resin-rich layer of
              the RTR pipe had deteriorated at localized areas, but also showed that the RTR tube had not collapsed in
              any section from line depressure. Radiographic and ultrasonic inspection of the steel outer case at those
              areas that the TV survey indicated liner deterioration has shown no metal loss. The cementing ports have
              also been monitored by gas detectors to determine the amount of H2S flowing through the annular space and
              to date, not even trace amounts have been detected.
            </p>

            {/* ── Subsequent Developments ── */}
            <p className="text-gray-700 mb-4">
              <span className="font-bold">Subsequent developments</span>. Since that first RTR lined steel installation
              in 1975, several improvements on the design and installation practice have been instituted:
            </p>
            <p className="text-gray-700 mb-4">
              <span className="font-bold">Materials selection</span>. Various RTR products presently show marked
              differences in flexibility and corrosion resistance, a direct function of the materials and procedures
              used in the manufacturing process.
            </p>
            <p className="text-gray-700 mb-4">
              In the same nominal diameter size, some, for example, show twice the flexibility in bending radius than
              others. Recent studies in CO2 systems have also proven that while some RTR products blister and fail
              within short periods of time in this environment, others are resistant even at higher temperatures. The
              inner plastic liner must therefore be carefully chosen to match the design parameters.
            </p>
            <p className="text-gray-700 mb-4">
              <span className="font-bold">Joining techniques</span>. The tapered bell and spigot RTR joint has been
              verified as a sound integral connection.
            </p>
            <p className="text-gray-700 mb-4">
              Upon the application of epoxy to the tapered surfaces, the spigot end can hydraulic out of the bell end.
              Therefore, hydraulic come-alongs, which force the adjoining tapers together to a specified pressure, have
              been used to produce high quality joints. This procedure has been used by Unisert Systems up to diameters
              of 18 inches.
            </p>
            <p className="text-gray-700 mb-4">
              In terms of the final IT3 Multi-layer connections, joints have been eliminated even between the one-half
              to 1-mile segments with an overwrapped steel sleeve as illustrated in Fig. 6. These have been
              successfully installed in gas systems containing up to 26 percent H2S. Hence, cross-country pipelining
              without interruption of the RTR liner has been made possible.
            </p>
            <p className="text-gray-700 mb-4">
              <span className="font-bold">Quality Control</span>. For repair applications of existing systems, an
              elongated steel barrel to specified dimensions is initially pumped through the line to verify that the
              liner can be slipped in without exceeding its bending radius.
            </p>
            <p className="text-gray-700 mb-6">
              The plastic liner is generally subject to a three-step hydrostatic pressure test, on surface, after
              insertion and within the final system. Batch mixing of the grout has always been viewed as essential to
              the process to eliminate any variations in the properties from that tested. The grout flow cone test is
              correlated with more sensitive laboratory measurements of viscosity to provide a method of checking the
              grout properties under field conditions.
            </p>
            <p className="text-gray-700 mb-6">
              The acoustic cement bond log has also been tested as a method to verify that the annular space is
              completely filled with solid material. Electromagnetic techniques have been applied to locate any
              microcracked areas in specifically the RTR liner. The combination of all these methods then ensures that
              the plastic pipe is constructed as a sealed unit within Unisert&apos;s IT3 plastic-lined steel system.
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
