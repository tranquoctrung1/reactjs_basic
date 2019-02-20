import React, {Component} from 'react';

import './footer.sass';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



class Information extends Component {
    render() {
        return (
            <Col md="4">
                
                <p> <FontAwesomeIcon className="mr-2" icon={"home"}/>Fullstack VN</p>             
                <p><FontAwesomeIcon className="mr-2" icon={"home"}/> Fullstack VN</p>            
                <p> <FontAwesomeIcon className="mr-2" icon={"home"}/>Fullstack VN</p>            
                <p><FontAwesomeIcon className="mr-2" icon={"home"}/> Fullstack VN</p>            
                <p><FontAwesomeIcon className="mr-2" icon={"home"}/> Fullstack VN</p>            
                <p><FontAwesomeIcon className="mr-2" icon={"home"}/> Fullstack VN</p>            
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