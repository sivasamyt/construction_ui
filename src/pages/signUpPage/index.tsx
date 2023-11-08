import React from "react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import "./styles.scss";
import SignupButton from "../../components/signUPButton";
import { otpApi, signupApi } from "../../api/allApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {};

export const SignUpPage: React.FC = (props: Props) => {
  const [submit, setSubmit] = useState(false);
  const [loading, setloading] = useState(false);
  const [otpEnter, setOtpEnter] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [otpNumber, setOtpNumber] = useState("");
  const [emailId, setEmailId] = useState("");
  const [message, setMessage] = useState("");
  const [pwd, setPwd] = useState("");
  const [cpwd, setCpwd] = useState("");
  const nav = useNavigate();
  const { register, handleSubmit } = useForm();
  const location = useLocation();

  // setMessage(location.state?.message);
  const unLoad = () => {
    setloading(false);
  };
  // setMessage(location.state?.message);

  const load = () => {
    setloading(true);
  };

  const verifyButton = () => {
    setIsDisabled(true);
  };

  const showToastMessage = (showMessage: string, type: string) => {
    // const msgType={(type==="success")? ("toast.success":"toast.error");}
    if (type === "success") {
      toast.success(showMessage, {
        position: toast.POSITION.TOP_LEFT,
      });
    } else {
      toast.error(showMessage, {
        position: toast.POSITION.TOP_LEFT,
      });
    }
  };

  useEffect(() => {
    otpEnter && cpwd && cpwd === pwd ? setSubmit(true) : setSubmit(false);
  }, [cpwd, pwd, otpEnter]);

  const otpVerify = async (emailId: string) => {
    if (emailId !== "") {
      setOtpEnter(true);
      let result = await otpApi(emailId);
      showToastMessage(result.message, "success");
    } else {
      showToastMessage("EmailID Should Not be Empty", "error");
    }
  };

  const onSubmit = async (data: any) => {
    let result = await signupApi(data);
    if(result.message === "success"){
      // showToastMessage("SARan", "");
      nav("/", { state: { message: `Welcome ${data.Username}`} })
    }else {
      showToastMessage(result.message, "error");
    }
    
  };

  return (
    <div className="signup_page">
      <ToastContainer />
      <h1>User Signup Form</h1>
      <form className="signup_form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <TextField
            required
            size="small"
            label="Username"
            className="form-control"
            type="text"
            {...register("Username")}
          />
        </div>
        <div className="form-group">
          <TextField
            required
            size="small"
            label="Email Id"
            onFocus={verifyButton}
            className="form-control"
            type="email"
            {...register("Email")}
            onChange={(e) => setEmailId(e.target.value)}
          />
          {isDisabled &&
            <button
              type="button"
              onClick={() => otpVerify(emailId)}>verify</button>}
        </div>
        {/* {isDisabled &&
            <button
              type="button"
              onClick={()=>otpVerify(emailId)}>verify</button>} */}

        <div className="form-group">
          <TextField
            required
            size="small"
            label="Password"
            onFocus={load}
            className="form-control"
            type="Password"
            {...register("Password", {
              onBlur: unLoad,
            })}
            onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <TextField
            required
            size="small"
            label="confirm Password"
            onFocus={load}
            className="form-control"
            type="text"
            onBlur={unLoad}
            onChange={(e) => {
              setCpwd(e.target.value);
            }}
          />
        </div>

        {otpEnter && (
          <div className="form-group">
            <TextField
              required
              size="small"
              label="Otp here"
              className="form-control"
              type="number"
              {...register("otpNumber")}
            />
          </div>
        )}

        <div className="signup_buttons">
          <SignupButton isDisabled={submit} loading={loading} type="submit" />
        </div>
      </form>
    </div>
  );
};
