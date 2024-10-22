import React from "react";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 text-center">
      <div className="container">
        <footer className="border-top">
          <div className="social-icons">
            <a
              href="https://www.instagram.com/finnjawillner/"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3 text-secondary"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://vimeo.com/user18575069"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3 text-secondary"
            >
              <i className="bi bi-vimeo"></i>
            </a>

            <a
              href="mailto:example@example.com"
              className="me-3 text-secondary"
            >
              <i className="bi bi-envelope"></i>
            </a>
          </div>
          <p className="text-body-secondary">
            © 2024 Finnja Willner. All rights reserved. Web design by: Iker Luna
            Prototype V1.0
          </p>
        </footer>
      </div>
    </footer>
  );
};

export default Footer;
