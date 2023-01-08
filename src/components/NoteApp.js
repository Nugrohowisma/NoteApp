import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AddPage from "../pages/AddPage";
import ViewPage from "../pages/ViewPage";
import NotFound from "./NotFound";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import LogOut from "./LogOut";
import { getUserLogged, putAccessToken } from "../utils/api";
import { ThemeProvider } from "../contexts/ThemeContext";
import ToggleTheme from "./ToggleTheme";
import { LocaleProvider } from "../contexts/LocaleContext";
import Language from "./Language";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
      initializing: true,
      theme: localStorage.getItem("theme") || "light",
      toggleTheme: () => {
        this.setState((prevState) => {
          const newTheme = prevState.theme === "light" ? "dark" : "light";
          localStorage.setItem("theme", newTheme);
          return {
            theme: newTheme,
          };
        });
      },
      localeContext: {
        locale: localStorage.getItem("locale") || "id",
        toggleLocale: () => {
          this.setState((prevState) => {
            const newLocale =
              prevState.localeContext.locale === "id" ? "en" : "id";
            localStorage.setItem("locale", newLocale);
            return {
              localeContext: {
                ...prevState.localeContext,
                locale: newLocale,
              },
            };
          });
        },
      },
    };

    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  componentDidUpdate(prevState) {
    if (prevState.theme !== this.state.theme) {
      document.documentElement.setAttribute("data-theme", this.state.theme);
    }
  }

  componentDidMount() {
    document.documentElement.setAttribute("data-theme", this.state.theme);
  }

  async componentDidMount() {
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
        initializing: false,
      };
    });
  }

  async onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
      };
    });
  }

  onLogout() {
    this.setState(() => {
      return {
        authedUser: null,
      };
    });

    putAccessToken("");
  }

  render() {
    if (this.state.initializing) {
      return null;
    }

    if (this.state.authedUser === null) {
      return (
        <ThemeProvider value={this.state}>
          <LocaleProvider value={this.state.localeContext}>
            <nav>
              <h1 className="logo">
                {this.state.localeContext.locale === "id"
                  ? "Aplikasi Catatan"
                  : "Note App"}
              </h1>
              <Language />
              <ToggleTheme />
            </nav>
            <main>
              <Routes>
                <Route
                  path="/*"
                  element={<LoginPage loginSuccess={this.onLoginSuccess} />}
                />
                <Route path="/register" element={<RegisterPage />} />
              </Routes>
            </main>
          </LocaleProvider>
        </ThemeProvider>
      );
    }

    return (
      <ThemeProvider value={this.state}>
        <LocaleProvider value={this.state.localeContext}>
          <nav>
            <h1 className="logo">
              {this.state.localeContext.locale === "id"
                ? "Aplikasi Catatan"
                : "Note App"}
            </h1>
            <Language />
            <ToggleTheme />
            <LogOut logout={this.onLogout} />
          </nav>
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/add" element={<AddPage />} />
              <Route path="/notes/:id" element={<ViewPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <footer className="foot">
            <p>
              {this.state.localeContext.locale === "id"
                ? "Ikuti Saya : "
                : "Follow me : "}
              <a
                href="https://www.instagram.com/irpan_1905/"
                style={{ textDecoration: "none", color: "grey" }}
              >
                @Irpan1905
              </a>
            </p>
          </footer>
        </LocaleProvider>
      </ThemeProvider>
    );
  }
}

export default NoteApp;

// return (
//   <div>
//     <nav>
//       <h1 className="logo">Note!</h1>
//     </nav>
//     <main>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/add" element={<AddPage />} />
//         <Route path="/notes/:id" element={<ViewPage />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </main>
//   </div>
// );
