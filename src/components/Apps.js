import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {MDBAnimation } from "mdbreact";
import WOW from "wowjs";
import { Button } from 'react-bootstrap';

class Apps extends React.Component {
    render() {
        return (
            <div className=" col-lg-12">
                      <div className="col-lg-10 work-exp">
                      <h3 className="text-area-h3"><i class="far fa-browser"></i> More Apps</h3><br />
                      <div className="text-area">
                       <p ><a href="" className="code-links">Keeper-App React <i class="fas  fa-external-link-alt"></i></a></p>
                       <p ><a href="https://harsh-dn.github.io/simon-game/" className="code-links">Simon-game JAVASCRIPT <i class="fas  fa-external-link-alt"></i></a></p>
                       <p ><a href="https://harsh-dn.github.io/TinDog/" className="code-links">Tinder for Dogs <i class="fas  fa-external-link-alt"></i></a></p>
                       <p ><a href="https://harsh-dn.github.io/Music-notes/" className="code-links">DRUM-KIT App <i class="fas  fa-external-link-alt"></i></a></p>
                       {/* //<p ><a href="https://rocky-eyrie-08271.herokuapp.com/" className="code-links">Stack-Alert <i class="fas  fa-external-link-alt"></i></a></p> */}
                      </div>                       
                      </div>
            </div>
        )
    }
}

export default Apps;