package com.udvarid.pontemovie.service;

import com.udvarid.pontemovie.dto.FilmDetails;
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


    public FilmDetails getUniqueFilm(Long id) throws UnirestException {
        FilmDetails result = new FilmDetails();

        HttpResponse<JsonNode> jsonResponse
                = Unirest.get("https://api.themoviedb.org/3/movie/" + id + "?api_key=" + apiKey)
                .header("accept", "application/json")
                .asJson();

        HttpResponse<JsonNode> jsonResponse2
                = Unirest.get("https://api.themoviedb.org/3/movie/" + id + "/videos?api_key=" + apiKey)
                .header("accept", "application/json")
                .asJson();


        String title = jsonResponse.getBody().getObject().get("title").toString();
        String overview = jsonResponse.getBody().getObject().get("overview").toString();
        String averageVote = jsonResponse.getBody().getObject().get("vote_average").toString();
        String posterPath = jsonResponse.getBody().getObject().get("poster_path").toString();
        String language = jsonResponse.getBody()
                .getObject()
                .getJSONArray("spoken_languages")
                .getJSONObject(0)
                .get("name").toString();

        String video = "";

        int videoNumber = jsonResponse2.getBody().getObject().getJSONArray("results").length();

        for (int i = 0; i < videoNumber; i++) {
            if (jsonResponse2.getBody()
                    .getObject()
                    .getJSONArray("results")
                    .getJSONObject(i)
                    .get("site").equals("YouTube")) {
                video = jsonResponse2.getBody()
                        .getObject()
                        .getJSONArray("results")
                        .getJSONObject(i)
                        .get("key").toString();
                break;
            }

        }

        result.setLanguage(language);
        result.setOverview(overview);
        result.setPoster_path(posterPath);
        result.setTitle(title);
        result.setVote_average(averageVote);
        result.setVideoKey(video);

        return result;
    }
}
