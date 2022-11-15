const Login = () => {
    return (
        <div className="login-container">
            <form action="" className="form-login">
                <ul className="login-nav">
                    <li className="login-nav__item active2">
                        <a href="#">Sign In</a>
                    </li>
                    <li className="login-nav__item">
                        <a href="#">Sign Up</a>
                    </li>
                </ul>
                <label htmlFor="login-input-user" className="login__label">
                    Username
                </label>
                <input id="login-input-user" className="login__input" type="text" />
                <label htmlFor="login-input-password" className="login__label">
                    Password
                </label>
                <input
                    id="login-input-password"
                    className="login__input"
                    type="password"
                />
                <label htmlFor="login-sign-up" className="login__label--checkbox">
                    <input
                        id="login-sign-up"
                        type="checkbox"
                        className="login__input--checkbox"
                    />
                    Keep me Signed in
                </label>
                <button className="login__submit" disabled>
                    Sign in
                </button>
            </form>
            <a href="#" className="login__forgot">
                Forgot Password?
            </a>
        </div>
    );
};

export default Login;
