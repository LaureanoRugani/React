import logo from './logo.svg';
import './App.css';
import Container from './Container/Container';
import NavBar from './Components/NavBar';
import CartWidget from './Components/CartWidget';
import Contador from './Components/ItemCount'
import { useEffect } from 'react';
import ItemDetailContainer from './ItemDetailContainer/ItemDetalContainer'




function App() {

  return <>
    <NavBar />
    <ItemDetailContainer />
  </>
}

export default App;


