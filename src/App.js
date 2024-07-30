import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import HomeScreen from "./screen/HomeScreen";
import TopRatedScreen from "./screen/TopRatedScreen";
import UpcomingScreen from "./screen/UpcomingScreen";
import MovieDetailsScreen from "./screen/MovieDetailsScreen";

function App() {
  return (
 <div className="light-background">
     <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/movie/:id" element={<MovieDetailsScreen />} />
        <Route path="/top-rated" element={<TopRatedScreen />} />
        <Route path="/upcoming" element={<UpcomingScreen />} />
      </Routes>
    </Router>
 </div>
  );
}

export default App;
