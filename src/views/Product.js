import { useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";


export const Product = (props) =>{
    let { id } = useParams();
    const [productId,setProductId]=useState(null)
    return(
        <Container >
            <h1>Producto {id}</h1>
        </Container>
    )
}
