import React from "react";
import PropTypes from "prop-types";
import NoteItem from "./NoteItem";
import EmptyNote from "./EmptyNote";

function NoteList({ notes, onDelete }) {
  const NotesList = !notes.length
    ? []
    : notes.filter((notes) => notes.archived === false);
  return (
    <div>
      {NotesList.length === 0 ? (
        <EmptyNote />
      ) : (
        <div className="List-Note">
          {notes.map((notes) => (
            <NoteItem
              key={notes.id}
              id={notes.id}
              onDelete={onDelete}
              {...notes}
            />
          ))}
        </div>
      )}
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NoteList;
