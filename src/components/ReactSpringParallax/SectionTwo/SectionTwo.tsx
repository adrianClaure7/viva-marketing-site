import React, { FC } from "react";
import { Button } from "react-bootstrap";
import styles from "./SectionTwo.module.css";

interface SectionTwoProps {
  buttonText?: string;
  buttonUrl?: string;
  subTitle: string;
  title: string;
  imgClass?: string;
}

const SectionTwo: FC<SectionTwoProps> = (props) => {
  var goToPage = (url?: string) => {
    window.open(url, "_blank");
  };
  return (
    <div className={styles.SectionTwo} data-testid="SectionTwo">
      <div className={`text-center text-white `}>
        <h1 className="fs-11">{props.title}</h1>
        <p className="mt-15">{props.subTitle}</p>
        {props.buttonText ? (
          <Button
            onClick={() => goToPage(props.buttonUrl)}
            className={`bgMulticolor`}
          >
            {props.buttonText}
          </Button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default SectionTwo;
