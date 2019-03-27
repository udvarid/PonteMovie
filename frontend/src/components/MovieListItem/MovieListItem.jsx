import React from 'react';
import {Link} from 'react-router-dom';

function MovieListItem({movie}) {

    const pict = "https://image.tmdb.org/t/p/w500" + movie.posterPath;
    return (
        <div className="movie-list_item__container">
            <div>
                <Link to={'/Movie/' + movie.id}>
                    <img src={pict} alt="pic" height="100" width="100"/>
                </Link>
            </div>

            <div className="movie-list-item-detail__container">

                <Link to={'/Movie/' + movie.id}>
                    <h6>{movie.title}</h6>
                </Link>
                <p><b>Average score: </b>{movie.voteAverage}</p>
                <p><b>Release date: </b>{movie.releaseDate}</p>
            </div>

        </div>
    )

}


export default MovieListItem;
