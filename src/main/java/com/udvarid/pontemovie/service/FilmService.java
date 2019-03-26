package com.udvarid.pontemovie.service;

import com.udvarid.pontemovie.dto.FilmListDetails;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.JsonNode;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;

@Service
public class FilmService {

    private final String apiKey = "84b2674dcba2f54328f0fef9d7abfe44";

    public List<FilmListDetails> getPopularList() throws UnirestException {

        HttpResponse<JsonNode> jsonResponse = Unirest.get("https://api.themoviedb.org/3/movie/popular?api_key=" + apiKey)
                .header("accept", "application/json")
                .asJson();

        return giveMeFilmList(jsonResponse);
    }

    public List<FilmListDetails> getPlayingList() throws UnirestException {

        HttpResponse<JsonNode> jsonResponse = Unirest.get("https://api.themoviedb.org/3/movie/now_playing?api_key=" + apiKey)
                .header("accept", "application/json")
                .asJson();

        return giveMeFilmList(jsonResponse);
    }

    public List<FilmListDetails> getTopRatedList() throws UnirestException {

        HttpResponse<JsonNode> jsonResponse = Unirest.get("https://api.themoviedb.org/3/movie/top_rated?api_key=" + apiKey)
                .header("accept", "application/json")
                .asJson();

        return giveMeFilmList(jsonResponse);
    }

    public List<FilmListDetails> getUpcomingList() throws UnirestException {

        HttpResponse<JsonNode> jsonResponse = Unirest.get("https://api.themoviedb.org/3/movie/upcoming?api_key=" + apiKey)
                .header("accept", "application/json")
                .asJson();

        return giveMeFilmList(jsonResponse);
    }





    private List<FilmListDetails> giveMeFilmList(HttpResponse<JsonNode> jsonResponse) {

        List<FilmListDetails> result = new ArrayList<>();

        int films = jsonResponse.getBody()
                .getArray()
                .getJSONObject(0)
                .getJSONArray("results").length();

        for (int i = 0; i < films; i++) {
            String title = jsonResponse.getBody()
                    .getArray()
                    .getJSONObject(0)
                    .getJSONArray("results")
                    .getJSONObject(i)
                    .get("title").toString();

            String averageVote = jsonResponse.getBody()
                    .getArray()
                    .getJSONObject(0)
                    .getJSONArray("results")
                    .getJSONObject(i)
                    .get("vote_average").toString();

            String releaseDate = jsonResponse.getBody()
                    .getArray()
                    .getJSONObject(0)
                    .getJSONArray("results")
                    .getJSONObject(i)
                    .get("release_date").toString();

            String url = jsonResponse.getBody()
                    .getArray()
                    .getJSONObject(0)
                    .getJSONArray("results")
                    .getJSONObject(i)
                    .get("poster_path").toString();

            String idString = jsonResponse.getBody()
                    .getArray()
                    .getJSONObject(0)
                    .getJSONArray("results")
                    .getJSONObject(i)
                    .get("id").toString();

            Long id = Long.parseLong(idString);

            FilmListDetails filmListDetails = new FilmListDetails();
            filmListDetails.setId(id);
            filmListDetails.setPoster_path(url);
            filmListDetails.setRelease_date(releaseDate);
            filmListDetails.setVote_average(averageVote);
            filmListDetails.setTitle(title);

            result.add(filmListDetails);

        }


        return result;
    }


}
