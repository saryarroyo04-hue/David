import type { User } from '../types'
// import { API_URL } from './api'

// Por ahora simulamos el backend con localStorage

export async function register(user: User): Promise<void> {
  // await fetch(`${API_URL}/auth/register`, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(user),
  // })
  const users: User[] = JSON.parse(localStorage.getItem('users') ?? '[]')
  users.push(user)
  localStorage.setItem('users', JSON.stringify(users))
}

export async function login(email: string, password: string): Promise<User | null> {
  // const res = await fetch(`${API_URL}/auth/login`, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ email, password }),
  // })
  // if (!res.ok) return null
  // const user = await res.json()
  const users: User[] = JSON.parse(localStorage.getItem('users') ?? '[]')
  const user = users.find((u) => u.email === email && u.password === password)
  if (!user) return null
  localStorage.setItem('currentUser', JSON.stringify(user))
  return user
}

export function getCurrentUser(): User | null {
  return JSON.parse(localStorage.getItem('currentUser') ?? 'null')
}

export function logout(): void {
  localStorage.removeItem('currentUser')
}
