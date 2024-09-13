
import './App.css'
import  {BrowserRouter,Routes,Route} from 'react-router-dom'
import Meal from './components/Meal'


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Meal />} />
    
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
