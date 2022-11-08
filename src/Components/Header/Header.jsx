import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Modal from "../Modal/Modal";
import Navbar from "../Navbar/Navbar";
const Header = () => {
    const currentPath = useLocation().pathname;
    return (
        <header
            className={currentPath == "/" ? "site__header" : "header__alter"}
        >
            <Modal />
            <div
                className={
                    currentPath == "/"
                        ? "header__content"
                        : "header__content alter"
                }
            >
                <div className="header__right">
                    <div className="logo__container">
                        <Link to="/" className="logo__text">
                            Novus
                        </Link>
                    </div>

                    <Navbar />
                </div>

                <div className="header__left">
                    <div className="group">
                        <FaSearch className="icon" />
                        <input
                            placeholder="Search"
                            type="search"
                            className="input"
                            maxLength="14"
                        />
                    </div>
                    <nav className="navbar navbar__left">
                        <Link to="/">Sign in</Link>
                        <Link to="/" className="bag">
                            Bag (0)
                        </Link>
                    </nav>
                </div>
            </div>

            {currentPath == "/" ? (
                <div className="hero__content">
                    <h2>Novus</h2>
                    <p>Tu estilo no tiene que generar desperdicio</p>
                    <Link to="/shop" className="btn btn__buy">
                        Shop Now
                    </Link>
                </div>
            ) : (
                ""
            )}
        </header>
    );
};

export default Header;
