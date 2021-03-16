import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {MDBAnimation } from "mdbreact";
import WOW from "wowjs";
import { Button } from 'react-bootstrap';

class Courses extends React.Component {
    render() {
        return (
            <div className=" col-lg-12">
                      <div className="col-lg-10 work-exp">
                      <h3 className="text-area-h3"><i class="far fa-cog"></i> Courses Undertaken</h3><br />
                      <div className="text-area">
                       <h5>Web Development Bootcamp</h5>
                       <p>UDEMY (-Angela Yu)</p>
                       <h5>Front-end Development with React</h5>
                       <p>Coursera (- J Muppala)</p>
                       <h5>C++ for Everybody</h5>
                       <p>Coursera (- Dr. Chuck)</p>                      
                      </div>                        
                      </div>
            </div>
        )
    }
}

export default Courses;