import styled from "styled-components";
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
export default function Head(){
    return (
        <>
        <Header>  
            <Text>
                <Link to= "signin"><p>Entrar</p></Link>
                <Link to="signup"><p>Cadastre-se</p></Link>
            </Text> 
        </Header>
        <LogoImg>
            <img src={Logo} alt="Logo shortly"/>
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