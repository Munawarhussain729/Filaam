import React, { useEffect, useState } from "react";
import "./Home.css";
import MainSlider from "./MainSlider";
import Movies from "./Movies";

import GodFather1 from "../../assets/GodFather1.jpg";
import GodFather2 from "../../assets/GodFather2.jpeg";
import GodFather3 from "../../assets/GOdFather3.jpeg";
import Inception from "../../assets/Inception.jpeg";
import PublicEnemies from "../../assets/PublicEnemies.jpeg";

import { RingLoader } from "react-spinners";

const Home = () => {
  const movies = [
    {
      Movieimage: GodFather1,
      title: "GOd Father 1",
    },
    {
      Movieimage: GodFather2,
      title: "God Father 2",
    },
    {
      Movieimage: GodFather3,
      title: "GOd Father 3",
    },
    {
      Movieimage: Inception,
      title: "Inception",
    },
    {
      Movieimage: PublicEnemies,
      title: "Public Enemies",
    },
    {
      Movieimage: GodFather1,
      title: "GOd Father 1",
    },
    {
      Movieimage: GodFather2,
      title: "God Father 2",
    },
    {
      Movieimage: GodFather3,
      title: "GOd Father 3",
    },
    {
      Movieimage: Inception,
      title: "Inception",
    },
    {
      Movieimage: PublicEnemies,
      title: "Public Enemies",
    },
  ];
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "300px",
          }}
        >
          <RingLoader color="white" size={200} />
        </div>
      ) : (
        <div style={{ padding: "20px" }}>
          <MainSlider />
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {movies.map((item, index) => {
              return (
                <Movies
                  image={item.Movieimage}
                  title={item.title}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
