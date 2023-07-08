import React from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../Apis/config";
import { useEffect, useState } from "react";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Header from "./../components/Header";

export default function MoviesDetails() {
  const [singlemovie, setsinglemovie] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axiosInstance
      .get(`/movie/${id}`)
      .then(res => setsinglemovie(res.data))
      .catch(error => console.log(error));
  }, []);
  console.log("singlemovie", singlemovie);

  // const bgOverlayStyle = {
  //   content: "",
  //   position: "absolute",
  //   top: 0,
  //   left: 0,
  //   width: "100%",
  //   height: "100%",
  //   backgroundColor: "rgba(0, 0, 0, 0.5)", // Add a semi-transparent black background
  //   filter: "sepia(0.3)", // Add sepia filter to the background image
  // };
  return (
    <div
      className=" bg-danger moviedetails "
      style={
        {
          // backgroundImage: `url(https://image.tmdb.org/t/p/w500/${singlemovie.backdrop_path})`,
          // filter: "sepia(0.9)",
        }
      }
    >
      {/* <div style={bgOverlayStyle}></div> */}
      <div className="filter"></div>
      <p>id == {id}</p>
      <Row className="">
        <Col>
          <Card className="w-25 thecard bg-primary">
            <Card.Img
              // className="w-50"
              src={`https://image.tmdb.org/t/p/w500/${singlemovie.backdrop_path}`}
            ></Card.Img>

            <Card.Body>
              <Card.Title> Title :: {singlemovie.original_title} </Card.Title>
              <Card.Title>
                {" "}
                original_language :: {singlemovie.original_language}{" "}
              </Card.Title>
              <Card.Text>
                overview::
                {singlemovie.overview}
              </Card.Text>
              <Card.Text>
                release_date::
                {singlemovie.release_date}
              </Card.Text>
              <Card.Text>
                runtime::
                {singlemovie.runtime}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
