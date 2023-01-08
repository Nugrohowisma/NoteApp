import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { LocaleConsumer } from "../contexts/LocaleContext";

function ViewButton({ id }) {
  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <Link style={{ textDecoration: "none" }} to={`/notes/${id}`}>
            <button className="viw">{locale === "id" ? "Buka" : "Open"}</button>
          </Link>
        );
      }}
    </LocaleConsumer>
  );
}

ViewButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ViewButton;
