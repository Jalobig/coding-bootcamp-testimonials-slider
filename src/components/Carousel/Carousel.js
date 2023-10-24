import React, { useCallback, useEffect, useState } from "react";
import classes from "./Carousel.module.scss";
import IconNext from "../../images/icon-next.svg";
import IconPrev from "../../images/icon-prev.svg";
import ImgJohn from "../../images/image-john.jpg";
import ImgTanya from "../../images/image-tanya.jpg";
import PatternBG from "../../images/pattern-bg.svg";
import Quotes from "../../images/pattern-quotes.svg";
const TESTIMONIALS = [
  {
    img: ImgTanya,
    text: "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
    name: "Tanya Sinclair",
    job: "UX Engineer",
  },
  {
    img: ImgJohn,
    text: "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
    name: "John Tarkpor",
    job: "Junior Front-end Developer",
  },
];
const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [touchBeginX, setTouchBeginX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const length = TESTIMONIALS.length;
  const prevHandler = useCallback(() => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  }, [index, length]);
  const nextHandler = useCallback(() => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  }, [index, length]);
  useEffect(() => {
    document.addEventListener("keyup", (e) => {
      const keyName = e.key;
      if (keyName === "ArrowLeft") {
        prevHandler();
      } else if (keyName === "ArrowRight") {
        nextHandler();
      }
    });
    function checkDirection() {
      if (touchEndX < touchBeginX) nextHandler();
      if (touchEndX > touchBeginX) prevHandler();
    }

    document.addEventListener("touchstart", (e) => {
      setTouchBeginX(e.changedTouches[0].screenX);
    });

    document.addEventListener("touchend", (e) => {
      setTouchEndX(e.changedTouches[0].screenX);
      checkDirection();
    });
  }, [prevHandler, nextHandler, touchBeginX, touchEndX]);

  return (
    <div className={classes.carousel}>
      <div className={classes.info}>
        <img src={Quotes} alt="Quotes" className={classes.info__quotes} />
        <p className={classes.info__testimonial}>{TESTIMONIALS[index].text}</p>
        <div className={classes.info__group}>
          <h2 className={classes.info__name}>{TESTIMONIALS[index].name}</h2>
          <p className={classes.info__job}>{TESTIMONIALS[index].job}</p>
        </div>
      </div>
      <div className={classes["img-group"]}>
        <img
          src={PatternBG}
          alt="background pattern"
          className={classes["img-group__bg"]}
        />
        <img
          src={TESTIMONIALS[index].img}
          alt={TESTIMONIALS[index].name}
          className={classes["img-group__img"]}
        />
        <div className={classes.carousel__nav}>
          <button
            onClick={prevHandler}
            className={classes["carousel__nav--prev"]}
          >
            <img src={IconPrev} alt="Icon caret left" />
          </button>
          <button
            onClick={nextHandler}
            className={classes["carousel__nav--next"]}
          >
            <img src={IconNext} alt="Icon caret right" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
