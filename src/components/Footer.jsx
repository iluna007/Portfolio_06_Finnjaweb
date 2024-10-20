import React from "react";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 text-center">
      <div className="container">
        <footer className="border-top">
          <div className="social-icons">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3 text-secondary"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://www.vimeo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3 text-secondary"
            >
              <i className="bi bi-vimeo"></i>
            </a>
            <a
              href="https://www.behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3 text-secondary"
            >
              <i className="bi bi-behance"></i>
            </a>
            <a
              href="mailto:example@example.com"
              className="me-3 text-secondary"
            >
              <i className="bi bi-envelope"></i>
            </a>
          </div>
          <p className="text-body-secondary">
            © 2024 Finnja Wilmer. All rights reserved. Web design by: Iker Luna
            Prototype V1.0
          </p>
        </footer>
      </div>
    </footer>
  );
};

export default Footer;
