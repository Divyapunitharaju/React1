import React from 'react'

export default function MovieList({movies=[]}) {

    return (
        <div>

            {
                movies.map((item) => (
                    <div className='movieItem' key={item.imdbID}>
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
