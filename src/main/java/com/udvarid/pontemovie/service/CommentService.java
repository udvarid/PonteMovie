package com.udvarid.pontemovie.service;

import com.udvarid.pontemovie.domain.Comment;
import com.udvarid.pontemovie.dto.CommentDetails;
import com.udvarid.pontemovie.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class CommentService {

    private CommentRepository commentRepository;

    @Autowired
    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }


    public void addComment(CommentDetails commentDetails) {
        Comment comment = new Comment(commentDetails);
        commentRepository.save(comment);
    }

    public List<CommentDetails> getComments(Long id) {

        List<Comment> comments = commentRepository.findAllByMovieId(id);
        List<CommentDetails> result = new ArrayList<>();

        for (Comment comment : comments) {
            CommentDetails commentDetails = new CommentDetails(comment);
            result.add(commentDetails);
        }

        return result;

    }
}
