import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import {Header} from "./components/Header";
import {ListProducts} from './components/ListProducts'


function App() {
  return (
    <Container >
      <Header/>
      <ListProducts/>
    </Container>
  );
}

export default App;
