import React, { useState, useEffect } from "react";

const styles = {
  root: {
    padding: "1rem",
    width: "20vw",
    height: "100%",
    backgroundColor: "palevioletred",
    zIndex: 2,
    position: "absolute",
    top: 0,
    left: 0,
    border: "none"
  },
  btnCloseSidebar: {
    padding: "0.5rem",
    border: "none"
  }
};

export const Sidebar = props => {
  const { onClick, children } = props;
  return (
    <div style={styles.root}>
      <button style={styles.btnCloseSidebar} onClick={onClick}>
        close
      </button>
      <ul>{children}</ul>
    </div>
  );
};
