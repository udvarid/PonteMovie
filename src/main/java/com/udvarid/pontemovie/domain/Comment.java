package com.udvarid.pontemovie.domain;

import javax.persistence.*;

@Entity
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long movieId;

    private String commentMaker;

    @Column(columnDefinition = "TEXT")
    private String comment;

    public Comment() {}

    public Comment(Long movieId, String commentMaker, String comment) {
        this.movieId = movieId;
        this.commentMaker = commentMaker;
        this.comment = comment;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getMovieId() {
        return movieId;
    }

    public void setMovieId(Long movieId) {
        this.movieId = movieId;
    }

    public String getCommentMaker() {
        return commentMaker;
    }

    public void setCommentMaker(String commentMaker) {
        this.commentMaker = commentMaker;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}
