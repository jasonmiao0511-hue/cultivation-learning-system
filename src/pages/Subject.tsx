import { useParams } from 'react-router-dom'
import English from './subject/English'
import Chinese from './subject/Chinese'
import Math from './subject/Math'

export default function Subject() {
  const { id } = useParams()
  if (id === 'english') return <English />
  if (id === 'chinese') return <Chinese />
  if (id === 'math') return <Math />
  return <div className="card">未知功法</div>
}
