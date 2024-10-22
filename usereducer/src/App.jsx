import { useReducer, useState } from 'react'
import './App.css'

const ACTION={
  INCREMENT : "increment",
  DECREMENT : "decrement"
}

function reducerFn(state,action) {
    //  return {count : state.count+1}
    switch(action.type){
      case ACTION.INCREMENT :
        return {count : state.count+1}

      case ACTION.DECREMENT :
        return { count : state.count-1}

      default:
        return state
    }
}

function App() {
  const [count, setCount] = useState(1)
  const [state,dispatch] =useReducer(reducerFn,{count : 1})

  const increment =()=>{
      // setCount((count)=>count+1)
      dispatch({type:"increment"})
  }

  const decrement = ()=>{
    // setCount((count)=>count-1)
    dispatch({type:"decrement"})
  }

  // console.log(state)



  return (
    <>
     <button onClick={increment}>+</button>
     <h1>{state.count}</h1>
     <button onClick={decrement}>-</button>
    </>
  )
}

export default App
