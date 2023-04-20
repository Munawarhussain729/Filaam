import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Keanu_Reeves from "../../assets/Keanu_Reeves.jpeg";
import "./ActorDetail.css";
import MovieCast from "./MovieCast";

const ActorDetails = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="actor_detail">
              <img
                className="actor_image"
                src={Keanu_Reeves}
                alt="Actor Detail not found"
              />
              <div style={{ marginLeft: "20px" }}>
                <h4>Keanu Reeves</h4>
                <h4>Age : 59</h4>
                <h4>Birth place: Beirut, Leabnon</h4>
              </div>
            </div>
          </Col>
          <Col className="actor_story">
            <p>
              Keanu Charles Reeves is a Canadian actor. Reeves is known for his
              roles in Bill & Ted's Excellent Adventure, Speed, Point Break, and
              The Matrix franchise as Neo. He has collaborated with major
              directors such as Stephen Frears (in the 1988 period drama
              Dangerous Liaisons); Gus Van Sant (in the 1991 independent film My
              Own Private Idaho); and Bernardo Bertolucci (in the 1993 fill)
            </p>
          </Col>
        </Row>
        <MovieCast />
      </Container>
    </div>
  );
};

export default ActorDetails;
