import { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./SectionClients.module.css";

interface SectionClientsProps {}

const SectionClients: FC<SectionClientsProps> = (props) => (
  <div className={styles.SectionClients} data-testid="SectionClients">
    <Container>
      <Row>
        <Col>
          <div className={`text-center text-white `}>
            <h1>
              Esta es la forma en que nuestros clientes usan{" "}
              <span className="TextMulticolor"> Viva</span> para{" "}
              <span className="TextMulticolor"> impulsar sus empresas</span>:
            </h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className={`${styles.ClientContainer}  text-center`}>
            <img
              className="mt-30"
              alt=""
              width="120px"
              height="120px"
              src="https://renderer-v2.vercel.app/_next/image?url=https%3A%2F%2Fapi.typedream.com%2Fv0%2Fdocument%2Fpublic%2Fe73f8b60-0087-4cc4-8e5b-a1ad4bbb19b2%2F2HxFCFsyoxDO1lQ2UWEZCfRxtYr_David.png%3Fbucket%3Ddocument&w=256&q=100"
            />
            <p className="mt-30">
              "Me he pasado los últimos cuatro años intentando coordinar equipos
              desde Ucrania hasta Zimbabue y Pakistán. Poder comunicarme
              directamente con los ingenieros de Viva cambia mi forma de
              trabajar".
            </p>
            <p className="mt-30">- David Levesque, fundador de @Brite</p>
          </div>
        </Col>
        <Col>
          <div className={`${styles.ClientContainer}  text-center`}>
            <img
              className="mt-30"
              alt=""
              width="120px"
              height="120px"
              src="https://renderer-v2.vercel.app/_next/image?url=https%3A%2F%2Fapi.typedream.com%2Fv0%2Fdocument%2Fpublic%2Fe73f8b60-0087-4cc4-8e5b-a1ad4bbb19b2%2F2HuRODkr4qlw7wnDiSxGAVh6hSt_Ale.png%3Fbucket%3Ddocument&w=256&q=100"
            />
            <p className="mt-30">
              "Cuando empecé a tener reuniones con personas de otros países,
              hablaban tan rápido que no podía entender. Tener la posibilidad de
              ver las traducciones en tiempo real me ha ayudado enormemente con
              la comunicación!"
            </p>
            <p className="mt-30">
              - Alexandra Rodríguez, freelance de marketing de rendimiento y
              crecimiento
            </p>
          </div>
        </Col>
        <Col>
          <div className={`${styles.ClientContainer}  text-center`}>
            <img
              className="mt-30"
              alt=""
              width="120px"
              height="120px"
              src="https://renderer-v2.vercel.app/_next/image?url=https%3A%2F%2Fapi.typedream.com%2Fv0%2Fdocument%2Fpublic%2Fe73f8b60-0087-4cc4-8e5b-a1ad4bbb19b2%2F2HuRPTMTfeAz0G5kxb1YTidWjHa_Gustavo.png%3Fbucket%3Ddocument&w=256&q=100"
            />
            <p className="mt-30">
              "La conversión de voz a texto me pareció bastante precisa y la
              traducción muy comprensible. Se pueden mantener conversaciones
              fluidas". ﻿
            </p>
            <p className="mt-30">– Gustavo Moreno, CTO @Kiwi</p>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default SectionClients;
