import React from "react";
import PropTypes from "prop-types";
import { LocaleConsumer } from "../contexts/LocaleContext";

class AddNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <LocaleConsumer>
        {({ locale }) => {
          return (
            <section className="new">
              <form onSubmit={this.onSubmitEventHandler}>
                <input
                  type="text"
                  placeholder={locale === "id" ? "Judul" : "Title"}
                  value={this.state.title}
                  onChange={this.onTitleChangeEventHandler}
                />
                <textarea
                  type="text"
                  placeholder={
                    locale === "id"
                      ? "Tulis Catatan disini"
                      : "Write Notes in here"
                  }
                  value={this.state.body}
                  onChange={this.onBodyChangeEventHandler}
                ></textarea>
                <div className="con">
                  <button type="submit" className="viw">
                    {locale === "id" ? "Simpan" : "Save"}
                  </button>
                </div>
              </form>
            </section>
          );
        }}
      </LocaleConsumer>
    );
  }
}

AddNote.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default AddNote;
