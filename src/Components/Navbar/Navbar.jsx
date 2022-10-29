import { useRef } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    const ref = useRef(null);
    const toggleMenu = () => {
        const elm = ref.current;
        elm.classList.toggle("dnone");
    };
    return (
        <div className="menu__bar">
            <button className="toggle__btn" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </button>
            <nav className="navbar dnone" ref={ref}>
                <Link to="/about">About</Link>
                <Link to="/shop">Discover</Link>
                <Link to="/shop/man">For man</Link>
                <Link to="/shop/woman">For Woman</Link>
            </nav>
        </div>
    );
};

export default Navbar;
