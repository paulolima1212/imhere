import { useContext } from 'react'
import { AppContext } from '../contexts/app-context/app-context'

export function AppContextHook() {
  const appContext = useContext(AppContext)

  return appContext
}
