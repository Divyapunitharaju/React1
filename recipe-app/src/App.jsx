
import './App.css'
import  {BrowserRouter,Routes,Route} from 'react-router-dom'
import Meal from './components/Meal'
import RecipeInfo from './components/RecipeInfo'


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Meal />} />
      <Route path=':Mealid' element={<RecipeInfo/>}/>
    
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
