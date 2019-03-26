package com.udvarid.pontemovie.controller;

import com.mashape.unirest.http.exceptions.UnirestException;
import com.udvarid.pontemovie.dto.FilmListDetails;
import com.udvarid.pontemovie.service.FilmService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/film")
public class FilmController {

    private static final Logger logger = LoggerFactory.getLogger(FilmController.class);

    private FilmService filmService;

    @Autowired
    public FilmController(FilmService filmService) {
        this.filmService = filmService;
    }

    @GetMapping("popularList")
    public ResponseEntity<List<FilmListDetails>> getPopularList() throws UnirestException {
        logger.info("Popular film list is being prepared");

        return new ResponseEntity<>(filmService.getPopularList(), HttpStatus.OK);
    }

    @GetMapping("playingList")
    public ResponseEntity<List<FilmListDetails>> getPlayingList() throws UnirestException {
        logger.info("Actually playing film list is being prepared");

        return new ResponseEntity<>(filmService.getPlayingList(), HttpStatus.OK);
    }

    @GetMapping("topRatedList")
    public ResponseEntity<List<FilmListDetails>> getTopRatedList() throws UnirestException {
        logger.info("Top rated film list is being prepared");

        return new ResponseEntity<>(filmService.getTopRatedList(), HttpStatus.OK);
    }

    @GetMapping("upcomingList")
    public ResponseEntity<List<FilmListDetails>> getUpcomingList() throws UnirestException {
        logger.info("Upcoming film list is being prepared");

        return new ResponseEntity<>(filmService.getUpcomingList(), HttpStatus.OK);
    }
}
