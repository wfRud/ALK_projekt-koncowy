import React from "react";
import styles from "./Input.module.scss";

const Input = ({ type, dataTitle, title, name, handleInput, error }) => {
  return type === "text" ? (
    <fieldset className={styles.container}>
      <input
        type={type}
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
  ) : (
    <fieldset className={styles.container}>
      <input
        id="file"
        type={type}
        className={`${styles.formInput} ${styles.formInput_file}`}
        formNoValidate
        name={name}
        required
        onChange={(e) => handleInput(e)}
      />
      <label
        htmlFor="file"
        className={styles.formInputLabel}
        data-title={dataTitle}
      >
        Choose File
      </label>
      {error && <span className={styles.error_message}>{error}</span>}
    </fieldset>
  );
};

export default Input;
