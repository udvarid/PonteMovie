import React, {Component, Fragment} from 'react';
import axios from 'axios';
import MovieListItem from "../../../Components/MovieListItem/MovieListItem";


class PlayingList extends Component {

    state = {
        movies: []
    };


    componentDidMount() {

        axios.get("http://localhost:8080/api/film/playingList")
            .then(response => {
                console.log(response.data);
                this.setState(
                    {
                        movies: response.data
                    }
                );
            })
            .catch(error => console.warn(error));

    }


    render() {

        const films = this.state.movies.map(movie => (
            <MovieListItem movie={movie}/>
        ));

        return (
            <div className="movie-list__container">
                <div className="movie-list-title__container">
                    <h4>Recent movies</h4>
                    <h6>A list of movies which can be seen in the theatres.</h6>
                </div>
                <div className="movie-list-items__container">
                    {films}
                </div>

            </div>
        )
    }

}

export default PlayingList;