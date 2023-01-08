import React from "react";
import { addNote } from "../utils/api";
import AddNote from "../components/AddNote";
import HomeNav from "../components/HomeNav";
import { useNavigate } from "react-router-dom";
import { LocaleConsumer } from "../contexts/LocaleContext";

function AddPage() {
  const navigate = useNavigate();

  async function onAddNoteHandler(notes) {
    addNote(notes);
    navigate("/");
  }

  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <section>
            <h4>{locale === "id" ? "Buat" : "Add Note"}</h4>
            <AddNote addNote={onAddNoteHandler} />
            <HomeNav />
          </section>
        );
      }}
    </LocaleConsumer>
  );
}

export default AddPage;
