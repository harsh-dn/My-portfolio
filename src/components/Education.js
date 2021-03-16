import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {MDBAnimation } from "mdbreact";
import WOW from "wowjs";
import { Button } from 'react-bootstrap';

class Education extends React.Component {
    render() {
        return (
                     <div className=" col-lg-12">
                      <div className="col-lg-10 work-exp">
                      <h3 className="text-area-h3"><i class="far fa-university"></i> Education</h3><br />
                      <div className="text-area">
                       <h5><i class="fas fa-graduation-cap"></i>Mechanical Engineering(B.Tech)</h5>
                       <p>Indian Institute of Technology BHU (2018-22)</p>
                       <h5><i class="fas fa-graduation-cap"></i> Seconadary and Higher Secondary</h5>
                       <p>Gyan Bharti Residential complex Gaya (2014-18)</p>                       
                      </div>                        
                      </div>
                      </div>
        )
    }
}

export default Education;