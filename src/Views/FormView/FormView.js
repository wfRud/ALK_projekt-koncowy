import React from "react";
import Form from "../../components/Form/Form";
import styles from "./FormView.module.scss";

const FormView = () => (
  <div className={styles.container}>
    <div className={styles.text_box}>
      <h2 className={styles.heading}>
        Here you can add new Meme to Regular list.
      </h2>
      <p className={styles.paragraph}>
        Add file from your local space or paste link from web.
      </p>
    </div>
    <Form />
  </div>
);

export default FormView;
