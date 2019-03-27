import React, {Component, Fragment} from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player'
import './MovieDetailed.css';

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
            movieId: this.props.match.params.id,
            commentMaker: this.state.name,
            comment: this.state.comment
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
        axios.get("http://localhost:8080/api/film/" + this.props.match.params.id)
            .then(response => {
                this.setState(
                    {
                        movie: response.data
                    }
                );
            })
            .catch(error => console.warn(error));

        axios.get("http://localhost:8080/api/comment/" + this.props.match.params.id)
            .then(response => {
                this.setState(
                    {
                        comments: response.data
                    }
                );
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


        if (this.state.movie.title !== undefined) {
            video = () => {
                const videoUrl = 'https://www.youtube.com/watch?v=' + this.state.movie.videoKey;
                return (
                    <div className="detailed-movie__youtube">
                        <ReactPlayer url={videoUrl} playing/>
                    </div>
                )
            };

            movie = () => {
                const pict = "https://image.tmdb.org/t/p/w500" + this.state.movie.posterPath;

                return (
                    <div className="movie-detailed-infos__container2">
                        <img src={pict} alt="pic" height="350" width="200"/>

                        <div>
                            <p><b>{this.state.movie.title}</b></p>
                            <p>{this.state.movie.overview}</p>
                            <p><b>Language: </b>{this.state.movie.language}</p>
                            <p><b>Average score: </b>{this.state.movie.voteAverage}</p>
                        </div>

                    </div>
                )
            }

        }

        if (this.state.comments !== undefined) {

            listOfComments = this.state.comments.map(comment =>
                <div key={comment.id}>

                    {comment.comment} ----


                    {comment.commentMaker}

                </div>
            )

        }

        return (
            <div className="detailed-movie__container">
                <div className="movie-detailed-infos__container">
                    {movie()}
                    {video()}
                </div>

                {listOfComments}

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
                            required={true}
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
                            required={true}
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