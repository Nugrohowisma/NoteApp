import React from "react";
import PropType from "prop-types";
import NoteItemBody from "./NoteItemBody";
import HomeNav from "../components/HomeNav";

function View({ title, body, createdAt }) {
  return (
    <div>
      <h4>View</h4>
      <div className="view-note">
        <div className="content">
          <NoteItemBody title={title} createdAt={createdAt} body={body} />
        </div>
      </div>
      <HomeNav />
    </div>
  );
}

View.propType = {
  title: PropType.string.isRequired,
  body: PropType.string.isRequired,
  createdAt: PropType.string.isRequired,
};

export default View;
