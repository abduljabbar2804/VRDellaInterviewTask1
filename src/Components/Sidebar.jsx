import React from "react";

function Sidebar() {
  return (
    <>
      <div class="sidebar">
        <div className="menu-section">
          <h1>Logo</h1>
          <a class="active" href="#home">
            Dashboard
          </a>
          <a href="#news">Status</a>
          <a href="#contact">Reports</a>
          <a href="#about">Notification</a>
        </div>
        <div className="logout-section">
          <button>Logout</button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
