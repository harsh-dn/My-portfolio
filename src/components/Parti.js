import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {MDBAnimation } from "mdbreact";
import WOW from "wowjs";
import { Button } from 'react-bootstrap';

class Parti extends React.Component {
    render() {
        return (
            <div className=" col-lg-12">
                      <div className="col-lg-10 work-exp">
                      <h3 className="text-area-h3"><i class="fas fa-award"></i> Extra Curriculars</h3><br />
                      <div className="text-area">
                       <h5>Volunteer at Social Service Council</h5>
                       <p>IIT BHU</p>
                       <h5>Block Secretary at BJP Youth Wing</h5>
                       <p>Paraiya Gaya</p>
                       
                      </div>                       
                      </div>
            </div>
        )
    }
}

export default Parti;