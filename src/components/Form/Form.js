import React, { useState } from "react";
import Input from "./Input";
import styles from "./Form.module.scss";
import { useSelector, useDispatch } from "react-redux";
import * as listActions from "../../store/list/actions";

const Form = () => {
  const mainList = useSelector((state) => state.mainList);
  const dispatch = useDispatch();
  const [newMeme, setNewMeme] = useState({
    id: mainList.length,
    upvote: 0,
    downvote: 0,
    favorite: false,
    title: "",
    img: "",
    source: "web",
  });
  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    if (e.target.type === "file") {
      handleInputFileValidation(e);
    } else {
      setNewMeme({ ...newMeme, [e.target.name]: e.target.value });
    }
  };

  const handleInputFileValidation = (e) => {
    let newErrors = {};
    const allowedExtension = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

    if (!allowedExtension.test(e.target.value)) {
      e.target.value = "";

      // after cancel file, clear newMeme img property to show empty string during  AddBtn Validation
      newMeme.img = "";

      newErrors.img_error = "Invalid file type";
      setErrors(newErrors);
      return newErrors;
    } else {
      setNewMeme({ ...newMeme, [e.target.name]: e.target.files[0] });
      // after validate type of file clear img_error in state to turn off error
      setErrors({ ...errors, img_error: "" });
    }
  };

  const handleValidation = () => {
    let newErrors = {};

    if (newMeme.title === "") {
      newErrors.title_error = "Put title to add new Meme";
    }

    if (newMeme.title.length > 0 && newMeme.title.length <= 3) {
      newErrors.title_error = "Title has to be at least 4 characters";
    }

    if (newMeme.img === "") {
      newErrors.img_error = "Image Path can not to be empty";
    }
    if (newMeme.source === "local" && newMeme.img === "") {
      newErrors.img_error = "Please select file to upload";
    }

    setErrors(newErrors);

    return newErrors;
  };

  const handleAddButton = (e) => {
    e.preventDefault();
    handleValidation();
    console.log(newMeme.img);
    !(Object.keys(handleValidation()).length >= 1) &&
      dispatch(listActions.add(newMeme));
  };

  return (
    <form action="" className={styles.form} id="newMemeForm">
      <div className={styles.radioInput_container}>
        <label htmlFor="web">
          <input
            type="radio"
            id="web"
            value="web"
            name="source"
            onChange={handleInput}
            defaultChecked
          />
          Web
        </label>
        <label htmlFor="local">
          <input
            type="radio"
            id="local"
            value="local"
            name="source"
            onChange={handleInput}
          />
          Local
        </label>
      </div>

      <Input
        type={"text"}
        dataTitle={"Put meme title"}
        title={"title"}
        name={"title"}
        handleInput={handleInput}
        value={newMeme.title}
        error={errors.title_error && errors.title_error}
      />

      {newMeme.source === "web" ? (
        <Input
          type={"text"}
          dataTitle={"Put meme src"}
          title={"source"}
          name={"img"}
          handleInput={handleInput}
          value={newMeme.img}
          error={errors.img_error && errors.img_error}
        />
      ) : (
        <Input
          type={"file"}
          dataTitle={"You've added File"}
          title={"source"}
          name={"img"}
          handleInput={handleInput}
          value={newMeme.img}
          error={errors.img_error && errors.img_error}
        />
      )}

      <button className="meme_button" onClick={handleAddButton}>
        Add
      </button>
    </form>
  );
};

export default Form;
