import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBAnimation } from "mdbreact";
import WOW from "wowjs";
import { Button } from 'react-bootstrap';

class Projects extends React.Component {
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }
  render() {
    return (
      <div>

        <div className="row wow bounceIn">
          <div className=" col-lg-12">
            <div className="about-me col-lg-10">
              <h3 className="text-area-h3">MERN-Project</h3>
              <div className="text-area">
                <div className="text-area-image col-lg-12">
                  <a href="https://whispering-ocean-46384.herokuapp.com/"><img className="acm-project" src={require("./Images/confess it.png")} alt="Confess-it" /></a><br /><br />
                  <h5>Confess-It: a Confession Site</h5><br />
                  <Button href="https://github.com/harsh-dn/Confess-It" className="button-1" variant="success">More <i class="fas fa-external-link-alt"></i></Button>{' '}
                  <Button href="https://whispering-ocean-46384.herokuapp.com/" className="button-1" variant="success">Live Site</Button>{' '}
                </div>
                <p>A collaborative website developed for the community of people to share something out of their hearts out which they
                        won't have been able to say otherwise.<br /><br />
                        Technologies used: HTML, CSS(Bootstrap), EJS, NODE JS, EXPRESS, MONGODB, MATERIAL-UI
                        </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row wow bounceIn">
          <div className=" col-lg-12">
            <div className="about-me col-lg-10">
              <h3 className="text-area-h3">React-Project</h3>
              <div className="text-area">
                <div className="text-area-image col-lg-12">
                  <a href="https://1wudm.csb.app/"><img className="acm-project" src={require("./Images/keeper.png")} alt="Keeper" /></a><br /><br />
                  <h5>Keeper: App for your notes</h5><br />
                  <Button href="https://github.com/harsh-dn/Keeper-App" className="button-1" variant="success">More <i class="fas fa-external-link-alt"></i></Button>{' '}
                  <Button href="https://1wudm.csb.app/" className="button-1" variant="success">Live Site</Button>{' '}
                </div>
                <p>A note-taking service like Google keep where users can make different kinds of notes.<br /><br />
                        Technologies used: HTML, CSS(Bootstrap), React JS, MATERIAL-UI
                        </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* <div className="row wow bounceIn">
          <div className=" col-lg-12">
            <div className="about-me col-lg-10">
              <h3 className="text-area-h3">MERN-Project</h3><br />
              <div className="text-area">
                <div className="text-area-image col-lg-12">
                  <a href="https://sleepy-retreat-60004.herokuapp.com/"><img className="acm-project" src={require("./Images/Re-engine.png")} alt="reengine-it" /></a><br /><br />
                  <h5>Re-Engine IT</h5><br />
                  <Button href="https://github.com/Grumpyyash/ReEngine-IT-MERN" className="button-1" variant="success">More <i class="fas fa-external-link-alt"></i></Button>{' '}
                  <Button href="https://sleepy-retreat-60004.herokuapp.com/" className="button-1" variant="success">Live Site</Button>{' '}
                </div>
                <p>A simple prototype of Reselling application to enable consumers and sellers to provide with an interactive interface.<br /><br />
                        Technologies used: React JS, MongoDB, Reactstrap, Node(Express), MDBootstrap
                        </p>
              </div>
            </div>
          </div>
        </div> */}

        <div className="row wow bounceIn">
          <div className=" col-lg-12">
            <div className="about-me col-lg-10">
              <h3 className="text-area-h3">API-Project</h3>
             {/* <span className="org-name">*PC-recommended</span><br /><br /> */}
              <div className="text-area">
                <div className="text-area-image col-lg-12">
                  <a href="https://github.com/harsh-dn/Webqole"><img className="acm-project" src={require("./Images/webqole.png")} alt="WebNewz" /></a><br /><br />
                  <h5>My Music</h5><br />
                  <Button href="https://github.com/harsh-dn/Webqole" className="button-1" variant="success">More <i class="fas fa-external-link-alt"></i></Button>{' '}
                  <Button href="https://github.com/harsh-dn/Webqole" className="button-1" variant="success">Live Site</Button>{' '}
                </div>
                <p>A newsletter website with great UI with functionalities of API where you can perform various requests.<br /><br />
                        Technologies used: Next JS, HTML, CSS(Bootstrap), JAVASCRIPT(JQUERY)
                        </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row wow bounceIn">
          <div className=" col-lg-12">
            <div className="about-me col-lg-10">
              <h3 className="text-area-h3">Project</h3>
              <span className="org-name">*PC-recommended</span><br /><br />
              <div className="text-area">
                <div className="text-area-image col-lg-12">
                  <a href="https://harsh-dn.github.io/Ganna/#"><img className="acm-project" src={require("./Images/music-port.png")} alt="google-music-player" /></a><br /><br />
                  <h5>My Music</h5><br />
                  <Button href="https://github.com/harsh-dn/Ganna" className="button-1" variant="success">More <i class="fas fa-external-link-alt"></i></Button>{' '}
                  <Button href="https://harsh-dn.github.io/Ganna/#" className="button-1" variant="success">Live Site</Button>{' '}
                </div>
                <p>A plain music website with great UI and basic functionalities of play, pause, next, prev, repeat, shuffle, favourite and much more.<br /><br />
                        Technologies used: HTML, CSS(Bootstrap), JAVASCRIPT(JQUERY)
                        </p>
              </div>
            </div>
          </div>
        </div>


      </div>
    )
  }
}
export default Projects;
