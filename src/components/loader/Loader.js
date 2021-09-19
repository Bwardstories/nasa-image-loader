import React from "react";
import loaderGif from "../../assets/images/loading.gif";

const Loader = () => {
  return (
    <div className="loader">
      <img src={loaderGif} alt="loading gif" />
    </div>
  );
};

export default Loader;
