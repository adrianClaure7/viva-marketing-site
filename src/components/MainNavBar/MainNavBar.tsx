import React, { FC } from "react";
import { Navbar, Container, Col, Row } from "react-bootstrap";
import styles from "./MainNavBar.module.css";

interface MainNavBarProps {}

const MainNavBar: FC<MainNavBarProps> = () => (
  <div className={styles.MainNavBar} data-testid="MainNavBar">
    <Navbar>
      <Container>
        <Row className="w-100">
          <Col md="12" className="text-center">
            <Navbar.Brand href="#home" className="text-white">
              <img
                alt=""
                src="https://renderer-v2.vercel.app/_next/image?url=https%3A%2F%2Fapi.typedream.com%2Fv0%2Fdocument%2Fpublic%2Fe73f8b60-0087-4cc4-8e5b-a1ad4bbb19b2%2F2Gu0joYDzG12OEeiZcmbxyIjkdU_Viva_Logo_Button_2.png%3Fbucket%3Ddocument&w=384&q=75"
                width="30"
                height="30"
                className="align-top"
              />{" "}
              Viva
            </Navbar.Brand>
          </Col>
        </Row>
      </Container>
    </Navbar>
  </div>
);

export default MainNavBar;
