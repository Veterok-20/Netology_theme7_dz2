import React from "react";

export default function Article(props) {
    const {item} = props;   
    return (
      <div className="item item-article">
        <h3><a href="#">{item.title}</a></h3>
        <p className="views">Прочтений: {item.views}</p>
      </div>
    )
  };