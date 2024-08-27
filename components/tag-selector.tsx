function formatTag(tag: string): string {
  return tag
    .replace(/([^A-Z])([A-Z])/g, '$1 $2')
    .trim()
    .split(' ')
    .map(word => (word.length > 3 ? word : word.trim()))
    .join(' ')
}

export default function TagSelector({
  allTags,
  filter,
  setFilter,
}: {
  allTags: string[]
  filter: string
  setFilter: (value: string) => void
}) {
  return (
    <select
      value={filter}
      onChange={e => setFilter(e.target.value)}
      className="p-2 border rounded capitalize">
      <option value="">Todos</option>
      {allTags.map(tag => (
        <option key={tag} value={tag}>
          {formatTag(tag)}
        </option>
      ))}
    </select>
  )
}
