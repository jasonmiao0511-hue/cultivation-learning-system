import { useParams } from 'react-router-dom'

export default function Subject() {
  const { id } = useParams()
  return <div className="card">功法：{id}</div>
}
