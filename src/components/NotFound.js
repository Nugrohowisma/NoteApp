import React from "react";
import HomeNav from "./HomeNav";
import { LocaleConsumer } from "../contexts/LocaleContext";

function NotFound() {
  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <>
            <p className="NotFound">
              {locale === "id"
                ? "Maaf, sepertinya halaman yang Anda minta tidak benar :("
                : "Sorry, it looks like the page you requested is not correct :("}
            </p>
            <HomeNav />
          </>
        );
      }}
    </LocaleConsumer>
  );
}

export default NotFound;
