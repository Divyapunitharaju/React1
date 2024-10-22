import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export const AddTask = ({tasks,setTasks}) => {
    const [taskVal,setTaskVal]=useState('');
    const [progress,setProgress]=useState(false)

    const handleReset=()=>{
        setTaskVal('')
        setProgress(false)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
       const newtask={
        id:Math.floor(Math.random()*10000),
        name:taskVal,
        completed:Boolean(progress)
       }
       setTasks([...tasks,newtask])
       handleReset()
       console.log(newtask);
    }
    

  return (
   <section className='addtask   m-5 p-5 ' >
    <form onSubmit={handleSubmit} className='container-fluid bg-dark rounded text-white p-5 d-flex align-items-center justify-content-between'>
        <label htmlFor='task' className='pb-3'>Task Name</label><br/>
        <input type='text' 
        className='p-3 m-2 rounded border-none input-focus-none'
        id='task'
        name='task'
        placeholder='Task Name'
        value={taskVal}
        autoComplete='off'
        onChange={(e)=>setTaskVal(e.target.value)}
        />
        <select onChange={(e)=>setProgress(e.target.value)} value={progress} className='p-2 m-2 bg-dark text-white'>
          <option value='false'>Pending</option>
          <option value='true'>Completed</option>
        </select>
        <button type='submit'
         className='p-2  m-2 border-none bg-success rounded text-white'
        >Add Task</button>
        <span onClick={handleReset}>Reset</span>
        {taskVal}
    </form>
   </section>
  )
}
