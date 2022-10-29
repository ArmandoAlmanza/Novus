import { Link } from "react-router-dom";
import Gallery from "../Carousel/Gallery";

const Shop = () => {
    return (
        <section>
            <h2 className="subtitle">See our best sellers</h2>
            <Gallery />
            <h2 className="subtitle">
                Customize your experience with clothes for you
            </h2>
            <div className="btn__container">
                <div className="discover__custom forwoman">
                    <p>Search the best clothes for woman</p>
                    <Link
                        to="/shop/woman"
                        className="btn btn__buy btn__discover"
                    >
                        Woman clothes
                    </Link>
                </div>

                <div className="discover__custom forman">
                    <p>Search the best clothes for man</p>
                    <Link to="/shop/man" className="btn btn__buy btn__discover">
                        Men clothes
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Shop;
