export function setLocalStorage (fn: any) {
  localStorage.setItem('tasks', JSON.stringify(fn))
}
