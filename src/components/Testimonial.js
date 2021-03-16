
import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";

const Testimonial = () => {
  return (
      
     
    <MDBContainer className="testimonial-main wow bounceIn">
    
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={false}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1" className="">
            <MDBView className="">
              <div>
                  <div>
                    <img src={require("./Images/Mayank.jpeg")} alt="Mayank Agarwal" className="testimonial-img" />
                  </div>
                  <div>
                    <h5>"Yash Vardhan is a quick learner and a good team-man"</h5>
                    <p className="test-person">Mayank Agarwal, KoobBox</p>
                  </div>
              </div>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
            <div>
                  <div>
                    <img src={require("./Images/Prajwal.jpeg")} alt="Prajwal singh" className="testimonial-img" />
                  </div>
                  <div>
                    <h5>"Yash Vardhan is a professional web developer in the making"</h5>
                    <p className="test-person">Prajwal Singh, RYD Enterprises</p>
                  </div>
              </div>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
            <div>
                  <div>
                    <img src={require("./Images/Harshita.jpeg")} alt="Harshita Joshi" className="testimonial-img" />
                  </div>
                  <div>
                    <h5>"I would hire Yash again, especially for the backend-dev"</h5>
                    <p className="test-person">Harshita Verma, TrendSight</p>
                  </div>
              </div>
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
    
  );
}

export default Testimonial;

