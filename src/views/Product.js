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
            {/* productDetail && JSON.stringify(productDetail)*/}
            {productDetail ?
            <ul>
                <li>Numero de producto: {productDetail.id}</li>
                <li>Nombre: {productDetail.title}</li>
                <li>Categoria: {productDetail.category}</li>
                <li>Precio: $ {productDetail.price}</li>
            </ul>:<h1>Este producto no existe</h1>}
        </Container>
    )
}
