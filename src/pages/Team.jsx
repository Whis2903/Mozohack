import React, { useEffect, useState } from "react";
import MyNav from "../components/MyNav";
import MyFooter from "../components/MyFooter.jsx";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import "../../src/Team.css"


import Web3 from "web3";
import MetaMaskOnboarding from "@metamask/onboarding";
import detectEthereumProvider from "@metamask/detect-provider";

const Team = () => {
  const [isDisabled, setDisabled] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const [personnum, setPersonnum] = useState(null);

  useEffect(() => {
    // Your existing code to detect MetaMask and set accounts
  }, []);

  const onClick = (role) => {
    // Your existing logic for handling different roles
    switch (role) {
      case 1:
        window.location.href = "https://www.linkedin.com/in/aditya-verma-real/";
        break;
      case 2:
        window.location.href = "https://www.linkedin.com/in/vishal-mohan-nair-6130a1177/";
        break;
      case 3:
        window.location.href = "https://www.linkedin.com/in/adityasankar-sengupta/";
        break;
      case 4:
        window.location.href = "https://www.linkedin.com/in/sahil-adhikari-57b445250/";
        break;
      default:
        break;
    }
  };

  return (
    <>
      <nav>
        <MyNav />
      </nav>
      <main>
        <div className="text-center py-2 px-5 mx-5">
          <span className=" mt-5  mx-auto text-center">
            <h2 className="mb-1 p-2 border-2 border-info border-bottom ">
              Our Team
            </h2>
          </span>
          <div className="entity row forms d-flex justify-content-evenly">
            <div
              className="col-xl-5 icon-box icon-boxx card requests p-4 py-5 bg-opacity-50 tbox"
              onClick={() => onClick(1)}
            >
              <div className="icon">
                <img src="https://fortuna-mavericks.vercel.app/static/media/aditya.35e047cdfb4aae45c591.png" className="proff"/>
              </div>
              <h4 className="titlee">Aditya Verma</h4>
              <p className="subb">Developer{" "}
              </p>
            </div>

            <div
              className="col-xl-5 icon-box icon-boxx card requests p-4 py-5 bg-opacity-50 tbox"
              onClick={() => onClick(2)}
            >
             <div className="icon">
                <img src="https://fortuna-mavericks.vercel.app/static/media/vishal.f2ceb959abd147b9442d.png" className="proff"/>
              </div>
              <h4 className="titlee">Vishal Mohan Nair</h4>
              <p className="subb">Developer{" "}
              </p> 
            </div>

            <div
              className="col-xl-5 icon-box icon-boxx card requests p-4 py-5 bg-opacity-50 tbox"
              onClick={() => onClick(3)}
            >
              <div className="icon">
                <img src="https://fortuna-mavericks.vercel.app/static/media/shanky.c5e9564f3c6252f01621.png" className="proff"/>
              </div>
              <h4 className="titlee">Adityasankar</h4>
              <p className="subb">Developer{" "}
              </p>
            </div>

            <div
              className="col-xl-5 icon-box icon-boxx card requests p-4 py-5 bg-opacity-50 tbox"
              onClick={() => onClick(4)}
            >
              <div className="icon">
                <img src="https://fortuna-mavericks.vercel.app/static/media/sahil.af2de5e51f5e5ccaf098.png" className="proff"/>
              </div>
              <h4 className="titlee">Sahil Adhikari</h4>
              <p className="subb">Developer{" "}
              </p>
            </div>
          </div>
        </div>
      </main>

      <MyFooter />
    </>
  );
};

export default Team;
