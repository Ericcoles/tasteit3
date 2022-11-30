import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Axios from "axios";

// used destructured props

const RecipeCard = ({ name, description, image, country, id }) => {
  const [flag, setFlag] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/No_flag.svg/225px-No_flag.svg.png?20220314051100"
  );

  useEffect(() => {
    Axios.get("https://restcountries.com/v3.1/name/" + country).then((res) =>
      setFlag(res.data[0].flags.svg)
    );
  }, []);

  return (
    <div className="card">
      <img className="cardflag" src={flag} alt="Flag" />
      <img src={image} alt={name} className="cardimage" />
      <div className="cardcontent">
        <h4 className="wordbreak">{name}</h4>
        <p className="wordbreak">{description}</p>
        <NavLink to={`${id}`}>
          <button className="readmore">Read more</button>
        </NavLink>
      </div>
    </div>
  );
};

export default RecipeCard;
