import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/css/App.css";

const Data = () => {
  const [especs, setEspecs] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://simple.ripley.cl/api/v2/products?format=json&partNumbers=2000379450763"
      )
      .then((res) => {
        const especs = res.data;
        setEspecs(especs);
      });
  }, []);
  return (
    <div className="data-container">
      <button type="button" id="btn">
        Compralo, Ya!
      </button>
    </div>
  );
};

export default Data;
