import React, { useEffect, useState } from "react";
import "./Styles.scss";
import image from "../allImages/homePage.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {};

const LandingPage: React.FC = (props: Props) => {
  const nav = useNavigate();
  const location = useLocation();
  //   const [message, setMessage] = useState("");
  //   let message = location.state?.message;

  const showToastMessage = (message: string) => {
    toast.success(message, {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  useEffect(() => {
    // setMessage(location.state?.message);
    let message = location.state?.message;
    // let fn = location.state?.fn;

    // console.log('messagemessage',fn);
    
    message !== "" && showToastMessage(message);
    return () => {
      //   setMessage("");
      message = "";
    };
  }, []);

  const landingPageStyle = {
    backgroundImage: image,
    height: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <>
      {/* <button onClick={()=>nav('/test')}>Test</button> */}
      <ToastContainer />
      <div className="landing_page">
        <div className="home_page" style={landingPageStyle}>
          LandingPage
        </div>
      </div>
    </>
  );
};

export default LandingPage;
