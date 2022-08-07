import ItemCount from '../ItemCount/index'
import Card from '../Cards/Cards'
import { useState, useEffect } from "react";
import getFetch from "../Data/productos";




export default function Item() {
    function agregarProducto() {
        return alert("Producto agregado");
    }
    const [Data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getFetch
            .then((resp) => setData(resp))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div>
            {loading ? (
                
                <h3>
                    ¡Aguarde!, los viajes estan siendo cargados
                </h3>
            ) : (
                Data.map((prod) => (
                    <Card key={prod.id}>
                        <Card.Img
                            variant="top"
                            src={prod.imagenes} 
                        />
                        <Card.Body>
                            <Card.Title>
                                {prod.categoria}: <br/> {prod.nombre}
                            </Card.Title>
                            <Card.Text>${prod.precio}</Card.Text>
                            <button onClick={agregarProducto}>
                            </button>
                            <ItemCount  stock={prod.stock} initial={1} />
                        </Card.Body>
                    </Card>
                ))
            )}
        </div>
    );
}
