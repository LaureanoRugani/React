import logo from './logo.svg';
import './App.css';
import Container from './Container/Container';
import NavBar from './Components/NavBar';
import Header from './Components/Header/ItemListContainer';
import CartWidget from './Components/CartWidget';
import Contador from './Components/ItemCount'
import { useEffect } from 'react';




function App() {

  useEffect(() => {
    console.log('App mounted');
  },[Contador]);
  return <>
    <NavBar />
    <h2>Titulo</h2>
    <Container />
    <Contador></Contador>
    
  </>
}

export default App;


// function App() {

//     return (
//       <div className="App">
//         <Header titulo="TITULO" />
//         <Form></Form>
//       </div>

      
//     );
// }

// export default App;
