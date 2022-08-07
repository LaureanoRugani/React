import React from 'react'
import Item from '../Components/Item'

export default function ItemList(props) {
    return (
<div>
    {
        props.productos.map((product)=>{
            return(
                <Item key={product.id} imagen={product.imagen}  precio={product.precio} nombre={product.nombre} categoria={product.categoria} stock={product.stock}  />
            )

        })
    }
</div> 
)
}