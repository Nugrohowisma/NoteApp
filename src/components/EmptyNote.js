import React from "react";
import { LocaleConsumer } from "../contexts/LocaleContext";

function EmptyNote() {
  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <p className="NotFound">
            {locale === "id"
              ? "Ups, Tidak ada daftar catatan :("
              : "Ups, empty note list :("}
          </p>
        );
      }}
    </LocaleConsumer>
  );
}

export default EmptyNote;
