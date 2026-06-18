import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: '洞府' },
  { to: '/daily', label: '今日历练' },
  { to: '/plan', label: '功法总纲' },
  { to: '/records', label: '试炼记录' },
  { to: '/settings', label: '设置' },
]

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-700 bg-slate-900/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="text-xl font-bold text-realm-400">修仙学习</div>
        <div className="hidden gap-4 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-md px-3 py-1 text-sm transition ${isActive ? 'bg-realm-700 text-white' : 'text-slate-300 hover:text-white'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}
