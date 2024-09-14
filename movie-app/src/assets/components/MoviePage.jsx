import React from 'react'
import './movie.css'
import { useState } from 'react'
import { useEffect } from 'react';
import MovieList from './MovieList';

const imdID = '4eb4233b';

export default function MoviePage() {
 
    const [input,setInput]=useState('');
    const [movies,setMovies]=useState([])

    const fetchApi =()=>{
        fetch(`https://www.omdbapi.com/?s=${input}&apikey=${imdID}`)
        .then((res)=>res.json())
        .then((data)=>setMovies(data.Search))
    }

     const handleSearch =(e)=>{
        const Search=e.target.value
        setInput(Search)
        if (Search) {
            fetchApi(); 
          }
     }
    


  return (
    <div className='container'>
    <div className='header'>
        <h2>Search For Movies</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className='input'>
            <input 
                placeholder='Search the movies'
                value={input}
                onChange={handleSearch}
            /> 
        </div>
    </div>

    <div className='grid'>
        <MovieList movies={movies} />
    </div>
</div>

  )
}
