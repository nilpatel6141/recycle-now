import { useMemo, useState } from "react"
import MapView from "./components/MapView"
import WasteSelector from "./components/WasteSelector"
import WasteAIHelper from "./components/WasteAIHelper"
import BinList from "./components/BinList"
import publicBins from "./data/bins.js"
import getDistanceKm from "./utils/distance.js"

const App = () => {
  const [location, setLocation] = useState(null)
  const [waste, setWaste] = useState("")
  const [radius, setRadius] = useState(5)

  const requestLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) =>
        setLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        }),
      () => alert("Location access is required"),
      { enableHighAccuracy: true }
    )
  }

  const nearbyBins = useMemo(() => {
    if (!location) return []

    return publicBins
      .filter((b) => !waste || b.type === waste)
      .map((b) => ({
        ...b,
        distance: getDistanceKm(location.lat, location.lng, b.lat, b.lng),
      }))
      .filter((b) => b.distance <= radius)
      .sort((a, b) => a.distance - b.distance)
  }, [location, waste, radius])

  return (
    <div className="min-h-screen bg-slate-50">

      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <h1 className="text-xl font-semibold">RecycleNow</h1>
          <p className="text-sm text-slate-500">
            Public Recycling Bin Visibility Platform
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-10 space-y-8">

        {!location && (
          <button
            onClick={requestLocation}
            className="px-6 py-3 bg-emerald-600 text-white rounded-lg"
          >
            Use my current location
          </button>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-8">
          <aside className="bg-white border rounded-xl p-6 space-y-6">
            <WasteSelector value={waste} onChange={setWaste} />

            <div>
              <label className="text-sm text-slate-600">
                Radius: {radius} km
              </label>
              <input
                type="range"
                min="1"
                max="10"
                value={radius}
                onChange={(e) => setRadius(+e.target.value)}
                className="w-full accent-emerald-600"
              />
            </div>

            <WasteAIHelper onSelect={setWaste} />
          </aside>

          <div className="bg-white border rounded-xl overflow-hidden h-[70vh]">
            <MapView userLocation={location} bins={nearbyBins} />
          </div>
        </div>

        <section className="bg-white border rounded-xl p-6">
          <h3 className="font-semibold mb-4">
            Nearby public recycling bins
          </h3>
          <BinList bins={nearbyBins} />
        </section>

      </main>
    </div>
  )
}

export default App
