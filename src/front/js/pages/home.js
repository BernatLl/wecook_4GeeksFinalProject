import HeaderImg from "../../img/HeaderImg.jpg";
import "../../styles/home.css";
import Carousel from "react-bootstrap/Carousel";
import Antho from "../../img/AnthoDain.jpg";
import Gordom from "../../img/GordomRamsay.jpg";
import Jiro from "../../img/JirosDream.png";
import React, { useContext } from "react";
import { Context } from "../store/appContext";

import { MeetTheCrew } from "../component/meetTheCrew.js";
import { FormContacto } from "../component/formContacto.js";
import { ListadoCursos } from "../component/listadoCursos.js";

export const Home = () => {
  return (
    <>
      <div className="Home row">
        <img id="BackHead" className="mt-m col-" src={HeaderImg}></img>
        <div className="mt-m col" id="Bourdain">
          <span>If I'm an advocate for anything,</span>
          <span>it's to move. As far as you can, </span>
          <span>as much as you can. Across the</span>
          <span>ocean, or simply across the river.</span>
          <span>Walk in someone else's shoes or</span>
          <span>at least eat their food. It's a plus</span>
          <span>for everybody.</span>
          <div></div>

          <span className="Anthony">-Anthony Bourdain.</span>
        </div>
        <div className="carousel row">
          <Carousel className="TopFive">
            <Carousel.Item>
              <img className="d-block w-100" src={Antho} alt="First slide" />
              <Carousel.Caption>
                <span>First slide label</span>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Gordom} alt="Second slide" />

              <Carousel.Caption>
                <span>Second slide label</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                id="foto"
                className="d-block w-100"
                src={Jiro}
                alt="Third slide"
              />

              <Carousel.Caption>
                <span>Third slide label</span>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>{" "}
        <div className="stuprof ">
          <div className="Students row">
            <img
              id="foto"
              className="StuPic"
              src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2020%2F03%2FOnline-Cooking-Classes.jpg"
            ></img>

            <div className="StudentsText">
              {" "}
              <h5 className="StuTittle">Students</h5>
              <p>
                Welcome to "We Cook", with us you will be able to access to a
                digital library with hundreds of professional cooks around the
                world, do you want to learn how to cut like a professional Click
                here, Do you want to learn about Venezuelan food, New Zeleand,
                Canada, Scotland, etc? We give the chance to professional or no
                professional chefs around the world that want to share for a
                modest price their recipe or skill with the rest of the
                world!!!!{" "}
              </p>
            </div>
          </div>

          <div className="ProfessorSide row">
            <img
              id="foto"
              className="ProfePic"
              src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2020%2F03%2FOnline-Cooking-Classes.jpg"
            ></img>

            <div className="ProfeText">
              {" "}
              <h5 className="ProfTittle">Professor</h5>
              <p>
                Welcome to "We Cook", with us you will be able to access to a
                digital library with hundreds of professional cooks around the
                world, do you want to learn how to cut like a professional Click
                here, Do you want to learn about Venezuelan food, New Zeleand,
                Canada, Scotland, etc? We give the chance to professional or no
                professional chefs around the world that want to share for a
                modest price their recipe or skill with the rest of the
                world!!!!{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <ListadoCursos />
        <MeetTheCrew />
        <FormContacto />
      </div>
    </>
  );
};
