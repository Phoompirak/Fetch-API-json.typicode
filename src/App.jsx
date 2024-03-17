import './App.css'
import { createContext } from 'react'

export const dataContext = createContext();

// import component
import SearchUsers from './component/SearchUsers'

function App() {
  return (
      <SearchUsers />
  )
}

export default App
