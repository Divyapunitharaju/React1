import React from 'react'
import { useState } from 'react'
import { TaskCard } from './TaskCard'

export const TaskList = ({tasks,setTasks}) => {
    
    const [show, setShow] = useState(true)


    const handleDelete = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }
    return (
        <div>
            <div className='container'>   
                <ul className='list-unstyled shadow p-2 m-5 bg-white rounded'>
                    <div className='d-flex justify-content-between align-items-center '>
                    <h1 className='d-flex justify-content-center ms-5 display-3'>Task</h1>
                        <button className='btn btn-primary me-5' onClick={() => setShow(!show)} >{show?'Hide':'Show'}</button>
                    </div>

                    {
                        show && tasks.length >0 && tasks.map((task) => {
                            return (
                             <TaskCard key={task.id} task={task} handleDelete={handleDelete}/>   
                    )
                        })
                    }
                    {
                        show && tasks.length ==0 && (
                            <p className='text-center'>No tasks available</p>
                        )
                    }
                </ul>
            </div>

        </div>
    )
}
