import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Button, Container, Table } from "react-bootstrap";

const Usuarios = () => {
    return(
        <Container className='mt-4'>
            <h3>Lista de Usuarios</h3>
            <Table striped bordered hover>
                <thead>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Ações</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Ana Maria</td>
                        <td>AnaMaria@gmail.com</td>
                        <td><Button variant="info" as={Link} to="/consultar_usuario">Consultar</Button></td>

                    </tr>
                    <tr>
                        <td>Ana Maria</td>
                        <td>AnaMaria@gmail.com</td>
                        <td><Button variant="info" as={Link} to="/consultar_usuario">Consultar</Button></td>

                    </tr>
                    <tr>
                        <td>Ana Maria</td>
                        <td>AnaMaria@gmail.com</td>
                        <td><Button variant="info"  as={Link} to="/consultar_usuario">Consultar</Button></td>

                    </tr>
                </tbody>
            </Table>

        </Container>
    )
}	


export default Usuarios;