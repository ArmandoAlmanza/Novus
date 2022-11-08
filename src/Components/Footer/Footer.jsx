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
                    <a href="#" className="social__icon">
                        <FaInstagram className="social__red" />
                    </a>
                    <a href="#" className="social__icon">
                        <FaTwitter className="social__red" />
                    </a>
                    <a href="#" className="social__icon">
                        <FaPinterest className="social__red" />
                    </a>
                    <a href="#" className="social__icon">
                        <FaFacebook className="social__red" />
                    </a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
