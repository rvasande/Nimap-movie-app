import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import HomeScreen from "./screen/HomeScreen";
import TopRatedScreen from "./screen/TopRatedScreen";
import UpcomingScreen from "./screen/UpcomingScreen";
import MovieDetailsScreen from "./screen/MovieDetailsScreen";
const Api_key = 'c45a857c193f6302f2b5061c3b85e743';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  console.log(searchTerm)
  useEffect(() => {
    if (searchTerm) {
      const fetchMovies = async () => {
        try {
          const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${Api_key}&language=en-US&query=${searchTerm}&page=1`);
          const data = await response.json();
          setSearchResults(data.results || []);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchMovies();
    }
  }, [searchTerm]);

  return (
    <div className="light-background">
      <Router>
        <Header setSearchTerm={setSearchTerm} />
        <Routes>
          <Route path="/" element={<HomeScreen searchResults={searchResults} />} />
          <Route path="/movie/:id" element={<MovieDetailsScreen />} />
          <Route path="/top-rated" element={<TopRatedScreen searchResults={searchResults} />} />
          <Route path="/upcoming" element={<UpcomingScreen searchResults={searchResults} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
