import React from "react";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";

function HomeNav() {
  return (
    <div className="home-action">
      <Link to="/">
        <button className="action">
          <FiHome />
        </button>
      </Link>
    </div>
  );
}

export default HomeNav;
