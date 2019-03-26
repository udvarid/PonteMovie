import React, {Component, Fragment} from 'react';
import axios from 'axios';
import MovieListItem from "../../../Components/MovieListItem/MovieListItem";


class UpcomingList extends Component {

    state = {
        movies: []
    };


    componentDidMount() {

        axios.get("http://localhost:8080/api/film/upcomingList")
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
            <div>
                <h1>This is the upcoming list</h1>
                {films}
            </div>
        )
    }

}

export default UpcomingList;