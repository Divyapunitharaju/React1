import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

export default function MovieDetails() {


    const [item,setItem]=useState({})
    const {imdbID}=useParams()


    useEffect(() => {
        if (imdbID) {
            fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=4eb4233b`)
                .then((res) => res.json())
                .then((data) => setItem(data));
        }
    }, [imdbID]); 

  return (
    <div >
        <img src={item.Poster} />
        <p>Title : {item.Title}</p>
        <p>Year : {item.Year}</p>
         
    </div>
  )
}
