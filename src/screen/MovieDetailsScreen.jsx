import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Image, Badge, Card } from "react-bootstrap";
import { API_KEY, API_URL } from "../constant";

const MovieDetailsScreen = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
        );
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching the movie data", error);
      }
    };

    const fetchCredits = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
        );
        setCredits(response.data);
      } catch (error) {
        console.error("Error fetching the credits data", error);
      }
    };

    fetchMovie();
    fetchCredits();
  }, [id]);

  if (!movie || !credits) return <div className="text-center">Loading...</div>;

  return (
    <div className="light-background">
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
      <Container className="mt-4 ">
        <h4>Cast</h4>
        <Row >
          {credits.cast.slice(0, 5).map((castMember) => (
            <Col xs={12} sm={6} md={4} lg={3} key={castMember.cast_id} className="mb-4">
              <Card className="text-center" style={{ backgroundColor: "#22254b", color:'white'}}>
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w300${castMember.profile_path}`}
                  style={{ width: '150px', height: '150px', objectFit: 'cover', margin: '0 auto', marginTop: '10px' }}
                />
                <Card.Body>
                  <Card.Title className="cast-name">{castMember.name}</Card.Title>
                  <Card.Text className="cast-character">{castMember.character}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default MovieDetailsScreen;
