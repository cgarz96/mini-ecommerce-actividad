import { DetailCart } from '../components/ShoppingCart/DetailCart';
import { Button, Col, Row } from 'react-bootstrap';
export const Purchase = ({history}) =>{
    const handleCancelButton = () => {
        history.push('/')
    }
    return (
        <>
            <h1>Detalles de tu carrito de compras</h1>
            <DetailCart />
            <Row>
                <Col xs={6}>
                    <Button onClick={handleCancelButton} variant='danger'>Cancelar</Button>
                </Col>
                <Col xs={6}>
                    <Button variant='success'>Comprar</Button>
                </Col>
            </Row>
        </>
    )
}