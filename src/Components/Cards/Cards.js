import { Card } from 'react-bootstrap';
import ItemCount from '../ItemCount/index'



export default function CardProducto() {
    function productoAgregado () {
    return(
        alert('¡Usted ha agregado su viaje con exito!')
    );
    }
    return (
    <Card>
    <Card.Body >
        <Card.Title >Viajes</Card.Title>
        <Card.Text>
            Su destino ideal
        </Card.Text>
        <ItemCount initial={1} stock={5}/>
        <button onClick={productoAgregado} className='btnCarrito'>¡Quiero cotizar este viaje!</button>
    </Card.Body>
    </Card>
    );
}