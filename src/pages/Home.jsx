import React from "react";
import config from '../assets/configs/homePage.json';
import homeImg from '../assets/images/origami_paper.jpg';
import AppH1 from "../components/atoms/AppH1";
import AppParagraph from "../components/atoms/AppParagraph";
import "./home.css";

const Home = () => 
  <div className="home-container">
    <AppH1 text={config.header} />
    <img className='home-page-img' src={homeImg} alt='origami paper' />
    <AppParagraph text={config.content} />
  </div>

export default Home;
