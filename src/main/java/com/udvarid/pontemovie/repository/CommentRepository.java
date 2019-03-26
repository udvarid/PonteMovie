package com.udvarid.pontemovie.repository;

import com.udvarid.pontemovie.domain.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {

    List<Comment> findAllByMovieId(Long id);

}
