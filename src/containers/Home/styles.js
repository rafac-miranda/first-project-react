import styled from "styled-components"
import LoginBg from "../../assets/login-bg.svg"

export const Container = styled.div`
background: url('${LoginBg}');
background-size: cover;
height: 100%;
min-height: 100vh;

display: flex;
flex-direction: column;
align-items: center;
gap: 40px;
`;

export const Image = styled.img`
margin-top: 30px;
`;

export const InputLabel = styled.p`
letter-spacing: -0.408;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 22px;
color: #eeeeee;
margin-left: 25px;
`;

export const Input = styled.input`
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;
padding-left: 25px;
margin-bottom: 34px;

width: 342px;
height: 58px;

border: none;
outline: none;

color: #FFFFFF;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 28px;
`;

