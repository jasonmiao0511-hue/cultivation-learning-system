import { useParams } from 'react-router-dom'
import English from './subject/English'

export default function Subject() {
  const { id } = useParams()
  if (id === 'english') return <English />
  return <div className="card">功法 {id} 正在建设中</div>
}
