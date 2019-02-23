import React from "react";
import { formatPrice } from "../helpers";
import PropTypes from "prop-types";

export default class Fish extends React.Component {
  static propTypes = {
    details: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.number
    }),
    addToOrder: PropTypes.func,
    index: PropTypes.string
  };
  render() {
    const { image, name, price, desc, status } = this.props.details;
    const isAvailable = status === "available";
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button
          onClick={() => {
            this.props.addToOrder(this.props.index);
          }}
          disabled={!isAvailable}
        >
          {isAvailable ? "Add To Cart" : "Sold out"}
        </button>
      </li>
    );
  }
}
