import { useRef } from 'react'
import { useCustomTasks } from '../hooks/useCustomTasks'
import CustomTaskForm from '../components/feature/CustomTaskForm'
import { downloadBackup, uploadBackup } from '../services/backup'

export default function Settings() {
  const { customTasks, addCustomTask, removeCustomTask } = useCustomTasks()
  const fileRef = useRef<HTMLInputElement>(null)

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
        <input ref={fileRef} type="file" accept=".json" className="hidden" onChange={(e) => {
          if (e.target.files?.[0]) uploadBackup(e.target.files[0]).then(() => alert('导入成功')).catch(() => alert('导入失败'))
        }} />
        <button onClick={() => fileRef.current?.click()} className="btn-primary mt-2 ml-2 bg-slate-700">导入修为档案</button>
      </div>
    </div>
  )
}
