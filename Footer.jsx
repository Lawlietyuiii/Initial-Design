import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <h2>Thanks for visiting!</h2>
      <p>© {new Date().getFullYear()} My Website. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
