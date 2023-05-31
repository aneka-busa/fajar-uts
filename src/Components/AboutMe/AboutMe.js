import React from "react";
import AmnaAbd from "./Img/fajar.jfif";
function AboutMe() {
  return (
    <>
      <div id="aboutme" className="container p-3 mb-5 aboutMe">
        <div className="row">
          <div className="col-sm-12 col-md-5 d-flex justify-content-center align-items-center ">
            <img src={AmnaAbd} style={{ width: '300px', height: '300px', borderRadius: '50%'}} class="mb-3 pictureMe" ></img>
          </div>
          <div className="col-sm-12 col-md-7">
            <h1 className="text-center aboutMeHeader">FAJAR ALDYANSYAH SIDIK</h1>
            <p className="w-75 mx-auto text-center aboutMeText mb-5">
            I am a 23 year old young man, I am currently studying at the Areta Informatic College campus so I like the world of challenges in the world of informatic technology, I live in Tangerang Regency. I am currently working in the field of technology such as web developer, graphic design, digital marketing, video editing and copy writing for an SEO article.
            </p>
            <div className="d-flex justify-content-between w-50 align-items-center mx-auto">
              <a
                href="#"
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
              <a href="#" target="_blank">
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
