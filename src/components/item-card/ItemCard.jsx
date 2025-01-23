import { useState } from "react";
import "./ItemCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ClimbingLineChart from "../mini-charts/product-chart/ProductChart";

const ItemCard = ({ title, image, price, rating }) => {
  const [newPrice, setNewPrice] = useState(price);
  const [hovered, setHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [display, setDisplay] = useState(false);

  const toggleDisplay = () => {
    setDisplay((prev) => !prev);
  };


  const baseStyle = {
    backgroundImage: image ? `url(${image})` : "none",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain",
    width: "120px",
    zIndex: 1,
    transition: "all 0.3s ease",
  };

  const enlargedItem = {
    ...baseStyle,
    width: "160px",
  };

  return (
    <>
    <div
      className="item"
      style={{ marginRight: "50px", marginBottom: "100px" }}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      <div className="discount-area" style={hovered ? enlargedItem : baseStyle}>
        {hovered && <button className="add-item" onClick={toggleDisplay}>Item Detail</button>}
      </div>
      <div className="item-info">
        <h4 >{title.split(" ").slice(0,9).join(" ")}</h4>
        <p style={{ color: "red" }}>
          ${parseFloat(newPrice).toFixed(2)}
          <span
            style={{
              color: "grey",
              textDecoration: "line-through",
              marginLeft: "10px",
            }}
          >
          </span>
        </p>
        <div className="stars">
          {[...Array(5)].map((_, index) => (
            <FontAwesomeIcon key={index} className="star" icon={faStar} />
          ))}
          <p style={{ color: "grey" }}>({rating})</p>
        </div>
      </div>
    </div>
      {
        display && (
          <div className="absolute translate-x-[2rem] translate-y-[-20rem] z-[5] bg-blue-100">
            <ClimbingLineChart/>
          </div>
        )
      }
      </>
  );
};

export default ItemCard;