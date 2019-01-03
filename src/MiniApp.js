/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import './MiniApp.sass';




class MiniApp extends Component
{
   user = {
       firstName: null,
        lastName: false,
        img: "./img/hinh1.png",
   }

    concatName = (user) => {
       if(user)
       {
           return this.user.firstName +" "+this.user.lastName;
       }
       else
       {
           return "khong phai nguoi ma la con thu";
       }
    }


    render() {

        return (
            <div className="container">
                <img className="img-fluid" src={this.user.img} alt="hình an vy" title="hinh con cu"></img>
                <h2 className="header"> {this.concatName(this.user)}</h2>
                <h1>{new Date().toLocaleDateString()}</h1>
            </div>
          
        )
  
    }
 
}

export default MiniApp
