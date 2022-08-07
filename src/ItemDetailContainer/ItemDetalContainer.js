import React from 'react'
import { useState, useEffect } from "react";
import ItemList from '../ItemDetail/ItemDetail'

export default function ItemListContainer() {
    const data = [{
        "id": 0,
        "nombre": "Viaje a Amsterdam",
        "precio": 2500,
        "stock": 10,
        "imagen": ""
    }]

const [loading, setLoading] = useState(true);
const [error, setError] = useState(false);
const [resultado, setResultado] = useState([]);

useEffect(() => {
const productCarrito = new Promise ((res, rej)=>{
    setTimeout(() => {
        res(data)
        rej("¡Error! No se pudieron cargar los productos")
    }, 2000);
})

productCarrito
    .then((result)=>{
    setResultado(result)
    })
    .catch(()=> {
    setError(true)
    })
    .finally(()=>{
    setLoading(false)
    });

})
return (
    <>
    {
        loading ? <h4>Cargando productos...</h4> : <ItemList productos={resultado} />
    }
    
    </>
)
}