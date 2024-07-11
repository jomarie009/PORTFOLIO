import "./Experience.css";
import Navbar from "./Navbar";


import capstone1 from "../img/capstone1.jpg";
import colloquium from "../img/colloquium.jpg";
import siralex from "../img/siralex.jpg";
import serial from "../img/serial.jpg";
import sirengine from "../img/sirengine.jpg";
import OJT3 from "../img/OJT (3).jpg";
import OJT18 from "../img/OJT (18).jpg";
import OJT15 from "../img/OJT (15).jpg";
import OJT14 from "../img/OJT (14).jpg";
import OJT4 from "../img/OJT (4).jpg";
import OJT19 from "../img/OJT (19).jpg";
import pan1 from "../img/pan1.jpg";
import OJT13 from "../img/OJT (13).jpg";



const Experience = () => {
  return (
    <>
      <Navbar />

      <div className="wrapper bg-secondary bg-gradient">
        <div className="overlay">
          <div class="container3">

            <div id="exprience-info">
              <div className="container-fluid mt-5">
                <div className="row">
                  <div className="col">
                    <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                      Experiences
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section id="info">
            
      <div class="text-center">
      <h1 className="text display-4 fw-bold"><center>My Experiences<p className="display-6"></p></center></h1>
        <div className="container">
          <div className="row">
            
            <div className="col-lg mb-3">
              <div className="card1 p-5 shadow">
                <img src={capstone1} alt="" />
                <h4 className="text-center">Defending our Capstone Project</h4>
                
              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card1 p-5 shadow">
                <img src={colloquium} alt="" />
                <h4 className="text-center">Attending Colloquium</h4>
              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card1 p-5 shadow">
                <img src={siralex} alt="" />
                <h4 className="text-center">Discussion About the Basic of Programming during our OJT</h4>
              </div>
            </div>
            
          </div>
        </div> </div>

        <div className="container">
          <div className="row align-items:center">
            <div className="col-lg mb-4">
              <div className="card1 p-5 shadow">
                <img src={serial} alt="" />
                <h4 className="text-center">Putting Serial Number to the Headset </h4>
                
              </div>
            </div>
            <div className="col-lg mb-4">
              <div className="card1 p-5 shadow">
                <img src={sirengine} alt="" />
                <h4 className="text-center">Giving Certificate to our OJT Superviser Together with Maam Debbie</h4>
              </div>
            </div>
            
            <div className="col-lg mb-4">
              <div className="card1 p-5 shadow">
                <img src={pan1} alt="" />
                <h4 className="text-center">Giving Certificate to our Recruitment Manager in Panasiatic with Maam Debbie</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
          <svg
            className="air-waves"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
          >
            <defs>
              <path
                id="wave-path"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="wave1">
              <use href="#wave-path" x="50" y="3" fill="rgb(255,255,255)" />
            </g>
            <g className="wave2">
              <use
                href="#wave-path"
                x="50"
                y="0"
                fill="rgba(255,255,255, .5)"
              />
            </g>
            <g className="wave3">
              <use
                href="#wave-path"
                x="50"
                y="9"
                fill="rgba(255,255,255, .3)"
              />
            </g>
          </svg>
        </div>
      </div>

      <section id="portfolio">
        <div className="container">
          <div className="pb-5">
            <br />
            <hr />
          </div>
      
          <div class="isotope">
            <div class="row">
            <h1 className="text display-4 fw-bold"><center>During My On-the-Job Training at Panasiatic Call Center<p className="display-6"></p></center></h1>
              <div class="col-lg-6 mb-4">
                <div class="item">
                  <img src={OJT3} alt="one" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-6 mb-4">
                <div class="item">
                  <img src={OJT18} alt="two" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-6 mb-4">
                <div class="item">
                  <img src={OJT15} alt="three" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-6 mb-4">
                <div class="item">
                  <img src={OJT14} alt="three" />
                  <div class="overlay"></div>
                </div>
              </div>
              <hr /> 
          

              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={OJT4} alt="" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={OJT19} alt="" />
                  <div class="overlay"></div>
                </div>
              </div>

          

              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={OJT13} alt="" />
                  <div class="overlay"></div>
                </div>
              </div>

             
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default Experience;
