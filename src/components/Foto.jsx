import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/css/slider.css";
import "../assets/css/desc.css";

const Foto = () => {
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
    <div className="img-container">
      <div className="main-container">
        {especs.map((img) => (
          <img id="main-img" key={img.uniqueID} src={img.fullImage} />
        ))}
      </div>
      <div className="img-preview">
        {especs.map((imgs) => (
          <img id="preview" src={imgs.images[1]} />
        ))}
        {especs.map((imgs) => (
          <img id="preview" src={imgs.images[2]} />
        ))}
        {especs.map((imgs) => (
          <img id="preview" src={imgs.images[3]} />
        ))}
        {especs.map((imgs) => (
          <img id="preview" src={imgs.images[4]} />
        ))}
      </div>
      <div className="container">
        <div>
          <ul>
            {
                especs.map((price) => (
                    <li id="offert" key={price.uniqueID}>Precio oferta :{price.prices.listPrice}</li>
                ))
            }
            {
                especs.map((price) => (
                    <li key={price.uniqueID}>Precio oferta:..............{price.prices.offerPrice}</li>
                ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Foto;
