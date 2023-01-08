import React from "react";
import PropTypes from "prop-types";
import { LocaleConsumer } from "../contexts/LocaleContext";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onNameChange(e) {
    this.setState(() => {
      return {
        name: e.target.value,
      };
    });
  }

  onEmailChange(e) {
    this.setState(() => {
      return {
        email: e.target.value,
      };
    });
  }

  onPasswordChange(e) {
    this.setState(() => {
      return {
        password: e.target.value,
      };
    });
  }

  onSubmitHandler(e) {
    e.preventDefault();

    this.props.register({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    });
  }

  render() {
    return (
      <LocaleConsumer>
        {({ locale }) => {
          return (
            <section className="new">
              <form onSubmit={this.onSubmitHandler} className="register-input">
                <input
                  type="text"
                  placeholder={locale === "id" ? "Nama" : "Name"}
                  value={this.state.name}
                  onChange={this.onNameChange}
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.onEmailChange}
                />
                <input
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  value={this.state.password}
                  onChange={this.onPasswordChange}
                />
                <div className="con">
                  <button type="submit" className="viw">
                    {locale === "id" ? "Daftar" : "SignUp"}
                  </button>
                </div>
              </form>
            </section>
          );
        }}
      </LocaleConsumer>
    );
  }
}

Register.propTypes = {
  register: PropTypes.func.isRequired,
};

export default Register;
