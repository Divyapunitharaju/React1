import React, { useState } from 'react'
import './Quizapp.css'

export const Quizapp = () => {
    
  const data =[{
    question:"Which device is required for the internet connnection",
    option1:"Moderm",
    option2:"Router",
    option3:"LAN Cable",
    option4:"Pen Drive",
    ans:1
},{
    question:"Which continent has the highest number of countries",
    option1:"Asia",
    option2:"Europe",
    option3:"North America",
    option4:"Africa",
    ans:4
},{
    question:"what is the national bird of India?",
    option1:"Crow",
    option2:"Peakcock",
    option3:"Pegion",
    option4:"Parrot",
    ans:3
}

]

console.log(data)
console.log(data[0].question)
  const [index,setIndex]=useState(0)
  const [question,setQuestion]=useState(data[0])

  return (
    <div className='container'>
        <h1>Quiz App</h1>
        <hr />
        <h2>{index+1}.{question.question}</h2>
        <ul>
            <li>{question.option1}</li>
            <li>{question.option2}</li>
            <li>{question.option3}</li>
            <li>{question.option4}</li>
        </ul>
        <button>Next</button>
        <p className='index'>1 of 3 questions</p>

    </div>
  )
}
