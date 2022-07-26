import logo from './logo.svg';
import './App.css';
import Container from './Container/Container';
import NavBar from './Components/NavBar';
import Header from './Components/Header/ItemListContainer';
import CartWidget from './Components/CartWidget';
import Contador from './Components/ItemCount'




function App() {
  return <>
    <NavBar />
    <h2>Titulo</h2>
    <Container />
    <CartWidget />
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
