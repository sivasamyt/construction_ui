import React from 'react'
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StyleButton from '../../components/styleButton';
import LoginIcon from "@mui/icons-material/Login";
import { loginApi } from '../../api/allApi';
import { useLocation, useNavigate } from 'react-router-dom';

type Props = {};

export const LoginPage: React.FC = (props: Props) => {
    const { register, handleSubmit } = useForm();
    const nav = useNavigate();
    const location = useLocation();


    const message = location.state?.message;


    const showToastMessage = () => {
        toast.error(message, {
            position: toast.POSITION.TOP_LEFT
        });
    };

    const onSubmit = async (data: any) => {
        const result = await loginApi(data);
        if (result.token) {
            const name=result.user.name;
            localStorage.setItem('token', result.token);
            nav('/', { state: { message: `Welcome ${name}.` } })
        } else {
            nav('/login', { state: { message: 'Login Failed' } });
            showToastMessage();
        }
        console.log(result);


    }

    return (
        <div className="signup_page">
            <button onClick={()=>nav('/')}>home</button>
            <ToastContainer />
            <h1>User Login</h1>
            <form className="signup_form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <TextField
                        required
                        size="small"
                        label="Email Id"
                        className="form-control"
                        type="text"
                        {...register("Email")}
                    />
                </div>

                <div className="form-group">
                    <TextField
                        required
                        size="small"
                        label="Password"
                        className="form-control"
                        type="Password"
                        {...register("Password")}
                    />
                </div>

                <div className="signup_buttons">
                    <StyleButton label='Login' color='green' type='submit' Icon={<LoginIcon />} />
                </div>
            </form>
        </div>
    )
}
