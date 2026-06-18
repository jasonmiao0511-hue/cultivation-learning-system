interface Props {
  realm: string
  cultivation: number
}

export default function RealmBadge({ realm, cultivation }: Props) {
  return (
    <div className="card flex items-center gap-4">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-realm-400 to-realm-700 text-2xl font-bold">
        {realm[0]}
      </div>
      <div>
        <div className="text-lg font-bold">{realm}期修士</div>
        <div className="text-sm text-slate-400">累计修为 {cultivation}</div>
      </div>
    </div>
  )
}
