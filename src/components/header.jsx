import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Header() {
  return (
    <sectioning>
      <div className="navbar">
        <img src="./logo.png" className="logo" />
        <ul className="">
          <li>
            <a href="/"> Home</a>
          </li>
          <li>
            <a href="/contact" target="/page/contact us">
              Contact Us
            </a>
          </li>
          <li>
            <a href="/ourService"> Our Service</a>
          </li>
          <li>
            <a href="/setting"> Setting</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
        <div className="icons">
          <button className="letalk"> Lets talk</button>
          <img src="" alt="smile" className="letalk" />
        </div>
      </div>
      <div className="sidebar">
        <h4>
          <a href="/">Home</a>
        </h4>
        <h4>
          <a href="/contact">Contact Us</a>
        </h4>
        <h4>
          <a href="/"> About Us </a>
        </h4>
        <h4>
          <a href="/"> Setting </a>
        </h4>
        <p></p>
      </div>
      <main>
        <div>
          <h1> HEY, I'M ENVOY, A CREATIVE DESIGNER AND DEVELOPER.</h1>
          <div className="innerbutton">
            <button className="inn n">want to discuss?</button>
            <button className="inn">let's Talk</button>
          </div>
        </div>
        <div>
          <img src="./man.png" alt="smile" className="man" />
        </div>
      </main>
      <div className="line">
        <p>HTML</p> <p className="p">CSS</p> <p className="p">JAVA SCRIPT</p>{" "}
        <p className="p">REACT</p>
      </div>
      <div className="theme">
        <h1> Services</h1> <p> Here are the services we are providing</p>
      </div>

      <div className="box">
        <div className="box1">
          <h6> Graphics Designing</h6>
        </div>
        <div className="box1">
          <h6> Web Development</h6>
        </div>
        <div className="box1">
          <h6> Web Development</h6>
        </div>
      </div>

      <div className="theme ">
        <h1> Portfolios.</h1> <p> Here are the services we are providing</p>
      </div>
      <div className="box">
        <div className="box1 n">
          <h6> Graphics Designing</h6>
          <p className="writeup">
            We provide amazing and professional <br />
            Graphics Assests for <br/>your projexts such as social <br />
            media post designs, Logo designs, business
            <br /> card designs, poster designs,<br/> youtubee and blogs thumbnail
            designs, product klabel designs
            <br />
            and many more categories as per your requirements.{" "}
          </p>
        </div>
        <div className="box1">
          <h6> Web Development</h6>
          <p className="writeup">
            We provide amazing and professional <br />
            Graphics Assests for <br/>your projexts such as social <br />
            media post designs, Logo designs, business
            <br /> card designs, poster designs,<br/> youtubee and blogs thumbnail
            designs, product klabel designs
            <br />
            and many more categories as per your requirements.{" "}
          </p>
        </div>
        <div className="box1">
          <h6> Web Development</h6>
          <p className="writeup">
            We provide amazing and professional <br />
            Graphics Assests for <br/>your projexts such as social <br />
            media post designs, Logo designs, business
            <br /> card designs, poster designs,<br/> youtubee and blogs thumbnail
            designs, product klabel designs
            <br />
            and many more categories as per your requirements.{" "}
          </p>
        </div>
      </div>
    </sectioning>
  );
}

export default Header;
