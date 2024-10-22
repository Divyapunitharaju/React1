import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export const Task = ({ tasks, setTasks }) => {
  // const [tasks, setTasks] = useState([
  //     {id:1,name:'divya'},
  //     {id:2,name:'Praveen'},
  //     {id:3,name:'mithra'}
  //   ])

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))

  }

  return (
    <div className='container'>
      <ul className='p5 m-2 bg-dark text-white rounded ' >
        {tasks.map(
          (task, index) => {
            return <li key={index} className='d-flex justify-content-between align-items-center list-unstyled p-3 m-2 '>{task.id}-{task.name}
                <button className='bg-danger rounded p-2 m-2 ' onClick={() => handleDelete(task.id)}>Delete</button>
              </li>


          }
        )}
      </ul>
    </div>
  )
}
