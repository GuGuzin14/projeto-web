import './App.css';
import Botao from './components/Botao';
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './screens/Home'
import Contato from './screens/Contato'
import NovoUsuario from './screens/NovoUsuario';
import Usuarios from './screens/Usuarios';
import { Container, Nav, Navbar } from 'react-bootstrap';

function App() {
  return(
    <Router>
      <Nav bg="primary" variant='dark' expand="lg">
        <Nav.Link as ={Link} to='/'>Home</Nav.Link>
        <Nav.Link as ={Link} to='/contato'>Contato</Nav.Link>
        <Nav.Link as ={Link} to='/novo_usuario'>Novo Usuario</Nav.Link>
        <Nav.Link as ={Link} to='/usuarios'>Usuarios</Nav.Link>
      </Nav>
      <Container className='mt-4'>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contato' element={<Contato/>}></Route>
        <Route path='/novo_usuario' element={<NovoUsuario/>}></Route>
        <Route path='/usuarios' element={<Usuarios/>}></Route>
      </Routes>
      </Container>
    </Router>
  )
 

  
}

export default App;
