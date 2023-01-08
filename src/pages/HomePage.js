import React from "react";
import { useSearchParams } from "react-router-dom";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import AddNav from "../components/AddNav";
import PropTypes from "prop-types";
import { deleteNote, getActiveNotes } from "../utils/api";
import { LocaleConsumer } from "../contexts/LocaleContext";

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get("keyword");

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      keyword: props.defaultKeyword || "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  async componentDidMount() {
    const { data } = await getActiveNotes();
    this.setState(() => {
      return {
        notes: data,
      };
    });
  }

  async onDeleteHandler(id) {
    await deleteNote(id);
    const { data } = await getActiveNotes();
    this.setState(() => {
      return {
        notes: data,
      };
    });
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });

    this.props.keywordChange(keyword);
  }

  render() {
    const notes = this.state.notes.filter((notes) => {
      return notes.title
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });

    return (
      <LocaleConsumer>
        {({ locale }) => {
          return (
            <section>
              <h4>{locale === "id" ? "Daftar" : "Note List"}</h4>
              <SearchBar
                keyword={this.state.keyword}
                keywordChange={this.onKeywordChangeHandler}
              />
              <NoteList notes={notes} onDelete={this.onDeleteHandler} />
              <AddNav />
            </section>
          );
        }}
      </LocaleConsumer>
    );
  }
}

HomePage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};

export default HomePageWrapper;
