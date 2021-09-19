import React, { useState } from "react";
import ImageCard from "../components/ImageCard/ImageCard";
import DateSelection from "../components/dateSelection/DateSelection";
import "./Home.css";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "../components/loader/Loader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//  customId for toastify
const customId = "custom-id-yes";

//  api key for nasa api
const API_KEY = process.env.REACT_APP_NASA_API_KEY;

const Home = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [loading, setLoading] = useState(false);
  //   if there is one image, it is stored in this state
  const [imageData, setImageData] = useState();
  //   if there is an array of multiple images, they will be stored in this state
  const [imageArrayData, setImageArrayData] = useState([]);
  const [modalOpen, setModelOpen] = useState(false);
  const close = () => setModelOpen(false);
  const open = () => setModelOpen(true);

  //   function for toast functionality
  const notify = () => {
    toast.error("Sorry, you can't pull images from the future", {
      toastId: customId,
      position: toast.POSITION.TOP_CENTER,
    });
  };

  //  gets epoch eunix time for start and end date to compare with current epoch eunix time to prevent selection of a future date for image search

  let enteredStartDate = new Date(startDate).getTime();
  let enteredEndDate = new Date(endDate).getTime();
  let todayDate = new Date();
  if (enteredStartDate > todayDate || enteredEndDate > todayDate) {
    setStartDate("");
    setEndDate("");
    return notify();
  }

  //    api request for nasa api

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

  return (
    <div className="main-wrapper">
      <div className="intro-wrapper">
        <h1>Welcome to Spacetagram</h1>
        <h3>
          where you can bring all of the images of space right to your home
        </h3>
        <h5 className="tooltips">
          How It Works
          <span className="tooltiptext">
            This App uses an API that stores 1 image every day. Click on the
            button below to either enter 1 specific date, or a range of dates.
            You cannot pull images from the future, we are good, but not that
            good
          </span>
        </h5>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="open-button"
          onClick={modalOpen ? close : open}>
          Enter Dates
        </motion.button>
      </div>
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {modalOpen && (
          <DateSelection
            loading={loading}
            startDate={startDate}
            handleStartDate={handleStartDate}
            endDate={endDate}
            handleEndDate={handleEndDate}
            apiRequest={apiRequest}
            close={close}
          />
        )}
      </AnimatePresence>

      {loading ? (
        <Loader />
      ) : (
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
      )}
    </div>
  );
};

export default Home;
