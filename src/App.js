import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import HomeScreen from "./screen/HomeScreen";
import TopRatedScreen from "./screen/TopRatedScreen";
import UpcomingScreen from "./screen/UpcomingScreen";
import MovieDetailsScreen from "./screen/MovieDetailsScreen";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/movie/:id" elementt={<MovieDetailsScreen />} />
        <Route path="/top-rated" element={<TopRatedScreen />} />
        <Route path="/upcoming" element={<UpcomingScreen />} />
      </Routes>
      <MovieDetailsScreen />
    </Router>
  );
}

export default App;
