import React from "react";
import React from "react";
import { Container,Col, Row, Form, Button } from "react-bootstrap";

const ConsultarUsuario = () => {
    return(
         <Container>
                    <h3>Novo Usuário</h3>
                    <Row>
                        <Col>
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type='text' name="nome"/>
                        </Col>
                        <Col>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='text' name="email"/>
                        </Col>
                        <Col>
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type='password' name="senha"/>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col>
                        <Button variant='warning'>Alterar</Button>
                        <Button variant='danger'>Excluir</Button>
                        </Col>
                    </Row>
        
        
                </Container>
    )
}