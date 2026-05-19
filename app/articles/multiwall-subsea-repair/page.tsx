import Link from "next/link"
import { ArrowLeft, Phone, Mail, MapPin } from "lucide-react"

export default function MultiWallSubseaRepair() {
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
            Multiwall System Used to Repair Subsea Line
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
              Reprinted from the May 4, 1981 edition of Oil &amp; Gas Journal Copyright 1981 by PennWell Publishing
              Company. Used with permission.
            </p>

            <p className="text-gray-700 mb-1">
              <span className="font-bold">B.E. Fruck</span>, Unisert Multiwall Systems, Inc., Conroe, TX
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-bold">Durward Archer</span>, Burmah Oil (Bahamas) Ltd., Freeport, Grand Bahamas
            </p>

            {/* ── Intro ── */}
            <p className="text-gray-700 mb-4">
              A subsea ballast line located at South Riding Point, Grand Bahama Island, was recently rejuvenated for
              Burmah Oil (Bahamas) Ltd., Bahamas Development Corp., using an innovative multiwall repair system.
            </p>
            <p className="text-gray-700 mb-4">
              The oil storage and transshipment terminal provides the necessary facilities to transfer oil from
              oceanfaring super tankers to shuttle tankers able to dock stateside ports.
            </p>
            <p className="text-gray-700 mb-4">
              The 5,000-ft line stretches from a tank farm offshore to an island, and is submerged in 110 ft of water
              at its deepest point. The 36 in. OD steel pipe was installed 7 years ago with a concrete coating on the
              external surface. Since ballast fluids carry some hydrocarbons with them when ballast waters and oil
              stored in the same tanks onboard a ship, Burmah had kept a watchful eye on the integrity of the line with
              respect to the potential harm of corrosion and environmental pollution. The line transports 40,000 bbl/hr,
              at an approximate fluid velocity of 12 fps, and remains full in between loading periods.
            </p>
            <p className="text-gray-700 mb-4">
              The line was also to be used as a standby oil unloading line where a flow rate of 100,000 bbl/hr and an
              approximate velocity of 28 fps would be experienced for short periods.
            </p>
            <p className="text-gray-700 mb-8">
              After a full investigation at the close of 1979, it nevertheless became apparent that the steel line had
              been severely pitted internally. Since Land &amp; Marine from England had installed the initial system,
              Burmah Oil contracted them as agents to coordinate the repair program.
            </p>

            {/* ── Line Repair System ── */}
            <p className="text-gray-700 mb-4">
              <span className="font-bold">Line repair system</span>. Plastics offer the most optimal
              corrosion-protective qualities in many situations. But the problem equally as often becomes that of
              minimizing the mechanical force parameters so that the plastic materials can be effectively used.
            </p>
            <p className="text-gray-700 mb-4">
              Unisert Systems Inc., headquartered in Houston, was contacted to provide the design basis and their
              developed expertise in installing an IT3 multiwall system. The method of manufacture for the IT3 system
              entails sliding a corrosion-resistant plastic pipeline into a metallic pipeline and locking the two in
              place by pumping cement grout into the annular space.
            </p>
            <p className="text-gray-700 mb-4">
              This procedure can be accomplished in lengths of several thousand feet and can, therefore, be used to
              repair existing pipelines. The initial capital cost comparison also became very favorable, the
              rejuvenation cost being 50% that of replacement cost for this type of situation.
            </p>
            <p className="text-gray-700 mb-4">
              The multiwall system differs from a barrier-type coating in that each layer retains a degree of
              pressure-handling capability and structural strength. The cement and plastic together bridge over the
              localized areas where the steel pipe suffered from pitting corrosion.
            </p>
            <p className="text-gray-700 mb-4">
              In this case, the plastic pipe was constructed as a fiber-reinforced thermoset, so that its 0.76-in. wall
              alone was sufficient to withstand the internal pressure of 100 psi and design pressure of 150 psi.
            </p>
            <p className="text-gray-700 mb-4">
              A second major aspect considered was the external collapse force from the seawater hydrostatic head in the
              event of a steel-wall failure during installation. The FRP wall was, therefore, designed to resist 50 psi
              external pressure.
            </p>
            <p className="text-gray-700 mb-3">
              The internal-diameter reduction to 30.0 in. was not predicted to significantly affect flow rates through
              the line primarily because of the smooth surface of the new plastic pipe. Generally, the cement phase
              served to:
            </p>
            <ol className="list-decimal list-outside ml-6 text-gray-700 space-y-2 mb-8">
              <li>
                Pre-stress the plastic pipe in compression during installation phase.
              </li>
              <li>
                Transfer pressure tangential stresses from the plastic to the steel wall. In this case, since the
                condition of the steel wall was to a large degree uncertain, the plastic pipe was provided with the
                capability of carrying the entire pressure load.
              </li>
              <li>
                Anchor the plastic into the steel pipe longitudinally such that the temperature expansion coefficient
                of the total system became that of the steel.
              </li>
              <li>
                Increase the negative buoyancy through its weight, in this case by 150 lb./ft.
              </li>
              <li>
                Serve as a secondary corrosion defense system by passivating the steel through its CA(OH)₂.
              </li>
            </ol>

            {/* ── Repair Procedure ── */}
            <p className="text-gray-700 mb-4">
              <span className="font-bold">Repair Procedure</span>. The repair procedure followed five basic phases:
              inspection and adaptation of the existing line, joining of the FRP pipe, insertion of the plastic pipe,
              cementing of the annular space and reconnection of the total system.
            </p>
            <p className="text-gray-700 mb-4">
              Inspection of the existing line revealed random pitting on the bottom of the pipe. Some of these sites
              had completely corroded through the steel wall.
            </p>
            <p className="text-gray-700 mb-4">
              A sizing ring was pulled through the pipe to ensure passage of the maximum FRP diameter of 32.66 in.
              which occurred at the joints. The minimum internal diameter of the steel line was established at 34.5 in.
            </p>
            <p className="text-gray-700 mb-4">
              A 32-in. nominal OD Owens Corning fiberglass reinforced isophthalic polyester pipe was constructed in 60
              ft. lengths and was joined with the standard butt and wrap technique.
            </p>
            <p className="text-gray-700 mb-4">
              Three joints produced a stick; various sticks being manufactured on site simultaneously.
            </p>
            <p className="text-gray-700 mb-4">
              The existing steel line was ascertained to have been laid with a minimum bending radius of 2,000 ft. The
              FRP pipe was, therefore, designed to flex or bend to that limit without microcracking while it was being
              pushed into the existing steel case.
            </p>
            <p className="text-gray-700 mb-4">
              The plastic pipe was pushed into the existing pipe in sticks of 180 ft. with tugger winches of 40-ton
              capacity each, but only 60% of that potential force was actually used.
            </p>
            <p className="text-gray-700 mb-4">
              The agenda for the day involved a stick, aligning a stick into the mainstream process, connecting that
              stick to the rest of the pipeline, and then allowing that buttwrap joint to cure overnight.
            </p>
            <p className="text-gray-700 mb-4">
              The entire procedure was repeated for each day.
            </p>
            <p className="text-gray-700 mb-4">
              The length of the sticks was restricted purely by the physical area of the working site. The underwater
              portion of the project required 63 joints scheduled for a 26-day completion.
            </p>
            <p className="text-gray-700 mb-4">
              The cementing process differentiates the IT3 installation from what is commonly termed a &quot;slip
              lining&quot; operation. The design of the installation procedure had to account for the axial strain in
              the plastic pipe incurred from both the internal and external pressures during the cementing process.
            </p>
            <p className="text-gray-700 mb-4">
              The injected mix consisted of neat cement grout, Portland cement, and water, conforming to a density of
              16 lb./U.S. gal and a water cement ratio of 0.43. Various additives were blended in with the
              cement/water mix to control homogeneity, viscosity, and pumpability.
            </p>
            <p className="text-gray-700 mb-4">
              Laboratory tests predicted a viscosity of 100 cp. The injection pressure for a cement grout was limited
              by the external collapse pressure of 225 psi in the plastic pipe, derived from both the structural
              strength in the wall and the internal pressure within the plastic pipe.
            </p>
            <p className="text-gray-700 mb-4">
              Cement entry and exit ports were welded onto the steel line at specific intervals, the length between
              them so set to avoid excessive pressure drops with cement-grout flow. The injection pressures were thus
              maintained at a lower level than either the collapse pressure of the plastic pipe or the
              internal-pressure capacity of the steel pipe.
            </p>

            {/* Diagram — Fig. 4 */}
            <figure className="my-8 flex flex-col items-center">
              <div className="max-w-2xl w-full rounded-lg overflow-hidden shadow-md">
                <img
                  src="/images/cementing-procedure-subsea.png"
                  alt="Fig. 4 — Cementing procedure"
                  className="w-full h-auto"
                />
              </div>
              <figcaption className="text-sm text-gray-500 text-center mt-3 italic">
                Fig. 4—Cementing procedure.
              </figcaption>
            </figure>

            <p className="text-gray-700 mb-4">
              As shown in Fig. 4, the cementing procedure commenced from the elbow upwards to the onshore position.
              The annular space at the elbow end was sealed by an inflatable tube seal and a small initial plug of
              thixotropic cement.
            </p>
            <p className="text-gray-700 mb-4">
              When encountering an inaccessible end point as with the elbow, it becomes imperative to correctly design
              a sealing mechanism since it separates the annular space from the internal fluids.
            </p>
            <p className="text-gray-700 mb-4">
              The ports were distanced 500 to 1,300 ft. apart, and cementing pressures ranging from 30 to 60 psi were
              experienced at sea level at an average flow rate of 150 gpm.
            </p>
            <p className="text-gray-700 mb-4">
              A skid-pumping unit mounted on a barge was positioned over each port in succession and was connected to
              the pipeline with a flexible hose. Fresh water was used to mix the cement grout.
            </p>
            <p className="text-gray-700 mb-4">
              All precautions were taken by Burmah Oil to contain any minor hydrocarbon residue purged from the
              annular area during the cementing process with clean-up crews and oil-spill booms.
            </p>
            <p className="text-gray-700 mb-4">
              The riser was likewise fitted with the same FRP pipe and grouted in place. Reconnecting the
              steel-cement-FRP system back to a bare steel pipe consisted of installing an FRP packer at a flange
              connection to separate the annular space from the internal fluids.
            </p>
            <p className="text-gray-700 mb-4">
              In these larger sizes of FRP pipe, resin and chopped mat are laid from across the outer packer face to
              the internal surface of the pipe, thereby providing the fluid seal.
            </p>
            <p className="text-gray-700 mb-4">
              The elbow posed a special consideration since it was not practically feasible to remove it and install
              flanged connections. The line, however, was of a large enough diameter to fit a man inside the elbow and
              coat the steel elbow directly with fiberglass mat and resin. In the same action, the annular space was
              further sealed off at the elbow end.
            </p>
            <p className="text-gray-700 mb-4">
              The various phases were roughly completed within the following time table, in order of event: Phase 1 —
              3 weeks, Phases 2 and 3 — 4 weeks combined, Phase 4 — 2 weeks and Phase 5 — 6 weeks.
            </p>
            <p className="text-gray-700 mb-4">
              The time to completely dewater the pipeline to coat the elbow extended the project schedule considerably.
              In total, the system was decommissioned for 7 months which included the time for another separate phase
              of the project — that of further anchoring the line externally with rock anchors, grout bags, and shutter
              boxes.
            </p>
            <p className="text-gray-700 mb-4">
              The system successfully withstood a hydrostatic pressure test of 225 psi and has operated effectively
              since October 1980.
            </p>
            <p className="text-gray-700 mb-6">
              One advantage of the rejuvenation process is that both strength and corrosion resistance are provided by
              the plastic pipe and cementatious structure.
            </p>

            {/* Share */}
            <div className="border-t border-gray-200 mt-10 pt-6 flex items-center gap-4">
              <span className="text-sm text-gray-500 font-medium">Share this post:</span>
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https://www.pipeinpipetech.com/articles/multiwall-subsea-repair"
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
                href="https://twitter.com/intent/tweet?url=https://www.pipeinpipetech.com/articles/multiwall-subsea-repair&text=Multiwall+System+Used+to+Repair+Subsea+Line"
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
