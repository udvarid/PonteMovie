package com.udvarid.pontemovie.dto;

import com.udvarid.pontemovie.domain.Comment;

public class CommentDetails {

    private Long id;
    private Long movieId;
    private String commentMaker;
    private String comment;

    public CommentDetails() {};

    public CommentDetails(Comment comment) {
        this.id = comment.getId();
        this.movieId = comment.getMovieId();
        this.commentMaker = comment.getCommentMaker();
        this.comment = comment.getComment();
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
