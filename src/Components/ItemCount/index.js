import { useState} from 'react';



function Contador() {
    // const handlers = useState(0);
    const [contador, setContador] = useState(0);

    function agregarAlContador() {
        setContador(contador + 1);
        console.log(contador);
    }

    function sacarAlContador() {
        setContador(contador - 1);
        console.log(contador);
    }

    return(
        <div>
            <p>
                {contador}
            </p>
            <br />
            <button onClick={agregarAlContador}>Agregar 1 al contador </button>
            <button onClick={sacarAlContador}>Sacar 1 al contador </button>
        </div>
    );
}

export default Contador;