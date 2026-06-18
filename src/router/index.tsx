import { Routes, Route } from 'react-router-dom'
import Layout from '../components/feature/Layout'
import Home from '../pages/Home'
import Daily from '../pages/Daily'
import Plan from '../pages/Plan'
import Subject from '../pages/Subject'
import Records from '../pages/Records'
import Settings from '../pages/Settings'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="daily" element={<Daily />} />
        <Route path="plan" element={<Plan />} />
        <Route path="subject/:id" element={<Subject />} />
        <Route path="records" element={<Records />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  )
}
