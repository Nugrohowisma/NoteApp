import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import LoginInput from "../components/LoginInput";
import { login } from "../utils/api";
import { LocaleConsumer } from "../contexts/LocaleContext";

function LoginPage({ loginSuccess }) {
  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <section className="login-page">
            <h4>{locale === "id" ? "Masuk" : "Login"}</h4>
            <LoginInput login={onLogin} />
            <p>
              {locale === "id"
                ? "Belum punya akun? "
                : "Don't have an account? "}
              <Link to="/register" style={{ color: "grey" }}>
                {locale === "id" ? "Daftar" : "SignUp"}
              </Link>
            </p>
          </section>
        );
      }}
    </LocaleConsumer>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
