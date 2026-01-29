const WasteAIHelper = ({ onSelect }) => {
  return (
    <div className="space-y-3">
      <p className="text-sm text-slate-600">
        Optional assistance to select waste type
      </p>

      <div className="flex flex-wrap gap-2">
        {["plastic", "paper", "glass", "ewaste"].map((t) => (
          <button
            key={t}
            onClick={() => onSelect(t)}
            className="px-3 py-2 bg-slate-100 rounded-md text-sm hover:bg-slate-200"
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  )
}

export default WasteAIHelper
