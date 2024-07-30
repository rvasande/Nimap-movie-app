import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Image, Badge } from "react-bootstrap";
import { API_KEY, API_URL } from "../constant";

const MovieDetailsScreen = () => {
  const [movie, setMovie] = useState(null);
  const movie_id = "533535";

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
        );
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching the movie data", error);
      }
    };

    fetchMovie();
  }, [movie_id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div
      className="movie-details"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "50px 0",
        color: "white",
      }}
    >
      <Container>
        <Row>
          <Col md={4}>
            <Image
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              fluid
              className="movie-poster"
            />
          </Col>
          <Col md={8}>
            <h1 className="movie-title">{movie.title}</h1>
            <Badge
              bg="secondary"
              className="movie-rating"
            >{`Rating: ${movie.vote_average}`}</Badge>
            <p className="movie-runtime-genres">
              <span>{`${movie.runtime} min `}</span>
              {movie.genres.map((genre) => genre.name).join(", ")}
            </p>
            <p className="movie-release-date">
              Release Date: {new Date(movie.release_date).toDateString()}
            </p>
            <h4>Overview</h4>
            <p>{movie.overview}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MovieDetailsScreen;
