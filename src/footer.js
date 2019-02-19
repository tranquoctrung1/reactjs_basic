import React, {Component} from 'react';

import './footer.sass';
import { Container, Row, Col } from 'reactstrap';

class Information extends Component {
    render() {
        return (
            <Col md="4">
                <p> Fullstack VN</p>            
                <p> Fullstack VN</p>            
                <p> Fullstack VN</p>            
                <p> Fullstack VN</p>            
                <p> Fullstack VN</p>            
                <p> Fullstack VN</p>            
            </Col>
        );
    }
}

class Footer extends Component {
    render() {
        return (
            <section  className="mt-3 footer">
            <Container>
                <Row>
                    <Information/>
                    <Information/>
                    <Information/>
                </Row>
            </Container>
            </section>
        );
    }
}

export default Footer