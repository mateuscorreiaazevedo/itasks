export function setTaskStorage (fn: any) {
  localStorage.setItem('tasks', JSON.stringify(fn))
}
