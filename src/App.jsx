import { Link } from "react-router-dom";
import "./App.css";
import AboutInfo from "./Components/About/AboutInfo";
import Gallery from "./Components/Carousel/Gallery";

const products = [
    {
        id: 1,
        title: "Botas chingonas",
    },
    {
        id: 2,
        title: "Ropa Casual",
    },
    {
        id: 3,
        title: "Vestidos bonitos",
    },
    {
        id: 4,
        title: "Botas chingonas",
    },
];

function App() {
    return (
        <main>
            <div>
                <AboutInfo />
            </div>
            <section className="square__container">
                {products.map((product) => {
                    return (
                        <div className={`square square__${product.id}`}>
                            <h2 className="title square__title">
                                {product.title}
                            </h2>
                            <Link to="/shop" className="btn__primary">
                                Shop Now
                            </Link>
                        </div>
                    );
                })}
            </section>
            <Gallery />
        </main>
    );
}

export default App;
