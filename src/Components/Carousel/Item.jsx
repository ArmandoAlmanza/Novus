import React from "react";

const ItemCarousel = ({ uri, title, price }) => {
    return (
        <div className="center">
            <img src={uri} alt="Image of bolsa" className="carousel__img" />
            <div className="carousel__text">{title}</div>
            <div className="carousel__text price">
                <span>${price}</span>
            </div>
        </div>
    );
};

export default ItemCarousel;
