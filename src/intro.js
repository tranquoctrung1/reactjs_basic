/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/alt-text */
import React, {Component } from 'react';
import './intro.sass';
import { Container, Row, Col } from 'reactstrap';

// Thông tin cho từng sản phẩm

class Des_Pro extends Component {
   render() {
       return (
            <figure>
            <div className="box_img">
                <img className="img-fluid" src={this.props.id_img}></img>
            </div>
            <figcaption >
                <h4 className="text-center mt-3">{this.props.name} </h4>
                <p className="des text-danger">{this.props.des} </p>
                <div>
                    {this.props.time}
                </div>
                <div className="price mt-2">{this.props.price}<sup>đ</sup></div>
            </figcaption>
        </figure>
            );
        }
}


const introduce ={
    time: new Date().toLocaleDateString(),
    id_img: './img/home_news_',
    name: "Đồ cực xịn",
    des: "Hàng Việt Nam chất lượng cao bảo hành 10 tháng nhưng mà chỉ cần 2 tháng là bạn phải đem ra cửa hàng để bảo hành tại vì hư.",
}

//Phân chia bổ cục cho từng sản phẩm
class Intro extends Component {
    render() {
        return(
            <Container className="mt-4 introduce">
                <Row>
                    <Col sm="12" md="4">
                        <Des_Pro id_img={`${introduce.id_img}1.jpg`} 
                        name={introduce.name}
                        time={introduce.time}
                        des={introduce.des}
                        price={1}/>
                    </Col>
                    <Col sm="12" md="4">
                    <Des_Pro id_img={`${introduce.id_img}2.jpg`} 
                        name={introduce.name}
                        time={introduce.time}
                        des={introduce.des}
                        price={2}/>
                    </Col>
                    <Col sm="12" md="4">
                    <Des_Pro id_img={`${introduce.id_img}3.jpg`} 
                        name={introduce.name}
                        time={introduce.time}
                        des={introduce.des}
                        price={3}/>
                    </Col>
                </Row>
            </Container>
        );
       
    }
}

export default Intro