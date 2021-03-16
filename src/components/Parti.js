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
                      <h3 className="text-area-h3"><i class="fas fa-award"></i> Participations</h3><br />
                      <div className="text-area">
                       <h5>FallFest'20 ACM IIT(ISM)</h5>
                       <p>WINNER(First Place)</p>
                       <h5>SPIDER'20 BIT SINDRI</h5>
                       <p>Among 5 Finalists</p>
                       
                      </div>                       
                      </div>
            </div>
        )
    }
}

export default Parti;