import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MoviePage from './assets/components/MoviePage'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import MovieDetails from './assets/components/MovieDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path='/'  element={<MoviePage />}/>
      <Route path='/:imdbID' element={<MovieDetails />}/>
     </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
