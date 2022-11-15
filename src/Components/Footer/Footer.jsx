import {
    FaInstagram,
    FaFacebook,
    FaTwitter,
    FaPinterest,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="site__footer">
            <div>
                <h2 className="subtitle">Thanks for visit us!</h2>
            </div>
            <div className="form__container">
                <h2 className="subtitle">
                    Suscribe to our newsletter for free!!
                </h2>
                <form className="input-group">
                    <input
                        type="email"
                        className="input__mail"
                        id="Email"
                        name="Email"
                        placeholder="uiverse@verse.io"
                        autoComplete="off"
                        require="true"
                    />
                    <input
                        className="button--submit"
                        value="Subscribe"
                        type="submit"
                        id="btn"
                    />
                </form>
            </div>
            <div>
                <h2 className="subtitle">Our social Media</h2>
                <nav className="social">
                    <a href="https://www.instagram.com/susieja1/" className="social__icon" target={"_blank"}>
                        <FaInstagram className="social__red" />
                    </a>
                    <a href="https://twitter.com/JamonSad03" className="social__icon" target={"_blank"}>
                        <FaTwitter className="social__red" />
                    </a>
                    <a href="https://www.pinterest.com.mx/maryaguilar2930/" className="social__icon" target={"_blank"}>
                        <FaPinterest className="social__red" />
                    </a>
                    <a href="https://www.facebook.com/taniaviridiana.martinae" className="social__icon" target={"_blank"}>
                        <FaFacebook className="social__red" />
                    </a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
