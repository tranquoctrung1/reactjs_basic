/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react';
import Slide_Baner from './slide_baner';
import Intro from './intro';
import Main_Client from './client';
import Footer from './footer'

//////////////////// Body //////////////////////
class body extends Component {
    render() {
        return (
            <div className="App2">
                <Slide_Baner/>
                <Intro/>
                <Main_Client/>
                <Footer/>
            </div>
        );
    }
}

export default body