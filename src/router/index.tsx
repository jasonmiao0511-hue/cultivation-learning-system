import { Routes, Route } from 'react-router-dom'
import Layout from '../components/feature/Layout'
import Home from '../pages/Home'
import Daily from '../pages/Daily'
import Plan from '../pages/Plan'
import Subject from '../pages/Subject'
import ChapterDetail from '../pages/ChapterDetail'
import LearningPage from '../pages/LearningPage'
import ReviewSession from '../pages/ReviewSession'
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
        <Route path="subject/:id/chapter/:chapterId" element={<ChapterDetail />} />
        <Route path="subject/:id/learn/:contentId" element={<LearningPage />} />
        <Route path="review" element={<ReviewSession />} />
        <Route path="records" element={<Records />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  )
}
