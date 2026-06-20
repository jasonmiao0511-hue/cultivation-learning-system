import { useRef, useState } from 'react'
import { useAppState } from '../context/AppStateContext'
import CustomTaskForm from '../components/feature/CustomTaskForm'
import { downloadBackup, uploadBackup } from '../services/backup'

export default function Settings() {
  const { customTasks, addCustomTask, removeCustomTask } = useAppState()
  const fileRef = useRef<HTMLInputElement>(null)
  const [importStatus, setImportStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  const handleImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    try {
      await uploadBackup(file)
      setImportStatus({ type: 'success', message: '导入成功，页面即将刷新…' })
      setTimeout(() => window.location.reload(), 800)
    } catch (err) {
      setImportStatus({ type: 'error', message: err instanceof Error ? err.message : '导入失败' })
    } finally {
      if (fileRef.current) fileRef.current.value = ''
    }
  }

  return (
    <div className="space-y-4">
      <div className="card">
        <h2 className="text-lg font-bold">自定义历练</h2>
        <CustomTaskForm onAdd={addCustomTask} />
        <div className="mt-4 space-y-2">
          {customTasks.map((t) => (
            <div key={t.id} className="flex items-center justify-between rounded bg-slate-900 p-3">
              <span>{t.name} · {t.duration}分钟 · {t.repeatRule}</span>
              <button onClick={() => removeCustomTask(t.id)} className="text-red-400">删除</button>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <h2 className="text-lg font-bold">修为档案备份</h2>
        <button onClick={() => downloadBackup()} className="btn-primary mt-2">导出修为档案</button>
        <input ref={fileRef} type="file" accept=".json" className="hidden" onChange={handleImport} />
        <button onClick={() => fileRef.current?.click()} className="btn-primary mt-2 ml-2 bg-slate-700">导入修为档案</button>
        {importStatus && (
          <div className={`mt-2 text-sm ${importStatus.type === 'success' ? 'text-emerald-400' : 'text-red-400'}`}>
            {importStatus.message}
          </div>
        )}
      </div>
    </div>
  )
}
