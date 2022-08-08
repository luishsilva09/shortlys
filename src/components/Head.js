import styled from "styled-components";
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import React from "react";
import UserContext from "../context/UserContext";
export default function Head(){
    const {userData} = React.useContext(UserContext)
    if(userData){
        
    }
    return (
        <>
        <Header>  
            <Text>
                <Link to= "/signin"><h1>Entrar</h1></Link>
                <Link to="/signup"><h2>Cadastre-se</h2></Link>
            </Text> 
        </Header>
        <LogoImg>
           <Link to="/"> <img src={Logo} alt="Logo shortly"/></Link>
        </LogoImg>
        </>
    )
}

const Header = styled.div`
width: 100vw;
height: 100px;
display: flex;
justify-content:right;
padding-right: 90px;
align-items: center;
a{
    text-decoration: none;
    color: black;
    cursor: pointer;
}

`
const Text = styled.div`
width: 200px;
display: flex;
justify-content: space-between;

`
const LogoImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

`