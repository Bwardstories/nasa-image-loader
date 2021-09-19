import React, { useState } from "react";
import "./DateSelection.css";
import Loader from "../loader/Loader";
import { motion } from "framer-motion";
import Backdrop from "../backdrop/Backdrop";

const DateSelection = props => {
  const {
    startDate,
    endDate,
    handleStartDate,
    handleEndDate,
    apiRequest,
    loading,
    close,
  } = props;

  // options for animations through framer-motion

  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 100,
        stiffness: 300,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
      transition: {
        duration: 2,
        damping: 100,
        stiffness: 300,
      },
    },
  };

  return (
    <Backdrop onClick={close}>
      <motion.div
        onClick={e => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="date-selection-wrapper">
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="start-date-wrapper">
              <p>1.) Pick your Start Date</p>
              <label htmlFor="startDate">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={startDate}
                onChange={handleStartDate}
              />
            </div>
            <div className="end-date-wrapper">
              <p>2.) Pick your End Date range (optional)</p>
              <label htmlFor="endDate">End Date</label>
              <input
                type="date"
                name="endDate"
                value={endDate}
                onChange={handleEndDate}
              />
            </div>
            <div className="button-wrapper">
              <p>3.) Submit your request for some amazing pictures!</p>
              <button
                onClick={() => {
                  apiRequest();
                  close();
                }}
                className="send-button">
                Send
              </button>
            </div>
          </>
        )}
      </motion.div>
    </Backdrop>
  );
};

export default DateSelection;
