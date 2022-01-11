import { Container } from "react-bootstrap";
import { ListProducts } from '../components/Products/ListProducts'
import { AlertProduct } from "../components/Products/AlertProducts";


export const Home = () =>(
    <Container >
        <AlertProduct/>
        <ListProducts/>
    </Container>
)