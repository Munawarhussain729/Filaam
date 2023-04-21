import { Card } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

import "./Home.css";
const Movies = ({ image, title }) => {
  const navigate = useNavigate();
  return (
    <div>
      <Card className="movieCard" onClick={() => navigate("/movieDetail")}>
        <img src={image} alt="Not Found" />
        <p>{title}</p>
      </Card>
    </div>
  );
};

export default Movies;
