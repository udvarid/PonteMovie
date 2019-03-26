package com.udvarid.pontemovie.controller;

import com.udvarid.pontemovie.dto.ApiKeyDetails;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/key")
public class ApiController {

    private static final Logger logger = LoggerFactory.getLogger(ApiController.class);

    @GetMapping
    public ResponseEntity<ApiKeyDetails> getApiKey() {

        logger.info("Api key requesting");
        ApiKeyDetails apiKeyDetails = new ApiKeyDetails("84b2674dcba2f54328f0fef9d7abfe44");
        return new ResponseEntity<>(apiKeyDetails, HttpStatus.OK);

    }

}

