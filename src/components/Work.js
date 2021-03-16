import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {MDBAnimation } from "mdbreact";
import WOW from "wowjs";
import { Button } from 'react-bootstrap';

class Work extends React.Component {
    render() {
        return (
            <div className=" col-lg-12">
                      <div className="col-lg-10 work-exp">
                      <h3 className="text-area-h3"><i class="fal fa-code-branch"></i> Work Experience</h3><br />
                      <div className="text-area">
                      <h5>Web Developer</h5>
                       <p className="work-para"><span className="org-name">SNTC IIT(BHU) </span>(Dec,2019-Feb,2020)</p>
                       <h5>Secretary</h5>
                       <p className="work-para"><span className="org-name">SAE CLUB IIT(BHU) </span>(Aug,2020-Current)</p>
                       {/* <h5>React Developer Intern</h5>
                       <p className="work-para"><span className="org-name">RYD Enterprises</span>(June,2020-July,2020)</p> */}
                       <h5>Publicity & Marketing</h5>
                       <p className="work-para"><span className="org-name">KASHIYATRA TECHNEX </span>(Aug,2018-Feb,2020)</p>
                      </div>                        
                      </div>
            </div>
        )
    }
}

export default Work;