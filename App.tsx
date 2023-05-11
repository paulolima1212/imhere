import { AppContextProvider } from './src/contexts/app-context/app-context'
import { Home } from './src/screens/home'

export default function App() {
  return (
    <AppContextProvider>
      <Home />
    </AppContextProvider>
  )
}
