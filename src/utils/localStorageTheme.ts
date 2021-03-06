import { useEffect, useState, Dispatch, SetStateAction } from 'react'

type Response<T> = [
  T,
  Dispatch<SetStateAction<T>>
]

export function localStorageTheme<T> (key: string, initialValue: any): Response<T> {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key)

    if (storageValue) {
      return JSON.parse(storageValue)
    }
    return initialValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [
    state,
    setState
  ]
}
