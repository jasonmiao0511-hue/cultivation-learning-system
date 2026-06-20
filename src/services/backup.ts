import { exportData, importData } from './storage'

export function downloadBackup(filename = 'cultivation-backup.json') {
  const blob = new Blob([exportData()], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}

export function uploadBackup(file: File): Promise<void> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      try {
        importData(reader.result as string)
        resolve()
      } catch (e) {
        reject(e)
      }
    }
    reader.readAsText(file)
  })
}
