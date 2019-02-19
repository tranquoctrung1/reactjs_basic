/* eslint-disable jsx-a11y/alt-text */
import React, {Component } from 'react';
import './slide_baner.sass';

class Slide_Baner extends Component {
    render() {
        return (
            <section className="home-slider">
                <img src="./img/home_slider_1.jpg"></img>
                <h3 className="text-center">Chúng tôi là FULLSTACK VN hãy cố gắng rèn luyện để trở thành 1 người front-end thực xự</h3>

            </section>
        );
    }
}

export default Slide_Baner 