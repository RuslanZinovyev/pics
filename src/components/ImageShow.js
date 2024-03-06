function ImageShow({ image }) {
  return (
    <div>
      <img src={image.urls.regular} />
    </div>
  );
}

export default ImageShow;
