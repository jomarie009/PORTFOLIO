import "./Home.css";

import OJT1 from "../img/home1.JPG";
import analyst from "../img/analyst.jpg";
import graph from "../img/graph.jpg";
import digiart1 from "../img/digiart1.jpg";
import graphd from "../img/graphd.jpg";
import graphd1 from "../img/graphd1.jpg";
import graphd2 from "../img/graphd2.jpg";

import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="wrapper">
        <div className="overlay">
          <div class="container1">
            

            <div id="banner" className="d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 ok">
                    <div className="card">
                      <h1 className="text display-6 fw-bold">Hi, I'm Jomarie Endab</h1>
                      <br />
                      <p className="self text-light">
                      I am a passionate graphic designer skilled at blending artistic creativity with technical proficiency. 
                      My aspirations extend to becoming a System Analyst, Digital artist, and Game Developer, driven by a deep passion for creativity and technology.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 zoom-effect">
                    <div className="card">
                      <img
                        src={OJT1}
                        
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <svg
        className="sea-waves"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="sea-wave1">
          <use href="#wave-path" x="50" y="3" fill="rgb(255,255,255)" />
        </g>
        <g className="sea-wave2">
          <use href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .5)" />
        </g>
        <g className="sea-wave3">
          <use href="#wave-path" x="50" y="9" fill="rgba(255,255,255, .3)" />
        </g>
      </svg>

      <section id="info">
        <div className="container">
          <div className="row">
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <img src={graph} alt="" />
                <h4 className="text-center text-white">Graphic Designer</h4>
                <p class="text-white">
                Create visual concepts, using computer software or by hand, to communicate ideas that inspire, inform, and captivate consumers. 
                </p>
              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <img src={analyst} alt="" />
                <h4 className="text-center text-white">System Analyst</h4>
                <p class="text-white">
                A Systems Analyst, or System Analyst, is responsible for determining the computing needs of a client and translating them into system.
                </p>
              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <img src={digiart1} alt=""/>
                <h4 className="text-center text-white">Digital Artist</h4>
                <p class="text-white">
                A digital artist makes art using the computer as his or her primary tool.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <svg
        className="radio-waves"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="radio-wave1">
          <use href="#wave-path" x="50" y="3" fill="rgb(165,0,165)" />
        </g>
        <g className="radio-wave2">
          <use href="#wave-path" x="50" y="0" fill="rgba(165,0,165, .5)" />
        </g>
        <g className="radio-wave3">
          <use href="#wave-path" x="50" y="9" fill="rgba(165,0,165, .3)" />
        </g>
      </svg>

      <section id="game">
        <div className="container">
          <div className="row justify-content-center">
            <h3 className="display-3">
            <h1 className="text display-4 fw-bold"><center>Sample  Design <br /></center> </h1>
            </h3>
            <div className="col-lg-7 align-items-center">
              <div className="card">
                <h4 className="ms-3 mt-3">*Graphic Design</h4>
                <img src={graphd} alt="" />
              </div>
              <div className="card">
                <h4 className="ms-3 mt-3">*Sample Design</h4>
                <img src={graphd1} alt="" />
              </div>
              <div className="card">
                <h4 className="ms-3 mt-3">
                  *Sample Design
                </h4>
                <img src={graphd2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
