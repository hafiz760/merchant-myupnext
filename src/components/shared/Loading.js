import React from "react";
import Loader from "../../assets/img/loader/Background.svg";
import "../../assets/css/loading.css";

const Loading = () => {
  return (
    <div className="loader">
      <img src={Loader} alt="Loader" className="loading" />
    </div>
  );
};

export default Loading;
