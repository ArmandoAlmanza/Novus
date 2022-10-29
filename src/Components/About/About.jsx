import { FaEye, FaBook, FaHandshake } from "react-icons/fa";

const About = () => {
    return (
        <section className="about__container">
            <h2 className="subtitle">¿Que es Novus?</h2>
            <div className="about__info">
                <img
                    src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt="about image"
                    className="about__image"
                />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nihil molestiae ratione error mollitia. Architecto facere
                    fugiat atque veniam autem, corporis, fugit voluptate ullam
                    doloremque repellendus ab accusamus. Natus, mollitia
                    tempore. Facilis aliquid ducimus repellendus nam illo
                    explicabo, vero minima nesciunt exercitationem non dolorum
                    aspernatur soluta aperiam laudantium perferendis officia
                    perspiciatis, harum, nihil natus! Expedita ipsum natus
                    cupiditate odit ab id. Iste, a ipsa! Necessitatibus laborum
                    dolor rerum nostrum veritatis. Sapiente fugiat voluptatem
                    cumque excepturi distinctio. Natus aliquam sequi deserunt
                    explicabo maxime, numquam non ut consequatur, quas voluptas
                    minus ipsa distinctio!
                </p>
            </div>

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
                        <FaBook className="objective__icon"/>
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
