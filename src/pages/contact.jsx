import React from "react";
import Accordion from "react-bootstrap/Accordion";
import PrivacyPolicy from "../components/PrivacyPolicy";

const Contact = () => {
  return (
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
            <p>
              <strong>Finnja Wilmer</strong>
              <br />
              c/o Custodis
              <br />
              Lehrterstrasse 23
              <br />
              10557 Berlin
              <br />
              Germany
              <br />
              Telephone: +49 177 8598966
              <br />
              Email: finnja.willner@web.de
            </p>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Privacy Policy</Accordion.Header>
                <Accordion.Body>
                  <PrivacyPolicy />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
