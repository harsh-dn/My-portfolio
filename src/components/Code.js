import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {MDBAnimation } from "mdbreact";
import WOW from "wowjs";
import { Button } from 'react-bootstrap';

class Code extends React.Component {
    render() {
        return (
            <div className=" col-lg-12">
                      <div className="col-lg-10 work-exp">
                      <h3 className="text-area-h3"><i class="far fa-code"></i> Coding Platforms</h3><br />
                      <div className="text-area">
                       <p ><a href="https://www.hackerrank.com/big_dog_" className="code-links">Hackerrank <i class="fas code-user-hack fa-external-link-alt"></i></a>@big_dog_</p>
                       <p ><a href="https://www.codechef.com/users/big_dog1" className="code-links">CodeChef   <i class="fas code-user-chef fa-external-link-alt"></i></a>@big_dog_1</p>
                       <p ><a href="https://codeforces.com/profile/big_dog_1" className="code-links">CodeForces <i class="fas code-user-force fa-external-link-alt"></i></a>@big_dog1</p>
                      </div>                       
                      </div>
            </div>
        )
    }
} 

export default Code;