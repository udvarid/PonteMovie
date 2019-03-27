package com.udvarid.pontemovie.controller;

import com.udvarid.pontemovie.dto.CommentDetails;
import com.udvarid.pontemovie.service.CommentService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/comment")
public class CommentController {

    private static final Logger logger = LoggerFactory.getLogger(CommentController.class);
    private CommentService commentService;

    @Autowired
    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @PostMapping
    public ResponseEntity createComment(@RequestBody CommentDetails commentDetails) {


        if (!commentDetails.getComment().isEmpty() && !commentDetails.getCommentMaker().isEmpty()) {
            logger.warn("New comment is being added by " + commentDetails.getCommentMaker());
            commentService.addComment(commentDetails);
            return new ResponseEntity(HttpStatus.CREATED);
        }
        logger.warn("Unsufficient comment information");
        return new ResponseEntity(HttpStatus.NOT_ACCEPTABLE);

    }

    @GetMapping("{id}")
    public ResponseEntity<List<CommentDetails>> getComments(@PathVariable("id") Long id) {

        logger.info("Comment list requesting");
        return new ResponseEntity<>(commentService.getComments(id), HttpStatus.OK);

    }


}
