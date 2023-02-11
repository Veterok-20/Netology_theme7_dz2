import React from "react";


export default function Video(props) {
    const {item} = props;    
    return (
      <div className="item item-video">
        <iframe src={item.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        <p className="views">Просмотров: {item.views}</p>
      </div>
    )
  }; 