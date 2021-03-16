import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {MDBAnimation } from "mdbreact";
import WOW from "wowjs";
import { Button } from 'react-bootstrap';

class Achievement extends React.Component {
    render() {
        return (
            <div className=" col-lg-12">
                      <div className="col-lg-10 work-exp">
                      <h3 className="text-area-h3"><i class="fas fa-award"></i> Achievements</h3><br />
                      <div className="text-area">
                       <h5>JEE ADVANCED 2018</h5>
                       <p>CRL: 7916</p>
                       <h5>JEE MAINS 2018</h5>
                       <p>CRL: 4016</p>
                       <h5>Higher Secondary Examination 2018</h5>
                       <p>89.6%</p>
                      </div>                        
                      </div>
            </div>
        )
    }
}

export default Achievement;