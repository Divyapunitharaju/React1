import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function MovieList({movies=[]}) {

    const navigate=useNavigate()

    const moviedetail=(imdbID)=>{
        navigate(`${imdbID}`)
    }

    return (
        <div>

            {
                movies.map((item) => (
                    <div className='movieItem' key={item.imdbID} onClick={()=>moviedetail(item.imdbID)}>
                        <img src={item.Poster} alt={item.Poster} />
                    
                            <h2>{item.Title}</h2>
                            <h4>{item.Year}</h4>
                            <h5>{item.Director}</h5>
                        
                    </div>
                ))
            }





        </div>
    )
}
