import { Link } from "react-router-dom";
import "./App.css";
import Gallery from "./Components/Carousel/Gallery";

function App() {
    return (
        <main>
            <Gallery />
            <section className="square__container">
                <div className="square square__tl">
                    <h2 className="title square__title tl1">Best Ponchos</h2>
                    <Link to="/shop" className="btn btn__buy sq">
                        Shop Now
                    </Link>
                </div>
                <div className="square square__tr">
                    <h2 className="title square__title">Best Ponchos 2</h2>
                    <Link to="/shop" className="btn btn__buy">
                        Shop Now
                    </Link>
                </div>
                <div className="square square__bl">
                    <h2 className="title square__title">Best Ponchos 3</h2>
                    <Link to="/shop" className="btn btn__buy">
                        Shop Now
                    </Link>
                </div>
                <div className="square square__br">
                    <h2 className="title square__title">Best Ponchos 4</h2>
                    <Link to="/shop" className="btn btn__buy">
                        Shop Now
                    </Link>
                </div>
            </section>
        </main>
    );
}

export default App;
