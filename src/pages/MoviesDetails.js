import React from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../Apis/config";
import { useEffect, useState } from "react";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function MoviesDetails() {
  const [singlemovie, setsinglemovie] = useState([]);
  const { id } = useParams();


  useEffect(() => {
    axiosInstance
      .get(`/movie/${id}`)
      .then(res =>

        setsinglemovie(res.data)
      )
      .catch(error => console.log(error));
  }, []);
  console.log("singlemovie", singlemovie)

  return (
    <div>
      MoviesDetails
      <p>id == {id}</p>
      <Row  className="mx-5 w-75 my-5 p-5">
          <Col>
            <Card>
              <Card.Img   src={`https://image.tmdb.org/t/p/w500/${singlemovie.backdrop_path}`}></Card.Img>

              <Card.Body>
                <Card.Title> Title :: {singlemovie.original_title} </Card.Title>
                <Card.Title> original_language :: {singlemovie.original_language} </Card.Title>
                <Card.Text>overview::
                {singlemovie.overview} 
                </Card.Text>
                <Card.Text>release_date::
                {singlemovie.release_date} 
                </Card.Text>
                <Card.Text>runtime::
                {singlemovie.runtime} 
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
     
      </Row>
    </div>
  );
}

