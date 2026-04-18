"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, X, ArrowUpRight } from "lucide-react"
import { useState, useEffect, useCallback } from "react"

// ─── Types ────────────────────────────────────────────────────────────────────

interface Service {
  title: string
  icon: React.ReactNode
  description: string
  photo: string | null // path relative to /public — e.g. "/images/it3-install.jpg"
  expandedContent: React.ReactNode
}

// ─── Modal ────────────────────────────────────────────────────────────────────

function ServiceModal({
  service,
  onClose,
}: {
  service: Service | null
  onClose: () => void
}) {
  // Lock body scroll + ESC to close
  useEffect(() => {
    if (!service) return
    document.body.style.overflow = "hidden"
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [service, onClose])

  if (!service) return null

  return (
    // Backdrop — clicking it closes the modal
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />

      {/* Modal card */}
      <div
        className="animate-modalIn relative bg-[#0f1e35] border border-slate-600 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl shadow-black/60"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-yellow-400 text-white hover:text-gray-900 rounded-full p-2 transition-all duration-200 focus:outline-none"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Photo or placeholder */}
        {service.photo ? (
          <div className="h-64 w-full overflow-hidden rounded-t-2xl">
            <img
              src={service.photo}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="h-56 w-full bg-slate-800 rounded-t-2xl flex flex-col items-center justify-center gap-3 border-b border-slate-700">
            <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-slate-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <span className="text-slate-500 text-sm">Photo coming soon</span>
          </div>
        )}

        {/* Content */}
        <div className="p-8">
          {/* Icon + title */}
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold text-white leading-tight">
              {service.title}
            </h3>
          </div>

          <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

          <div className="border-t border-slate-700 mb-6" />

          {service.expandedContent}
        </div>
      </div>
    </div>
  )
}

// ─── Services Grid ─────────────────────────────────────────────────────────────

function ServicesGrid() {
  const [activeModal, setActiveModal] = useState<number | null>(null)
  const closeModal = useCallback(() => setActiveModal(null), [])

  const services: Service[] = [
    {
      title: "IT3 System Installation",
      photo: "/images/IT3-System-Installation.png",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-gray-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      description:
        "Our flagship service installs the proprietary IT3 multiwall piping system in new and existing pipelines, providing superior corrosion protection and structural integrity.",
      expandedContent: (
        <div className="text-left">
          <h4 className="font-semibold mb-3 text-yellow-400 text-sm uppercase tracking-wide">
            Key Features
          </h4>
          <ul className="space-y-2 mb-5">
            {[
              "Complete installation of the three-phase piping system",
              "Custom-engineered solutions for each pipeline",
              "Specialized cement grout formulation",
              "Comprehensive testing and quality assurance",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-gray-300">
                <span className="text-yellow-400 mt-1 flex-shrink-0">▸</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-gray-400 leading-relaxed">
            Our IT3 System installation process begins with a thorough assessment of your existing
            pipeline. We then custom-design a solution using the appropriate liner material for your
            specific application. Our specialized equipment and trained technicians ensure precise
            installation, followed by comprehensive testing to verify system integrity.
          </p>
        </div>
      ),
    },
    {
      title: "In-Situ Pipe Rehabilitation",
      photo: null,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-gray-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      description:
        "Restore aging or damaged pipelines without excavation using our non-invasive rehabilitation techniques, minimizing disruption and costs.",
      expandedContent: (
        <div className="text-left">
          <h4 className="font-semibold mb-3 text-yellow-400 text-sm uppercase tracking-wide">
            Benefits of In-Situ Rehabilitation
          </h4>
          <ul className="space-y-2 mb-5">
            {[
              "No excavation required — minimal surface disruption",
              "60–70% cost savings compared to full replacement",
              "Rapid installation — reduced downtime",
              "Extends pipeline life by 50+ years",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-gray-300">
                <span className="text-yellow-400 mt-1 flex-shrink-0">▸</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-gray-400 leading-relaxed">
            Our in-situ rehabilitation process uses existing access points to install the IT3 System
            within your current pipeline. This trenchless approach is ideal for urban areas,
            environmentally sensitive zones, or any location where excavation would be costly or
            disruptive. The process restores structural integrity while providing superior corrosion
            protection.
          </p>
        </div>
      ),
    },
    {
      title: "Pipeline Assessment",
      photo: null,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-gray-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      ),
      description:
        "Comprehensive inspection and evaluation services to identify issues, assess structural integrity, and recommend appropriate rehabilitation solutions.",
      expandedContent: (
        <div className="text-left">
          <h4 className="font-semibold mb-3 text-yellow-400 text-sm uppercase tracking-wide">
            Our Assessment Process
          </h4>
          <ul className="space-y-2 mb-5">
            {[
              "Advanced camera inspection technology",
              "Structural integrity testing",
              "Corrosion and wear analysis",
              "Detailed reporting with rehabilitation recommendations",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-gray-300">
                <span className="text-yellow-400 mt-1 flex-shrink-0">▸</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-gray-400 leading-relaxed">
            Our pipeline assessment service provides a comprehensive evaluation of your pipeline's
            condition. Using state-of-the-art inspection equipment, we identify areas of concern
            including corrosion, cracks, joint failures, and other structural issues. Our detailed
            reports include recommendations for the most cost-effective rehabilitation approach based
            on your specific situation.
          </p>
        </div>
      ),
    },
    {
      title: "Custom Engineering Solutions",
      photo: null,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-gray-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      description:
        "Tailored engineering services for complex pipeline challenges, including custom liner materials and specialized installation techniques.",
      expandedContent: (
        <div className="text-left">
          <h4 className="font-semibold mb-3 text-yellow-400 text-sm uppercase tracking-wide">
            Specialized Solutions For
          </h4>
          <ul className="space-y-2 mb-5">
            {[
              "High-temperature applications (up to 350°F)",
              "Highly corrosive environments",
              "High-pressure systems (up to 3500 psi)",
              "Unusual pipe geometries and configurations",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-gray-300">
                <span className="text-yellow-400 mt-1 flex-shrink-0">▸</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-gray-400 leading-relaxed">
            When standard solutions aren't sufficient, our engineering team develops custom approaches
            to address your unique pipeline challenges. We can select specialized liner materials,
            develop custom installation methods, and create innovative solutions for even the most
            complex pipeline systems. Our engineering expertise ensures that every project, no matter
            how challenging, receives an effective and long-lasting solution.
          </p>
        </div>
      ),
    },
    {
      title: "Environmental Sustainability",
      photo: null,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-gray-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
      ),
      description:
        "Our eco-friendly solutions minimize environmental impact while maximizing pipeline efficiency and longevity.",
      expandedContent: (
        <div className="text-left">
          <h4 className="font-semibold mb-3 text-yellow-400 text-sm uppercase tracking-wide">
            Environmental Benefits
          </h4>
          <ul className="space-y-2 mb-5">
            {[
              "Reduced carbon footprint compared to traditional replacement methods",
              "Minimal disruption to natural habitats and ecosystems",
              "Prevention of potential contamination from pipeline failures",
              "Energy-efficient installation and operation",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-gray-300">
                <span className="text-yellow-400 mt-1 flex-shrink-0">▸</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-gray-400 leading-relaxed">
            Our commitment to environmental sustainability is at the core of everything we do. By
            rehabilitating existing pipelines rather than replacing them, we significantly reduce the
            environmental impact associated with manufacturing new pipes, transporting materials, and
            extensive excavation work. Our approach aligns with sustainable development goals and helps
            organizations meet their environmental responsibility targets.
          </p>
        </div>
      ),
    },
    {
      title: "Maintenance Programs",
      photo: null,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-gray-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      description:
        "Proactive maintenance plans to ensure long-term performance of your pipeline infrastructure, including regular inspections and preventative care.",
      expandedContent: (
        <div className="text-left">
          <h4 className="font-semibold mb-3 text-yellow-400 text-sm uppercase tracking-wide">
            Maintenance Program Components
          </h4>
          <ul className="space-y-2 mb-5">
            {[
              "Scheduled inspection intervals",
              "Preventative maintenance procedures",
              "Early detection of potential issues",
              "Detailed documentation and reporting",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-gray-300">
                <span className="text-yellow-400 mt-1 flex-shrink-0">▸</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-gray-400 leading-relaxed">
            Our maintenance programs are designed to maximize the lifespan of your pipeline
            infrastructure while minimizing unexpected failures. Through regular inspections and
            preventative maintenance, we identify and address potential issues before they become
            costly problems. Our customized maintenance plans are tailored to your specific pipeline
            system, operating conditions, and budget constraints.
          </p>
        </div>
      ),
    },
  ]

  const activeService = activeModal !== null ? services[activeModal] : null

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <button
            key={index}
            onClick={() => setActiveModal(index)}
            className="group text-left bg-[#0f1e35] border-l-4 border-l-yellow-400 border border-slate-700/60 rounded-xl p-6 shadow-md hover:shadow-xl hover:shadow-black/30 hover:-translate-y-1 hover:border-slate-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-gray-50 cursor-pointer"
          >
            {/* Icon */}
            <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-200">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed mb-5">{service.description}</p>

            {/* CTA hint — fades in on hover */}
            <div className="flex items-center gap-1 text-yellow-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <span>Learn more</span>
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </button>
        ))}
      </div>

      <ServiceModal service={activeService} onClose={closeModal} />
    </>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="w-full min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Vimeo Video Background — background=1 enables autoplay/loop/mute with no controls */}
        <div className="absolute inset-0 w-full h-full">
          <iframe
            src="https://player.vimeo.com/video/1183195508?badge=0&autopause=0&player_id=0&app_id=58479&loop=1&background=1&muted=1&autoplay=1"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "100vw",
              height: "56.25vw",   /* 16:9 aspect ratio */
              minHeight: "100vh",
              minWidth: "177.78vh", /* ensures coverage on tall/narrow viewports */
              transform: "translate(-50%, -50%)",
            }}
            title="PPTClippedVideo1"
          />
        </div>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full w-full flex items-center justify-center">
          <div className="max-w-3xl text-center px-4">
            <h1 className="text-5xl font-bold text-white mb-8">
              Industry Leading Pipe Rehabilitation and New Installation Services
            </h1>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/technology"
                className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-500 transition-colors duration-200"
              >
                View IT3 System
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 w-full" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">PPT Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive pipe rehabilitation solutions using cutting-edge technology
            </p>
          </div>

          <ServicesGrid />
        </div>
      </section>

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
