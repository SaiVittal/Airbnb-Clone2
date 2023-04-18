import React, { useState } from "react";
import "./styles.css";
import { LinkSharp } from "@mui/icons-material";
import links from "../../assets/images-links";

function Filter() {
  const [selectedFilter, setselectedFilter] = useState("");

  return (
    <div className="filter-div">
      {links.map((item, i) => (
        <div
          key={i}
          className={`links ${i == selectedFilter && "selected-box"}`}
          onClick={() => setselectedFilter(i)}
        >
          <img src={item.imgSrc} className="links-img" />
          <p
            className={`links-label ${i == selectedFilter && "selected-label"}`}
          >
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Filter;
