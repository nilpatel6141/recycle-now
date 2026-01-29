const BinList = ({ bins }) => {
  if (!bins.length) {
    return (
      <p className="text-slate-500">
        No public recycling bins found nearby.
      </p>
    )
  }

  return (
    <ul className="divide-y divide-slate-200">
      {bins.map((bin) => (
        <li key={bin.id} className="py-4 flex justify-between">
          <div>
            <p className="font-medium">{bin.name}</p>
            <p className="text-sm text-slate-500 capitalize">{bin.type}</p>
          </div>
          <span className="text-sm text-slate-600">
            {bin.distance.toFixed(2)} km
          </span>
        </li>
      ))}
    </ul>
  )
}

export default BinList
