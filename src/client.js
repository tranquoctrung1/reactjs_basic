/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/alt-text */
import React ,{Component } from 'react';

import './client.sass';

import { Container, Row, Col } from 'reactstrap';

class Client_img extends Component {
    render() {
        return (
        <Col sm="6" md="2">
            <img className="img-fluid" src={this.props.url_img}></img>
        </Col>
        );
    }
    
}

const url_img  = './img/clients_';

class Main_Client extends Component {
    render() {
        return (
            <Container className="mt-3">
                <Row>
                    <Client_img url_img={`${url_img}1.png`}/>
                    <Client_img url_img={`${url_img}2.png`}/>
                    <Client_img url_img={`${url_img}3.png`}/>
                    <Client_img url_img={`${url_img}4.png`}/>
                    <Client_img url_img={`${url_img}5.png`}/>
                    <Client_img url_img={`${url_img}6.png`}/>
                </Row>
            </Container>
        );
    }
}

export default Main_Client