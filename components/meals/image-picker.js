"use client";
import { useRef } from "react";
import classes from "./image-picker.module.css";

const ImagePicker = ({ label, name }) => {
  const imageRef = useRef();
  const handleImagePick = () => {
    imageRef.current.click();
  };
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.control}>
        <input
          className={classes.input}
          id={name}
          type="file"
          name={name}
          accept="image/png, image/jpeg"
          ref={imageRef}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handleImagePick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
