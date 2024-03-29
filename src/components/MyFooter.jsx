import React from "react";
import "../../src/Footer.css"
import { Link } from "react-router-dom";

const MyFooter = () => {
  return (
    <div className="rou" id="footer">
      <div className=" copy-right">
        <div className="icons-container">
          
        </div>
        <div className=" text-center small py-3 footer">
          © Copyright
          <Link target="_blank" rel="noreferrer" to="https://github.com/Whis2903/Mozohack" className="fs-6 fw-bold text-info ms-1 footer">
          MediVault
          </Link>
          . Team Mavericks
        </div>

      </div>
    </div>
  );
};
export default MyFooter;
