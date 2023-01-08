import React from "react";
import PropType from "prop-types";
import NoteItemBody from "./NoteItemBody";
import DeleteButton from "./DeleteButton";
import ViewButton from "./ViewButton";

function NoteItem({ title, body, createdAt, id, onDelete, onView }) {
  return (
    <div className="List-Item">
      <div className="List-Item-content">
        <NoteItemBody
          title={title}
          createdAt={createdAt}
          body={body.length > 30 ? `${body.substring(0, 30)}...` : body}
        />
        <div className="con">
          <DeleteButton id={id} onDelete={onDelete} />
          <ViewButton id={id} onView={onView} />
        </div>
      </div>
    </div>
  );
}

NoteItem.propType = {
  title: PropType.string.isRequired,
  body: PropType.string.isRequired,
  createdAt: PropType.string.isRequired,
  id: PropType.string.isRequired,
  onDelete: PropType.func.isRequired,
  onView: PropType.func.isRequired,
};

export default NoteItem;
