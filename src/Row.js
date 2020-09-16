import React, { useEffect, useState } from 'react'
import axios from './axios';
import './Row.css';
const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({title,fetchUrl,isLargeRow}) {

    const [movies,setMovies] = useState([]);

    //Snippet of code which run on specific conndition

    useEffect(()=>{
        //if [],run once when the roe loads and dont run again
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            // console.log(request);
            setMovies(request.data.results);
            return request;
        }fetchData();

    },[fetchUrl]);

    const opts = {
        height:"390",
        width:"100",
        playerVars:{
            autoplay : 1,
        }
    }

    // console.log(movies);

    return (
        <div className="row">
            <h1>{title}</h1>

            <div className="row__posters">
                {movies.map(movie =>(

                    <img
                     key = {movie.id} 
                     className={`row__poster ${isLargeRow && "row__posterLarge" }`}
                     src={`${baseUrl}${ isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div>

            {/* <Youtube video={trailerUrl} opts={opts} /> */}

        </div>
    )
};

export default Row;
