const WasteSelector = ({ value, onChange }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border border-slate-300 rounded-lg px-4 py-3"
    >
      <option value="">All waste types</option>
      <option value="general">General</option>
      <option value="plastic">Plastic</option>
      <option value="paper">Paper</option>
      <option value="glass">Glass</option>
      <option value="ewaste">E-Waste</option>
    </select>
  )
}

export default WasteSelector
