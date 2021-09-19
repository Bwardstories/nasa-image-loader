import React, { useState } from "react";
import "./ImageCard.css";

const ImageCard = props => {
  const { hdurl, date, explanation, title, thumbnail_url, media_type } = props;

  const [liked, setLiked] = useState(false);
  return (
    <div className="card">
      {media_type === "video" ? (
        <img className="space-img" src={thumbnail_url} alt={title} />
      ) : (
        <img className="space-img" src={hdurl} alt={title} />
      )}

      <p className="title">{title}</p>
      <p className="date">{date}</p>
      <p className="explanation">{explanation}</p>
      <div className="like-container">
        {liked ? (
          <button className="like-button" onClick={() => setLiked(false)}>
            Unlike
          </button>
        ) : (
          <button className="like-button" onClick={() => setLiked(true)}>
            Like
          </button>
        )}
        <p className="like-counter">Likes : {liked ? 1 : 0}</p>
      </div>
    </div>
  );
};

export default ImageCard;
