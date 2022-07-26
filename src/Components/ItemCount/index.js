import { useState, useEffect} from 'react';



function Contador( stock, initial, onAdd) {
    // const handlers = useState(0);
    const [contador, setContador] = useState(1);
    <Contador stock="5" initial="1" />



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
    // useEffect(() => {
    //     console.log('Contador mounted y renderizado');
    //     return () => {
    //         console.log ('Contador listo para ser desmontado');
    //     }
    // });

    // useEffect(() => {
    //     console.log('Contador cambio');
    //     return () => {
    //         console.log ('Contador listo para ser desmontado');
    //     }
    // }, [contador]);

    
    // useEffect(() => {
    //     console.log('Contador mounted');
    //     return () => {
    //         console.log ('Contador listo para ser desmontado');
    //     }
    // }, []);

}

export default Contador;


