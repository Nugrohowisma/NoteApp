import React from "react";
import { showFormattedDate } from "../utils/index";
import PropTypes from "prop-types";

function NoteItemBody({ title, body, createdAt }) {
  return (
    <div>
      <h3>{title}</h3>
      <p className="date">{showFormattedDate(createdAt)}</p>
      <p className="body-text">{body}</p>
    </div>
  );
}

NoteItemBody.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  createdAt: PropTypes.string,
};

export default NoteItemBody;
