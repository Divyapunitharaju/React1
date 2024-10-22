// import { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css'
// import { Header } from './components/Header'
// import { Footer } from './components/Footer'

// function App() {
//   const [count, setCount] = useState(0)

//   const addHandle=()=>{
//     setCount((count)=>count+3)
//   }

//   const subHandle=()=>{
//     setCount((count)=>count-1)
//   }

//   return (
//     <>
//     <div className="container d-flex justify-content-center align-items-center m-auto vh-100">
//       <div className="shadow p-3 mb-5 bg-white rounded w-25 ">
//         <p className='d-flex  justify-content-center'>{count}</p>
//         <button className='btn btn-danger m-2'
//          onClick={addHandle}
//         >Add</button>
//         <button className='btn btn-danger m-2'
//          onClick={subHandle}
//         >Sub</button>
//         <button className='btn btn-secondary' onClick={()=>setCount(0)}>Reset</button>
//       </div>
//     </div>
//     </>
//   )
// }

// export default App



import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { TaskList } from './components/TaskList';
import { AddTask } from './components/AddTask';

const App = () => {
  const [tasks, setTasks] = useState([])

  return (
    <div>
       <Header />
          <AddTask tasks={tasks} setTasks={setTasks} />
         <TaskList tasks={tasks} setTasks={setTasks}/>
      {/* <Footer /> */}
    </div>

  )
}

export default App