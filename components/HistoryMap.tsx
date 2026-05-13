"use client"

import { useEffect, useRef } from "react"

interface MapPin {
  lat: number
  lng: number
  label: string
  count: number
  detail?: string
}

const LOCATIONS: MapPin[] = [
  { lat: 70.2,  lng: -148.3, label: "Prudhoe Bay, AK",         count: 1,  detail: "Arco Alaska — 3-phase oil/gas/water pipeline (1982)" },
  { lat: 54.5,  lng: -114.5, label: "Alberta, Canada",          count: 8,  detail: "Drayton Valley, Legal, Pembina, Rimby, Joarcam, Swan Hills, Braemar (1971–1984)" },
  { lat: 50.0,  lng: -104.5, label: "Saskatchewan, Canada",     count: 3,  detail: "Estevan, Weyburn, Parkman (1971–1984)" },
  { lat: 46.9,  lng: -102.8, label: "Dickinson, ND",            count: 6,  detail: "Multiple Conoco 3-phase oil/gas/water pipelines (1978–1982)" },
  { lat: 37.2,  lng: -109.2, label: "Aneth, UT",                count: 4,  detail: "Superior Oil & Texaco — multiple projects (1973–1981)" },
  { lat: 35.0,  lng: -119.5, label: "California",               count: 4,  detail: "Santa Barbara (1982), Bakersfield (2005), and other locations (1976–2005)" },
  { lat: 32.7,  lng: -103.1, label: "Hobbs, NM",                count: 1,  detail: "Shell Oil — produced water pipeline (1981)" },
  { lat: 32.4,  lng: -117.1, label: "Rosarito, Mexico",         count: 1,  detail: "PEMEX — fuel oil offshore pipeline (2004)" },
  { lat: 31.5,  lng: -102.3, label: "Odessa, TX",               count: 3,  detail: "Shell Oil — multiple fresh/salt water pipelines (1980–1981)" },
  { lat: 29.5,  lng: -97.2,  label: "South Texas",              count: 4,  detail: "San Antonio (1984), Corpus Christi (1981), Houston (1980), Texas City (1984)" },
  { lat: 40.7,  lng: -74.1,  label: "New York Metro",           count: 3,  detail: "Con Edison East River, NYC (1997) · Con Edison Astoria, NYC (1993) · BP Newark, NJ (1984)" },
  { lat: 26.5,  lng: -78.7,  label: "Freeport, Grand Bahama",   count: 1,  detail: "Burmah Oil — sea water offshore pipeline (1980)" },
  { lat: 8.5,   lng: -78.5,  label: "Northern Peru",            count: 10, detail: "Eten, Salaverry, Chimbote, Supe, Callao — multiple pipelines (2007–2013)" },
  { lat: 17.5,  lng: -71.5,  label: "Southern Peru & Chile",    count: 5,  detail: "Mollendo & Ilo, Peru · Arica, Chile — crude oil pipelines (2007–2012)" },
]

export default function HistoryMap() {
  // mapRef: typed as null initially so React can attach the DOM node
  const mapRef = useRef<HTMLDivElement | null>(null)
  // leafletMap: plain mutable object — avoids useRef overload ambiguity in React 19
  const leafletMap = useRef<{ remove: () => void } | null>(null)

  useEffect(() => {
    if (leafletMap.current !== null || mapRef.current === null) return

    function initMap(): void {
      const el = mapRef.current
      if (el === null || leafletMap.current !== null) return

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const L = (window as any).L as any
      if (!L) return

      const map = L.map(el, {
        center: [20, -90],
        zoom: 3,
        scrollWheelZoom: false,
        zoomControl: true,
        maxBounds: [[-65, -175], [75, -15]],
        maxBoundsViscosity: 1.0,
        minZoom: 2,
      })

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
        {
          attribution:
            "&copy; OpenStreetMap contributors &copy; CARTO",
          subdomains: "abcd",
          maxZoom: 19,
        }
      ).addTo(map)

      const markers: unknown[] = []

      LOCATIONS.forEach((pin) => {
        const multi = pin.count > 1

        const iconHtml = multi
          ? `<div style="background:#0f1e35;border:2.5px solid #facc15;border-radius:50%;width:30px;height:30px;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;color:#facc15;font-family:system-ui,sans-serif;box-shadow:0 2px 8px rgba(0,0,0,.45);cursor:pointer">${pin.count}</div>`
          : `<div style="background:#0f1e35;border:2.5px solid #facc15;border-radius:50%;width:14px;height:14px;box-shadow:0 2px 6px rgba(0,0,0,.4);cursor:pointer"></div>`

        const icon = L.divIcon({
          html: iconHtml,
          className: "",
          iconSize: multi ? [30, 30] : [14, 14],
          iconAnchor: multi ? [15, 15] : [7, 7],
          popupAnchor: [0, multi ? -18 : -10],
        })

        const popupHtml =
          `<div style="font-family:system-ui,sans-serif;min-width:190px;max-width:260px">` +
          `<div style="font-weight:700;font-size:14px;color:#0f1e35;margin-bottom:5px">${pin.label}</div>` +
          (pin.detail ? `<div style="font-size:12px;color:#555;line-height:1.5">${pin.detail}</div>` : "") +
          `</div>`

        const marker = L.marker([pin.lat, pin.lng], { icon })
        marker.bindPopup(popupHtml, { maxWidth: 280 })
        marker.addTo(map)
        markers.push(marker)
      })

      const group = L.featureGroup(markers)
      map.fitBounds(group.getBounds().pad(0.12))

      leafletMap.current = map as { remove: () => void }
    }

    // Inject Leaflet CSS once
    if (!document.getElementById("leaflet-css")) {
      const link = document.createElement("link")
      link.id = "leaflet-css"
      link.rel = "stylesheet"
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
      document.head.appendChild(link)
    }

    // Inject Leaflet JS once, then init
    const existingScript = document.getElementById("leaflet-js")
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((window as any).L) {
      initMap()
    } else if (!existingScript) {
      const script = document.createElement("script")
      script.id = "leaflet-js"
      script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
      script.addEventListener("load", () => { initMap() })
      document.head.appendChild(script)
    }

    return () => {
      const m = leafletMap.current
      if (m !== null) {
        m.remove()
        leafletMap.current = null
      }
    }
  }, [])

  return (
    <div style={{ position: "relative" }}>
      <div
        ref={mapRef}
        style={{
          height: "460px",
          width: "100%",
          borderRadius: "12px",
          border: "1px solid #e5e7eb",
          overflow: "hidden",
        }}
      />
      <p className="text-center text-gray-500 text-sm mt-3 italic">
        The IT3 System has been effectively engineered and applied in over 65 projects across the globe.
        Click any pin for project details.
      </p>
    </div>
  )
}
