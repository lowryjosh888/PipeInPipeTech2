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

            {/* Fig. 1 */}
            <figure className="my-8 flex flex-col items-center">
              <div className="max-w-2xl w-full rounded-lg overflow-hidden shadow-md">
                <img
                  src="/images/sour-gas-fig1.png"
                  alt="Fig. 1 — Wall crushing action on plastic liner"
                  className="w-full h-auto"
                />
              </div>
              <figcaption className="text-sm text-gray-500 text-center mt-3 italic">
                Fig. 1—Wall crushing action on plastic liner.
              </figcaption>
            </figure>

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
            <p className="text-gray-700 mb-4">
              The liner segments, each approximately 40 feet long, were joined with a butt and strap overwrap procedure
              on the surface to form a continuous liner string. Once joined, the liner was pulled through the existing
              steel casing using a winch system. Cement grout was then injected under pressure through ports welded into
              the steel casing to fill the annular space completely, and air escape vents allowed the annulus to be
              fully grouted without air pockets. (Fig. 3)
            </p>

            {/* Fig. 3 */}
            <figure className="my-8 flex flex-col items-center">
              <div className="max-w-2xl w-full rounded-lg overflow-hidden shadow-md">
                <img
                  src="/images/sour-gas-fig3.png"
                  alt="Fig. 3 — Pipe line profile and layout"
                  className="w-full h-auto"
                />
              </div>
              <figcaption className="text-sm text-gray-500 text-center mt-3 italic">
                Fig. 3—Pipe line profile and layout, showing location of segment ends and cement grout injection ports.
              </figcaption>
            </figure>

            <p className="text-gray-700 mb-4">
              The liner was fabricated from standard 6-inch RTR pipe with a wall thickness designed to withstand the
              anticipated external collapse load during the cementing process. Because of the significant elevation
              differences in the Hunter Valley terrain, the hydrostatic head of the cement slurry was a critical design
              parameter. The RTR pipe, with its high hoop strength-to-weight ratio, proved to be the ideal material for
              this application. The liner weighs approximately .80 lb./ft.
            </p>

            {/* Fig. 5 */}
            <figure className="my-8 flex flex-col items-center">
              <div className="max-w-2xl w-full rounded-lg overflow-hidden shadow-md">
                <img
                  src="/images/sour-gas-fig5.png"
                  alt="Fig. 5 — Positions that liner assumes after insertion and during cementing process"
                  className="w-full h-auto"
                />
              </div>
              <figcaption className="text-sm text-gray-500 text-center mt-3 italic">
                Fig. 5—Positions that liner assumes after insertion and during cementing process.
              </figcaption>
            </figure>

            {/* ── Results ── */}
            <p className="text-gray-700 mb-4">
              <span className="font-bold">Results</span>. The Hunter Valley pipeline was successfully rehabilitated and
              returned to service in 1975. Over the ensuing six-year period the line has operated without a single leak
              attributable to the IT3 multiwall system. The operating conditions — 14% H2S, 5% CO2, elevated
              temperature, and cyclic pressure — represent one of the most corrosive environments to which such a system
              has been subjected.
            </p>
            <p className="text-gray-700 mb-6">
              The six-year leak-free record provides compelling evidence that the compressed liner concept, with RTR as
              the liner material and Portland cement grout as the annular material, represents a viable and durable
              solution for in-situ rehabilitation of sour gas pipelines. The cost of the repair was approximately 60
              percent of the cost of replacement with a new coated steel pipeline, and the installation was completed
              without major disruption to the surrounding environment.
            </p>

            {/* Share */}
            <div className="border-t border-gray-200 mt-10 pt-6 flex items-center gap-4">
              <span className="text-sm text-gray-500 font-medium">Share this post:</span>
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https://www.pipeinpipetech.com/articles/multiwall-sour-gas-corrosion"
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
                href="https://twitter.com/intent/tweet?url=https://www.pipeinpipetech.com/articles/multiwall-sour-gas-corrosion&text=Multiwall+System+Curbs+Sour+Gas+Corrosion"
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
