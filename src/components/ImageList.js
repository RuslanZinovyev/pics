import React from "react";

const ImageList = (props) => {
  console.log(props.images[0]);

  const images = props.images.map(({ description, id, urls }) => {
    return <img alt={description} key={id} src={urls.regular} width="1130px" />;
  });

  return <div>{images}</div>;
};

export default ImageList;
