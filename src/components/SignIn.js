import axios from "axios"
import React from "react"
import styled from "styled-components"
import {ThreeDots} from 'react-loader-spinner'
import UserContext from "../context/UserContext"
import { useNavigate } from "react-router-dom"

export default function SignIn(){
    const [load,setLoad] =React.useState(false)
    const {userData,setUserData} = React.useContext(UserContext)
    const [invalidUser,setInvalidUser] = React.useState()
    const [loginData,LoginData] = React.useState({
        email:"",
        password:""
    })
    const navigate = useNavigate()
    function signin(event){
        event.preventDefault()
        setLoad(true)
        const promise = axios.post('https://projeto16-back-shortly.herokuapp.com/signin',loginData)
        promise
            .then((req,res) =>{
                setLoad(false)
                setUserData(req.data)
                navigate("/")
            })
            .catch((res)=>{
                console.log(res.response.data)
                setLoad(false)
                setInvalidUser(res.response.data)
            })
        
    }
    return (
        <>
        <Container>
            <Forms onSubmit={(event) => signin(event)}>
                <input 
                type="email" 
                placeholder="E-mail"
                disabled={load}
                onChange={e => LoginData({...loginData,email: e.target.value})}
                ></input>
                <input 
                type="password" 
                placeholder="Senha"
                disabled={load}
                onChange={e => LoginData({...loginData,password: e.target.value})}
                ></input>
                <button type="submit">{load?  <ThreeDots color="#fff"></ThreeDots>:<p>Entrar</p>}</button>
                {invalidUser? <p>{invalidUser}</p>: <></>}
            </Forms>  
        </Container></>
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
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      cursor: pointer;
      filter: brightness(130%);
    }
}

`