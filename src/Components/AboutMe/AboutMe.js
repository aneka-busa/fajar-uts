import React from "react";
import ProfilePic from "./Img/ProfilePic.png";
import AmnaAbd from "./Img/AmnaAbd.jfif";
function AboutMe() {
  return (
    <>
      <div id="aboutme" className="container p-3 mb-5 aboutMe">
        <div className="row">
          <div className="col-sm-12 col-md-5 d-flex justify-content-center align-items-center ">
            <img src={AmnaAbd} style={{ width: '300px', height: '300px', borderRadius: '50%'}} class="mb-3 pictureMe" ></img>
          </div>
          <div className="col-sm-12 col-md-7">
            <h1 className="text-center aboutMeHeader">Amna Abdallah</h1>
            <p className="w-75 mx-auto text-center aboutMeText mb-5">
              IT Engineer graduate, Professional Designer, Full Stack Web Developer
              with 5+ years of experience in Education, Auditing, and Web
              Development. Seeking a position to apply analytic skills as part
              of a team for creating user-oriented solutions in the tech
              industry.
            </p>
            <div className="d-flex justify-content-between w-50 align-items-center mx-auto">
              <a
                href="https://www.linkedin.com/in/amna-abdallah-2b615572/"
                target="_blank"
              >
                <i
                  id="linkedinLogo"
                  className="fab fa-linkedin"
                  title="LinkedIn"
                ></i>
              </a>
              <a href="#" target="_blank">
                <i id="xingLogo" className="fab fa-xing" title="Xing"></i>
              </a>
              <a href="https://github.com/amnaabd" target="_blank">
                <i
                  id="gitHubLogo"
                  className="fab fa-github-square"
                  title="GitHub"
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
