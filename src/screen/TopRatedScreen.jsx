import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Card, Alert } from "react-bootstrap";
import { API_KEY, API_URL } from "../constant";

const TopRatedScreen = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching the movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const handleMovieClick = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <Container className="mt-4">
      {movies.length > 0 ? (
        <Row>
          {movies.map((movie) => (
            <Col
              key={movie.id}
              sm={6}
              md={4}
              lg={3}
              className="mb-4"
              onClick={() => handleMovieClick(movie.id)}
              style={{ cursor: "pointer" }}
            >
              <Card>
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Text>Rating: {movie.vote_average}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <Alert variant="danger" className="text-center">
          No results found.
        </Alert>
      )}
    </Container>
  );
};

export default TopRatedScreen;
