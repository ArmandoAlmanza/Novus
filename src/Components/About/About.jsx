import { FaEye, FaBook, FaHandshake } from "react-icons/fa";
import AboutInfo from "./AboutInfo";

const About = () => {
    return (
        <section className="about__container">
            <AboutInfo />

            <main className="about__main">
                <h2 className="subtitle">Nuestros objetivos</h2>
                <div className="objectives__container">
                    <div className="objective vision">
                        <span className="card__title ">Vision</span>
                        <FaEye className="objective__icon" />
                        <p>
                            Buscamos hacer ropa de la mejor calidad, cómoda y
                            estética, ayudando al planeta a no crear más
                            desperdicio y usando material reciclado para darle
                            una segunda vida a estos materiales.
                        </p>
                    </div>
                    <div className="objective secure">
                        <span className="card__title ">Objetivo</span>
                        <FaBook className="objective__icon" />
                        <p>
                            Buscamos hacer ropa de la mejor calidad, cómoda y
                            estética, ayudando al planeta a no crear más
                            desperdicio y usando material reciclado para darle
                            una segunda vida a estos materiales.
                        </p>
                    </div>
                    <div className="objective mision">
                        <span className="card__title ">Mision</span>
                        <FaHandshake className="objective__icon" />
                        <p>
                            Buscamos hacer ropa de la mejor calidad, cómoda y
                            estética, ayudando al planeta a no crear más
                            desperdicio y usando material reciclado para darle
                            una segunda vida a estos materiales.
                        </p>
                    </div>
                </div>
            </main>
        </section>
    );
};

export default About;
