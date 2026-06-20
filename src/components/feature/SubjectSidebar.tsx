interface Props {
  items: { id: string; title: string; completed: boolean }[]
  activeId: string
  onSelect: (id: string) => void
}

export default function SubjectSidebar({ items, activeId, onSelect }: Props) {
  return (
    <aside className="card max-h-[80vh] overflow-y-auto">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onSelect(item.id)}
          aria-current={activeId === item.id ? 'page' : undefined}
          className={`block w-full rounded px-3 py-2 text-left text-sm ${activeId === item.id ? 'bg-realm-700 text-white' : 'hover:bg-slate-700'}`}
        >
          <span>{item.completed ? '✅ ' : ''}{item.title}</span>
        </button>
      ))}
    </aside>
  )
}
