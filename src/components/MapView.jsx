import { useEffect } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

const MapView = ({ userLocation, bins }) => {
  useEffect(() => {
    if (!userLocation) return

    const map = L.map("map").setView(
      [userLocation.lat, userLocation.lng],
      13
    )

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map)

    // User marker
    L.marker([userLocation.lat, userLocation.lng])
      .addTo(map)
      .bindPopup("You are here")
      .openPopup()

    // Bin markers
    bins.forEach((bin) => {
      L.marker([bin.lat, bin.lng])
        .addTo(map)
        .bindPopup(
          `<strong>${bin.name}</strong><br/>${bin.type} • ${bin.distance.toFixed(
            2
          )} km`
        )
    })

    return () => {
      map.remove()
    }
  }, [userLocation, bins])

  return (
    <div
      id="map"
      className="w-full h-full"
    />
  )
}

export default MapView
