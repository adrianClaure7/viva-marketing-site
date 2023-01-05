import React, { FC } from "react";
import { Button } from "react-bootstrap";
import styles from "./SectionOne.module.css";

interface SectionOneProps {
  buttonText: string;
  textAlign: string;
  imgClass?: string;
}

const SectionOne: FC<SectionOneProps> = (props) => {
  var goToPage = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <div className={styles.SectionOne} data-testid="SectionOne">
      <div className={`${props.textAlign} text-white `}>
        <h1 className="fs-11">
          Traducción de videollamadas{" "}
          <span className={styles.TextMulticolor}>en tiempo real.</span>{" "}
        </h1>
        <p>
          Viva Translate ayuda a personas de todo el mundo a comunicarse en
          inglés, español y portugués en tiempo real. Ahorra tiempo en notas de
          reuniones y traducciones con Viva.
        </p>
        <Button
          className={`bgMulticolor`}
          onClick={() => goToPage("https://app.vivatranslate.com/welcome")}
        >
          {props.buttonText}
        </Button>
      </div>
    </div>
  );
};

export default SectionOne;
