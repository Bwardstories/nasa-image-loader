import React, { useState } from "react";
import "./DateSelection.css";
import Loader from "../loader/Loader";

const DateSelection = props => {
  const {
    startDate,
    endDate,
    handleStartDate,
    handleEndDate,
    apiRequest,
    loading,
  } = props;

  return (
    <div className="date-selection-wrapper">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="start-date-wrapper">
            <p>1.) Pick your Start Date range</p>
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
            <button onClick={apiRequest} className="send-button">
              Send
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default DateSelection;
