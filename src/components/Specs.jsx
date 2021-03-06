import React, { useState, useEffect } from "react";
import axios from "axios";

const Axios = () => {
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
    <div>
      {especs.map((item) => (
        <div className="Img-container">
          <h1 key={item.uniqueID}>{item.name}</h1>
          <hr></hr>
        </div>
      ))}
    </div>
  );
};

export default Axios;
