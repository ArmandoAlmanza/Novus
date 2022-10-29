import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
const Gallery = () => {
    const uri =
        "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=763&q=80";
    return (
        <section className="carousel__container">
            <h2 className="subtitle">See our best sellers!</h2>
            <AwesomeSlider infinite  >
                <div className="center">
                    <img
                        src={uri}
                        alt="Image of bolsa"
                        className="carousel__img"
                    />
                    <div className="carousel__text">Bolsa roja divina</div>
                    <div className="carousel__text price">
                        <span>$59.99</span>
                    </div>
                </div>
                <div className="center">
                    <img
                        src={uri}
                        alt="Image of bolsa"
                        className="carousel__img"
                    />
                    <div className="carousel__text">Bolsa roja divina</div>
                    <div className="carousel__text price">
                        <span>$59.99</span>
                    </div>
                </div>

                <div className="center">
                    <img
                        src={uri}
                        alt="Image of bolsa"
                        className="carousel__img"
                    />
                    <div className="carousel__text">Bolsa roja divina</div>
                    <div className="carousel__text price">
                        <span>$59.99</span>
                    </div>
                </div>

                <div className="center">
                    <img
                        src={uri}
                        alt="Image of bolsa"
                        className="carousel__img"
                    />
                    <div className="carousel__text">Bolsa roja divina</div>
                    <div className="carousel__text price">
                        <span>$59.99</span>
                    </div>
                </div>
            </AwesomeSlider>
        </section>
    );
};

export default Gallery;