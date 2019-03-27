import React, {Component, Fragment} from 'react';
import axios from 'axios';
import MovieListItem from "../../../Components/MovieListItem/MovieListItem";


class TopRatedList extends Component {

    state = {
        movies: []
    };

    componentDidMount() {

        axios.get("http://localhost:8080/api/film/topRatedList")
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
                    <h4>Top rated movies</h4>
                    <h6>A list about the top rated movies on TMDb.</h6>
                </div>
                <div className="movie-list-items__container">
                    {films}
                </div>

            </div>
        )
    }

}

export default TopRatedList;