import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Card, Alert } from "react-bootstrap";
import { API_KEY, API_URL } from "../constant";
import CustomPagination from "../component/CustomPagination";

const UpcomingScreen = ({ searchResults }) => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (!searchResults || searchResults.length === 0) {
      const fetchMovies = async () => {
        try {
          const response = await axios.get(
            `${API_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${currentPage}`
          );
          setMovies(response.data.results);
          setTotalPages(response.data.total_pages);
        } catch (error) {
          console.error("Error fetching the movies:", error);
        }
      };

      fetchMovies();
    } else {
      setMovies(searchResults);
      setTotalPages(1); // Since search results are fixed, we don't need pagination.
    }
  }, [currentPage, searchResults]);

  const handleMovieClick = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <Container className="mt-4">
      {movies.length > 0 ? (
        <>
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
                <Card className="custom-card" style={{ border: "2px solid #22254b", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.9)" }}>
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="custom-card-img"
                  />
                  <Card.Body className="custom-card-body">
                    <Card.Title className="custom-card-title">
                      {movie.title}
                    </Card.Title>
                    <Card.Text className="custom-card-text">
                      Rating: {movie.vote_average}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
            {!searchResults && (
              <CustomPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </Row>
        </>
      ) : (
        <Alert variant="danger" className="text-center">
          No results found.
        </Alert>
      )}
    </Container>
  );
};

export default UpcomingScreen;
