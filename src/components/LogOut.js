import React from "react";
import PropTypes from "prop-types";
import { FiLogOut } from "react-icons/fi";

function LogOut({ logout }) {
  return (
    <div>
      <button onClick={logout} className="out">
        <FiLogOut />
      </button>
    </div>
  );
}

LogOut.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default LogOut;
