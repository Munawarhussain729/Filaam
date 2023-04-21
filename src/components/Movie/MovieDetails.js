import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Container, Row, Col, Button } from "react-bootstrap";
import JohnImage from "../../assets/JohnWick.jpeg";
import "./MovieDetail.css";
import Rating from "./StarRating";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import TrailerTestimonial from "./TrailerTestimonial";
import StarCaseTestimonial from "./StarCastTestimonia";
import RecommendedTestimonial from "./Recommended";

const MovieDetails = () => {
  const [selected, setSelected] = useState(false);
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg={3} md={3}>
            <img
              className="movie_thumbnail"
              src={JohnImage}
              alt="Movie thumbnail not found"
            />
          </Col>
          <Col>
            <div className="movie_title">
              <h1>John Wick: Chapter 4</h1>
              <Rating stars={3.5} />
            </div>
            <div className="movie_cam">
              <Button className="cam_button">CAM</Button>
              <p className="grey_text">
                <span>
                  <FaStar style={{ marginTop: "-5px", paddingTop: "0px" }} />
                </span>{" "}
                8.40
              </p>
              <p className="grey_text">169 min</p>
            </div>
            <p className="grey_text">
              John Wick uncovers a path to defeating The High Table. But before
              he can earn his freedom, Wick must face off against a new enemy
              with powerful alliances across the globe and forces that turn old
              friends into foes.
            </p>
            <Container>
              <Row className="grey_text">
                <Col lg={2} md={2}>
                  Country
                </Col>
                <Col>United State</Col>
              </Row>
              <Row className="grey_text">
                <Col lg={2} md={2}>
                  genre:
                </Col>
                <Col>Thriller, Action, Crime</Col>
              </Row>
              <Row className="grey_text">
                <Col lg={2} md={2}>
                  release:
                </Col>
                <Col>2023-03-24</Col>
              </Row>
              <Row className="grey_text">
                <Col lg={2} md={2}>
                  director:
                </Col>
                <Col>Chad Stahelski</Col>
              </Row>
              <Row className="grey_text">
                <Col lg={2} md={2}>
                  production:
                </Col>
                <Col>
                  Lionsgate. Summit Entertainment. 87Eleven Entertainment
                </Col>
              </Row>
              <Row className="grey_text">
                <Col lg={2} md={2}>
                  Cast
                </Col>
                <Col>Laurence Fishburne, Keanu Reeves. George Georgiou</Col>
              </Row>
              <Row className="grey_text">
                <Col lg={2} md={2}>
                  Tags
                </Col>
                <Col>
                  watch john wick chapter 4 free watch john wick chapter 4 hd,
                  john wick chapter 4 online, where to watch john wick: chapter
                  4, john wick: chapter 4 free online. chapter, john wick
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
        <Container>
          <div className="video-responsive">
            <iframe
              width="853"
              height="480"
              src={`https://www.youtube.com/embed/qEVUtrk8_B4`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
          <div
            onClick={() => setSelected(!selected)}
            className="movie_detail_heart"
          >
            {selected ? (
              <AiFillHeart size={40} color="white" />
            ) : (
              <AiOutlineHeart color="white" size={40} />
            )}
          </div>
        </Container>
        <div className="movie_bottom_title">
          <h2 style={{ color: "white" }}>John Wick: Chapter 4</h2>
          <p className="grey_text">
            2023 | Action, Thriller, Crime | 2hr 49mins
          </p>
        </div>
        <div className="story_line">
          <h3>Story Line</h3>
          <p className="grey_text">
            With the price on his head ever increasing, John Wick uncovers a
            path to defeating The High Table. But before he can earn his
            freedom, Wick must face off against a new enemy with powerful
            alliance across the globe and forces that turn old friends into
            foes.
          </p>
        </div>
        <div className="story_line">
          <h3>Trailer </h3>
          <TrailerTestimonial />
        </div>
        <div className="story_line">
          <h3>Star Cast </h3>
          <StarCaseTestimonial />
        </div>
        <div className="recommeded">
          <h3>Recommeded </h3>
          <RecommendedTestimonial />
        </div>
      </Container>
    </>
  );
};

export default MovieDetails;
