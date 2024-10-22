import React from 'react'

export const TaskCard = ({task,handleDelete}) => {
    return (
        <div>
            <li  className='shadow p-3 m-5 bg-white rounded d-flex justify-content-between'
             style={{ border: task.completed ? "1px solid green" : "1px solid red" }}    
            >
                 <span>{task.name}</span>
                {/* <span >   {task.completed ? task.name: <del>{task.name}</del>}</span> */}
                <button className='btn btn-danger' onClick={() => handleDelete(task.id)}>Delete</button>
            </li>
        </div>
    )
}
