import React, {Component} from 'react';
import axios from 'axios';
import MovieListItem from "../../../components/MovieListItem/MovieListItem";
import {compareByTitle, compareByDate, compareByScore} from "../../../utils/sortings.js";


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

    sortTheMovieByTitle = () => {

        let filteredList = [...this.state.movies];
        filteredList.sort(compareByTitle);
        this.setState({movies: filteredList})
    };

    sortTheMovieByDate = () => {

        let filteredList = [...this.state.movies];
        filteredList.sort(compareByDate);
        this.setState({movies: filteredList})
    };

    sortTheMovieByScore = () => {

        let filteredList = [...this.state.movies];
        filteredList.sort(compareByScore);
        this.setState({movies: filteredList})
    };



    render() {

        const films = this.state.movies.map(movie => (
            <MovieListItem key={movie.id} movie={movie}/>
        ));

        return (
            <div className="movie-list__container">
                <nav id="navbar-fixed" className="navbar-expand-lg sticky-top navbar-dark ">
                    <div className="movie-list-title__container">
                        <h4>Popular movies</h4>
                        <p>An updated list of the current popular movies on TMDb.</p>
                        <button className="badge badge-danger" onClick={this.sortTheMovieByTitle}>title</button>
                        <button className="badge badge-info" onClick={this.sortTheMovieByDate}>date</button>
                        <button className="badge badge-success" onClick={this.sortTheMovieByScore}>score</button>
                    </div>
                </nav>

                <div className="movie-list-items__container">
                    {films}
                </div>


            </div>
        )
    }

}

export default PopularList;