import React from 'react'
import Typewriter from 'typewriter-effect';
import { Link } from "react-router-dom";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";

class TypeWriter extends React.Component {
    render() {
        return(
            <div className="typewriter-div">
            <MDBContainer className="z-depth-0" style={{padding:0,margin:0,}}>
            <MDBRow>
              <MDBCol className="z-depth-0">
                <MDBJumbotron style={{ padding: 0 }}>
                  <MDBCol className="text-white typewriter-col text-center px-0 typewriter" style={{ height: "100vh",  }}>
                    <MDBCol className="py-5 px-5">
                      <MDBCardTitle className="h1-responsive pt-5 my-5 font-bold text-white" style={{fontFamily:"FF Tisa" ,fontSize:"2.5rem",padding:"0 35px 0px 35px"}}><Typewriter
                        options={{
                            strings: ['Hi There! '],
                            autoStart: true,
                            loop: true,
                          }}

                        onInit={(typewriter) => {
                typewriter.typeString('I am Harsh Vardhan, a Web Developer')
                .callFunction(() => {
                    console.log('String typed out!');
                })
                .pauseFor(1000)
                .deleteAll()
                .callFunction(() => {
                    console.log('All strings were deleted');
                })

                .start()
            }}
            /></MDBCardTitle>
                      <MDBBtn  color="elegant" className="mt-5"><Link  to={'/content'}>Join Now</Link></MDBBtn>
                    </MDBCol>
                  </MDBCol>
                </MDBJumbotron>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          </div>
        )
    }
}
export default TypeWriter;
