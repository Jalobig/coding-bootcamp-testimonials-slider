import React from "react";
import classes from "./Main.module.scss";
import ImgTanya from "../../images/image-tanya.jpg";
import { Carousel } from "react-responsive-carousel";


const Main = () => {
  return (
    <main className={classes.main}>
      <Carousel>
        <div>
            <div>
                <p>“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”</p>
                <div>
                    <h2>Tanya Sinclair</h2>
                    <p>UX Engineer</p>
                </div>
            </div>
            <img src={ImgTanya} alt="Tanya Sinclair"/>
        </div>
        <div>
            <div>
                <p>“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”</p>
                <div>
                    <h2>Tanya Sinclair</h2>
                    <p>UX Engineer</p>
                </div>
            </div>
            <img src={ImgTanya} alt="Tanya Sinclair"/>
        </div>
        
      </Carousel>
    </main>
  );
};

export default Main;
