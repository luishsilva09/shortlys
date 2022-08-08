import styled from "styled-components";
import Logo from "../assets/Logo.svg"
export default function Head(){
    return (
        <>
        <Header>  
            <Text>
                <p>Entrar</p>
                <p>Cadastre-se</p>
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