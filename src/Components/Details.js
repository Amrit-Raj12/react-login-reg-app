import React from "react";
import { Link } from "react-router-dom";
import BusinessIcon from "@mui/icons-material/Business";
import PinDropIcon from "@mui/icons-material/PinDrop";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";

const Details = () => {
  return (
    <div>
      <div className="center">
        <div className="property-card">
          <Link to="#">
            <div className="property-image" style={{ opacity: "0.8" }}>
              <div className="property-image-title">
                <h5> Company Inforamations </h5>
                <div
                  className="details_box"
                  style={{
                    position: "absolute",
                    bottom: "30px",
                    color: "blue",
                    textAlign: "justify",
                  }}
                >
                  <ul style={{ listStyle: "none" }}>
                    <li style={{ marginLeft: "-40px" }}>
                      <p style={{ background: "#EFD3E8" }}>
                        <span style={{ fontWeight: "bold" }}>
                          <BusinessIcon />
                          :-{" "}
                        </span>{" "}
                        Geeksynergy Technologies Pvt Ltd
                      </p>
                    </li>
                    <li style={{ marginLeft: "-40px" }}>
                      <p style={{ background: "#EFD3E8" }}>
                        <span style={{ fontWeight: "bold", float: "left" }}>
                          <PinDropIcon />
                          :-{" "}
                        </span>{" "}
                        Sanjayanagar, Bengaluru-56
                      </p>
                    </li>
                    <li style={{ marginLeft: "-40px" }}>
                      <p style={{ background: "#EFD3E8" }}>
                        <span style={{ fontWeight: "bold", float: "left" }}>
                          <PhoneAndroidIcon />
                          :-{" "}
                        </span>{" "}
                        XXXXXXXXX09
                      </p>
                    </li>
                    <li style={{ marginLeft: "-40px" }}>
                      <p style={{ background: "#EFD3E8" }}>
                        <span style={{ fontWeight: "bold", float: "left" }}>
                          <EmailIcon />
                          :-{" "}
                        </span>{" "}
                        XXXXXX@gmail.com
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Link>
          <div className="property-description">
            <ul style={{ listStyle: "none" }}>
              <li style={{ marginLeft: "-30px" }}>
                <p>
                  <span style={{ fontWeight: "bold" }}>Company: </span>{" "}
                  Geeksynergy Technologies Pvt Ltd
                </p>
              </li>
              <li style={{ marginLeft: "-30px" }}>
                <p>
                  <span style={{ fontWeight: "bold" }}>Address: </span>{" "}
                  Sanjayanagar, Bengaluru-56
                </p>
              </li>
              <li style={{ marginLeft: "-30px" }}>
                <p>
                  <span style={{ fontWeight: "bold" }}>Phone: </span>{" "}
                  XXXXXXXXX09
                </p>
              </li>
              <li style={{ marginLeft: "-30px" }}>
                <p>
                  <span style={{ fontWeight: "bold" }}>Email: </span>{" "}
                  XXXXXX@gmail.com
                </p>
              </li>
            </ul>
          </div>
          <Link to="#">
            <div className="property-social-icons"></div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
