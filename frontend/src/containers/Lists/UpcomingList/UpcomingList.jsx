import React, {Component, Fragment} from 'react';
import axios from 'axios';
import MovieListItem from "../../../Components/MovieListItem/MovieListItem";


class UpcomingList extends Component{

    state = {
        movies : []
    };


    componentDidMount() {

        axios.get("http://localhost:8080/api/key")
            .then(response => {
                const myApi = response.data.apiKey;
                axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=' + myApi)
                    .then(response => {
                        this.setState(
                            {
                                movies : response.data.results
                            }
                        );
                    })
                    .catch(error => console.warn(error))
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
                <h1>This is the upcoming list</h1>
                {films}
            </div>
        )
    }

}

export default UpcomingList;