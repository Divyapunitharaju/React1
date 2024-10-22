import { useState } from 'react'
import './App.css';
import { Header } from './components/Header';
import { Task } from './components/Task';
import { AddTask } from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([])

  return (
    <>
       
       <AddTask tasks={tasks} setTasks={setTasks}/>
       <Task tasks={tasks} setTasks={setTasks} />

    </>
  )
}

export default App
