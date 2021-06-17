import React from "react";
import styles from "./Input.module.scss";

const Input = ({ dataTitle, title, name, handleInput, error }) => (
  <fieldset className={styles.container}>
    <input
      type="text"
      className={
        error
          ? `${styles.formInput} ${styles.formInput_error}`
          : styles.formInput
      }
      formNoValidate
      name={name}
      required
      onChange={(e) => handleInput(e)}
    />

    <label
      htmlFor=""
      className={styles.formInputLabel}
      data-title={dataTitle}
      title={title}
    ></label>
    {error && <span className={styles.error_message}>{error}</span>}
  </fieldset>
);

export default Input;
