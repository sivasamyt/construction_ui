import React from "react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import './styles.scss';
import SignupButton from "../../components/signUPButton";
import { signupApi } from "../../api/allApi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




type Props = {};

export const SignUpPage: React.FC = (props: Props) => {
  const [submit, setSubmit] = useState(false);
  const [loading, setloading] = useState(false);
  // const [message, setMessage] = useState("");

  const [pwd, setPwd] = useState("");
  const [cpwd, setCpwd] = useState("");
  const nav = useNavigate();
  const { register, handleSubmit } = useForm();
  const location = useLocation();

  // setMessage(location.state?.message);
  const unLoad = () => {
    setloading(false);
  };
  const message = location.state?.message;

  const load = () => {
    setloading(true);
  };

  const showToastMessage = () => {
    toast.error(message, {
      position: toast.POSITION.TOP_LEFT
    });
  };
  console.log(message);

  useEffect(() => {
    cpwd && cpwd === pwd ? setSubmit(true) : setSubmit(false);
  }, [cpwd, pwd]);

  const onSubmit = async (data: any) => {
    let result = await signupApi(data);
    result.message == 'success' ? nav('/',{state:{message:'SignUp successfully'}}) : nav('/signup', { state: { message: 'Signup Failure' } });
    message && showToastMessage();
  }

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
            onFocus={load}
            className="form-control"
            type="text"
            {...register("Username", {
              onBlur: unLoad,
            })}
          />
        </div>
        <div className="form-group">
          <TextField
            required
            size="small"
            label="Email Id"
            onFocus={load}
            className="form-control"
            type="email"
            {...register("Email", {
              onBlur: unLoad,
            })}
          />
        </div>

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
        <div className="signup_buttons">
          <SignupButton isDisabled={submit} loading={loading} type="submit" />
        </div>
      </form>
    </div>
  )
}
