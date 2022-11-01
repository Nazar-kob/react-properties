import React from "react";
import style from "./Spinner.module.css";

const Spinner = () => {
  return (
    <>
      <div className={style.spinner_roll}>
        <div className={style.spinner}>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Spinner;
