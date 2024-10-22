import React, { useState } from 'react'

export const AddTask = ({tasks,setTasks}) => {
  const [values, setValues] = useState('')
  const [progress,setProgress]=useState(false)
  console.log(values)

  const handleInput = (e) => {
    const value = e.target.value
    setValues(value)
  }

  const handleReset = () => {
    setValues('');
    setProgress(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Math.floor(Math.random() * 10000),
      name: values,
      completed: Boolean(progress)
    }
    setTasks([...tasks,newTask])
    // console.log(newTask)
     handleReset()
  }


  return (
    <div className='container'>
      <form className='shadow p-3 m-5 d-flex ' onSubmit={handleSubmit}>
        <div className="form-group m-2 w-50">
          <input
            type='text'
            className='form-control '
            placeholder='Task Name'
            value={values}
            onChange={handleInput}
            autoComplete='false'
            
          />
        </div>
        <select className='bg-dark rounded text-white m-2 ' onChange={(e)=>setProgress(e.target.value == 'true')} value={progress}>
          <option value='false'>Pending</option>
          <option value='true'>Completed</option>
        </select >
        <div className="form-group m-2">
          <button className='btn btn-danger'>Add</button>
        </div>
        <div className="form-group m-2">
          <button className='btn btn-secondary' type='button' onClick={handleReset}>Reset</button>
        </div>
      </form>
    </div>
  )
}
