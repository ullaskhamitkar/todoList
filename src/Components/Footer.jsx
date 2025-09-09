import React from "react";

export const Footer = () => {
  let footerStyle = {
    position: "relative",
    top: "50vh",
    width: "100%",
  };
  return (
    <footer className="bg-dark text-light my-2" style={footerStyle}>
      <p className="text-center py-3 ">Copyright &copy; MyTodosList.com</p>
    </footer>
  );
};
