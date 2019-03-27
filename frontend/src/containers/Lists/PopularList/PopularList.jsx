import React, {Component} from 'react';
import axios from 'axios';
import MovieListItem from "../../../components/MovieListItem/MovieListItem";


class PopularList extends Component {

    state = {
        movies: []
    };


    componentDidMount() {

        axios.get("http://localhost:8080/api/film/popularList")
            .then(response => {
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
            <MovieListItem key={movie.id} movie={movie}/>
        ));

        return (
            <div className="movie-list__container">
                <div className="movie-list-title__container">
                    <h4>Popular movies</h4>
                    <h6>An updated list of the current popular movies on TMDb.</h6>
                </div>
                <div className="movie-list-items__container">
                    {films}
                </div>


            </div>
        )
    }

}

export default PopularList;