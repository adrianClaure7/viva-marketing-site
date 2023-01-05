import React, { FC } from "react";
import { Button } from "react-bootstrap";
import styles from "./SectionCard.module.css";

interface SectionCardProps {
  buttonText?: string;
  buttonUrl?: string;
  imgUrl?: string;
  title: string;
  text?: string;
  number?: string;
}

const SectionCard: FC<SectionCardProps> = (props) => {
  var goToPage = (url?: string) => {
    window.open(url, "_blank");
  };
  return (
    <div className={styles.SectionCard}>
      <h1 className={styles.NumberClass}>{props.number}</h1>
      <div className={`${styles.CardContainer} mt-30`}>
        <img width="50%" alt={props.title} src={props.imgUrl} />
        <h2 className="mt-30">{props.title}</h2>
        <p className="text-secondary mt-15">{props.text}</p>
        {props.buttonText ? (
          <Button
            onClick={() => goToPage(props.buttonUrl)}
            className={`bgMulticolor mt-30`}
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

export default SectionCard;
