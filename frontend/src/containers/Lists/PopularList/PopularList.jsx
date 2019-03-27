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

    sortByAbc = () => {
        function compare(a, b) {

            const titleA = a.title;
            const titleB = b.title;

            if (titleA < titleB)
                return -1;
            if (titleA > titleB)
                return 1;
            return 0;
        }

        let filteredList = [...this.state.movies];
        filteredList.sort(compare);
        this.setState({movies: filteredList})
    };

    sortByDate = () => {
        function compare(a, b) {

            const dateA = a.releaseDate;
            const dateB = b.releaseDate;

            if (dateA < dateB)
                return 1;
            if (dateA > dateB)
                return -1;
            return 0;
        }

        let filteredList = [...this.state.movies];
        filteredList.sort(compare);
        this.setState({movies: filteredList})
    };

    sortByScore = () => {

        function compare(a, b) {

            const scoreA = a.voteAverage;
            const scoreB = b.voteAverage;

            if (scoreA < scoreB)
                return 1;
            if (scoreA > scoreB)
                return -1;
            return 0;
        }

        let filteredList = [...this.state.movies];
        filteredList.sort(compare);
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
                        <button className="badge badge-danger" onClick={this.sortByAbc}>abc</button>
                        <button className="badge badge-info" onClick={this.sortByDate}>date</button>
                        <button className="badge badge-success" onClick={this.sortByScore}>score</button>
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