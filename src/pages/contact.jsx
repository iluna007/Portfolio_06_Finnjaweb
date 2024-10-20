import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container-fluid">
        <div
          className="mt-6"
          style={{
            textAlign: "justify",
            paddingTop: "48px",
            paddingBottom: "24px",
            paddingLeft: "32px",
            paddingRight: "32px"
          }}
        >
          <div className="row">
            <div className="col-2"></div>
            <div className="col mt-5 border-bottom">
              <strong>Finnja Wilmer</strong>
              <p>finnja@yahoo.de</p>
              <p>+49 176 12345678</p>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
