import JsonProducts from '../../api/products.json'
import { Product } from './Product';
import { Row } from 'react-bootstrap';

export const ListProducts = () => {
    const json = JsonProducts.products;
    return(
        <Row>
            {json.map((element, index) => (
                <Product key={index} item={element}  />
            ))}
        </Row>
    );
}