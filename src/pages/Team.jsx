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
        window.location.href = "/Admin";
        break;
      case 2:
        window.location.href = "/hospitalProfile";
        break;
      case 3:
        window.location.href = "/DoctorProfile";
        break;
      case 4:
        window.location.href = "/PatientProfile";
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
              className="col-xl-5 icon-box icon-boxx card requests p-4 py-5 bg-opacity-50 "
              onClick={() => onClick(1)}
            >
              <div className="icon">
                <Icon icon="eos-icons:admin" className="i" />
              </div>
              <h4 className="">Aditya Verma</h4>
              <p className="subb">Developer{" "}
              </p>
            </div>

            <div
              className="col-xl-5 icon-box icon-boxx card requests p-4 py-5 bg-opacity-50 "
              onClick={() => onClick(2)}
            >
              <div className="icon">
                <Icon icon="healthicons:hospital-outline" className="i" />
              </div>
              <h4 className="">Vishal Mohan Nair</h4>
              <p className="subb">Developer{" "}
              </p> 
            </div>

            <div
              className="col-xl-5 icon-box icon-boxx card requests p-4 py-5 bg-opacity-50 "
              onClick={() => onClick(3)}
            >
              <div className="icon">
                <Icon icon="healthicons:doctor-male" className="i" />
              </div>
              <h4 className="">Adityasankar</h4>
              <p className="subb">Developer{" "}
              </p>
            </div>

            <div
              className="col-xl-5 icon-box icon-boxx card requests p-4 py-5 bg-opacity-50 "
              onClick={() => onClick(4)}
            >
              <div className="icon">
                <Icon icon="mdi:patient" className="i" />
              </div>
              <h4 className="">Sahil Adhikari</h4>
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
