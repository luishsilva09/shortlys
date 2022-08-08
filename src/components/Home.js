import Ranking from "./Ranking";
import styled from "styled-components";
import React from "react";
import UserContext from "../context/UserContext";
import axios from 'axios'
import { FaTrashAlt } from "react-icons/fa";


function ShortenUrls({url,shortUrl,visitCount}){
    return(
        <>
            <Item>
                <p>{url}</p>
                <p>{shortUrl}</p>
                <p>Quantidade de visitantes: {visitCount}</p>
            </Item>
            <Trash><FaTrashAlt></FaTrashAlt></Trash>
        </>
    )
}

export default function Home(){
   // const {userData} = React.useContext(UserContext)
   const userData = '558c23f4-f1ca-4e76-895d-4e350df57149' 
   const [urlsUser, setUrlsUser] = React.useState()
   const [load,setLoad] = React.useState(true)
   const [url,setUrl] = React.useState({
    url:''
   })
    const config = {
        headers: {
          Authorization: `Bearer ${userData}`,
        },
      };

    React.useEffect(()=>{
        updateList()
    },[])
   
    function updateList(){
        const promise = axios.get('https://projeto16-back-shortly.herokuapp.com/users/me',config)
        promise
          .then((req,res)=>{
            setUrlsUser(req.data)
            setLoad(false)
          })
    }
    if(userData){
        function sendUrl(event){
            event.preventDefault()
            const promise = axios.post('https://projeto16-back-shortly.herokuapp.com/urls/shorten',url,config)
            promise.then((req,res)=>{updateList()})
        }
        return (
        <Container>
            <Forms onSubmit={(event) => sendUrl(event)}>
                <input
                    type="text"
                    placeholder='Links que cabem no bolso'
                    onChange={(e) => setUrl({...url,url:e.target.value})}
                ></input>
                <button type='submit'>Encurtar Link</button>
            </Forms>
            {load? <p>carregando</p>: 
            urlsUser.shortenedUrls.map((e,index) => <ShortenUrls url={e.url} shortUrl={e.shortUrl} visitCount={e.visitCount} key={index}/> )}
        </Container>
    )}
    return ( 
        <>
            <Ranking />
            <Text>Crie sua conta para usar nosso serviço!</Text>
        </>)
}

const Container = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
`
const Text = styled.h1`
font-size: 35px;
width: 100%;
align-items: center;
justify-content: center;
display: flex;
margin: 30px;
font-weight: 700;
`
const Item = styled.div`    
    width: 769px;
    height: 60px;
    background: #80CC74;
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 12px 0px 0px 12px;
    display: flex;
    align-items:center;
    justify-content:space-between;
    padding-left:20px ;
    padding-right:20px ;
    color:#fff;
    margin
`
const Trash = styled.div`
    width: 130px;
    height: 60px;
    background: #FFFFFF;
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 0px 12px 12px 0px;
    display: flex;
    align-items:center;
    justify-content:center;
    color:#EA4F4F;
    font-size:30px;
    &:hover {
      cursor: pointer;
      filter: brightness(130%);
    }
`
const Forms = styled.form`
display: flex;
justify-content:space-between;

input{
    height: 60px;
    width: 769px;
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
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      cursor: pointer;
      filter: brightness(130%);
    }
}`