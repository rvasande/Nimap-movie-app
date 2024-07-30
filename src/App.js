import { Container } from "react-bootstrap";
import Header from "./component/Header";
import HomeScreen from "./screen/HomeScreen";

function App() {
  return (
    <>
      <Header />
      <Container>
        <HomeScreen />
      </Container>
    </>
  );
}

export default App;
