import { Link } from "react-router-dom";
import Carousel from "../Carousel/Carousel";

const Shop = () => {
    return (
        <section>
            <h2 className="subtitle">See our best sellers</h2>
            <Carousel />
            <h2 className="subtitle">
                Customize your experience with clothes for you
            </h2>
            <div className="btn__container">
                <div className="discover__custom forwoman">
                    <p>Search the best clothes for woman</p>
                    <Link
                        href="/shop/woman"
                        className="btn btn__buy btn__discover"
                    >
                        Woman clothes
                    </Link>
                </div>

                <div className="discover__custom forman">
                    <p>Search the best clothes for man</p>
                    <Link href="/shop/man" className="btn btn__buy btn__discover">
                        Men clothes
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Shop;