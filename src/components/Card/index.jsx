import axios from "axios";
import React from "react";
import "./style.css";
import Alien from "../../assets/icons/alien.svg";
import Batimento from "../../assets/icons/batimento.svg";
import Planeta from "../../assets/icons/planeta.svg";

export const Card = ({ image, name, species, status, location }) => {
  return (
    <div className="card-characters">
      <img src={image} alt="" />
      <h3>{name}</h3>
      <div className="description-characters">
        <ul>
          <li>
            <img src={Alien} alt="" />
            {species}
          </li>
          <li>
            <img src={Batimento} alt="" />
            {status}
          </li>
          <li>
            <img src={Planeta} alt="" />
            {location}
          </li>
        </ul>
      </div>
    </div>
  );
};