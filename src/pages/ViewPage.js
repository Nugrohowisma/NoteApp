import React from "react";
import { useParams } from "react-router-dom";
import View from "../components/View";
import PropTypes from "prop-types";
import { getNote } from "../utils/api";

function DetailPageWrapper() {
  const { id } = useParams();
  return <ViewPage id={String(id)} />;
}

class ViewPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: null,
    };
  }

  async componentDidMount() {
    const notes = await getNote(this.props.id);
    this.setState(() => {
      return {
        notes: notes.data,
      };
    });
  }

  render() {
    if (typeof this.state.notes === "undefined") {
      return <p>Note is not found!</p>;
    }

    return (
      <section>
        <View {...this.state.notes} />
      </section>
    );
  }
}

ViewPage.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DetailPageWrapper;
