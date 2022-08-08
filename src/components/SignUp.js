import axios from "axios"
import React from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import {ThreeDots} from 'react-loader-spinner'

export default function SignUp(){
    const [invalidUser,setInvalidUser] = React.useState()
    const [load, setLoad] = React.useState(false)
    const [signupData, setSignupData] = React.useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:''
    })
    const navigate = useNavigate()
    function signup(event){
        setLoad(true)
        event.preventDefault()
        const promise = axios.post(`https://projeto16-back-shortly.herokuapp.com/signup`,signupData)
        promise
            .then((req,res) => {
                setLoad(false)
                navigate('/signin')
            })
            .catch((req,res)=>{
                console.log(req.response.data)
                setInvalidUser("Erro")
                setLoad(false)
            })
    }
    return (
        <Container>
        <Forms onSubmit={(event) => signup(event)}>
            <input 
            type="text" 
            placeholder="Nome"
            disabled={load}
            onChange={(e)=> setSignupData({...signupData, name:e.target.value})}
            />
            <input 
            type="Email" 
            placeholder="E-mail"  
            disabled={load}
            onChange={(e)=> setSignupData({...signupData, email:e.target.value})}/>
            
            <input 
            type="password" 
            placeholder="Senha"
            disabled={load}
            onChange={(e)=> setSignupData({...signupData, password:e.target.value})}/>
            <input 
            type="password" 
            placeholder="Confirme senha"
            disabled={load}
            onChange={(e)=> setSignupData({...signupData, confirmPassword:e.target.value})}/>
            <button type="submit" disabled={load}>{load?  <ThreeDots color="#fff"></ThreeDots>:<p>Criar conta</p>}</button>
            {invalidUser? <p>{invalidUser}</p>: <></>}
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
    margin-top: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      cursor: pointer;
      filter: brightness(130%);
    }
}

`