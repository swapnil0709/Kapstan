import { useContext } from 'react'
import { AppsContext } from '../state/AppContext'

export const useAppContext = () => {
  const context = useContext(AppsContext)
  if (!context) {
    throw new Error('useAppContext must be used within a App Provider')
  }
  return context
}
