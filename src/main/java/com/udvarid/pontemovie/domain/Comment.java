package com.udvarid.pontemovie.domain;

import com.udvarid.pontemovie.dto.CommentDetails;

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

    public Comment(CommentDetails commentDetails) {
        this.movieId = commentDetails.getMovieId();
        this.commentMaker = commentDetails.getCommentMaker();
        this.comment = commentDetails.getComment();
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
