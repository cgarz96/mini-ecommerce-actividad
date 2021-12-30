import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import {Header} from "./components/Header";
import {ListProducts} from './components/Products/ListProducts'
import { AlertProduct } from "./components/Products/AlertProducts";


function App() {
  return (
    <Container >
      <Header/>
      <AlertProduct />
      <ListProducts/>
    </Container>
  );
}

export default App;
