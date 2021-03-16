import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {MDBAnimation } from "mdbreact";
import WOW from "wowjs";
import { Button } from 'react-bootstrap';

class Github extends React.Component {
    render() {
        return (
            <div className=" col-lg-12">
                      <div className="col-lg-10 work-exp">
                      <h3 className="text-area-h3"><i class="fab fa-github-alt"></i> Github Profile</h3><br />
                      <div className="text-area">
                       <div className="right-image-div">
                       <a href="https://github.com/harsh-dn"><img className="git-img" src={require("./Images/git-port.png")} alt="Git-profile"/></a><br /> 
                       </div>
                       <p>Summary of commits and pull request by <a className="code-links" href="https://github.com/harsh-dn">@harsh-dn</a></p>
                      </div>                        
                      </div>
            </div>
        )
    }
}

export default Github;