import styled from "styled-components"
export default function SignIn(){

    return (
        <Container>
            <Forms>
                <input type="email" placeholder="E-mail"></input>
                <input type="password" placeholder="Senha"></input>
                <button>Entrar</button>
            </Forms>  
        </Container>
    )
}


const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
height: 70vh;
`

const Forms = styled.form`
width: 769px;
display: flex;
flex-direction: column;
align-items: center;

input{
    height: 60px;
    width: 100%;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 12px;
    margin-bottom: 25px;
    display: flex;
    padding: 20px;
}
button{
    width: 180px;
    height: 60px;
    border:none;
    background: #5D9040;
    border-radius: 12px;
    color:#fff;
    font-size: 15px;
    margin-top:60px;
    &:hover {
      cursor: pointer;
      filter: brightness(130%);
    }
}

`