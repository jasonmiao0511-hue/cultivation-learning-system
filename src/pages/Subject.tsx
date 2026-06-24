import { useParams, Navigate } from 'react-router-dom'

export default function Subject() {
  const { id } = useParams()
  return <Navigate to={`/?subject=${id}`} replace />
}
