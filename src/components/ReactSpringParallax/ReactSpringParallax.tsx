import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { FC } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./ReactSpringParallax.module.css";
import SectionCard from "./SectionCard/SectionCard";
import SectionClients from "./SectionClients/SectionClients";
import SectionOne from "./SectionOne/SectionOne";
import SectionTwo from "./SectionTwo/SectionTwo";

interface ReactSpringParallaxProps {}

const ReactSpringParallax: FC<ReactSpringParallaxProps> = () => {
  const alignCenter = { display: "flex", alignItems: "center" };
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Parallax
        pages={8}
        style={{
          background: "#131415",
        }}
      >
        <ParallaxLayer
          offset={0}
          speed={1}
          style={{
            ...alignCenter,
            justifyContent: "center",
            background: "#131415",
            maxHeight: "90vh",
          }}
        >
          <Container>
            <Row>
              <Col md="6">
                <SectionOne
                  buttonText="Prueba Viva en Google Meets - es gratis"
                  textAlign="text-left"
                ></SectionOne>
              </Col>
              <Col md="6">
                <img
                  alt=""
                  src="https://renderer-v2.vercel.app/_next/image?url=https%3A%2F%2Fapi.typedream.com%2Fv0%2Fdocument%2Fpublic%2Fe73f8b60-0087-4cc4-8e5b-a1ad4bbb19b2%2F2IauYuwWVZGxxDvmeYyOR3YixMY_Hero_graphic_Website.png%3Fbucket%3Ddocument&w=1920&q=100"
                  style={{
                    width: "100%",
                  }}
                />
              </Col>
            </Row>
          </Container>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          style={{
            ...alignCenter,
            justifyContent: "center",
            background: "#2c2c30",
          }}
        >
          <SectionTwo
            animateText="animate__pulse"
            buttonText="Prueba Viva"
            buttonUrl="https://app.vivatranslate.com/welcome"
            title="Viva Translate para profesionales."
            subTitle="La forma moderna de comunicarse, desde subtítulos hasta los resúmenes de tus reuniones."
          ></SectionTwo>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 2, end: 5 }}
          className={styles.ParalexFlexStart}
        >
          <SectionTwo
            animateText="animate__bounce"
            title="¿Cómo funciona?"
            subTitle="Viva Translate te permite traducir las llamadas de Google Meets en tiempo real.
            Todas las notas de tus reuniones se guardan automáticamente en un solo lugar."
          ></SectionTwo>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={1} className={styles.ParalexFlexEnd}>
          <SectionCard
            number="1"
            title="Añade Viva a Chrome de forma gratuita"
            text="Ancla la extensión Viva para acceder fácilmente a todas nuestras funciones. "
            buttonText="Añade Viva"
            buttonUrl="https://app.vivatranslate.com/welcome"
            imgUrl="https://renderer-v2.vercel.app/_next/image?url=https%3A%2F%2Fapi.typedream.com%2Fv0%2Fdocument%2Fpublic%2Fe73f8b60-0087-4cc4-8e5b-a1ad4bbb19b2%2F2Hi6Qqe6jvbCSeccbD4nxN1Di1d_Chrome_Viva.png%3Fbucket%3Ddocument&amp;w=1920&amp;q=100"
          ></SectionCard>
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={1} className={styles.ParalexFlexEnd}>
          <SectionCard
            number="2"
            title="Únete a una llamada de Google Meets"
            text="Inicia una reunión instantánea o haz una llamada con un colega para probar Viva."
            imgUrl="https://renderer-v2.vercel.app/_next/image?url=https%3A%2F%2Fapi.typedream.com%2Fv0%2Fdocument%2Fpublic%2Fe73f8b60-0087-4cc4-8e5b-a1ad4bbb19b2%2F2Hi6c8X7esrpsCMnxqkBhm2gX0i_Google_meets.png%3Fbucket%3Ddocument&w=1920&q=100"
          ></SectionCard>
        </ParallaxLayer>

        <ParallaxLayer offset={5} speed={1} className={styles.ParalexFlexEnd}>
          <SectionCard
            number="3"
            title="Experimenta la magia"
            text="Siéntete seguro en reuniones multilingües con transcripciones y traducciones en tiempo real."
            imgUrl="https://renderer-v2.vercel.app/_next/image?url=https%3A%2F%2Fapi.typedream.com%2Fv0%2Fdocument%2Fpublic%2Fe73f8b60-0087-4cc4-8e5b-a1ad4bbb19b2%2F2Hi6gANjm8MAslQ3yhwKxwULvVz_Meeting_Transcript_UI.png%3Fbucket%3Ddocument&w=828&q=100"
          ></SectionCard>
        </ParallaxLayer>
        <ParallaxLayer
          offset={6}
          speed={1}
          style={{
            ...alignCenter,
            justifyContent: "center",
            background: "#131415",
          }}
        >
          <SectionClients></SectionClients>
        </ParallaxLayer>
        <ParallaxLayer
          offset={7}
          style={{
            ...alignCenter,
            justifyContent: "center",
            background: "#2c2c30",
            maxHeight: "95vh",
          }}
        >
          <SectionTwo
            animateText="animate__pulse"
            buttonText="Quiero intentarlo"
            buttonUrl="https://app.vivatranslate.com/welcome"
            title="Observa cómo Viva puede trabajar para ti."
            subTitle="Ponte en contacto con nosotros para saber cómo nuestra tecnología de traducción y transcripción puede aumentar la eficacia de tu empresa."
          ></SectionTwo>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default ReactSpringParallax;
