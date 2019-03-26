import React, {Component, Fragment} from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player'

class MovieDetailed extends Component {

    state = {
        movie: {},
        name: '',
        comment: ''
    };

    inputChangedHandler = (event) => {
        const target = event.target;

        this.setState({[target.name]: target.value});
    };

    postDataHandler = (event) => {

        const data = {
            id: 0,
            movieId : this.props.match.params.id,
            commentMaker : this.state.name,
            comment : this.state.comment
        };

        axios.post("http://localhost:8080/api/comment", data)
            .then((response) => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            });


    };


    componentDidMount() {
        axios.get("http://localhost:8080/api/key")
            .then(response => {
                const myApi = response.data.apiKey;
                const movieId = this.props.match.params.id;
                axios.get('https://api.themoviedb.org/3/movie/' + movieId + '?api_key=' + myApi)
                    .then(response => {
                        this.setState(
                            {
                                movie: response.data
                            }
                        );
                    })
                    .catch(error => console.warn(error))

                axios.get('https://api.themoviedb.org/3/movie/' + movieId + '/videos?api_key=' + myApi)
                    .then(response => {
                        this.setState(
                            {
                                video: response.data.results
                            }
                        );
                    })
                    .catch(error => console.warn(error))
            })
            .catch(error => console.warn(error));

        axios.get("http://localhost:8080/api/comment")
            .then(response => {
                this.setState(
                    {
                        comments: response.data
                    }
                );
                console.log(response.data);
            })
            .catch(error => console.warn(error))
    }


    render() {

        let movie = () => {
            return (
                <Fragment>

                </Fragment>
            )
        };

        let video = () => {
            return (
                <Fragment>

                </Fragment>
            )
        };

        let listOfComments = () => {
            return (
                <Fragment>

                </Fragment>
            )
        };

        if (this.state.video !== undefined) {
            const myVideo = this.state.video.filter(video =>
                video.site === "YouTube"
            );


            if (myVideo.length > 0) {
                video = () => {

                    const videoUrl = 'https://www.youtube.com/watch?v=' + myVideo[0].key;

                    return (

                        <ReactPlayer url={videoUrl} playing/>

                    )
                }
            }


        }


        if (this.state.movie.title !== undefined) {
            movie = () => {
                const pict = "https://image.tmdb.org/t/p/w500" + this.state.movie.poster_path;

                return (
                    <Fragment>
                        {this.state.movie.title}
                        <br/>
                        {this.state.movie.overview}
                        <br/>
                        {this.state.movie.spoken_languages[0].name}
                        <br/>
                        {this.state.movie.vote_average}
                        <br/>
                        <img src={pict} alt="pic" height="200" width="200"/>

                    </Fragment>
                )
            }

        }

        return (
            <div>
                <h1>Detailed movie</h1>
                {movie()}
                {video()}
                {listOfComments()}

                <h4>Leave a comment</h4>
                <br/>
                <form onSubmit={this.postDataHandler}>
                    <div>
                        <label className="control-label">Comment</label>
                        <input
                            type="text"
                            name="comment"
                            value={this.state.comment}
                            onChange={this.inputChangedHandler}
                            placeholder="Your comment"
                            className="form-control"
                        />
                    </div>
                    <br/>
                    <div>
                        <label className="control-label">Your name</label>
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.inputChangedHandler}
                            placeholder="Your name"
                            className="form-control"
                        />
                    </div>
                    <br/>
                    <button name="submit-comment" type="submit" className="btn btn-secondary">Add comment</button>
                </form>

            </div>

        )
    }
}

export default MovieDetailed;