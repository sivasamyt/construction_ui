import React from 'react';
import StyleButton from './styleButton';
import { useNavigate } from 'react-router-dom';
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import './componentStyle.scss';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
// import LogoutIcon from '@mui/icons-material/Logout';
// import { Logout } from '@mui/icons-material';




export const Header = () => {

    const nav = useNavigate();

    const loginFn = () => {
        nav('/login');
    }
    const signupFn = () => {
        nav('/signup');
    }
    const logoutFn = () => {
        localStorage.removeItem('token');
        nav('/');
    }

    // const userInfo = () => {
    //     return (
    //     )
    // }

    const token = localStorage.getItem('token');

    return (
        <div className='header'>
            {token == null ?
                <StyleButton label='Login' color='green' handleClick={loginFn} Icon={<LoginIcon />} /> :
                <StyleButton label='Logout' color='red' handleClick={logoutFn} Icon={<LoginIcon />} />
                // <AccountCircleSharpIcon onClick={userInfo} />
            }
            <StyleButton label='Signup' color='blue' handleClick={signupFn} Icon={<HowToRegIcon />} />
        </div>
    )
}
