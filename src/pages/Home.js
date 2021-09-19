import React, { useState } from "react";
import ImageCard from "../components/ImageCard/ImageCard";
import DateSelection from "../components/dateSelection/DateSelection";
import "./Home.css";
const API_KEY = process.env.REACT_APP_NASA_API_KEY;

const Home = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageData, setImageData] = useState();
  const [imageArrayData, setImageArrayData] = useState([]);

  const apiRequest = async (req, res) => {
    if (startDate && endDate) {
      setLoading(true);
      res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=${startDate}&end_date=${endDate}&thumbs=true`
      );
      let data = await res.json();
      setLoading(false);
      setImageArrayData(data);
    }

    res = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${startDate}`
    );
    let data = await res.json();
    setImageData(data);
  };

  const handleStartDate = e => {
    setStartDate(e.target.value);
  };
  const handleEndDate = e => {
    setEndDate(e.target.value);
  };
  console.log(imageArrayData);

  return (
    <div className="main-wrapper">
      <DateSelection
        loading={loading}
        startDate={startDate}
        handleStartDate={handleStartDate}
        endDate={endDate}
        handleEndDate={handleEndDate}
        apiRequest={apiRequest}
      />
      <div className="image-card-container">
        {imageArrayData &&
          imageArrayData.map(imageContent => (
            <ImageCard
              date={imageContent.date}
              explanation={imageContent.explanation}
              hdurl={imageContent.hdurl}
              title={imageContent.title}
              thumbnail_url={
                imageContent.thumbnail_url ? imageContent.thumbnail_url : ""
              }
              url={imageContent.url}
              media_type={imageContent.media_type}
            />
          ))}
        {imageData && (
          <ImageCard
            date={imageData.date}
            explanation={imageData.explanation}
            hdurl={imageData.hdurl}
            title={imageData.title}
            thumbnail_url={
              imageData.thumbnail_url ? imageData.thumbnail_url : ""
            }
            url={imageData.url}
            media_type={imageData.media_type}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
