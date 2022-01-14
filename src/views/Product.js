import { useState,useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getProductById } from '../app/services/productServices';

export const Product = (props,{match}) =>{
    const { id } = useParams();
    const [productDetail, setProductDetail] = useState(null);

    useEffect(() => {
        getProductById(id)
            .then((productFromDB) => setProductDetail(productFromDB))
            .catch((err) => console.log(err))
    },[id]);

    return(
        <Container >
            <h1>Producto { productDetail && JSON.stringify(productDetail)}</h1>
        </Container>
    )
}
