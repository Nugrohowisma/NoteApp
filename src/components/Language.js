import React from "react";
import { LocaleConsumer } from "../contexts/LocaleContext";

function Language() {
  return (
    <LocaleConsumer>
      {({ locale, toggleLocale }) => {
        return (
          <button onClick={toggleLocale} className="theme">
            {locale === "id" ? "id" : "en"}
          </button>
        );
      }}
    </LocaleConsumer>
  );
}

export default Language;
