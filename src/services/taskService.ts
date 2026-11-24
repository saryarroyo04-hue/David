import type { Task } from '../types'
// import { API_URL } from './api'

// Por ahora simulamos el backend con localStorage

function readTasks(): Task[] {
  return JSON.parse(localStorage.getItem('tasks') ?? '[]')
}

function saveTasks(tasks: Task[]) {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

export async function getTasks(): Promise<Task[]> {
  // const res = await fetch(`${API_URL}/tasks`)
  // return res.json()
  return readTasks()
}

export async function createTask(task: Omit<Task, 'id'>): Promise<Task> {
  // const res = await fetch(`${API_URL}/tasks`, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(task),
  // })
  // return res.json()
  const tasks = readTasks()
  const id = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1
  const newTask = { ...task, id }
  saveTasks([...tasks, newTask])
  return newTask
}

export async function updateTask(task: Task): Promise<Task> {
  // const res = await fetch(`${API_URL}/tasks/${task.id}`, {
  //   method: 'PUT',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(task),
  // })
  // return res.json()
  saveTasks(readTasks().map((t) => (t.id === task.id ? task : t)))
  return task
}

export async function deleteTask(id: number): Promise<void> {
  // await fetch(`${API_URL}/tasks/${id}`, { method: 'DELETE' })
  saveTasks(readTasks().filter((t) => t.id !== id))
}
