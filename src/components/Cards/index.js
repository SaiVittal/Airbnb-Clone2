import React from "react";
import Card from "./card";
import "./styles.css";
import { list, list2 } from "../../assets/cards-list";

function Cards() {
  return (
    <div className="cards-flex">
      {list.map((card, i) => (
        <Card card={card} key={i} />
      ))}
    </div>
  );
}

export default Cards;
