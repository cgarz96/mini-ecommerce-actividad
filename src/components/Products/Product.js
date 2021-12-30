import { Col, Row, Button, Badge} from "react-bootstrap";
import "../../assets/css/styles.css";
import { saveLastInterestProduct } from "../../app/services/storageServices";
import db from '../../app/db/db';

export const Product = ({item}) => {
    const {title,price,image,description}= item;
    const addProductToCart = ({title, price, category}) => {
        db.cart.add({
          title: title,
          price: price,
          category: category
        })
    }
    return(
 
        <Col xs={12} md={3}className="border-card"  >
        <Row>
        <Col xs={8}>
            <div >{title}</div>
        </Col>
        <Col xs={4}>
            <Button variant="primary" onClick={() => saveLastInterestProduct(title) }>
            Precio <Badge bg="info">{price}</Badge>
            <span className="visually-hidden">$</span>
            </Button>
        </Col>
        </Row>
        <Row>
        <Col xs={6}>
            <img className="img-product" alt="" src={image}></img>
        </Col>
        <Col xs={6}>
            <div>{description.slice(0,70)}...</div>
        </Col>
        </Row>
        <Row>
        <Col xs={12}>
            <Button variant="warning" className="m-1" onClick={() => addProductToCart(item) } >
             <Badge bg="secondary">🛒Agregar al carrito</Badge>
            <span className="visually-hidden"> </span>
            </Button>
        </Col>
        </Row>
        </Col>

    )
}