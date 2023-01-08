import React from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterInput from "../components/RegisterInput";
import { register } from "../utils/api";
import { LocaleConsumer } from "../contexts/LocaleContext";

function RegisterPage() {
  const navigate = useNavigate();

  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate("/");
    }
  }

  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <section className="register-page">
            <h4>{locale === "id" ? "Daftar" : "SignUp"}</h4>
            <RegisterInput register={onRegisterHandler} />
            <p>
              {locale === "id" ? "Kembali ke " : "Back to "}
              <Link to="/" style={{ color: "grey" }}>
                {locale === "id" ? "Masuk" : "Login"}
              </Link>
            </p>
          </section>
        );
      }}
    </LocaleConsumer>
  );
}

export default RegisterPage;
