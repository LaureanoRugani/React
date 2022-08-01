import { useState, useEffect} from 'react';



function Contador({ stock, initial}) {
    // const handlers = useState(0);
    const [contador, setContador] = useState(initial);



    function agregarAlContador() {
        if(contador < stock) {
        setContador(contador + 1);
        }
    }

    function sacarAlContador() {
        if(contador > 1) {
        setContador(contador - 1);
        }
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


