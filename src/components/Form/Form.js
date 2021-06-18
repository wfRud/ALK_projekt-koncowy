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
  });

  const [errors, setErrors] = useState({});

  const handleInput = (e) =>
    setNewMeme({ ...newMeme, [e.target.name]: e.target.value });

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

    setErrors(newErrors);

    return newErrors;
  };

  const handleAddButton = (e) => {
    e.preventDefault();
    handleValidation();

    !(Object.keys(handleValidation()).length >= 1) &&
      dispatch(listActions.add(newMeme));
  };

  return (
    <form action="" className={styles.form} id="newMemeForm">
      <Input
        dataTitle={"Put meme title"}
        title={"title"}
        name={"title"}
        handleInput={handleInput}
        value={newMeme.title}
        error={errors.title_error && errors.title_error}
      />

      <Input
        dataTitle={"Put meme src"}
        title={"source"}
        name={"img"}
        handleInput={handleInput}
        value={newMeme.img}
        error={errors.img_error && errors.img_error}
      />
      <button className="meme_button" onClick={handleAddButton}>
        Add
      </button>
    </form>
  );
};

export default Form;
