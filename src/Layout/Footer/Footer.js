import React from "react";
import classes from "./Footer.module.scss";
import PatternCurves from "../../images/pattern-curve.svg";
import useMediaQuery from "../../hooks/useMediaQuery";

const Footer = () => {
  const media = useMediaQuery("only screen and (max-width:425px)");
  return (
    <footer className={classes.footer}>
      {!media && <div className={classes.attribution}>
        Challenge by{" "}
        <a
          rel="noreferrer"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a rel="noreferrer" target="_blank" href="https://github.com/Jalobig">
          Jason Alexis
        </a>
        .
      </div>}
      <img
        src={PatternCurves}
        alt="Pattern Curves"
        className={classes["bg-curve"]}
      />
    </footer>
  );
};

export default Footer;
