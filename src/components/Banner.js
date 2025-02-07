import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImage from "../assets/img/myImage.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200 - Math.random() * 50);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Full Stack Developer", "Certified MuleSoft Developer" ];
  const period = 300;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => { clearInterval(ticker) };
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(200);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  const handleResumeClick = () => {
    window.open(
      "https://drive.google.com/file/d/1MNpmAFaTyplWQCxqXLBl9gm8F0SmSkGc/view?usp=drive_link", 
      "_blank", 
      "noopener,noreferrer"
    );
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Innovative. Passionate. Driven.</span>
                  <h1>
                    Hi, I'm Chinmay Joshi, a{" "}
                    <span className="txt-rotate" dataPeriod="300" data-rotate='[ "Full Stack Developer", "Certified MuleSoft Developer" ]'>
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    Always striving to be my best, I develop high-impact full-stack solutions and deliver cutting-edge MuleSoft integrations that fuel digital transformation.
                  </p>
                  <button onClick={handleResumeClick}>
                    View My Resume <ArrowRightCircle size={25} />
                  </button>
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={myImage} alt="Header Img" />
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}