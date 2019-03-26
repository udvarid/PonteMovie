import React, {Component, Fragment} from 'react';
import axios from 'axios';
import MovieListItem from "../../../Components/MovieListItem/MovieListItem";


class PlayingList extends Component{

    state = {
        movies : []
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
            <Fragment>
                <MovieListItem movie={movie}/>
            </Fragment>
        ));

        return (
            <div>
                <h1>This is the now playing list</h1>
                {films}
            </div>
        )
    }

}

export default PlayingList;