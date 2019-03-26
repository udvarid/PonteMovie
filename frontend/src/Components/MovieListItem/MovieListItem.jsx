import React from 'react';
import {Link} from 'react-router-dom';

function MovieListItem({movie}) {

    const pict = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    return (
        <div>
            <Link to={'/Movie/' + movie.id}>
                <h6>{movie.title}</h6>
            </Link>
            <p>{movie.vote_average}</p>
            <p>{movie.overview}</p>
            <p>{movie.release_date}</p>
            <img src={pict} alt="pic" height="200" width="200"/>

        </div>
    )

}



export default MovieListItem;
