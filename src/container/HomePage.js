import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



class HomePage extends Component {
    
    render() {
        return (
            <div className="align-items-md-center" >
                <Container fluid>
                    <Row className="justify-content-md-center" >
                        <Col>
                            <h1>Hi, I'm Max Power.</h1> 
                            <h1>I am a fullstack web developer trainee at futureproof.</h1>
                        </Col>
                    </Row>
                </Container>
                <Container fluid>
                    <Row className="justify-content-md-center">
                        <Col md="auto"><Button>About me</Button></Col>
                        <Col md="auto"><Button>View my work</Button></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default HomePage;
