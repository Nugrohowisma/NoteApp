import React from "react";
import { Link } from "react-router-dom";
import { FiPlusCircle } from "react-icons/fi";

function AddNav() {
  return (
    <div className="home-action">
      <Link to="/add">
        <button className="action">
          <FiPlusCircle />
        </button>
      </Link>
    </div>
  );
}

export default AddNav;
